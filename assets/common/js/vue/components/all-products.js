var all_products = Vue.component('all-products', {
    template: `
        <div>
            <div class="all-products">
                <h1>Categorias</h1>
                <div class="categories">
                    <router-link class="show-all" to="#">Todos los productos</router-link>

                    <router-link class="show-all" to="#">Categoria 1</router-link>
                    <router-link class="show-all" to="#">Categoria 2</router-link>
                    <router-link class="show-all" to="#">Categoria 3</router-link>
                    <router-link class="show-all" to="#">Categoria 4</router-link>
                    <router-link class="show-all" to="#">Categoria 5</router-link>
                    <router-link class="show-all" to="#">Categoria 6</router-link>
                </div>
            </div>
        </div>
    `
});

export default all_products;