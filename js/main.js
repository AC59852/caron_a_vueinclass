import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js';

const myVM = (() => {
    let vue_vm = new Vue({
        data: {
            message: "Hello from Vue!",
            collection: [
                { name: "Austin", brain: "Rigid"},
                { name: "Patrick", brain: "Smooth"},
            ]
        },

        methods: {
            logClicked() {
                console.log('clicked an element.')
            }
        }
    }).$mount("#app");
})();