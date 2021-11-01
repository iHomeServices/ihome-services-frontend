import {StyleSheet} from 'react-native';

export function styles(theme) {
    return StyleSheet.create({
        container: {
            marginVertical: 30,
            marginHorizontal: -30,
    
            paddingHorizontal: 30,
            paddingVertical: 15,
            
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
    
            borderColor: theme.colors.text2,
    
            borderTopWidth: 2,
            borderBottomWidth: 2,
        },
        item: {
            alignItems: 'center'
        },
        title: {
            // marginTop: 5,
            color: theme.colors.text2,
        },
        icon: {
            color: theme.colors.text2,
        },
        active: {
            color: theme.colors.primary
        }
    });
}