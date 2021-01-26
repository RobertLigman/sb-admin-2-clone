import React, { useEffect, useState } from "react";
const DataTable = () => {
  const [state, setState] = useState();
  const [pageState, setPageState] = useState("/");

  //   let dataT;
  useEffect(() => {
    const fetchData = async () => {
      const dataT = await fetch(`https://swapi.dev/api/people${pageState}`, {
        method: "GET",
      }).then((res) => res.json());

      setState(dataT);
    };
    fetchData();
  }, [pageState]);
  //   const renderTable = (e) => {
  //     setPageState(e.target.value);
  //   };
  //   console.log(state);
  return (
    <>
      <table className="outer">
        <thead>
          <tr>
            <td>name</td>
            <td>height</td>
            <td>Hair Color</td>
            <td>Skin Color</td>
            <td>Eye Color</td>
          </tr>
        </thead>
        {/* {state} */}
        {state &&
          state.results.map((element) => {
            return (
              <tbody key={element.name}>
                <tr>
                  <td>{element.name}</td>
                  <td>{element.height}</td>
                  <td>{element.hair_color}</td>
                  <td>{element.skin_color}</td>
                  <td>{element.eye_color}</td>
                </tr>
              </tbody>
            );
          })}
      </table>
      {/* <button value="/" onClick={renderTable}>
        1
      </button>
      <button value="/?page=2" onClick={renderTable}>
        2
      </button>
      <button value="/?page=3" onClick={renderTable}>
        3
      </button> */}
    </>
  );
};
export default DataTable;
