import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; //tempat import

export default class App extends React.Component { //extends pewarisan
  render() {
    return ( //mengeluarkan apa yang dibuat
      <View style={styles.containerMain}>
        <View style={styles.box1}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text}>A</Text>
          <Text style={styles.text}>B</Text>
          <Text style={styles.text}>C</Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.text}>3</Text>
        </View>
      </View>
    );
  }
}

  const styles = StyleSheet.create({
    containerMain: {
      backgroundColor: 'blue',
      flex: 1,
      flexDirection: 'column'
    },
    box1: {
      flex: 1,
      backgroundColor: 'green',
    },
    box2: {
      flex: 2,
      backgroundColor: 'yellow',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    box3: {
      flex: 1,
      backgroundColor: 'red',
    },
    text: {
      fontSize: 50
    },
  });
