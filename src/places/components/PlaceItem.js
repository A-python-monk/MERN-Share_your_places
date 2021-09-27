import React, { useContext, useState } from "react";
import AuthContext from "../../shared/components/context/auth-context";
import Modal from "../../shared/components/Modal";
import Card from "../../shared/components/UIComponents/Card";
import Button from "../../shared/components/UIComponents/FormsElements/Button";
import Map from "../../shared/components/UIComponents/Map";

import "./PlaceItem.css";

const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };
  const cancleWarningHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = () => {
    console.log("Deleting");
  };

  const auth = useContext(AuthContext);

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map />
        </div>
      </Modal>

      <Modal
        show={showConfirmModal}
        onCancel={cancleWarningHandler}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancleWarningHandler}>CANCLE</Button>
            <Button danger onClick={confirmDeleteHandler}>DELETE</Button>
          </React.Fragment>
        }
      >
        <h2>Do you to delete?This cannot be undone.</h2>
      </Modal>

      <li className="place-item">
        <Card>
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2> {props.title} </h2>
            <h3> {props.address} </h3>
            <p> {props.description} </p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
              {" "}
              VIEW ON MAP
            </Button>
            {auth.isLoggedIn &&
            <Button to={`/places/${props.id}`}> EDIT</Button>}
            {auth.isLoggedIn &&
            <Button danger onClick={showDeleteWarningHandler}> DELETE</Button>}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
            };
export default PlaceItem;
