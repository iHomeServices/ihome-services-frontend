import {StyleSheet} from 'react-native';
// import { theme } from '../../global/styles/theme';

export function styles(theme) {
    return StyleSheet.create({
        container: {
            width: '100%',
            paddingVertical: 20,
            borderRadius: 10,
            backgroundColor: theme.colors.secondary,
        },
        textButton: {
            color: theme.colors.white,
            textAlign: 'center',
            fontFamily: theme.fonts.text500
        }
    });
}

// export const styles = StyleSheet.create({
//     container: {
//         width: '100%',
//         paddingVertical: 20,
//         borderRadius: 10,
//         backgroundColor: theme.colors.secondary,
//     },
//     textButton: {
//         color: theme.colors.white,
//         textAlign: 'center',
//         fontFamily: theme.fonts.text500
//     }
// });