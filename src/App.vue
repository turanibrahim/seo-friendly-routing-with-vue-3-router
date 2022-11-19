<script setup>
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';
import CustomLink from '@/components/CustomLink.vue';
import { useRoute, useRouter } from 'vue-router';

const { locale } = useI18n();
const router = useRouter();
const route = useRoute();

const updateRoutePath = (newLocale) => {
  const { name } = route;
  const nameWithoutLangPrefix = name.split('-').pop();

  router.replace({
    ...route,
    name: `${newLocale}-${nameWithoutLangPrefix}`,
  });
};
const setLocale = (newLocale) => {
  locale.value = newLocale;

  updateRoutePath(newLocale);
};

watch(() => route.name, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    const [localeValue] = newValue.split('-');

    const html = document.documentElement;
    html.setAttribute('lang', localeValue);

    setLocale(localeValue);
  }
});
</script>

<template>
  <div class="header">
    <div class="menu">
      <custom-link :to="{ name: 'HomePage' }">
        {{ $t('pages.home') }} |
      </custom-link>

      <custom-link :to="{ name: 'AboutPage' }">
        {{ $t('pages.about') }} |
      </custom-link>

      <custom-link :to="{ name: 'ContactUsPage' }">
        {{ $t('pages.contact') }} |
      </custom-link>
    </div>

    <div class="language-selection">
      <div class="language-selection__title">
        {{ $t('general.chooseLanguage') }}
      </div>
      <div class="language-selection__options">
        <button :disabled="locale === 'en'" @click="setLocale('en')">
          🇬🇧 EN <span v-if="locale === 'en'">✅</span>
        </button>

        <button :disabled="locale === 'tr'" @click="setLocale('tr')">
          🇹🇷 TR <span v-if="locale === 'tr'">✅</span>
        </button>
      </div>
    </div>
  </div>
  <router-view />
</template>

<style lang="scss">
.header{
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;

  .menu {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    font-size: 1.5rem;
  }

  .language-selection {
    &__title {
      font-weight: bold;
      font-size: 1.5rem;
    }

    &__options {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-top: 10px;
    }
  }
}
</style>
