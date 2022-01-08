import {useState} from 'react';

export const Counter = () => {

const [count, setCount] = useState<number>(0) //<number> è ridondante, solo per fare un esempio

const add=(number: number)=>{
    setCount(count + number)
}
    
return (
        <div>
            <h3>Counter {count}</h3>
            <hr/>
            <button className='btn btn-primary' onClick={()=>add(1)}>
                +1
            </button>
            &nbsp;
            <button className='btn btn-primary' onClick={()=>add(-1)}>
                -1
            </button>
        </div>
    )
}
