import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {
  const route = useRoute()
  const token = route?.params?.token  ?? ''
  const user = route?.params?.user  ?? ''

  console.log(user)

  async function getUser() {

  }
  getUser()
  

  return (
    <SafeAreaView>
      <View>
        <Text>Nome: {token}</Text>
        <Text>User: {user.name}</Text>

      </View>
    </SafeAreaView>
  )
}