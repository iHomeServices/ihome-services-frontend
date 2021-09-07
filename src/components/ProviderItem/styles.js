import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',

        minHeight: 120,
        
        backgroundColor: theme.colors.white,
        borderRadius: 20,
        width: '100%',

        padding: theme.metrics.padding,
        marginBottom: 5,
        paddingHorizontal: 25,
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    avatar: {
        height: 30,
        width: 30,
        borderRadius: 15,
    },
    name: {
        fontFamily: theme.fonts.text400,
        fontSize: 20,
        color: theme.colors.heading,
        marginBottom: 10,
    },
    category: {
        color: theme.colors.heading,
        marginLeft: 10,
    },
    opinion: {
        color: theme.colors.text2,
        marginLeft: 10,
    }, 

    priceContainer: {
        marginLeft: 'auto',
    },
    price: {
        fontFamily: theme.fonts.text500,
        color: theme.colors.heading,
        fontSize: 22,
        alignSelf: 'flex-end',
    },

    favoriteButton: {
        position: 'absolute',
        right: 12,
        top: -12,
        zIndex: 2,

        backgroundColor: theme.colors.white,

        alignItems: 'center',
        justifyContent: 'center',
        
        width: 40,
        height: 40,
        borderRadius: 25,

        shadowColor: 'rgb(29, 40, 142)',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.07,
        shadowRadius: 18,

        elevation: 5,
    },
    favoriteIcon: {
        color: theme.colors.red,
    }
});