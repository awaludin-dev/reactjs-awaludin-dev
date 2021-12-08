import { useSelector, useDispatch } from 'react-redux';
import { decrementChecking, increment } from '../../../app/features/Counter/actions';

const Counter = () => {
    let {count} = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return(
        <div style={{display: 'flex', height: '100vh', width: '100vw', alignItems: 'center', justifyContent: 'center'}}>
            <button onClick={() => dispatch(decrementChecking(1))}>-</button>
            {' '}<span>{count}</span>{' '}
            <button onClick={() => dispatch(increment(1))}>+</button>
        </div>
    )
}

export default Counter;