var checkout = Vue.component('checkout', {
    props: {
        Order: {
            default: {}
        },
        token_id: {
            default: ''
        },
        use_card_points: {
            default: ''
        },
        Card: {
            default: ''
        },
        Name: {
            defaukt: ''
        },
        expirationMonth: {
            default: ''
        },
        expirationYear: {
            default: ''
        },
        CCV: {
            default: ''
        },
        Order_Client_Zip: {
            default: ''
        },
        Order_Client_Province: {
            default: ''
        },
        Order_Client_City: {
            default: ''
        },
        Order_Client_Suburb: {
            default: ''
        },
        Address_Street: {
            default: ''
        },
        Address_Number1: {
            default: ''
        },
        Address_Number2: {
            default: ''
        },
        Use_Shipment_Address: {
            default: false
        }
    },
    methods: {
        paymentValidation: function () {
            this.Card = this.Card.split(' ').join('');
            setTimeout(() => {
                OpenPay.token.extractFormAndCreate($('#payment-form'),
                    response => {
                        this.token_id = response.data.id;
                        if (response.data.card.points_card) {
                            swal({
                                title: "Pagar con Puntos",
                                text: "¿Desea usar los puntos de su tarjeta para realizar este pago?",
                                icon: "warning",
                                buttons: ["No", "Sí"],
                                dangerMode: false,
                            }).then((usePoints) => {
                                if (usePoints) {
                                    this.use_card_points = true;
                                    this.processPayment();
                                } else {
                                    this.use_card_points = false;
                                    this.processPayment();
                                }
                            });
                        }
                        else {
                            this.processPayment();
                        }

                    }, err => {
                        console.log(err);
                        this.clearPaymentData();
                        warning_swal('Error de validación', 'Por favor verifique sus datos o consulte a su banco para mayor información');
                    }
                );
            }, 250);
        },
        processPayment: function () {

        },
        useShipmentAddress: function () {
            if (!this.Use_Shipment_Address) {
                this.Order_Client_Zip = this.Order.Order_Client_Zip;
                this.Order_Client_Province = this.Order.Order_Client_Province;
                this.Order_Client_City = this.Order.Order_Client_City;
                this.Address_Street = this.Order.Address_Street;
                this.Address_Number1 = this.Order.Address_Number1;
                this.Address_Number2 = this.Order.Address_Number2;
            }
        },
        formatCC: function (value) {
            var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
            var matches = v.match(/\d{4,16}/g);
            var match = matches && matches[0] || ''
            var parts = []
            for (let i = 0, len = match.length; i < len; i += 4) {
                parts.push(match.substring(i, i + 4))
            }
            if (parts.length) {
                this.Card = parts.join(' ')
            } else {
                this.Card = value;
            }
        },
        clearPaymentData: function () {
            this.Name = '';
            this.Card = '';
            this.expirationMonth = '';
            this.expirationYear = '';
            this.CCV = '';
        }
    },
    template: `
        <div>
            <navbar></navbar>
            <form v-on:submit.prevent="paymentValidation" class="payment-checkout-form" id="payment-form">
                <input type="hidden" id="token_id" v-model="token_id">
                <input type="hidden" id="use_card_points" v-value="use_card_points" value="false">
                <div class="input-container">
                    <label for="name">Nombre del Titular</label>
                    <input id="name" type="text" placeholder="Nombre del Titular" v-model="Name" autocomplete="off" data-openpay-card="holder_name" />
                </div>
                <div class="input-container">
                    <label for="card">Número de Tarjeta</label>
                    <input id="card" type="text" placeholder="Número de Tarjeta" v-model="Card" v-on:keypress="formatCC(Card)" autocomplete="off" data-openpay-card="card_number" />
                </div>
                <div class="input-container">
                    <div>
                        <label for="expirationMonth">Vigencia</label>
                        <input id="expirationMonth" type="text" placeholder="Mes (MM)" v-model="expirationMonth" data-openpay-card="expiration_month"/>
                    </div>
                    <div>
                        <label for="expirationYear"><br /></label>
                        <input id="expirationYear" type="text" placeholder="Año (AA)" v-model="expirationYear" data-openpay-card="expiration_year"/>
                    </div>
                </div>
                <div class="input-container">
                    <label for="ccv">CCV</label>
                    <input id="ccv" type="password" placeholder="CCV" v-model="CCV" autocomplete="off" data-openpay-card="cvv2"/>
                </div>
                <div class="input-container">
                    <label for="zip">Código Postal</label>
                    <input required id="zip" type="text" placeholder="Código Postal" v-model="Order_Client_Zip" data-openpay-card-address="postal_code"/>
                </div>
                <div class="input-container p-ml-10">
                    <label for="state">Estado</label>
                    <input required id="state" type="text" placeholder="Estado" v-model="Order_Client_Province" data-openpay-card-address="state"/>
                </div>
                <div class="input-container">
                    <label for="city">Municipio</label>
                    <input required id="city" type="text" placeholder="Municipio" v-model="Order_Client_City" data-openpay-card-address="city"/>
                </div>
                <div class="input-container">
                    <label for="address">Dirección</label>
                    <input required id="address" type="text" placeholder="Dirección" v-model="Address_Street" data-openpay-card-address="line1"/>
                </div>
                <div class="input-container">
                    <div>
                        <label for="num_ext">Num. Exterior</label>
                        <input required id="num_ext" type="text" placeholder="Num. Exterior" v-model="Address_Number1" data-openpay-card-address="line2"/>
                    </div>
                    <div>
                        <label for="num_int">Num. Interior</label>
                        <input id="num_int" type="text" placeholder="Num. Interior" v-model="Address_Number2" data-openpay-card-address="line3"/>
                    </div>
                </div>
                <div class="input-container"></div>
                <div class="input-container">
                    <input class="styled-checkbox" id="styled-checkbox-1" type="checkbox" v-model="Use_Shipment_Address" v-on:click="useShipmentAddress">
                    <label for="styled-checkbox-1">Usar información de envío</label>
                </div>
                <input type="hidden" data-openpay-card-address="country_code" size="3" value="MX">
                <button type="submit">Pagar</button>
            </form>
        </div>
    `,
    mounted() {
        this.Order = JSON.parse(localStorage.getItem('OrderJson'));

        if (this.Order === null || this.Order === undefined) {
            this.$router.push("/checkout");
        }

        OpenPay.setId(config.OpenpayID);
        OpenPay.setApiKey(config.OpenpayAPIKey);
        OpenPay.setSandboxMode(config.OpenpayUseSandBox);
        var deviceSessionId = OpenPay.deviceData.setup("payment-form", "deviceIdHiddenFieldName");
    }
});

export default checkout;