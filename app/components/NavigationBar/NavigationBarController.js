import React from 'react';
import {connect} from 'react-redux';

import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import NavigationExpandMore from 'material-ui/lib/svg-icons/navigation/expand-more';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconButton from 'material-ui/lib/icon-button';

import {toggleRestaurantList} from '../../actions/actions';
import RestaurantListContainer from './../RestaurantList/RestaurantListContainer';
import OptionsContainer from './../Options/OptionsContainer';

class NavigationBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            optionsOpen: false
        }
    }
    render(){
        return(
        <LeftNav open={this.props.open}>
            <AppBar
                iconElementLeft={
                <IconButton
                    onClick={()=> this.props.toggleRestaurantList()}
                >
                    <NavigationClose/>
                </IconButton>}
                iconElementRight={
                <IconButton
                    onClick={()=> this.setState({optionsOpen: !this.state.optionsOpen})}
                >
                    <NavigationExpandMore/>
                </IconButton>}
            />
            {this.state.optionsOpen?
            <OptionsContainer
                filterBy={this.props.filterBy}
                sortBy={this.props.sortBy}
                changeFilter={(value)=>this.props.changeFilter(value)}
                changeSort={(value)=>this.props.changeSort(value)}
            />:<RestaurantListContainer
                filterBy={this.props.filterBy}
                sortBy={this.props.sortBy}
                closeHandler={this.props.closeHandler}
            />}
        </LeftNav>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        toggleRestaurantList: () => dispatch(toggleRestaurantList(false))
    }
};

NavigationBar = connect(
  null,
  mapDispatchToProps
)(NavigationBar);

export default NavigationBar;
