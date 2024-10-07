import { View, Text, FlatList, StyleSheet, Animated } from 'react-native'
import React, {useRef, useState} from 'react'
import slides from '@/data/slides';
import SlideItem from './SlideItem';
import Pagination from './Pagination';

export default function Slider() {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const handleOnScroll = event => {
    Animated.event([
      {
        nativeEvent: {
          contentOffset: {x: scrollX,},
        },
      },
    ], {
      useNativeDriver: false,
    },
  )(event);
  };

  const handleOnViewableItemsChanged = useRef(({viewableItems}) => 
  {
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50, 
  }).current

  return (
    <View style={styles.container}>
      <FlatList 
        data={slides} 
        renderItem={({item}) => <SlideItem item={item}/>} 
        horizontal
        pagingEnabled
        snapToAlignment='center'
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination
        data={slides}
        scrollX={scrollX}
        index = {index}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center", 
    },
  });