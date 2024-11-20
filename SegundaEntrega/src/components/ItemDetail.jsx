
const ItemDetail = ({ product }) => {

    if (!product) {
      return <p>El producto no existe</p>;
    }
  
    return (
      <>
        <h2>{product.title}</h2>
        <img src={product.images[0]} alt={product.title} />
        <h5>{product.category.name}</h5>
        <p>{product.description}</p>
      </>
    );
  };
  
  export default ItemDetail;
  