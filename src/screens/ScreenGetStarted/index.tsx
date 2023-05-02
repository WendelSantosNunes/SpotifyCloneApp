import { StyleContainer, StyleInitialImage, StyleView, StyleTitle, StyleDescription, StyleTouchableOpacity, StyleTouchableOpacityText } from './styled';

// Imagens
import ImgDefault from '../../assets/bille.png'
import ImgLogo from '../../assets/spotify.svg'

// Hook
import { useNavigation } from '@react-navigation/native';

export default function ScreenGetStarted() {
  const navigation = useNavigation()

  function handleStart(){
    navigation.navigate('ScreenRegistrationOrLogin')
  }

  return (
    <StyleContainer>
      <StyleInitialImage
        source={ImgDefault}
      />

      <ImgLogo style={{ marginTop: 37 }} width={ 196 } height={ 59 }/> 
     
      <StyleView>

        <StyleTitle>
          Enjoy listening to music
        </StyleTitle>

        <StyleDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis enim purus sed phasellus. Cursus ornare id scelerisque aliquam.
        </StyleDescription>
     
        <StyleTouchableOpacity onPress={handleStart}>
          <StyleTouchableOpacityText>Get started</StyleTouchableOpacityText>
        </StyleTouchableOpacity>
     </StyleView>

    </StyleContainer>
  );
}