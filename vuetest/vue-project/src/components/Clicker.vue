<template>
  <div>
    <button @click="addClick">Añadir Click</button>
    <h2>{{ clicker }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Counter",
      clicker: 0,
    };
  },
  methods: {
    addClick() {
      this.clicker++;
    },
  },
};
</script>

<style>
div {
  display: flex;
  flex-direction: column;
}
</style>
