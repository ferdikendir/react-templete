import { User as UserModel } from "@core/api";
import { Button, Space, Table, TableProps, Tooltip } from "antd";
import { useEffect, useState } from "react";
import './User.scss';
import { IconifyIcon, Spinner } from "@shared/components";
import UserForm from "./user-form/UserForm";
import { API } from "@services";


const columns: TableProps<UserModel>['columns'] = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Last Name',
        dataIndex: 'lastName',
        key: 'lastName',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Department',
        dataIndex: 'department',
        key: 'department',
        render: (_, record) => (
            <span>{record.department.name}</span>
        )
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const User = () => {

    const [openForm, setOpenForm] = useState(false);

    const [users, setUsers] = useState<UserModel[]>([]);

    const [loadUsers, setLoadUsers] = useState(false);

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const fetchUsers = async () => {
            setLoading(true);

            const { data } = await API.post('/users/list', {});
            if (!data.success) {
                alert(data.resultMessage.message);
                return;
            }

            setUsers(data.data.map((user: UserModel) => ({
                ...user,
                key: user.systemUserId
            })));
            setLoading(false);
        };

        fetchUsers();

    }, [loadUsers]);

    if (loading) {
        return <Spinner />
    }

    return (
        <div className="bg-card h-full shadow-xl">
            <div className="h-[64px] bg-[var(--background-app-bar)] flex flex-row justify-between" >
                <h1 className="text-2xl font-bold pt-4 pl-4">Users</h1>
                <div className="flex flex-row justify-end pr-4 pt-4">

                    <Tooltip title="Add User">
                        <Button type="primary" className="flex items-center justify-center" shape="circle" icon={<IconifyIcon icon="eva:plus-fill" />} onClick={() => setOpenForm(true)} />
                    </Tooltip>
                </div>
            </div>
            <Table<UserModel> columns={columns} dataSource={users} />

            {openForm && <UserForm onClose={() => setOpenForm(false)} openForm={openForm} refreshList={() => setLoadUsers(true)} />}

        </div>
    );
}

export default User;