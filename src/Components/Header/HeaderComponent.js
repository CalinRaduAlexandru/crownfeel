// DEPENDENCIES
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase/Firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// COMPONENTS
import { ReactComponent as Logo } from "../../Assets/crown.svg";
import CartIcon from "../CartIcon/Cart-icon.component";
import CartDropdown from "../Cart-dropdown/Cart-dropdown.component";

// FUNCTIONS
import { selectCartHidden } from "../../Redux/Cart/Cart-selectors";
import { selectCurrentUser } from "../../Redux/User/User-selector";

// STYLE-SHEETS
import "./HeaderComponent.styles.scss";
import "../../App.css";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
