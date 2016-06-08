'use strict';

import React, { Component } from 'react';

import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize: 70,
    fontWeight: "100",
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent',
    letterSpacing: 5
  },
  header: {
    marginBottom: 20,
    fontSize: 50,
    fontWeight: "100",
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent',
    letterSpacing: 3
  },

  submit: {
    height: 50,
    padding: 10,
    marginRight: 5,
    marginBottom: 15,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },

  dateViewBox: {
    backgroundColor: 'transparent',
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row'
  },

  dateViewLabel: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "100",
    fontFamily: 'Gill Sans',
    textAlign: 'left',
    color: 'white',
    backgroundColor: 'transparent',
    letterSpacing: 3
  },

  dateViewDate: {
    marginBottom: 10,
    marginLeft: 40,
    fontSize: 20,
    fontWeight: "100",
    textAlign: 'right',
    color: 'white',
    backgroundColor: 'transparent'
  },

  datePicker: {
    borderTopWidth: 1, 
    position: 'absolute', 
    bottom: 120, 
    right: 15, 
    left: 15, 
    height: 220, 
    borderColor: '#fff', 
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.3)',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  datePickerLabel: {
    textAlign: 'right'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 50,
    width: 300,
    flexDirection: 'row',
    backgroundColor: '#ff0066',
    borderRadius:10,
    marginBottom: 10,
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  signUpButton: {
    color: 'white',
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 18
  },
  unselected: {
    fontSize: 20,
    backgroundColor: 'orange',
    marginTop: 20,
    marginBottom: 20,
    borderColor: 'black',
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center'
  },
  selected: {
    fontSize: 20,
    backgroundColor: 'green',
    marginTop: 20,
    marginBottom: 20,
    borderColor: 'black',
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center'
  },
  backgroundImage: {
    flex:1,
    width:null,
    height: null,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  errorMessage: {
    backgroundColor: 'transparent',
    color: '#ff0066',
    textAlign: 'center',
    fontSize: 20,
    marginTop: -23
  },
  confirmation: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'transparent',
    fontSize: 25,
    paddingBottom: 10
  },
  location: {
    backgroundColor: 'transparent',
    fontSize: 25,
    color: 'white',
    textAlign: 'center'
  },
});

module.exports = styles;
