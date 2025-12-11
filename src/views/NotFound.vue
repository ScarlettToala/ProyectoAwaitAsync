<template>
  <div class="error-container">
    <h1 class="error-title">Error en la aplicación</h1>

    <p class="error-message">
      Algo ha ido mal. Por favor vuelve atrás o recarga la página.
    </p>

    <RouterLink to="/">
      <button class="error-btn">Volver al inicio</button>
    </RouterLink>
  </div>
</template>

<style scoped>
    .error-container {
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  color: #3a2e27;
  padding: 20px;
}

/* Título grande */
.error-title {
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 10px;
  color: #d9534f;
}

/* Mensaje secundario */
.error-message {
  font-size: 18px;
  max-width: 500px;
  margin-bottom: 25px;
  color: #5a4a42;
}

/* Botón para volver */
.error-btn {
  margin-top: 10px;
  padding: 12px 22px;
  background: #ff7c39;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.25s ease;
  font-weight: bold;
}

.error-btn:hover {
  background: #e86e32;
  transform: translateY(-2px);
}

.error-btn:active {
  transform: scale(0.97);
}

</style>