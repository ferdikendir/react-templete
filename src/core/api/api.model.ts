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