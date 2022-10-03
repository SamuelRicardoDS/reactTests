import { Item } from "./Item";
import { useState, useEffect } from "react";


export const repository = {
  name: "unform",
  description: "Forms in React",
  link: "http://github.com/unform/unform",
}

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
            <h1>List</h1>
            <ul>
               <Item repository={repository}/>            
               <Item repository={repository}/>            
               <Item repository={repository}/>            
               <Item repository={repository}/>            
            </ul>
        </section>
    </div>
  );
};
