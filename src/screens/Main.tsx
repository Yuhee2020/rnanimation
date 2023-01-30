import React from 'react';
import LottieView from 'lottie-react-native';

export default function Main() {

    return (
            <LottieView
                autoPlay
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: '#eee',
                }}
                source={require('../../assets/133564-typing.json')}
            />
    );
}

