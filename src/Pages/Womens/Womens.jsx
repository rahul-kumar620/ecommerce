import axios from "axios";
import { useEffect, useState } from "react";

const Womens = () => {
  const [data, setData] = useState([]);
  const API = "https://fakestoreapi.com/products/category/men's clothing";

  const getWoMensData = async () => {
    try {
      const res = await axios.get(API);
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWoMensData();
  }, []);

  return (
    <div>
      <div className="w-40">
        {data.map((items) => (
          <div key={items.id}>
            <img src={items.image} alt={items.description} />
          </div>
        ))}
      </div>
      <h1>fghjkl</h1>
    </div>
  );
};

export default Womens;

// const getWoMensData = async () => {
//     try {
//       const res = await axios.get(API);
//       console.log(res.data);
//       setData(res.data);
//     } catch (error) {
//       console.logh(error);
//     }
//   };

//   useEffect(() => {
//     getWoMensData();
//   }, []);

{
  /* <div>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            {data.map((item) => (
              <li key={item.id}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "200px" }}
                />
                <p>{item.title}</p>
              </li>
            ))}
          </ul>
        </div> */
}
