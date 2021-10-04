import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.white,

        alignItems: 'center',
        justifyContent: 'center',
        
        width: 40,
        height: 40,
        borderRadius: 25,
    },
    shadow: {
        shadowColor: 'rgb(29, 40, 142)',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.07,
        shadowRadius: 18,

        elevation: 5,
    }
});