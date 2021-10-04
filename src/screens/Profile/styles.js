import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
        height: '100%',
    },
    header: {
        paddingTop: 20,
        paddingLeft: 5,
    },
    profile: { 
        paddingHorizontal: 40, 
        paddingVertical: 20,
    },

    contentContainer: {
        height: '100%',
        backgroundColor: theme.colors.background,

        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

        marginTop: 20,
        padding: 20,
    }
});