import React from 'react';
import { Button, StyleSheet, Text, View, TextInput, Image } from 'react-native';

export interface WelcomeData {
  name: string,
  enthusiasmLevel?: number;
}

const WelcomeComponent: React.FC<WelcomeData> = (props: any) => {
  const [name, setName] = React.useState(
    props.name
  );
  const [enthusiasmLevel, setEnthusiasmLevel] = React.useState(
    props.enthusiasmLevel
  );

  const image = require('./assets/bottom_gif.gif');

  const onIncrement = () =>
    setEnthusiasmLevel((enthusiasmLevel || 0) + 1);
  const onDecrement = () =>
    setEnthusiasmLevel((enthusiasmLevel || 0) - 1);
  
  const onDataTextChange = (data: string) =>
    setName(data);

  const getExclamationMarks = (numChars: number) =>
    Array(numChars + 1).join('!');
  return (
    <View style={styles.root}>
      <Image source={image} style={styles.topSide} />
      <Text style={styles.greeting}>
        Hello{' '}
        {name + getExclamationMarks(enthusiasmLevel || 0)}
      </Text>
      <TextInput 
      value={name}
      placeholder={'Type here'}
      placeholderTextColor={'grey'}
      style={styles.textbox} 
      onChangeText={(e: string)=> { onDataTextChange(e)}}/>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button
            title="-"
            onPress={onDecrement}
            accessibilityLabel="decrement"
            color="red"
          />
        </View>
        <View style={styles.button}>
          <Button
            title="+"
            onPress={onIncrement}
            accessibilityLabel="increment"
            color="blue"
          />
        </View>
      </View>
    </View>
  );

}
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'center'
  },
  buttons: {
    flexDirection: 'row',
    minHeight: 70,
    alignItems: 'stretch',
    alignSelf: 'center',
    borderWidth: 5
  },
  button: {
    flex: 1,
    paddingVertical: 0
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold'
  },
  textbox: {
    borderColor: 'grey',
    borderWidth: 0.3,
    height: 40,
    width: '80%',
    fontSize: 13,
    fontWeight: '600'
},
topSide: {
  alignSelf: 'center',
  height: 100,
  width: 100,
  zIndex: 1,
},
});
export default WelcomeComponent;
