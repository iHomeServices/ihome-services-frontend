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
    pl20: {
        paddingLeft: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    avatar: {
        height: 80,
        width: 80,
        borderRadius: 40,
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
    }
});