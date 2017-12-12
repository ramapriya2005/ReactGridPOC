//Grid Item Component
import React, { Component } from 'react';
//import { Card, CardTitle, CardText } from 'react-md';
import './style.css';
import {
  Grid, TableView, TableHeaderRow
} from '@devexpress/dx-react-grid-material-ui';

export default class GridItem extends Component {
    render() {
        return (
            <Grid
              rows={[
                  { id: 1, car: 'Honda Accord', owner: 'John' },
                  { id: 2, car: 'Honda Civic', owner: 'Robert' },
                  { id: 3, car: 'Toyota Camry', owner: 'Rich' },
                ]}
              columns={[
                  { name: 'id', title: 'ID' },
                  { name: 'car', title: 'Car' },
                  { name: 'owner', title: 'Owner' },
                ]}>
              <TableView />
            <TableHeaderRow />
          </Grid>
        );
    }
}
