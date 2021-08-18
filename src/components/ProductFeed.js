import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div>
      <p>Products</p>
      {products.map(({ id, title, price, description, category, image }) => (
        <Product
          key={id}
          title={title}
          price={price}
          image={image}
          category={category}
          description={description}
        />
      ))}
    </div>
  );
}

export default ProductFeed;
