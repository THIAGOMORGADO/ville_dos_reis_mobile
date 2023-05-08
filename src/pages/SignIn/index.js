import React, { useState, useEffect } from "react";
import { StatusBar, View, KeyboardAvoidingView, Platform } from "react-native";

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

export default function SignIn() {
  return (
    
      <Container>
        <StatusBar barStyle={"light-content"} />
        
        <Header>
          <Title>Aplicativo de Pedidos</Title>
          <Logo source={require("../../../assets/logo.png")} />
          <SubTitle>Cemiterio e crematorio</SubTitle>
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
              />
              <InputText
                name="lock"
                size={24}
                color="#000"
                placeholder="Senha"
                secureTextEntry={true}
                keyboardAppearance="dark"
              />
              <ButtonArea>
                <Button>
                  <LabelButton>Entra</LabelButton>
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
