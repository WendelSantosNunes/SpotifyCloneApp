import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screen = 
// Navigator = 
const { Navigator, Screen } = createNativeStackNavigator();

// Components
import ScreenGetStarted from '../screens/ScreenGetStarted';
import ScreenRegistrationOrLogin from '../screens/ScreenRegistrationOrLogin';
import ScreenSignIn from '../screens/ScreenSignIn'

// Geralmente, é bom separa as rotas. Alguns exemplos são o admiRotas, UsurárioLogadoRotas, etc
export function StackRoutes(){
    return (
        <Navigator>
            <Screen 
                name='ScreenGestStartd'
                component={ScreenGetStarted}
                options={{
                    headerShown: false
                }}
            />
            <Screen 
                name='ScreenRegistrationOrLogin'
                component={ScreenRegistrationOrLogin}
                options={{
                    headerShown: false
                }}
            />
            <Screen 
                name='ScreenSignIn'
                component={ScreenSignIn}
                options={{
                    headerShown: false
                }}
            /> 
        </Navigator>
    )
}