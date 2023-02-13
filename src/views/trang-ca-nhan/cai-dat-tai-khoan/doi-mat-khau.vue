<template>
  <CollapseContainer title="Thông tin cá nhân" :canExpan="false">
        <BasicForm @register="register" />
    <Button type="primary" @click="handleSubmit">Lưu</Button>
  </CollapseContainer>
</template>
<script lang="ts">
  import { Button, Row, Col } from 'ant-design-vue';
  import { defineComponent, onMounted } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container';

  import { useMessage } from '/@/hooks/web/useMessage';

  import { accountInfoApi } from '/@/api/demo/account';
  import { doiMatKhauSchemas } from './data';
  import { useUserStore } from '/@/store/modules/user';

  export default defineComponent({
    components: {
      BasicForm,
      CollapseContainer,
      Button,
      ARow: Row,
      ACol: Col,
    },
    setup() {
      const { createMessage } = useMessage();
      const userStore = useUserStore();

      const [register, { setFieldsValue }] = useForm({
        labelWidth: 150,
        schemas: doiMatKhauSchemas,
        showActionButtonGroup: false,
      });

      onMounted(async () => {
        const data = await accountInfoApi();
        setFieldsValue(data);
      });


      return {
        register,
        handleSubmit: () => {
          createMessage.success('Thành công');
        },
      };
    },
  });
</script>

<style lang="less" scoped>
  .change-avatar {
    img {
      display: block;
      margin-bottom: 15px;
      border-radius: 50%;
    }
  }
</style>
