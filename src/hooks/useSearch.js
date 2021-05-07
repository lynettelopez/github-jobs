import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";

const url = "https://cors.bridged.cc/https://jobs.github.com/positions.json";

function useSearch() {
  const [fields, setFields] = useState({
    description: "",
    location: "",
    full_time: "off",
  });
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [canLoadMoreResults, setCanLoadMoreResults] = useState(true);
  const history = useHistory();
  const { search } = useLocation();

  const handleChange = (e) => {
    setFields((fields) =>
      e.target.name === "full_time"
        ? {
            ...fields,
            [e.target.name]: e.target.checked ? "on" : "off",
          }
        : { ...fields, [e.target.name]: e.target.value }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let query = new URLSearchParams(fields).toString();
    history.push({
      pathname: "/positions",
      search: `?${query}`,
    });
  };

  const loadMoreResults = () => {
    let query = new URLSearchParams(fields).toString();
    history.push({
      pathname: "/positions",
      search: `?${query}&page=${page + 1}`,
    });
  };

  useEffect(() => {
    axios
      .get(url + search)
      .then((res) => {
        setResults(res.data);
        let pageNum = parseInt(new URLSearchParams(search).get("page"));
        setPage(pageNum ? pageNum : 1);
        setCanLoadMoreResults(res.data.length < 50 ? false : true);
      })
      .catch((err) => console.log(err));

    let timer = setTimeout(() => window.scrollTo(0, 0), 1000);

    return () => clearTimeout(timer);
  }, [search]);

  return {
    fields,
    handleChange,
    handleSubmit,
    results,
    loadMoreResults,
    canLoadMoreResults,
  };
}

export default useSearch;
