import React, { useState } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../utils/cn";
import { IconX } from "@tabler/icons-react";

export function SignupFormDemo({ onClose }: { onClose: () => void }) {
  const [isLogin, setIsLogin] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(isLogin ? "Login submitted" : "Signup submitted");
  };

  return (
    <div className="relative max-w-md w-full mx-auto rounded-lg p-4 shadow-input bg-white dark:bg-black">
      <button
        className="absolute top-2 right-2 text-neutral-800 dark:text-neutral-300"
        onClick={onClose}
      >
        <IconX size={20} />
      </button>
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        {isLogin ? "Login to Aceternity" : "Welcome to Aceternity"}
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        {isLogin
          ? "Log in with your username/email and password"
          : "Sign up to create a new account"}
      </p>

      <form className="my-4" onSubmit={handleSubmit}>
        {isLogin ? (
          <>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="login-identifier">Username or Email</Label>
              <Input id="login-identifier" placeholder="johndoe@example.com" type="text" />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="login-password">Password</Label>
              <Input id="login-password" placeholder="••••••••" type="password" />
            </LabelInputContainer>
          </>
        ) : (
          <>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <LabelInputContainer className="flex-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="John Doe" type="text" />
              </LabelInputContainer>
              <LabelInputContainer className="flex-1">
                <Label htmlFor="gender">Gender</Label>
                <select
                  id="gender"
                  className="border border-gray-300 dark:border-gray-600 rounded-lg p-2 w-full dark:bg-black dark:text-white"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </LabelInputContainer>
            </div>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="johndoe" type="text" />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="••••••••" type="password" />
            </LabelInputContainer>

            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <LabelInputContainer className="flex-1">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" placeholder="johndoe@example.com" type="email" />
              </LabelInputContainer>
              <LabelInputContainer className="flex-1">
                <Label htmlFor="age">Age</Label>
                <Input id="age" placeholder="30" type="number" />
              </LabelInputContainer>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <LabelInputContainer className="flex-1">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+1 234 567 890" type="tel" />
              </LabelInputContainer>
              <LabelInputContainer className="flex-1">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="New York" type="text" />
              </LabelInputContainer>
            </div>
          </>
        )}

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          {isLogin ? "Log In" : "Sign Up"} &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full" />

        <button
          className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-blue-600 rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          type="button"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Create an account" : "Already have an account? Log in"}
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
