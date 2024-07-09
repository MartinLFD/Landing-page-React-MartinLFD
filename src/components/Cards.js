import './Card.css'

const Card = (props) => {

  
    
    return <div className="card">
    <img src={props.img} className="card-img-top object-fit-cover"  />
    <div className="card-body text-light">
      <h5 className="card-title">{props.title}</h5>
      <hr/>
      <p className="card-text">{props.text}</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
}

export default Card;