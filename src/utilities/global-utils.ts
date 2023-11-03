class FontSizeController {
    static fontSizeController() {
        const increaseFontButton = document.getElementById("increase-font-button")
        const decreaseFontButton = document.getElementById("decrease-font-button")
        if (increaseFontButton !== null && decreaseFontButton !== null) {
            increaseFontButton.addEventListener("click", function () {
                const elementsWithTextClass = document.querySelectorAll(
                    "a, p, h1, h2, h3, h4, h5, h6, span, .badge, .buttonPrimary, .btn"
                )
                elementsWithTextClass.forEach(function (element) {
                    const currentFontSize = window.getComputedStyle(element).fontSize
                    const currentSizeNumeric = parseFloat(currentFontSize)
                    const newSize = currentSizeNumeric + 2
                    element.style.fontSize = newSize + "px"
                })
            })

            decreaseFontButton.addEventListener("click", function () {
                const elementsWithTextClass = document.querySelectorAll(
                    "a, p, h1, h2, h3, h4, h5, h6, span, .badge, .buttonPrimary, .btn"
                )
                elementsWithTextClass.forEach(function (element) {
                    const currentFontSize = window.getComputedStyle(element).fontSize
                    const currentSizeNumeric = parseFloat(currentFontSize)
                    const newSize = currentSizeNumeric - 2
                    element.style.fontSize = newSize + "px"
                })
            })
        }
    }
}

class HighContrastToggle {
    static highContrast() {
        // Get the toggle button
        const toggleButton = document.getElementById("toggle-high-contrast")
        if (toggleButton !== null) {
            // Add a click event listener to the toggle button
            toggleButton.addEventListener("click", function () {
                // Get all elements in the document
                const elements = document.getElementsByClassName("contrast")
                const textElements = document.querySelectorAll(
                    "a, p, h1, h2, h3, h4, h5, h6, .fa, span, .badge, .buttonPrimary, .btn")

                // Iterate through all elements using forEach
                Array.from(elements).forEach(function (body) {
                    // Toggle the "high-contrast" class on each element
                    body.classList.toggle("high-contrast")
                })
                Array.from(textElements).forEach(function (text) {
                    text.classList.toggle("high-contrast-text")
                })
            })
        }
    }
}

export const GlobalUtils = {
    FontSizeController,
    HighContrastToggle
};