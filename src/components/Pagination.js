import { StyleSheet, Animated, View, Dimensions } from 'react-native'
import React from 'react'

const {width} = Dimensions.get('screen');

export default function Pagination({data, scrollX, index}) {
  return (
    <View style={styles.container}>
      {data.map((_, idx) => {
        const inputRange = [(idx-1)*width, idx * width, (idx+1)*width]
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange:[12, 25, 12],
          extrapolate: "clamp",
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange:["gray", "#C1A875", "gray"],
          extrapolate: "clamp",
        });
            return <Animated.View 
            key={idx.toString()} 
            style={[
              styles.dot, 
              {width: dotWidth, backgroundColor}, 
              // idx === index && styles.dotActive
            ]}/>;
        })}
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        position:"absolute",
        bottom: 40,
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    dot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginHorizontal: 4,
        backgroundColor: "gray"
    },
    dotActive: {
      backgroundColor: "#C1A875"
    }
})