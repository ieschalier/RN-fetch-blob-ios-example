import React from 'react'
import { StyleSheet, Text, Dimensions, View } from 'react-native'

import FetchBlob from 'react-native-fetch-blob'
import Pdf from 'react-native-pdf'

export default class App extends React.Component {
  render() {
    const source = {
      uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
      cache: true,
    }

    return (
      <View style={styles.container}>
        <Text>{FetchBlob.fs.dirs.DocumentDir}</Text>
        <Pdf
          source={source}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`number of pages: ${numberOfPages}`)
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`current page: ${page}`)
          }}
          onError={error => {
            console.log(error)
          }}
          style={{
            flex: 1,
            width: Dimensions.get('window').width,
          }}
        />
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
