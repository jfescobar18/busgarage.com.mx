var home = Vue.component('home', {
    template: `
        <div>
            <navbar></navbar>
            <slider></slider>
            <div class="slider-separator"></div>
            <product-display v-bind:title="'Nuevos Lanzamientos'"></product-display>
            <off-banner></off-banner>
            <product-display v-bind:title="'Proximamente'"></product-display>
        </div>
    `
});

export default home;