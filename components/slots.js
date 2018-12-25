Vue.component('slots', {
    template: `
        <div>
            <h2>Slots en vue, ejemplo de layout</h2>
            <header>
                <slot name="header"></slot>
            </header>
            <main>
                <slot></slot>
            </main>
            <footer>
                <slot name="footer"></slot>
            </footer>
        </div>
    `
});
