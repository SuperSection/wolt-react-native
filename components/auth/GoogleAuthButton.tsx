import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const GoogleAuthButton = () => {
    return (
        <TouchableOpacity style={style.googleButton}>
            <Ionicons name="logo-google" size={18} color={'#fff'} />
            <Text style={style.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    googleButton: {
        backgroundColor: '#4285FA',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 17,
        borderRadius: 12,
        gap: 4,
    },
    googleButtonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '600',
    },
});

export default GoogleAuthButton;
