    
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors, session }) => {
  return {
    errors: errors.session,
    currentUserId: session.currentUserId

  };
};

const mapDispatchToProps = dispatch => {
  return {
    signupForm: (user) => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);