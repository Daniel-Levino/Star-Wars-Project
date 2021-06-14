<template>
  <q-layout view="lHh Lpr lFf" class="constrain">
    <q-header class="row q-mx-sm constrain">
      <q-btn
        class="col-2"
        round
        text-color="amber-12"
        icon="home"
        to="/"
        size="20px"
      />
      <q-separator class="col-6"/>
      <q-btn
        label="PT"
        round
        class="col-2"
        @click="$i18n.locale = 'pt-br'"
        size="20px"
      />
      <q-btn
        label="US"
        round
        class="col-2"
        @click="$i18n.locale = 'en-us'"
        size="20px"
      />
    </q-header>
    <q-page-container class="bg-black">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout'
}
</script>
