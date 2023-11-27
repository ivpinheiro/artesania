import type { RouteLocationNormalizedLoaded } from 'vue-router'

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
                    const htmlElement = element as HTMLElement;
                    const currentFontSize = window.getComputedStyle(htmlElement).fontSize;
                    if (currentFontSize.endsWith('px')) {
                        const currentSizeNumeric = parseFloat(currentFontSize);
                        if (!isNaN(currentSizeNumeric)) {
                            // Increase font size by 2 pixels and apply it
                            htmlElement.style.fontSize = `${currentSizeNumeric + 2}px`;
                        }
                    }
                });
            })

            decreaseFontButton.addEventListener("click", function () {
                const elementsWithTextClass = document.querySelectorAll(
                    "a, p, h1, h2, h3, h4, h5, h6, span, .badge, .buttonPrimary, .btn"
                )
                elementsWithTextClass.forEach(function (element) {
                    const htmlElement = element as HTMLElement;
                    const currentFontSize = window.getComputedStyle(htmlElement).fontSize;
                    if (currentFontSize.endsWith('px')) {
                        const currentSizeNumeric = parseFloat(currentFontSize);
                        if (!isNaN(currentSizeNumeric)) {
                            // Increase font size by 2 pixels and apply it
                            htmlElement.style.fontSize = `${currentSizeNumeric - 2}px`;
                        }
                    }
                });
            })
        }
    }
}

class PurchaseQuantity{
    static PurchaseQuantity(){
        const increaseButton = document.getElementById("increase-button")
        const decreaseButton = document.getElementById("decrease-button")
        if (increaseButton && decreaseButton) {
            let counter = 0;      
            const counterSpan = document.querySelector(".qtdCart span");
            const updateCounter = () => {
                if (counterSpan) {
                    counterSpan.textContent = counter.toString();
                }
            };
            increaseButton.addEventListener("click", () => {
                counter++;
                updateCounter();
            }); 
            decreaseButton.addEventListener("click", () => {
                if (counter > 0) {
                    counter--;
                updateCounter();
                }
            });
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

class HiddenElementsByPath {
    static hiddenElements(router: RouteLocationNormalizedLoaded, paths: string[]): boolean {
        return paths ? !paths.includes(router.path) : false;
    }
}

export const GlobalUtils = {
    FontSizeController,
    PurchaseQuantity,
    HighContrastToggle,
    HiddenElementsByPath
}
