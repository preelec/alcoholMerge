#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiManager.h>

int Dir1Pin_A = D3; // L298N pin 1 아두이노와 모터드라이버 연결
int Dir2Pin_A = D4; // L298N pin 2
int SpeedPin_A = SCL;
int infrared = D6;
bool end = true;
//감지가 안되면 true임;;

int val = 0;
float maxDrink = 0.0;
bool isHalf = true;
float cnt = 0.0;

WiFiClient client;
const char *serverUrl = "http://192.168.151.160:3001/send-data";

void setup() {
  Serial.begin(115200);

  pinMode(Dir1Pin_A, OUTPUT);
  pinMode(Dir2Pin_A, OUTPUT);
  pinMode(infrared, INPUT);

  WiFiManager wifiManager;
  wifiManager.autoConnect("AutoConnectAP");

  if(!isConnected()){
    Serial.println("disconnected");
  }

  Serial.println("Connected to WiFi");
}

void loop() {

  val++; //알코올 센서, 잔량 보냄 
  if(val>=100) val = 0;
  httpRequest(val);

  digitalWrite(Dir1Pin_A, LOW);
  digitalWrite(Dir2Pin_A, LOW);
  analogWrite(SpeedPin_A, 0);

  while(end){
    if(digitalRead(infrared)) end = false;
    Serial.println("take out the cup");
    //0.5잔만 할수 있을때 다른게 출력되야 하지만 이게 계속 출력되는 문제 존재
  }

  if(cnt < maxDrink && !digitalRead(infrared) && !end) pump();
  else{
    if(cnt >= maxDrink) Serial.println("maxDrink is over");
  }
}

void pump(){
  end = true;
  if(isHalf){
    Serial.println("half mode start");
    cnt += 0.5;
    digitalWrite(Dir1Pin_A, LOW);
    digitalWrite(Dir2Pin_A, HIGH);
    analogWrite(SpeedPin_A, 255);
    delay(14000);
  }
  else{
    if(cnt+1 > maxDrink){
      Serial.println("can't one");
      return;
    }
    Serial.println("one mode start");
    cnt += 1;
    digitalWrite(Dir1Pin_A, LOW); // control the motor direction 모터방향설정
    digitalWrite(Dir2Pin_A, HIGH);
    analogWrite(SpeedPin_A, 255);
    delay(28000);
  }
}

void httpRequest(int val) {
  HTTPClient http;
  http.begin(client, serverUrl);  // Pass the WiFiClient instance

  http.addHeader("Content-Type", "application/x-www-form-urlencoded");
  String postData = "val=" + String(val);
  int httpResponseCode = http.POST(postData); //서버로부터 값을 보냄

  if (httpResponseCode == HTTP_CODE_OK) {
    String payload = http.getString(); //서버로부터 값을 받음
    payloadMapping(payload);
  } else {
    Serial.print("Error on HTTP request. Response code: ");
    Serial.println(httpResponseCode);
  }

  http.end();
}

void payloadMapping(const String& payload){
  const char* payloadStr = payload.c_str();

  const char* drinkKey = "\"drink\":\"";
  const char* drinkStart = strstr(payloadStr, drinkKey);
  if (drinkStart != NULL) {
    drinkStart += strlen(drinkKey);
    char* drinkEnd = strchr(drinkStart, '\"');
    if (drinkEnd != NULL) {
      char drinkValueStr[20]; // 적절한 크기로 조절 가능
      strncpy(drinkValueStr, drinkStart, drinkEnd - drinkStart);
      maxDrink = atof(drinkValueStr);
    }
  }

  const char* isHalfKey = "\"isHalf\":";
  const char* isHalfStart = strstr(payloadStr, isHalfKey);
  if (isHalfStart != NULL) {
    isHalfStart += strlen(isHalfKey);
    char* isHalfEnd;
    // 정수값을 찾기 위해 숫자 또는 '-' 찾기
    int isHalfValue = strtol(isHalfStart, &isHalfEnd, 10);
    if(isHalfValue==1) isHalf = true;
    else isHalf = false;
  }

  //Serial.println(maxDrink);
  //Serial.println(isHalf);
}

bool isConnected(){
  if(WiFi.status() != WL_CONNECTED || WiFi.localIP().toString() == "0.0.0.0" || WiFi.localIP().toString() == "192.168.4.1"){
    return false;
  }
  return true;
}