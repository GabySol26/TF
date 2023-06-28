<script>
import {ref} from "vue";
import Dialog from 'primevue/dialog';
import singIn from "@/views/sing-in.vue";
import {useRouter} from "vue-router";

const visible = ref(false);
export default {
    computed: {
        singIn() {
            return singIn
        }
    },
  components: {
    Dialog
  },
  methods: {

    saveChanges() {
      console.log("Cambios guardados");
      this.visible = true;
    },
    close(){
        const router = useRouter();
        this.$router.push('/');
    },

  },
  data() {
    return {
      visible: false,
      businessName: "MediProvider",
      contactNumber: "954632586",
      contactEmail: "MediProviderneg@gmail.com",
      registrationDate: "12/04/2023",
      location: "Lambayeque",
      accountType: "Proveedor",
      ruc: "23533565455",
      address: "Las magdalenas 123",
      plan: "Estandar",
      estado: "Activo",
      caducidad: "11/04/2024",
      tarjeta: "4474 2326 2589 4587",
      csv: "954",
    };
  },

  setup() {
    const visible = ref(false);
    const profile = ref(false);
    const member = ref(false);
    const support = ref(false);
    const admin = ref(false);
    return {visible, profile, member, support, admin};
  }
}
</script>

<template>
  <div @mouseenter="profile=true">
    <Dialog v-model:visible="profile" modal>
      <h3>Nombre de Negocio</h3>
      <input v-model="businessName" type="text">
      <h3>Numero de Contacto</h3>
      <input v-model="contactNumber" type="text">
      <h3>Correo de Contacto</h3>
      <input v-model="contactEmail" type="email">
      <h3>Fecha de Inscripcion</h3>
      <input v-model="registrationDate" type="text">
      <h3>Ubicacion</h3>
      <input v-model="location" type="text">
      <h3>Tipo de Cuenta</h3>
      <input v-model="accountType" type="text">
      <h3>RUC</h3>
      <input v-model="ruc" type="text">
      <h3>Dirección</h3>
      <input v-model="address" type="text">
      <div class="dialog-footer">
        <Button @click="visible = false">Cerrar</Button>
        <Button @click="saveChanges">Guardar</Button>
      </div>
    </Dialog>
  </div>

  <div @mouseenter="member=true">
    <Dialog v-model:visible="member" modal>
      <h3>Plan</h3>
      <input v-model="plan" type="text">
      <h3>Estado</h3>
      <input v-model="estado" type="text">
      <h3>Caducidad</h3>
      <input v-model="caducidad" type="date">
      <h3>Numero de Tarjeta</h3>
      <input v-model="tarjeta" type="text">
      <h3>CSV</h3>
      <input v-model="csv" type="text">
      <div class="dialog-footer">
        <Button @click="visible = false">Cerrar</Button>
        <Button @click="saveChanges">Guardar</Button>
      </div>
    </Dialog>
  </div>

  <div @mouseenter="support=true">
    <Dialog v-model:visible="support" modal>
      <div>
        <Button>Ingresar al chat</Button>
      </div>
      <Button>Solicitar una llamada</Button>
    </Dialog>
  </div>

  <div @mouseenter="admin=true">
    <Dialog v-model:visible="admin" modal>
      <div>
        <Button @click="close">Cerrar Sesion</Button>
      </div>
      <Button>Iniciar Sesion como Administrador</Button>
    </Dialog>
  </div>

  <h1>Configuration</h1>
  <div class="card-container">
    <Button class="card card-button" style="margin-left: 10px" @click="profile=true">
      <i class="pi pi-user" style="font-size: 100px;"></i>
      <h1>My Profile</h1>
    </Button>
    <Button class="card card-button" style="margin-right:10px" @click="support=true">
      <i class="pi pi-comments" style="font-size: 100px;"></i>
      <h1>Support</h1>
    </Button>
  </div>
  <br>
  <div class="card-container">
    <Button class="card card-button" style="margin-left: 10px" @click="member=true">
      <i class="pi pi-id-card" style="font-size: 100px;"></i>
      <h1>Membership</h1>
    </Button>
    <Button class="card card-button" style="margin-left: 10px" @click="admin=true">
      <i class="pi pi-cog" style="font-size: 100px;"></i>
      <h1>Administrator</h1>
    </Button>
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  margin: 10px;
  text-align: center;
  font-size: 40px;

}

i {
  font-size: 40px;
}

h1 {
  text-align: center;
  font-size: 50px;
}

.card {
  flex: 1;
  margin: 10px;
  padding: 10px;
  background-color: darksalmon;
  border-radius: 20px;
  color: black;
}

Button {
  margin: 2px;
  width: 200px;
  border-radius: 12px;
  text-align: center;
}

.card-button {
  display: inline-block;
  cursor: pointer;
  border: none; /* Remover el borde del botón */
  outline: none; /* Remover el contorno del botón */
}

.dialog-footer {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}

.dialog-footer button {
  margin-left: 10px;
}

input {
  height: 50px;
  width: 300px;
  border-radius: 12px;
}
</style>
