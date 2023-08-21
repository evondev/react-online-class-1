import React, { useReducer } from "react";
/**
 * selected: string
 * showDropdown: boolean
 */
enum DropdownActionType {
  TOGGLE = "toggle",
  SELECT = "select",
}
type DropdownState = {
  selected: string;
  showDropdown: boolean;
};
type DropdownAction = {
  type: DropdownActionType;
  payload?: string;
};
function dropdownReducer(state: DropdownState, action: DropdownAction) {
  switch (action.type) {
    case DropdownActionType.TOGGLE: {
      return {
        ...state,
        showDropdown: !state.showDropdown,
      };
    }
    case DropdownActionType.SELECT: {
      return {
        ...state,
        selected: action.payload || "",
        showDropdown: false,
      };
    }

    default:
      throw new Error("Bad action");
  }
}
const intialState: DropdownState = {
  selected: "Select country",
  showDropdown: false,
};
function DropdownReducer() {
  const [state, dispatch] = useReducer(dropdownReducer, intialState);
  return (
    <div className="relative">
      <div
        aria-label="dropdown-selected"
        className="cursor-pointer"
        onClick={() => dispatch({ type: DropdownActionType.TOGGLE })}
      >
        {state.selected}
      </div>
      {state.showDropdown && (
        <ul aria-label="dropdown-list">
          {["Canada", "Mexico", "United States"].map((country) => (
            <li
              key={country}
              onClick={() =>
                dispatch({ type: DropdownActionType.SELECT, payload: country })
              }
            >
              {country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropdownReducer;
