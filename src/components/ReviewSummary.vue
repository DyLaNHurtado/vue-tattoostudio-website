<template>
    <div class="review-summary">
        <h1> {{ calculateAverage() }} / 5</h1>
        <h3> {{ totalReviews }} reviews</h3>
        <div class="stars-summary">
            <div v-for="(item, index) in list" class="star-summary">
                <div><font-awesome-icon :icon="['fas', 'star']" v-for="start in index + 1"
                        class="star active-star" /><font-awesome-icon :icon="['fas', 'star']" v-for="start in 4 - index"
                        class="star" /></div>
                <h2>{{ item }}</h2>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
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
.review-summary {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin: 10px 0px;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    padding: 20px;
    background-color: var(--c-indigo);
    transition: transform 0.3s, box-shadow 0.3s;
    height: auto;
    word-wrap: break-word;
}

.stars-summary {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 0px;
    width: 100%;
    height: 100%;
}

.star-summary {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    padding: 10px 20px;
}

.star {
    font-size: 24px;
    transition: transform 0.2s, color 0.2s;
    color: var(--color-text-mute);
}

.active-star {
    color: #ffc107;
}

h1 {
    font-weight: bold;
    font-size: 52px;
}

h2 {
    font-weight: bold;
}

/* Estilos para dispositivos móviles */
@media (max-width: 768px) {}</style>