var cart_footer = Vue.component('cart-footer', {
    template: `
        <div>
            <div class="footer">
                <h1>Contactanos</h1>
                <div class="social-container">
                    <div class="icon-container">
                        <a href="#" target="_blank"><i class="fas fa-envelope"></i></a>
                    </div>
                    <div class="icon-container">
                        <a href="https://www.instagram.com/busgaragevw/" target="_blank"><i class="fab fa-instagram"></i></a>
                    </div>
                    <div class="icon-container">
                        <a href="https://www.facebook.com/BUSGARAGEVW/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    </div>
                    <div class="icon-container">
                        <a href="https://www.youtube.com/channel/UCEnJtU5GXlKKeD1ax_cIBIA" target="_blank"><i class="fab fa-youtube"></i></a>
                    </div>
                    <div class="icon-container">
                        <a href="#" target="_blank"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
                <hr />
                <h4><router-link class="" to="/privacy-notice">Aviso de privacidad</router-link></h4>
            </div>
        </div>
    `
});

export default cart_footer;