import React, { useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Modal } from "react-bootstrap";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Items = (props) => {
  const [show, setShow] = useState(false);
  const [showImage, setShowImage] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setShow(true);
    setShowImage(item);
  };

  return (
    <ListGroup className="ListGroup">
      {props.itemList.map((product) => (
        <ListGroupItem key={product.id}>
            <h5 className="Desc">{product.desc}</h5>
            <img
              src={product.image}
              alt={product.desc}
              height="200"
              width="200"
              onClick={() => handleShow(product)}
            />
            {" \xa0\xa0\xa0\xa0\xa0\xa0\xa0 "}
            <button onClick={() => props.handleIncrease(product)}>
              <FontAwesomeIcon icon={faPlusCircle} />
            </button>
            {" \xa0 "}
            <button onClick={() => props.handleDecrease(product)}>
              <FontAwesomeIcon icon={faMinusCircle} />
            </button>
            {" \xa0\xa0\xa0\xa0\xa0\xa0\xa0 "}
            <span>{product.value}</span>
            quantity
        </ListGroupItem>
      ))}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{showImage.desc}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={showImage.image}
            width="350"
            alt={showImage.desc}
            className="mx-5"
          />
          <p>
            <span className="text-dark">Ratings:</span> {showImage.rating}/5
          </p>
        </Modal.Body>
      </Modal>
    </ListGroup>
  );
};