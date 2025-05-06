import { User } from "@core/api";
import { API } from "@services";
import { Button, Form, Input, Modal, Select } from "antd";
import { useState } from "react";

interface UserFormProps {
    openForm: boolean;
    onClose: () => void;
    refreshList: () => void;

}

interface FieldType {
    name: string;
    lastName: string;
    email: string;
    departmentId: string;
}


const UserForm = ({ onClose, openForm, refreshList }: UserFormProps) => {

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

        const request: Partial<User> = {
            name: values.name.toLocaleUpperCase(),
            lastName: values.lastName.toLocaleUpperCase(),
            email: values.email,
            departmentId: values.departmentId,
        }

        try {
            const { data } = await API.post('/users/create', request);

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
            title={<p>User Detail</p>}
            footer={null}
            loading={loading}
            open={open}
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


                <Form.Item label="Lastname" name="lastName" rules={[{ required: true, message: 'Please input your lastname!' }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Department" name="departmentId" rules={[{ required: true, message: 'Please input your department!' }]}>
                    <Select
                        style={{ width: '100%' }}
                        options={[
                            { value: '3d8a4aad-d581-4c5a-afdb-b14e21314394', label: 'Jack' },
                            { value: '3d8a4aad-d581-4c5a-afdb-b14e21314394', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                            { value: 'disabled', label: 'Disabled', disabled: true },
                        ]}
                    />
                </Form.Item>

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>


            </Form>

        </Modal>
    );
}

export default UserForm;