<template>
  <section class="aftercare">
    <h2>Guía de Cuidados para tu Nuevo Tatuaje</h2>
    <div class="aftercare-content">
      <div class="aftercare-timeline">
        <div v-for="(period, index) in aftercarePeriods" :key="index" class="timeline-item">
          <div class="timeline-icon">
            <font-awesome-icon :icon="period.icon" />
          </div>
          <div class="timeline-content">
            <h3>{{ period.title }}</h3>
              <p v-for="(instruction, idx) in period.instructions" :key="idx">
                {{ instruction }}
              </p>
          </div>
        </div>
      </div>
      <div class="aftercare-details">
        <div class="care-instructions card">
          <h3>
            <font-awesome-icon icon="hand-sparkles" />
            &nbsp;Cómo lavarse:
          </h3>
          <p>{{ careInstructions }}</p>
        </div>
        <div class="prohibitions card">
          <h3>
            <font-awesome-icon icon="ban" />
              &nbsp; Prohibido:
          </h3>
            <p v-for="(prohibition, index) in prohibitions" :key="index">
              {{ prohibition }}
            </p>
        </div>
        <div class="aftercare-note card">
          <p>Cada persona cicatriza de manera diferente. Si tienes dudas específicas sobre el cuidado de tu tatuaje, no dudes en consultar al tatuador o a un médico.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AfterCare',
  data() {
    return {
      aftercarePeriods: [
        {
          icon: 'clock',
          title: 'Primeras 3 horas:',
          instructions: [
            'Retirar el papel film y lavar el tatuaje',
          ]
        },
        {
          icon: 'calendar-day',
          title: 'Durante los 3 primeros días:',
          instructions: [
            'Lavar el tatuaje tres veces al día con agua tibia y jabón neutro',
            'Secar suavemente con toques, sin frotar',
            'Mantener el área limpia y seca',
            'Evitar ropa muy ajustada sobre el tatuaje'
          ]
        },
        {
          icon: 'calendar-week',
          title: 'Después del 3er día hasta que haga un mes:',
          instructions: [
            'Seguimos lavando el tatuaje tres veces al día',
            'Empezamos con la crema recomendada por el tatuador extender una MUY FINA CAPA',
            'Comenzar a exponer el tatuaje al aire por períodos cortos'
          ]
        },
        {
          icon: 'calendar-alt',
          title: 'Después de la curación:',
          instructions: [
            'Continuar hidratando la piel del tatuaje',
            'Proteger de la luz solar directa con cremas protectoras',
          ]
        }
      ],
      careInstructions: 'Usa agua tibia y jabón neutro sin perfumes, limpia con cuidado sin frotar. Para secar, utiliza únicamente papel absorbente o de cocina, dando pequeños toques sin arrastrar. Evita toallas o telas que puedan dejar pelusas o fibras en el tatuaje.',
      prohibitions: [
        'NO bañarse en piscinas, playas, jacuzzis o saunas durante al menos 2-3 semanas',
        'NO exponer el tatuaje al sol directo o camas de bronceado por al menos 4-6 semanas',
        'EVITAR el contacto con mascotas, su pelo y saliva pueden causar infecciones',
        'NO realizar actividades que causen sudoración excesiva por al menos 1 semana',
        'EVITAR ropa muy ajustada o que roce directamente con el tatuaje',
        'NO aplicar alcohol, peróxido de hidrógeno o cremas no recomendadas'
      ],
      contactInfo: [
        { icon: ['fab', 'instagram'], text: '@delaitto.tattoo' },
        { icon: ['fab', 'whatsapp'], text: '638 79 53 42 / 681 09 21 91' },
        { icon: ['fas', 'map-marker-alt'], text: 'Calle Rioja 71 Local 6, Leganés, Madrid' }
      ]
    };
  },
};
</script>

<style scoped>
.aftercare {
  max-width: 1200px;
  width: 100%;
  padding: 40px 20px;
  border-radius: 12px;
}

.aftercare h2 {
  color: var(--color-heading);
  text-align: start;
  margin-bottom: 40px;
  font-weight: bold;
}



.aftercare-content {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
}

.aftercare-timeline, .aftercare-details {
  flex: 1;
  min-width: 300px;
}

.timeline-item {
  display: flex;
  margin-bottom: 30px;
  position: relative;
}

.timeline-icon {
  background-color: var(--color-primary);
  color: var(--color-background);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  margin-right: 20px;
  flex-shrink: 0;
}

.timeline-content {
  background-color: var(--color-background-mute);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex-grow: 1;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 40px;
  bottom: -30px;
  width: 2px;
  background-color: var(--color-primary);
}

.timeline-item:last-child::before {
  display: none;
}

.card {
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

h3 {
  font-size: 1.3em;
  color: var(--color-heading);
  font-weight: bold;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

h3 .fa-icon {
  margin-right: 10px;
  color: var(--color-primary);
}


.aftercare-note {
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.aftercare-note .fa-icon {
  color: var(--color-primary);
  font-size: 1.5em;
  margin-top: 3px;
}

.aftercare-note p {
  margin: 0;
  font-style: italic;
  color: var(--color-text);
  line-height: 1.6;
}

.font-bold{
  font-weight: bold;
}

@media (max-width: 768px) {
  .aftercare-content {
    flex-direction: column;
  }

  .aftercare {
    padding: 30px 20px;
  }

  .timeline-item::before {
    left: 19px;
  }
}
</style>