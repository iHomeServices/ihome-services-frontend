import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },

    carouselContainer: {
        height: 350,
        position: "relative"
    },
    carouselTopBarContainer: {
        position: 'absolute',
        top: 60,
        left: 0,
        right: 0,
        zIndex: 1,
        paddingHorizontal: 20,
    },
    carouselControlRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    carouselItemContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: theme.colors.background,
    },
    carouselItemImage: {
        flex: 1,
        width: theme.metrics.screenWidth,
    },

    dotContainer: {
        marginTop: -150
    },
    dotStructure: {
        width: 8,
        height: 8,
        borderRadius: 4,
    },
    dotPrimary: {
        backgroundColor: theme.colors.primary
    },
    dotInactive: {
        backgroundColor: theme.colors.white
    }
});