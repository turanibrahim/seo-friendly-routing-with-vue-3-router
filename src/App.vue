<script setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const setLocale = (newLocale) => {
  locale.value = newLocale;
};
</script>

<template>
  <div class="header">
    <div class="menu" />

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
