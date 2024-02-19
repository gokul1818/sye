
function ProductsCard(props) {
  return (
    <div className="products-card  ">

      <div className="text-center">
        <img alt="card-img" src={props.img} className="text-center products-img " />
      </div>
{/* 
      <div className="p-3">
        <p className="card-text">
          {props.text}
        </p>
      </div> */}
    </div>
  );
}
export default ProductsCard;