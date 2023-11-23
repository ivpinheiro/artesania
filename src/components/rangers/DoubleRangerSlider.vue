<template>
    <div class="range_container">
        <div class="sliders_control">
            <input id="fromSlider" type="range" :value="this.startPriceValue" :min="this.minPriceValue"
                :max="this.maxPriceValue" />
            <input id="toSlider" type="range" :value="this.endPriceValue" :min="this.minPriceValue"
                :max="this.maxPriceValue" />
        </div>
        <div class="form_control">
            <div class="form_control_container">
                <p>R$</p>
                <input class="form-control-container-input no-spinners" type="number" id="fromInput"
                    :value="this.startPriceValue" :min="this.minPriceValue" :max="this.maxPriceValue" disabled="true" />
            </div>
            <div class="form_control_container">
                <p>R$</p>
                <input class="form-control-container-input no-spinners" type="number" id="toInput"
                    :value="this.endPriceValue" :min="this.minPriceValue" :max="this.maxPriceValue" disabled="true" />
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
            toInput: Object,
            elementPosition: 0,
            minPriceValue: 0,
            maxPriceValue: 100000,
            startPriceValue: 100,
            endPriceValue: 70000,
            // fieldNumberStart: 100,
            // fieldNumberEnd: 10000,
        }
    },
    methods: {
        controlFromInput: function (fromSlider, fromInput, toInput, controlSlider) {
            const [from, to] = this.getParsed(fromInput, toInput)
            fillSlider(fromInput, toInput, '#C6C6C6', '#25daa5', controlSlider)
            if (from > to) {
                fromSlider.value = to
                fromInput.value = to
            } else {
                fromSlider.value = from
            }
        },
        controlToInput: function (toSlider, fromInput, toInput, controlSlider) {
            const [from, to] = this.getParsed(fromInput, toInput)
            fillSlider(fromInput, toInput, '#C6C6C6', '#25daa5', controlSlider)
            setToggleAccessible(toInput)
            if (from <= to) {
                toSlider.value = to
                toInput.value = to
            } else {
                toInput.value = from
            }
        },
        controlFromSlider: function (fromSlider, toSlider, fromInput) {
            const [from, to] = this.getParsed(fromSlider, toSlider)
            this.fillSlider(fromSlider, toSlider, '#F0F0F0', '#9d3207f6', toSlider)
            if (from > to) {
                fromSlider.value = to
                fromInput.value = to
            } else {
                fromInput.value = from
            }
        },
        controlToSlider: function (fromSlider, toSlider, toInput) {
            const [from, to] = this.getParsed(fromSlider, toSlider)
            this.fillSlider(fromSlider, toSlider, '#F0F0F0', '#9d3207f6', toSlider)
            this.setToggleAccessible(toSlider)
            if (from <= to) {
                toSlider.value = to
                toInput.value = to
            } else {
                toInput.value = from
                toSlider.value = from
            }
        },
        getParsed: function (currentFrom, currentTo) {
            const from = parseInt(currentFrom.value, 10)
            const to = parseInt(currentTo.value, 10)
            return [from, to]
        },
        fillSlider: function (from, to, sliderColor, rangeColor, controlSlider) {
            const rangeDistance = to.max - to.min
            const fromPosition = from.value - to.min
            const toPosition = to.value - to.min
            controlSlider.style.background = `linear-gradient(
            to right,
            ${sliderColor} 0%,
            ${sliderColor} ${(fromPosition) / (rangeDistance) * 100}%,
            ${rangeColor} ${((fromPosition) / (rangeDistance)) * 100}%,
            ${rangeColor} ${(toPosition) / (rangeDistance) * 100}%, 
            ${sliderColor} ${(toPosition) / (rangeDistance) * 100}%, 
            ${sliderColor} 100%)`
        },
        setToggleAccessible: function (currentTarget) {
            const toSlider = document.querySelector('#toSlider')
            if (Number(currentTarget.value) <= 0) {
                toSlider.style.zIndex = 2
            } else {
                toSlider.style.zIndex = 0
            }
        }
    },
    mounted() {
        this.fromSlider = document.querySelector('#fromSlider')
        this.toSlider = document.querySelector('#toSlider')
        this.fromInput = document.querySelector('#fromInput')
        this.toInput = document.querySelector('#toInput')
        // this.fieldNumberStart = document.getElementById("#fieldNumberStart");
        // this.fieldNumberEnd = document.getElementById("#fieldNumberEnd");
        this.fillSlider(fromSlider, toSlider, '#F0F0F0', '#9d3207f6', toSlider)
        this.setToggleAccessible(toSlider)
        this.fromSlider.oninput = () => this.controlFromSlider(this.fromSlider, this.toSlider, this.fromInput)
        this.toSlider.oninput = () => this.controlToSlider(this.fromSlider, this.toSlider, this.toInput)
        this.fromInput.oninput = () => this.controlFromInput(this.fromSlider, this.fromInput, this.toInput, this.toSlider)
        this.toInput.oninput = () => this.controlToInput(this.toSlider, this.fromInput, this.toInput, this.toSlider)
    }
}
</script>

<style lang="scss" scoped>
#toSlider {
    height: 10px;
    border-radius: 5px;
}

#fromSlider {
    height: 10px;
    z-index: 10;
}

.range_container {
    display: flex;
    flex-direction: column;
    margin: 15px;
}

.sliders_control {
    position: relative;
    min-height: 30px;
}

.form_control {
    display: flex;
    justify-content: space-between;
}

.form_control_container {
    display: flex;
    justify-content: center;
    font-size: 20px;
    color: black;
}



.no-spinners::-webkit-inner-spin-button,
.no-spinners::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.no-spinners[type=number] {
    -moz-appearance: textfield;
}

//Circulo do range
input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    pointer-events: all;
    width: 24px;
    height: 24px;
    background-color: $sliders;
    border-radius: 50%;
    box-shadow: none;
    cursor: pointer;
}

input[type=range]::-webkit-slider-thumb:active {
    box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;
    -webkit-box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;
}

input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    position: absolute;
    background: transparent;
    pointer-events: none;
    outline: none;
}

input[type="number"] {
    -webkit-appearance: textfield;
    appearance: textfield;
    color: black;
    min-width: 50px;
    max-width: 65px;
    height: 30px;
    border: none;
    background: #fff;
}

.high-contrast {
    color: white;
    background: black;
}

.high-contrast-text {
    color: white;
}
</style>