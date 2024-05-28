<template>
  <li className="text-center mx-auto text-md font-montserrat hover:opacity-50 list-none">
    <router-link :to="href" className="menu-link hover:!bg-[#ED4C5C] hover:!opacity-100 hover:!text-white " >
      <div data-i18n="Analytics">
        <i className="menu-icon my-auto " :class="iconClasses" /> {{ text }}
      </div>
    </router-link>
  </li>

</template>
<script>
export default {
  props: ['href', 'iconClasses', 'text'],
}
</script>
<style scoped></style>
