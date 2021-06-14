import React, { useEffect, useState } from "react";
import { fetch, table } from "./Components/Components";
import "./App.css";

function App() {
  const [page1, setpage1] = useState([]);
  const [page2, setpage2] = useState([]);
  const [tableData, settableData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data1 = await fetch(1);
      const data2 = await fetch(2);
      setpage1(data1);
      setpage2(data2);
      settableData(data1);
    }

    fetchData();
  }, []);

  const handleClick = (e, page) => {
    e.preventDefault();

    if (page === 1) {
      settableData(page1);
      remAttr(2);
    } else {
      settableData(page2);
      remAttr(1);
    }
    setAttr(page);
  };

  return (
    <div className="container table-responsive">
      <h1 className="text-center text-light">Users</h1>
      <table className="table table-danger table-bordered border-danger">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th>E-mail</th>
            <th scope="col">Avatar</th>
          </tr>
        </thead>
        <tbody>{tableData && table(tableData)}</tbody>
      </table>

      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end">
          <li
            className="page-item active"
            id="1"
            aria-current="page"
            onClick={(e) => handleClick(e, 1)}
          >
            <span className="page-link">1</span>
          </li>
          <li className="page-item " id="2" onClick={(e) => handleClick(e, 2)}>
            <span className="page-link">2</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;

function setAttr(id) {
  document.getElementById(`${id}`).setAttribute("aria-current", "page");
  document.getElementById(`${id}`).setAttribute("class", "page-item active");
}

function remAttr(id) {
  document.getElementById(`${id}`).removeAttribute("aria-current", "page");
  document.getElementById(`${id}`).removeAttribute("class", "page-item active");
}
