import "./store.css"
import categorias from "../../data/sillas.js"
import escritorios from "../../data/escritorios.js"

const Store = () => {
  return (
    <>
    <div className="store-container">
        {
            categorias.map((item)=>(
                <div className="card" key={item.id}>
                    <img src={item.imagen}  alt={item.titulo} />
                    <h2>{item.titulo}</h2>
                </div>
            ))
        }
    </div>
    <div className="store-container">
        {
            escritorios.map((item)=>(
                <div className="card" key={item.id}>
                    <img src={item.imagen}  alt={item.titulo} />
                    <h2>{item.titulo}</h2>
                </div>
            ))
        }
    </div>
    </>
  )
}

export default Store