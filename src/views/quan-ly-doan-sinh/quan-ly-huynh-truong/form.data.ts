import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Form';

const colEx = 12;
export const schemasFormSearch: FormSchema[] = [
    {
        field: 'fullname',
        component: 'Input',
        label: 'Tên người dùng',
        colProps: {
            span: colEx,
        },
    },
    {
        field: 'username',
        component: 'Input',
        label: 'Tên đăng nhập',
        colProps: {
            span: colEx,
        },
    },
    {
        field: 'nganh',
        component: 'ApiSelect',
        label: 'Cấp bậc',
        colProps: {
            span: colEx,
        },
    },
    {
        field: 'status',
        component: 'Input',
        label: 'Trạng thái',
        colProps: {
            span: colEx,
        },
    },
    {
        field: 'createdDate',
        component: 'Input',
        label: 'Ngày tạo',
        colProps: {
            span: colEx,
        },
    },
    {
        field: 'createdBy',
        component: 'Input',
        label: 'Người tạo',
        colProps: {
            span: colEx,
        },
    },
    {
        field: 'updatedDate',
        component: 'Input',
        label: 'Ngày cập nhật',
        colProps: {
            span: colEx,
        },
    },
    {
        field: 'updatedBy',
        component: 'Input',
        label: 'Người cập nhật',
        colProps: {
            span: colEx,
        },
    },
];


export const columns: BasicColumn[] = [
    {
        title: 'Tên người dùng',
        dataIndex: 'fullname',
    },
    {
        title: 'Tên đăng nhập',
        dataIndex: 'username',
    },
    {
        title: 'Cấp bậc',
        dataIndex: 'capBac',
    },
    {
        title: 'Người tạo',
        dataIndex: 'createdBy',
    },
    {
        title: 'Ngày tạo',
        dataIndex: 'createdDate',
    },
    {
        title: 'Người cập nhật',
        dataIndex: 'updatedBy',
    },
    {
        title: 'Ngày cập nhật',
        dataIndex: 'updatedDate',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
    },

];