import { Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import {
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
} from './navigation.styles';

import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <div>
            <Logo />
          </div>
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              Sign out
            </NavLink>
          ) : (
            <NavLink to='/auth'>Sign in</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
