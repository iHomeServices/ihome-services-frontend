import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    logoContainer: {
        backgroundColor: theme.colors.primary,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    article: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },

    title: {
        fontSize: 35,
        color: theme.colors.secondary,
        fontFamily: theme.fonts.text500,
        fontWeight: "500",
        marginBottom: 10,
    },  
    text: {
        fontSize: 16,
        fontFamily: theme.fonts.text300,
        textAlign: 'center',
    },
    
    boldText: {
        fontFamily: theme.fonts.text500,
        color: theme.colors.secondary,
        fontSize: 14,
        lineHeight: 17,
    },

    section: {
        height: "100%",
        backgroundColor: theme.colors.background,
        paddingHorizontal: 20,
        paddingVertical: 40,
    },

    formGroup: {
        marginVertical: 20
    },

    row: {
        width: '100%',
        flexDirection: 'row',
    },

    col50:{
        flexBasis: '50%',
        paddingRight: 10,
    },

    col30:{
        flexBasis: '30%',
        paddingRight: 10,
    },

    col70:{
        flexBasis: '70%',
    },

    button: {
        width: '100%',
        paddingVertical: 20,
        borderRadius: 10,
        backgroundColor: theme.colors.secondary,
    },

    footer: {
        width: '100%',
        paddingVertical: 20,
    }
});