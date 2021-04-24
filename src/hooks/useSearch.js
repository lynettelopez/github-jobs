import { useState } from "react";
import useApi from "./useApi";

function useSearch() {
  const { queryApi } = useApi();

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

  const handleSubmit = (event) => {
    event.preventDefault();
    let query = new URLSearchParams(fields);
    queryApi(query.toString());
  };

  return { fields, handleChange, handleSubmit };
}

export default useSearch;
