import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import { Icon, IconButton } from '@mui/material';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import EggIcon from '@mui/icons-material/Egg';
import CloseIcon from '@mui/icons-material/Close';
import { useInView } from 'react-intersection-observer';
import HotelIcon from '@mui/icons-material/Hotel';
// import LoginSuccess from '../LoginSuccess'
import HiveIcon from '@mui/icons-material/Hive';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import NoDrinksIcon from '@mui/icons-material/NoDrinks';
import CoffeeIcon from '@mui/icons-material/Coffee';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import SportsBarIcon from '@mui/icons-material/SportsBar';
const SemiTips = ({ alcoholPercent, handleClose2 }) => {
    // 클릭 이벤트 핸들러 함수 정의
    const handleIconButtonClick = () => {
      handleClose2();
    }; 
  
    const [ref, inView] = useInView();
  
    const stylemodal = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };
  
  return (
    <div style={{position:'relative'}}>
      
    <List sx={{ position:'realative',overflow:'scroll',maxHeight:'600px' ,width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
      
      <ListItem alignItems="flex-start">
      <Icon>
                <LocalDrinkIcon/>
              </Icon>
        <ListItemText
          primary="물,이온음료"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                
              </Typography>
              {"-알코올 분해가 빨라지고 배출을 빠르게 해준다."}
            </React.Fragment>
          }
          
        />
      </ListItem>
      <IconButton style={{position:'fixed',right:'3px' ,top:'10px'}} onClick={handleIconButtonClick} aria-label="delete" size="small">
       <CloseIcon  fontSize="inherit" />
       </IconButton>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
          <Icon>
            <SmokeFreeIcon/>
          </Icon>
        <ListItemText
          primary="흡연 하지 않기"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                -
              </Typography>
              {"흡연은 알콜이 간장에서 해독되는 것을 저해하며 동시에 발암가능성을 높인다."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <Icon>
          <EggIcon/>
        </Icon>
        <ListItemText
          primary="계란"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                -
              </Typography>
              {'간에서 알코올 분해할 때 필수성분인 메타오닌 이 풍부하게 함유되어 있어 알코올 분해량 증가'}
            </React.Fragment>
          }
        />
      </ListItem><Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <Icon>
          <HotelIcon/>
        </Icon>
        <ListItemText
          primary="숙면"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                -
              </Typography>
              {'수면을 할때는 간이 다른활동없이 알코올 해독에 집중하므로 술기운을 없애는데 유용하다.'}
            </React.Fragment>
          }
        />
      </ListItem><Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <Icon>
          <HiveIcon/>
        </Icon>
        <ListItemText
          primary="꿀"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                -
              </Typography>
              {'꿀에 포함된 과당은 혈당회복을 도와주고 포함된 칼륨은 숙취로 인한 통증을 덜어준다. '}
            </React.Fragment>
          }
        />
      </ListItem><Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <Icon>
          <WaterDropOutlinedIcon/>
        </Icon>
        <ListItemText
          primary="땀흘리기"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                -
              </Typography>
              {'흡수된 알코올의 10%는 땀과 호흡으로 배출되기에 적당한운동이나 목욕을 추천 드립니다.'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <Icon>
          <SoupKitchenIcon/>
        </Icon>
        <ListItemText
          primary="콩나물국,북엇국"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                -
              </Typography>
              {'콩나물국은 숙취의 주범인 아세트알데하이드를 제거해주고,북엇국은 간의 해독작용을 돕고 보호해주는 효능이있다.'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <Icon>
          <NoDrinksIcon/>
        </Icon>
        <ListItemText
          primary="절주"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
              {'사실 가장 좋은것은 절주입니다.자기 자신의 주량에 맞게 먹는다면 즐겁고 안전하게 술을 즐길 수 있습니다.'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <Icon>
          <RamenDiningIcon/>
        </Icon>
        <ListItemText
          primary="라면은 금물"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              
              </Typography>
              {'간단하고 얼큰해서 많이들 찾는 라면은 사실 염분이 강해 위에 큰 부담이 갑니다. 자극적인것보다는 시원한 국들로 해장을 하시는게 좋습니다.'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <Icon>
          <CoffeeIcon/>
        </Icon>
        <ListItemText
          primary="커피는 금물"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                -
              </Typography>
              {'수면을 취하는동안 간이 해독을 하기위해 일하므로 피곤하실테지만 카페인이 알코올 분해에 필요한 수분마저 내보내기에 커피는 마시지 않는것이 좋습니다'}
            </React.Fragment>
          }
        />
      </ListItem>
      
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <Icon>
          <SportsBarIcon/>
        </Icon>
        <ListItemText
          primary="절주 캠페인"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                
              </Typography>
              {'1. 남에게 술을 강요하지 않는다'}
              <br/>
              {'2. 원샷을 하지 않는다.'}
              <br/>
              {'3. 폭탄주를 마시지 않는다.'}
              <br/>
              {'4.음주 후 3일은 금주한다.'}
            </React.Fragment>
          }
        />
      </ListItem>
      
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        
        <ListItemText
          primary=""
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                -------가장 좋은것은 자신에게 맞게 섭취하는것입니다.---
              </Typography>
              {'----------------------'}
              <br/>
            </React.Fragment>
          }
        />
      </ListItem>
      
      </List>

          </div>
  )
}

export default SemiTips;