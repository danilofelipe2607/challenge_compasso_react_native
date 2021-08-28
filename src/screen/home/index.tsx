import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Pressable, ScrollView, Image } from 'react-native';
import { styles } from './styles';


function Home() {

    function onClick() {
        console.log('ds');
    }
    return (
        <ScrollView style={styles.container}>
            <StatusBar style="auto" />

            <Text style={styles.title}>The New York Times</Text>
            <View style={styles.post}>
                <Text style={styles.postTitle}>Science</Text>
                <Text style={styles.postDescription}>Access all science news</Text>
                <Pressable style={styles.postButton} onPress={() => onClick()} >
                    <Text style={styles.buttonTitle}>{"Acessar"}</Text>
                </Pressable>

            </View>
            <View style={styles.post}>
                <Text style={styles.postTitle}>Technology</Text>
                <Text style={styles.postDescription}>Access all Technology news</Text>
                <Pressable style={styles.postButton} onPress={() => onClick()} >
                    <Text style={styles.buttonTitle}>{"Acessar"}</Text>
                </Pressable>
            </View>

            <Image source={require('../../../assets/the_new_york_logo.png')} style={styles.image} />

        </ScrollView>
    );
}



export default Home;