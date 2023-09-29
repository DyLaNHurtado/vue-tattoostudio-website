<template>
    <div class="faq">
        <h1> Preguntas frecuentes (FAQ):</h1>
        <div class="questions-summary">
            <div v-for="faq in faqList" class="question-row">
                <span class="transparent-button" @click="faq.clicked=!faq.clicked">{{ faq.question }}<font-awesome-icon :icon="['fas', 'arrow-right']" class="arrow" /></span>
                <span v-if="faq.clicked" class="answer">{{ faq.answer }}</span>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            faqList: [
                { question: "¿ Cuando puedo visitaros ?", answer: " Tendrás que pedir una cita, ya sea llamando por telefono o por correo electronico.", clicked:false},
                { question: "¿ Puedo salir en plena sesion ?", answer: "No.", clicked:false},
                { question: "¿ Hay diseños personalizados ?", answer: "Si.", clicked:false},
                { question: "¿ Puedes calcar los diseños de otras personas ?", answer: " Todos los tatuadores le intentamos dar nuestra esencia a los diseños.", clicked:false},
                { question: "¿ Puedo salir en plena sesion ?", answer: "Si.", clicked:false},
                { question: "¿ Puedo salir en plena sesion ?", answer: "Si.", clicked:false}
            ]
        };
    },
    props: {
        totalReviews: Number,
        list: Array,
    },
    methods: {
        calculateAverage() {
            let total = 0;
            this.list.forEach((value, index) => { total += value * (index + 1) });
            return (total / this.totalReviews);
        }
    }
};
</script>
  
<style scoped>
.faq {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin: 10px 0px;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    padding: 20px;
    transition: transform 0.3s, box-shadow 0.3s;
    height: auto;
    word-wrap: break-word;
    width: 100%;
    background-color: var(--color-background-soft);
}

.questions-summary {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 100%;
    height: 100%;
    gap: 12px;
    border-radius: 8px;
    
}

.question-row {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    width: 100%;
    gap: 12px;
}
.arrow{
    padding-left: 5px;
    transition: all .3s;
}
.transparent-button:hover .arrow{
    transform: translateX(5px);
}


.answer{
    padding: 10px 18px;
    background-color: var(--color-background-mute);
    border-radius: 500px;
    color: var(--color-heading);
    font-weight: 300;
}

h1,h2 {
    font-weight: bold;
}

/* Estilos para dispositivos móviles */
@media (max-width: 768px) {}

@media (prefers-color-scheme: dark) {
  .faq {
    background-color: var(--c-indigo);
  }
}
</style>