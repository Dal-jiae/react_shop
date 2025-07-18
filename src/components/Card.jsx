function Card({fr}) {

  return (
    
    <div className="col-md-4">
      <img src={`${import.meta.env.BASE_URL}img/${fr.title}.jpg`} alt="" width='80%'/>
      <h4>{fr.title}</h4>
      <p>{fr.content}</p>
      <p>{fr.price}</p>
    </div>

  )

}

export default Card