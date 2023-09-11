"use client";
import { Button } from "@/components/button";
import Toggle from "@/components/toggle/Toggle";
import { useDebounce, useInputChange, useToggle } from "@/hooks";
import classNames from "classnames";
import React, { ChangeEvent, memo, useEffect, useRef, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const ModalUncontrolledMemo = memo(ModalUncontrolled);
type Inputs = {
  name: string;
  email: string;
  password: string;
};
const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email("Email is invalid").required(),
    password: yup.string().min(5, "only 5").required(),
  })
  .required();
function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [formValues, setFormValues] = useState({
  //   name,
  //   email,
  //   phone,
  //   age,
  //   school,
  // });
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  console.log("file: page.tsx:39 ~ Home ~ errors:", errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col w-full max-w-xl gap-5 mx-auto">
        <input
          type="text"
          // value={name}
          // onChange={(e: ChangeEvent<HTMLInputElement>) =>
          //   setName(e.target.value)
          // }
          className="px-5 py-3 bg-transparent border rounded-lg outline-none border-slate-200"
          placeholder="Enter your name"
          {...register("name")}
          // name="name"
        />
        <input
          type="email"
          // value={email}
          // onChange={(e: ChangeEvent<HTMLInputElement>) =>
          //   setEmail(e.target.value)
          // }
          className="px-5 py-3 bg-transparent border rounded-lg outline-none border-slate-200"
          placeholder="Enter your email"
          {...register("email")}

          // name="email"
        />
        {/* {errors.email && <div>Email is required</div>} */}
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <InputControlled
              placeholder="Enter your password"
              type="password"
              {...field}
            />
          )}
        />
        <Button variant="primary" type="submit" size="lg">
          Login
        </Button>
      </div>
      <ModalUncontrolledMemo></ModalUncontrolledMemo>
    </form>
  );
}

function InputControlled(props: any) {
  return (
    <input
      className="px-5 py-3 bg-transparent border rounded-lg outline-none border-slate-200"
      {...props}
    />
  );
}

function ModalUncontrolled() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  console.log("re-render");
  return (
    <>
      <button
        className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
        onClick={() => setIsOpenModal(true)}
      >
        Open Modal Confirm
      </button>
      <div
        aria-label="modal"
        className={classNames(
          "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-10",
          isOpenModal ? "" : "invisible opacity-0"
        )}
      >
        <div className="relative w-full max-w-lg p-10 bg-white rounded-lg">
          <button
            onClick={() => setIsOpenModal(false)}
            className="absolute cursor-pointer top-5 right-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            quibusdam iusto consequuntur distinctio amet ducimus at, alias
            pariatur adipisci unde sequi minus esse animi aliquam nam.
            Voluptatem non saepe dolor?
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
