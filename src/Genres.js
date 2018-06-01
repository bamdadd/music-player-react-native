import { ListView, GridRow} from '@shoutem/ui';
import {GenreButton} from './GenreButton';
import React, { Component } from 'react';


export class Genres extends Component {
    renderRow(rowData, sectionId, index) {
        const cellViews = rowData.map((genre, id) => (
            <GenreButton key={id} genre={genre} />
        ));

        return (
            <GridRow columns={2}>
                {cellViews}
            </GridRow>
        )
    }

    render() {
        const groupedGenres = GridRow.groupByRows(this.props.genres, 2);

        return (
            <ListView data={groupedGenres}
                      renderRow={this.renderRow} />
        )
    }
}
