import Icon from 'shared/components/Icon/Icon';
import { AuthContainer, AuthLink, AuthItem } from './AuthNav.styles';

const AuthNav = () => {
  return (
    <AuthContainer>
      <AuthItem>
        <AuthLink to="/login">
          Log IN
        <Icon id="paw" />
        </AuthLink>
      </AuthItem>
      <AuthItem>
        <AuthLink to="/register">
          Registration
        </AuthLink>
      </AuthItem>
      
    </AuthContainer>
  );
}

export default AuthNav;