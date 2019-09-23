var buy_product = Vue.component('buy-product', {
    template: `
        <div>
            <navbar></navbar>
            <product-information></product-information>
            <product-display v-bind:title="'Relacionados'"></product-display>
        </div>
    `
});

export default buy_product;