<template>
  <BasicTable @register="registerTable"></BasicTable>
</template>

<script lang="ts" setup>
import {  columns, schemasFormSearch } from './form.data';
import { BasicTable, useTable } from '/@/components/Table';
const [registerTable] = useTable({
  title: 'Danh sách Địa danh',
  // api: demoListApi,
  columns: columns,
  bordered: true,
  actionColumn: {
    width: 250,
    title: 'Action',
    dataIndex: 'action',
    slots: { customRender: 'action' },
  },
  indexColumnProps: {
    width: 50,
    title: 'STT',
  },
  useSearchForm: true,
  formConfig: {
    labelWidth: 100,
    itemStyle: { padding: '0 10px' },
    showAdvancedButton: true,
    schemas: schemasFormSearch,
    autoSetPlaceHolder: true,
  },
});
</script>

<style scoped>

</style>