//Grid Component
import React, { Component } from 'react';
import {Responsive, WidthProvider} from 'react-grid-layout';
import _ from 'lodash';
import { GRIDCONFIG } from "../../Config/GridConfig";
import './style.css';
import GridItem from '../GridItem'

const ResponsiveReactGridLayout = WidthProvider(Responsive);
export default class GridView extends Component {

    constructor(props) {
        //Inherit all the properties from parent, here we don't have any
        super(props);
        //Generate layout based on the grid items
        //Same layout will be applied for all the layouts(lg, md, sm,...)
        let gridItems = GRIDCONFIG.items;
        this.state = {
            layouts: {lg: this.generateGridLayout(gridItems)},
            items: gridItems
        };
    }

    //Generate layouts based on the no.of grid items
    generateGridLayout(items) {
        //For now show the grid items as 3x3
        return _.map(items, function (item, i) {
            return {
                x: GRIDCONFIG.compactType === 'vertical' ? (i * item.width) % 12 : Math.floor((i * item.height) / 6) * item.width,
                y: GRIDCONFIG.compactType === 'vertical' ? Math.floor(i / 3) : (i * item.height) % 6,
                w: item.width,
                h: item.height,
                i: i.toString(),
                isResizable: item.resizable,
                isDraggable: item.draggable
            };
        });
    }

    //Display the grid items in the way you want to
    generateGridItems() {
        let items = this.state.items;
        return _.map(this.state.layouts.lg, function (l, i) {
            return (
                <div key={i}>
                    <GridItem title={items[i].title} text={items[i].text} />
                </div>);
        });
    }

    render() {
        return (
            <div>
                <div>
                    <div className="layout_header">Welcome to Grid Layout</div>
                </div>
                <div>
                  <ResponsiveReactGridLayout
                      {...this.props}
                      layouts={this.state.layouts}
                      cols={GRIDCONFIG.cols}
                      breakpoints={GRIDCONFIG.breakpoints}
                      compactType={GRIDCONFIG.compactType}>
                      {this.generateGridItems()}
                  </ResponsiveReactGridLayout>
              </div>
              <div>
                    <div className="layout_footer">Powered by Cognizant Technologies</div>
              </div>
            </div>
        );
    }
}
