import { ListGroup, ListGroupItem} from "reactstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";


export const Cart = (props) => {
  return (
    <React.Fragment>
    <ListGroup className="Lite">
      <h3 className="CartItems">Your cart items</h3>
      {props.itemList.map((item) => {
        if (item.value > 0) {
          return (
            <ListGroupItem key={item.id}>
              <div>
                <img className="CartImage"
                  src={item.image}
                  alt={item.desc}
                  height="120"
                  width="120"
                />
                <h5 className="CartItem">{item.desc} 
                {" \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "}
                Quantity: {item.value}
                </h5>
              </div>
            </ListGroupItem>
          );
        }
      })}
     </ListGroup>
     <Checkout totalvalue={props.totalvalue} />
     </React.Fragment>
  );
};

const Checkout = ({ totalvalue }) => {
  return totalvalue > 0 ? (
    <div>
      <Link to="/signin">
        <button className="btn btn-primary" className="CheckOut">
          Check Out
        </button>
      </Link>
    </div>
  ) : (
    <div>
      <h4 className="Contiue">There are 0 items in your cart.</h4>
      <Link to="/">
        <button className="btn btn-success Contiue">Continue Shop</button>
      </Link>
    </div>
  );
};




