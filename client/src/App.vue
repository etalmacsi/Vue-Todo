<template>
  <div id="app">
    <!-- navbar -->
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">VueJs APP Todo</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav></b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-container class="bv-example-row">
      <b-row align-h="center">
        <b-col cols="4">
          <b-form-input v-model="message" placeholder="Tennivaló..."></b-form-input>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col></b-col>
        <b-col>
          <b-button
            align-h="center"
            type="submit"
            variant="primary"
            @click="onClick(message)"
          >Hozzáadása</b-button>
        </b-col>
        <b-col></b-col>
      </b-row>

      <b-row align-h="center">
        <b-col cols="4">
          <b-card
            title="Tennivalók"
            img-src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1024px-Vue.js_Logo_2.svg.png"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              <div v-for="(item) in items">{{item.message}}</div>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      message: "",
      items: ""
    };
  },
  methods: {
    onClick(message) {
      this.axios
        .post("http://localhost:8082/todo", { message })
        .then(resp => {});
      this.getData();
    },
    getData() {
      let items;
      this.axios.get("http://localhost:8082/todo").then(resp => {
        this.items = resp.data;
      });
      this.items = items;
    }
  },
  mounted() {
    this.getData();
  },
  beforeMount() {
    this.getData();
  }
};
</script>

<style>
</style>
