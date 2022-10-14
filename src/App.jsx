import Axios from "axios";
import React, { useEffect, useState } from "react";
import { CardList } from "./assets/pages";
import Form from "react-bootstrap/Form";

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
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
  }, [data, input]);

  return (
    <>
      <div className="container sticky-top" id="search">
        <div className="col">
          <h1 className="text-center">Kumpulan Doa Harian</h1>
          <p className="text-center">Made by Do-2 using Javascript</p>
          <hr />
          <Form.Group controlId="form">
            <Form.Control onChange={(e) => setInput(e.target.value)} type="text" placeholder="Cari Doa ..." className="text-center" />
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
