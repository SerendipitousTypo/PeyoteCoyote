// Tinder.js
'use strict';
import React, {Component} from 'react';
import {View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS} from 'react-native';
var Geolocation = require('./Geolocation');
import SwipeCards from 'react-native-swipe-cards';

      


     // <View style={styles.card}>
            
            // <View style={styles.cardTitleWrap}>
            //   <Text style={styles.cardHeader}>{this.state.currentRoam.title}</Text>
            // </View>
            
            // <View style={styles.cardTimeWrap}>
            //   <Text style={styles.cardTimeText}>{this.state.currentRoam.date}</Text>
            // </View>
            
            // <View style={styles.cardMap}>
            //   <Geolocation showUser={false} markers = {[this.state.currentRoam.marker]}/>
            // </View>

            
            // <View style={styles.icons}>
              
            //   <View style={styles.cardPriceWrap}>
            //     <View>
            //       <Image style={styles.priceIcon} source={require('../../imgs/dollar.png')}/>
            //     </View>
            //     <View style={styles.priceTextWrap}>
            //       <Text style={styles.priceText}> {this.state.currentRoam.price}</Text>
            //     </View>
            //   </View>
              
              // <View style={styles.cardAttendingWrap}>
              //   <View>
              //     <Image style={styles.participantsIcon} source={require('../../imgs/participants.png')}/>
            //     </View>
            //     <View style={styles.participantsTextWrap}>
            //       <Text style={styles.participantsText}> {this.state.currentRoam.attending}</Text>
            //     </View>
            //   </View>

            //   <View style={styles.cardCapacityWrap}>
            //     <View>
            //       <Image style={styles.capacityIcon} source={require('../../imgs/capacity.png')}/>
            //     </View>
            //     <View style={styles.capacityTextWrap}>
            //       <Text style={styles.capacityText}> {this.state.currentRoam.capacity}</Text>
            //     </View>
            //   </View>
            // </View>

            // <View style={styles.cardDescriptionWrap}>
            //   <Text style={styles.cardDescription}>{this.state.currentRoam.description}</Text>
            // </View>
            // <View style={styles.cardControls}>
            //   <TouchableHighlight 
            //     style = {styles.cardButton} 
            //     onPress = {this.handleReject.bind(this)} >
            //     <Text style={defaultStyles.buttonText}>Pass</Text>
            //   </TouchableHighlight>
            //   <TouchableHighlight 
            //     style = {styles.cardButton} 
            //     onPress = {this.handleEnroll.bind(this)} >
            //     <Text style={defaultStyles.buttonText}>Enroll</Text>
            //   </TouchableHighlight>
            // </View>
          // </View>





class Card extends Component{
  
  constructor(props) {
    super(props);
    console.log(props.currentRoam);
    this.state = {
      
    }
  }

  render() {
    return (
      <View style={styles.card}>
            
            <View style={styles.cardTitleWrap}>
              <Text style={styles.cardHeader}>{this.props.title}</Text>
            </View>
            
            <View style={styles.cardTimeWrap}>
              <Text style={styles.cardTimeText}>{this.props.date}</Text>
            </View>
            
            <View style={styles.cardMap}>
              <Geolocation showUser={false} markers = {[this.props.marker]}/>
            </View>

            
            <View style={styles.icons}>
              
              <View style={styles.cardPriceWrap}>
                <View>
                  <Image style={styles.priceIcon} source={require('../../imgs/dollar.png')}/>
                </View>
                <View style={styles.priceTextWrap}>
                  <Text style={styles.priceText}> {this.props.price}</Text>
                </View>
              </View>
              
              <View style={styles.cardAttendingWrap}>
                <View>
                  <Image style={styles.participantsIcon} source={require('../../imgs/participants.png')}/>
                </View>
                <View style={styles.participantsTextWrap}>
                  <Text style={styles.participantsText}> {this.props.attending}</Text>
                </View>
              </View>

              <View style={styles.cardCapacityWrap}>
                <View>
                  <Image style={styles.capacityIcon} source={require('../../imgs/capacity.png')}/>
                </View>
                <View style={styles.capacityTextWrap}>
                  <Text style={styles.capacityText}> {this.props.capacity}</Text>
                </View>
              </View>
            </View>

            <View style={styles.cardDescriptionWrap}>
              <Text style={styles.cardDescription}>{this.props.description}</Text>
            </View>
          </View>
    )
  }
}

let NoMoreCards = React.createClass({
  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    )
  }
})

const roams = [
        {
          title: 'Pub crawl', 
          attending: 15, 
          capacity: 30,
          description: 'EVERY WEEK PUB CRAWL SAN FRANCISCO BRINGS TOGETHER PEOPLE FROM AROUND THE WORLD TO EXPERIENCE THE ULTIMATE NIGHT OUT IN SF.',
          marker: {
              title: 'Union Square',
              latitude: 40.7359,
              longitude: -73.9911,
          },
          date: 'June 3, 2016 @ 8:00PM',
          price: '$18'
        },
        
        {
          title: 'Swinger getaway', 
          attending: 56, 
          capacity: 99,
          description: 'EVERY WEEK SWINGERS SAN FRANCISCO BRINGS TOGETHER PEOPLE FROM AROUND THE WORLD TO EXPERIENCE THE ULTIMATE NIGHT.',
          marker: {
            title: 'Tenderloin',
            latitude: 37.7847,
            longitude: -122.4145
          },
          date: 'June 9, 2016 @ 9:00PM',
          price: '$0'
        }
      ];

const Cards2 = [
  {name: '10', image: 'https://media.giphy.com/media/12b3E4U9aSndxC/giphy.gif'},
  {name: '11', image: 'https://media4.giphy.com/media/6csVEPEmHWhWg/200.gif'},
  {name: '12', image: 'https://media4.giphy.com/media/AA69fOAMCPa4o/200.gif'},
  {name: '13', image: 'https://media.giphy.com/media/OVHFny0I7njuU/giphy.gif'},
]

class Tinder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      roams: roams,
      outOfCards: false
    }
  }

  handleYup (card) {
    // console.log("yupppp");
  }
  handleNope (card) {
    console.log("nope")
  }
  cardRemoved (index, swipedRight) {
    console.log('swipedRight', swipedRight);
    console.log(`The index is ${index}`);
    console.log('this.state.outOfCards', this.state.outOfCards);
    if (swipedRight) {
      this.props.navigator.push({name: 'EnrollConfirmation'});
    } else {
      let CARD_REFRESH_LIMIT = 3

      if (this.state.roams.length - index <= CARD_REFRESH_LIMIT + 1) {
        console.log(`There are only ${this.state.roams.length - index - 1} cards left.`);

        if (!this.state.outOfCards) {
          console.log(`Adding ${Cards2.length} more cards`)
          this.setState({
            cards: this.state.roams.concat(Cards2),
            outOfCards: true
          })
          console.log('went to first');
        } else {
          console.log('went to second');
          this.props.navigator.push({name: 'NoRoamsLeft'});
        }

      }

    }

  }


  // handleReject() {
  //   console.log('you don\'t like it');
  //   if (this.state.currentRoamIndex < this.state.roams.length - 1 ) {
  //     this.state.currentRoamIndex++;
  //     this.setState({currentRoam: this.state.roams[this.state.currentRoamIndex]})
  //   } else {
  //     console.log('NEXT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
      
  //   }
  //   console.log('ROAMS:' + JSON.stringify(this.state.roams));
  //   console.log('MARKER', this.state.roams[0].marker);

  // }

  // handleEnroll() {
  //   console.log('it seems like you like it');
  //   //TODO: SEND REQUEST TO SERVER
    
  // }



  render() {
    return (
      <SwipeCards
        cards={this.state.roams}
        loop={false}

        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        showYup={true}
        showNope={true}

        handleYup={this.handleYup.bind(this)}
        handleNope={this.handleNope.bind(this)}
        cardRemoved={this.cardRemoved.bind(this)}
      />
    )
  }
}

const styles = StyleSheet.create({
 
  thumbnail: {
    flex: 1,
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header2: {
    fontSize: 50,
    fontWeight: "100",
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent',
    letterSpacing: 3
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderColor: 'white',
    borderRadius: 8,
    // flex: 1,
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    height: 470,
    // marginTop: -100
  },

  cardTitleWrap: {
    marginTop: 20,
    marginBottom: 0
  },

  cardHeader: {
    marginBottom: 5,
    fontSize: 30,
    fontWeight: "100",
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent',
    letterSpacing: 3
  },
  cardTimeText: {
    marginBottom: 20,
    fontSize: 17,
    fontWeight: "400",
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent',
    letterSpacing: 2
  },
  
  cardButton: {
    height: 50,
    width: 130,
    flexDirection: 'row',
    backgroundColor: '#ff0066',
    borderRadius:10,
    marginBottom: 10,
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 40
  },
  cardMap: {
    marginTop: -15,
    width: 300,
    height: 300
  },
  cardDescription: {
    color: 'rgb(255,255,255)',
    fontFamily: 'Gill Sans',
    textAlign: 'justify',
    letterSpacing: 0
    
  },
  icons: {
    backgroundColor: 'rgba(255,255,255,0.75)',
    marginTop: -80,
    // marginLeft: -35,
    // flex:1,
    // flexDirection:'row',
    width: 280,
    height: 40

  },

  cardAttendingWrap: {
    flex: 1,
    flexDirection: 'row'
  },
  cardCapacityWrap: {
    flex: 1,
    flexDirection: 'row'
  },
  cardPriceWrap: {
    flex: 1,
    flexDirection: 'row'
  },

  participantsText: {
    fontSize:25
  },
  capacityText: {
    fontSize: 25
  },
  priceText: {
    fontSize: 25
  },

  priceIcon: {
    width: 32,
    resizeMode: 'contain',
    marginTop: -235,
    marginLeft: 7
  },
  priceTextWrap: {
    marginTop: 5,
    marginLeft: -4
  },

  participantsIcon: {
    width:18,
    resizeMode: 'contain',
    marginTop: -86,
    marginLeft: 145
  },
  participantsTextWrap: {
    marginTop: -7,
    marginLeft: -5
  },
  
  capacityIcon: {
    marginTop: -137,
    marginLeft: 200,
    width:30,
    resizeMode: 'contain',
  },
  capacityTextWrap: {
    marginTop: -20,
    marginLeft: -3
  },

  cardDescriptionWrap: {
    marginTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 80
    
  }, 
  cardControls: {
    // marginBottom: 50,
    flexDirection: 'row',
    alignItems: 'center'
  }


});

module.exports = Tinder;