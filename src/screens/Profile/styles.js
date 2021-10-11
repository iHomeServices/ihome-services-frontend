import {StyleSheet} from 'react-native';
import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
        height: '100%'
    },
    header: {
        paddingTop: 20,
        paddingLeft: 5
    },
    profile: {
        paddingHorizontal: 40,
        paddingVertical: 20
    },

    contentContainer: {
        height: '100%',
        backgroundColor: theme.colors.background,

        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

        marginTop: 20,
        padding: 20
    },

    card: {
        backgroundColor: theme.colors.white,
        borderRadius: 20,
        padding: 20,
        marginVertical: 5
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: theme.fonts.text500,
        color: theme.colors.text,
        marginVertical: 20
    },
    title: {
        fontSize: 18,
        fontFamily: theme.fonts.text500,
        color: theme.colors.text,
        alignSelf: 'center',
        marginBottom: 15
    },
    text: {
        fontSize: 16,
        fontFamily: theme.fonts.text300,
        color: theme.colors.text2,
        marginBottom: 5
    },

    serviceProgressCard: {
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 140
    },
    noServiceProgress: {
        fontSize: 16,
        fontFamily: theme.fonts.text300,
        color: theme.colors.text,
        alignSelf: 'center'
    },
    buttonText: {
        fontSize: 16,
        fontFamily: theme.fonts.text500,
        color: theme.colors.text,
        alignSelf: 'flex-end',
        marginTop: 10
    }
});