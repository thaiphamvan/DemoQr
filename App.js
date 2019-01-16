/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TextInput,
  View,
  Modal,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native';
import QRCode from 'react-native-qrcode';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const window = Dimensions.get('window');
type Props = {};
export default class App extends Component<Props> {
  state = {
    text: 'http://facebook.github.io/react-native/',
    visible: false
  };
  _renderModal() {
    return (
      <Modal
        visible={this.state.visible}>
        <View style={styles.styleModal1}>
          <View style={styles.styleModal2}>
            <View style={styles.styleModal3}>
              <TextInput
                style={styles.input}
                onChangeText={(text) => this.setState({ text: text })}
                value={this.state.text}
                placeholder={'QR CODE'}
              />
              <QRCode
                value={this.state.text}
                size={200}
                bgColor='purple'
                fgColor='white' />
              <TouchableOpacity
                style={styles.styleButton}
                onPress={() => { this.setState({ visible: false }) }}
              >
                <Text style={styles.styleText}>Back</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal >
    )
  }
  render() {
    return (
      <View style={styles.container}>
        {this._renderModal()}
        <TouchableOpacity
          style={styles.styleButton}
          onPress={() => { this.setState({ visible: true }) }}
        >
          <Text style={styles.styleText}>Click</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
    color: 'green'
  },
  styleButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    borderRadius: 5
  },
  styleModal1: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.30)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleModal2: {
    width: window.width - 40,
    alignItems: 'center'
  },
  styleModal3: {
    backgroundColor: 'blue',
    alignItems: 'center'
  },
  styleText: {
    fontSize: 30,
    color: 'yellow'
  }
});
