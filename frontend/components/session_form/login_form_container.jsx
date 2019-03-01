import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { closeModal, openModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = ({ errors, session }) => {

  return {
    errors: errors.errors,
    currentUserId: session.currentUserId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginForm: (user) => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    openSignupModal: () => dispatch(openModal('signup')),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);