import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {Controller} from 'react-hook-form';

const Input = ({placeholder, secureTextEntry, name, rules = {}, control}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles.container,
              {borderColor: error ? 'red' : '#e8e8e8'},
            ]}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && (
            <Text style={{color: 'red', alignSelf: 'stretch'}}>
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {},
});
