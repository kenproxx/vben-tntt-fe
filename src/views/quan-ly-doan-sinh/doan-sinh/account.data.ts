import { getAllRoleList, isAccountExist } from '/@/api/demo/system';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
const colEx = 12;
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

export const searchFormSchema: FormSchema[] = [
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

export const accountFormSchema: FormSchema[] = [
  {
    field: 'account',
    label: '用户名',
    component: 'Input',
    helpMessage: ['本字段演示异步验证', '不能输入带有admin的用户名'],
    rules: [
      {
        required: true,
        message: '请输入用户名',
      },
      {
        validator(_, value) {
          return new Promise((resolve, reject) => {
            isAccountExist(value)
              .then(() => resolve())
              .catch((err) => {
                reject(err.message || '验证失败');
              });
          });
        },
      },
    ],
  },
  {
    field: 'pwd',
    label: '密码',
    component: 'InputPassword',
    required: true,
    ifShow: false,
  },
  {
    label: '角色',
    field: 'role',
    component: 'ApiSelect',
    componentProps: {
      api: getAllRoleList,
      labelField: 'roleName',
      valueField: 'roleValue',
    },
    required: true,
  },
  {
    field: 'dept',
    label: '所属部门',
    component: 'TreeSelect',
    componentProps: {
      fieldNames: {
        label: 'deptName',
        key: 'id',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
    required: true,
  },
  {
    field: 'nickname',
    label: '昵称',
    component: 'Input',
    required: true,
  },

  {
    label: '邮箱',
    field: 'email',
    component: 'Input',
    required: true,
  },

  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
  },
];
