import styled from "styled-components/native";

export const StyleContainer = styled.SafeAreaView`
    background-color: #1C1B1B;
    flex: 1;
    align-items: center;
    padding: 36px 14px 0 14px;
`

export const StyleStackNavigatior= styled.View`
    flex-direction: row;
    align-items: center;

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
    padding-left: 3px;

    background-color: rgba(255, 255, 255, 0.08);;
    border-radius: 32px;
`

export const StyleStackNavigatiorLogo= styled.View`
  width: 100%;
  text-align: center;
`

export const StyleTitle = styled.Text `
    margin-top: 80px;
    
    font-size: 30px;
    font-weight: 700;
    line-height: 41px;
    text-transform: capitalize;

    color: #F2F2F2;
`

export const StyleSupport = styled.Text`
    color: #E1E1E1;

    margin-top: 22px;
    font-size: 12px;
`

export const StyleSupportLink = styled.Text`
    color: #38B432;
`

export const StyleInputEmail = styled.TextInput`
    margin-top: 38px;
    
    width: 95%;
    max-Width: 95%;
    
    padding: 29px 0 29px 27px;
    
    color: #A7A7A7;
    text-transform: capitalize;
    border: 1px solid #A7A7A7;
    border-radius: 30px;
`

export const StyleViewPassword = styled.View`
    margin-top: 16px;
    
    width: 95%;
    max-Width: 95%;
    
    padding: 29px 27px 29px 27px;
    
    text-transform: capitalize;
    border: 1px solid #A7A7A7;
    border-radius: 30px;

    flex-direction: row;
    justify-content: space-between;
`