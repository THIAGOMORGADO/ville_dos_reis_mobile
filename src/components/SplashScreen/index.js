import React from 'react';
import {ActivityIndicator, StatusBar} from 'react-native'

import {Container, Logo, LogoTitle, SubTitle} from './styles'

export default function SplashScreen() {
 return (
   <Container>
      <StatusBar barStyle='light-content'/>
      <Logo source={require('../../../assets/logo.png')}/>
      <LogoTitle>Vale</LogoTitle>
      <SubTitle>Dos Reis</SubTitle>
      <ActivityIndicator size="large" color="#C99F6C" />
   </Container>
  );
}