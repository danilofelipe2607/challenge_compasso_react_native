import { StyleSheet, Dimensions } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d3d3d3',
        marginTop: 30,
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,


    },
    image: {
        alignSelf: 'center',
        marginTop: 100,


    },
    title: {
        marginTop: 80,
        fontSize: 33,
        fontWeight: "bold",
        marginHorizontal: 40,
        marginVertical: 40,
    },

    post: {
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 20,
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius: 3,


    },
    postDescription: {
        color: "#666",
        marginBottom: 10
    },
    postTitle: {
        fontSize: 17,
        fontWeight: "bold",
        marginBottom: 10

    },
    postButton: {
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },

    buttonTitle: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }


});