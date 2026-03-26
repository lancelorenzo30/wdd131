const temp = 32;
const windSpeed = 5;

window.onload = () => {
    const wcElement = document.querySelector("#windChill");

    if (temp <= 10 && windSpeed > 4.8) {
        const result = calculateWindChill(temp, windSpeed);
        wcElement.textContent = `${result} ℃`;
    }
    else {
        wcElement.textContent = " N/A";
    }
};

function calculateWindChill(t, v) {
    return (13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 16))).toFixed(1);
}