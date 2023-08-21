import React, { useReducer, useState } from "react";
enum LoginFormActionTypes {
  INPUT_CHANGE = "INPUT_CHANGE",
}
type LoginFormValues = {
  username: string;
  email: string;
  password: string;
};
type LoginFormAction = {
  type: LoginFormActionTypes;
  payload?: any;
};
function loginFormReducer(state: LoginFormValues, action: LoginFormAction) {
  switch (action.type) {
    case LoginFormActionTypes.INPUT_CHANGE: {
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value,
      };
    }
    default:
      return state;
  }
}
const initialLoginFormState: LoginFormValues = {
  username: "",
  email: "",
  password: "",
};
function LoginFormReducer() {
  const [state, dispatch] = useReducer(loginFormReducer, initialLoginFormState);
  const handleLoginForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch({
      type: LoginFormActionTypes.INPUT_CHANGE,
      payload: {
        name,
        value,
      },
    });
  };
  return (
    <div>
      <form
        className="flex flex-col max-w-xl gap-5 p-10 mx-auto bg-white shadow-sm"
        autoComplete="off"
        onSubmit={handleLoginForm}
      >
        <input
          type="text"
          name="username"
          id="username"
          className="p-3 border border-gray-200 rounded-lg outline-none"
          placeholder="Enter your username"
          // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          //   setUsername(e.target.value)
          // }
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          id="email"
          className="p-3 border border-gray-200 rounded-lg outline-none"
          placeholder="Enter your email"
          // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          //   setEmail(e.target.value)
          // }
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          className="p-3 border border-gray-200 rounded-lg outline-none"
          placeholder="Enter your password"
          // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          //   setPassword(e.target.value)
          // }
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="w-full h-12 font-medium text-white bg-purple-500 rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginFormReducer;
