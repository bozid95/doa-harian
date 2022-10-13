import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import "./style.css";

const Search = () => {
  const [input, setInput] = useState(0);
  const [output, setOutput] = useState([]);

  useEffect(() => {
    setOutput([]);
    data.filter((val) => {
      if (val.doa.toLowerCase().includes(input.toLowerCase())) {
        setOutput((output) => [...output, val]);
      }
    });
  }, [input]);

  return (
    <div className="container-fluid" id="search">
      <div className="col-md-10">
        <h1 className="text-center">CARI DO'A</h1>
        <Form.Group controlId="form">
          <Form.Control onChange={(e) => setInput(e.target.value)} type="text" placeholder="Cari Doa Sehari-hari" className="text-center" />
        </Form.Group>
      </div>
    </div>
  );
};

export default Search;
