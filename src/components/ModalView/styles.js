import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginTop: 100,
    },
    overlay: {
        backgroundColor: theme.colors.primary,
        flex: 1,
    },
    bar: {
        width: 39,
        height: 2,
        borderRadius: 2,
        backgroundColor: theme.colors.background,
        alignSelf: 'center',
        marginTop: 13,
    }
})
