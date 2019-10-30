var ranking = Vue.component('ranking', {
    props: ['ProductRanking', 'intRanking', 'doubleRanking', 'emptyRanking'],
    methods: {
        createUIRanking: function () {
            this.emptyRanking = 5;

            if (this.ProductRanking % 1 > 0) {
                var arrayRanking = this.ProductRanking.toString().split('.');
                this.intRanking = parseInt(arrayRanking[0]);
                this.doubleRanking = parseInt(arrayRanking[1]) / 100;

                this.emptyRanking = this.emptyRanking - this.intRanking;

                if (this.doubleRanking > 0.5) {
                    this.intRanking++;
                }
                else {
                    this.doubleRanking = 1;
                    this.emptyRanking--;
                }
            }

        }
    },
    template: `
        <span>
            <span v-if="ProductRanking < 1">
                <i v-for="n in emptyRanking" class="far fa-star"></i>
            </span>
            <span v-else>
                <i v-for="n in intRanking" class="fas fa-star"></i>
                <i v-for="n in doubleRanking" class="fas fa-star-half-alt"></i>
                <i v-for="n in emptyRanking" class="far fa-star"></i>
            </span>
        </span>
    `,
    mounted() {
        this.createUIRanking();
    }
});

export default ranking;