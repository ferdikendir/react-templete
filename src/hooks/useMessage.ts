import { MessageContext } from "@contexts";
import { useContext } from "react";

export const useMessage = () => useContext(MessageContext);