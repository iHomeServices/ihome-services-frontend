import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 200
    },
    avatar: {
        resizeMode: 'contain',
        position: 'absolute',
        left: 0,
        height: 80,
        width: 80,
        borderRadius: 40,
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
        alignItems:'center',
        justifyContent: 'center',
    }
});