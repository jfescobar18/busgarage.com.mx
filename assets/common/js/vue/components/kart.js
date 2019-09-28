var kart = Vue.component('kart', {
    template: `
        <div>
            <navbar></navbar>
            <kart-card></kart-card>
            <kart-card></kart-card>
            <kart-card></kart-card>
            <p class="total">Total: <span>$100,00</span></p>
            <router-link to="/checkout" class="go-checkout">Proceder al Pago</router-link>
        </div>
    `
});

export default kart;