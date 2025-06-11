import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "../../components/Cards";

const Mens = () => {
  const [data, setData] = useState([]);
  const API = "https://jsonplaceholder.typicode.com/photos";

  const getMensData = async () => {
    try {
      const res = await axios.get(API);
      console.log(res.data);
      setData(res.data.slice(0, 20));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMensData();
  }, []);

  return (
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
      }}
    >
      {data.map((currElem) => (
        <Cards key={currElem.id} mensImage={currElem} />
      ))}
    </ul>
  );
};

export default Mens;
