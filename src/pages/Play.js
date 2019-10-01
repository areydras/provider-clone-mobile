import React from 'react'
import SafeAreaView from 'react-native-safe-area-view'
import { View, Text } from 'react-native'
import Footer from '../layouts/Footer'

const Play = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Text>
                    Play
                </Text>
            </View>
            <Footer />
        </SafeAreaView>
    )
}

export default Play