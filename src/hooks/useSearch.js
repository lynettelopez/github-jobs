import { useState } from "react";

function useSearch() {
  const [fields, setFields] = useState({
    name: "",
    location: "",
    isFullTime: false,
  });

  const handleChange = (event) => {
    setFields((fields) =>
      event.target.name === "isFullTime"
        ? { ...fields, [event.target.name]: event.target.checked }
        : { ...fields, [event.target.name]: event.target.value }
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  return { fields, handleChange, handleSubmit };
}

export default useSearch;
