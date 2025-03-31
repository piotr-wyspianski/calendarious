<template>
  <Menubar :model="items">
    <template #start>
      <img alt="logo" src="../assets/logo.png" height="40" class="mr-2" />
    </template>
    <template #end>
      <InputText placeholder="Wyszukaj" type="text" />
    </template>
  </Menubar>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Menubar from 'primevue/menubar'
import InputText from 'primevue/inputtext'

export default defineComponent({
  name: 'AppHeader',
  components: {
    Menubar,
    InputText
  },
  setup() {
    const items = ref([
      {
        label: 'Strona główna',
        icon: 'pi pi-fw pi-home',
        to: '/'
      },
      {
        label: 'Kalendarz',
        icon: 'pi pi-fw pi-calendar',
        to: '/calendar'
      },
      {
        label: 'Użytkownicy',
        icon: 'pi pi-fw pi-users',
        to: '/users'
      }
    ])

    return { items }
  }
})
</script>
