
import ServiCard from './artCard';
import SelctionStyle from '../../styles/selctions.module.scss';

const ArtSelctions = ({
        cards, 
}) => {
  return (
    <>
        <div className={SelctionStyle.selctionContainer}>
                

                {
                (cards || []).map(
                        card => {
             return <ServiCard key={card.id} {...card}> </ServiCard>
                        })
            }
   
        </div>
           
    </>
  )
}
export default ArtSelctions;