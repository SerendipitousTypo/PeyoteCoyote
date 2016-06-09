'use strict';
import React, { Component } from 'react';
const styles = require('./Helpers/styles');

const Dte = require('./Dte');

import {
  Image,  
  DatePickerIOS,
  View,
  Text,
  StyleSheet,
  TextInput,
  ListView,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicatorIOS,
} from 'react-native';

class Host extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      date: new Date(), //have to get this date from the date picker now
      datePickerMode: 'hidden',
    };
  }


nav () {
    this.props.navigator.push({
      name: 'Dte'
    });
}


  render () {

    return (
      <Image style={styles.backgroundImage} source={require('../../imgs/uni.jpg')}>
      <View style={styles.hostContainer}>
      <Text style={styles.header}>Host a roam</Text>

      <TextInput
          style={styles.submit} 
          autoCapitalize="none"
          placeholder="Enter Event Title"
          placeholderTextColor="white"
          // onChangeText={(text) => this.setState({email: text})} ###do something with this
          // value={this.state.email} 
      />
      
      <TouchableHighlight onPress={this.nav.bind(this)}>
        <View style={styles.dateViewBox}>
          <View>
            <Text style={styles.dateViewLabel}>Choose a Date:</Text>
          </View>
          <View>
            <Text style={styles.dateViewTime}>{this.props.date}  {this.props.time}</Text>
          </View>
         <View>
            <Text style={styles.dateViewNext}>></Text>
          </View>
        </View>
      </TouchableHighlight>

      <View style={styles.locViewBox}>
          <View>
            <Text style={styles.locViewLabel}>Pick a Location:</Text>
          </View>
          <View>
            <Text style={styles.locViewNext}> > </Text>
          </View>
        </View>  
      <TextInput
        style={styles.submit} 
        autoCapitalize="none"
        placeholder="Enter roam description"
        placeholderTextColor="white"
          // onChangeText={(text) => this.setState({email: text})} ###do something with this
          // value={this.state.email} 
      />
    </View>
      </Image>
    );
  }
}
module.exports = Host;