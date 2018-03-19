import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; //tempat import

export default class App extends React.Component { //extends pewarisan
  render() {
    return ( //mengeluarkan apa yang dibuat
      <View style={styles.containerMain}>
        <View style={styles.box1}>
          <Text style={styles.text}>Ini Header</Text>
        </View>
        <View style={styles.box2}>
            <Text style={{ padding: 10, fontSize: 35, textAlign: 'center' }} > Slider </Text>
        </View>
        <View style={styles.box3}>
          <View style={styles.button}><Text>1</Text></View>
          <View style={styles.button}><Text>2</Text></View>
          <View style={styles.button}><Text>3</Text></View>
          <View style={styles.button}><Text>4</Text></View>
        </View>
        <View style={styles.box4}>
          <View style={styles.button}><Text>5</Text></View>
          <View style={styles.button}><Text>6</Text></View>
          <View style={styles.button}><Text>7</Text></View>
          <View style={styles.button}><Text>8</Text></View>
        </View>
        <View style={styles.box5}>
          <Text style={{ padding: 10, fontSize: 12, textAlign: 'center' }} > #JaenKuliahPTI </Text>
        </View>
      </View>
    );
  }
}

  const styles = StyleSheet.create({
    containerMain: {
      backgroundColor: '#E8EAF6',
      flex: 1,
      flexDirection: 'column'
    },
    box1: {
      flex: 1,
      backgroundColor: '#00ACC1',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    box2: {
      flex: 2,
      backgroundColor: '#BBDEFB',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    box3: {
      flex: 1,
      backgroundColor: '#00ACC1',
      marginTop: 9,
      marginLeft: 9,
      marginRight: 9,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    box4: {
      flex: 1,
      backgroundColor: '#00ACC1',
      marginLeft: 9,
      marginRight: 9,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    button: {
      height: 50,
      width: 50,
      backgroundColor: '#B3E5FC',
      justifyContent: 'center',
      alignItems: 'center',
    },
    box5: {
      flex: 0.7,
      backgroundColor: '#00ACC1',
      alignItems: 'center',
      margin: 9,
      justifyContent: 'space-around'
    },

    text: {
      fontSize: 25
    },
  });
