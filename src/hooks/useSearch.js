import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";

const url = "https://cors.bridged.cc/https://jobs.github.com/positions.json";

function useSearch() {
  const history = useHistory();
  const { search } = useLocation();

  const [results, setResults] = useState([]);
  const [fields, setFields] = useState({
    description: "",
    location: "",
    full_time: "off",
  });

  const handleChange = (event) => {
    setFields((fields) =>
      event.target.name === "full_time"
        ? {
            ...fields,
            [event.target.name]: event.target.checked ? "on" : "off",
          }
        : { ...fields, [event.target.name]: event.target.value }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let query = new URLSearchParams(fields);
    history.push({
      pathname: "/positions",
      search: `?${query.toString()}`,
    });
  };

  useEffect(() => {
    axios
      .get(`${url}${search}`)
      .then((res) => setResults(res.data))
      .catch((err) => console.log(err));
  }, [search]);

  return { fields, handleChange, handleSubmit, results };
}

export default useSearch;
