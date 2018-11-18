import * as React from 'react';
import './Hello.css';

export interface IProps {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

function Hello({name, enthusiasmLevel = 1, onDecrement, onIncrement}: IProps) {
    if (enthusiasmLevel <= 0) {
        throw new Error('You should be more enthusiastic');
    }
    return (
        <div className="hello">
            <div className="greeting">
                Hello {name +'   '+ getExclamationMarks(enthusiasmLevel)}
            </div>
            <div>
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
        </div>
    )
}

export default Hello;

// helpers
function getExclamationMarks(numCharts: number) {
    return Array(numCharts + 1).join('!');
}
