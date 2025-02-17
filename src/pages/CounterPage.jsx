import Button from '../components/Button';
import { useReducer, useEffect } from 'react';
import Panel from '../components/Panel';
// import useCounter from '../hooks/use-counter';

function CounterPage({ initialCount }) {
  const INCREMENT_COUNT = 'increment-count';
  const DECREMENT_COUNT = 'decrement-count';
  const SET_VALUE_TO_ADD = 'set-value-to-add';
  const ADD_VALUE_TO_COUNT = 'add-value-to-count';

  const reducer = (state, action) => {
    switch (action.type) {
      case INCREMENT_COUNT: {
        return {
          ...state,
          count: state.count + 1,
        };
      }
      case DECREMENT_COUNT: {
        return {
          ...state,
          count: state.count - 1,
        };
      }
      case ADD_VALUE_TO_COUNT: {
        return {
          ...state,
          count: state.count + state.valueToAdd,
          valueToAdd: 0,
        };
      }
      case SET_VALUE_TO_ADD: {
        return { ...state, valueToAdd: action.payload };
      }
      default:
        console.log('Unexpected action type: ' + action.type);
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  useEffect(() => {
    console.log(state);
  }, [state]);

  const increment = () => {
    dispatch({ type: INCREMENT_COUNT });
  };

  const decrement = () => {
    dispatch({ type: DECREMENT_COUNT });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({ type: SET_VALUE_TO_ADD, payload: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: ADD_VALUE_TO_COUNT });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Example code for useReducer:</h1>
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row gap-5">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label> Add a lot!</label>
        <input
          type="number"
          onChange={handleChange}
          value={state.valueToAdd || ''}
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button type="submit">Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
