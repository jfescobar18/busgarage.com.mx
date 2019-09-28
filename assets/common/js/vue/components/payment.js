var checkout = Vue.component('checkout', {
    template: `
        <div>
            <navbar></navbar>
            <form action="" class="payment-checkout-form">
                <div class="input-container">
                    <label for="card">Número de Tarjeta</label>
                    <input id="card" type="text" placeholder="Número de Tarjeta"/>
                </div>
                <div class="input-container">
                    <label for="name">Nombre del Titular</label>
                    <input id="name" type="text" placeholder="Nombre del Titular"/>
                </div>
                <div class="input-container">
                    <div>
                        <label for="date">Vigencia</label>
                        <input id="date" type="text" placeholder="Vigencia"/>
                    </div>
                    <div>
                        <label for="ccv">CCV</label>
                        <input id="ccv" type="text" placeholder="CCV"/>
                    </div>
                </div>
                <button type="submit">Pagar</button>
            </form>
        </div>
    `
});

export default checkout;