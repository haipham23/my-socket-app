import { connect } from 'react-redux';

import Main from './Main';
import { socketMessage } from '../../data/socket/socket.actions';
import { getBooks, getTrades, getTicker } from '../../data/socket/socket.selectors';

const mapStateToProps = (state) => ({
  books: getBooks(state),
  trades: getTrades(state),
  ticker: getTicker(state),
});

const mapDispatchToProps = {
  socketMessage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
