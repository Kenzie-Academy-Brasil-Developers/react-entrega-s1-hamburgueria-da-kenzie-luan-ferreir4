import { useState } from "react";

import "./App.css";
import { Header } from "./components/Header";
import { MenuContainer } from "./components/MenuContainer";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Hamburguer", category: "Sanduíches", price: 7.99 },
    { id: 2, name: "X-Burguer", category: "Sanduíches", price: 8.99 },
    { id: 3, name: "X-Salada", category: "Sanduíches", price: 10.99 },
    { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99 },
    { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99 },
    { id: 6, name: "Coca", category: "Bebidas", price: 4.99 },
    { id: 7, name: "Fanta", category: "Bebidas", price: 4.99 },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredItem, setfilteredItem] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);

  const [currentSale, setCurrentSale] = useState([]);

  const showProducts = (filteredText) => {
    if (filteredText !== "") {
      const filtered = products.filter((item) => {
        if (item.name === filteredText) {
          return item;
        } else if (item.category === filteredText) {
          return item;
        }
      });

      setFilteredProducts([...filteredProducts, ...filtered]);
      console.log(filtered);

      setIsFiltered(true);

      setfilteredItem("");
    }
  };

  const showAll = () => {
    setIsFiltered(false);
    setFilteredProducts([]);
  };

  const handleClick = (id) => {
    const idsList = [];

    const newItem = products.find((item) => {
      return id === item.id;
    });

    currentSale.forEach((item) => {
      idsList.push(item.id);
    });

    if (!idsList.includes(id)) {
      setCurrentSale([...currentSale, newItem]);
    }
  };

  if (isFiltered) {
    return (
      <div className="App">
        <Header />
        <main className="App-main">
          <section className="filterContainer">

          <h3>Resultados</h3>

            <input
              type="text"
              value={filteredItem}
              onChange={(evt) => setfilteredItem(evt.target.value)}
            />

            <button onClick={() => showProducts(filteredItem)}>
              Buscar item
            </button>

            <button onClick={showAll}>Mostrar tudo</button>
          </section>

          <MenuContainer
            products={filteredProducts}
            handleClick={handleClick}
          />

          <section className="App-cart">
            <h2>Carrinho</h2>

            <div className="App-cart__price">
              <h5>Total a pagar:</h5>
              <p>
              R$ {currentSale
                  .reduce((total, current) => current.price + total, 0)
                  .toFixed(2)}
              </p>
            </div>

            <div className="App-cart__itemsList">
              {currentSale.map((item, index) => {
                return (
                  <div key={index} className="productCard">
                    <h2>{item.name}</h2>
                    <p>Categoria: {item.category}</p>
                    <p>Preço: {item.price}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Header />
        <main className="App-main">
          <section className="filterContainer">
            <h3>Busque por nome ou categoria</h3>
            <input
              type="text"
              value={filteredItem}
              onChange={(evt) => setfilteredItem(evt.target.value)}
            />
            <button onClick={() => showProducts(filteredItem)}>
              Buscar item
            </button>
          </section>

          <MenuContainer products={products} handleClick={handleClick} />

          <section className="App-cart">
            <h2>Carrinho</h2>

            <div className="App-cart__price">
              <h5>Total a pagar:</h5>
              <p>
                R$ {currentSale
                  .reduce((total, current) => current.price + total, 0)
                  .toFixed(2)}
              </p>
            </div>

            <div className="App-cart__itemsList">
              {currentSale.map((item, index) => {
                return (
                  <div key={index} className="productCard">
                    <h2>{item.name}</h2>
                    <p>Categoria: {item.category}</p>
                    <p>Preço: {item.price}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      </div>
    );
  }
};

export default App;
