import React from 'react';
import { StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

export default function App() {
  return <Camera style={StyleSheet.absoluteFillObject} type={Camera.Constants.Type.front}/>;
}
