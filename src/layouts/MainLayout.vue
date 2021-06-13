<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-btn
        round
        padding="md"
        text-color="amber-12"
        icon="home"
        to="/"
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
