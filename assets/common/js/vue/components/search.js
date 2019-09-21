var search = Vue.component('search', {
    template: `
        <div>
            <div class="search-box">
                <div class="form-input">
                    <form>
                        <button id="search-button" class="search-button" type="submit"><i class="fas fa-search"></i></button>
                        <input type="text" class="input" placeholder="Buscar" />
                    </form>
                </div>
            </div>
        </div>
    `
});

export default search;