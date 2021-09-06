import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        padding: theme.metrics.margin,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    profilePhoto: {
        width: 50, 
        height: 50,
        borderRadius: 25,
    },
    flex: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
    },
    pr10: {
        paddingRight: 20,
    },
    greetings: {
        marginBottom: 30,
    },
    text1: {
        fontFamily: theme.fonts.text300,
        color: theme.colors.text3,
        fontSize: 20,
    },
    text2: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.heading,
        lineHeight: 24,
        fontSize: 20,
    },
    categoriesContainer: {
        marginBottom: 30,
    }
});