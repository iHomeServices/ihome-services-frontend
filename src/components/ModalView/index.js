import React from 'react';
import { View, Modal, TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles';

export function ModalView({children, closeModal, ...rest}) {
    return (
        <Modal
            transparent
            animationType="slide"
            statusBarTranslucent
            {...rest}
        >
            <TouchableWithoutFeedback onPress={closeModal}> 
                <View style={styles.overlay}>
                    <View style={styles.container}>
                        <View style={styles.bar}>
                            {children}
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}