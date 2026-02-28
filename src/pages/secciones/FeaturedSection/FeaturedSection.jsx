import './featuredSection.css'

const FeaturedSection = () => {
  return (
    <>
    <section className='featured'>
      <div className='featured-img'>
        <img src="/imagenes/discoDuro.jpg" alt="" />
          <h1>Discos 
          <br />
          duros</h1>
        </div>
      <div className='featured-img'>
        <img src="/imagenes/memoria.png" alt="" />
        <h1>Meromias 
          <br />
          RAM</h1>
        </div>
      <div className='featured-img'>
        <img src="/imagenes/placa.png" alt="" />
        <h1>Placas 
          <br />
          Madre</h1>
        </div>
        
    </section>
    <section className="maintenance">
      <div className='parrafo-left'>
      <h1>Te ayudamos con el mantenimiento 
        <br />
        de tu equipo</h1>
      </div>
      <div className='container-img'>
        <img src="/imagenes/placa.png" alt="" />
      </div>
      
    </section>
    </>
  )
}

export default FeaturedSection
