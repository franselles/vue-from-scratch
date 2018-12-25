Vue.component('watchers', {
    data() {
        return {
            user: null,
            oldUser: null,
        }
    },
    methods: {
        async randomUser() {
            try {
                const data = await fetch('https://randomuser.me/api/');
                const json = await data.json();
                const user = json.results[0];
                console.log(user);

                this.user = `${user.name.title} ${user.name.first} ${user.name.last}`;
            } catch (e) {
                // Algo ha ido mal
            }
        }
    },
    watch: {
        user(newVal, oldVal) {
            this.user = newVal;
            this.oldUser = oldVal;
        }
    },
    template: `
        <div>
            <h2>Watchers con Vue</h2>
            <button @click="randomUser">Actualiza usuario</button>
            <p>Nuevo usuario {{ user }}</p>
            <p>Viejo usuario {{ oldUser }}</p>
        </div>
    `
});
