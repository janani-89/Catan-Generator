import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Modal, Pressable, Image, ScrollView, TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Rules = ({showRules, onClose}) => {

    return(
      <View style={styles.container}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={showRules}
            onRequestClose={() => onClose()}
        >
            <ScrollView  contentContainerStyle={styles.modalView}>
                <View style={styles.header}>
                    <Text style={styles.title} >Rules</Text>
                    <TouchableOpacity onPress={() => onClose()}>
                        <Icon name="close" size={20} onPress ={() => onClose()}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.segment} >
                    <Text style={styles.caption}> Players:</Text>
                    <Text style={styles.description}> 3 - 4 Players</Text>
                </View>
                <View style={styles.segment} >
                    <Text style={styles.caption}> Game Play:</Text>
                    <Text style={styles.description}> (1)Lay out the game board. </Text>
                    <Text style={styles.description}> (2) Initial set-up </Text>
                    <Text style={styles.description}> (3) Roll </Text>
                    <Text style={styles.description}> (4) Trade </Text>
                    <Text style={styles.description}> (5) Build </Text>
                </View>
                <View style={styles.segment} >
                    <Text style={styles.caption}> Resources:</Text>
                    <View style={styles.section}>
                        <Text style={styles.subTitle}> Road :-  </Text>
                        <Text style={styles.description}>
                            A road must always connect to 1 of your existing roads, settlements or cities.
                        </Text>
                        <Image style={styles.ruleImg}  source={require("../utils/img/roadRule.png")}></Image>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subTitle}> Settlement :-  </Text> 
                        <Text style={styles.description}>
                            Settlement can be built at an intersection if all 3 of adjacent intersections are vacant.
                        </Text>
                        <Image style={styles.ruleImg}  source={require("../utils/img/settlementRule.png")}></Image>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subTitle}> City :-  </Text> 
                        <Text style={styles.description}>
                            One can establish a city by upgrading any settlement.
                        </Text>
                        <Image style={styles.ruleImg}  source={require("../utils/img/cityRule.png")}></Image>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subTitle}> Development Card :-  </Text> 
                        <Text style={styles.description}>
                            Draw the top card in the deck. There are 3 kinds of cards - Knight, Progress, Victory Point.
                        </Text>
                        <Image style={styles.ruleImg}  source={require("../utils/img/dcRule.png")}></Image>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subTitle}> Largest Army :-  </Text> 
                        <Text style={styles.description}>
                            First player to play 3 knight cards receive largest Army card which gets transferred if another player plays more knight cards than you have.
                        </Text>
                        <Image style={styles.ruleImg}  source={require("../utils/img/largestArmy.png")}></Image>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subTitle}> Longest Road :- </Text> 
                        <Text style={styles.description}>
                            First player to build 5 continuous roads can take Longest Road card which gets transferred if another player builds more roads. 
                        </Text>
                        <Image style={styles.ruleImg}  source={require("../utils/img/longestRoad.png")}></Image>
                    </View>
                </View>
                <View style={styles.segment} >
                    <Text style={styles.caption}> Victory Points:</Text>
                    <Text style={styles.description}>
                        First player to reach 10 Victory points on their turn wins the game.
                    </Text>
                    <View style={styles.section}>
                        <Text style={[styles.description, styles.italicText]}> 1 settlement = 1 VP </Text>
                        <Text style={[styles.description, styles.italicText]}>1 city = 2 VP </Text>
                        <Text style={[styles.description, styles.italicText]}> Longest Road = 2 VP </Text>
                        <Text style={[styles.description, styles.italicText]}>Largest Army = 2 VP </Text>
                        <Text style={[styles.description, styles.italicText]}>Victory Point Card = 1 VP each </Text>
                    </View>
                </View>
                <Pressable 
                    onPress={() => onClose()}
                    style={[styles.button, styles.buttonClose]}
                >
                    <Text style={styles.btnText}> Ok </Text>
                </Pressable>
            </ScrollView >
        </Modal>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    title: {
        fontSize: 24,
        alignSelf: "center",
        paddingBottom: 10
    },
    header:{
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    caption: {
        fontSize: 20,
        paddingTop: 8,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 18,
        fontWeight: "600",
        paddingTop: 6,
        paddingBottom: 4
    },
    description: {
        fontSize: 16
    },
    italicText: {
        fontStyle: 'italic',
    },
    ruleImg: {
        alignSelf: 'center',
        marginVertical: 4
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop: 15,
        marginBottom: 20
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    btnText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
  })
  
export default Rules;