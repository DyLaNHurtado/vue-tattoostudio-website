<template>
  <section class="aftercare">
    <h2>Cuidados Posteriores al Tatuaje</h2>
    <div class="aftercare-content">
      <div class="aftercare-step">
        <font-awesome-icon :icon="['fas', 'hand-sparkles']" class="icon" />
        <h3>Mantén el área limpia</h3>
        <p>Lava suavemente el área tatuada con agua tibia y jabón neutro. Evita frotar y seca con una toalla limpia.</p>
      </div>
      <div class="aftercare-step">
        <font-awesome-icon :icon="['fas', 'band-aid']" class="icon" />
        <h3>Aplica una crema hidratante</h3>
        <p>Usa una crema específica para tatuajes para mantener la piel hidratada y promover la cicatrización.</p>
      </div>
      <div class="aftercare-step">
        <font-awesome-icon :icon="['fas', 'sun']" class="icon" />
        <h3>Evita la exposición al sol</h3>
        <p>Protege tu tatuaje del sol directo y evita piscinas, saunas y baños prolongados durante las primeras semanas.</p>
      </div>
      <div class="aftercare-step">
        <font-awesome-icon :icon="['fas', 'hand-holding-water']" class="icon" />
        <h3>No rasques ni frotes</h3>
        <p>Es normal que el tatuaje pique mientras cicatriza, pero evita rascarte o frotar el área para no dañar el diseño.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<style scoped>
.aftercare {
  padding: 60px 20px;
  border-radius: 15px;
  max-width: 1200px;
  margin: 40px auto;
  text-align: center;
}

.aftercare h2 {
  font-size: 2rem;
  color: var(--color-heading);
  margin-bottom: 40px;
}

.aftercare-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.aftercare-step {
  background-color: var(--color-background);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.aftercare-step:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.icon {
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: 20px;
}

h3 {
  font-size: 1.5rem;
  color: var(--color-heading);
  margin-bottom: 15px;
}

p {
  font-size: 1rem;
  color: var(--color-text);
  line-height: 1.6;
}
</style>