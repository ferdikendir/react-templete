import { Department as DepartmentModel, Response } from "@core/api";
import { IconifyIcon } from "@shared/components";
import { Button, Space, Table, TableProps, Tooltip } from "antd";
import { useEffect, useState } from "react";
import DepartmentForm from "./department-form/DepartmentForm";
import { API } from "@services";

const columns: TableProps<DepartmentModel>['columns'] = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
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

const Department = () => {

    const [openForm, setOpenForm] = useState(false);
    const [departments, setDepartments] = useState<DepartmentModel[]>([]);
    const [loadDepartments, setLoadDepartments] = useState(false);

    useEffect(() => {

        const fetchDepartments = async () => {

            try {
                const { data } = await API.post('/department/list', {});
                if (data.success) {
                    setDepartments(data.data.map((department: DepartmentModel) => ({
                        ...department,
                        key: department.departmentId
                    })));
                } else {
                    alert(data.resultMessage.message);
                }
            } catch (error) {
                console.error('API error:', error);
            }
        };

        fetchDepartments();

    }, [loadDepartments]);

    return (
        <div className="bg-card h-full shadow-xl">
            <div className="h-[64px] bg-[var(--background-app-bar)] flex flex-row justify-between" >
                <h1 className="text-2xl font-bold pt-4 pl-4">Departments</h1>
                <div className="flex flex-row justify-end pr-4 pt-4">

                    <Tooltip title="Add Department">
                        <Button type="primary" className="flex items-center justify-center" shape="circle" icon={<IconifyIcon icon="eva:plus-fill" />} onClick={() => setOpenForm(true)} />
                    </Tooltip>
                </div>
            </div>

            <Table<DepartmentModel> columns={columns} dataSource={departments} />

            {openForm && <DepartmentForm onClose={() => setOpenForm(false)} openForm={openForm} refreshList={() => setLoadDepartments(true)} />}

        </div>
    );
};

export default Department;