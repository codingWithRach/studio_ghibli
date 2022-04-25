import { useEffect, useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";

const Layout: React.FC = () => {
  const [filmTitle, setFilmTitle] = useState<string>("");
  const getFilm = async () => {
    await axios
      .get("https://ghibliapi.herokuapp.com/films")
      .then((apiResponse: AxiosResponse) => {
        setFilmTitle(apiResponse.data[0].title);
      })
      .catch((error: AxiosError) => {
        switch (error.response?.status) {
          // internal server error
          case 500:
            setFilmTitle("Oops… something went wrong, try again 🤕");
            break;
          // I'm a teapot
          case 418:
            setFilmTitle("418 I'm a tea pot 🫖, silly");
            break;
          // any other error
          default:
            setFilmTitle(error.message);
            break;
        }
      });
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
