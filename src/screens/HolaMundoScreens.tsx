import React from 'react'
import { View, Text } from 'react-native'

export const HolaMundoScreens = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center'

        }}>
            <Text
                style={{
                    textAlign: 'center',
                    fontSize: 50
                }}
            >Hola Mundo
            </Text>
        </View>
    )
}
