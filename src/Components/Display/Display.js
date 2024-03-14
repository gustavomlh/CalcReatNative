import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Display = ({ value, textColor }) => {
  return (
    <View style={[styles.display]}>
      <Text style={[styles.text, { color: textColor }]}>
        {value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  display: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingTop: 100,
    paddingEnd: 20
  },
  text: {
    fontSize: 74,
  },
});

export default Display;
