function Card(props) {
  return (
    <div className="card">
      <br />

      <div className="text-center">
        <img alt="card-img" src={props.img} className="text-center img-fluid" />
      </div>
      <div className="d-flex justify-content-center">
        <h3 className="card-title mb-0 mt-1 px-3">{props.title}</h3>
      </div>
      <div className="p-3">
        <p className="card-text">
          {props.text}
        </p>
      </div>
    </div>
  );
}
export default Card;