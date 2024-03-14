import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ onPress, title, yellow }) => {

    const buttonStyle = [styles.button, yellow ? styles.yellowButton : null];

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3b3b3b',
    margin: 10,
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  yellowButton: {
    backgroundColor: '#FFBF00',
  },
  text: {
    fontSize: 40,
    color: 'white'
  },
});

export default Button;

