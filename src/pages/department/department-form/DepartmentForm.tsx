import { Department } from "@core/api";
import { API } from "@services";
import { Button, Form, Input, Modal } from "antd";
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

    const showLoading = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };

    const onSubmit = async (values: FieldType) => {

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
            }
        } catch (error) {
            console.error('API error:', error);
        }

    };

    return (
        <Modal
            title={<p>Department Detail</p>}
            loading={loading}
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
            >

                <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]} >
                    <Input />
                </Form.Item>


                <Form.Item label={null} >
                    <Button type="primary" htmlType="submit" >
                        Submit
                    </Button>
                </Form.Item>


            </Form>

        </Modal>
    );
};

export default DepartmentForm;