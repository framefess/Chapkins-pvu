const season = { "spring": ["hurricanes", "volcano", "tsunami", "earthquake", "rainy", "sunny", "cloudy", "ironrain", "locustsswarm", "ratsswarm", "malaria"], "summer": ["heatwave", "hurricanes", "thunderstorm", "volcano", "tsunami", "earthquake", "tornado", "rainy", "sunny", "cloudy", "locustsswarm", "ratsswarm", "malaria", "coronalmassejection", "solarflares", "solarmaxima", "protonstorm"], "autumn": ["hurricanes", "thunderstorm", "volcano", "tsunami", "earthquake", "tornado", "flood", "winterstorm", "rainy", "sunny", "cloudy", "windy", "ironrain", "moonlight", "locustsswarm", "ratsswarm", "malaria"], "winter": ["volcano", "earthquake", "snowy", "coldwave", "winterstorm", "windy", "coronalmassejection", "solarflares", "solarmaxima", "magneticreconnection"] };

const weather = { "cloudy": { "metal": 0, "dark": 0, "light": -0.1, "water": 0, "ice": 0, "wind": -0.5, "electro": 0, "fire": 0, "parasite": 0 }, "ironrain": { "metal": 1.2, "dark": 0, "light": 0, "water": 0.4, "ice": 0, "wind": 0, "electro": 0, "fire": 0, "parasite": 0 }, "coldwave": { "metal": 0, "dark": 0, "light": 0, "water": 0, "ice": 1.2, "wind": 0, "electro": 0, "fire": -0.6, "parasite": 0 }, "locustsswarm": { "metal": 0, "dark": 0, "light": 0, "water": 0, "ice": 0, "wind": 0, "electro": 0, "fire": 0, "parasite": 1 }, "coronalmassejection": { "metal": 0, "dark": 0, "light": 1, "water": 0, "ice": 0, "wind": 0, "electro": 0, "fire": 0.4, "parasite": 0 }, "magneticreconnection": { "metal": 0.5, "dark": 0, "light": 0, "water": 0, "ice": 0, "wind": 0, "electro": 0.5, "fire": 0, "parasite": 0 }, "earthquake": { "metal": 1, "dark": 0, "light": 0, "water": 0, "ice": 0, "wind": 0.5, "electro": 0, "fire": 0, "parasite": 0 }, "malaria": { "metal": 0, "dark": 0, "light": 0, "water": 0, "ice": 0, "wind": 0, "electro": 0, "fire": 0, "parasite": 1 }, "flood": { "metal": -1, "dark": 0, "light": 0, "water": 1, "ice": 0, "wind": 0, "electro": 0, "fire": 0, "parasite": 0 }, "moonlight": { "metal": 0, "dark": 4, "light": 0, "water": 0, "ice": 0, "wind": 0, "electro": 0, "fire": 0, "parasite": 0 }, "heatwave": { "metal": 0, "dark": 0.1, "light": 0.2, "water": -0.3, "ice": -0.6, "wind": 0, "electro": 0, "fire": 1, "parasite": 0 }, "protonstorm": { "metal": 0, "dark": 0, "light": 2, "water": 0, "ice": 0, "wind": 0, "electro": 0, "fire": 0, "parasite": 0 }, "hurricanes": { "metal": 0, "dark": 0.4, "light": -0.2, "water": 0.5, "ice": 0.4, "wind": 0.5, "electro": 0.5, "fire": -0.4, "parasite": 0 }, "rainy": { "metal": -0.3, "dark": 0, "light": 0, "water": 1, "ice": 0, "wind": 0, "electro": 0, "fire": -0.3, "parasite": 0 }, "ratsswarm": { "metal": 0, "dark": 0, "light": 0, "water": 0, "ice": 0, "wind": 0, "electro": 0, "fire": 0, "parasite": 1 }, "tornado": { "metal": 0, "dark": 0.5, "light": -0.4, "water": 0.2, "ice": 0, "wind": 1, "electro": 0.5, "fire": 0, "parasite": 0 }, "snowy": { "metal": 0, "dark": 0, "light": 0, "water": 0.6, "ice": 1, "wind": 0, "electro": 0, "fire": -0.4, "parasite": 0 }, "tsunami": { "metal": -0.6, "dark": 0.2, "light": -0.2, "water": 0.6, "ice": 0.3, "wind": 0, "electro": 0, "fire": -0.4, "parasite": 0 }, "solarflares": { "metal": 0, "dark": 0, "light": 0.8, "water": 0, "ice": 0, "wind": 0, "electro": 0, "fire": 0.8, "parasite": 0 }, "volcano": { "metal": 0.4, "dark": 0, "light": 0, "water": -0.2, "ice": -0.4, "wind": 0, "electro": 0, "fire": 1, "parasite": 0 }, "solarmaxima": { "metal": 0, "dark": 0, "light": 1, "water": 0, "ice": 0, "wind": 0, "electro": 0, "fire": 0.4, "parasite": 0 }, "windy": { "metal": 0, "dark": 0, "light": 0.2, "water": 0, "ice": 0, "wind": 0.5, "electro": 0, "fire": 0, "parasite": 0 }, "sunny": { "metal": 0, "dark": 0, "light": 0, "water": -0.3, "ice": 0, "wind": 0, "electro": 0, "fire": 0.6, "parasite": 0 }, "winterstorm": { "metal": 0, "dark": 0, "light": -0.2, "water": 0, "ice": 0.6, "wind": 0.1, "electro": 0.5, "fire": -0.4, "parasite": 0 }, "thunderstorm": { "metal": -0.2, "dark": 1, "light": -0.2, "water": 0.1, "ice": 0, "wind": 0, "electro": 1, "fire": 0, "parasite": 0 } };

let style = `<style>
#chapkins {
    position: absolute;
    top: 100px;
    left: 600px;
    color:#9e8a57;
    z-index: 999999;
}
</style>`;
let chapkins = `<div id="chapkins" class="">
<button onlclick="fwc()">find</button>
<div id="show" style="" class="">

</div>
</div>`;

let risk = 0.2;
let c = 0;

let weatheryesterday;
chrome.storage.local.get(["risk"], (result) => {
    // console.log(result);
    if (result != undefined) {
        risk = result.risk / 100;
    }
});
// fetch(url)
//     .then((response) => response.json()) //assuming file contains json
//     .then((json) => console.log("🚀 ~ file: pvu market.js ~ line 67 ~ n1 ~ json", json));


async function greenhouse(seasontomorrow, weathertoday) {
    let plant = {
        "metal": { pos: 0, neg: 0, neu: 0, total: function () { return this.pos + this.neg + this.neu; }, posp: 0, negp: 0, neup: 0, greenhouse: false },
        "dark": { pos: 0, neg: 0, neu: 0, total: function () { return this.pos + this.neg + this.neu; }, posp: 0, negp: 0, neup: 0, greenhouse: false },
        "light": { pos: 0, neg: 0, neu: 0, total: function () { return this.pos + this.neg + this.neu; }, posp: 0, negp: 0, neup: 0, greenhouse: false },
        "water": { pos: 0, neg: 0, neu: 0, total: function () { return this.pos + this.neg + this.neu; }, posp: 0, negp: 0, neup: 0, greenhouse: false },
        "ice": { pos: 0, neg: 0, neu: 0, total: function () { return this.pos + this.neg + this.neu; }, posp: 0, negp: 0, neup: 0, greenhouse: false },
        "wind": { pos: 0, neg: 0, neu: 0, total: function () { return this.pos + this.neg + this.neu; }, posp: 0, negp: 0, neup: 0, greenhouse: false },
        "electro": { pos: 0, neg: 0, neu: 0, total: function () { return this.pos + this.neg + this.neu; }, posp: 0, negp: 0, neup: 0, greenhouse: false },
        "fire": { pos: 0, neg: 0, neu: 0, total: function () { return this.pos + this.neg + this.neu; }, posp: 0, negp: 0, neup: 0, greenhouse: false },
        "parasite": { pos: 0, neg: 0, neu: 0, total: function () { return this.pos + this.neg + this.neu; }, posp: 0, negp: 0, neup: 0, greenhouse: false }
    }

    // seasontomorrow = 'winter';
    // weathertoday = "coldwave";

    let weathertomorrow;
    let d = new Date();
    let dayofweek = d.getDay();
    if (dayofweek == 6) {
        if (seasontomorrow == "winter") {
            seasontomorrow = "spring"
        } else if (seasontomorrow == "spring") {
            seasontomorrow = "summer"
        } else if (seasontomorrow == "summer") {
            seasontomorrow = "autumn"
        } else if (seasontomorrow == "autumn") {
            seasontomorrow = "winter"
        }
    }
    if (c == 0) {
        // const useason = chrome.runtime.getURL('storage/season.json');
        // season = await (await fetch(useason)).json();
        // console.log("🚀 ~ file: pvu market.js ~ line 26 ~ fwc ~ season", season)
        // const uweather = chrome.runtime.getURL('storage/weather.json');
        // weather = await (await fetch(uweather)).json();
        // console.log("🚀 ~ file: pvu market.js ~ line 29 ~ fwc ~ weather", weather)
        c++;

        // chrome.storage.local.clear(function () {
        //     var error = chrome.runtime.lastError;
        //     if (error) {
        //         console.error(error);
        //     }
        //     // do something more
        // });
        let storeweather = { weather: { yesterday: "", today: weathertoday } };
        chrome.storage.local.get(['weather'], async function (result) {
            // console.log('Value currently is ', result.weather);
            if (result.weather == undefined) {
                chrome.storage.local.set(storeweather, function () {
                    console.log('UValue is set to ', storeweather);
                });
            } else if (result.weather.today != weathertoday) {
                storeweather.weather.yesterday = result.weather.today;
                storeweather.weather.today = weathertoday;
                chrome.storage.local.set(storeweather, function () {
                    weatheryesterday = storeweather.weather.yesterday;
                    console.log('Value is set to ', storeweather);
                });
            } else {
                weatheryesterday = result.weather.yesterday;

            }
        });

    }


    // chrome.storage.local.get(['weather'], function (result) {
    //     console.log('weather currently is ', result.weather);
    // });
    if (typeof weatheryesterday != 'undefined') {
        // console.log(1, weatheryesterday, weathertoday);
        season[seasontomorrow].forEach(wweather => {
            if (wweather != weatheryesterday && wweather != weathertoday) {
                for (const key in weather[wweather]) {
                    if (Object.hasOwnProperty.call(weather[wweather], key)) {
                        const value = weather[wweather][key];
                        if (value == 0) {
                            plant[key]["neu"]++;
                        } else if (value > 0) {
                            plant[key]["pos"]++;
                        } else if (value < 0) {
                            plant[key]["neg"]++;
                        }
                        plant[key].posp = plant[key].pos / plant[key].total();
                        plant[key].negp = plant[key].neg / plant[key].total();
                        plant[key].neup = plant[key].neu / plant[key].total();
                        if ((plant[key].negp >= plant[key].posp || plant[key].negp > risk) && plant[key].negp != 0) {
                            plant[key].greenhouse = true;
                        } else {
                            plant[key].greenhouse = false;
                        }
                    }
                }
            }
        });
        return plant;
    }


}

async function fwc() {
    const n1 = setInterval(async () => {
        // console.log("risk", risk);
        // console.log("test");
        let n = 0;
        let urlpath = $(location).attr('href').split('/');
        // console.log("🚀 ~ file: pvu market.js ~ line 23 ~ n1 ~ urlpath", urlpath)
        if (urlpath[4] == "marketplace" || urlpath[4] == "") {
            c = 0;
            $($.find("div.le.tw-text-center")).each((i, item) => {
                // console.log(i, item);
                let le0 = "";
                let le1 = "";
                if ($(item).text().split("/").length > 1) {
                    le0 = $(item).text().split("/")[0].replace(/\D/g, "");
                    // console.log("🚀 ~ file: cryptoblades.js ~ line 24 ~ $ ~ le0", le0)
                    le1 = $(item).text().split("/")[1].replace(/\D/g, "");
                    // console.log("🚀 ~ file: cryptoblades.js ~ line 26 ~ $ ~ le1", le1)
                    // $(item).text(Math.floor(le0 / le1));
                    $(`#cle${i}`).remove();
                    let total = le0 / le1;
                    let pb = parseInt($($.find("p.tw-ml-2.text__green")[i]).text()) / (total * 24 * 0.95 / 150);
                    // console.log($($.find("p.tw-ml-2.text__green")[i]).text());
                    $(item).after(`<div id="cle${i}" style="color:white; margin-top: 10px;">
                LE: <span style="color:#DFFF00;">${total.toFixed(2)}</span>/Hr, <br>
                LE: <span style="color:#DFFF00;">${(total * 24).toFixed(2)}</span>/Day<br>
                PVU: <span style="color:#DFFF00;">${(total * 24 * 0.95 / 150).toFixed(2)}</span>/Day<br>
                Payback: <span style="color:#DFFF00;">${(pb).toFixed(2)}</span> Days </div>`);
                }
                // console.log($(item).prev("div"));
                // if (le0 > 0 && le1 > 0) {
                //     // $(item).text(Math.floor(le0 / le1));
                //     // $(item).after( `<div>${Math.floor(le0 / le1)}</div>` );
                // }
                n++;
            })
        } else if (urlpath[4] == "farm" && urlpath[5] == "") {
            let seasontoday = $($.find("span.season-text")[0]).text();
            // console.log("🚀 ~ file: pvu market.js ~ line 112 ~ n1 ~ season", season)
            let weathertoday = $($.find("div.weather-heat > div > p")[0]).text().replace(' ', "").replace(':', "").toLowerCase();
            // console.log("🚀 ~ file: pvu market.js ~ line 112 ~ n1 ~ weather", weather)
            if (seasontoday && weathertoday) {
                let plant = await greenhouse(seasontoday, weathertoday);


                let pbox = $.find("div.grid-item");
                $.each(pbox, function (key, value) {
                    // console.log(key, ": ", value);
                    let infotype = $(value).find("div.info > p").eq(0).text().replace(/[^a-zA-Z]+/g, '').toLowerCase();

                    if (infotype != 'undefinedundefined' && typeof infotype != 'undefined' && typeof plant != 'undefined') {
                        console.log("🚀 ~ file: pvu market.js ~ line 110 ~ n1 ~ plant", plant);
                        // console.log("🚀 ~ file: pvu market.js ~ line 188 ~ infotype", infotype)
                        if (plant[infotype].greenhouse == true) {
                            $(value).find("div.farm-info").css("background-color", "green");
                        }
                    }

                });
                // let pbox = $.find("div.info")
                // console.log("🚀 ~ file: pvu market.js ~ line 183 ~ n1 ~ pbox", pbox)
                // for (let index = 0; index < array.length; index++) {
                //     const element = array[index];

                // }
            }
            // let plant = await greenhouse(seasontoday, weathertoday);
            // console.log("🚀 ~ file: pvu market.js ~ line 110 ~ n1 ~ plant", plant)
        } else {
            c = 0;
        }

        // console.log("🚀 ~ file: cryptoblades.js ~ line 22 ~ n1 ~ n", n)
        // let url = $(location).attr('href').split("/")[5];
        // fetch(`https://backend-farm.plantvsundead.com/farms/other/${url}?limit=100&offset=0`, {
        //     "headers": {

        //         "accept": "application/json, text/plain, */*",
        //         "accept-language": "th,en;q=0.9,en-US;q=0.8",
        //         "authorization": "Bearer Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNBZGRyZXNzIjoiMHg5MWNhNjlmMWMyYmIzYTBiNTJmNmEzOWI1ZGI1NThmOTM4NjVmZThhIiwibG9naW5UaW1lIjoxNjI3OTc4MjA2MzQ3LCJjcmVhdGVEYXRlIjoiMjAyMS0wNy0xOCAwODoyNDowMCIsImlhdCI6MTYyNzk3ODIwNn0.cNA4scKHf6BS-XSPcOZdgG208xbxgCHbyYTix9AJVEw",
        //         "if-modified-since": "Tue, 03 Aug 2021 09:05:58 GMT",
        //         "if-none-match": "W/\"2700-slYl4NxWLfVd+yBywonkH1J6Gyo\"",
        //         "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
        //         "sec-ch-ua-mobile": "?0",
        //         "sec-fetch-dest": "empty",
        //         "sec-fetch-mode": "cors",
        //         "sec-fetch-site": "same-site"
        //     },
        //     "referrer": "https://marketplace.plantvsundead.com/",
        //     "referrerPolicy": "strict-origin-when-cross-origin"
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log('Success:', data);
        //     });
    }, 1000);
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
).done(async () => {
    console.log("running");
    fwc();
});

