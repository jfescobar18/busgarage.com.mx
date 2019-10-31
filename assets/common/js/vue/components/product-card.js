var product_card = Vue.component('product-card', {
    props: {
        Product: {
            default: {}
        }
    },
    methods: {
        buyProduct: function (Product_Id) {
            this.$router.push(`/buy/${Product_Id}`);
        }
    },
    template: `
        <div>
            <div class="product-card new" v-on:click="buyProduct(Product.Product_Id);">
                <img v-bind:src="Product.Product_Img" />
                <div v-if="Product.Product_Is_New && Product.Product_Released" class="label-box">NEW</div>
                
                <span class="category">
                    {{Product.Category_Name}} 
                    <span v-if="Product.Product_Released" class="stars">
                        <ranking v-bind:ProductRanking="Product.Product_Ranking"></ranking>
                    </span>
                </span>
                <span class="name">{{Product.Product_Name}}</span>
                <span v-if="Product.Product_Disscount > 0" class="name">-{{Product.Product_Disscount}}%</span>

                <span v-if="Product.Product_Disscount > 0" class="price"><s>{{Product.Product_Price}}</s></span>
                <span v-else class="price">{{Product.Product_Price}}</span>
                <span v-if="Product.Product_Disscount > 0" class="price">{{Product.Product_Price_Total}}</span>
            </div>
        </div>
    `
});

export default product_card;