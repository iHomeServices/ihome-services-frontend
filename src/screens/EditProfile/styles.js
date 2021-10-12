import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.background,
        padding: 20,
        flexGrow: 1
    },

    title: {
        color: theme.colors.secondary,
        fontFamily: theme.fonts.text500,
        fontSize: 25,
        paddingLeft: 20
    },
    subtitle: {
        color: theme.colors.secondary,
        fontFamily: theme.fonts.text500,
        fontSize: 20,
        marginBottom: 20,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40,
    },

    row: {
        width: '100%',
        flexDirection: 'row',
    },

    pr10: {
        paddingRight: 10
    },
    mb20: {
        marginBottom: 20
    },

    col50:{
        flexBasis: '50%',
    },

    col40:{
        flexBasis: '40%',
        paddingRight: 10,
    },

    col60:{
        flexBasis: '60%',
    },
});