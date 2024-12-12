// import { useState, useEffect } from "react";

// type FetchDataResponse = {
//   id: number;
//   title: string;
//   body: string;
// };

// //custom hook
// function useFetchData(url: string) {
//   const [data, setData] = useState<FetchDataResponse | null>(null);

//   const [loading, setLoading] = useState<boolean>(true);

//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     setLoading(true);
//     setError(null);

//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);

//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }

//         const result = await response.json();
//         setData(result);
//       } catch (error: any) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [url]);

//   return { data, loading, error };
// }

// const UseEffectUsingCustomHooks: React.FC = () => {
//   const { data, loading, error } = useFetchData(
//     "https://jsonplaceholder.typicode.com/posts"
//   );

//   if (loading) {
//     return <div>LOADING DATA.......</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h2>UseEffect using custom hooks</h2>
//       <h4>{data?.title}</h4>
//       <p>{data?.body}</p>
//     </div>
//   );
// };

// export default UseEffectUsingCustomHooks;

import React, { useState, useEffect } from "react";

const UseEffectUsingCustomHooks: React.FC = () => {
  const [data, setData] = useState<any[]>([]); //to store fetch data
  const [loading, setLoading] = useState(true); // to track loading state
  const [error, setError] = useState<string>(""); // to store any error message

  useEffect(() => {
    //function to fetch data
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

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

  //   return (
  //     <div>
  //       <h2>UseEffect using custom hooks</h2>
  //       <h4>Data: {JSON.stringify(data)}</h4>
  //     </div>
  //   );

  return (
    <div>
      <h2>UseEffect using custom hooks</h2>
      <div>
        {data.map((item) => (
          <div key={item.id} style={{ marginBottom: "20px" }}>
            <h4>{item.title}</h4>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseEffectUsingCustomHooks;
