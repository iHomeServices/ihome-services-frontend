import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    heading: {
        fontFamily: theme.fonts.text500,
        fontSize: 20,
        color: theme.colors.heading,
        marginBottom: 15,
    },
    description: {
        fontFamily: theme.fonts.text300,
    }
});