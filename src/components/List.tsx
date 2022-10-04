import { Item } from "./Item";
import { useState, useEffect } from "react";

export const List = () => {

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/SamuelRicardoDS/repos')
    .then(response => response.json())
    .then(data => setRepos(data))
  }, []);

  return (
    <div>
        <section>
            <h1>Repositories List</h1>
            <ul>
              {repos.map(repository => {
                return <Item key={Item.name} repository={repository} />
              })}
            </ul>
        </section>
    </div>
  );
};
