import  './footer.css'

const Footer = () => {
    return (
         <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>MiTienda</h3>
          <p>Tu tienda online de confianza.</p>
        </div>

        <div className="footer-section">
          <h4>Enlaces</h4>
          <ul>
            <li>Inicio</li>
            <li>Productos</li>
            <li>Contacto</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Email: contacto@mitienda.com</p>
          <p>Tel: 300 000 0000</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 MiTienda - Todos los derechos reservados
      </div>
    </footer>
    )
}

export default Footer