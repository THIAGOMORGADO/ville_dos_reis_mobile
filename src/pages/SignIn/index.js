import React, { useState, useEffect, useContext } from "react";
import { StatusBar, View, KeyboardAvoidingView, Platform } from "react-native";

import { useNavigation } from "@react-navigation/native";

import api from '../../services/api';

import {
  Container,
  Body,
  Header,
  Logo,
  Title,
  SubTitle,
  Footer,
  Content,
  FormArea,
  ButtonArea,
  Button,
  LabelButton,
  Rodape,
  Area01,
  Area02,
  Area03,
  InforArea,
  Info,
} from "./styles";
import InputText from "../../components/Input";
import { AuthContext } from "../../contexts/auth";


export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {signIn} = useContext(AuthContext);

  function handleLogin() {
    signIn(email, password)
  }

  return (
      <Container>
        <StatusBar barStyle={"light-content"} />       
        <Header>
          <Title>Aplicativo de Pedidos</Title>
          <Logo source={require("../../../assets/logo.png")} />
          <SubTitle>Cemiterio e crematório</SubTitle>
          <Footer>Valle do Reis</Footer>
        </Header>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Body>
          <Content>
            <FormArea>
              <InputText
                name="user"
                size={24}
                color="#000"
                placeholder="e-mail"
                keyboardAppearance="dark"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(text) => setEmail(text)}
                
              />
              <InputText
                name="lock"
                size={24}
                color="#000"
                placeholder="Senha"
                secureTextEntry={true}
                keyboardAppearance="dark"
                onChangeText={(text) => setPassword(text)}              
              />
              <ButtonArea>
                <Button onPress={handleLogin}>
                  <LabelButton>Entrar</LabelButton>
                </Button>
              </ButtonArea>
            </FormArea>
          </Content>
        </Body>
        </KeyboardAvoidingView>
        <Rodape>
          <Area01 />
          <Area02 />
          <Area03 />
        </Rodape>
        <InforArea>
          <Info>Aqui entra infrmaçoes do desemvolvedor da app</Info>
        </InforArea>
      </Container>
    
  );
}
