import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { styles } from '../constants/styles';

const Sidebar = ({ navigation }) => {
    return (
        <View style={styles.sidebarContainer}>
            <Button title="Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Favorites" onPress={() => navigation.navigate('Favorites')} />
            <Button title="Notifications" onPress={() => navigation.navigate('Notifications')} />
            <Button title="Promotions" onPress={() => navigation.navigate('Promotions')} />
            <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
            <Button title="Help" onPress={() => navigation.navigate('Help')} />
            <Button title="Help" onPress={() => navigation.navigate('Help')} />

        </View>
    );
};



export default Sidebar;
