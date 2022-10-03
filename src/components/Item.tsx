import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

export const Item = (props: { repository: {name: string, description: string, link: string}}) => {
  return (
    <div>
      <h1>{props.repository.name}</h1>
      <p>{props.repository.description}</p>
      <a href={props.repository.link}>Acessar repositório</a>
    </div>
  );
};
