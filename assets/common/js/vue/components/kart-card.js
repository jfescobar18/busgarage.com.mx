var kart_card = Vue.component('kart-card', {
    template: `
        <div>
             <div class="kart-card">
                <div class="image-card">
                    <img src="./assets/common/img/product1.jpg" />
                </div>
                <div class="info-card">
                    <span class="category">Category</span>
                    <span class="name">Name</span>
                    <span class="price">$100</span>
                    <span class="quantity">x2</span>
                </div>
                <div class="configuration-card">
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas litora nisi:</p>
                    <p className="configuration">
                    Options:<br />
                    - Option: Option<br />
                    - Option: Option<br />
                    - Option: Option<br />
                    - Option: Option<br />
                    </p>
                    <div class="delete">
                        <router-link to="#" class=""><i class="fas fa-trash-alt"></i>&nbsp;Eliminar</router-link>
                    </div>
                </div>
             </div>
             <hr class="kart-end" />
        </div>
    `
});

export default kart_card;