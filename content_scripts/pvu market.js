
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

function fwc() {
    const n1 = setInterval(() => {
        // console.log("test");
        let n = 0;
        let urlpath = $(location).attr('href').split('/');
        // console.log("🚀 ~ file: pvu market.js ~ line 23 ~ n1 ~ urlpath", urlpath)
        if (urlpath[4] == "marketplace" || urlpath[4] == "") {


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
        }else if(urlpath[4] == "farm"){

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
    }, 500);
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

