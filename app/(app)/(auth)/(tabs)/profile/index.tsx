import { ScrollView, StyleSheet, Text } from 'react-native';

const ProfilePage = () => {
    return (
        <ScrollView
            contentInsetAdjustmentBehavior='automatic'
            style={styles.container}
        >
            <Text>ProfilePage</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ProfilePage;
