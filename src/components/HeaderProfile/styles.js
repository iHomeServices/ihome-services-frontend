import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    avatar: {
        width: 80, 
        height: 80,
        borderRadius: 40,
    },
    heading: {
        fontFamily: theme.fonts.text500,
        color: theme.colors.heading,
        fontSize: 22,
    },
    subHeading: {
        fontFamily: theme.fonts.text300,
        fontSize: 14,
        color: theme.colors.secondary,
        marginVertical: 8,
    },
    category: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.secondary,
    }
});