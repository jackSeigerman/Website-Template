document.addEventListener("DOMContentLoaded", function() {
    const baseText = "static text ";
    const skills = ["typing", "text", "you", "can", "change", "me", "in", "script.js"];
    
    let currentIndex = 0;
    const subtextElement = document.getElementById("dynamic-subtext");
    let typingSpeed = 100;
    let erasingSpeed = 50;
    let delayBetweenSkills = 2000;
    let delayAfterErase = 500;
    
    function typeText(text, index) {
        if (index < text.length) {
            subtextElement.textContent = baseText + text.substring(0, index + 1);
            setTimeout(() => typeText(text, index + 1), typingSpeed);
        } else {
            setTimeout(eraseText, delayBetweenSkills);
        }
    }
    
    function eraseText() {
        let currentText = subtextElement.textContent;
        if (currentText.length > baseText.length) {
            subtextElement.textContent = currentText.slice(0, -1);
            setTimeout(eraseText, erasingSpeed);
        } else {
            currentIndex = (currentIndex + 1) % skills.length;
            setTimeout(() => typeText(skills[currentIndex], 0), delayAfterErase);
        }
    }
    
    setTimeout(() => typeText(skills[currentIndex], 0), delayAfterErase);
});
