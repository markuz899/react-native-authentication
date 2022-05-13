import React from 'react';
import Button from '../Button';

const SocialButton = () => {
  const onSignInFacebook = () => {
    console.warn('onSignInFacebook');
  };

  const onSignInGoogle = () => {
    console.warn('onSignInGoogle');
  };

  const onSignInApple = () => {
    console.warn('onSignInApple');
  };

  return (
    <>
      <Button
        bgColor="#E7EaF4"
        fgColor="#4765A9"
        text="Sign in with Facebook"
        onPress={onSignInFacebook}
      />
      <Button
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
        text="Sign in with Google"
        onPress={onSignInGoogle}
      />
      <Button
        bgColor="#E3E3E3"
        fgColor="#363636"
        text="Sign in with Apple"
        onPress={onSignInApple}
      />
    </>
  );
};

export default SocialButton;
