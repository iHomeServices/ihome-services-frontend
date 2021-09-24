import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    carouselContainer: {
        height: 370,
        position: "absolute",
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
    },

    contentContainer: {
        flex: 1,
        paddingTop: 40,
        marginTop: 200
    },
    detailsContainer: {
        backgroundColor: theme.colors.background,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        height: theme.metrics.screenHeight * 0.8,
        paddingHorizontal: 30,
    },
    avatar: {
        width: 60, 
        height: 60,
        borderRadius: 30,
    },
    heading: {
        fontFamily: theme.fonts.text500,
        color: theme.colors.heading,
        fontSize: 22,
    },

    footer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,

        backgroundColor: theme.colors.white,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',

        paddingVertical: 15,
        paddingHorizontal: 30,

        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        
        shadowColor: 'rgb(29, 40, 142)',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.7,
        shadowRadius: 20,
        elevation: 20,
    }
});