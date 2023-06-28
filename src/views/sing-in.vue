<template>
    <div class="login-container">
        <h2>Iniciar sesión</h2>
        <form @submit="login" class="login-form">
            <div class="form-group">
                <label for="username">Nombre de usuario:</label>
                <input type="text" id="username" v-model="username" required>
            </div>
            <div class="form-group">
                <label for="password">Contraseña:</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <div class="form-group">
                <Button type="submit" @click="'/sales'">Iniciar sesión</Button>
            </div>
        </form>
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    </div>
</template>

<script>
import axios from 'axios';
import {useRouter} from "vue-router";

export default {
    data() {
        return {
            username: '',
            password: '',
            errorMessage: ''
        };
    },
    methods: {
        async login(event) {
            event.preventDefault();
            const router = useRouter();
            this.$router.push('/sales');
            try {
                const response = await axios.get('http://gabysol26-001-site1.btempurl.com/api/v1/user/sign-in', {
                    userName: this.username,
                    password: this.password
                });

                if (response.status === 200) {
                    // Inicio de sesión exitoso, redireccionar a otra página
                    router.push('/sales');
                } else {
                    // Error en las credenciales, mostrar mensaje de error
                    this.errorMessage =
                        'Error al iniciar sesión. Por favor, verifica tus credenciales.';
                }

            } catch (error) {
                this.errorMessage = 'Error al iniciar sesión. Por favor, verifica tus credenciales.';
                console.error(error);
            }
        }
    }
};
</script>

<style>
.login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f5f5f5;
}

h2 {
    text-align: center;
    margin-bottom: 20px;
}

.login-form {
    display: flex;
    flex-direction: column;
}

.form-group {
    margin-bottom: 15px;
}

label {
    font-weight: bold;
}

input[type="text"],
input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button[type="submit"] {
    background-color: #4caf50;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.error-message {
    color: red;
    margin-top: 10px;
    text-align: center;
}
</style>
