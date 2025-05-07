import { Department } from "@core/api";
import { useMessage } from "@hooks";
import { API } from "@services";
import { Button, Flex, Form, Input, Modal, Skeleton, Space } from "antd";
import { useState } from "react";


interface DepartmentFormProps {
    openForm: boolean;
    onClose: () => void;
    refreshList: () => void;

}

interface FieldType {
    name: string;
}

const DepartmentForm = ({ onClose, openForm, refreshList }: DepartmentFormProps) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(openForm);

    const { handleMessage } = useMessage();

    const onSubmit = async (values: FieldType) => {

        setLoading(true);

        const request: Partial<Department> = {
            name: values.name.toLocaleUpperCase()
        }

        try {

            const { data } = await API.post('/department/create', request);

            if (data.success) {
                form.resetFields();
                setOpen(false);
                onClose();
                refreshList();
                handleMessage({ type: 'success', content: data.resultMessage.message });
            } else {
                handleMessage({ type: 'error', content: data.resultMessage.message });
            }
        } catch (error) {
            console.error('API error:', error);
        } finally {
            setLoading(false);
        }

    };

    return (
        <Modal
            title={<p>Department Detail</p>}
            open={open}
            footer={null}
            onCancel={() => { setOpen(false); onClose() }}
        >

            <Form
                labelCol={{ span: 5 }}
                form={form}
                layout="horizontal"
                style={{ width: '100%' }}
                onFinish={onSubmit}
                autoComplete="off"
            >

                <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]} >

                    {!loading && <Input />}

                    {loading && <Skeleton.Input active={true} size={'small'} className="w-full" style={{ width: '100%' }} />}

                </Form.Item>

                <Form.Item label={null} >

                    {!loading && <Button type="primary" htmlType="submit" >
                        Submit
                    </Button>}

                    {loading && <Skeleton.Button active={true} size={'small'} shape={'square'} block={true} style={{ width: '100px' }} />}

                </Form.Item>

            </Form>



        </Modal>
    );
};

export default DepartmentForm;