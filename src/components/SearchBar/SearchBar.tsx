import React from 'react';
import { View, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {

  // Parte lógica de uma SearchBar

    return (
    <View className='bg-gray-100 mt-[30px] absolute items-center flex-row rounded-[20px] border-[1.5px] border-black 
    w-[80%] h-[40px] px-[10px] z-[1px]'>
      <Ionicons name="search-outline" size={24} color="#101010" className='mr-[10px]'/>
      <TextInput
        className='flex-1 text-[16px]'
        placeholder="Search"
        placeholderTextColor="#888"
      />
    </View>
    )
}

export default SearchBar;
