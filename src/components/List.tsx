import { Item } from "./Item";

export const List = () => {
  return (
    <div>
        <section>
            <h1>List</h1>
            <ul>
               <Item name="item1"/>            
               <Item name="item2"/>            
               <Item name="item3"/>            
               <Item name="item4"/>            
            </ul>
        </section>
    </div>
  );
};
