import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Button from '../Components/Button/Button';
import Display from '../Components/Display/Display';
import CalculatorController from '../Controllers/CalculatorController';

const CalculatorView = () => {
  const [currentValue, setCurrentValue] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [hasTypedNumber, setHasTypedNumber] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const textColor = isDarkMode ? "#fff" : "black";

  const handleButtonClick = (value) => {
    if (!isNaN(value)) {
      if(hasTypedNumber){
        setCurrentValue((prevValue) => prevValue + value);
      }else{
        setCurrentValue(value);
        setHasTypedNumber(true);
      }
    } else if (value === '.') {
      if (!currentValue.includes('.')) {
        setCurrentValue((prevValue) => prevValue + value);
      }
    } else if (value === 'C') {
      setCurrentValue('0');
      setPreviousValue(null);
      setOperation(null);
      setHasTypedNumber(false);
    } else if (value === '=') {
      if (operation && previousValue !== null) {
        const result = CalculatorController.calculate(
          operation,
          parseFloat(previousValue),
          parseFloat(currentValue)
        );
        setCurrentValue(result.toString());
        setPreviousValue(null);
        setOperation(null);
      }
    } else {
      setOperation(value);
      setPreviousValue(currentValue);
      setHasTypedNumber(false);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode)
  }

  const backgroundColor = isDarkMode ? '#333' : '#fff'; 

  return (
    <View style={[styles.container, {backgroundColor}]}>
        <View style={styles.header}>
            <TouchableOpacity onPress={toggleDarkMode}>
                <Text style={[styles.modeText, {color: textColor}]}>
                {isDarkMode ? 'Modo Claro': 'Modo Escuro'}
                </Text>
            </TouchableOpacity>
        </View>
      <Display value={currentValue} textColor={isDarkMode ? '#ffffff' : '#000000'} />
      <View>
        <Button title="C" onPress={() => handleButtonClick('C')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="7" onPress={() => handleButtonClick('7')} />
        <Button title="8" onPress={() => handleButtonClick('8')} />
        <Button title="9" onPress={() => handleButtonClick('9')} />
        <Button title="*" onPress={() => handleButtonClick('*')} yellow/>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="4" onPress={() => handleButtonClick('4')} />
        <Button title="5" onPress={() => handleButtonClick('5')} />
        <Button title="6" onPress={() => handleButtonClick('6')} />
        <Button title="-" onPress={() => handleButtonClick('-')} yellow/>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="1" onPress={() => handleButtonClick('1')} />
        <Button title="2" onPress={() => handleButtonClick('2')} />
        <Button title="3" onPress={() => handleButtonClick('3')} />
        <Button title="+" onPress={() => handleButtonClick('+')} yellow/>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="." onPress={() => handleButtonClick('.')} />
        <Button title="0" onPress={() => handleButtonClick('0')} />
        <Button title="/" onPress={() => handleButtonClick('/')} yellow />
        <Button title="=" onPress={() => handleButtonClick('=')} yellow />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50,
    paddingLeft: 20,
    paddingTop: 20,
  },
  header:{
    alignItems: 'center',
    padding: 60
  },
  modeText: {
    fontSize: 19,
    fontWeight: 'bold'
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});

export default CalculatorView;
