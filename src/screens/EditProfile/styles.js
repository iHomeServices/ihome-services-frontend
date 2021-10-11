import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        width: '100%',
        flexDirection: 'row',
    },

    col50:{
        flexBasis: '50%',
    },

    col40:{
        flexBasis: '40%',
        paddingRight: 10,
    },

    col60:{
        flexBasis: '60%',
    },
});