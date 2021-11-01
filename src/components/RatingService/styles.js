import {StyleSheet} from 'react-native';
// import { theme } from '../../global/styles/theme';

export function styles(theme) {
    return StyleSheet.create({
        centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
        },
        modalView: {
            margin: 20,
            backgroundColor: theme.colors.background,
            borderRadius: 20,
            paddingHorizontal: 35,
            paddingVertical: 20,
            width: '90%',
            alignItems: "center",
            shadowColor: theme.colors.background,
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5
        },
        header: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20
        }, 
        title: {
            fontSize: 22,
            fontFamily: theme.fonts.text400,
            color: theme.colors.text,
            marginBottom: 10
        },
        textareaContainer: {
            width: '100%',
            marginVertical: 15
        },
    });
}

// export const styles = StyleSheet.create({
//     centeredView: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: 'rgba(0, 0, 0, 0.7)'
//     },
//     modalView: {
//         margin: 20,
//         backgroundColor: theme.colors.background,
//         borderRadius: 20,
//         paddingHorizontal: 35,
//         paddingVertical: 20,
//         width: '90%',
//         alignItems: "center",
//         shadowColor: theme.colors.background,
//         shadowOffset: {
//             width: 0,
//             height: 2
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 4,
//         elevation: 5
//     },
//     header: {
//         width: '100%',
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         marginBottom: 20
//     }, 
//     title: {
//         fontSize: 22,
//         fontFamily: theme.fonts.text400,
//         color: theme.colors.text,
//         marginBottom: 10
//     },
//     textareaContainer: {
//         width: '100%',
//         marginVertical: 15
//     },
// });