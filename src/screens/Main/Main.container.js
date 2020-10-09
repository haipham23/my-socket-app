import { connect } from 'react-redux';

import Main from './Main';
import { socketMessage } from '../../data/socket/socket.actions';
import { getBook, getTrade, getTicker } from '../../data/socket/socket.selectors';

const mapStateToProps = (state) => ({
  book: getBook(state),
  trade: getTrade(state),
  ticker: getTicker(state),
});

const mapDispatchToProps = {
  socketMessage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
