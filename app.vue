<!-- src/App.vue -->
<template>
  <div id="app">
    <h1>TikTok Demo</h1>
    <Videos />
    <Chat />
  </div>
</template>

<script>
import Videos from './components/Videos.vue';
import Chat from './components/Chat.vue';

export default {
  components: {
    Videos,
    Chat,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
