import React from "react";
import Card from "react-bootstrap/Card";
import "./style.css";

const cardList = (props) => {
  const { judul, ayat, arti, latin } = props;
  return (
    <div className="container">
      <Card className="card">
        <Card.Header as="h5">{judul}</Card.Header>
        <Card.Body>
          <Card.Title>{ayat}</Card.Title>
          <Card.Text>
            <i>{latin}</i>
          </Card.Text>
          <p>Artinya:</p>
          <Card.Text>{arti}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default cardList;
