import { FormSchema } from '/@/components/Form/index';

export interface ListItem {
  key: string;
  title: string;
  description: string;
  extra?: string;
  avatar?: string;
  color?: string;
}
const colLienHe = 12;
const colTTkhac = 8;
// tab的list
export const settingList = [
  {
    key: '1',
    name: 'Thông tin cá nhân',
    component: 'ThongTinCaNhan',
  },
  {
    key: '2',
    name: 'Thông tin liên hệ',
    component: 'ThongTinLienHe',
  },
  {
    key: '3',
    name: 'Thông tin khác',
    component: 'ThongTinKhac',
  },
  {
    key: '4',
    name: 'Đổi mật khẩu',
    component: 'DoiMatKhau',
  },
];

// 基础设置 form
export const thongTinCaNhanSchemas: FormSchema[] = [
  {
    field: 'email',
    component: 'Input',
    label: '邮箱',
    colProps: { span: 18 },
  },
  {
    field: 'name',
    component: 'Input',
    label: '昵称',
    colProps: { span: 18 },
  },
  {
    field: 'introduction',
    component: 'InputTextArea',
    label: '个人简介',
    colProps: { span: 18 },
  },
  {
    field: 'phone',
    component: 'Input',
    label: '联系电话',
    colProps: { span: 18 },
  },
  {
    field: 'address',
    component: 'Input',
    label: '所在地区',
    colProps: { span: 18 },
  },
];
export const thongTinLienHeSchemas: FormSchema[] = [
  {
    field: 'tenBo',
    component: 'Input',
    label: 'Tên thánh/ tên gọi Bố',
    colProps: { span: colLienHe },
  },
  {
    field: 'tenBo',
    component: 'Input',
    label: 'Số điện thoại Bố',
    colProps: { span: colLienHe },
  },
  {
    field: 'tenBo',
    component: 'Input',
    label: 'Tên thánh/ tên gọi Mẹ',
    colProps: { span: colLienHe },
  },
  {
    field: 'tenBo',
    component: 'Input',
    label: 'Số điện thoại Mẹ',
    colProps: { span: colLienHe },
  },
  {
    field: 'tenBo',
    component: 'Input',
    label: 'Tên thánh/ tên gọi Bố',
    colProps: { span: colLienHe },
  },
  {
    field: 'tenBo',
    component: 'Input',
    label: 'Tên thánh/ tên gọi Bố',
    colProps: { span: colLienHe },
  },
  {
    field: 'tenBo',
    component: 'Input',
    label: 'Tên thánh/ tên gọi Bố',
    colProps: { span: colLienHe },
  },
  {
    field: 'tenBo',
    component: 'Input',
    label: 'Tên thánh/ tên gọi Bố',
    colProps: { span: colLienHe },
  },
];
export const thongTinKhacSchemas: FormSchema[] = [
  {
    field: 'ngayRuaToi',
    component: 'Input',
    label: 'Ngày rửa tội',
    colProps: { span: colTTkhac },
  },
  {
    field: 'nguoiRuaToi',
    component: 'Input',
    label: 'Người rửa tội',
    colProps: { span: colTTkhac },
  },
  {
    field: 'nguoiDoDauRuaToi',
    component: 'Input',
    label: 'Người đỡ đầu',
    colProps: { span: colTTkhac },
  },
  {
    field: 'ngayThemSuc',
    component: 'Input',
    label: 'Ngày thêm sức',
    colProps: { span: colTTkhac },
  },
  {
    field: 'nguoiThemSuc',
    component: 'Input',
    label: 'Người thêm sức',
    colProps: { span: colTTkhac },
  },
  {
    field: 'nguoiDoDauThemSuc',
    component: 'Input',
    label: 'Người đỡ đầu',
    colProps: { span: colTTkhac },
  },
  {
    field: 'ngayKetHon',
    component: 'Input',
    label: 'Ngày kết hôn',
    colProps: { span: colTTkhac },
  },
  {
    field: 'phoiNgauId',
    component: 'Input',
    label: 'Phối ngẫu',
    colProps: { span: colTTkhac },
  },
  {
    field: 'nguoiLamChung1',
    component: 'Input',
    label: 'Người làm chứng 1',
    colProps: { span: colTTkhac },
  },
  {
    field: 'nguoiLamChung2',
    component: 'Input',
    label: 'Người làm chứng 2',
    colProps: { span: colTTkhac },
  },
];
export const doiMatKhauSchemas: FormSchema[] = [
  {
    field: 'email',
    component: 'Input',
    label: 'Mật khẩu cũ',
    colProps: { span: 18 },
  },
  {
    field: 'name',
    component: 'Input',
    label: 'Mật khẩu mới',
    colProps: { span: 18 },
  },
  {
    field: 'introduction',
    component: 'Input',
    label: 'Nhập lại mật khẩu mới',
    colProps: { span: 18 },
  },
];

