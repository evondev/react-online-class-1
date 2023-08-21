import React, { useReducer } from "react";
enum CounterActionTypes {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE",
}
type CounterState = {
  count: number;
};
type CounterAction = {
  type: CounterActionTypes;
  payload?: Record<string, any>;
};
const intialState: CounterState = { count: 0 };

function counterReducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case CounterActionTypes.INCREMENT: {
      // state.count = state.count + 1;
      return { count: state.count + 1 };
    }
    case CounterActionTypes.DECREMENT: {
      return { count: state.count - 1 };
    }
    case CounterActionTypes.INCREMENT_BY_VALUE: {
      return {
        count: state.count + ((action.payload && action.payload.value) || 0),
      };
    }
    default:
      return state;
  }
}
function Counter() {
  const [state, dispatch] = useReducer(counterReducer, intialState);
  return (
    <div className="inline-flex border border-gray-200 rounded-lg">
      <button
        aria-label="decrease"
        className="p-3"
        onClick={() => dispatch({ type: CounterActionTypes.DECREMENT })}
      >
        -
      </button>
      <span className="flex items-center justify-center p-3">
        {state.count}
      </span>
      <button
        aria-label="increase"
        className="p-3"
        onClick={() => dispatch({ type: CounterActionTypes.INCREMENT })}
      >
        +
      </button>
      <button
        aria-label="increase"
        className="p-3"
        onClick={() =>
          dispatch({
            type: CounterActionTypes.INCREMENT_BY_VALUE,
            payload: {
              value: 5,
            },
          })
        }
      >
        Increment by 5
      </button>
    </div>
  );
}

export default Counter;
