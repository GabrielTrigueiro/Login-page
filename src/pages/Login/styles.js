import React from "react";
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

import { TouchableOpacity } from "react-native-gesture-handler";

export const Background = ({children}) => {
    return(
        <LinearGradient
            colors={['#464769', '#1b1A1f']}
            style={{flex:1,}}>
            {children}
        </LinearGradient>
    )
}

export const CardBackground = ({children}) => {
    return(
        <LinearGradient
            colors={['#00d4ff', '#00265b']}>
            {children}
        </LinearGradient>
    )
}

export const Container = styled.View`
    flex:1;
    align-items:center;
    justify-content:center;
`;
export const LoginCard = styled.View`
    height:300px;
    width:300px;
    padding: 30px;
    border-radius:5px;
`;
export const TopLogin = styled.View`
    flex:1;
    margin-bottom:5px;
    align-items:center;
`;
export const Tittle = styled.Text`
    color:#322b37;
    font-size:30px;
    font-weight:bold;
`;
export const BottonLogin = styled.View`
    flex:4;
    margin-bottom:10px;
`;
export const InputCamp = styled.View`
    margin-bottom:5px;
`;
export const Text = styled.Text`
    color:#322b37;
    font-weight:bold;
`;
export const InputEmail = styled.TextInput`
    font-size: 13px;
    background: #edf5ff;
    border: none;
    border-radius: 3px;
    margin-bottom:5px;
`;
export const LoginBotao = styled.TouchableOpacity`
    flex:1;
    background:#edf5ff;
    align-items:center;
    justify-content:center;
    border-radius: 3px;
`;
export const BotaoText = styled.Text`

`;