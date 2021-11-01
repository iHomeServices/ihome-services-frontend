import {StyleSheet} from 'react-native';
// import { theme } from '../../global/styles/theme';

export function styles(theme) {
    return StyleSheet.create({
        container: {
            height: 50,
            paddingVertical: 12,
            marginBottom: 15,
    
            borderRadius: 10,        
    
            backgroundColor: theme.colors.white,
    
            shadowColor: 'rgb(29, 40, 142)',
            shadowOffset: {
                width: 10,
                height: 10,
            },
            shadowOpacity: 0.07,
            shadowRadius: 18,
    
            elevation: 10,
    
            color: theme.colors.text
        },
        label: {
            fontSize: 14,
            color: theme.colors.secondary,
            fontFamily: theme.fonts.text400,
            marginBottom: 10,
        }
    });
}

// export const styles = StyleSheet.create({
//     container: {
//         height: 50,
//         paddingVertical: 12,
//         marginBottom: 15,

//         borderRadius: 10,        

//         backgroundColor: theme.colors.white,

//         shadowColor: 'rgb(29, 40, 142)',
//         shadowOffset: {
//             width: 10,
//             height: 10,
//         },
//         shadowOpacity: 0.07,
//         shadowRadius: 18,

//         elevation: 10,

//         color: theme.colors.text
//     },
//     label: {
//         fontSize: 14,
//         color: theme.colors.secondary,
//         fontFamily: theme.fonts.text400,
//         marginBottom: 10,
//     }
// });