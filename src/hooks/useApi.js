import { useState, useEffect } from "react";
import axios from "axios";

function useApi() {
  const url = "https://cors.bridged.cc/https://jobs.github.com/positions.json?";

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const queryApi = (q) => {
    setQuery(q);
  };

  useEffect(() => {
    async function getData() {
      await axios
        .get(`${url}${query}`)
        .then((res) => setResults(res.data))
        .catch((err) => console.log(err));
    }
    getData();
    console.log(results);
  }, [query]);

  return { queryApi, results };
}

export default useApi;
