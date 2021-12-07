/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const API = "https://api.genderize.io?name=";
const TodoApp = () => {
  const showData = () => {
    return (
      <table className="table">
        <tbody>
          <tr>
            <td width="200px">Name</td>
            <td width="24px">:</td>
            <td width="120px">{nama.toUpperCase()}</td>
          </tr>
          <tr>
            <td width="200px">Gender</td>
            <td width="24px">:</td>
            <td width="120px">{data.gender}</td>
          </tr>
          <tr>
            <td width="200px">Probabilitas</td>
            <td width="24px">:</td>
            <td width="120px">{data.probability * 100}%</td>
          </tr>
        </tbody>
      </table>
    );
  };

  const progressBar = () => {
    return (
      <div className="progress" style={{ marginTop: "10%" }}>
        <div className="indeterminate"></div>
      </div>
    );
  };

  // state = {
  //   nama: "",
  //   data: [],
  //   loading: true
  // };

  const [nama, setNama] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [button, setButton] = useState(true);

  // const showPredict = () => {
  //   fetch(API + nama)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // this.setState({
  //       //   nama: this.state.nama,
  //       //   data: data,
  //       //   loading: false
  //       // });
  //       console.log("sukses");
  //       setData(data);
  //       setLoading(false);
  //     })
  //     .catch((err) => console.log(err.message));
  // };

  useEffect(() => {
    return nama === '' ?
    setLoading(true)
    :
    fetch(API + nama)
      .then((res) => res.json())
      .then((data) => {
        // this.setState({
        //   nama: this.state.nama,
        //   data: data,
        //   loading: false
        // });
        setData(data);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, [button]);

  return (
    <main>
      <div style={{ textAlign: "center" }}>
        <input
          type="text"
          value={nama}
          onChange={(e) => {
            setNama(e.target.value);
            setLoading(true);
          }}
          style={{
            padding: "6px 12px",
            borderRadius: "6px",
            fontSize: "24px",
            textAlign: "center"
          }}
        />
        <br />
        <button
          type="submit"
          onClick={() => setButton(!button)}
          style={{
            padding: "6px 12px",
            backgroundColor: "blue",
            color: "white",
            borderRadius: "6px",
            marginTop: "12px",
            marginBottom: "16px",
            cursor: "pointer"
          }}
        >
          CEK GENDER
        </button>
      </div>
      {loading ? progressBar() : showData()}
      <footer>©2021 Awaludin - Allright Reserved</footer>
    </main>
  );
};

export default TodoApp;
