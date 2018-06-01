import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Screen, NavigationBar, View, Heading, Text } from '@shoutem/ui';
import {Genres} from './Genres'

const Radio = () => (
// <Image source={require('./media/radio.png')}
// style={{width: 64, height: 64 }} />
<Text>Bamdad</Text>
);


export const AppUI = connect(
    (state) => ({
        genres: state.genres
    })
)(({ genres }) => (
  <Screen>
      <NavigationBar centerComponent={<Radio />} />

        <View style={{paddingTop: 80}}>
            <Heading styleName="h-center">
                What do you feel like?
            </Heading>

            <Genres genres={genres} />
        </View>
  </Screen>

));
