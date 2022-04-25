import { useEffect, useState } from "react";
import axios from "axios";

const Layout: React.FC = () => {
  const [filmTitle, setFilmTitle] = useState<string>("");
  const getFilm = async () => {
    const apiResponse = await axios.get(
      "https://ghibliapi.herokuapp.com/films"
    );
    setFilmTitle(apiResponse.data[0].title);
  };

  useEffect(() => {
    getFilm();
  }, []);

  return (
    <>
      <h1>The first film returned is:</h1>
      <div>{filmTitle}</div>
    </>
  );
};

export default Layout;
