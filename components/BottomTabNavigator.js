import { BottomNavigation, BottomNavigationAction  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HomeIcon from '@mui/icons-material/Home';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

export default function  BottomTabNavigator(){
   
    return(
        <BottomNavigation
            showLabels
        >

  <BottomNavigationAction label="Home" icon={<HomeIcon />} />
  <BottomNavigationAction label="Club LA NACION" icon={<CreditCardIcon />} />
  <BottomNavigationAction label="Mi Cuenta" icon={<ChatBubbleOutlineIcon />} />
  <BottomNavigationAction label="Menu" icon={<MenuIcon />} />

</BottomNavigation>
    )
}
