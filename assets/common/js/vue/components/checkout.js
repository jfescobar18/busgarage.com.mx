var checkout = Vue.component('checkout', {
    template: `
        <div>
            <navbar></navbar>
            <form action="" class="payment-checkout-form">
                <div class="input-container">
                    <label for="name">Nombre de quien recibe</label>
                    <input id="name" type="text" placeholder="Nombre de quien recibe"/>
                </div>
                <div class="input-container">
                    <label for="email">Email</label>
                    <input id="email" type="email" placeholder="Email"/>
                </div>
                <div class="input-container">
                    <label for="phone">Teléfono</label>
                    <input id="phone" type="phone" placeholder="Teléfono"/>
                </div>
                <div class="input-container">
                    <label for="zip">Código Postal</label>
                    <input id="zip" type="text" placeholder="Código Postal"/>
                </div>
                <div class="input-container">
                    <label for="state">Estado</label>
                    <input id="state" type="text" placeholder="Estado"/>
                </div>
                <div class="input-container">
                    <label for="city">Municipio</label>
                    <input id="city" type="text" placeholder="Municipio"/>
                </div>
                <div class="input-container select-container">
                    <label for="suburb">Colonia</label>
                    <select id="suburb">
                        <option>Opt1</option>
                        <option>Opt2</option>
                        <option>Opt3</option>
                    </select>
                </div>
                <div class="input-container">
                    <label for="address">Dirección</label>
                    <input id="address" type="text" placeholder="Dirección"/>
                </div>
                <div class="input-container">
                    <div>
                        <label for="num_ext">Num. Exterior</label>
                        <input id="num_ext" type="text" placeholder="Num. Exterior"/>
                    </div>
                    <div>
                        <label for="num_int">Num. Interior</label>
                        <input id="num_int" type="text" placeholder="Num. Interior"/>
                    </div>
                </div>
                <div class="input-container message-container">
                    <label for="comments">Comentarios</label>
                    <textarea id="comments" type="text" placeholder="Comentarios"></textarea>
                </div>
                <button type="submit">Continuar al Pago</button>
            </form>
        </div>
    `
});

export default checkout;