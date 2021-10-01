import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        padding: 10,

        minWidth: 100,
        height: 100,
        backgroundColor: theme.colors.white,
        borderRadius: 10,
    },
    icon: {
        resizeMode: 'contain',
        height: 60,
        width: 60,
    },
    name: {
        fontSize: 14,
        fontFamily: theme.fonts.text500,
        lineHeight: 17,
        color: theme.colors.text2,
        marginTop: 10
    },
    selected: {
        backgroundColor: theme.colors.primary,
    },
    textWhite: {
        color: '#fff',
    }
});