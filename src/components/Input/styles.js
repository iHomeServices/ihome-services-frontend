import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 15,

        borderRadius: 10,        

        backgroundColor: "#FFF",

        shadowColor: 'rgb(29, 40, 142)',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.07,
        shadowRadius: 18,

        elevation: 10,

    },
    label: {
        fontSize: 14,
        color: theme.colors.secondary,
        fontFamily: theme.fonts.text400,
        marginBottom: 10,
    }
});