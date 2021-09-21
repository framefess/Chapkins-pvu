
// Initialize
document.getElementById("risk").value = 20;
let irisk = document.getElementById("risk");

irisk.oninput = function () {
    if (this.value > 100) {
        this.value = 100;
    }
    if (this.value < 0) {
        this.value = 0;
    }
}

chrome.storage.local.get(["risk"], (result) => {
    console.log(result);
    if (result == undefined) {
        let risk = { "risk": irisk.value };
        chrome.storage.local.set(risk, function () {
            console.log('Value is set to ', risk);
        });
        document.getElementById("risk").value = 20;
        // chrome.storage.sync.set(risk);
    } else {
        console.log(result);
        // alert(irisk.value);
        // console.log('Value is get to ', risk);
        document.getElementById("risk").value = result.risk;
    }
});


irisk.addEventListener('change', async evt => {
    evt.preventDefault(); // prevents `submit` event from reloading the popup
    let risk = { "risk": irisk.value };
    chrome.storage.local.set(risk, function () {
        console.log('Value is set to ', risk);
    });
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const text = irisk.value;
    await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (id, text) => {
            // document.getElementById(id).textContent = text;
            // alert(text);
            risk = text / 100;
            console.log(risk);
        },
        args: ['demo', text],
    });
});


