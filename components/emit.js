Vue.component('emit', {
    data() {
        return {
            carBrand: 'Toyota',
        }
    },
    template: `
    <div>
        <h2>Emitir eventos con Vuejs 2</h2>
        <p @click="$emit('show-car-brand', carBrand)">
            Pulsa para emitir eventos del componente hijo al ROOT
        </p>
    </div>
`
});
