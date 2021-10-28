import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20,
    },
    card: {
        minHeight: 120,
        
        backgroundColor: theme.colors.white,
        borderRadius: 20,

        padding: 20,
    },
    name: {
        fontFamily: theme.fonts.text500,
        color: theme.colors.heading,
        fontSize: 16,
    },
    comment: {
        fontFamily: theme.fonts.text300,
        marginVertical: 10,
        color: theme.colors.text,
    },
    rating: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    ratingText: {
        fontFamily: theme.fonts.text300,
        color: theme.colors.text,
        fontSize: 16,
        marginLeft: 10,
    },
});