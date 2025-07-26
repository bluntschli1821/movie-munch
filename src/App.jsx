import { useEffect, useState } from "react";
import { Search } from "./components/search";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${searchTerm}`
      );
      const data = await response.json();
      console.log(data);
    };

    if (searchTerm) {
      fetchData();
    }
  }, [searchTerm]);

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hassle
          </h1>
        </header>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

         
      </div>
    </main>
  );
};

export default App;
