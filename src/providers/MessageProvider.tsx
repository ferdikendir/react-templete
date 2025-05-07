import { MessageContext } from "@contexts";
import { MessageModel } from "@core/api";
import React from "react";

export const MessageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [message, setMessage] = React.useState<MessageModel>();

    const handleMessage = (message: MessageModel) => {
        setMessage(message);
    }


    return (
        <MessageContext.Provider value={{ message, handleMessage }}>
            {children}
        </MessageContext.Provider>
    );

};