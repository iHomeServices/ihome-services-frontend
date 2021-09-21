import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.background,
        padding: theme.metrics.margin,
        flex: 1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    avatar: {
        width: 50, 
        height: 50,
        borderRadius: 25,
    },
    providerContainer: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
    },
    pr10: {
        paddingRight: 20,
    },
    categoriesContainer: {
        marginBottom: 20,
    }
});