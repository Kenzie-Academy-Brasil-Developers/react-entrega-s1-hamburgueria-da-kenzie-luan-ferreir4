import "./style.css";

export const Product = ({ name, category, price, id, handleClick }) => {
    
  return (
    <div className="productCard">
      <h4>{name}</h4>
      <p>Categoria: {category}</p>
      <small>Preço: {price}</small>
      <button onClick={()=>handleClick(id)}>Adicionar ao carrinho</button>
    </div>
  );
};
