import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        height: '100%'
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
        flex: 1,
        height: "100%",
        paddingHorizontal: 20,
        paddingVertical: 40,
    },

    formGroup: {
        marginVertical: 20
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