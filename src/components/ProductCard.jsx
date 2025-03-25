function ProductCard({ image = '/no-photo.png', title }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <button type="button">Add to cart</button>
    </div>
  );
}

export default ProductCard;
