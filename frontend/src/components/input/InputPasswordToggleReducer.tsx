import React, { useReducer } from "react";
enum InputActionType {
  TOGGLE = "TOGGLE",
}
type InputState = {
  showPassword: boolean;
};
type InputAction = {
  type: InputActionType;
};
const initialState: InputState = {
  showPassword: false,
};
function inputPasswordReducer(state: InputState, action: InputAction) {
  switch (action.type) {
    case InputActionType.TOGGLE: {
      return {
        ...state,
        showPassword: !state.showPassword,
      };
    }

    default:
      throw new Error("Bad action");
  }
}
function InputPasswordToggleReducer() {
  const [state, dispatch] = useReducer(inputPasswordReducer, initialState);
  return (
    <div className="relative">
      <input
        type={state.showPassword ? "text" : "password"}
        placeholder="Enter your password"
        className="border border-gray-200 outline-none"
      />
      <button onClick={() => dispatch({ type: InputActionType.TOGGLE })}>
        Toggle
      </button>
    </div>
  );
}

export default InputPasswordToggleReducer;
