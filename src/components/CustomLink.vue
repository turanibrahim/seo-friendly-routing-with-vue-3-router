<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps({
  to: { type: Object, default: null },
});

const { locale } = useI18n();

const to = computed(() => ({
  ...props.to,
  ...(props.to.name && { name: `${locale.value}-${props.to.name}` }),
}));
</script>

<template>
  <router-link
    :to="to"
  >
    <slot />
  </router-link>
</template>
