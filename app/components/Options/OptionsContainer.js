import { connect } from 'react-redux';
import Options from './Options';
import {changeFilter, changeSorter} from '../../actions/actions';

const mapStateToProps = (state) => {
    return {
        sortBy: state.sorter,
        filterBy: state.filter
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        changeFilter: (filter) => {
            dispatch(changeFilter(filter))
        },
        changeSort: (sorter) => {
            dispatch(changeSorter(sorter))
        }
    }
};

const OptionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Options);

export default OptionsContainer;
