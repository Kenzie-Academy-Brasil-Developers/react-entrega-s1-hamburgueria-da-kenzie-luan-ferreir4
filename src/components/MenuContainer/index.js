import { Product } from "../Product";
import "./style.css"
export const MenuContainer = ({ products, handleClick }) => {
  return (
    <div className="mainMenu">
      {products.map((item, index) => {
        const name = item.name;
        const category = item.category;
        const price = item.price;
        const id = item.id;
        return (
          <Product key={index} name={name} category={category} price={price} 
          id={id} handleClick={handleClick}/>
        );
      })}
    </div>
  );
};
