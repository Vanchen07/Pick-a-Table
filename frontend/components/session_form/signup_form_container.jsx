    
import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { closeModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = ({ errors, session }) => {
  return {
    errors: errors.errors,
    currentUserId: session.currentUserId

  };
};

const mapDispatchToProps = dispatch => {
  return {
    signupForm: (user) => dispatch(signup(user)),
    loginForm: (user) => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);