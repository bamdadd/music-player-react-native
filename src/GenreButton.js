import React, { Component } from 'react';
import {connect} from 'react-redux'
import { TouchableOpacity, Card, Subtitle, View, Text} from '@shoutem/ui';
import { GenreArt } from './GenreArt';
import { playGenre } from './actions';


export const GenreButton = connect(
    (state) => ({
        currentlyPlaying: state.currentlyPlaying
    })
)(({ genre, currentlyPlaying, dispatch }) => (
    <TouchableOpacity styleName="flexible" onPress={() => dispatch(playGenre(genre))}>
        <View>
            <Card styleName="flexible">
                {currentlyPlaying.id === genre.id ? <Text>Playing..</Text> : <GenreArt name={genre.name} />}
                <Subtitle numberOfLines={1}>{genre.name}</Subtitle>
            </Card>
        </View>
    </TouchableOpacity>
));
