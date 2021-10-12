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
        marginVertical: 5,
        justifyContent: 'center',
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
        color: theme.colors.text,
        marginBottom: 5
    },

    noServiceProgress: {
        fontSize: 16,
        fontFamily: theme.fonts.text300,
        color: theme.colors.text,
        alignSelf: 'center',
        paddingVertical: 30
    },

    buttonContainer: {
        marginTop: 20,
        alignSelf: 'flex-end'
    }, 
    buttonText: {
        fontSize: 16,
        fontFamily: theme.fonts.text500,
        color: theme.colors.text,
        alignSelf: 'center',
    },

    rowButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    textDanger: {
        color: theme.colors.red,
    },
    borderDanger: {
        borderColor: theme.colors.red,
    },

    textSecondary: {
        color: theme.colors.secondary,
    },
    borderSecondary: {
        borderColor: theme.colors.secondary,
    },

    outlineButton: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: theme.colors.primary,

        paddingHorizontal: 50,
        paddingVertical: 10
    }
});