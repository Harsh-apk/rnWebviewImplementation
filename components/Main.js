import React from 'react'
import { Text, View } from 'react-native'
import WebView from 'react-native-webview'
const Main = ({url}) => {
  return (
    <WebView className="my-20 " source={{ uri: url }} />
  )
}

export default Main
