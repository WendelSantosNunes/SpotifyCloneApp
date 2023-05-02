import styled from "styled-components/native";

export const StyleContainer = styled.SafeAreaView`
    background-color: #0D0C0C;
    flex: 1;
    align-items: center;
    padding: 36px 14px 0 14px;
`

export const StyleInitialImage = styled.Image`
    position: absolute;
`

export const StyleView = styled.View`
    top: 300px;
    text-align: center;
`

export const StyleTitle = styled.Text`
    width: 100%;
    max-width: 284px;
    
    color: #DADADA;
    
    font-weight: 700;
    font-size: 25px;
    line-height: 34px;

    text-transform: capitalize;
`

export const StyleDescription = styled.Text`
    width: 100%;
    max-width: 297px;
    margin-top: 21px;

    color: #797979;
    
    font-weight: 400;
    font-size: 17px;
    line-height: 23px;
    text-align: center;
`

export const StyleTouchableOpacity = styled.TouchableOpacity`
    max-width: 300px;
    height: 92px;
    margin-top: 37px;

    background-color: #42C83C;
    border-radius: 30px;

    align-items: center;
    justify-content: center;
`

export const StyleTouchableOpacityText = styled.Text`
    color: #f6f6f6;
    font-weight: 700;
    font-size: 21px;
    line-height: 29.7px;
    text-transform: capitalize;
`