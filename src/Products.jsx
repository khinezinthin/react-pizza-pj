import React from "react";

const products = () => {
  const products = [
    {
      id: 1,
      title: "Seafood Cocktail",
      price: 109.95,
      ingredients:
        "PINEAPPLE,HAM,FRESH SHRIMP,CRAB STICKS,THOUSAND ISLAND SAUCE,FRESH PRAWNS",
      category: "pizza",
      image:
        "http://thepizzacompany-myanmar.com/products/MGWfMR4eVdHmtFQVH5tg8UKVFQ1cb4sXZ9sRBKlt.jpeg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title: "Seafood Deluxe ",
      price: 22.3,
      ingredients: "CRAB STICKS,MARINARA SAUCE,FRESH PRAWNS,MUSSELS,CALAMARI",
      category: "pizza",
      image:
        "http://thepizzacompany-myanmar.com/products/iYy2F4dlXLesAEwwGa6qOfVv3SZVtmF7JhluDXqX.jpeg",
      rating: { rate: 4.1, count: 259 },
    },
    {
      id: 3,
      title: "Super Deluxe",
      price: 55.99,
      ingredients: "PEPPERONI,BACON,PINEAPPLE,HAM,ONION,MUSHROOM,PORK SAUSAGE",
      category: "pizza",
      image:
        "http://thepizzacompany-myanmar.com/products/e9TTASD41Fng1opSQuOVBMLkatIMAJxDPu9Q99tU.jpeg",
      rating: { rate: 4.7, count: 500 },
    },
    {
      id: 4,
      title: "Hawaiian",
      price: 15.99,
      ingredients: " BACON,PINEAPPLE,HAM",
      category: "pizza",
      image:
        "http://thepizzacompany-myanmar.com/products/XAf3RDJr6YomVrGxkvDHYsZBoWZdYDk2udL50jwb.jpeg",
      rating: { rate: 2.1, count: 430 },
    },
    {
      id: 5,
      title: "Double Cheese",
      price: 695,
      ingredients:
        "PINEAPPLE,HAM,FRESH SHRIMP,CRAB STICKS,THOUSAND ISLAND SAUCE,FRESH PRAWNS",
      category: "pizza",
      image:
        "http://thepizzacompany-myanmar.com/products/2F6HCycwme2P5qHsSfYRXRryMX8Vkg4rnbsUkiYq.jpeg",
      rating: { rate: 4.6, count: 400 },
    },
    {
      id: 6,
      title: "Double Pepperoni ",
      price: 168,
      ingredients:
        "PINEAPPLE,HAM,FRESH SHRIMP,CRAB STICKS,THOUSAND ISLAND SAUCE,FRESH PRAWNS",
      category: "pizza",
      image:
        "http://thepizzacompany-myanmar.com/products/EogKjBuEXHoimPU0IyOQ3ZNT4xz3TFo8M37IGtwh.jpeg",
      rating: { rate: 3.9, count: 70 },
    },
    {
      id: 7,
      title: "Chicken Caldo",
      price: 9.99,
      ingredients:
        "PINEAPPLE,HAM,FRESH SHRIMP,CRAB STICKS,THOUSAND ISLAND SAUCE,FRESH PRAWNS",
      category: "pizza",
      image:
        "http://thepizzacompany-myanmar.com/products/ZwencW5k4kqAYgaY1HtnahIlROnEZHJsoh18fkIe.jpeg",
      rating: { rate: 3, count: 400 },
    },
    {
      id: 8,
      title: "Ham & Mushroom",
      price: 10.99,
      ingredients:
        "PINEAPPLE,HAM,FRESH SHRIMP,CRAB STICKS,THOUSAND ISLAND SAUCE,FRESH PRAWNS",
      category: "pizza",
      image:
        "http://thepizzacompany-myanmar.com/products/xikwvmxJYMCZaoO2IlefoP4FsfWyw9ADoyQNWRZM.jpeg",
      rating: { rate: 1.9, count: 100 },
    },
    {
      id: 9,
      title: "Tropical Seafood ",
      price: 64,
      ingredients:
        "PINEAPPLE,HAM,FRESH SHRIMP,CRAB STICKS,THOUSAND ISLAND SAUCE,FRESH PRAWNS",
      category: "pizza",
      image:
        "http://thepizzacompany-myanmar.com/products/y70kaxsmyR5lPrIV9vBNcfOH4ilxlHvuzKCj0yC9.jpeg",
      rating: { rate: 3.3, count: 203 },
    },
    {
      id: 10,
      title: "Aloha",
      price: 109,
      ingredients:
        "PINEAPPLE,HAM,FRESH SHRIMP,CRAB STICKS,THOUSAND ISLAND SAUCE,FRESH PRAWNS",
      category: "pizza",
      image:
        "http://thepizzacompany-myanmar.com/products/gwaFmUlOUB20E9yqRrz3w6Z46Q1gGlWTuTsfTIoW.jpeg",
      rating: { rate: 2.9, count: 470 },
    },
    {
      id: 11,
      title: "Chicken Trio",
      price: 109,
      ingredients:
        "PINEAPPLE,HAM,FRESH SHRIMP,CRAB STICKS,THOUSAND ISLAND SAUCE,FRESH PRAWNS",
      category: "pizza",
      image:
        "http://thepizzacompany-myanmar.com/products/IMJZMjlz0ZAN4jlg1iXn5HWFzppUVDQ7N3EfyABN.jpeg",
      rating: { rate: 4.8, count: 319 },
    },
    {
      id: 12,
      title: "Shrimp Cocktail",
      price: 114,
      ingredients:
        "PINEAPPLE,HAM,FRESH SHRIMP,CRAB STICKS,THOUSAND ISLAND SAUCE,FRESH PRAWNS",
      category: "electronics",
      image:
        "http://thepizzacompany-myanmar.com/products/1pAGptcyoZu7dTPDJvuNICbr0I3RkL2UcjaXepz5.jpeg",
      rating: { rate: 4.8, count: 400 },
    },
  ];

  return (
    <>
        <div className="menu">
          <h1 className=" text-center text-warning menu-head">SPECIAL PIZZA</h1>
          <div className="container d-flex justify-content-center flex-wrap gap-5 py-5">
            {products.map((product) => (
              <div className="card menu-card p-2">
                <img
                  style={{ width: "100%" }}
                  src={product.image}
                  className="card-img-top "
                  alt=""
                />
                <div className="card-body">
                  <div>
                    <h3 className="card-title menu-title">{product.title}</h3>
                    <p className="card-text text-truncate menu-ingredient">
                      <span style={{ color: "red" }}>INGREDIENTS :</span>
                      {product.ingredients}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <p className="badge bg-warning text-dark">
                      {product.category}
                    </p>
                    <div className="text-warning">
                      <i className="bi bi-star-fill ms-1"></i>
                      <i className="bi bi-star-fill ms-1"></i>
                      <i className="bi bi-star-fill ms-1"></i>
                      <i className="bi bi-star ms-1"></i>
                      <i className="bi bi-star ms-1"></i>
                    </div>
                  </div>
                  <button className="view-btn">View</button>
                </div>
              </div>
            ))}
          </div>
        </div>
    </>
  );
};

export default products;
