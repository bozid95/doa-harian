import Axios from "axios";
import React, { useEffect, useState } from "react";
import { CardList } from "./assets/pages";
import Form from "react-bootstrap/Form";

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState(12);
  const [output, setOutput] = useState([]);

  useEffect(() => {
    Axios.get("api.json")
      .then((result) => {
        console.log("data API", result.data);
        const ResponseAPI = result.data;
        setData(ResponseAPI);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  useEffect(() => {
    setOutput([]);
    data.filter((val) => {
      if (val.doa.toLowerCase().includes(input.toLowerCase())) {
        setOutput((output) => [...output, val]);
      }
    });
  }, [input]);

  return (
    <>
      <div className="container-fluid" id="search">
        <div className="col-md-10">
          <h1 className="text-center">CARI DO'A</h1>
<h10 className="text-center">Made by Do-2 using Javascript</h10>
          <Form.Group controlId="form">
            <Form.Control onChange={(e) => setInput(e.target.value)} type="text" placeholder="Cari Doa Sehari-hari" className="text-center" />
          </Form.Group>
        </div>
      </div>
      {output.map((doa) => {
        return <CardList key={doa.id} judul={doa.doa} ayat={doa.ayat} latin={doa.latin} arti={doa.artinya} />;
      })}
    </>
  );
}

export default App;
