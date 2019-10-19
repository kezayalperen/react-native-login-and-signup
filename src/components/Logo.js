import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
} from 'react-native';

import logo from '../images/kezayapng.png';

export default class Logo extends React.Component {
    render() {
        return (
            <View style={styles.logoContainer}>
                <Image source={logo}
                    resizeMode={'contain'}
                    style={{ width: 600, height: 150, marginTop: 250 }}>
                </Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logoContainer: {
    },
}); 