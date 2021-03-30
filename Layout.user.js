// ==UserScript==
// @name         Layout
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *.freewar.de/freewar/internal/main.php*
// @match        *.freewar.de/freewar/internal/fight.php*
// @match        *.freewar.de/freewar/internal/areafight.php*
// @grant        none
// ==/UserScript==

(function() {

    'use strict';
    //localStorage.setItem("autokill","true");
    //localStorage.setItem("autopickup","true");
    //localStorage.setItem("fastgzk","true");
    //localStorage.setItem("auftragshelper","true");
    //localStorage.setItem("gewebehelper","true");
    //localStorage.setItem("autochase","true");

    //Werbung entfernen
    var werbung = parent.bannerFrame.document.getElementsByTagName("table")[0];
    if (werbung)
    {
        werbung.style.display="none";
        parent.bannerFrame.document.getElementsByClassName("framebannerbg")[0].style.border="none";
    }
    //Veränderung bannerFrame
    parent.bannerFrame.document.body.style.background = "#000000 url('https://freewar.zocker.eu/grafik.php') no-repeat center";


    console.log("Layout wird verändert!");
    var autokillAn = localStorage.getItem("autokill");
    if (!autokillAn){
        console.log("Autokill wird standardmäßig true gesetzt!");
        autokillAn = "true";
        localStorage.setItem("autokill", "true");
    }
    var autopickupAn = localStorage.getItem("autopickup");
    if (!autopickupAn){
        console.log("Autopickup wird standardmäßig true gesetzt!");
        autopickupAn = "true";
        localStorage.setItem("autopickup", "true");
    }
    var fastgzkAn = localStorage.getItem("fastgzk");
    if (!fastgzkAn){
        console.log("Fastgzk wird standardmäßig true gesetzt!");
        fastgzkAn = "true";
        localStorage.setItem("fastgzk", "true");
    }
    var fastportalAn = localStorage.getItem("fastportal");
    if (!fastportalAn){
        console.log("Fastportal wird standardmäßig true gesetzt!");
        fastportalAn = "true";
        localStorage.setItem("fastportal", "true");
    }
    var autochaseAn = localStorage.getItem("autochase");
    if (!autochaseAn){
        console.log("Autochase wird standardmäßig false gesetzt!");
        autochaseAn = "false";
        localStorage.setItem("autochase", "false");
    }


    var neuesElement = document.createElement("input");
    neuesElement.type="checkbox";
    neuesElement.id="autokilltrigger";
    neuesElement.name="autokilltrigger";

    if (autokillAn == "true"){
        neuesElement.checked=true;
        appendautochase(neuesElement);
    }
    else if (autokillAn == "false"){
        neuesElement.checked=false;
    }



    var Zeilenumbruch = document.createElement("br");
    var Zeilenumbruch2 = document.createElement("br");


    var neuesElementpu = document.createElement("input");
    neuesElementpu.type="checkbox";
    neuesElementpu.id="autopickuptrigger";
    neuesElementpu.name="autopickuptrigger";

    if (autopickupAn == "true"){
        neuesElementpu.checked=true;
    }
    else if (autopickupAn == "false"){
        neuesElementpu.checked=false;
    }

    var neuesElementfastgzk = document.createElement("input");
    neuesElementfastgzk.type="checkbox";
    neuesElementfastgzk.id="fastgzktrigger";
    neuesElementfastgzk.name="fastgzktrigger";



    var neuesElementfastportal = document.createElement("input");
    neuesElementfastportal.type="checkbox";
    neuesElementfastportal.id="fastportaltrigger";
    neuesElementfastportal.name="fastportaltrigger";

    function appendfastportal(fastportaldiv){
        var Zeilenumbruch = document.createElement("br");
        fastportaldiv.appendChild(Zeilenumbruch);

        var portalbrondor = document.createElement("a");
        fastportaldiv.appendChild(portalbrondor);
        portalbrondor.href = "#";
        portalbrondor.style.color = "#999999";
        portalbrondor.onclick= function(){console.log("Fliege nach Brondor");useportal("brondor");};
        portalbrondor.text = "Brondor";

        var Zeilenumbruch2 = document.createElement("br");
        fastportaldiv.appendChild(Zeilenumbruch2);

        var portalfelseninsel = document.createElement("a");
        fastportaldiv.appendChild(portalfelseninsel);
        portalfelseninsel.href = "#";
        portalfelseninsel.style.whiteSpace ="pre";
        portalfelseninsel.style.color = "#4D4D4D";
        portalfelseninsel.onclick= function(){console.log("Fliege nach Felseninsel");useportal("felseninsel");};
        portalfelseninsel.text = "           Felseninsel";

        var Zeilenumbruch3 = document.createElement("br");
        fastportaldiv.appendChild(Zeilenumbruch3);

        var portaldorea = document.createElement("a");
        fastportaldiv.appendChild(portaldorea);
        portaldorea.href = "#";
        portaldorea.style.color = "#999999";
        portaldorea.onclick= function(){console.log("Fliege nach Dora");useportal("dorea");};
        portaldorea.text = "Dorea";

        var Zeilenumbruch4 = document.createElement("br");
        fastportaldiv.appendChild(Zeilenumbruch4);

        var portaldranar = document.createElement("a");
        fastportaldiv.appendChild(portaldranar);
        portaldranar.href = "#";
        portaldranar.style.whiteSpace ="pre";
        portaldranar.style.color = "#4D4D4D";
        portaldranar.onclick= function(){console.log("Fliege nach Dora");useportal("dranar");};
        portaldranar.text = "           Dranar";

        var Zeilenumbruch5 = document.createElement("br");
        fastportaldiv.appendChild(Zeilenumbruch5);

        var portalferdolien = document.createElement("a");
        fastportaldiv.appendChild(portalferdolien);
        portalferdolien.href = "#";
        portalferdolien.style.color = "#999999";
        portalferdolien.onclick= function(){console.log("Fliege nach Dora");useportal("ferdolien");};
        portalferdolien.text = "Ferdolien";

        var Zeilenumbruch6 = document.createElement("br");
        fastportaldiv.appendChild(Zeilenumbruch6);

        var portalkerdis = document.createElement("a");
        fastportaldiv.appendChild(portalkerdis);
        portalkerdis.href = "#";
        portalkerdis.style.whiteSpace ="pre";
        portalkerdis.style.color = "#4D4D4D";
        portalkerdis.onclick= function(){console.log("Fliege nach kerdis");useportal("kerdis");};
        portalkerdis.text = "           Kerdis";

        var Zeilenumbruch7 = document.createElement("br");
        fastportaldiv.appendChild(Zeilenumbruch7);

        var portalkolun = document.createElement("a");
        fastportaldiv.appendChild(portalkolun);
        portalkolun.href = "#";
        portalkolun.style.color = "#999999";
        portalkolun.onclick= function(){console.log("Fliege nach kerdis");useportal("kolun");};
        portalkolun.text = "Kolun";

        var Zeilenumbruch8 = document.createElement("br");
        fastportaldiv.appendChild(Zeilenumbruch8);

        var portalkrato = document.createElement("a");
        fastportaldiv.appendChild(portalkrato);
        portalkrato.href = "#";
        portalkrato.style.whiteSpace ="pre";
        portalkrato.style.color = "#4D4D4D";
        portalkrato.onclick= function(){console.log("Fliege nach krato");useportal("krato");};
        portalkrato.text = "           Krato";

        var Zeilenumbruch9 = document.createElement("br");
        fastportaldiv.appendChild(Zeilenumbruch9);

        var portalkuridanwandelfluss = document.createElement("a");
        fastportaldiv.appendChild(portalkuridanwandelfluss);
        portalkuridanwandelfluss.href = "#";
        portalkuridanwandelfluss.style.color = "#999999";
        portalkuridanwandelfluss.onclick= function(){console.log("Fliege nach kerdis");useportal("kuridan/wandelfluss");};
        portalkuridanwandelfluss.text = "           Kuridan/Wandelfluss";

        var Zeilenumbruch10 = document.createElement("br");
        fastportaldiv.appendChild(Zeilenumbruch10);

        var portalkuridanprarie = document.createElement("a");
        fastportaldiv.appendChild(portalkuridanprarie);
        portalkuridanprarie.href = "#";
        portalkuridanprarie.style.whiteSpace ="pre";
        portalkuridanprarie.style.color = "#4D4D4D";
        portalkuridanprarie.onclick= function(){console.log("Fliege nach kerdis");useportal("kuridan/prärie");};
        portalkuridanprarie.text = "           Kuridan/Prärie";

        var Zeilenumbruch11 = document.createElement("br");
        fastportaldiv.appendChild(Zeilenumbruch11);

        var portallardikia = document.createElement("a");
        fastportaldiv.appendChild(portallardikia);
        portallardikia.href = "#";
        portallardikia.style.color = "#999999";
        portallardikia.onclick= function(){console.log("Fliege nach kerdis");useportal("lardikia");};
        portallardikia.text = "Lardikia";

        var Zeilenumbruch12 = document.createElement("br");
        fastportaldiv.appendChild(Zeilenumbruch12);

        var portallaree = document.createElement("a");
        fastportaldiv.appendChild(portallaree);
        portallaree.href = "#";
        portallaree.style.whiteSpace ="pre";
        portallaree.style.color = "#4D4D4D";
        portallaree.onclick= function(){console.log("Fliege nach laree");useportal("laree");};
        portallaree.text = "           Laree";

        var Zeilenumbruch13 = document.createElement("br");
        fastportaldiv.appendChild(Zeilenumbruch13);

        var portallinya = document.createElement("a");
        fastportaldiv.appendChild(portallinya);
        portallinya.href = "#";
        portallinya.style.color = "#999999";
        portallinya.onclick= function(){console.log("Fliege nach kerdis");useportal("linya");};
        portallinya.text = "Linya";

        var Zeilenumbruch14 = document.createElement("br");
        fastportaldiv.appendChild(Zeilenumbruch14);

        var portalnawor = document.createElement("a");
        fastportaldiv.appendChild(portalnawor);
        portalnawor.href = "#";
        portalnawor.style.whiteSpace ="pre";
        portalnawor.style.color = "#4D4D4D";
        portalnawor.onclick= function(){console.log("Fliege nach laree");useportal("nawor");};
        portalnawor.text = "           Nawor";

        var Zeilenumbruch15 = document.createElement("br");
        fastportaldiv.appendChild(Zeilenumbruch15);

        var portalrovonia = document.createElement("a");
        fastportaldiv.appendChild(portalrovonia);
        portalrovonia.href = "#";
        portalrovonia.style.color = "#999999";
        portalrovonia.onclick= function(){console.log("Fliege nach kerdis");useportal("rovonia");};
        portalrovonia.text = "Rovonia";

        var Zeilenumbruch16 = document.createElement("br");
        fastportaldiv.appendChild(Zeilenumbruch16)

        var portalragnur = document.createElement("a");
        fastportaldiv.appendChild(portalragnur);
        portalragnur.href = "#";
        portalragnur.style.whiteSpace ="pre";
        portalragnur.style.color = "#4D4D4D";
        portalragnur.onclick= function(){console.log("Fliege nach laree");useportal("ragnur");};
        portalragnur.text = "           Ragnur";

        var Zeilenumbruch17 = document.createElement("br");
        fastportaldiv.appendChild(Zeilenumbruch17);

        var portalsalthos = document.createElement("a");
        fastportaldiv.appendChild(portalsalthos);
        portalsalthos.href = "#";
        portalsalthos.style.color = "#999999";
        portalsalthos.onclick= function(){console.log("Fliege nach kerdis");useportal("salthos");};
        portalsalthos.text = "Salthos";

        var Zeilenumbruch18 = document.createElement("br");
        fastportaldiv.appendChild(Zeilenumbruch18)

        var portalterasi = document.createElement("a");
        fastportaldiv.appendChild(portalterasi);
        portalterasi.href = "#";
        portalterasi.style.whiteSpace ="pre";
        portalterasi.style.color = "#4D4D4D";
        portalterasi.onclick= function(){console.log("Fliege nach terasi");useportal("terasi");};
        portalterasi.text = "           Terasi";

        var Zeilenumbruch19 = document.createElement("br");
        fastportaldiv.appendChild(Zeilenumbruch19);

        var portaltorihn = document.createElement("a");
        fastportaldiv.appendChild(portaltorihn);
        portaltorihn.href = "#";
        portaltorihn.style.color = "#999999";
        portaltorihn.onclick= function(){console.log("Fliege nach laree");useportal("torihn");};
        portaltorihn.text = "Torihn";

        var Zeilenumbruch20 = document.createElement("br");
        fastportaldiv.appendChild(Zeilenumbruch20);

        var portalwilisien = document.createElement("a");
        fastportaldiv.appendChild(portalwilisien);
        portalwilisien.href = "#";
        portalwilisien.style.whiteSpace ="pre";
        portalwilisien.style.color = "#4D4D4D";
        portalwilisien.onclick= function(){console.log("Fliege nach kerdis");useportal("wilisien");};
        portalwilisien.text = "           Wilisien";

        var Zeilenumbruch21 = document.createElement("br");
        fastportaldiv.appendChild(Zeilenumbruch21)

        var portalbernsteinhöhle = document.createElement("a");
        fastportaldiv.appendChild(portalbernsteinhöhle);
        portalbernsteinhöhle.href = "#";
        portalbernsteinhöhle.style.color = "#999999";
        portalbernsteinhöhle.onclick= function(){console.log("Fliege nach laree");useportal("bernsteinhöhle");};
        portalbernsteinhöhle.text = "Bernsteinhöhle";

        var Zeilenumbruch22 = document.createElement("br");
        fastportaldiv.appendChild(Zeilenumbruch22);

        var portalvergessenekathedrale = document.createElement("a");
        fastportaldiv.appendChild(portalvergessenekathedrale);
        portalvergessenekathedrale.href = "#";
        portalvergessenekathedrale.style.whiteSpace ="pre";
        portalvergessenekathedrale.style.color = "#4D4D4D";
        portalvergessenekathedrale.onclick= function(){console.log("Fliege nach kerdis");useportal("vergessenekathedrale");};
        portalvergessenekathedrale.text = "           vergessene Kathedrale";

        var Zeilenumbruch23 = document.createElement("br");
        fastportaldiv.appendChild(Zeilenumbruch23)

        var portalgrottedestodes = document.createElement("a");
        fastportaldiv.appendChild(portalgrottedestodes);
        portalgrottedestodes.href = "#";
        portalgrottedestodes.style.color = "#999999";
        portalgrottedestodes.onclick= function(){console.log("Fliege nach laree");useportal("todesgrotte");};
        portalgrottedestodes.text = "Grotte des Todes";

        var Zeilenumbruch24 = document.createElement("br");
        fastportaldiv.appendChild(Zeilenumbruch24);
    }


    function appendfastgzk(fastgzkdiv){

        var Zeilenumbruch = document.createElement("br");
        fastgzkdiv.appendChild(Zeilenumbruch);

        var gzkkonlir = document.createElement("a");
        fastgzkdiv.appendChild(gzkkonlir);
        gzkkonlir.href = "#";
        gzkkonlir.style.color = "#999999";
        gzkkonlir.onclick= function(){console.log("Fliege nach Konlir");usegzk("konlir");};
        gzkkonlir.text = "Konlir";

        var Zeilenumbruch2 = document.createElement("br");
        fastgzkdiv.appendChild(Zeilenumbruch2);

        var gzkanatubien = document.createElement("a");
        fastgzkdiv.appendChild(gzkanatubien);
        gzkanatubien.href = "#";
        gzkanatubien.style.whiteSpace ="pre";
        gzkanatubien.style.color = "#4D4D4D";
        gzkanatubien.onclick= function(){console.log("Fliege nach Anatubien");usegzk("anatubien");};
        gzkanatubien.text = "           Anatubien";


        var Zeilenumbruch3 = document.createElement("br");
        fastgzkdiv.appendChild(Zeilenumbruch3);

        var gzkbaw = document.createElement("a");
        fastgzkdiv.appendChild(gzkbaw);
        gzkbaw.href = "#";
        gzkbaw.style.color = "#00FF00";
        gzkbaw.onclick= function(){console.log("Fliege nach BAW");usegzk("baw");};
        gzkbaw.text = "BAW";

        var Zeilenumbruch4 = document.createElement("br");
        fastgzkdiv.appendChild(Zeilenumbruch4);

        var gzkreikan = document.createElement("a");
        fastgzkdiv.appendChild(gzkreikan);
        gzkreikan.href = "#";
        gzkreikan.style.whiteSpace ="pre";
        gzkreikan.style.color = "#4D4D4D";
        gzkreikan.onclick= function(){console.log("Fliege nach Reikan");usegzk("reikan");};
        gzkreikan.text = "           Reikan";

        var Zeilenumbruch5 = document.createElement("br");
        fastgzkdiv.appendChild(Zeilenumbruch5);

        var gzktalderruinen = document.createElement("a");
        fastgzkdiv.appendChild(gzktalderruinen);
        gzktalderruinen.href = "#";
        gzktalderruinen.style.color = "#0000FF";
        gzktalderruinen.onclick= function(){console.log("Fliege nach Tal der Ruinen");usegzk("talderruinen");};
        gzktalderruinen.text = "Tal der Ruinen";

        var Zeilenumbruch6 = document.createElement("br");
        fastgzkdiv.appendChild(Zeilenumbruch6);

        var gzkvergessenestal = document.createElement("a");
        fastgzkdiv.appendChild(gzkvergessenestal);
        gzkvergessenestal.href = "#";
        gzkvergessenestal.style.whiteSpace ="pre";
        gzkvergessenestal.style.color = "#4D4D4D";
        gzkvergessenestal.onclick= function(){console.log("Fliege nach Vergessenes Tal");usegzk("vergessenestal");};
        gzkvergessenestal.text = "           Vergessenes Tal";

        var Zeilenumbruch7 = document.createElement("br");
        fastgzkdiv.appendChild(Zeilenumbruch7);

        var gzkmentoran = document.createElement("a");
        fastgzkdiv.appendChild(gzkmentoran);
        gzkmentoran.href = "#";
        gzkmentoran.style.color = "#0000FF";
        gzkmentoran.onclick= function(){console.log("Fliege nach Mentoran Oase");usegzk("mentoran");};
        gzkmentoran.text = "Mentoran Oase";

        var Zeilenumbruch8 = document.createElement("br");
        fastgzkdiv.appendChild(Zeilenumbruch8);

        var gzknarubia = document.createElement("a");
        fastgzkdiv.appendChild(gzknarubia);
        gzknarubia.href = "#";
        gzknarubia.style.whiteSpace ="pre";
        gzknarubia.style.color = "#4D4D4D";
        gzknarubia.onclick= function(){console.log("Fliege nach Narubia");usegzk("narubia");};
        gzknarubia.text = "           Narubia";

        var Zeilenumbruch9 = document.createElement("br");
        fastgzkdiv.appendChild(Zeilenumbruch9);

        var gzknawor = document.createElement("a");
        fastgzkdiv.appendChild(gzknawor);
        gzknawor.href = "#";
        gzknawor.style.color = "#999999";
        gzknawor.onclick= function(){console.log("Fliege nach Nawor");usegzk("nawor");};
        gzknawor.text = "Nawor";

        var Zeilenumbruch10 = document.createElement("br");
        fastgzkdiv.appendChild(Zeilenumbruch10);

        var gzkburan = document.createElement("a");
        fastgzkdiv.appendChild(gzkburan);
        gzkburan.href = "#";
        gzkburan.style.whiteSpace ="pre";
        gzkburan.style.color = "#4D4D4D";
        gzkburan.onclick= function(){console.log("Fliege nach Buran");usegzk("buran");};
        gzkburan.text = "           Buran";

        var Zeilenumbruch11 = document.createElement("br");
        fastgzkdiv.appendChild(Zeilenumbruch11);

        var gzksutranien = document.createElement("a");
        fastgzkdiv.appendChild(gzksutranien);
        gzksutranien.href = "#";
        gzksutranien.style.color = "#999999";
        gzksutranien.onclick= function(){console.log("Fliege nach Sutranien");usegzk("sutranien");};
        gzksutranien.text = "Sutranien";

        var Zeilenumbruch12 = document.createElement("br");
        fastgzkdiv.appendChild(Zeilenumbruch12);

        var gzkhewien = document.createElement("a");
        fastgzkdiv.appendChild(gzkhewien);
        gzkhewien.href = "#";
        gzkhewien.style.whiteSpace ="pre";
        gzkhewien.style.color = "#4D4D4D";
        gzkhewien.onclick= function(){console.log("Fliege nach Hewien");usegzk("hewien");};
        gzkhewien.text = "           Hewien";

        var Zeilenumbruch13 = document.createElement("br");
        fastgzkdiv.appendChild(Zeilenumbruch13);

        var gzkorewu = document.createElement("a");
        fastgzkdiv.appendChild(gzkorewu);
        gzkorewu.href = "#";
        gzkorewu.style.color = "#999999";
        gzkorewu.onclick= function(){console.log("Fliege nach Orewu");usegzk("orewu");};
        gzkorewu.text = "Orewu";

        var Zeilenumbruch14 = document.createElement("br");
        fastgzkdiv.appendChild(Zeilenumbruch14);

        var gzkcasinoferdolien = document.createElement("a");
        fastgzkdiv.appendChild(gzkcasinoferdolien);
        gzkcasinoferdolien.href = "#";
        gzkcasinoferdolien.style.whiteSpace ="pre";
        gzkcasinoferdolien.style.color = "#00FF00";
        gzkcasinoferdolien.onclick= function(){console.log("Fliege nach Casino von Ferdolien");usegzk("ferdolien");};
        gzkcasinoferdolien.text = "           Casino von Ferdolien";

        var Zeilenumbruch15 = document.createElement("br");
        fastgzkdiv.appendChild(Zeilenumbruch15);

        var gzkkanobien = document.createElement("a");
        fastgzkdiv.appendChild(gzkkanobien);
        gzkkanobien.href = "#";
        gzkkanobien.style.color = "#999999";
        gzkkanobien.onclick= function(){console.log("Fliege nach Kanobien");usegzk("kanobien");};
        gzkkanobien.text = "Kanobien";

        var Zeilenumbruch16 = document.createElement("br");
        fastgzkdiv.appendChild(Zeilenumbruch16);

        var gzkterasi = document.createElement("a");
        fastgzkdiv.appendChild(gzkterasi);
        gzkterasi.href = "#";
        gzkterasi.style.whiteSpace ="pre";
        gzkterasi.style.color = "#4D4D4D";
        gzkterasi.onclick= function(){console.log("Fliege nach Terasi");usegzk("terasi");};
        gzkterasi.text = "           Terasi";

        var Zeilenumbruch17 = document.createElement("br");
        fastgzkdiv.appendChild(Zeilenumbruch17);

        var gzklodradon = document.createElement("a");
        fastgzkdiv.appendChild(gzklodradon);
        gzklodradon.href = "#";
        gzklodradon.style.color = "#999999";
        gzklodradon.onclick= function(){console.log("Fliege nach Lodradon");usegzk("lodradon");};
        gzklodradon.text = "Lodradon";

        var Zeilenumbruch18 = document.createElement("br");
        fastgzkdiv.appendChild(Zeilenumbruch18);

    }

    function appendautochase(obj){
        var chasecheckbox = document.createElement("input");
        chasecheckbox.type = "checkbox";
        chasecheckbox.id = "chasecheckbox";
        if (autochaseAn == "true"){
            chasecheckbox.checked=true;
        }
        else if (autochaseAn == "false"){
            chasecheckbox.checked=false;
        }
        chasecheckbox.onclick = function(){
            if (localStorage.getItem("autochase") == "false"){
                localStorage.setItem("autochase", true);
                console.log("Autochase AN");
            }
            else if (localStorage.getItem("autochase") == "true"){
                localStorage.setItem("autochase", false);
                console.log("Autochase AUS");
            }
        };
        document.body.appendChild(chasecheckbox);
    }

    function usegzk(destination){
        var itemlink = useItem("Schattenflügel");
        //console.log(itemlink);
        if (itemlink == null)
        {
            itemlink = useItem("gepresste Zauberkugel");
        }
        var value;
        switch (destination){
            case "konlir":
                value = "2";
                break;
            case "anatubien":
                value = "68";
                break;
            case "baw":
                value = "73";
                break;
            case "reikan":
                value = "87";
                break;
            case "talderruinen":
                value = "110";
                break;
            case "vergessenestal":
                value = "169";
                break;
            case "mentoran":
                value = "290";
                break;
            case "narubia":
                value = "387";
                break;
            case "nawor":
                value = "437";
                break;
            case "buran":
                value = "538";
                break;
            case "sutranien":
                value = "816";
                break;
            case "hewien":
                value = "884";
                break;
            case "orewu":
                value = "988";
                break;
            case "ferdolien":
                value = "1079";
                break;
            case "kanobien":
                value = "1321";
                break;
            case "terasi":
                value = "1715";
                break;
            case "lodradon":
                value = "4304";
                break;
        }
        //console.log(value);
        //console.log(itemlink);
        if (itemlink){
            var gzkrequest = new XMLHttpRequest();
            gzkrequest.open("POST", itemlink, true);
            gzkrequest.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
            gzkrequest.setRequestHeader("Accept-Language", "de,en-US;q=0.7,en;q=0.3");
            gzkrequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            var params = "z_pos_id=" +value;
            gzkrequest.send(params);
            parent.mapFrame.location.reload();

        }



    }

    function useportal(destination){
            var itemlink = useItem("Portalmaschine");
            //console.log(itemlink);
            if (itemlink == null)
            {
                itemlink = useItem("rote Portalmaschine");
            }
            itemlink = itemlink.replace("=activates&","=activate&");
            itemlink+="&arrive_eval=drink2";
            //console.log(itemlink);
            var value;
            switch (destination){
                case "kerdis":
                    value = "1581";
                    break;
                case "rovonia":
                    value = "2830";
                    break;
                case "laree":
                    value = "3743";
                    break;
                case "kuridan/wandelfluss":
                    value = "2398";
                    break;
                case "terasi":
                    value = "1749";
                    break;
                case "felseninsel":
                    value = "2609";
                    break;
                case "torihn":
                    value = "1606";
                    break;
                case "lardikia":
                    value = "1453";
                    break;
                case "kolun":
                    value = "2068";
                    break;
                case "krato":
                    value = "1766";
                    break;
                case "brondor":
                    value = "2463";
                    break;
                case "kuridan/prärie":
                    value = "1813";
                    break;
                case "wilisien":
                    value = "2350";
                    break;
                case "linya":
                    value = "2216";
                    break;
                case "dranar":
                    value = "2113";
                    break;
                case "ferdolien":
                    value = "1059";
                    break;
                case "nawor":
                    value = "1229";
                    break;
                case "dorea":
                    value = "3013";
                    break;
                case "ragnur":
                    value = "3098";
                    break;
                case "bernsteinhöhle":
                    value = "3038";
                    break;
                case "vergessenekathedrale":
                    value = "2645";
                    break;
                case "todesgrotte":
                    value = "3519";
                    break;

                case "dunklersee":
                    value = "4278";
                    break;
                case "salthos":
                    value = "4711";
                    break;

            }
            //console.log(value);
            //console.log(itemlink);
            if (itemlink){
                var portalrequest = new XMLHttpRequest();
                portalrequest.open("POST", itemlink, true);
                portalrequest.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
                portalrequest.setRequestHeader("Accept-Language", "de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7");
                portalrequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                var params = "z_pos_id=" +value;
                //console.log("Sende Link: " +itemlink +"\n" +"mit parameter z_pos_id="+value);
                portalrequest.send(params);
                parent.mapFrame.location.reload();

            }



        }
    function useAuftragsitem(){
        //Auftrag checken
        var missionrequest = new XMLHttpRequest();
        missionrequest.open("GET", "https://welt12.freewar.de/freewar/internal/item.php?action=missiondesc", true);
        missionrequest.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
        missionrequest.setRequestHeader("Accept-Language", "de,en-US;q=0.7,en;q=0.3");

        missionrequest.onreadystatechange = function(){
            if (missionrequest.readyState == 4 && missionrequest.status == 200){
                var auftragstext = missionrequest.response;
                auftragstext= auftragstext.substring(auftragstext.indexOf("<p class=\"listrow\">Deine Auftragspunkte:"), auftragstext.indexOf("</p><p class=\"listrow\"><a href=\"item.php\">Zur"));
                auftragstext= auftragstext.substring(auftragstext.indexOf("</p>") +23, auftragstext.length);
                console.log(auftragstext);

                var itemtouse;

            }
        };
        missionrequest.send();
    }

    var neuesElement2 = document.createElement("label");
    neuesElement2.style.color = "red";
    neuesElement2.innerHTML=("Autokill: ");

    var neuesElementpu2 = document.createElement("label");
    neuesElementpu2.style.color = "orange";
    neuesElementpu2.innerHTML=("Autopickup: ");

    var neuesElementfastgzk2 = document.createElement("label");
    neuesElementfastgzk2.style.color  = "darkblue";
    neuesElementfastgzk2.innerHTML=("FastGZK: ");

    var neuesElementfastportal2 = document.createElement("label");
    neuesElementfastportal2.style.color = "green";
    neuesElementfastportal2.innerHTML=("FastPortal: ");



    document.body.appendChild(Zeilenumbruch2);

    document.body.appendChild(neuesElement2);
    document.body.appendChild(neuesElement);

    document.body.appendChild(Zeilenumbruch);

    document.body.appendChild(neuesElementpu2);
    document.body.appendChild(neuesElementpu);






    var fastgzkdiv = document.createElement("div");
    fastgzkdiv.id = "fastgzkdiv";
    fastgzkdiv.style.float = "right";
    fastgzkdiv.style.marginRight = "10%";
    fastgzkdiv.style.lineHeight = "2";
    fastgzkdiv.style.width = "10%";
    fastgzkdiv.appendChild(neuesElementfastgzk2);
    fastgzkdiv.appendChild(neuesElementfastgzk);
    document.body.insertBefore(fastgzkdiv, document.body.getElementsByTagName("table")[1]);


    var fastportaldiv = document.createElement("div");
    fastportaldiv.id = "auftragshelperdiv";
    fastportaldiv.style.float = "right";
    fastportaldiv.style.marginRight = "10%";
    fastportaldiv.style.lineHeight = "2";
    fastportaldiv.style.width = "10%";
    fastportaldiv.appendChild(neuesElementfastportal2);
    fastportaldiv.appendChild(neuesElementfastportal);

    document.body.insertBefore(fastportaldiv, document.body.getElementsByTagName("table")[1]);



    if (fastgzkAn == "true"){
        neuesElementfastgzk.checked=true;
        appendfastgzk(fastgzkdiv);
    }
    else if (fastgzkAn == "false"){
        neuesElementfastgzk.checked=false;
    }

    if (fastportalAn == "true"){
        neuesElementfastportal.checked=true;
        appendfastportal(fastportaldiv);
    }
    else if (fastportalAn == "false"){
        neuesElementfastportal.checked=false;
    }



    document.getElementById("autokilltrigger").onclick = function(){
        if (localStorage.getItem("autokill") == "false"){
            localStorage.setItem("autokill", true);
            console.log("Autokill AN");
            if (typeof document.getElementById("chasecheckbox") === "undefined"){
                appendautochase(neuesElement);
            }
        }
        else if (localStorage.getItem("autokill") == "true"){
            localStorage.setItem("autokill", false);
            console.log("Autokill AUS");
        }
    };

    document.getElementById("autopickuptrigger").onclick = function(){
        if (localStorage.getItem("autopickup") == "false"){
            localStorage.setItem("autopickup", true);
            console.log("Autopickup AN");
        }
        else if (localStorage.getItem("autopickup") == "true"){
            localStorage.setItem("autopickup", false);
            console.log("Autopickup AUS");
        }
    };

    document.getElementById("fastgzktrigger").onclick = function(){
        if (localStorage.getItem("fastgzk") == "false"){
            localStorage.setItem("fastgzk", true);
            console.log("FastGZK AN");
            appendfastgzk(fastgzkdiv);
        }
        else if (localStorage.getItem("fastgzk") == "true"){
            localStorage.setItem("fastgzk", false);
            console.log("FastGZK AUS");
            window.location.reload();
        }
    };

    document.getElementById("fastportaltrigger").onclick = function(){
        if (localStorage.getItem("fastportal") == "false"){
            localStorage.setItem("fastportal", true);
            console.log("Fastportal AN");
            appendfastportal(fastportaldiv);
        }
        else if (localStorage.getItem("fastportal") == "true"){
            localStorage.setItem("fastportal", false);
            console.log("Fastportal AUS");
            window.location.reload();
        }
    };




    //Use Item
    function useItem(Item)
    {
        var itemlink = 0;
        //bei offenem Inventar das folgende ausführen
        if (parent.itemFrame.document.getElementsByClassName("listcaption")[1].innerText.search("schließen") != -1)
        {
            // console.log("es wird jetzt folgendes Item benutzt: " +Item)
            var itemreihe = parent.itemFrame.document.getElementsByClassName("listitemrow");
            console.log("Alle Reihen gesammelt. Es gibt " +itemreihe.length +" Reihen");

            console.log(Item);
            for(var i=0; i<itemreihe.length; i++)
            {
                //console.log("innerhalb der for schleife. Reihe " +i +" von " +itemreihe.length);
                if (itemreihe[i].innerText.search(Item) != -1)
                {
                    //console.log("Ding Ding Ding wir haben die richtige Reihe gefunden!!")
                    var richtigeReihe = i;
                    i=itemreihe.length;
                }
            }
            if (!richtigeReihe){return;}
            console.log(richtigeReihe +" ist die Richtige Reihe");
            for(var t=0; t<itemreihe[richtigeReihe].childNodes.length;t++)
            {
                //console.log("Innerhalb der 2. For schleife. Bin beim " +t +". von " +itemreihe[richtigeReihe].childNodes.length +" Versuchen.")
                if (itemreihe[richtigeReihe].childNodes[t].innerText == "Anwenden")
                {
                    itemlink = itemreihe[richtigeReihe].childNodes[t].href;
                    //console.log("der vom offenen inventar genommene Itemlink ist        " +itemlink);
                    break;
                }
            }
        }

        //bei geschlossenem Inventar auf Schnellzauber zurückgreifen
        else
        {

            for (var x = 1; x<10;x++)
            {
                //console.log("Teste Schnellzauber " +i)
                try{
                    if (parent.itemFrame.document.getElementById("accessfast" +x)){
                        if (parent.itemFrame.document.getElementById("accessfast" +x).innerText == Item)
                        {
                            itemlink = parent.itemFrame.document.getElementById("accessfast" +x).href;
                            //console.log("der Itemlink ist        " +itemlink);
                            break;
                        }
                    }
                }
                catch(e){}

            }
        }
        //console.log ("Itemlink für " +Item + " lautet: \n" +itemlink);
        if (itemlink !== 0){return itemlink;}
        else{return null;}
    }

    showlastitems();
    function showlastitems()
    {
        if(parent.itemFrame.document.getElementsByClassName("listcaption")[0])
        {
            var itemsdiv = parent.itemFrame.document.getElementById("lastitems");
            if (!itemsdiv)
            {
                itemsdiv = document.createElement("div");

                itemsdiv.style.textAlign = "center";
                itemsdiv.id = "lastitems"
                itemsdiv.style.height = "125px";
                //itemsdiv.style.border = "1px solid black";
                itemsdiv.style.backgroundColor = "#e8e8e8";
                itemsdiv.style.color = "5b5b5b";
                itemsdiv.style.overflow = "auto";
            }

            var items = JSON.parse(localStorage.getItem("lastitems"));
            var hasChanged = false;
            var i = 0;

            if (itemsdiv.childNodes.length / 2 == items.length)
            {
                for (var item of items)
                {
                    //try
                    //{
                    if (item == itemsdiv.childNodes[i].innerHTML)
                    {
                        i = i+2;
                    }
                    else
                    {
                        //console.log("Habe ein neues Item! " +item +" ist nicht " +itemsdiv.childNodes[i].innerHTML);
                        hasChanged = true;
                        break;
                    }
                    //}
                    //catch (e){hasChanged = true;};
                }
            }
            else
            {
                //console.log("Länge der items im speicher stimmt nicht mit den childnodes überein");
                hasChanged = true;
            }

            if (hasChanged == true)
            {
                //console.log("hasChanged ist true mache neu!");
                itemsdiv.innerHTML = "";
                for(var o = 0; o<items.length; o++)
                {
                    var myElem = document.createElement("label");
                    myElem.innerHTML = items[o];
                    itemsdiv.appendChild(myElem);
                    itemsdiv.appendChild(document.createElement("br"));
                }
                hasChanged = false;
                parent.itemFrame.document.body.appendChild(itemsdiv);
            }

            setTimeout(showlastitems, 500);
        }
        else
        {
            setTimeout(showlastitems, 100);
        }
    }

})();