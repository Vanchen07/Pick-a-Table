import { connect } from 'react-redux';
import Splash from './splash';
import { addFilter } from '../../actions/filter_actions';

const mapStateToProps = ({ session, entities: { users}}) => {
  return {
    currentUser: users[session.currentUserId]
  };
};

const mapDispatchToProps = dispatch => ({
  addFilter: (filter, value) => dispatch(addFilter(filter, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);