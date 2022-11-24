import { Button, SafeAreaView, Text } from 'react-native'
import React from 'react'

const Feed = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Feed</Text>
      <Button onPress={()=>navigation.navigate('Home')} title='Go to Home page'/>
    </SafeAreaView>
  )
}

export default Feed