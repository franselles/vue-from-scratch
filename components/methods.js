Vue.component('methods', {
    data() {
        return {
            name: 'Fran',
            surname: 'Selles',
        }
    },
    computed: {
        fullName() {
            return `${this.name} ${this.surname}`;
        }
    },
    methods: {
        hello() {
            alert(this.fullName);
        }
    },
    template: `
        <div>
            <h2>Métodos con Vue Methods</h2>
            <p @click="hello">Pulsa aquí para ejecutar el metodo hello</p>
        </div>
    `
})