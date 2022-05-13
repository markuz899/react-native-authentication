import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

const NewPasswordScreen = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitPressed = () => {
    navigation.navigate('Home');
  };

  const onBackPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <Input
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
        />
        <Input
          secureTextEntry
          placeholder="Enter your new password"
          value={password}
          setValue={setPassword}
        />

        <Button text="Submit" onPress={onSubmitPressed} />

        <Button
          type="TERTIARY"
          text="Back to Sign in"
          onPress={onBackPressed}
        />
      </View>
    </ScrollView>
  );
};

export default NewPasswordScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'grey',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});
