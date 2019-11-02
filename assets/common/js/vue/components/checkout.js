var checkout = Vue.component('checkout', {
    props: {
        cat_Karts: {
            default: {}
        },
        Order_Client_Name: {
            default: ''
        },
        Order_Client_Email: {
            default: ''
        },
        Order_Client_Phone: {
            default: ''
        },
        Order_Client_Address1: {
            default: ''
        },
        Order_Client_Address2: {
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
        Order_Client_Zip: {
            default: ''
        },
        Order_Client_Comments: {
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
        }
    },
    methods: {
        addOrder: function () {
            showLoader();
            this.$http.post(APIUrl() + 'AdminContent/AddKart', {
                Kart_Json_Config: this.cat_Karts.Kart_Json_Config
            }, {
                headers: {
                    APIKey: config.BusgarageAPIKey
                }
            }).then(
                response => {
                    this.cat_Karts = response.body;
                    this.postOrder();
                    hideLoader();
                },
                err => {
                    console.log(err);
                    hideLoader();
                }
            );
        },
        postOrder: function () {
            showLoader();
            this.$http.post(APIUrl() + 'AdminContent/AddOrder', {
                Kart_Id: this.Kart_Id,
                Order_Client_Name: this.Order_Client_Name,
                Order_Client_Email: this.Order_Client_Email,
                Order_Client_Phone: this.Order_Client_Phone,
                Order_Client_Address1: `${this.Address_Street} Num. ${this.Address_Number1}`,
                Order_Client_Address2: `Ext. ${this.Address_Number2} Col. ${this.Order_Client_Suburb}`,
                Order_Client_Province: this.Order_Client_Province,
                Order_Client_City: this.Order_Client_City,
                Order_Client_Zip: this.Order_Client_Zip,
                Order_Client_Comments: this.Order_Client_Comments
            }, {
                headers: {
                    APIKey: config.BusgarageAPIKey
                }
            }).then(
                response => {

                    hideLoader();
                },
                err => {
                    console.log(err);
                    hideLoader();
                }
            );
        },
        addOrderToSkydropx: function () {
            showLoader();
            this.$http.post('https://api-demo.srenvio.com/v1/shipments', {
                address_from: {
                    province: '',
                    city: '',
                    name: '',
                    zip: 0,
                    country: 'MXN',
                    address1: '',
                    company: '',
                    address2: '',
                    phone: 0,
                    email: ''
                },
                parcels: [{
                    weight: 0,
                    distance_unit: 'CM',
                    mass_unit: 'KG',
                    height: 0,
                    width: 0,
                    length: 0
                }]
            }, {
                headers: {
                    token: config.SkydropxAPIKey
                }
            }).then(
                response => {

                    hideLoader();
                },
                err => {
                    console.log(err);
                    hideLoader();
                }
            );
        },
        TestAPIKey: function () {
            showLoader();
            this.$http.get('https://api-demo.srenvio.com/v1/shipments', {
                headers: {
                    Authorization: `Token ${config.BusgarageAPIKey}`
                }
            }).then(
                response => {
                    console.log(response);
                    hideLoader();
                },
                err => {
                    console.log(err);
                    hideLoader();
                }
            );
        }
    },
    template: `
        <div>
            <navbar></navbar>
            <form v-on:submit.prevent="addOrder" class="payment-checkout-form">
                <div class="input-container">
                    <label for="name">Nombre de quien recibe</label>
                    <input required id="name" type="text" placeholder="Nombre de quien recibe" v-model="Order_Client_Name"/>
                </div>
                <div class="input-container">
                    <label for="email">Email</label>
                    <input required id="email" type="email" placeholder="Email" v-model="Order_Client_Email"/>
                </div>
                <div class="input-container">
                    <label for="phone">Teléfono</label>
                    <input required id="phone" type="phone" placeholder="Teléfono" v-model="Order_Client_Phone"/>
                </div>
                <div class="input-container">
                    <label for="zip">Código Postal</label>
                    <input required id="zip" type="text" placeholder="Código Postal" v-model="Order_Client_Zip"/>
                </div>
                <div class="input-container">
                    <label for="state">Estado</label>
                    <input required id="state" type="text" placeholder="Estado" v-model="Order_Client_Province"/>
                </div>
                <div class="input-container">
                    <label for="city">Municipio</label>
                    <input required id="city" type="text" placeholder="Municipio" v-model="Order_Client_City"/>
                </div>
                <div class="input-container select-container">
                    <label for="suburb">Colonia</label>
                    <select required id="suburb" v-model="Order_Client_Suburb">
                        <option selected disabled value="">Seleccione una opción</option>
                    </select>
                </div>
                <div class="input-container">
                    <label for="address">Dirección</label>
                    <input required id="address" type="text" placeholder="Dirección" v-model="Address_Street"/>
                </div>
                <div class="input-container">
                    <div>
                        <label for="num_ext">Num. Exterior</label>
                        <input required id="num_ext" type="text" placeholder="Num. Exterior" v-model="Address_Number1"/>
                    </div>
                    <div>
                        <label for="num_int">Num. Interior</label>
                        <input id="num_int" type="text" placeholder="Num. Interior" v-model="Address_Number2"/>
                    </div>
                </div>
                <div class="input-container message-container">
                    <label for="comments">Comentarios</label>
                    <textarea id="comments" type="text" placeholder="Comentarios" v-model="Order_Client_Comments"></textarea>
                </div>
                <button type="submit">Continuar al Pago</button>
                <button type="button" v-on:click="TestAPIKey">Test</button>
            </form>
        </div>
    `,
    mounted() {
        this.cat_Karts.Kart_Json_Config = JSON.parse(localStorage.getItem('Kart'));

        if (this.cat_Karts.Kart_Json_Config === null || this.cat_Karts.Kart_Json_Config === undefined) {
            this.$router.push("/Shop");
        }
    }
});

export default checkout;