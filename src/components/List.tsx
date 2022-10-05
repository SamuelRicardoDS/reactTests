import { Item } from "./Item";
import { useState, useEffect } from "react";

interface Repository {
  name: string;
  description: string;
  html_url: string;
  language: string;
}

export const List = () => {

  const [repos, setRepos] = useState<Repository[]>([]);

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
                return <Item key={repository.name} repository={repository} />
              })}
            </ul>
        </section>
    </div>
  );
};
