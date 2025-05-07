import { NoticeType } from "antd/es/message/interface";
import { User } from "./user";

export interface BaseResponse {
    success: boolean;
    errorCode: string;
    message: string;
    url: string;
    resultMessage: ResultMessage;
}

export interface Response<T> extends BaseResponse {
    data: T;
}

export interface ResultMessage {
    message: string;
    messageType: string;
    code: string;
}

export interface AuthModel {
    token: string;
    refreshToken: string;
    user: User;
}

export interface MessageModel {
    content: string;
    type: NoticeType;
}