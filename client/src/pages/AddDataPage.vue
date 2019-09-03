<template>
  <div>
    <h1>AddData</h1>
    <form v-on:keyup.enter="onSubmit" v-on:submit.prevent="onSubmit">
      <div class="control-group">
        <vs-input
          :danger="$v.title.$error"
          label="Title"
          class="input"
          v-model.trim="title"/>
        <div class="error">{{titleErrorText()}}</div>
      </div>
      <div :class="{ 'control-group': true, 'control-group--error': $v.text.$error }">
        <vs-textarea label="Text" v-model.trim="text"/>
        <!-- textarea validation not supported by vuesax :( -->
        <div class="error">{{textErrorText()}}</div>
      </div>
      <vs-button
        button="submit"
        v-bind:disabled="submitDisabled"
        color="primary"
        type="filled">Create</vs-button>
    </form>
  </div>
</template>

<script>
import { createLog, createData } from '@/Api';
import { required, minLength } from 'vuelidate/lib/validators';
import { showErrorNotification, showSuccessNotification } from './vsNotifications';

export default {
  name: 'AddDataPage',
  created() {
    if (this.logged) return;
    this.logged = true;

    createLog('login').then(({ error }) => {
      if (error) return showErrorNotification(this.$vs, error);
      return true;
    });
  },
  data: () => ({
    logged: false,
    title: '',
    text: '',
    submitDisabled: false,
  }),
  validations: {
    title: {
      required,
      minLength: minLength(4),
    },
    text: {
      required,
      minLength: minLength(4),
    },
  },
  methods: {
    onSubmit() {
      if (this.submitDisabled) return false;
      this.$v.$touch();
      if (this.$v.title.$error || this.$v.text.$error) return false;

      this.submitDisabled = true;

      // Send data
      createLog('dataAdded').then(({ error }) => {
        if (error) return showErrorNotification(this.$vs, error);
        return true;
      });
      createData(this.title, this.text).then(({ error }) => {
        // Unlock the button at first because problem can be already fixed
        this.submitDisabled = false;

        if (error) return showErrorNotification(this.$vs, error);
        showSuccessNotification(this.$vs, 'Data sucessfully created');

        // Reset form
        this.$v.$reset();
        this.title = '';
        this.text = '';
        return true;
      });
      return true;
    },
    titleErrorText() {
      if (!this.$v.title.$error) return '';
      if (!this.$v.title.required) return 'Title is required';
      return `Title must have at least ${this.$v.title.$params.minLength.min} letters`;
    },
    textErrorText() {
      if (!this.$v.text.$error) return '';
      if (!this.$v.text.required) return 'Text is required';
      return `Text must have at least ${this.$v.text.$params.minLength.min} letters`;
    },
  },
};

</script>

<style>
.control-group {
  margin-bottom: 1rem;
}
/* textarea validation not supported by vuesax :( */
.con-text-validation {
  display: none;
}
.vs-con-textarea {
  margin-bottom: 0;
}
.control-group--error .vs-con-textarea {
  border: 1px solid rgba(var(--vs-danger), 1) !important;
}
.error {
  padding: 4px;
  display: block;
  font-size: .65rem;
  color: rgba(var(--vs-danger), 1);
}
</style>
