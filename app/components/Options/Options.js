import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import RadioButton from 'material-ui/lib/radio-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';

import AppConstants from '../../constants/constants';

const Options = (props) => {
    return(
        <List>
            <List subheader='sort by'>
                <ListItem disabled={true}>
                    <RadioButtonGroup
                        name='sort'
                        defaultSelected={props.sortBy}
                        onChange={(e, value)=> props.changeSort(value)}
                    >
                        {[AppConstants.sorters.map((sorterName) => (
                        <RadioButton
                            value={sorterName}
                            label={sorterName}
                            style={{marginBottom:16}}
                        />
                        ))]}
                    </RadioButtonGroup>
                </ListItem>
            </List>
            <List subheader='filter by'>
                <ListItem disabled={true}>
                    <RadioButtonGroup
                        name='filter'
                        defaultSelected={props.filterBy}
                        onChange={(e, value)=> props.changeFilter(value)}
                    >
                        {[AppConstants.filters.map((filterName) => (
                        <RadioButton
                            value={filterName}
                            label={filterName}
                            style={{marginBottom:16}}
                        />
                        ))]}
                    </RadioButtonGroup>
                </ListItem>
            </List>
        </List>
    )
};
export default Options;