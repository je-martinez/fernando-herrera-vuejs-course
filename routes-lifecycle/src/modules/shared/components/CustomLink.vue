<template>
  <li class="nav-item">
    <router-link
      v-if="!isExternal"
      class="nav-link"
      :to="{ path: link.to }"
      :exact="true"
      v-slot="{ href, isActive }"
    >
      <a :href="href" :class="isActive ? 'is-active' : 'normal-link'">
        {{ link.name }}
      </a>
    </router-link>
    <a v-else class="nav-link normal-link" target="_blank" :href="link.to">
      {{ link.name }}
    </a>
  </li>
</template>

<style scoped>
.is-active {
  font-weight: bold;
  color: #42b983;
}
.normal-link {
  color: #c6c5c5;
}
</style>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isExternal() {
      return this.link.to.startsWith("http");
    },
  },
};
</script>
