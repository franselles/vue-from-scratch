Vue.component('child-data', {
    data() {
        return {
            cmpName: 'Datos del cmp hijo'
        }
    },
    template: `
    <div>
    <h2>Acceso a datos del cmp hijo desde cmp padre</h2>
</div>
    `
});
