import { User, Response, Department } from "@core/api";
import { useMessage } from "@hooks";
import { API } from "@services";
import { Button, Form, Input, Modal, Select, Skeleton } from "antd";
import { useEffect, useState } from "react";

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
    const [departments, setDepartments] = useState<Department[]>([]);

    const { handleMessage } = useMessage();

    const onSubmit = async (values: FieldType) => {

        setLoading(true);
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

    useEffect(() => {
        const loadDepartmens = async () => {

            const { data } = await API.post<Response<Department[]>>('/department/list');

            if (data.success) {
                setDepartments(data.data);
            }
        };

        loadDepartmens();
    }, []);

    return (
        <Modal
            title={<p>User Detail</p>}
            footer={null}
            open={open}
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

                    {loading && <Skeleton.Input active={true} size={'small'} className="w-full" style={{ width: '100%' }} />}

                    {!loading && <Input />}

                </Form.Item>


                <Form.Item label="Lastname" name="lastName" rules={[{ required: true, message: 'Please input your lastname!' }]}>

                    {loading && <Skeleton.Input active={true} size={'small'} className="w-full" style={{ width: '100%' }} />}

                    {!loading && <Input />}

                </Form.Item>

                <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>

                    {loading && <Skeleton.Input active={true} size={'small'} className="w-full" style={{ width: '100%' }} />}

                    {!loading && <Input />}

                </Form.Item>

                <Form.Item label="Department" name="departmentId" rules={[{ required: true, message: 'Please input your department!' }]}>

                    {loading && <Skeleton.Input active={true} size={'small'} className="w-full" style={{ width: '100%' }} />}

                    {!loading && <Select
                        style={{ width: '100%' }}
                        options={departments.map((department) => ({
                            value: department.departmentId,
                            label: department.name,
                        }))}
                    />}

                </Form.Item>

                <Form.Item label={null}>

                    {loading && <Skeleton.Button active={true} size={'small'} shape={'square'} block={true} style={{ width: '100px' }} />}

                    {!loading && <Button type="primary" htmlType="submit">
                        Submit
                    </Button>}

                </Form.Item>


            </Form>

        </Modal>
    );
}

export default UserForm;