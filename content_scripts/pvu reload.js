
// let style = `<style>
// #chapkins {
//     position: absolute;
//     top: 100px;
//     left: 600px;
//     color:#9e8a57;
//     z-index: 999999;
// }
// </style>`;
// let chapkins = `<div id="chapkins" class="">
// <button onlclick="fwc()">find</button>
// <div id="show" style="" class="">

// </div>
// </div>`;

function fwc() {
    const n1 = setInterval(() => {
        // console.log("test");
        let n = 0;
        if ($("p.coming.tw-mt-6.tw-text-white").text() === "Farm Maintenance") {
            location.reload();
        }
        console.log($("button.farm-button.tw-bg-green-farm-100.tw-rounded-xl.tw-h-8.tw-m-auto.tw-bg-orange-use-tool.tw-text-orange-use-tool-text.activeuse"));
        // if ($("button.farm-button.tw-bg-green-farm-100.tw-rounded-xl.tw-h-8.tw-m-auto.tw-bg-orange-use-tool.tw-text-orange-use-tool-text.activeuse")){

        // }
    }, 250);
}

$.when(
    $.ready
    // $("html").append(style + chapkins)
    // $("body > div > div.main-nav-div > div.body.main-font > nav").append(li),
    // $("body > div > div.content.dark-bg-text > div > div > div:nth-child(3) > div > div.combat-enemy-container > div").prepend(btnsimulation)
    // $("body > div > div.main-nav-div > div.body.main-font > nav").append(btnsimulation),
    // $("body > div > div.main-nav-div > div.body.main-font > nav").append(btnLvCalculation),
    // $("body > div > div.main-nav-div > div.body.main-font > nav").append(donate),
    // console.log($("body > div > div.main-nav-div > div.body.main-font > nav"))
).done(() => {
    console.log("test");
    fwc();
});

