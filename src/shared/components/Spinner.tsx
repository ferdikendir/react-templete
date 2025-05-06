import { Spin } from "antd";

const contentStyle: React.CSSProperties = {
    padding: 50,
    background: 'var(--background-card)',
    borderRadius: 4,
    width: '100%',
    height: '100%',
};

const content = <div style={contentStyle} />;

export const Spinner = () => {

    return (
        <Spin tip="Loading" size="large" className="h-full w-full flex justify-center items-center">
            {content}
        </Spin>
    )

};
