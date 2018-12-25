Vue.component('computed-properties-get-set', {
    data() {
        return {
            amount: 0,
        }
    },
    computed: {
        amountFormated: {
            get() {
                return `${this.amount}`;
            },
            set(newVal) {
                this.amount = newVal;
            }
        }
    },
    template: `
        <div>
            <h2>Computed properties get && set</h2>
            <input v-model="amount">
            <p>{{ amountFormated | currency_filter('€') }}</p>
        </div>
    `
});
