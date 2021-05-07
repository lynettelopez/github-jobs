import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Banner from "../layouts/Banner";
import Body from "../layouts/Body";
import Footer from "../layouts/Footer";

const url = "https://cors.bridged.cc/https://jobs.github.com";

function PositionPage() {
  const { pathname } = useLocation();
  const [position, setPosition] = useState({});

  useEffect(() => {
    axios
      .get(url + pathname + ".json")
      .then((res) => setPosition(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <>
      <Banner
        logo={position.company_logo}
        company={position.company}
        url={position.company_url}
      />
      <Body
        createdAt={position.created_at}
        type={position.type}
        title={position.title}
        location={position.location}
        url={position.company_url}
        description={position.description}
        apply={position.how_to_apply}
      />
      <Footer
        title={position.title}
        company={position.company}
        url={position.company_url}
      />
    </>
  );
}

export default PositionPage;
