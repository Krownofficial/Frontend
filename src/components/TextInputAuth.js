import React from 'react';
import { TextInput } from 'react-native';

const TextInputAuth = ({ placeholder, value, onChangeText, secureTextEntry }) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#C1A875"
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      className='w-[300px] h-[40px] border-[1px] border-[#C1A875] rounded-[10px] pl-[15px] mb-[20px] items-center bg-white'
    />
  );
};

export default TextInputAuth;

