// ==UserScript==
// @name         autoheal
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *.freewar.de/freewar/internal/item.php*
// @grant        none
// ==/UserScript==

(function() {

    'use strict';

    routine();



    function routine()
    {
        console.log("Routine gestartet...");

        checkheal();

    }
    //Aktuelle LP feststellen
    function getCurLP()
    {
        //console.log("check für curlp geht los")
        var curlp = document.getElementById("listrow_lifep").childNodes[2].innerText;
        curlp = curlp.replace(".","");
        //console.log("Momentane lp sind " +curlp)
        return curlp;
    }
    //Max LP feststellen
    function getMaxLP()
    {
        var maxlp = document.getElementById("listrow_lifep").childNodes[3].data;
        maxlp = maxlp.replace("/","");
        maxlp = maxlp.replace(")","");
        maxlp = maxlp.replace(".","");
        //console.log("Maximale lp sind " +maxlp)
        return maxlp;
    }





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
                    console.log("Ding Ding Ding wir haben die richtige Reihe gefunden!!")
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
                    location.href=itemlink;
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
                            location.href=itemlink;
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



    //Need To heal check
    function checkheal()
    {
        var currentlp = getCurLP();
        //console.log("Nach dem ausführen der Funktion getCurLP erhalten: " +currentlp)
        var maximallp = getMaxLP();
        //console.log("Nach dem ausführen der Funktion getMaxLP erhalten: " +maximallp)
        if (currentlp/maximallp <= 0.65)
        {
            console.log("Es muss geheilt werden");



            //Heilitems nach Priorität
            const heilitems = Array("Zauber der Selbstheilung", "Zauberbrötchen", "Lebkuchen", "Heilzauber", "Nolulawurzel", "Zauber der Selbstheilung");

            //checken ob items vorhanden
            for (var i =0;i<heilitems.length;i++)
            {

                if (checkfor(heilitems[i]) !=-1)
                {

                    var usethishealitem = heilitems[i];
                    console.log("Heilitem ist: " +usethishealitem);
                    break;

                }


            }


            useItem(usethishealitem);
        }
        else{}//console.log("es scheint als müsse nicht geheilt werden");}
    }



    function checkfor(item)
    {
        return document.body.innerText.search(item);
    }

})();