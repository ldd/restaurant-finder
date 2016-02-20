import { connect } from 'react-redux';
import Main from './Main';

const mapStateToProps = (state) => {
  return {
    isListVisible: state.isListVisible
  };
};

const MainContainer = connect(
  mapStateToProps
)(Main);

export default MainContainer;