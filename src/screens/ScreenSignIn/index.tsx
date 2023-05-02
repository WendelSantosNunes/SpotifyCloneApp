import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


// Estilos
import { 
    StyleContainer, 
    StyleStackNavigatior, 
    StyleStackNavigatiorIcon, 
    StyleStackNavigatiorLogo,
    StyleTitle,
    StyleSupport,
    StyleSupportLink,
    StyleInputEmail,
    StyleViewPassword
} from './style';

// Imagens
import Spotify from '../../assets/spotify.svg'

// Hooks
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function ScreenSignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigation()

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
      };
    
    function handlePreviousSscreen(){
        navigation.navigate('ScreenRegistrationOrLogin')
    }

    return (
        <StyleContainer>  
            <StyleStackNavigatior>
                <StyleStackNavigatiorIcon onPress={handlePreviousSscreen}>
                    <Ionicons name="chevron-back-outline" size={24} color="white"/>
                </StyleStackNavigatiorIcon>
                <StyleStackNavigatiorLogo style={{alignItems: 'center'}}>
                    <Spotify  width={ 108 } height={ 33 }/> 
                </StyleStackNavigatiorLogo>
            </StyleStackNavigatior>

            <StyleTitle>
                Sign in    
            </StyleTitle>            

            <StyleSupport>
                If you need any support <StyleSupportLink>click here</StyleSupportLink>
            </StyleSupport>
            
            <StyleInputEmail
                placeholder='Enter Username Or Email'
                placeholderTextColor="#A7A7A7"
            >
            </StyleInputEmail>
            
            <StyleViewPassword>
                <TextInput
                    // onChangeText={props.onChangeText}
                    style={{ flex: 1 }}
                    secureTextEntry={!showPassword}
                    placeholder="Password"
                    placeholderTextColor="#A7A7A7"
                />
                <TouchableOpacity onPress={toggleShowPassword}>
                    <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={24} color="#A7A7A7"/>
                </TouchableOpacity>
            </StyleViewPassword>
        </StyleContainer>
    )
}