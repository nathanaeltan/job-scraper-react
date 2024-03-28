import { useDispatch } from "react-redux";
import { AppDispatch } from "./store/store";

type DispatchFunction = () => AppDispatch;
export const useAuthDispatch: DispatchFunction = useDispatch;