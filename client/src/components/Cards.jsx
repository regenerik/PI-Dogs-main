import Card from './Card'
import style from "./styles/Cards.module.css"

const Cards = ({listDogs}) => {
  
  return (
    <div className={style.cardsContenedor}>
      { listDogs &&
          listDogs.map((e)=> {
            return (
              <Card name={e.name} image={e.image}/>
            )
          })
      }
    </div>
  )
}

export default Cards