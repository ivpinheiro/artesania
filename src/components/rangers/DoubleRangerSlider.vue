<template>
    <div class="range_container">
        <div class="sliders_control">
            <input id="fromSlider" type="range" value="100" min="0" max="10000" />
            <input id="toSlider" type="range" value="4000" min="0" max="10000" />
        </div>
        <div class="form_control">
            <div class="form_control_container">
                <div class="form_control_container__time">Min</div>
                <input class="form_control_container__time__input" type="number" id="fromInput" value="10" min="0"
                    max="100" />
            </div>
            <div class="form_control_container">
                <div class="form_control_container__time">Max</div>
                <input class="form_control_container__time__input" type="number" id="toInput" value="40" min="0"
                    max="100" />
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'DoubleRangerSlider',
    data: function () {
        return {
            fromSlider: Object,
            toSlider: Object,
            fromInput: Object,
            toInput: Object
        }
    },
    methods: {
        controlFromInput: function (fromSlider, fromInput, toInput, controlSlider) {
            const [from, to] = this.getParsed(fromInput, toInput);
            fillSlider(fromInput, toInput, '#C6C6C6', '#25daa5', controlSlider);
            if (from > to) {
                fromSlider.value = to;
                fromInput.value = to;
            } else {
                fromSlider.value = from;
            }
        },
        controlToInput: function (toSlider, fromInput, toInput, controlSlider) {
            const [from, to] = this.getParsed(fromInput, toInput);
            fillSlider(fromInput, toInput, '#C6C6C6', '#25daa5', controlSlider);
            setToggleAccessible(toInput);
            if (from <= to) {
                toSlider.value = to;
                toInput.value = to;
            } else {
                toInput.value = from;
            }
        },
        controlFromSlider: function (fromSlider, toSlider, fromInput) {
            const [from, to] = this.getParsed(fromSlider, toSlider);
            this.fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
            if (from > to) {
                fromSlider.value = to;
                fromInput.value = to;
            } else {
                fromInput.value = from;
            }
        },
        controlToSlider: function (fromSlider, toSlider, toInput) {
            const [from, to] = this.getParsed(fromSlider, toSlider);
            this.fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
            this.setToggleAccessible(toSlider);
            if (from <= to) {
                toSlider.value = to;
                toInput.value = to;
            } else {
                toInput.value = from;
                toSlider.value = from;
            }
        },
        getParsed: function (currentFrom, currentTo) {
            const from = parseInt(currentFrom.value, 10);
            const to = parseInt(currentTo.value, 10);
            return [from, to];
        },
        fillSlider: function (from, to, sliderColor, rangeColor, controlSlider) {
            const rangeDistance = to.max - to.min;
            const fromPosition = from.value - to.min;
            const toPosition = to.value - to.min;
            controlSlider.style.background = `linear-gradient(
            to right,
            ${sliderColor} 0%,
            ${sliderColor} ${(fromPosition) / (rangeDistance) * 100}%,
            ${rangeColor} ${((fromPosition) / (rangeDistance)) * 100}%,
            ${rangeColor} ${(toPosition) / (rangeDistance) * 100}%, 
            ${sliderColor} ${(toPosition) / (rangeDistance) * 100}%, 
            ${sliderColor} 100%)`;
        },
        setToggleAccessible: function (currentTarget) {
            const toSlider = document.querySelector('#toSlider');
            if (Number(currentTarget.value) <= 0) {
                toSlider.style.zIndex = 2;
            } else {
                toSlider.style.zIndex = 0;
            }
        }
    },
    mounted() {
        this.fromSlider = document.querySelector('#fromSlider')
        this.toSlider = document.querySelector('#toSlider')
        this.fromInput = document.querySelector('#fromInput')
        this.toInput = document.querySelector('#toInput')
        this.fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider)
        this.setToggleAccessible(toSlider)
        this.fromSlider.oninput = () => this.controlFromSlider(this.fromSlider, this.toSlider, this.fromInput)
        this.toSlider.oninput = () => this.controlToSlider(this.fromSlider, this.toSlider, this.toInput)
        this.fromInput.oninput = () => this.controlFromInput(this.fromSlider, this.fromInput, this.toInput, this.toSlider)
        this.toInput.oninput = () => this.controlToInput(this.toSlider, this.fromInput, this.toInput, this.toSlider)
    }
}
</script>

<style lang="scss" scoped>
.range_container {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 35% auto;
}

.sliders_control {
    position: relative;
    min-height: 50px;
}

.form_control {
    position: relative;
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    color: #635a5a;
}

input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    pointer-events: all;
    width: 24px;
    height: 24px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 1px #C6C6C6;
    cursor: pointer;
}

input[type=range]::-moz-range-thumb {
    -webkit-appearance: none;
    pointer-events: all;
    width: 24px;
    height: 24px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 1px #C6C6C6;
    cursor: pointer;
}

input[type=range]::-webkit-slider-thumb:hover {
    background: #f7f7f7;
}

input[type=range]::-webkit-slider-thumb:active {
    box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;
    -webkit-box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;
}

input[type="number"] {
    color: #8a8383;
    width: 50px;
    height: 30px;
    font-size: 20px;
    border: none;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    opacity: 1;
}

input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    height: 2px;
    width: 100%;
    position: absolute;
    background-color: #C6C6C6;
    pointer-events: none;
}

#fromSlider {
    height: 0;
    z-index: 1;
}

view rawdualRangeSlider.css hosted with ❤ by GitHub .high-contrast {
    color: white;
    background: black;
}

.high-contrast-text {
    color: white;
}
</style>