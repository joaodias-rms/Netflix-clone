import React from 'react'
import { View, Text } from 'react-native'

import { Header } from '../../components/Header'
import { Hero } from '../../components/Hero'

import { styles } from './styles'

export function Home() {
    return (
        <View style={styles.container}>
            <Hero />
            <Header />
        </View>
    )
}
