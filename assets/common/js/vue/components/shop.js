var shop = Vue.component('shop', {
    template: `
        <div>
            <navbar></navbar>
            <slider></slider>
            <div class="slider-separator"></div>
            <product-display v-bind:title="'Nuevos Lanzamientos'"></product-display>
            <product-display v-bind:title="'Ofertas'"></product-display>
            <all-products></all-products>
        </div>
    `
});

export default shop;