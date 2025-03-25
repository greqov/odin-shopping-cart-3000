function ProductCard({ image = '/no-photo.png', title, price = 0 }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
      <button type="button">Add to cart</button>
    </div>
  );
}

export default ProductCard;
