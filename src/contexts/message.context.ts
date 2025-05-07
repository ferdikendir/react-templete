import { MessageModel } from "@core/api";
import { createContext } from "react";

interface MessageContextProps {
    message: MessageModel;
    setMessage?: (message: MessageModel) => void;
    handleMessage: (message: MessageModel) => void;
}

const MessageContext = createContext<MessageContextProps>(null);

export default MessageContext;