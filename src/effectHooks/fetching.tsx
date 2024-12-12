import React, { useState, useEffect } from "react";

const Fetching: React.FC = () => {
  const [data, setData] = useState<any[]>([]); //to store fetch data
  const [loading, setLoading] = useState(true); // to track loading state
  const [error, setError] = useState<string>(""); // to store any error message

  useEffect(() => {
    //function to fetch data
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://cat-fact.herokuapp.com/facts");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();

        setData(result);
      } catch (error) {
        setError("Something went wrong!");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log({ data });

  if (loading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // return (
  //   <div>
  //     <h2>User List</h2>
  //     <ul>
  //       {data.map((type) => (
  //         <li key={user.id}>{user.type}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );

  return <div>Data: {JSON.stringify(data)}</div>;
};

export default Fetching;
