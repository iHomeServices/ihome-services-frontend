import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.background,
        padding: 20,
        flexGrow: 1
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40,
    },
    title: {
        color: theme.colors.secondary,
        fontFamily: theme.fonts.text500,
        fontSize: 25,
        paddingLeft: 20
    },

    content: {
        justifyContent: 'space-between',
        borderRadius: 10,
        backgroundColor: theme.colors.white,
        padding: 15,
        marginBottom: 20,
    },
    itemText: {
        fontFamily: theme.fonts.text500,
        fontSize: 17,
        paddingLeft: 10,
        color: theme.colors.text2,
    },
    logoutText: {
        color: theme.colors.red,
    },

    rowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});