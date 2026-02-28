import "./seccion1.css"

const HeroSection = () => {
  return (
    <section className="hero">

      <div className="hero-left">

        <img src="/imagenes/imagen-rigth.jpg"
          alt=""
          className="hero-logo"

        />

        <h1>Aqui encontraras
          <br />
          tus objetos preferidos
        </h1>

        <p>
          Desliza para abajo y encontraras mas
        </p>
      </div>
      <div className="hero-right">
        <img src="/imagenes/imagen-rigth.jpg" alt="" />
      </div>



    </section>
  )
}

export default HeroSection