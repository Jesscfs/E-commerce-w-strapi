import {useEffect} from "react";
import { makeRequest } from "../makeRequest";
import { useState } from "react";

const useFetch = (url)=>{

const [data, setData] = useState(null);
const [loading, setLoading] = useState(null);
const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchData =async ()=>{
        try {
            setLoading(true);
            const res = await makeRequest.get(url,  //populate and all, one more query filters. This will grab the images from the database
                {
                    headers: {
                        Authorization: `bearer ${process.env.REACT_APP_API_TOKEN}`,
                    },
                }
            );
            setData(res.data.data)
        }   catch (err) {
            setError(true);
            }
            setLoading(false);
        };
        fetchData();
    }, [url]);

    return {data, loading, error};
}

export default useFetch;




// import { useEffect, useState } from "react";
// import { makeRequest } from "../makeRequest";

// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const res = await makeRequest.get(url);
//         setData(res.data.data);
//       } catch (err) {
//         setError(true);
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, [url]);

//   return { data, loading, error };
// };

// export default useFetch;