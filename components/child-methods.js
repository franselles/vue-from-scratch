Vue.component('child-methods', {
    data() {
        return {
            cmpName: 'Método del cmp hijo'
        }
    },
    methods: {
        showName() {
            console.log('Llamada al metodo hijo desde padre', this.cmpName);
        }
    },
    template: `
    <div>
    <h2>Acceso a métodos del cmp hijo desde cmp padre</h2>
</div>
    `
});
