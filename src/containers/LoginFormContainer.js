import LoginForm from '../components/LoginForm';
import { login } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: (payload) => {
      dispatch(login(payload))
    }
  };
};

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default LoginFormContainer;
