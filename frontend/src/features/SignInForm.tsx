import React, { ComponentProps, LegacyRef, forwardRef, useState } from "react";
import {
  Controller,
  DeepMap,
  FieldError,
  Path,
  RegisterOptions,
  SubmitHandler,
  UseFormRegister,
  useForm,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import classNames from "classnames";
import { get } from "lodash";
type Inputs = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    remember: yup.bool().required(),
    email: yup
      .string()
      .email("Email is invalid")
      .required("Email is a required field"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function SignInForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    control,
    formState: { errors, isSubmitting, isValid, isLoading },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await delay(3000);
    try {
      console.log(data);
    } catch (error) {}
    reset({
      email: "",
      password: "",
      remember: false,
    });
  };
  const remember = watch("remember");
  return (
    <div className="max-w-xl mx-auto bg-white">
      <h1 className="mb-2 text-3xl font-bold text-gray-900">Welcome back</h1>
      <p className="mb-10 text-gray-500">
        Welcome back! Please enter your details.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label
              className="text-sm font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="p-3 text-base bg-transparent border border-gray-200 rounded-lg outline-none"
                  {...field}
                />
              )}
            />
            {/* <Input
              type="text"
              placeholder="Enter your email"
              className="p-3 text-base bg-transparent border border-gray-200 rounded-lg outline-none"
              name="email"
              register={register}
              // {...register("email")}
            /> */}
            {errors.email?.message && (
              <div className="p-2 mt-2 text-sm text-red-900 rounded bg-red-50">
                {errors.email?.message}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="text-sm font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  type="password"
                  placeholder="Enter your password"
                  className="p-3 text-base bg-transparent border border-gray-200 rounded-lg outline-none"
                  {...field}
                />
              )}
            />
            {/* <Input
              type="password"
              placeholder="Enter your password"
              className="p-3 text-base bg-transparent border border-gray-200 rounded-lg outline-none"
              name="password"
              register={register}
              // {...register("password")}
            /> */}
            {errors.password?.message && (
              <div className="p-2 mt-2 text-sm text-red-900 rounded bg-red-50">
                {errors.password?.message}
              </div>
            )}
          </div>
          <div className="flex items-center mb-5">
            <Controller
              name="remember"
              control={control}
              render={({ field }) => (
                <Checkbox
                  {...field}
                  value={remember}
                  onClick={() => setValue("remember", !remember)}
                >
                  Remember me for 30 days
                </Checkbox>
              )}
            />
          </div>
          <button
            className="flex items-center justify-center w-full h-12 p-3 text-base font-semibold text-white bg-blue-500 rounded-lg disabled:opacity-50"
            disabled={isSubmitting || isLoading}
          >
            {isLoading || isSubmitting ? (
              <div className="w-6 h-6 border-2 border-white rounded-full animate-spin border-t-transparent"></div>
            ) : (
              "Sign in"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
type FormInputProps<TFormValues extends Record<string, any>> = {
  name: Path<TFormValues>;
  rules?: RegisterOptions;
  register?: UseFormRegister<TFormValues>;
  errors?: Partial<DeepMap<TFormValues, FieldError>>;
} & Omit<InputProps2, "name">;
type InputProps2 = {} & ComponentProps<"input">;
const FormInput = <TFormValues extends Record<string, unknown>>({
  name,
  register,
  rules,
  errors,
  ref,
  ...props
}: FormInputProps<TFormValues>): React.ReactNode => {
  const errorMessages = get(errors, name);
  const hasError = !!(errors && errorMessages);
  return (
    <div>
      <Input2 name={name} {...props} {...(register && register(name, rules))} />
    </div>
  );
};

const Input2 = forwardRef<HTMLInputElement, InputProps2>(function Input2(
  { ...rest }: InputProps2,
  ref: any
) {
  return <input ref={ref} {...rest} />;
});
type InputProps = {} & ComponentProps<"input">;
const Input = forwardRef(function Input({ ...rest }: InputProps, ref: any) {
  return <input ref={ref} {...rest} />;
});
type CheckboxProps = {
  onClick: () => void;
  value: boolean;
  children: React.ReactNode;
};
const Checkbox = forwardRef(function Checkbox(
  { children, value, onClick, ...rest }: CheckboxProps,
  ref: React.LegacyRef<HTMLInputElement>
) {
  console.log("file: SignInForm.tsx:187 ~ rest:", rest);
  return (
    <label className="inline-flex items-center gap-3 cursor-pointer">
      <input
        className="hidden"
        checked={value}
        onClick={onClick}
        ref={ref}
        {...rest}
      />
      <div
        className={classNames(
          "w-4 h-4 border border-gray-200 rounded",
          value ? "bg-blue-500" : ""
        )}
      ></div>
      <span className="text-sm font-medium">{children}</span>
    </label>
  );
});

export default SignInForm;
