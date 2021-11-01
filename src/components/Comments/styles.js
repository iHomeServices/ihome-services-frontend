import {StyleSheet} from 'react-native';
// import { theme } from '../../global/styles/theme';

export function styles(theme){
    return StyleSheet.create({
        container: {
            flex: 1,
            marginHorizontal: -30,
            paddingHorizontal: 30,
        },
        empty: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        emptyText: {
            color: theme.colors.text3,
            fontSize: 16,
            fontFamily: theme.fonts.text400,
        }
    });
}

// export const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginHorizontal: -30,
//         paddingHorizontal: 30,
//     },
//     empty: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     emptyText: {
//         color: theme.colors.text3,
//         fontSize: 16,
//         fontFamily: theme.fonts.text400,
//     }
// });