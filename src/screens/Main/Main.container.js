import { connect } from 'react-redux';

import Main from './Main';
import { socketMessage, socketClose } from '../../data/socket/socket.actions';
import { getBook, getTrades, getTicker } from '../../data/socket/socket.selectors';

const mapStateToProps = (state) => ({
  book: getBook(state),
  trades: getTrades(state),
  ticker: getTicker(state),
});

const mapDispatchToProps = {
  socketMessage,
  socketClose,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
