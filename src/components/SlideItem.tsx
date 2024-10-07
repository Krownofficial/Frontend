import { StyleSheet, Text, TouchableOpacity, View, Dimensions, Animated } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

interface SlideItemProps {
    item: {
      title: string;
      price: string;
      description: string;
    };
}

const {width, height} = Dimensions.get('screen');

export default function SlideItem({item}: SlideItemProps) {

  return (
    <View style={styles.container}>
        <View style={styles.card}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>

        <View style={styles.subDividerContainer}>
            <View style={styles.subDivider} />
        </View>

        <View style={styles.descriptionContainer}>
            <View style={styles.pointContainer}>
            <Entypo name="dot-single" size={24} color="#101010" />
                <Text style={styles.description}>{item.description}</Text>
            </View>
            <View style={styles.pointContainer}>
            <Entypo name="dot-single" size={24} color="#101010" />
                <Text style={styles.description}>{item.description}</Text>
            </View>
            <View style={styles.pointContainer}>
            <Entypo name="dot-single" size={24} color="#101010" />
                <Text style={styles.description}>{item.description}</Text>
            </View>
            <View style={styles.pointContainer}>
            <Entypo name="dot-single" size={24} color="#101010" />
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
        
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Text style={styles.buttonText}>Buy this one</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "flex-start",
        width,
    },
    card: {
        alignItems: "center",
        backgroundColor: "#C1A875",
        borderRadius: 20,
        width: "90%",
        height: "80%",
        marginTop: 30
    },
    title: {
        color: "#101010",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 40
    },
    price: {
        color: "#101010",
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 20
    },
    subDividerContainer: {
        width,
        alignItems: "center",
        justifyContent: "center",
    },
    subDivider: {
        height: 2,
        backgroundColor: "#101010",
        marginTop: 30,
        width: "74%",
        borderRadius: 100
    },
    descriptionContainer: {
        width,
        paddingHorizontal: 19,
        marginVertical: 30
    },
    pointContainer: {
        flexDirection: 'row',
        alignItems: "center",
        paddingHorizontal: 22,
        marginBottom: 10
    },
    description: {
        color: "#101010",
        fontSize: 18,
    },
    button: {
        height: 54,
        width: '60%',
        alignItems: "center",
        justifyContent: "center",
        marginTop: 'auto',
        marginBottom: 55, 
        backgroundColor: "#f0f0f0",
        borderRadius: 85,
        shadowColor: "#101010",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
    },
    buttonText: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#101010",
      }
});