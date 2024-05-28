<script>
import NavigationLink from './components/NavigationLink.vue';

export default {
  name: 'Navbar',
  components: {
    NavigationLink,
  },
  data() {
    return {
      menuCheck: false,
    };
  },
}
</script>

<template>
  <div class="container mx-auto">
    <div class="navbar bg-black text-white">
      <div class="navbar-start"></div>
      <div class="navbar-center menu menu-horizontal gap-x-3 mx-auto">
        <NavigationLink :class="{ 'hover:bg-purple-500 hover:text-white': !menuCheck, 'hover:bg-purple-900 hover:text-white': menuCheck }" icon-classes="fa-solid fa-home" text="Home" href="/" @click="menuCheck = false" />
        <NavigationLink :class="{ 'hover:bg-purple-500 hover:text-white': !menuCheck, 'hover:bg-purple-900 hover:text-white': menuCheck }"  icon-classes="fa-solid fa-info" text="Info" href="/info" @click="menuCheck = false" />
        <NavigationLink :class="{ 'hover:bg-purple-500 hover:text-white': !menuCheck, 'hover:bg-purple-900 hover:text-white': menuCheck }" icon-classes="fa-solid fa-user" text="Account" href="/account" @click="menuCheck = false" />
        <NavigationLink :class="{ 'hover:bg-purple-500 hover:text-white': !menuCheck, 'hover:bg-purple-900 hover:text-white': menuCheck }" icon-classes="fa-solid fa-image" text="Logo" href="/logo" @click="menuCheck = false" />
        <NavigationLink :class="{ 'hover:bg-purple-500 hover:text-white': !menuCheck, 'hover:bg-purple-900 hover:text-white': menuCheck }" icon-classes="fa-solid fa-check" text="Test" href="/test" @click="menuCheck = false" />
        <NavigationLink :class="{ 'hover:bg-purple-500 hover:text-white': !menuCheck, 'hover:bg-purple-900 hover:text-white': menuCheck }" icon-classes="fa-solid fa-gamepad" text="Game" href="/game" @click="menuCheck = false" />
      </div>
      <div class="navbar-end"></div>
    </div>
  </div>
</template>

<style scoped></style>
