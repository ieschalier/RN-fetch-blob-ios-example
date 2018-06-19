import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FetchBlob from 'react-native-fetch-blob'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{FetchBlob.fs.dirs.DocumentDir}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
