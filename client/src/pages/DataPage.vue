<template>
  <div>
    <h1>Data</h1>
    <vs-table stripe :data="allData">
      <template slot="thead">
        <vs-th>
          Title
        </vs-th>
        <vs-th>
          Text
        </vs-th>
      </template>

      <template slot-scope="{data}">
        <vs-tr :key="indextr" v-for="(tr, indextr) in data">
          <vs-td :data="data[indextr].title">
            {{data[indextr].title}}
          </vs-td>

          <vs-td :data="data[indextr].text">
            {{data[indextr].text}}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
import { getAllData } from '@/Api';
import { showErrorNotification } from './vsNotifications';

export default {
  name: 'DataPage',
  beforeMount() {
    getAllData().then(({ error, data }) => {
      if (error) return showErrorNotification(this.$vs, error);
      this.allData = data.allData;
      return true;
    });
  },
  data() {
    return {
      allData: [],
    };
  },
};
</script>
