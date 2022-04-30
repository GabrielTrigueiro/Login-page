import React from "react";

import {CardBackground, BotaoText, LoginBotao ,Background , Container, Tittle, LoginCard, Text, InputEmail, TopLogin, BottonLogin , InputCamp} from './styles';

export default function Login(){
    return(
        <Background>
            <Container>
                <CardBackground>
                    <LoginCard>
                            <TopLogin>
                                <Tittle>Bem vindo</Tittle>
                            </TopLogin>

                            <BottonLogin>
                                <InputCamp>
                                    <Text>Email</Text>
                                    <InputEmail type="text" placeholder="e-mail" />
                                </InputCamp>
                                <InputCamp>
                                    <Text>Senha</Text>
                                    <InputEmail type="password" placeholder="senha" />
                                </InputCamp>
                            </BottonLogin>

                            <LoginBotao>
                                <BotaoText>Entrar</BotaoText>
                            </LoginBotao>
                        </LoginCard>
                </CardBackground>
            </Container>
        </Background>    
    );
}