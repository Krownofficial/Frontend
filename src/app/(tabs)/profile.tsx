import { View, Text, StyleSheet,SafeAreaView, Image, FlatList, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import { useUser} from '@clerk/clerk-expo';
import { LinearGradient } from 'expo-linear-gradient';
import { Event } from '@/src/components/EventButton';
import { TextInput } from '@/src/components/TextInput';



const numColumns = 3; // número de colunas desejadas
const screenWidth = Dimensions.get('window').width;
const itemSize = (screenWidth - 40) / numColumns; 

const Profile = () => {
  const {user} = useUser(); 

  const Data = [
    {
      id: "1",
      name: "Honi",
      loc: "Alpes",
      date: "13 March, 2026",
      imageId: "02e44262-e33c-42d2-bfd0-77f5d0d4d4f1",
    },
    {
      id: "2",
      name: "Tomorrowland",
      loc: "Alpes",
      date: "13 March, 2026",
      imageId: "02e44262-e33c-42d2-bfd0-77f5d0d4d4f1",
    },
    {
      id: "3",
      name: "Honi",
      loc: "Alpes",
      date: "13 March, 2026",
      imageId: "02e44262-e33c-42d2-bfd0-77f5d0",
    },
    {
      id: "4",
      name: "Honi",
      loc: "Alpes",
      date: "13 March, 2026",
      imageId: "02e44262-e33c-42d2-bfd0-77f5d0d4d4f1",
    },
  ];


  const renderItem = ({item}) => (
    <View style={[styles.box, { width: itemSize, height: itemSize }]}>
      <TouchableOpacity>
        <View className='relative'>
            <Image
            source={item.image}
            style={styles.image}  
            resizeMode="cover"    
            />
        <LinearGradient 
          colors={['rgba(0, 0, 0, 0.9)', 'rgba(0, 0, 0, 0.05)', 'rgba(0, 0, 0, 0)']} // Gradiente de preto sólido para transparente
          start={{ x: 0, y: 1 }} // Início do gradiente na parte inferior
          end={{ x: 0, y: 0 }}   // Fim do gradiente na parte superior
          style={{
            position: 'absolute',
            width: itemSize,
            height: itemSize,
          }}
        />
        
        <View className="absolute align-bottom mt-[70px] ml-[5px]">
            <Text className="font-bold color-white text-[10px] ">{item.name}</Text>
            <Text className=" color-white text-[8px]">{item.date}</Text>
        </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView className='flex-1 bg-blacksecondary' >
        <View className='items-center bg-blacksecondary w-full  '>
                    
          <View className=' border-gold w-[104px] h-[104px] bg-[#101010] rounded-[85px] border-[3px] mt-[40px] '/>
          
          <Text className='text-gold text-[16px] font-semibold text-center  mt-1 self-center'>{user?.username}</Text>

        </View>

        <View className='items-center mt-[32px]'>
          <Text className='text-gold'>Events Made</Text>
          <Text className='text-white mt-2'>50</Text>
        </View>


        <View className='ml-6 mr-6 mt-6'>
          <TextInput.Root mt={0}>
            <TextInput.TextInput editable={false} placeholder='Description' secureTextEntry={false} 
            multiline={true}/>
          </TextInput.Root>  
        </View>

        <View className='flex-row ml-6  mt-16'>
          <Text className='text-gold text-[18px]'>Upcoming Events</Text>     
        </View> 

        <View className='flex-1 mt-4 flex-row'>
          <View className='absolute h-[2px] w-full bg-gold ml-[-70px] mt-[100px] rotate-[27deg]'></View>
          <View className='absolute h-[2px] w-[200%] bg-gold  mt-[130px] rotate-[155deg] ml-[-90px]'></View>
          <FlatList
            data={Data}
            renderItem={renderItem}
            numColumns={numColumns} // Define o número de colunas
          columnWrapperStyle={styles.row} // Estilos para as colunas
          contentContainerStyle={styles.container} // Estilo geral do container
          />
        </View> 
        </SafeAreaView>             
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  box: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 5,
    overflow: 'hidden',
  },
});