import React from "react";
import { Link, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {
  faShoppingCart,
  faRegistered,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from "./Home";
import { Cart } from "./Cart";
import Login from "./Login";

export const NavBar = (props) => {
  return (
    <div>
      <Router>
        <div className="navItem">
          <h2>
            <Link to="/" className="Logo">
              Shop 2{"\xa0"}
              <FontAwesomeIcon icon={faRegistered} className="fas fa-lg" />
              eact
            </Link>
          </h2>
          <div className="navCart">
            <Link to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} className="faShoppingCart" />
            </Link> {" \xa0\xa0\xa0 "}
              {props.itemList
                .map((item) => item.value)
                .reduce((acc, curr) => acc + curr, 0)}{" "}
              items
          </div>
        </div>

        <Routes>
          <React.Fragment>
          <Route exact path="/" element={<Home
              itemList={props.itemList}
              handleIncrease={props.handleIncrease}
              handleDecrease={props.handleDecrease}
            />} />
          <Route path="/Cart" element={<Cart itemList={props.itemList} totalvalue={props.totalvalue} />} />
          <Route path="/signin" element= {<Login />}></Route>
          </React.Fragment>
        </Routes>
      </Router>
    </div>
  );
};