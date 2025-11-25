import { Fonts } from '@/constants/theme';
import { Stack } from 'expo-router';

const ProfileLayout = () => {
    return (
        <Stack screenOptions={{ contentStyle: { backgroundColor: '#fff' } }}>
            <Stack.Screen name="index"
                options={{
                    title: 'Profile',
                    headerLargeTitle: true,
                    headerTransparent: true,
                    headerLargeTitleStyle: {
                        fontFamily: Fonts.brandBold,
                        fontWeight: '900',
                        color: '#000',
                    },
                }}
            />
        </Stack>
    );
}

export default ProfileLayout;
