import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const AppleAuthButton = () => {
    return (
        <TouchableOpacity style={style.appleButton}>
            <Ionicons name="logo-apple" size={20} color={'#fff'} />
            <Text style={style.appleButtonText}>Sign in with Apple</Text>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    appleButton: {
        backgroundColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 17,
        borderRadius: 12,
        gap: 4,
    },
    appleButtonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '600',
    },
});

export default AppleAuthButton;
