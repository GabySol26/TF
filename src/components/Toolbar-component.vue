<template>
  <div class="tabmenu-container">
    <TabMenu :model="items" />
    <input v-model="userId" type="text" placeholder="Enter User ID" style="width:70px;">
    <Button @click="getUser">Get User</Button>
    <p>{{ userName }}</p>
  </div>
  <RouterView/>
</template>

<script>
import TabMenu from 'primevue/tabmenu';
import { ref } from 'vue';
import { useStore } from 'vuex';
import { UserService } from '@/core/services/UserService';

export default {
  components: {
    TabMenu
  },
  setup() {
    const store = useStore();
    const userId = ref("");
    const userService = new UserService();
    const getUser = async () => { // Use async to wait for the response
      const response = await userService.getUserById(userId.value); // Await the response
      store.commit('setUser', response.data);
    };

    return { userId, getUser };
  },
  data() {
    return {
      items: [
        /*{ label: 'Inventario', icon: 'pi pi-box', to: '/inventory' },*/
        { label: 'Proveedores', icon: 'pi pi-user-edit', to: '/providers' },
        { label: 'Abastecimiento', icon: 'pi pi-check-square', to: '/supply' },
        /*{ label: 'Reportes', icon: 'pi pi-file-edit', to: '/reports' },*/
        { label: 'Ventas', icon: 'pi pi-dollar', to: '/sales' },
        { label: 'Notificaciones', icon: 'pi pi-bell', to: '/notification' },
        { label: 'Configuración', icon: 'pi pi-wrench', to: '/configuration' },
      ]
    };
  },
  computed: {
    userName() {
      return this.$store.state.user ? this.$store.state.user.userName : '';
    }
  },
  methods: {
    navigate(item) {
      this.$router.push(item.to);
    }
  }
}
</script>

<style scoped>
.tabmenu-container {
  display: flex;
  justify-content: center;
}
</style>
