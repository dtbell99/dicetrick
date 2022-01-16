import {Dice1, Dice2, Dice3, Dice4, Dice5, Dice6} from 'react-bootstrap-icons';

function Dice({nbr}) {

    return (
        <div className="Dice">
            {nbr === 1 &&
                <Dice1 size={48}/>
            }
            {nbr === 2 &&
                <Dice2 size={48}/>
            }
            {nbr === 3 &&
                <Dice3 size={48}/>
            }
            {nbr === 4 &&
                <Dice4 size={48}/>
            }
            {nbr === 5 &&
                <Dice5 size={48}/>
            }
            {nbr === 6 &&
                <Dice6 size={48}/>
            }
        </div>
    );
}

export default Dice;
