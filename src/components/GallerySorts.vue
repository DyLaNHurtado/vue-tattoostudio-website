<template>
  <div class="gallery-sort">

    <div class="sort-buttons">
        <button :class="['transparent-button',{ 'active': option!='' && option === EnumTattooStyles.BLACKWORK }]" @click="sortBy(EnumTattooStyles.BLACKWORK)"># Blackwork</button>
        <button :class="['transparent-button',{ 'active': option!='' && option === EnumTattooStyles.WATERCOLOR }]" @click="sortBy(EnumTattooStyles.WATERCOLOR )"># Watercolor</button>
        <button :class="['transparent-button',{ 'active': option!='' && option === EnumTattooStyles.NEOTRADITIONAL }]" @click="sortBy(EnumTattooStyles.NEOTRADITIONAL)"># Neotradicional</button>
        <button :class="['transparent-button',{ 'active': option!='' && option === EnumTattooStyles.DARK_ART }]" @click="sortBy(EnumTattooStyles.DARK_ART)"># DarkArt</button>
        <button :class="['transparent-button',{ 'active': option!='' && option === EnumTattooStyles.REALISM }]" @click="sortBy(EnumTattooStyles.REALISM)"># Realismo</button>
        <button :class="['transparent-button',{ 'active': option!='' && option === EnumTattooStyles.OLD_SCHOOL }]" @click="sortBy(EnumTattooStyles.OLD_SCHOOL)"># OldSchool</button>
        <button :class="['transparent-button',{ 'active': option!='' && option === EnumTattooStyles.JAPANESE }]" @click="sortBy(EnumTattooStyles.JAPANESE)"># Japonés</button>
        <button :class="['transparent-button',{ 'active': option!='' && option === EnumTattooStyles.LETTERING }]" @click="sortBy(EnumTattooStyles.LETTERING)"># Lettering</button>
    </div>
  </div>

</template>
  
<script>
import { EnumTattooStyles } from './Enums';
export default {
  data(){
    return{
      option:'',
      EnumTattooStyles: EnumTattooStyles,
    }

  },props:{
    sortByOption: String,
  },methods:{
        sortBy(option) {
          console.log(option , this.option);
          if(option === this.option){
            this.option = '';
          }else{
            this.option = option;
          }
          this.$emit('sortBy', this.option);
        }
    },watch:{
      sortByOption(newValue){
        if(newValue !== this.option){
          this.option = newValue;
        }
      }
    }
};
</script>
  
<style scoped>
/* Estilos para los botones de ordenación */
.gallery-sort{
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin: 10px 0px;

}
.sort-buttons {
  display: flex;
  justify-content: start;
  align-items: end;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 8px;
}

.transparent-button{
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 8px;
  background-color: var(--color-background-soft);
}
.transparent-button:hover .star{
  color: var(--color-primary);;
}
.transparent-button.active {
  background-color: var(--color-primary);
  color: white;
  border-color: transparent;
}

.transparent-button.active:hover {
  background-color: var(--color-primary-hover);
}
.star {
  transition: transform 0.2s, color 0.2s;
  color: var(--color-text-mute);
}

.transparent-button.active .star {
  color: #ffc107;
}
@media (max-width: 1100px) {
  .gallery-sort{
    flex-direction: column;
    justify-content: start;
  }
  .sort-buttons{
    justify-content: start;
  }
}
</style>
  