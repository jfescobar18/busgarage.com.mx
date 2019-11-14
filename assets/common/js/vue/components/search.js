var search = Vue.component('search', {
    props: {
        SearchWord: {
            default: ''
        }
    },
    methods: {
        search: function () {
            this.SearchWord = this.SearchWord.replace(/\s/g, '+');
            if (this.$router.currentRoute.name === 'search-result') {
                window.location.href = `#/search-result/${this.SearchWord}`;
            }
            else {
                this.$router.push(`/search-result/${this.SearchWord}`);
            }
        }
    },
    template: `
        <div>
            <div class="search-box">
                <div class="form-input">
                    <form v-on:submit.prevent="search">
                        <button id="search-button" class="search-button" type="submit"><i class="fas fa-search"></i></button>
                        <input required type="text" class="input" placeholder="Buscar" v-model="SearchWord" />
                    </form>
                </div>
            </div>
        </div>
    `
});

export default search;