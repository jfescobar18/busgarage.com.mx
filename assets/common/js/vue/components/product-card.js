var product_card = Vue.component('product-card', {
    template: `
        <div>
            <div class="product-card new">
                <img src="./assets/common/img/product1.jpg" />
                <div class="label-box">NEW</div>
                
                <span class="category">
                    Category 
                    <span class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                    </span>
                </span>
                <span class="name">Name</span>
                <span class="price">$100</span>
            </div>
        </div>
    `
});

export default product_card;