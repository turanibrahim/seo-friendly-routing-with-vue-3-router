<script setup>
import useCustomLink from '@/composables/useCustomLink';
import { useRouter } from 'vue-router';
import { computed } from 'vue';

const { customTo } = useCustomLink();
const router = useRouter();

const path = computed(() => (
  router.resolve(customTo({ name: 'ContactUsPage' })).path
));
</script>

<template>
  <div class="contact-us-page">
    <h1>
      {{ $t('contactUs.title') }}
    </h1>

    <p>
      {{ path }}
    </p>
  </div>
</template>
