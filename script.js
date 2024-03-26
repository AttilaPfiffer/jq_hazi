$("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa1();
    esemenyKezeles1();
    esemenyKezeles2();
});

function elemekElerese1() {
    const ELEM = $('#f1')
    console.log("1. feladat: ", ELEM.html());
}

function elemekElerese2() {
    const ELEM = $('#ide')
    ELEM.eq(0).html("Jó reggelt!");
}
function elemekElerese3() {
    const ELEM = $('.ide')
    ELEM.eq(0).html("Jó reggelt!");
}
function elemekElerese4() {
    const ELEM = $(".lista")
    let txt = "<ul>";
    for (let index = 0; index < 5; index++) {
        
        txt += `<li> ${Math.floor(Math.random() * (30 - 10) + 10)} </li>`
}
    txt += "</ul>";

    return ELEM.eq(0).html(txt)

}
function elemekFormazasa1() {
    ELEM = $(".lista");
    ELEM.addClass("formazott");
}
function esemenyKezeles1() {
    $(".lista").eq(0).on("click", function() {
        const listaTart = $(this).html();
        $(".kattintasutan").html(listaTart);
    });

}

function esemenyKezeles2() {
    const ELEM = $(".feladat").eq(0);
    const txt = "<button>GOMB</button>";
    ELEM.html(txt)
    $(".feladat").eq(0).on("click", function() {
        ELEM2 = $("feladat")
        $("feladat").html = "<div><img src = 'kepek/gnome.png' alt = ''></div>";
    })


}
