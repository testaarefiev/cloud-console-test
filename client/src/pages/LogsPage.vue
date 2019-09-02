<template>
  <div>
    <h1>Logs</h1>
    <vs-table stripe :data="events">
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
          <vs-td :data="data[indextr].name">
            {{data[indextr].name}}
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
  beforeMount() {
    getLogs().then((error, data) => {
      if (error) showErrorNotification(this.$vs, error);
      this.events = data.events;
    });
  },
  data() {
    return {
      events: [],
    };
  },
};
</script>
