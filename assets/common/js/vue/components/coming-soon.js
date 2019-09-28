var coming_soon = Vue.component('coming-soon', {
    methods: {
        initLanding: function () {
            document.getElementsByClassName('footer')[0].className += ' footerHiden';
        }
    },
    template: `
        <div>
            <h1 class="slider-header"><small>PROXIMAMENTE</small> <img src="./assets/common/img/logo.png" /> <small>TIENDA EN LINEA</small></h1>
            <!-- You can add more ".slideshow-image" elements, but remember to update the "$items" variable on SCSS -->
            <div class="slideshow">
                <div class="slideshow-image" style="background-image: url('./assets/common/img/vw1.jpg')"></div>
                <div class="slideshow-image" style="background-image: url('./assets/common/img/vw2.jpg')"></div>
                <div class="slideshow-image" style="background-image: url('./assets/common/img/vw3.jpg')"></div>
                <div class="slideshow-image" style="background-image: url('./assets/common/img/vw4.jpg')"></div>
                <div class="slideshow-image" style="background-image: url('./assets/common/img/vw5.jpg')"></div>
                <div class="slideshow-image" style="background-image: url('./assets/common/img/vw6.jpg')"></div>
                <div class="slideshow-image" style="background-image: url('./assets/common/img/vw7.jpg')"></div>
                <div class="slideshow-image" style="background-image: url('./assets/common/img/vw8.jpg')"></div>
                <div class="slideshow-image" style="background-image: url('./assets/common/img/vw9.jpg')"></div>
                <div class="slideshow-image" style="background-image: url('./assets/common/img/vw10.jpg')"></div>
            </div>
        </div>
    `,
    mounted() {
        this.initLanding();
    },
    beforeDestroy() {
        var footer = document.getElementsByClassName('footer')[0];
        footer.className = footer.className.replace(/\bfooterHiden\b/g, "");
    }
});

export default coming_soon;