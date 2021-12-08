import { useSelector, useDispatch } from 'react-redux';
import { decrementChecking, increment } from '../../../app/features/Counter/actions';

const Counter = () => {
    let {count} = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return(
        <div>
            <button onClick={() => dispatch(decrementChecking(1))}>-</button>
            {' '}<span>{count}</span>{' '}
            <button onClick={() => dispatch(increment(1))}>+</button>
        </div>
    )
}

export default Counter;