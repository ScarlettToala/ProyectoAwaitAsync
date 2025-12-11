<script setup>
import { ref } from 'vue'

const emit = defineEmits(['meal'])
const info = ref("")

function enviar() {
  emit('meal', info.value)
}
</script>

<template>
  <div class="search-wrapper">
    <input 
      type="text" 
      v-model="info" 
      placeholder="Escriu una categoria"
      @keyup.enter="enviar"
    />
    <button class="buscar-btn" @click="enviar">Buscar</button>
  </div>
</template>

<style scoped>
.search-wrapper {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 20px auto;
  width: 100%;
  max-width: 500px;
}

input {
  flex: 1;
  padding: 12px 15px;
  font-size: 16px;
  border-radius: 8px;
  border: 2px solid #ddd;
  transition: 0.2s;
  background: #fff;
}

input:focus {
  border-color: #ff7c39;
  outline: none;
  box-shadow: 0 0 5px rgba(255, 124, 57, 0.4);
}

.buscar-btn {
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  background-color: #ff7c39;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
}

.buscar-btn:hover {
  background-color: #e86e32;
}

.buscar-btn:active {
  transform: scale(0.97);
}
</style>
