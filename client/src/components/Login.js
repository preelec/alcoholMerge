

const Login = () => {
    const REST_API_KEY='c6da7ce3118630b84f078a0aafca2ece';
    // const REDIRECT_URI='http://localhost:3000/Redirection';
    const REDIRECT_URI='http://localhost:3000/Redirection'
    // const REDIRECT_URI=`${process.env.REACT_APP_KAKAO_REDIRECT_URL}`
    // 해당 링크에서 인가코드 발급
    // client_id는 kakao developers에서 내 애플리케이션 추가했을때 생기는 REST_API키를 넣어줌
    // Redirect URI는 카카오 로그인 메뉴에 들어가서 추가를 해준다.
    // 이떄 경로 설정은 백엔드와 협의해서 맞춤
    // 대신!! Redirect URI는 반드시 프론트에서 접근할 수 있는 Hoist로 지정 (localhost:3000)

    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

    const loginHandler = () => {
      window.location.href = kakaoURL
    };
  
    return (
      <>
      <button type='button' onClick={loginHandler}>
        카카오 로그인
      </button>
      </>
    );
  };

export default Login;