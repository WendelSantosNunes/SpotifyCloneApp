import { TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Estilos
import { 
    StyleContainer, 
    StyleStackNavigatior, 
    StyleStackNavigatiorIcon, 
    StyleStackNavigatiorLogo,
    StyleTitle,
    StyleDescription,
    StyleContainerButton,
    StyleContainerButtonRegister,
    StyleContainerButtonText,
    StyleImgBille,
} from './styled';

// Imagens
import Spotify from '../../assets/spotify.svg'
import Imgbille from '../../assets/bille2.png'
import ImgEfeito1 from '../../assets/efeito1.svg'
import ImgEfeito2 from '../../assets/efeito2.svg'

// Hooks
import { useNavigation } from '@react-navigation/native';

export default function ScreenRegistrationOrLogin() {
    const navigation = useNavigation()
    
    function handlePreviousScreen(){
        navigation.navigate('ScreenGestStartd')
    }

    function handleScreenSingIn(){
        navigation.navigate('ScreenSignIn')
    }

    return (
        <StyleContainer>  
            <ImgEfeito1 style={{position: 'absolute', top: 0, right: -80}} width={ 314 }/>
            <StyleStackNavigatior>
                <StyleStackNavigatiorIcon onPress={handlePreviousScreen}>
                    <Ionicons name="chevron-back-outline" size={24} color="white"/>
                </StyleStackNavigatiorIcon>
            </StyleStackNavigatior>

            <StyleStackNavigatiorLogo>
                <Spotify  width={ 235 } height={ 71 }/> 
            </StyleStackNavigatiorLogo>

            <StyleTitle>
                Enjoy listening to music  
            </StyleTitle>  

            <StyleDescription>
                Spotify is a proprietary Swedish audio streaming and media services provider 
            </StyleDescription>            

            <StyleContainerButton>
                <StyleContainerButtonRegister>
                    <StyleContainerButtonText>Register</StyleContainerButtonText>
                </StyleContainerButtonRegister>

                <TouchableOpacity onPress={handleScreenSingIn}>
                    <StyleContainerButtonText>Sign in</StyleContainerButtonText>
                </TouchableOpacity>
            </StyleContainerButton>

            <StyleImgBille source={Imgbille} />

            <ImgEfeito2 style={{position: 'absolute', bottom: -50, right: -140}} width={ 407 } />
        </StyleContainer>
    )
}