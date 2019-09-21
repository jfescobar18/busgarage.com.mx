var slider = Vue.component('slider', {
    template: `
        <div class="slider-container">
            <div data-am-gallery>
                <input type="radio" name="gallery" id="img-1" checked />
                <input type="radio" name="gallery" id="img-2" />
                <input type="radio" name="gallery" id="img-3" />
                <div class="images">
                    <div class="image" style="background-image: url(./assets/common/img/vw1.jpg);"></div>
                    <div class="image" style="background-image: url(./assets/common/img/vw2.jpg);"></div>
                    <div class="image" style="background-image: url(./assets/common/img/vw3.jpg);"></div>
                </div>
                <div class="navigation">
                    <label class="dot" for="img-1"></label>
                    <label class="dot" for="img-2"></label>
                    <label class="dot" for="img-3"></label>
                </div>
            </div>
        </div>
    `
});

export default slider;