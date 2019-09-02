<template>
  <div>
    <h1>AddData</h1>
    <div>AddDataPage loaded</div>
  </div>
</template>

<script>
import { createLog } from '@/Api';

const createLogLogin = () => createLog('login');

export default {
  name: 'AddDataPage',
  mounted: () => {
    createLogLogin();
  },
  data() {
    return {
    };
  },
};
</script>
