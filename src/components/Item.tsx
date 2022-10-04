import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

export const Item = (props: { repository: {name: string, description: string, html_url: string, language: string}}) => {
  return (
    <div>
      <h1>{props.repository.name}</h1>
      <p>{props.repository.description}</p>
      <a href={props.repository.html_url}>Acessar repositório</a>
      <p>{props.repository.language}</p>
      <hr />
    </div>
  );
};
