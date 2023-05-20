import React, { useEffect, useContext } from 'react'
import { View, Text } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import { AuthContext } from '../../contexts/auth';

export default function Home() {
  const {user} = useContext(AuthContext);

  return (
    <SafeAreaView>
      <View>
        <Text>Nome: {user.token}</Text>
        <Text>User: {user.email}</Text>

      </View>
    </SafeAreaView>
  )
}