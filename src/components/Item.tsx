import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

export const Item = (props: { name: string }) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
};
