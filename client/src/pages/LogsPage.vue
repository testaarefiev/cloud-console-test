<template>
  <div>
    <h1>Logs</h1>
    <vs-table max-items="20" pagination stripe :data="logs">
      <template slot="thead">
        <vs-th>
          Event
        </vs-th>
        <vs-th>
          Created at
        </vs-th>
      </template>

      <template slot-scope="{data}">
        <vs-tr :key="indextr" v-for="(tr, indextr) in data">
          <vs-td :data="data[indextr].type">
            {{data[indextr].type}}
          </vs-td>

          <vs-td :data="data[indextr].createdAt">
            {{data[indextr].createdAt}}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
import { getLogs } from '@/Api';
import { showErrorNotification } from './vsNotifications';

export default {
  name: 'LogsPage',
  data() {
    return {
      logs: [],
    };
  },
  mounted() {
    this.getLogs();
  },
  methods: {
    getLogs() {
      getLogs().then(({ error, data }) => {
        if (error) return showErrorNotification(this.$vs, error);
        this.logs = data.logs;
        return true;
      });
    },
  },
};
</script>
