import { Stack } from 'expo-router';

const AuthLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Feed' }} />
        </Stack>
    );
}

export default AuthLayout;
