import Card from './Card'
import style from "./styles/Cards.module.css"

const Cards = ({listDogs}) => {
  
  return (
    <div className={style.cardsContenedor}>
      { listDogs &&
          listDogs.map((e)=> {
            return (
              <div key={e.id}>
                <Card name={e.name} image={e.image} id={e.id} temperament={e.temperament} weight={e.weight}/>
              </div>
            )
          })
      }
    </div>
  )
}

export default Cards