import React, { useState } from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'

export const ContadorScreen = () => {
    const [contador, setContador] = useState(10)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Contador: {contador}
            </Text>
            <TouchableOpacity
                onPress={() => setContador(contador + 1)}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>
                        +1
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        top: -10
    },
    fabLocationBL: {
        top: 100
    },
    fab: {
        backgroundColor: '#5858D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center'
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})
