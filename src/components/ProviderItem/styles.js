import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: 'flex-start',
        textAlign: 'left',
        marginVertical: 10,
    },
    avatar: {
        resizeMode: 'contain',
        position: 'absolute',
        left: 0,
        height: 80,
        width: 80,
    },
    name: {
        position: 'relative',
        left: 100,
    },
    category: {
        position: 'relative',
        left: 100,
    },
    price: {
        alignSelf: 'flex-end',
    }
});