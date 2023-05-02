import styled from "styled-components/native";

export const StyleContainer = styled.SafeAreaView`
    background-color: #1C1B1B;
    flex: 1;
    align-items: center;
    padding: 36px 14px 0 14px;
`

export const StyleStackNavigatior= styled.View`
    margin-top: 20px;
    width: 100%;
`

export const StyleStackNavigatiorIcon = styled.TouchableOpacity`
    position: absolute;
    
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    justify-content: center;
    width: 32px;
    height: 32px;
    padding-left: 3px;

    background-color: rgba(255, 255, 255, 0.05);;
    border-radius: 32px;
`

export const StyleStackNavigatiorLogo= styled.View`
  margin-top: 111px;
  width: 100%;

  align-items: center;
`

export const StyleTitle = styled.Text `
    margin-top: 55px;
    
    font-size: 26px;
    font-weight: 700;
    line-height: 41px;
    text-transform: capitalize;

    color: #F2F2F2;
`

export const StyleDescription = styled.Text`
    margin-top: 21px;
    font-size: 17px;
    line-height: 23px;
    text-align: center;

    color: #A0A0A0;
`

export const StyleContainerButton = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    margin-top: 30px;
`

export const StyleContainerButtonRegister = styled.TouchableOpacity`
    background-color: #42C83C;
    border-radius: 30px;
    padding: 25px 30px;
`

export const StyleContainerButtonText = styled.Text`
    color: #FFF;
    font-size: 19px;
`

export const StyleImgBille = styled.Image`
    width: 332px;
    height: 454px;
    position: absolute;

    z-index: -3;

    bottom: 0;
    left: 0
`