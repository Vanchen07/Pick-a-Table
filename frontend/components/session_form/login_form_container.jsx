import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors, session }) => {

  return {
    errors: errors.errors,
    currentUserId: session.currentUserId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginForm: (user) => dispatch(login(user)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);