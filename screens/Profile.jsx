import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { styles } from '../constants/styles'
import { COLORS } from '../constants/Colors'
import FocusedStatusBar from '../constants/StatusBar'

const Profile = () => {
  return (
    <ScrollView
       style={[styles.safeArea, {backgroundColor:COLORS.light.primary}]}
    >
      <FocusedStatusBar 
         backgroundColor={COLORS.light.primary}
         barStyle={"light-content"}
      />

      <View style={styles.container}>
        
      </View>

    </ScrollView>
  )
}

export default Profile