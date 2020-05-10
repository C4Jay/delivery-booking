import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import landingScreen from '../screens/landingscreen';
import listScreen from '../screens/listscreen';
import mapScreen from '../screens/mapscreen';
import bookingscreen from '../screens/bookingscreen';

const Delivernav = createStackNavigator({
    Makereq: landingScreen,
    List: listScreen,
    Mapview: mapScreen,
    Checkout: bookingscreen
},{
    defaultNavigationOptions : {
        headerStyle: {
            backgroundColor: /* '#f4511e' */ Platform.OS === 'android' ? /* '#d303fc' */'yellow' : '#d303fc',
          },
          headerTintColor: 'black',
          headerTitleStyle: { 
          },
          headerTitleAlign: 'center'
         
    }
})

export default createAppContainer(Delivernav);