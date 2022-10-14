import React from "react";
import Card from "react-bootstrap/Card";
import "./style.css";
import Accordion from "react-bootstrap/Accordion";

const cardList = (props) => {
  const { judul, ayat, arti, latin } = props;
  return (
    <div className="container mt-2 ">
      <div className="div">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>{judul}</Accordion.Header>
            <Accordion.Body>
              <Card.Title>{ayat}</Card.Title>
              <Card.Text>
                <i>{latin}</i>
              </Card.Text>
              <p>Artinya:</p>
              <Card.Text>{arti}</Card.Text>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default cardList;
