import { useMutation } from "@tanstack/react-query";
import {
  createUserAccount,
  signInAccount,
  signOutAccount,
} from "../appwrite/api";
import { INewUser } from "@/types";

export const useCreateUserAccount = () => {
  // ? react query - custom hook for create/update/delete data
  return useMutation({
    mutationFn: (user: INewUser) => createUserAccount(user),
  });
};

export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user: { email: string; password: string }) =>
      signInAccount(user),
  });
};

export const useSignOutAccount = () => {
  return useMutation({
    mutationFn: signOutAccount,
  });
};
