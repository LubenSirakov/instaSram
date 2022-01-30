import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';


function WelcomeScreen(props) {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>

                <Text style={styles.title}>instaSram</Text>

                <View style={styles.actionsContainer}>
                    <Image style={styles.reactionIcons}
                        source={require('../assets/icons/bell.png')} />
                    <Image style={styles.reactionIcons}
                        source={require('../assets/icons/send.png')} />
                </View>
            </View>
            <ScrollView>

                <View style={styles.postContainer}>

                    <Text style={styles.usernameStyle}>Username</Text>

                    <View style={styles.imageContainer}>
                        <Image source={{
                            width: 350,
                            height: 350,
                            uri: 'https://picsum.photos/350'
                        }}></Image>
                    </View>

                    <View style={styles.interactions}>
                        <Image style={styles.reactionIcons}
                            source={require('../assets/icons/cringe.png')} />
                        <Image style={styles.reactionIcons}
                            source={require('../assets/icons/swear.png')} />
                        <Image style={styles.reactionIcons}
                            source={require('../assets/icons/send.png')} />
                        <Image style={styles.reactionIcons}
                            source={require('../assets/icons/save.png')} />
                    </View>

                    <View style={styles.cringedContainer}>
                        <Text>Cringed by </Text>
                        <Text style={styles.cringedUsers}>Pesho, Gosho, Mnogo, Losho and 69 others</Text>
                    </View>

                    <View style={styles.commentsContainer}>
                        <View style={styles.singleComment}>
                            <Text style={styles.commentUser}>Pesho</Text>
                            <Text>Tva e mnoo cringe brat...</Text>
                        </View>
                        <View style={styles.singleComment}>
                            <Text style={styles.commentUser}>Gosho</Text>
                            <Text>hahahah</Text>
                        </View>
                    </View>

                </View>

                <View style={styles.postContainer}>

                    <Text style={styles.usernameStyle}>Username</Text>

                    <View style={styles.imageContainer}>
                        <Image source={{
                            width: 350,
                            height: 350,
                            uri: 'https://picsum.photos/350'
                        }}></Image>
                    </View>

                    <View style={styles.interactions}>
                        <Image style={styles.reactionIcons}
                            source={require('../assets/icons/cringe.png')} />
                        <Image style={styles.reactionIcons}
                            source={require('../assets/icons/swear.png')} />
                        <Image style={styles.reactionIcons}
                            source={require('../assets/icons/send.png')} />
                        <Image style={styles.reactionIcons}
                            source={require('../assets/icons/save.png')} />
                    </View>

                    <View style={styles.cringedContainer}>
                        <Text>Cringed by </Text>
                        <Text style={styles.cringedUsers}>Pesho, Gosho, Mnogo, Losho and 69 others</Text>
                    </View>

                    <View style={styles.commentsContainer}>
                        <View style={styles.singleComment}>
                            <Text style={styles.commentUser}>Pesho</Text>
                            <Text>Tva e mnoo cringe brat...</Text>
                        </View>
                        <View style={styles.singleComment}>
                            <Text style={styles.commentUser}>Gosho</Text>
                            <Text>hahahah</Text>
                        </View>
                    </View>

                </View>

                <View style={styles.postContainer}>

                    <Text style={styles.usernameStyle}>Username</Text>

                    <View style={styles.imageContainer}>
                        <Image source={{
                            width: 350,
                            height: 350,
                            uri: 'https://picsum.photos/350'
                        }}></Image>
                    </View>

                    <View style={styles.interactions}>
                        <Image style={styles.reactionIcons}
                            source={require('../assets/icons/cringe.png')} />
                        <Image style={styles.reactionIcons}
                            source={require('../assets/icons/swear.png')} />
                        <Image style={styles.reactionIcons}
                            source={require('../assets/icons/send.png')} />
                        <Image style={styles.reactionIcons}
                            source={require('../assets/icons/save.png')} />
                    </View>

                    <View style={styles.cringedContainer}>
                        <Text>Cringed by </Text>
                        <Text style={styles.cringedUsers}>Pesho, Gosho, Mnogo, Losho and 69 others</Text>
                    </View>

                    <View style={styles.commentsContainer}>
                        <View style={styles.singleComment}>
                            <Text style={styles.commentUser}>Pesho</Text>
                            <Text>Tva e mnoo cringe brat...</Text>
                        </View>
                        <View style={styles.singleComment}>
                            <Text style={styles.commentUser}>Gosho</Text>
                            <Text>hahahah</Text>
                        </View>
                    </View>

                </View>

            </ScrollView>

            <View style={styles.footerContainer}>

                <View style={styles.footerMenu}>
                    <Image style={styles.footerIcons}
                        source={require('../assets/icons/photo.png')} />
                </View>

            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#FBF9FF',
        flex: 1,
    },
    headerContainer: {
        backgroundColor: '#B3B7EE',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    title: {
        fontSize: 30,
        marginTop: '10%',
        marginLeft: '5%',
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    actionsContainer: {
        flexDirection: 'row',
        marginLeft: '35%'
    },
    postContainer: {
        flex: 1,
        // margin: 20,
        backgroundColor: '#FBF9FF',
        // margin: 10,
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 10,
        // paddingLeft: 20,
        height: 500,
        width: '100%'
    },
    usernameStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '6%'
    },
    imageContainer: {
        flex: 1,
        marginTop: 5,
        alignItems: 'center'
    },
    interactions: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        marginRight: 100
    },
    reactionIcons: {
        width: 35,
        height: 35,
        margin: 5
    },
    cringedContainer: {
        flexDirection: 'row',
        marginLeft: '6%'
    },
    cringedUsers: {
        fontWeight: 'bold',
    },
    commentsContainer: {
        flexDirection: 'column',
        marginLeft: '6%'
    },
    singleComment: {
        flexDirection: 'row',
    },
    commentUser: {
        fontWeight: 'bold',
        marginRight: 5
    },
    footerContainer: {
        backgroundColor: '#B3B7EE',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    footerMenu: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    footerIcons: {
        width: 50,
        height: 40,
        margin: 5
    }

})

export default WelcomeScreen;