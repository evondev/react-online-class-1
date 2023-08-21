import React, { useState } from "react";
type LoginFormValues = {
  username: string;
  email: string;
  password: string;
};
function LoginForm() {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [values, setValues] = useState<LoginFormValues>({
    username: "",
    email: "",
    password: "",
  });
  const handleLoginForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
    // console.log(username, email, password);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
    // switch (name) {
    //   case "username":
    //     setUsername(value);
    //     break;
    //   case "email":
    //     setEmail(value);
    //     break;
    //   case "password":
    //     setPassword(value);
    //     break;

    //   default:
    //     break;
    // }
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

export default LoginForm;
