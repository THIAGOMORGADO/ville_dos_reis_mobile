import React from 'react';
import {Feather} from '@expo/vector-icons';

import { Container, Input } from './styles.js'

export default function InputText({ ...props }) {
 return (
  <Container>
    <Feather {...props} />
    <Input
      {...props}
    />
  </Container>
   
  );
}

