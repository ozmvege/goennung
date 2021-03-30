// ==UserScript==
// @name         autorun+buddeln
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

    var welt = document.URL.substring(document.URL.search("://")+3, document.URL.search(".freewar.de"));
    createbuttonsandstuff();
    main();



    const waykolun = Array("gzk-sutranien","up","upleft","up","up","upleft","left","down","left","up","left","down","left","up","left","left","down","left","up","up","right","right","upright","upright","right","up","downleft","left","left","down","left","up","up","upleft","down","left","down","right","down","left","up","up","hulnodarburgbetreten",
                            "up","right","upleft","right","right","upright","up","left","down","upleft","down","upleft","down","left","left","upleft","down","downright","right","down","downright","hulnodarburgverlassen","down","downleft");
    // limm start 60/85
    const waylimm = Array("upleft","down","down","down","right","down","left","down","down","down","down","right","downleft","upleft","up","left","left","upright","right","up","left","left","upleft","right","right","right","up","up","downleft","up","up","left","left","downright");
    // laree start:55|86
    const waylaree = Array("left","up","upleft","down","down","upleft","up","downleft","left","up","right","up","left","upright","left","left","left","left","left","upleft","right","right","right","right","right","right","right","right","downright","right","right","up","downleft","upleft","up","up","up","left","left","downright","down","downleft","upleft","left","left","left","left");
    // mento start : mento gzk
    const waymentoran = Array("gzk-mentoran","up","up","downleft","upleft","down","down","right","down","left","downleft","right","right","down","down","upright","up","up","right","down","downright","up","up","up","left","up","right","up","right","right","right","down","downleft","right","right","downleft","down","down","down","left","left","left");
    const wayplefir = Array("gzk-anatubien","downleft","down","down","down","downright","down","down","downleft","left","downleft","up","up","up","right","upleft","left","down","down","down","down","left","up","up","up","up","up","upleft","down","down","down","down","down","down","left","up","up","up","up","downleft","down","down","left");
    const wayorewu = Array("gzk-orewu","up","downleft","downleft","right","down","downright","right","upleft","right","up","left","upright","up","right","down","down","down","down","down","right","up","up","up","up","up","right","down","down","down","down","upright","up","up","up","downright","down","down");
    // pensalwasserfeld start
    const waypensal = Array("left","left","left","left","upright","right","upright","left","left","left","upleft","right","right","right","right","right","up","up","left","down","left","upleft","down","left","left");
    const wayhewien = Array("gzk-hewien","down","down","downleft","down","upleft","upright","up","up","upleft","up","downleft","downright","down","down","downleft","up","up","up","upleft","down","down","down","down","left","up","up","up","left");
    // portal wilisien start
    const wayfrostis = Array("portal-wilisien","down","down","down","right","down","left","upleft","up","up","upleft","down","down","down","downleft","up","up","up","up","up","up","left","left","downright","down","down","down","down","upleft","up","up");
    // diebi 1 feld start
    const waydiebi = Array("gzk-baw","up","diebeshöhlebetreten","left","up","up","left","up","right","right","up","left","up","right","upleft","left","down","upleft","down","left","downright","left","left","down","right","down","down","up","upright");
    // altes dranar + dranar start altdranar)
    const wayaltesdranar = Array("portal-dranar","altdranarbetreten","up","left","upright","left","left","up","right","right","up","downright","right","right","downleft","left","downright","left","downleft","downleft","down","left","down","right","right","right","right","upleft","right","right","downright","up","upleft","left","left","left","down","altdranarverlassen",
                                 "up","left","down","downleft","right","right","right","up","right","down","upright","downright","right","upleft","upleft","left","left","upleft","upleft","upleft","up","right","down","downright","up","up","up","right","down","down","down","right","up","up","up","right","down");
    // große + kleine mine
    const waymine = Array("gzk-buran","left","downleft","left","upleft","upleft","upleft","right","right","right","up","upright","mine1betreten",
                                     "up","up","down","down","mine1verlassen","up","upright","upright","mine2betreten","up","down","up","right","upleft","left","upright","left","left","left","left","upright","right","right","up","left");
    const mineundsojagenauto = Array("gzk-buran","left","downleft","left","upleft","upleft","repairall","upleft","right","right","right","up","upright","mine1betreten",
                                     "up","up","down","down","mine1verlassen","up","upright","upright","mine2betreten","up","right","upleft","left","upright","left","left","left","left","upright","right","right","up","left","gzk-sutranien","up","upleft","up","up","upleft","left","left","left","left","upleft","upleft","left","up","upleft",
                                     "hulnodarburgbetreten","up","left","upleft","upleft","up","downright","right","down","right","up","up","right","down","down","upright","up","right","down","downleft","downleft","downleft","hulnodarburgverlassen","upright","downright","downright","upright","up","upleft","right","right","right","up","left",
                                     "left","left","left","upright","right","right","right","upleft","up","downleft","left","gzk-terasi","downleft","repairall","up","up","upleft","up","left","down","left","up","up","downleft","down","upleft","upleft","upright","upright","right","up","right","upright","upleft","down","left","left","down",
                                     "gzk-ferdolien","downright","right","right","upright","up","up","up","up","upleft","upright","upright","right","upright","right","down","upright","right","downright","up","upleft","up","upleft","down","downleft","left","left","upright","up","upright","up","left","left");
    // wasserfall zk punkt
    const waywasserfall = Array("up","left","down","down","right","down","upright","up","up","upright","down","down","down","down","right","up","up","up","up","right","down","down","down","down","right","up","up","up","right","down","down","upright","up","up");
    const wayollager = Array("gzk-orewu","left","downleft","left","downleft","downleft","oellagerleeren");
    const waysumpfgas = Array("gzk-kanobien","down","down","downright","down","down","sumpfgaslagerleeren");
    const waykathedrale = Array("portal-vergessenekathedrale","downright","left","up","downleft","downright","left","left","downleft","right","right","right","right","right","kathedrale2betreten","up","right","right","right","downleft","right","right","kathedrale3betreten","right","right","up");
    const waytodesgrotte = Array("portal-todesgrotte","down","downright","downleft","downright","down","left","down","downright","down","left","downright","left","left","downright","right","downleft","right","right","right","downright","down","downleft","downleft","left","down","down","down","up","upright","right","right","upleft","upright","up","up","upright","up","up","down","downleft","left","upleft","up","up","upright","right","left","left","upleft","upright","left","upright","upleft","up","up","upleft");
    const waykrato = Array("gzk-terasi","upleft","upleft","up","left","down","left","up","up","downleft","down","upleft","downleft","up","up","upright","upright","right","upright","upright","left","up","downleft","down","upleft","down","left","down","left","left","downright","downleft","left","down","right","down","left","down","downleft","downleft","downleft");
    const waystiftung = Array("gzk-anatubien","downleft","down","down","down","downright","down","down","downright","down","downright","stiftungabholen");
    const wayriff = Array("portal-lardikia","up","up","up","korallenriffbetreten","downright","right","downright","downright","tiefenriff","up","up","up","right","up","downright","right","up","right","right","upleft","left","up","right","right","upleft","upright","left","left","down","downleft","left","up","up","downleft","upleft","up","down","down","down","left","downright","down","left","downright","left","down");
    const waysiedestein = Array("gzk-buran","left","downleft","left","upleft","upleft","upleft","right","right","right","siedesteinminebetreten","left","down","upright","right","up","downright","right","right","right","upleft","up","downleft","downleft","left","left","siedesteinmineverlassen");
    const waykerdis = Array("gzk-reikan","left","upleft","up","upleft","down","down","left","down","right","downright","right","right","down","left","left","down","right","right","down","down","downleft","left","down","left","up","left","down","left","up","up","up","downleft","down","down","downleft","up","repairall","up","up","downleft","down","down","left","up","downleft","left","downleft","up","up","up","downleft","down","down","left","up","up","upleft","down","down","down","downleft","up","up","up","up","downleft","down","down","down",
                            "upleft","up","up","left","down","left","left","up","left","down");
    const wayburan = Array("gzk-buran","down","down","down","right","up","up","up","upright","down","down","down","down","right","up","up","up","up","right","down","down","down","down","upright","up","right","up","left","up","right","up");
    const wayragnurright = Array("upright","upleft","left","up","up","upleft","left","left","downright","right","down","left","down","right","down","left","downleft","right","right","downleft","left","left","downleft","downright","up","right","right");
    const waybernsteinhöhle = Array("portal-bernsteinhöhle","right","right","right","up","up","upleft","down","down","down","down","down","upleft","up","up","up","up","downleft","down","down","down","down","downleft","up","up","up","up","up","upleft","down","down","down","down","down","left","up","left","up","up","up","right");
    const wayrovonia = Array("portal-rovonia","down","right","down","upright","right","right","right","upright","left","left","left","left","left","left","left","upright","right","right","right","right","up","left","left","left","left","upleft","right","right","right","right","up","left","left","up","left","down","left","up");
    const wayvenost = Array("left","down","downleft","left","left","up","right","right","up","left","left","left","up","right","right","right","upleft","left","left","left","up","right","right","right","upright","left","left","left","left","upright","right","right","upleft");
    const wayruward = Array("gzk-terasi","upright","right","upright","right","up","right","up","right","downright","down","downright","right","upleft","upleft","up","up","up","right","up","upright","left","downleft","left","down","down","left","up","up","upleft","down","down","down","left","up","up","downleft");
    const waytdr = Array("gzk-talderruinen","right","ruinebetreten","up","up","left","up","downleft","downright","downright","ruineverlassen","up","up","left","down","left","downleft","upleft","left","downright","down","right","down","right","up","right","down","upright","down","downleft","down","down");
    const waysteinrutsch = Array("gzk-hewien","up","up","up","up","up","up","left","upleft","upleft","left","up","up","left","up","up","up","left","down","down","upleft","up","left","down","upleft","up","left","up","left","upleft","down","down","right","down","down","left","up","left","down","left","down","gzk-konlir","left");
    const waybrondor = Array("portal-brondor","right","right","upleft","upright","left","left","down","downleft","up","up","left","down","left","left","down","right","right","down","left","down","down","left","up","up","left","down","left","up","left","repairall");
    const wayprärie = Array("portal-kuridan/prärie","right","upleft","upright","upleft","down","downleft","down","down","right","downright","left","left","downright","left","downleft","right","right","downright","left","downright","left","downright","left","left","downleft","right","right","right","right","right","up","upleft");
    const waywandelfluss = Array("portal-torihn","left","down","right","down","left","downright","left","downleft","right","right","right","right","downleft","left","left","left","left","down","right","right","right","downleft","right","right","downleft","right","downright","left","left","left","down","right","right","right","down","down","upleft","left","left","left","downright","down","right","up","right","down","right","up");
    const waylinya = Array("right","schifflinya","up","upright","down","down","right","up","up","upright","down","down","down","downright","up","up","up","up","up","right","down","down","down","down","down","right","up","up","up","up","right","down","down","down","gzk-anatubien","up","upleft");
    const waygrabvonreikan = Array("gelbezk-grabvonreikan","right","down","left","left","up","upright","up")
    const waykanalisation = Array("gelbezk-kanalisation","up","up","up","up","left","left","kanalisation2betreten","right","right","up","up","right","right","left","upleft","up","left","left","left","right","right","upright","up","upleft","left","right","right","right","right","down","down")
    const wayeishöhle = Array("gelbezk-eishöhle","left","up","right","right","down","right","up","up","left","left","left","up","right","right","up","left","left","left","up","right","right","up","left")
    const waydorea = Array("gzk-orewu","downright","downright","downright","down","down","down","downleft","left","downleft","right","right","down","left","left","down","right","right","downright","up","up","up","up","upright","down","down","down","down","down","upright","up","up","up","downright","down","down","downright","up","up","up","right","down","down","right","right","up","left","up","right","up","left","up","upright","down","downright","down");
    const waynarubia = Array("gzk-narubia","downleft","down","right","up","upright","down","down","right","up","right","down","right","right","downright","left","left","down","left","up","left","down","left","up","downleft","upleft","down","downright","downright","up","right","down","right","up","right","down","right","up","right","down");
    const waysutranien = Array("gzk-sutranien","up","up","left","up","right","right","right","down","left","down","down","down","down","downright","up","up","up","up","downright","down","down","down","downright","up","up","up","up","up","up","upright","down","down","down","down","down","down","down","upright","up","up","right","upleft","up","up","up","right");
    const wayurdanien = Array("gzk-sutranien","up","upleft","up","upright","left","upleft","up","up","upright","down","down","down","right","up","up","up","right","down","down","down","right","up","up","up","upright","down","down","down","down","right","up","right","upright","left","left","up","right","right","upright","left","left","left","upright","right","right","upright","left","left","left","upright","right","right","right");
    const waykanobien = Array("gzk-kanobien","down","down","left","up","up","upright","left","upleft","down","down","down","down","left","up","up","up","up","upleft","down","down","down","down","down","downleft","up","up","up","up","left","down","down","down","down","left");
    const waygobos = Array("gzk-kanobien","upright","up","right","down","down","down","down","left","down","right","right","up","up","upleft","upright","up","right","down","down","down","down","down","down","down","left","down","right","upright","up","up","up","downright","up","downright","down","upright","upleft","upleft","up","left","upright","right","up","left","left","upright");
    const waylodradon = Array("gzk-lodradon","downright","left","left","left","left","left","up","left","up","left","down","down","right","down","right","right","right","right","right","right","right","right","downright","left","left","left","left","left","left","downright","right","right","right","downleft","left","left","downright","right","right","right","down","left");
    const wayterasi = Array("gzk-terasi","left","up","right","up","left","up","right","upleft","upleft","right","up","right","up","upleft","right","up","up","downright","down","down","down","downleft","down","downright","down","down","right","down","left","downleft","right","right","right","down","left","left","downright","right","right","downleft","right","right","right","downright","down","left","up","left","down","upleft","left","left","fischlagerleeren");
    const wayryn = Array("gzk-lodradon","downright","downright","right","downright","right","down","down","down","left","down","right","downleft","right","right","up","up","up","up","up","right","down","down","down","right","up","up","up","right","down","down","down","down","left","down","right","right","up","up","up","up","right","down","down","right","up","up","up","right","down");
    const waylichtwald = Array("gelbezk-lichtwald","down","downright","up","up","right","down","down","upright","up","downright","right");
    const waynawor = Array("gzk-reikan","upright","up","right","downright","up","up","up","downright","down","upright","down","upright","upright","down","downright","left","left","downleft","down","down","left","down","right","downleft","right","down","upright","up","up","up","right","down","down","down","right","up","up","up","downright","up","up","up","downright","down","downright","up","up","up","upright","down","down","down","down","down","down","downright","up","up","up","up","up","up","upright","down","down","down","down","upright","up","up","right","down");
    const waydelos = Array("gzk-sutranien","up","upleft","left","down","left","up","left","down","left","up","left","down","left","up","left","left","left","downright","right","downright","down","right","right","down","down","down","right","right","up","up","down","downleft","downleft","left","up","up","left","down","down","left","up","up","downleft","up","up","left");
    const wayanatubien = Array("gzk-anatubien","downright","down","right","vulkanbetreten","up","right","up","up","up","left","down","down","left","up","up","left","down","down","down","right","downright","vulkanverlassen","downright","up","right","upleft","right","right","up","up","up","downleft","down","left","left","left","upleft","upleft","right","right","right","upright","left","left","left","left","up","up","upright","down","right","right");
    const waykonlir = Array("gzk-baw","upleft","up","upright","down","down","right","up","up","up","downright","down","down","right","up","right","up","up","up","up","upright","down","down","down","down","down","downright","up","up","up","up","upright","down","down","down","down","right","up","up","up","up","downright","down","down","downright","up","up","up","up","left","upleft","left","left","left","upright","upleft","right","right","right","upleft","right","up");
    const waylatenia = Array("gzk-hewien","up","up","up","upleft","left","right","right","up","up","right","down","down","downright","up","up","up","right","down","down","right","up","up","right","down","down","right","up","up","upright","left","left","left","left","upright","right","right","right","right","upleft","left","left","left");
    const wayterbat = Array("gzk-konlir","right","right","right","right","right","upright","down","downright","up","up","up","up","up","down","downright","down","down","down","downright","up","up","up","up","right","down","down","down","right","up","up","right","upleft","up");
    const wayferdolien = Array("gzk-ferdolien","downright","right","right","down","downright","up","up","up","right","down","down","right","up","up","right","down","downright","up","up","right","right","up","left","up","up","downleft","down","left","up","downleft","up","downleft","up","downleft","up","left","upright","right","right","upright","upright","left","downleft","up","downleft","up","downleft","up","up","downleft","left","downleft","up","up","downleft","up","left","left","up","up");
    const wayazul = Array("gzk-orewu","left","downleft","left","downleft","down","down","down","downleft","right","downright","left","left","left","downright","right","right","down","downright","left","left","downleft","right","right","right","down","left","left","left","downleft","right","right","right","right","right","downleft","left","left","left","left","downleft","right","right","down","left","downright","downright");
    const wayhewienhöhlen = Array("gzk-hewien","left","kltropfsteinhöhlebetreten","right","right","down","down","upright","up","right","up","left","up","left","left","downright","left","downleft","kltropfsteinhöhleverlassen","downleft","downleft","left","left","wasserhöhlebetreten","right","right","right","right","wasserhöhleverlassen","right","grtropfsteinhöhlebetreten","right","right","upright","left","left","left","upleft","right","right","right","right","right","upleft","left","left","left","left","upright","up","right","right","right","down","left","left","gzk-ferdolien");
    const wayfinstereis = Array("gzk-lodradon","down","down","down","down","downright","downright","finstereisbetreten","down","left","up","up","left","down","left","up","up","upleft","down","down","down","left","up","up","up","upleft","down","down","down","upleft","up","up","up","left","down","down","down","upleft","up","up","up","left","down","down","left","up","up","upleft","down","down","down","upleft","up","up","finstereisverlassen");
    const waycustom = Array("downright");


    var map = {
                "-821|-780": 1, "-825|-779": 1, "-824|-779": 1, "-823|-779": 1, "-821|-779": 1,
                "-825|-778": 1, "-824|-778": 1, "-823|-778": 1, "-822|-778": 1, "-821|-778": 1,
                "-825|-777": 1, "-824|-777": 1, "-823|-777": 1, "-822|-777": 1, "-821|-777": 1,
                "-824|-776": 1, "-823|-776": 1, "-822|-776": 1, "-249|-349": 1, "-246|-349": 1,
                "-245|-349": 1, "-244|-349": 1, "-243|-349": 1, "-249|-348": 1, "-248|-348": 1,
                "-247|-348": 1, "-246|-348": 1, "-245|-348": 1, "-244|-348": 1, "-243|-348": 1,
                "-248|-347": 1, "-247|-347": 1, "-246|-347": 1, "-245|-347": 1, "-244|-347": 1,
                "-247|-346": 1, "-246|-346": 1, "-245|-346": 1, "-246|-345": 1, "84|98": 1,
                "84|99": 1, "85|99": 1, "86|99": 1, "87|99": 1, "88|99": 1, "84|100": 1, "85|100": 1,
                "86|100": 1, "87|100": 1, "90|100": 1, "85|101": 1, "89|101": 1, "90|101": 1, "84|102": 1,
                "85|102": 1, "86|102": 1, "87|102": 1, "88|102": 1, "89|102": 1, "90|102": 1, "86|103": 1,
                "87|103": 1, "88|103": 1, "89|103": 1, "90|103": 1, "86|104": 1, "87|104": 1, "88|104": 1,
                "89|104": 1, "88|105": 1, "103|120": 1, "104|120": 1, "102|121": 1, "103|121": 1,
                "104|121": 1, "105|121": 1, "103|122": 1, "104|122": 1, "105|122": 1, "104|123": 1,
                "105|123": 1, "104|124": 1, "105|124": 1, "106|124": 1, "107|124": 1, "103|125": 1,
                "104|125": 1, "105|125": 1, "106|125": 1, "103|126": 1, "104|126": 1, "105|126": 1,
                "106|126": 1, "102|127": 1, "103|127": 1, "104|127": 1, "105|127": 1, "106|127": 1,
                "107|127": 1, "103|128": 1, "104|128": 1, "105|128": 1, "106|128": 1, "196|128": 1,
                "197|128": 1, "191|129": 1, "195|129": 1, "196|129": 1, "197|129": 1, "198|129": 1,
                "189|130": 1, "190|130": 1, "191|130": 1, "192|130": 1, "193|130": 1, "194|130": 1,
                "195|130": 1, "196|130": 1, "197|130": 1, "198|130": 1, "188|131": 1, "189|131": 1,
                "190|131": 1, "191|131": 1, "192|131": 1, "193|131": 1, "194|131": 1, "195|131": 1,
                "196|131": 1, "197|131": 1, "198|131": 1, "189|132": 1, "190|132": 1, "191|132": 1,
                "192|132": 1, "193|132": 1, "194|132": 1, "195|132": 1, "196|132": 1, "197|132": 1,
                "198|132": 1, "199|132": 1, "189|133": 1, "190|133": 1, "191|133": 1, "192|133": 1,
                "193|133": 1, "194|133": 1, "195|133": 1, "196|133": 1, "197|133": 1, "198|133": 1,
                "199|133": 1, "189|134": 1, "190|134": 1, "191|134": 1, "192|134": 1, "193|134": 1,
                "194|134": 1, "195|134": 1, "196|134": 1, "197|134": 1, "198|134": 1, "190|135": 1,
                "191|135": 1, "192|135": 1, "193|135": 1, "194|135": 1, "195|135": 1, "196|135": 1,
                "197|135": 1, "198|135": 1, "199|135": 1, "191|136": 1, "192|136": 1, "193|136": 1,
                "194|136": 1, "195|136": 1, "196|136": 1, "197|136": 1, "198|136": 1, "202|132": 1,
                "203|132": 1, "201|133": 1, "202|133": 1, "203|133": 1, "204|133": 1, "202|134": 1,
                "203|134": 1, "204|134": 1, "205|134": 1, "185|135": 1, "186|135": 1, "183|136": 1,
                "184|136": 1, "185|136": 1, "186|136": 1, "187|136": 1, "182|137": 1, "183|137": 1,
                "184|137": 1, "185|137": 1, "186|137": 1, "187|137": 1, "182|138": 1, "183|138": 1,
                "184|138": 1, "185|138": 1, "186|138": 1, "187|138": 1, "188|138": 1, "183|139": 1,
                "184|139": 1, "185|139": 1, "186|139": 1, "187|139": 1, "188|139": 1, "184|140": 1,
                "185|140": 1, "186|140": 1, "48|88": 1, "49|88": 1, "47|89": 1, "48|89": 1,
                "49|89": 1, "50|89": 1, "51|89": 1, "52|89": 1, "48|90": 1, "49|90": 1, "50|90": 1,
                "51|90": 1, "52|90": 1, "53|90": 1, "49|91": 1, "50|91": 1, "51|91": 1, "52|91": 1,
                "53|91": 1, "54|91": 1, "55|91": 1, "50|92": 1, "51|92": 1, "52|92": 1, "53|92": 1,
                "54|92": 1, "49|93": 1, "50|93": 1, "51|93": 1, "52|93": 1, "53|93": 1, "48|94": 1,
                "49|94": 1, "50|94": 1, "51|94": 1, "49|95": 1, "50|95": 1, "51|95": 1, "53|95": 1,
                "54|95": 1, "55|95": 1, "48|96": 1, "49|96": 1, "50|96": 1, "51|96": 1, "52|96": 1,
                "53|96": 1, "54|96": 1, "55|96": 1, "50|97": 1, "51|97": 1, "52|97": 1, "53|97": 1,
                "54|97": 1, "49|98": 1, "50|98": 1, "51|98": 1, "52|98": 1, "53|98": 1, "49|99": 1,
                "50|99": 1, "51|99": 1, "52|99": 1, "48|100": 1, "49|100": 1, "50|100": 1,
                "51|100": 1, "52|100": 1, "47|101": 1, "48|101": 1, "49|101": 1, "50|101": 1, "51|101": 1,
                "52|101": 1, "53|101": 1, "50|102": 1, "51|102": 1, "52|102": 1, "53|102": 1, "49|103": 1,
                "50|103": 1, "51|103": 1, "52|103": 1, "53|103": 1, "54|103": 1, "48|104": 1, "49|104": 1,
                "50|104": 1, "51|104": 1, "52|104": 1, "53|104": 1, "54|104": 1, "55|104": 1, "56|104": 1,
                "50|105": 1, "51|105": 1, "53|105": 1, "54|105": 1, "55|105": 1, "56|105": 1, "56|106": 1,
                "57|106": 1, "93|94": 1, "94|94": 1, "94|95": 1, "-607|-209": 1, "-604|-209": 1,
                "-603|-209": 1, "-609|-208": 1, "-608|-208": 1, "-607|-208": 1, "-606|-208": 1,
                "-605|-208": 1, "-604|-208": 1, "-603|-208": 1, "-602|-208": 1, "-609|-207": 1,
                "-607|-207": 1, "-606|-207": 1, "-605|-207": 1, "-604|-207": 1, "-603|-207": 1,
                "-602|-207": 1, "-609|-206": 1, "-607|-206": 1, "-606|-206": 1, "-605|-206": 1,
                "-604|-206": 1, "-603|-206": 1, "-602|-206": 1, "-609|-205": 1, "-608|-205": 1,
                "-607|-205": 1, "-606|-205": 1, "-605|-205": 1, "-604|-205": 1, "-603|-205": 1,
                "-608|-204": 1, "-607|-204": 1, "-606|-204": 1, "-605|-204": 1, "-603|-204": 1,
                "-606|-203": 1, "84|103": 1, "84|104": 1, "82|105": 1, "83|105": 1, "84|105": 1,
                "84|106": 1, "85|106": 1, "86|106": 1, "85|107": 1, "86|107": 1, "85|108": 1,
                "85|109": 1, "86|109": 1, "-800|-283": 1, "-799|-283": 1, "-798|-283": 1, "-797|-283": 1,
                "-807|-282": 1, "-806|-282": 1, "-805|-282": 1, "-803|-282": 1, "-802|-282": 1, "-801|-282": 1,
                "-800|-282": 1, "-799|-282": 1, "-798|-282": 1, "-805|-281": 1, "-804|-281": 1, "-803|-281": 1,
                "-802|-281": 1, "-801|-281": 1, "-800|-281": 1, "-805|-280": 1, "-804|-280": 1, "-803|-280": 1,
                "-807|-279": 1, "-806|-279": 1, "-805|-279": 1, "-804|-279": 1, "125|88": 1, "127|88": 1,
                "128|88": 1, "129|88": 1, "130|88": 1, "131|88": 1, "125|89": 1, "126|89": 1, "127|89": 1,
                "128|89": 1, "129|89": 1, "130|89": 1, "125|90": 1, "126|90": 1, "127|90": 1, "128|90": 1,
                "129|90": 1, "130|90": 1, "131|90": 1, "124|91": 1, "125|91": 1, "126|91": 1, "127|91": 1,
                "124|92": 1, "125|92": 1, "126|92": 1, "125|93": 1, "126|93": 1, "83|81": 1, "82|82": 1,
                "83|82": 1, "84|82": 1, "81|83": 1, "82|83": 1, "83|83": 1, "84|83": 1, "81|84": 1, "82|84": 1,
                "83|84": 1, "86|85": 1, "79|86": 1, "82|86": 1, "83|86": 1, "84|86": 1, "85|86": 1, "86|86": 1,
                "79|87": 1, "80|87": 1, "81|87": 1, "82|87": 1, "83|87": 1, "84|87": 1, "85|87": 1, "86|87": 1,
                "87|87": 1, "79|88": 1, "80|88": 1, "81|88": 1, "82|88": 1, "83|88": 1, "84|88": 1, "85|88": 1,
                "86|88": 1, "79|89": 1, "80|89": 1, "81|89": 1, "82|89": 1, "83|89": 1, "84|89": 1, "85|89": 1,
                "79|90": 1, "80|90": 1, "81|90": 1, "82|90": 1, "83|90": 1, "84|90": 1, "85|90": 1, "86|90": 1,
                "80|91": 1, "82|91": 1, "61|90": 1, "62|90": 1, "63|90": 1, "64|90": 1, "65|90": 1, "66|90": 1,
                "67|90": 1, "68|90": 1, "69|90": 1, "62|91": 1, "63|91": 1, "64|91": 1, "65|91": 1, "66|91": 1,
                "67|91": 1, "68|91": 1, "69|91": 1, "64|92": 1, "64|93": 1, "65|93": 1, "66|93": 1, "61|94": 1,
                "62|94": 1, "66|94": 1, "68|94": 1, "62|95": 1, "63|95": 1, "64|95": 1, "65|95": 1, "66|95": 1,
                "68|95": 1, "62|96": 1, "63|96": 1, "64|96": 1, "65|96": 1, "66|96": 1, "67|96": 1, "68|96": 1,
                "63|97": 1, "64|97": 1, "65|97": 1, "66|97": 1, "-937|-558": 1, "-936|-558": 1, "-935|-558": 1,
                "-938|-557": 1, "-937|-557": 1, "-936|-557": 1, "-935|-557": 1, "-934|-557": 1, "-939|-556": 1,
                "-938|-556": 1, "-937|-556": 1, "-936|-556": 1, "-935|-556": 1, "-934|-556": 1, "-939|-555": 1,
                "-938|-555": 1, "-937|-555": 1, "-936|-555": 1, "-935|-555": 1, "-934|-555": 1, "-938|-554": 1,
                "-936|-554": 1, "-935|-554": 1, "-938|-553": 1, "-935|-553": 1, "-935|-552": 1, "-934|-552": 1,
                "111|119": 1, "118|119": 1, "109|120": 1, "111|120": 1, "112|120": 1, "117|120": 1, "118|120": 1,
                "109|121": 1, "110|121": 1, "111|121": 1, "112|121": 1, "113|121": 1, "117|121": 1, "118|121": 1,
                "119|121": 1, "108|122": 1, "109|122": 1, "110|122": 1, "111|122": 1, "112|122": 1, "113|122": 1,
                "114|122": 1, "115|122": 1, "116|122": 1, "117|122": 1, "118|122": 1, "119|122": 1, "108|123": 1,
                "109|123": 1, "110|123": 1, "111|123": 1, "112|123": 1, "113|123": 1, "114|123": 1, "115|123": 1,
                "116|123": 1, "117|123": 1, "118|123": 1, "108|124": 1, "109|124": 1, "110|124": 1, "111|124": 1,
                "112|124": 1, "113|124": 1, "114|124": 1, "115|124": 1, "116|124": 1, "117|124": 1, "118|124": 1,
                "111|125": 1, "112|125": 1, "115|125": 1, "58|94": 1, "59|94": 1, "60|94": 1, "56|95": 1,
                "57|95": 1, "58|95": 1, "59|95": 1, "60|95": 1, "61|95": 1, "56|96": 1, "57|96": 1,
                "58|96": 1, "59|96": 1, "60|96": 1, "57|97": 1, "58|97": 1, "59|97": 1, "60|97": 1,
                "58|98": 1, "57|99": 1, "58|99": 1, "59|99": 1, "60|99": 1, "61|99": 1, "56|100": 1,
                "57|100": 1, "58|100": 1, "59|100": 1, "60|100": 1, "61|100": 1, "62|100": 1, "56|101": 1,
                "57|101": 1, "58|101": 1, "59|101": 1, "60|101": 1, "62|101": 1, "-427|-299": 1, "-426|-299": 1,
                "-425|-299": 1, "-424|-299": 1, "-429|-298": 1, "-428|-298": 1, "-427|-298": 1,
                "-426|-298": 1, "-425|-298": 1, "-424|-298": 1, "-429|-297": 1, "-428|-297": 1,
                "-427|-297": 1, "-426|-297": 1, "-425|-297": 1, "-428|-296": 1, "-427|-296": 1,
                "-426|-296": 1, "-425|-296": 1, "-427|-295": 1, "-428|-294": 1, "-427|-294": 1,
                "-426|-294": 1, "-425|-294": 1, "-424|-294": 1, "-429|-293": 1, "-428|-293": 1,
                "-427|-293": 1, "-426|-293": 1, "-425|-293": 1, "-424|-293": 1, "-423|-293": 1,
                "-429|-292": 1, "-428|-292": 1, "-427|-292": 1, "-426|-292": 1, "-425|-292": 1,
                "-423|-292": 1, "-559|-497": 1, "-558|-497": 1, "-567|-497": 1, "-566|-497": 1,
                "-565|-497": 1, "-567|-496": 1, "-566|-496": 1, "-565|-496": 1, "-564|-496": 1,
                "-568|-495": 1, "-567|-495": 1, "-566|-495": 1, "-565|-495": 1, "-564|-495": 1,
                "-566|-494": 1, "-565|-494": 1, "-566|-493": 1, "-780|-793": 1, "-168|-858": 1,
                "-167|-858": 1, "-165|-858": 1, "-164|-858": 1, "-163|-858": 1, "-168|-857": 1,
                "-167|-857": 1, "-166|-857": 1, "-165|-857": 1, "-164|-857": 1, "-163|-857": 1,
                "-162|-857": 1, "-166|-856": 1, "-165|-856": 1, "-164|-856": 1, "-163|-856": 1,
                "-166|-855": 1, "-165|-855": 1, "-164|-855": 1, "-163|-855": 1, "-163|-854": 1,
                "-162|-854": 1, "-300|-300": 1, "804|802": 1, "803|803": 1, "804|803": 1, "805|803": 1,
                "806|803": 1, "802|804": 1, "803|804": 1, "804|804": 1, "805|804": 1, "806|804": 1,
                "807|804": 1, "803|805": 1, "804|805": 1, "805|805": 1, "806|805": 1, "807|805": 1,
                "802|806": 1, "803|806": 1, "804|806": 1, "805|806": 1, "806|806": 1, "802|807": 1,
                "803|807": 1, "804|807": 1, "-348|-699": 1, "-347|-699": 1, "-349|-698": 1,
                "-348|-698": 1, "-347|-698": 1, "-349|-697": 1, "-348|-697": 1, "-347|-697": 1,
                "-346|-697": 1, "-348|-696": 1, "-347|-696": 1, "-346|-696": 1, "-348|-695": 1,
                "-347|-695": 1, "-346|-695": 1, "-345|-695": 1, "-348|-694": 1, "-347|-694": 1,
                "-346|-694": 1, "-345|-694": 1, "-348|-693": 1, "-347|-693": 1, "-346|-693": 1,
                "-345|-693": 1, "-542|-642": 1, "-543|-641": 1, "-542|-641": 1, "-541|-641": 1,
                "-543|-640": 1, "-542|-640": 1, "-541|-640": 1, "-540|-640": 1, "-543|-639": 1,
                "-542|-639": 1, "-541|-639": 1, "-542|-638": 1, "84|97": 1, "85|97": 1, "86|97": 1,
                "87|97": 1, "138|122": 1, "136|123": 1, "137|123": 1, "138|123": 1, "139|123": 1,
                "140|123": 1, "141|123": 1, "136|124": 1, "137|124": 1, "138|124": 1, "139|124": 1,
                "140|124": 1, "141|124": 1, "135|125": 1, "136|125": 1, "137|125": 1, "138|125": 1,
                "139|125": 1, "140|125": 1, "141|125": 1, "142|125": 1, "135|126": 1, "136|126": 1,
                "137|126": 1, "138|126": 1, "139|126": 1, "140|126": 1, "141|126": 1, "142|126": 1,
                "143|126": 1, "144|126": 1, "135|127": 1, "136|127": 1, "137|127": 1, "138|127": 1,
                "139|127": 1, "140|127": 1, "141|127": 1, "136|128": 1, "137|128": 1, "138|128": 1,
                "139|128": 1, "140|128": 1, "141|128": 1, "-599|-498": 1, "98|86": 1, "98|87": 1,
                "104|87": 1, "98|88": 1, "99|88": 1, "100|88": 1, "101|88": 1, "104|88": 1,
                "100|89": 1, "101|89": 1, "102|89": 1, "103|89": 1, "104|89": 1, "105|89": 1,
                "106|89": 1, "107|89": 1, "108|89": 1, "101|90": 1, "104|90": 1, "105|90": 1,
                "106|90": 1, "107|90": 1, "104|91": 1, "105|91": 1, "106|91": 1, "109|91": 1,
                "103|92": 1, "104|92": 1, "105|92": 1, "106|92": 1, "107|92": 1, "108|92": 1,
                "109|92": 1, "104|93": 1, "105|93": 1, "106|93": 1, "107|93": 1, "108|93": 1,
                "109|93": 1, "100|94": 1, "104|94": 1, "105|94": 1, "106|94": 1, "107|94": 1,
                "108|94": 1, "109|94": 1, "99|95": 1, "100|95": 1, "101|95": 1, "102|95": 1,
                "103|95": 1, "104|95": 1, "105|95": 1, "106|95": 1, "107|95": 1, "108|95": 1,
                "97|96": 1, "98|96": 1, "99|96": 1, "100|96": 1, "103|96": 1, "104|96": 1,
                "105|96": 1, "106|96": 1, "108|96": 1, "98|97": 1, "99|97": 1, "104|97": 1,
                "108|97": 1, "-820|-829": 1, "-818|-829": 1, "-817|-829": 1, "-816|-829": 1,
                "-820|-828": 1, "-818|-828": 1, "-816|-828": 1, "-820|-827": 1, "-818|-827": 1,
                "-816|-827": 1, "-820|-826": 1, "-819|-826": 1, "-818|-826": 1, "-817|-826": 1,
                "-816|-826": 1, "-818|-825": 1, "-178|-318": 1, "-177|-318": 1, "-178|-317": 1,
                "-177|-317": 1, "-176|-317": 1, "-175|-317": 1, "-174|-317": 1, "-178|-316": 1,
                "-177|-316": 1, "-176|-316": 1, "-175|-316": 1, "-174|-316": 1, "-173|-316": 1,
                "-172|-316": 1, "-177|-315": 1, "-176|-315": 1, "-175|-315": 1, "-174|-315": 1,
                "-173|-315": 1, "-172|-315": 1, "-171|-315": 1, "-174|-314": 1, "-173|-314": 1,
                "-172|-314": 1, "-171|-314": 1, "-170|-314": 1, "-169|-314": 1, "-173|-313": 1,
                "-172|-313": 1, "-171|-313": 1, "-170|-313": 1, "-169|-313": 1, "-168|-313": 1,
                "-171|-312": 1, "-170|-312": 1, "-169|-312": 1, "-168|-312": 1, "-167|-312": 1,
                "-166|-312": 1, "-170|-311": 1, "-169|-311": 1, "-168|-311": 1, "-167|-311": 1,
                "-166|-311": 1, "-165|-311": 1, "-166|-310": 1, "-165|-310": 1, "-19999|-19999": 1,
                "-19998|-19999": 1, "-19997|-19999": 1, "-19999|-19998": 1, "-19998|-19998": 1,
                "-19997|-19998": 1, "-19999|-19997": 1, "-19998|-19997": 1, "-19997|-19997": 1,
                "-19998|-19996": 1, "-19993|-19999": 1, "-19994|-19998": 1, "-19993|-19998": 1,
                "-19992|-19998": 1, "-19991|-19998": 1, "-19992|-19997": 1, "1006|1002": 1,
                "1007|1002": 1, "1008|1002": 1, "1005|1003": 1, "1006|1003": 1, "1007|1003": 1,
                "1008|1003": 1, "1009|1003": 1, "1004|1004": 1, "1005|1004": 1, "1006|1004": 1,
                "1007|1004": 1, "1008|1004": 1, "1009|1004": 1, "1010|1004": 1, "1004|1005": 1,
                "1005|1005": 1, "1006|1005": 1, "1007|1005": 1, "1008|1005": 1, "1009|1005": 1,
                "1010|1005": 1, "1011|1005": 1, "1003|1006": 1, "1004|1006": 1, "1005|1006": 1,
                "1006|1006": 1, "1007|1006": 1, "1008|1006": 1, "1009|1006": 1, "1010|1006": 1,
                "1011|1006": 1, "1004|1007": 1, "1005|1007": 1, "1006|1007": 1, "1007|1007": 1,
                "1008|1007": 1, "1009|1007": 1, "1010|1007": 1, "1011|1007": 1, "1006|1008": 1,
                "1007|1008": 1, "1008|1008": 1, "1009|1008": 1, "1010|1008": 1, "-259|-519": 1,
                "-258|-519": 1, "-257|-519": 1, "-256|-519": 1, "-259|-518": 1, "-258|-518": 1,
                "-257|-518": 1, "-256|-518": 1, "-259|-517": 1, "-258|-517": 1, "-257|-517": 1,
                "-256|-517": 1, "-258|-516": 1, "-257|-516": 1, "81|96": 1, "78|97": 1, "79|97": 1,
                "80|97": 1, "81|97": 1, "82|97": 1, "76|98": 1, "77|98": 1, "78|98": 1, "79|98": 1,
                "81|98": 1, "82|98": 1, "77|99": 1, "79|99": 1, "80|99": 1, "81|99": 1, "77|100": 1,
                "78|100": 1, "79|100": 1, "81|100": 1, "74|101": 1, "75|101": 1, "76|101": 1,
                "77|101": 1, "78|101": 1, "79|101": 1, "80|101": 1, "81|101": 1, "82|101": 1,
                "76|102": 1, "77|102": 1, "78|102": 1, "79|102": 1, "80|102": 1, "81|102": 1,
                "82|102": 1, "83|102": 1, "76|103": 1, "79|103": 1, "80|103": 1, "82|103": 1,
                "76|104": 1, "78|104": 1, "79|104": 1, "80|104": 1, "78|105": 1, "-197|-89": 1,
                "-197|-88": 1, "-196|-88": 1, "-195|-88": 1, "-194|-88": 1, "-195|-87": 1,
                "-194|-87": 1, "-195|-86": 1, "-194|-86": 1, "-193|-86": 1, "-192|-86": 1,
                "-798|-800": 1, "-798|-799": 1, "-799|-798": 1, "-798|-798": 1, "-797|-798": 1,
                "-799|-797": 1, "-798|-797": 1, "-797|-797": 1, "-827|-919": 1, "-827|-918": 1,
                "-826|-918": 1, "-826|-917": 1, "-827|-916": 1, "-826|-916": 1, "-826|-915": 1,
                "-825|-915": 1, "-827|-914": 1, "-826|-914": 1, "-825|-914": 1, "-827|-913": 1,
                "-826|-913": 1, "-826|-912": 1, "-825|-912": 1, "-824|-912": 1, "-823|-912": 1,
                "-827|-911": 1, "-826|-911": 1, "-825|-911": 1, "-828|-910": 1, "-827|-910": 1,
                "-826|-910": 1, "-825|-910": 1, "-822|-910": 1, "-821|-910": 1, "-827|-909": 1,
                "-826|-909": 1, "-825|-909": 1, "-822|-909": 1, "-827|-908": 1, "-826|-908": 1,
                "-825|-908": 1, "-824|-908": 1, "-823|-908": 1, "-822|-908": 1, "-823|-907": 1,
                "-823|-906": 1, "-824|-905": 1, "-823|-905": 1, "-826|-904": 1, "-825|-904": 1,
                "-824|-904": 1, "-826|-903": 1, "-825|-903": 1, "-824|-903": 1, "-823|-903": 1,
                "-826|-902": 1, "-826|-901": 1, "-585|-495": 1, "-584|-495": 1, "-583|-495": 1,
                "-582|-495": 1, "-585|-494": 1, "-584|-494": 1, "-583|-494": 1, "-582|-494": 1,
                "-586|-493": 1, "-585|-493": 1, "-584|-493": 1, "-583|-493": 1, "-582|-493": 1,
                "-586|-492": 1, "-585|-492": 1, "-584|-492": 1, "-583|-492": 1, "-582|-492": 1,
                "-581|-492": 1, "-585|-491": 1, "-584|-491": 1, "-583|-491": 1, "-582|-491": 1,
                "-585|-490": 1, "-584|-490": 1, "-583|-490": 1, "94|90": 1, "94|91": 1, "94|92": 1,
                "94|93": 1, "-198|-399": 1, "-199|-398": 1, "-198|-398": 1, "-197|-398": 1, "-198|-397": 1,
                "-197|-397": 1, "-197|-396": 1, "-471|-473": 1, "-470|-473": 1, "-469|-473": 1,
                "-467|-473": 1, "-471|-472": 1, "-470|-472": 1, "-469|-472": 1, "-467|-472": 1,
                "-471|-471": 1, "-470|-471": 1, "-469|-471": 1, "-468|-471": 1, "-467|-471": 1,
                "-466|-471": 1, "-470|-470": 1, "90|88": 1, "88|89": 1, "89|89": 1, "90|89": 1,
                "92|89": 1, "87|90": 1, "88|90": 1, "89|90": 1, "90|90": 1, "91|90": 1, "92|90": 1,
                "87|91": 1, "88|91": 1, "89|91": 1, "90|91": 1, "91|91": 1, "92|91": 1, "87|92": 1,
                "88|92": 1, "89|92": 1, "90|92": 1, "91|92": 1, "92|92": 1, "87|93": 1, "88|93": 1,
                "89|93": 1, "90|93": 1, "91|93": 1, "91|94": 1, "-286|-723": 1, "-285|-723": 1,
                "-284|-723": 1, "-281|-723": 1, "-289|-722": 1, "-288|-722": 1, "-287|-722": 1,
                "-286|-722": 1, "-285|-722": 1, "-284|-722": 1, "-283|-722": 1, "-282|-722": 1,
                "-281|-722": 1, "-290|-721": 1, "-289|-721": 1, "-288|-721": 1, "-287|-721": 1,
                "-286|-721": 1, "-285|-721": 1, "-284|-721": 1, "-283|-721": 1, "-282|-721": 1,
                "-281|-721": 1, "-289|-720": 1, "-288|-720": 1, "-287|-720": 1, "-286|-720": 1,
                "-285|-720": 1, "-284|-720": 1, "-283|-720": 1, "-282|-720": 1, "-288|-719": 1,
                "-286|-719": 1, "-285|-719": 1, "-284|-719": 1, "-283|-719": 1, "-810|-830": 1,
                "-812|-829": 1, "-811|-829": 1, "-810|-829": 1, "-809|-829": 1, "-812|-828": 1,
                "-811|-828": 1, "-810|-828": 1, "-809|-828": 1, "-812|-827": 1, "-811|-827": 1,
                "-810|-827": 1, "-811|-826": 1, "-548|-499": 1, "-548|-498": 1, "-548|-497": 1,
                "257|92": 1, "258|92": 1, "259|92": 1, "260|92": 1, "255|93": 1, "256|93": 1,
                "257|93": 1, "258|93": 1, "259|93": 1, "260|93": 1, "261|93": 1, "254|94": 1,
                "255|94": 1, "256|94": 1, "257|94": 1, "258|94": 1, "259|94": 1, "260|94": 1,
                "261|94": 1, "262|94": 1, "254|95": 1, "255|95": 1, "256|95": 1, "257|95": 1,
                "258|95": 1, "259|95": 1, "260|95": 1, "261|95": 1, "262|95": 1, "252|96": 1,
                "253|96": 1, "254|96": 1, "255|96": 1, "256|96": 1, "257|96": 1, "258|96": 1,
                "252|97": 1, "253|97": 1, "254|97": 1, "252|98": 1, "253|98": 1, "-664|-665": 1,
                "-663|-665": 1, "-662|-665": 1, "-661|-665": 1, "-665|-664": 1, "-664|-664": 1,
                "-663|-664": 1, "-662|-664": 1, "-661|-664": 1, "-660|-664": 1, "-665|-663": 1,
                "-664|-663": 1, "-663|-663": 1, "-662|-663": 1, "-661|-663": 1, "-660|-663": 1,
                "-659|-663": 1, "-664|-662": 1, "-663|-662": 1, "-662|-662": 1, "-661|-662": 1,
                "-660|-662": 1, "-659|-662": 1, "-664|-661": 1, "-663|-661": 1, "-662|-661": 1,
                "-661|-661": 1, "-660|-661": 1, "-664|-660": 1, "-663|-660": 1, "-662|-660": 1,
                "-661|-660": 1, "-660|-660": 1, "-659|-660": 1, "-658|-660": 1, "-657|-660": 1,
                "-663|-659": 1, "-662|-659": 1, "-661|-659": 1, "-659|-659": 1, "-658|-659": 1,
                "-657|-659": 1, "-1299|-1399": 1, "-1298|-1399": 1, "-1299|-1398": 1, "-1298|-1398": 1,
                "-1297|-1398": 1, "-1296|-1398": 1, "-1295|-1398": 1, "-1294|-1398": 1, "-1299|-1397": 1,
                "-1298|-1397": 1, "-1297|-1397": 1, "-1296|-1397": 1, "-1295|-1397": 1, "-1294|-1397": 1,
                "-1299|-1396": 1, "-1298|-1396": 1, "-1297|-1396": 1, "-1296|-1396": 1, "-1295|-1396": 1,
                "-1294|-1396": 1, "-1298|-1395": 1, "-1297|-1395": 1, "-1296|-1395": 1, "-1295|-1395": 1,
                "-1296|-1394": 1, "-1295|-1394": 1, "-1296|-1393": 1, "-1295|-1393": 1, "-1294|-1393": 1,
                "-787|-790": 1, "-786|-790": 1, "-785|-790": 1, "-780|-790": 1, "-785|-789": 1,
                "-780|-789": 1, "-785|-788": 1, "-780|-788": 1, "-785|-787": 1, "-780|-787": 1,
                "-790|-786": 1, "-789|-786": 1, "-788|-786": 1, "-787|-786": 1, "-786|-786": 1,
                "-785|-786": 1, "-784|-786": 1, "-783|-786": 1, "-782|-786": 1, "-781|-786": 1,
                "-780|-786": 1, "-758|-759": 1, "-757|-759": 1, "-756|-759": 1, "-755|-759": 1,
                "-754|-759": 1, "-756|-758": 1, "-754|-758": 1, "-756|-757": 1, "-754|-757": 1,
                "-759|-756": 1, "-758|-756": 1, "-757|-756": 1, "-756|-756": 1, "-756|-755": 1,
                "-756|-754": 1, "-755|-754": 1, "-754|-754": 1, "-756|-753": 1, "-758|-752": 1,
                "-757|-752": 1, "-756|-752": 1, "71|96": 1, "73|96": 1, "71|97": 1, "72|97": 1,
                "73|97": 1, "69|98": 1, "70|98": 1, "71|98": 1, "72|98": 1, "73|98": 1, "74|98": 1,
                "75|98": 1, "69|99": 1, "70|99": 1, "71|99": 1, "72|99": 1, "73|99": 1, "74|99": 1,
                "75|99": 1, "69|100": 1, "70|100": 1, "71|100": 1, "72|100": 1, "73|100": 1,
                "74|100": 1, "75|100": 1, "70|101": 1, "71|101": 1, "72|101": 1, "73|101": 1,
                "70|102": 1, "-19993|-20098": 1, "-19992|-20098": 1, "-19993|-20097": 1, "-19994|-20096": 1,
                "-19993|-20096": 1, "-19995|-20095": 1, "-19994|-20095": 1, "-19997|-20094": 1,
                "-19996|-20094": 1, "-19995|-20094": 1, "-19997|-20093": 1, "-500|-502": 1,
                "-499|-502": 1, "-500|-501": 1, "-500|-500": 1, "-196|-100": 1, "-196|-99": 1,
                "-198|-98": 1, "-196|-98": 1, "-194|-98": 1, "-193|-98": 1, "-192|-98": 1,
                "-191|-98": 1, "-198|-97": 1, "-185|-97": 1, "-198|-96": 1, "-197|-96": 1,
                "-196|-96": 1, "-195|-96": 1, "-193|-96": 1, "-185|-96": 1, "-184|-96": 1,
                "-196|-95": 1, "-195|-95": 1, "-193|-95": 1, "-192|-95": 1, "-184|-95": 1,
                "-200|-94": 1, "-199|-94": 1, "-198|-94": 1, "-195|-94": 1, "-192|-94": 1,
                "-185|-94": 1, "-184|-94": 1, "-200|-93": 1, "-198|-93": 1, "-197|-93": 1,
                "-195|-93": 1, "-192|-93": 1, "-185|-93": 1, "-187|-92": 1, "-186|-92": 1,
                "-185|-92": 1, "-101|-101": 1, "-100|-101": 1, "-101|-100": 1, "-100|-100": 1,
                "-99|-100": 1, "-100|-95": 1, "-319|-320": 1, "-319|-319": 1, "-318|-319": 1,
                "-319|-318": 1, "-318|-318": 1, "-317|-318": 1, "-319|-317": 1, "-10001|-10011": 1,
                "92|112": 1, "90|113": 1, "91|113": 1, "92|113": 1, "93|113": 1, "89|114": 1,
                "90|114": 1, "91|114": 1, "92|114": 1, "93|114": 1, "94|114": 1, "95|114": 1,
                "96|114": 1, "88|115": 1, "89|115": 1, "90|115": 1, "91|115": 1, "92|115": 1,
                "93|115": 1, "94|115": 1, "95|115": 1, "87|116": 1, "88|116": 1, "89|116": 1,
                "90|116": 1, "88|117": 1, "88|118": 1, "89|118": 1, "62|82": 1, "61|83": 1,
                "62|83": 1, "63|83": 1, "67|83": 1, "61|84": 1, "62|84": 1, "63|84": 1, "64|84": 1,
                "65|84": 1, "66|84": 1, "67|84": 1, "61|85": 1, "62|85": 1, "63|85": 1, "64|85": 1,
                "65|85": 1, "66|85": 1, "62|86": 1, "63|86": 1, "64|86": 1, "62|87": 1, "63|87": 1,
                "64|87": 1, "65|87": 1, "66|87": 1, "67|87": 1, "68|87": 1, "62|88": 1, "63|88": 1,
                "65|88": 1, "66|88": 1, "67|88": 1, "68|88": 1, "97|98": 1, "98|98": 1, "99|98": 1,
                "100|98": 1, "96|99": 1, "97|99": 1, "99|99": 1, "100|99": 1, "101|99": 1, "102|99": 1,
                "96|100": 1, "97|100": 1, "98|100": 1, "99|100": 1, "100|100": 1, "101|100": 1, "102|100": 1,
                "103|100": 1, "96|101": 1, "97|101": 1, "98|101": 1, "99|101": 1, "100|101": 1, "101|101": 1,
                "102|101": 1, "96|102": 1, "97|102": 1, "98|102": 1, "99|102": 1, "100|102": 1, "101|102": 1,
                "102|102": 1, "96|103": 1, "97|103": 1, "98|103": 1, "99|103": 1, "102|103": 1, "98|104": 1,
                "-231|-369": 1, "-230|-369": 1, "-229|-369": 1, "-228|-369": 1, "-227|-369": 1, "-226|-369": 1,
                "-232|-368": 1, "-231|-368": 1, "-230|-368": 1, "-229|-368": 1, "-228|-368": 1, "-227|-368": 1,
                "-226|-368": 1, "-225|-368": 1, "-231|-367": 1, "-230|-367": 1, "-229|-367": 1, "-228|-367": 1,
                "-227|-367": 1, "-226|-367": 1, "-231|-366": 1, "-230|-366": 1, "-229|-366": 1, "-228|-366": 1,
                "-227|-366": 1, "-226|-366": 1, "-225|-366": 1, "-228|-365": 1, "-227|-365": 1, "-226|-365": 1,
                "63|101": 1, "63|102": 1, "61|103": 1, "62|103": 1, "63|103": 1, "64|103": 1, "60|104": 1,
                "61|104": 1, "62|104": 1, "63|104": 1, "57|105": 1, "58|105": 1, "59|105": 1, "60|105": 1,
                "61|105": 1, "62|105": 1, "58|106": 1, "59|106": 1, "60|106": 1, "57|107": 1, "58|107": 1,
                "59|107": 1, "62|107": 1, "57|108": 1, "58|108": 1, "59|108": 1, "60|108": 1, "61|108": 1,
                "62|108": 1, "63|108": 1, "64|108": 1, "57|109": 1, "58|109": 1, "59|109": 1, "61|109": 1,
                "62|109": 1, "63|109": 1, "64|109": 1, "-687|-348": 1, "-686|-348": 1, "-685|-348": 1,
                "-684|-348": 1, "-687|-347": 1, "-686|-347": 1, "-685|-347": 1, "-684|-347": 1, "-683|-347": 1,
                "-687|-346": 1, "-686|-346": 1, "-685|-346": 1, "-684|-346": 1, "-683|-346": 1, "-687|-345": 1,
                "-686|-345": 1, "-685|-345": 1, "-684|-345": 1, "-683|-345": 1, "-686|-344": 1, "-685|-344": 1,
                "-684|-344": 1, "-99|-899": 1, "-97|-899": 1, "-96|-899": 1, "-94|-899": 1, "-93|-899": 1,
                "-99|-898": 1, "-98|-898": 1, "-97|-898": 1, "-96|-898": 1, "-95|-898": 1, "-94|-898": 1,
                "-93|-898": 1, "-98|-897": 1, "-97|-897": 1, "-96|-897": 1, "-95|-897": 1, "-94|-897": 1,
                "-93|-897": 1, "-92|-897": 1, "-99|-896": 1, "-98|-896": 1, "-97|-896": 1, "-96|-896": 1,
                "-95|-896": 1, "-94|-896": 1, "-99|-895": 1, "-98|-895": 1, "-97|-895": 1, "-96|-895": 1,
                "-95|-895": 1, "-94|-895": 1, "-97|-894": 1, "-96|-894": 1, "-94|-894": 1, "-93|-894": 1,
                "120|94": 1, "121|94": 1, "119|95": 1, "120|95": 1, "121|95": 1, "122|95": 1, "123|95": 1,
                "118|96": 1, "119|96": 1, "120|96": 1, "121|96": 1, "122|96": 1, "115|97": 1, "118|97": 1,
                "119|97": 1, "120|97": 1, "121|97": 1, "114|98": 1, "115|98": 1, "116|98": 1, "118|98": 1,
                "120|98": 1, "121|98": 1, "122|98": 1, "113|99": 1, "114|99": 1, "115|99": 1, "118|99": 1,
                "121|99": 1, "122|99": 1, "114|100": 1, "115|100": 1, "116|100": 1, "117|100": 1, "118|100": 1,
                "119|100": 1, "120|100": 1, "121|100": 1, "122|100": 1, "123|100": 1, "114|101": 1, "115|101": 1,
                "116|101": 1, "120|101": 1, "121|101": 1, "122|101": 1, "123|101": 1, "114|102": 1, "115|102": 1,
                "116|102": 1, "119|102": 1, "120|102": 1, "121|102": 1, "122|102": 1, "123|102": 1, "114|103": 1,
                "115|103": 1, "118|103": 1, "119|103": 1, "120|103": 1, "121|103": 1, "123|103": 1, "113|104": 1,
                "114|104": 1, "115|104": 1, "118|104": 1, "119|104": 1, "120|104": 1, "121|104": 1, "115|105": 1,
                "116|105": 1, "115|106": 1, "116|106": 1, "117|106": 1, "118|106": 1, "114|107": 1, "115|107": 1,
                "116|107": 1, "117|107": 1, "118|107": 1, "113|108": 1, "114|108": 1, "115|108": 1, "116|108": 1,
                "117|108": 1, "118|108": 1, "120|110": 1, "121|110": 1, "118|111": 1, "119|111": 1, "120|111": 1,
                "121|111": 1, "122|111": 1, "120|112": 1, "121|112": 1, "122|112": 1, "117|113": 1, "118|113": 1,
                "119|113": 1, "120|113": 1, "121|113": 1, "122|113": 1, "119|114": 1, "120|114": 1, "121|114": 1,
                "122|114": 1, "123|114": 1, "126|114": 1, "127|114": 1, "116|115": 1, "118|115": 1, "119|115": 1,
                "120|115": 1, "121|115": 1, "122|115": 1, "114|116": 1, "116|116": 1, "117|116": 1, "118|116": 1,
                "119|116": 1, "120|116": 1, "121|116": 1, "122|116": 1, "114|117": 1, "115|117": 1, "116|117": 1,
                "117|117": 1, "118|117": 1, "120|117": 1, "122|117": 1, "51|73": 1, "53|74": 1, "54|74": 1, "51|75": 1,
                "52|75": 1, "53|75": 1, "54|75": 1, "55|75": 1, "56|75": 1, "44|76": 1, "47|76": 1, "48|76": 1,
                "52|76": 1, "53|76": 1, "54|76": 1, "55|76": 1, "56|76": 1, "44|77": 1, "45|77": 1, "47|77": 1,
                "48|77": 1, "49|77": 1, "51|77": 1, "52|77": 1, "53|77": 1, "54|77": 1, "55|77": 1, "45|78": 1,
                "46|78": 1, "47|78": 1, "48|78": 1, "49|78": 1, "52|78": 1, "53|78": 1, "54|78": 1, "46|79": 1,
                "47|79": 1, "48|79": 1, "53|79": 1, "54|79": 1, "47|80": 1, "48|80": 1, "49|80": 1, "50|80": 1,
                "51|80": 1, "53|80": 1, "54|80": 1, "45|81": 1, "46|81": 1, "47|81": 1, "48|81": 1, "49|81": 1,
                "50|81": 1, "51|81": 1, "52|81": 1, "53|81": 1, "54|81": 1, "56|81": 1, "46|82": 1, "47|82": 1,
                "48|82": 1, "49|82": 1, "50|82": 1, "51|82": 1, "54|82": 1, "55|82": 1, "56|82": 1, "49|83": 1,
                "50|83": 1, "51|83": 1, "50|84": 1, "51|84": 1, "52|84": 1, "53|84": 1, "50|85": 1, "51|85": 1,
                "52|85": 1, "53|85": 1, "54|85": 1, "53|86": 1, "54|86": 1, "55|86": 1, "97|81": 1, "98|81": 1,
                "99|81": 1, "90|82": 1, "96|82": 1, "97|82": 1, "98|82": 1, "99|82": 1, "100|82": 1, "90|83": 1,
                "95|83": 1, "96|83": 1, "97|83": 1, "98|83": 1, "99|83": 1, "90|84": 1, "91|84": 1, "92|84": 1,
                "93|84": 1, "94|84": 1, "95|84": 1, "96|84": 1, "97|84": 1, "98|84": 1, "92|85": 1, "93|85": 1,
                "94|85": 1, "95|85": 1, "96|85": 1, "97|85": 1, "98|85": 1, "90|86": 1, "91|86": 1, "92|86": 1,
                "93|86": 1, "94|86": 1, "95|86": 1, "96|86": 1, "97|86": 1, "92|87": 1, "94|87": 1, "92|88": 1,
                "-814|-814": 1, "-813|-814": 1, "-812|-814": 1, "-811|-814": 1, "-814|-813": 1, "-813|-813": 1,
                "-812|-813": 1, "-811|-813": 1, "-814|-812": 1, "-813|-812": 1, "-812|-812": 1, "-811|-812": 1,
                "-814|-811": 1, "-813|-811": 1, "-812|-811": 1, "-811|-811": 1, "-812|-810": 1, "-204|-830": 1,
                "-206|-829": 1, "-205|-829": 1, "-204|-829": 1, "-203|-829": 1, "-202|-829": 1, "-199|-829": 1,
                "-209|-828": 1, "-208|-828": 1, "-207|-828": 1, "-206|-828": 1, "-203|-828": 1, "-202|-828": 1,
                "-200|-828": 1, "-199|-828": 1, "-198|-828": 1, "-210|-827": 1, "-209|-827": 1, "-208|-827": 1,
                "-207|-827": 1, "-206|-827": 1, "-205|-827": 1, "-202|-827": 1, "-200|-827": 1, "-199|-827": 1,
                "-198|-827": 1, "-210|-826": 1, "-209|-826": 1, "-208|-826": 1, "-207|-826": 1, "-206|-826": 1,
                "-205|-826": 1, "-202|-826": 1, "-201|-826": 1, "-200|-826": 1, "-199|-826": 1, "-209|-825": 1,
                "-208|-825": 1, "-207|-825": 1, "-206|-825": 1, "-205|-825": 1, "-204|-825": 1, "-203|-825": 1,
                "-202|-825": 1, "-201|-825": 1, "-200|-825": 1, "-199|-825": 1, "-198|-825": 1, "-207|-824": 1,
                "-206|-824": 1, "-202|-824": 1, "-201|-824": 1, "-200|-824": 1, "-199|-824": 1, "-201|-823": 1,
                "-200|-823": 1, "-199|-823": 1, "-200|-822": 1, "59|84": 1, "55|85": 1, "56|85": 1, "57|85": 1,
                "59|85": 1, "60|85": 1, "56|86": 1, "57|86": 1, "58|86": 1, "59|86": 1, "57|87": 1, "58|87": 1,
                "59|87": 1, "60|87": 1, "55|88": 1, "56|88": 1, "57|88": 1, "58|88": 1, "59|88": 1, "60|88": 1,
                "56|89": 1, "57|89": 1, "58|89": 1, "59|89": 1, "57|90": 1, "58|90": 1, "59|90": 1, "56|91": 1,
                "57|91": 1, "58|91": 1, "59|91": 1, "58|92": 1, "59|92": 1, "60|92": 1, "59|93": 1, "136|113": 1,
                "137|113": 1, "135|114": 1, "136|114": 1, "137|114": 1, "138|114": 1, "139|114": 1, "133|115": 1,
                "134|115": 1, "135|115": 1, "136|115": 1, "137|115": 1, "138|115": 1, "139|115": 1, "132|116": 1,
                "133|116": 1, "134|116": 1, "135|116": 1, "136|116": 1, "137|116": 1, "138|116": 1, "139|116": 1,
                "132|117": 1, "133|117": 1, "134|117": 1, "135|117": 1, "136|117": 1, "137|117": 1, "138|117": 1,
                "139|117": 1, "136|118": 1, "137|118": 1, "138|118": 1, "106|75": 1, "108|75": 1, "109|75": 1,
                "104|76": 1, "105|76": 1, "106|76": 1, "107|76": 1, "108|76": 1, "109|76": 1, "110|76": 1, "114|76": 1,
                "108|77": 1, "109|77": 1, "110|77": 1, "111|77": 1, "112|77": 1, "113|77": 1, "114|77": 1, "115|77": 1,
                "109|78": 1, "110|78": 1, "111|78": 1, "112|78": 1, "113|78": 1, "114|78": 1, "115|78": 1, "116|78": 1,
                "117|78": 1, "112|79": 1, "113|79": 1, "114|79": 1, "115|79": 1, "116|79": 1, "117|79": 1, "118|79": 1,
                "119|79": 1, "113|80": 1, "114|80": 1, "115|80": 1, "116|80": 1, "113|81": 1, "114|81": 1, "115|81": 1,
                "114|82": 1, "115|82": 1, "116|82": 1, "117|82": 1, "116|83": 1, "117|83": 1, "88|106": 1, "88|107": 1,
                "88|108": 1, "87|109": 1, "88|109": 1, "85|110": 1, "86|110": 1, "87|110": 1, "88|110": 1, "89|110": 1,
                "86|111": 1, "87|111": 1, "89|111": 1, "90|111": 1, "84|112": 1, "85|112": 1, "86|112": 1, "87|112": 1,
                "85|113": 1, "86|113": 1, "79|114": 1, "81|114": 1, "82|114": 1, "85|114": 1, "75|115": 1, "76|115": 1,
                "78|115": 1, "79|115": 1, "80|115": 1, "81|115": 1, "82|115": 1, "83|115": 1, "84|115": 1, "85|115": 1,
                "75|116": 1, "76|116": 1, "77|116": 1, "78|116": 1, "79|116": 1, "80|116": 1, "81|116": 1, "82|116": 1,
                "83|116": 1, "84|116": 1, "85|116": 1, "86|116": 1, "79|117": 1, "80|117": 1, "81|117": 1, "82|117": 1,
                "83|117": 1, "84|117": 1, "85|117": 1, "80|118": 1, "81|118": 1, "83|118": 1, "85|118": 1, "80|119": 1,
                "97|112": 1, "97|113": 1, "99|113": 1, "101|113": 1, "102|113": 1, "103|113": 1, "104|113": 1, "97|114": 1,
                "98|114": 1, "99|114": 1, "100|114": 1, "101|114": 1, "104|114": 1, "97|115": 1, "98|115": 1, "99|115": 1,
                "100|115": 1, "101|115": 1, "103|115": 1, "104|115": 1, "97|116": 1, "98|116": 1, "99|116": 1,
                "100|116": 1, "101|116": 1, "104|116": 1, "96|117": 1, "97|117": 1, "98|117": 1, "99|117": 1,
                "100|117": 1, "101|117": 1, "103|117": 1, "104|117": 1, "98|118": 1, "99|118": 1, "101|118": 1,
                "104|118": 1, "98|119": 1, "101|119": 1, "102|119": 1, "103|119": 1, "104|119": 1, "98|120": 1,
                "-18|-26": 1, "501|51": 1, "502|51": 1, "500|52": 1, "501|52": 1, "502|52": 1, "503|52": 1, "504|52": 1,
                "499|53": 1, "500|53": 1, "501|53": 1, "502|53": 1, "503|53": 1, "504|53": 1, "505|53": 1, "506|53": 1,
                "500|54": 1, "501|54": 1, "502|54": 1, "503|54": 1, "504|54": 1, "505|54": 1, "506|54": 1, "507|54": 1,
                "500|55": 1, "501|55": 1, "502|55": 1, "503|55": 1, "504|55": 1, "505|55": 1, "506|55": 1, "507|55": 1,
                "500|56": 1, "501|56": 1, "502|56": 1, "503|56": 1, "504|56": 1, "505|56": 1, "506|56": 1, "507|56": 1,
                "501|57": 1, "502|57": 1, "503|57": 1, "504|57": 1, "505|57": 1, "506|57": 1, "507|57": 1, "508|57": 1,
                "100|103": 1, "100|104": 1, "104|104": 1, "100|105": 1, "101|105": 1, "102|105": 1, "103|105": 1,
                "104|105": 1, "109|105": 1, "111|105": 1, "98|106": 1, "99|106": 1, "100|106": 1, "101|106": 1,
                "102|106": 1, "103|106": 1, "104|106": 1, "105|106": 1, "106|106": 1, "108|106": 1, "109|106": 1,
                "110|106": 1, "111|106": 1, "112|106": 1, "113|106": 1, "98|107": 1, "100|107": 1, "102|107": 1,
                "106|107": 1, "107|107": 1, "108|107": 1, "109|107": 1, "110|107": 1, "111|107": 1, "112|107": 1,
                "113|107": 1, "102|108": 1, "103|108": 1, "104|108": 1, "105|108": 1, "106|108": 1, "107|108": 1,
                "108|108": 1, "109|108": 1, "110|108": 1, "111|108": 1, "112|108": 1, "101|109": 1, "102|109": 1,
                "103|109": 1, "104|109": 1, "105|109": 1, "106|109": 1, "108|109": 1, "109|109": 1, "110|109": 1,
                "111|109": 1, "101|110": 1, "102|110": 1, "103|110": 1, "104|110": 1, "105|110": 1, "109|110": 1,
                "110|110": 1, "101|111": 1, "102|111": 1, "103|111": 1, "104|111": 1, "105|111": 1, "109|111": 1,
                "110|111": 1, "111|111": 1, "102|112": 1, "110|112": 1, "-225|-541": 1, "-224|-541": 1, "-223|-541": 1,
                "-229|-540": 1, "-226|-540": 1, "-225|-540": 1, "-224|-540": 1, "-230|-539": 1, "-229|-539": 1,
                "-228|-539": 1, "-227|-539": 1, "-226|-539": 1, "-225|-539": 1, "-224|-539": 1, "-230|-538": 1,
                "-229|-538": 1, "-228|-538": 1, "-227|-538": 1, "-226|-538": 1, "-225|-538": 1, "-224|-538": 1,
                "-228|-537": 1, "-227|-537": 1, "-226|-537": 1, "-225|-537": 1, "-256|-29": 1, "-258|-28": 1,
                "-257|-28": 1, "-256|-28": 1, "-255|-28": 1, "-254|-28": 1, "-253|-28": 1, "-259|-27": 1,
                "-258|-27": 1, "-257|-27": 1, "-256|-27": 1, "-255|-27": 1, "-254|-27": 1, "-258|-26": 1,
                "-257|-26": 1, "-256|-26": 1, "-255|-26": 1, "-257|-25": 1, "-256|-25": 1, "-105|-95": 1,
                "108|113": 1, "109|113": 1, "110|113": 1, "111|113": 1, "112|113": 1, "113|113": 1, "107|114": 1,
                "108|114": 1, "109|114": 1, "110|114": 1, "111|114": 1, "112|114": 1, "113|114": 1, "114|114": 1,
                "105|115": 1, "106|115": 1, "107|115": 1, "108|115": 1, "109|115": 1, "110|115": 1, "111|115": 1,
                "112|115": 1, "113|115": 1, "114|115": 1, "107|116": 1, "108|116": 1, "109|116": 1, "110|116": 1,
                "111|116": 1, "112|116": 1, "113|116": 1, "114|116": 1, "108|117": 1, "109|117": 1, "110|117": 1,
                "111|117": 1, "112|117": 1, "110|118": 1, "111|118": 1, "-508|-377": 1, "-507|-377": 1, "-509|-376": 1,
                "-508|-376": 1, "-507|-376": 1, "-508|-375": 1, "51|108": 1, "53|108": 1, "54|108": 1, "49|109": 1,
                "50|109": 1, "51|109": 1, "52|109": 1, "53|109": 1, "54|109": 1, "49|110": 1, "50|110": 1, "51|110": 1,
                "52|110": 1, "53|110": 1, "54|110": 1, "50|111": 1, "51|111": 1, "52|111": 1, "53|111": 1, "51|112": 1,
                "52|112": 1, "50|113": 1, "51|113": 1, "52|113": 1, "53|113": 1, "54|113": 1, "-250|-51": 1, "-251|-50": 1,
                "-250|-50": 1, "79|105": 1, "79|106": 1, "80|106": 1, "78|107": 1, "79|107": 1, "80|107": 1, "81|107": 1,
                "82|107": 1, "77|108": 1, "78|108": 1, "79|108": 1, "80|108": 1, "81|108": 1, "82|108": 1, "83|108": 1,
                "77|109": 1, "78|109": 1, "79|109": 1, "80|109": 1, "81|109": 1, "82|109": 1, "76|110": 1, "77|110": 1,
                "78|110": 1, "79|110": 1, "80|110": 1, "81|110": 1, "82|110": 1, "83|110": 1, "84|110": 1, "78|111": 1,
                "79|111": 1, "80|111": 1, "81|111": 1, "82|111": 1, "100|73": 1, "101|73": 1, "102|73": 1, "98|74": 1,
                "100|74": 1, "101|74": 1, "102|74": 1, "97|75": 1, "98|75": 1, "99|75": 1, "100|75": 1, "101|75": 1,
                "102|75": 1, "103|75": 1, "104|75": 1, "97|76": 1, "98|76": 1, "99|76": 1, "102|76": 1, "103|76": 1,
                "94|77": 1, "95|77": 1, "96|77": 1, "97|77": 1, "98|77": 1, "102|77": 1, "95|78": 1, "96|78": 1,
                "97|78": 1, "98|78": 1, "99|78": 1, "102|78": 1, "103|78": 1, "104|78": 1, "94|79": 1, "95|79": 1,
                "96|79": 1, "97|79": 1, "99|79": 1, "103|79": 1, "104|79": 1, "105|79": 1, "94|80": 1, "95|80": 1,
                "96|80": 1, "97|80": 1, "103|80": 1, "104|80": 1, "105|80": 1, "96|81": 1, "103|81": 1, "104|81": 1,
                "105|81": 1, "103|82": 1, "104|82": 1, "102|83": 1, "103|83": 1, "104|83": 1, "101|84": 1,
                "102|84": 1, "103|84": 1, "100|85": 1, "101|85": 1, "102|85": 1, "103|85": 1, "101|86": 1,
                "94|105": 1, "94|106": 1, "95|106": 1, "96|106": 1, "93|107": 1, "94|107": 1, "95|107": 1,
                "96|107": 1, "97|107": 1, "92|108": 1, "93|108": 1, "94|108": 1, "95|108": 1, "96|108": 1,
                "97|108": 1, "94|109": 1, "95|109": 1, "96|109": 1, "97|109": 1, "98|109": 1, "95|110": 1,
                "96|110": 1, "97|110": 1, "94|111": 1, "95|111": 1, "96|111": 1, "97|111": 1, "98|111": 1,
                "95|112": 1, "-530|-169": 1, "-529|-169": 1, "-532|-168": 1, "-531|-168": 1, "-530|-168": 1,
                "-529|-168": 1, "-530|-167": 1, "-529|-167": 1, "-528|-167": 1, "-531|-166": 1, "-530|-166": 1,
                "-529|-166": 1, "-530|-165": 1, "63|75": 1, "64|75": 1, "65|75": 1, "63|76": 1, "64|76": 1,
                "65|76": 1, "66|76": 1, "67|76": 1, "63|77": 1, "64|77": 1, "65|77": 1, "66|77": 1, "67|77": 1,
                "64|78": 1, "65|78": 1, "66|78": 1, "67|78": 1, "68|78": 1, "64|79": 1, "65|79": 1, "66|79": 1,
                "67|79": 1, "68|79": 1, "63|80": 1, "64|80": 1, "65|80": 1, "66|80": 1, "67|80": 1, "68|80": 1,
                "69|80": 1, "70|80": 1, "64|81": 1, "65|81": 1, "66|81": 1, "67|81": 1, "68|81": 1, "69|81": 1,
                "65|82": 1, "65|83": 1, "-90|-90": 1, "70|103": 1, "72|103": 1, "74|103": 1, "75|103": 1,
                "69|104": 1, "70|104": 1, "71|104": 1, "72|104": 1, "73|104": 1, "74|104": 1, "68|105": 1,
                "69|105": 1, "70|105": 1, "71|105": 1, "72|105": 1, "73|105": 1, "74|105": 1, "69|106": 1,
                "70|106": 1, "71|106": 1, "72|106": 1, "73|106": 1, "71|107": 1, "72|107": 1, "73|107": 1,
                "74|107": 1, "70|108": 1, "71|108": 1, "73|108": 1, "73|109": 1, "74|109": 1, "75|109": 1,
                "74|110": 1, "75|110": 1, "120|79": 1, "121|79": 1, "122|79": 1, "123|79": 1, "126|79": 1,
                "127|79": 1, "119|80": 1, "120|80": 1, "121|80": 1, "122|80": 1, "123|80": 1, "124|80": 1,
                "125|80": 1, "126|80": 1, "127|80": 1, "119|81": 1, "120|81": 1, "121|81": 1, "122|81": 1,
                "123|81": 1, "124|81": 1, "125|81": 1, "126|81": 1, "118|82": 1, "119|82": 1, "120|82": 1,
                "121|82": 1, "122|82": 1, "123|82": 1, "124|82": 1, "125|82": 1, "126|82": 1, "118|83": 1,
                "119|83": 1, "120|83": 1, "122|83": 1, "123|83": 1, "124|83": 1, "118|84": 1, "119|84": 1,
                "120|84": 1, "122|84": 1, "123|84": 1, "124|84": 1, "117|85": 1, "118|85": 1, "119|85": 1,
                "120|85": 1, "122|85": 1, "124|85": 1, "126|85": 1, "127|85": 1, "129|85": 1, "117|86": 1,
                "118|86": 1, "119|86": 1, "120|86": 1, "121|86": 1, "122|86": 1, "123|86": 1, "124|86": 1,
                "125|86": 1, "126|86": 1, "127|86": 1, "128|86": 1, "129|86": 1, "119|87": 1, "121|87": 1,
                "122|87": 1, "123|87": 1, "118|88": 1, "119|88": 1, "120|88": 1, "121|88": 1, "122|88": 1,
                "119|89": 1, "120|89": 1, "121|89": 1, "102|128": 1, "101|129": 1, "102|129": 1, "103|129": 1,
                "102|130": 1, "103|130": 1, "103|131": 1, "104|131": 1, "103|132": 1, "104|132": 1,
                "105|132": 1, "101|133": 1, "102|133": 1, "103|133": 1, "104|133": 1, "105|133": 1,
                "106|133": 1, "107|133": 1, "101|134": 1, "102|134": 1, "103|134": 1, "104|134": 1,
                "105|134": 1, "106|134": 1, "107|134": 1, "108|134": 1, "100|135": 1, "101|135": 1,
                "102|135": 1, "103|135": 1, "104|135": 1, "105|135": 1, "106|135": 1, "107|135": 1,
                "108|135": 1, "100|136": 1, "101|136": 1, "102|136": 1, "103|136": 1, "104|136": 1,
                "105|136": 1, "106|136": 1, "107|136": 1, "108|136": 1, "101|137": 1, "106|137": 1,
                "107|137": 1, "-10004|-10005": 1, "-10001|-10005": 1, "-10004|-10004": 1, "-10001|-10004": 1,
                "-10004|-10003": 1, "-10003|-10003": 1, "-10002|-10003": 1, "-10000|-10003": 1, "-10004|-10002": 1,
                "-10002|-10002": 1, "-10001|-10002": 1, "-10003|-10001": 1, "-922|-179": 1, "-921|-179": 1,
                "-921|-178": 1, "-921|-177": 1, "-920|-179": 1, "-920|-178": 1, "-920|-177": 1, "-919|-178": 1,
                "-919|-177": 1, "-919|-176": 1, "-918|-177": 1, "-918|-176": 1, "-846|-380": 1, "-848|-379": 1,
                "-847|-379": 1, "-846|-379": 1, "-850|-378": 1, "-849|-378": 1, "-848|-378": 1, "-847|-378": 1,
                "-846|-378": 1, "-845|-378": 1, "-843|-378": 1, "-842|-378": 1, "-850|-377": 1, "-849|-377": 1,
                "-846|-377": 1, "-845|-377": 1, "-844|-377": 1, "-843|-377": 1, "-842|-377": 1, "-841|-377": 1,
                "-849|-376": 1, "-848|-376": 1, "-846|-376": 1, "-845|-376": 1, "-844|-376": 1, "-841|-376": 1,
                "-840|-376": 1, "-848|-375": 1, "-845|-375": 1, "-844|-375": 1, "-843|-375": 1, "-842|-375": 1,
                "-841|-375": 1, "-840|-375": 1, "-848|-374": 1, "-847|-374": 1, "-846|-374": 1, "-845|-374": 1,
                "-844|-374": 1, "-847|-373": 1, "-846|-373": 1, "-845|-373": 1, "-844|-373": 1, "-224|-224": 1,
                "83|93": 1, "84|93": 1, "85|93": 1, "85|94": 1, "86|94": 1, "87|94": 1, "85|95": 1, "86|95": 1,
                "87|95": 1, "88|95": 1, "89|95": 1, "90|95": 1, "85|96": 1, "-645|-148": 1, "-643|-148": 1,
                "-642|-148": 1, "-645|-147": 1, "-644|-147": 1, "-643|-147": 1, "-646|-146": 1, "-645|-146": 1,
                "-644|-146": 1, "-647|-145": 1, "-646|-145": 1, "-645|-145": 1, "-648|-144": 1, "-647|-144": 1,
                "-646|-144": 1, "-645|-144": 1, "-647|-143": 1, "-340|-718": 1, "-340|-717": 1, "-339|-718": 1,
                "-338|-719": 1, "-338|-718": 1, "-337|-718": 1, "-336|-719": 1, "-336|-718": 1, "-335|-720": 1,
                "-335|-719": 1, "-335|-718": 1, "-334|-718": 1, "-237|-389": 1, "-238|-388": 1, "-237|-388": 1,
                "-236|-388": 1, "-239|-387": 1, "-238|-387": 1, "-237|-387": 1, "-236|-387": 1, "-238|-386": 1,
                "-237|-386": 1, "-236|-386": 1, "-235|-386": 1, "-234|-386": 1, "-233|-386": 1, "-232|-386": 1,
                "-237|-385": 1, "-236|-385": 1, "-235|-385": 1, "-234|-385": 1, "-237|-384": 1, "-236|-384": 1,
                "-333|-712": 1, "-334|-714": 1, "-334|-713": 1, "-334|-712": 1, "-334|-711": 1, "-335|-716": 1,
                "-335|-715": 1, "-335|-714": 1, "-335|-713": 1, "-336|-716": 1, "-336|-715": 1, "-336|-714": 1,
                "-337|-715": 1, "-337|-714": 1, "-338|-714": 1, "-340|-715": 1, "-340|-714": 1, "-340|-713": 1,
                "80|74": 1, "81|74": 1, "80|75": 1, "81|75": 1, "82|75": 1, "80|76": 1, "81|76": 1, "82|76": 1,
                "83|76": 1, "87|76": 1, "79|77": 1, "80|77": 1, "81|77": 1, "83|77": 1, "84|77": 1, "85|77": 1,
                "86|77": 1, "87|77": 1, "78|78": 1, "79|78": 1, "80|78": 1, "81|78": 1, "84|78": 1, "85|78": 1,
                "86|78": 1, "87|78": 1, "78|79": 1, "86|79": 1, "87|79": 1, "88|79": 1, "87|80": 1, "88|80": 1,
                "88|81": 1, "88|82": 1, "89|82": 1, "77|87": 1, "77|88": 1, "78|88": 1, "70|89": 1, "71|89": 1,
                "72|89": 1, "73|89": 1, "76|89": 1, "77|89": 1, "78|89": 1, "70|90": 1, "71|90": 1, "72|90": 1,
                "73|90": 1, "75|90": 1, "76|90": 1, "77|90": 1, "71|91": 1, "72|91": 1, "73|91": 1, "75|91": 1,
                "76|91": 1, "77|91": 1, "71|92": 1, "72|92": 1, "73|92": 1, "74|92": 1, "75|92": 1, "76|92": 1,
                "77|92": 1, "72|93": 1, "73|93": 1, "74|93": 1, "75|93": 1, "76|93": 1, "77|93": 1, "78|93": 1,
                "72|94": 1, "73|94": 1, "74|94": 1, "75|94": 1, "76|94": 1, "77|94": 1, "73|95": 1, "74|95": 1,
                "75|95": 1, "76|95": 1, "77|95": 1, "75|96": 1, "76|96": 1, "76|97": 1, "77|97": 1,
                "-738|-230": 1, "-737|-230": 1, "-736|-230": 1, "-739|-229": 1, "-738|-229": 1, "-737|-229": 1,
                "-736|-229": 1, "-735|-229": 1, "-740|-228": 1, "-739|-228": 1, "-738|-228": 1, "-737|-228": 1,
                "-736|-228": 1, "-740|-227": 1, "-737|-227": 1, "-736|-227": 1, "-736|-226": 1, "91|95": 1,
                "92|95": 1, "93|95": 1, "90|96": 1, "91|96": 1, "92|96": 1, "93|96": 1, "94|96": 1, "89|97": 1,
                "90|97": 1, "91|97": 1, "92|97": 1, "93|97": 1, "94|97": 1, "90|98": 1, "91|98": 1, "92|98": 1,
                "93|98": 1, "94|98": 1, "57|110": 1, "56|111": 1, "57|111": 1, "58|111": 1, "60|111": 1, "55|112": 1,
                "56|112": 1, "57|112": 1, "58|112": 1, "59|112": 1, "60|112": 1, "61|112": 1, "55|113": 1, "56|113": 1,
                "57|113": 1, "58|113": 1, "59|113": 1, "60|113": 1, "61|113": 1, "62|113": 1, "56|114": 1, "57|114": 1,
                "58|114": 1, "59|114": 1, "60|114": 1, "57|115": 1, "-717|-719": 1, "-718|-718": 1, "-717|-718": 1,
                "-716|-718": 1, "-715|-718": 1, "-719|-717": 1, "-718|-717": 1, "-717|-717": 1, "-716|-717": 1,
                "-719|-716": 1, "-718|-716": 1, "-717|-716": 1, "-718|-715": 1, "-717|-715": 1, "-716|-715": 1,
                "-717|-714": 1, "66|101": 1, "69|101": 1, "66|102": 1, "67|102": 1, "68|102": 1, "69|102": 1,
                "65|103": 1, "66|103": 1, "67|103": 1, "66|104": 1, "67|104": 1, "65|105": 1, "66|105": 1,
                "67|105": 1, "64|106": 1, "65|106": 1, "66|106": 1, "65|107": 1, "66|107": 1, "65|108": 1,
                "66|108": 1, "67|108": 1, "65|109": 1, "66|109": 1, "67|109": 1, "68|109": 1, "69|109": 1,
                "70|109": 1, "65|110": 1, "66|110": 1, "67|110": 1, "68|110": 1, "65|111": 1, "66|111": 1,
                "67|111": 1, "68|111": 1, "65|112": 1, "66|112": 1, "67|112": 1, "68|112": 1, "69|112": 1,
                "67|113": 1, "68|113": 1, "69|113": 1, "68|114": 1, "69|114": 1, "70|114": 1, "69|115": 1,
                "70|115": 1, "71|115": 1, "72|115": 1, "68|116": 1, "69|116": 1, "70|116": 1, "71|116": 1,
                "72|116": 1, "73|116": 1, "71|117": 1, "72|117": 1, "73|117": 1, "108|98": 1, "109|98": 1,
                "110|98": 1, "111|98": 1, "112|98": 1, "107|99": 1, "108|99": 1, "109|99": 1, "110|99": 1,
                "111|99": 1, "112|99": 1, "104|100": 1, "105|100": 1, "106|100": 1, "107|100": 1, "108|100": 1,
                "109|100": 1, "110|100": 1, "111|100": 1, "112|100": 1, "108|101": 1, "109|101": 1, "110|101": 1,
                "111|101": 1, "112|101": 1, "110|102": 1, "-177|-277": 1, "-172|-277": 1, "-177|-276": 1, "-175|-276": 1,
                "-173|-276": 1, "-172|-276": 1, "-171|-276": 1, "-177|-275": 1, "-176|-275": 1, "-175|-275": 1,
                "-173|-275": 1, "-172|-275": 1, "-178|-274": 1, "-177|-274": 1, "-175|-274": 1, "-174|-274": 1,
                "-173|-274": 1, "-172|-274": 1, "-171|-274": 1, "-177|-273": 1, "-173|-273": 1, "-172|-273": 1,
                "-178|-272": 1, "-177|-272": 1, "-175|-272": 1, "-173|-272": 1, "-172|-272": 1, "-171|-272": 1,
                "-178|-271": 1, "-177|-271": 1, "-176|-271": 1, "-175|-271": 1, "-174|-271": 1, "-173|-271": 1,
                "-178|-270": 1, "-176|-270": 1, "-176|-269": 1, "-176|-268": 1, "36|96": 1, "37|96": 1, "38|96": 1,
                "44|96": 1, "45|96": 1, "46|96": 1, "47|96": 1, "35|97": 1, "36|97": 1, "37|97": 1, "38|97": 1,
                "39|97": 1, "40|97": 1, "43|97": 1, "44|97": 1, "45|97": 1, "46|97": 1, "47|97": 1, "35|98": 1,
                "36|98": 1, "37|98": 1, "38|98": 1, "39|98": 1, "40|98": 1, "41|98": 1, "42|98": 1, "43|98": 1,
                "44|98": 1, "45|98": 1, "37|99": 1, "38|99": 1, "39|99": 1, "43|99": 1, "44|99": 1, "38|100": 1,
                "-2359|-2359": 1, "109|89": 1, "110|89": 1, "111|89": 1, "111|90": 1, "112|90": 1, "113|90": 1,
                "116|90": 1, "120|90": 1, "121|90": 1, "111|91": 1, "112|91": 1, "113|91": 1, "115|91": 1,
                "116|91": 1, "117|91": 1, "118|91": 1, "119|91": 1, "120|91": 1, "121|91": 1, "122|91": 1,
                "123|91": 1, "111|92": 1, "113|92": 1, "114|92": 1, "115|92": 1, "116|92": 1, "120|92": 1,
                "121|92": 1, "122|92": 1, "123|92": 1, "110|93": 1, "111|93": 1, "113|93": 1, "114|93": 1,
                "119|93": 1, "120|93": 1, "121|93": 1, "110|94": 1, "111|94": 1, "112|94": 1, "113|94": 1,
                "114|94": 1, "115|94": 1, "116|94": 1, "117|94": 1, "112|95": 1, "113|95": 1, "114|95": 1,
                "115|95": 1, "116|95": 1, "111|96": 1, "112|96": 1, "112|97": 1, "97|90": 1, "97|91": 1,
                "98|91": 1, "-599|-449": 1, "-598|-449": 1, "-597|-449": 1, "-596|-449": 1, "-599|-448": 1,
                "-598|-448": 1, "-597|-448": 1, "-596|-448": 1, "-595|-448": 1, "-594|-448": 1, "-598|-447": 1,
                "-597|-447": 1, "-208|-789": 1, "-207|-789": 1, "-206|-789": 1, "-209|-788": 1, "-208|-788": 1,
                "-207|-788": 1, "-206|-788": 1, "-208|-787": 1, "-207|-787": 1, "77|80": 1, "78|80": 1, "79|80": 1,
                "80|80": 1, "76|81": 1, "77|81": 1, "78|81": 1, "79|81": 1, "76|82": 1, "77|82": 1, "78|82": 1,
                "74|83": 1, "75|83": 1, "76|83": 1, "77|83": 1, "78|83": 1, "70|84": 1, "71|84": 1, "72|84": 1,
                "73|84": 1, "74|84": 1, "75|84": 1, "76|84": 1, "77|84": 1, "69|85": 1, "70|85": 1, "71|85": 1,
                "72|85": 1, "73|85": 1, "74|85": 1, "75|85": 1, "76|85": 1, "77|85": 1, "69|86": 1, "70|86": 1,
                "71|86": 1, "72|86": 1, "73|86": 1, "74|86": 1, "75|86": 1, "76|86": 1, "69|87": 1, "70|87": 1,
                "71|87": 1, "72|87": 1, "73|87": 1, "74|87": 1, "75|87": 1, "76|87": 1, "70|88": 1, "71|88": 1,
                "59|69": 1, "58|70": 1, "59|70": 1, "60|70": 1, "56|71": 1, "57|71": 1, "58|71": 1, "59|71": 1,
                "60|71": 1, "61|71": 1, "57|72": 1, "58|72": 1, "59|72": 1, "60|72": 1, "57|73": 1, "58|73": 1,
                "59|73": 1, "60|73": 1, "58|74": 1, "59|74": 1, "60|74": 1, "61|74": 1, "58|75": 1, "59|75": 1,
                "60|75": 1, "61|75": 1, "62|75": 1, "59|76": 1, "60|76": 1, "61|76": 1, "62|76": 1, "59|77": 1,
                "60|77": 1, "61|77": 1, "59|78": 1, "59|79": 1, "60|79": 1, "-286|-479": 1, "-287|-478": 1,
                "-286|-478": 1, "-285|-478": 1, "-288|-477": 1, "-287|-477": 1, "-286|-477": 1, "-289|-476": 1,
                "-288|-476": 1, "-287|-476": 1, "-286|-476": 1, "-285|-476": 1, "-284|-476": 1, "-288|-475": 1,
                "-289|-472": 1, "-288|-472": 1, "-287|-472": 1, "-286|-472": 1, "-289|-471": 1, "-287|-471": 1,
                "-286|-471": 1, "-285|-471": 1, "-287|-468": 1, "-289|-467": 1, "-288|-467": 1, "-287|-467": 1,
                "82|92": 1, "81|93": 1, "82|93": 1, "80|94": 1, "81|94": 1, "82|94": 1, "83|94": 1, "81|95": 1,
                "-898|-779": 1, "-897|-779": 1, "-896|-779": 1, "-895|-779": 1, "-897|-778": 1, "-896|-778": 1,
                "-895|-778": 1, "-897|-777": 1, "-896|-777": 1, "-897|-776": 1, "-607|-267": 1, "-605|-267": 1,
                "-609|-266": 1, "-608|-266": 1, "-607|-266": 1, "-606|-266": 1, "-605|-266": 1, "-604|-266": 1,
                "-603|-266": 1, "-610|-265": 1, "-609|-265": 1, "-605|-265": 1, "-604|-265": 1, "-603|-265": 1,
                "-602|-265": 1, "-610|-264": 1, "-607|-264": 1, "-606|-264": 1, "-605|-264": 1, "-602|-264": 1,
                "-601|-264": 1, "-600|-264": 1, "-612|-263": 1, "-611|-263": 1, "-610|-263": 1, "-609|-263": 1,
                "-608|-263": 1, "-607|-263": 1, "-603|-263": 1, "-602|-263": 1, "-601|-263": 1, "-600|-263": 1,
                "-613|-262": 1, "-612|-262": 1, "-611|-262": 1, "-610|-262": 1, "-609|-262": 1, "-608|-262": 1,
                "-607|-262": 1, "-605|-262": 1, "-603|-262": 1, "-600|-262": 1, "-613|-261": 1, "-612|-261": 1,
                "-611|-261": 1, "-610|-261": 1, "-609|-261": 1, "-607|-261": 1, "-606|-261": 1, "-605|-261": 1,
                "-604|-261": 1, "-603|-261": 1, "-602|-261": 1, "-600|-261": 1, "-612|-260": 1, "-611|-260": 1,
                "-606|-260": 1, "-605|-260": 1, "-604|-260": 1, "-603|-260": 1, "-602|-260": 1, "-601|-260": 1,
                "-600|-260": 1, "-605|-259": 1, "-604|-259": 1, "-602|-259": 1, "-830|-810": 1, "-829|-810": 1,
                "-828|-810": 1, "-827|-810": 1, "-826|-810": 1, "-830|-809": 1, "-829|-809": 1, "-828|-809": 1,
                "-827|-809": 1, "-826|-809": 1, "-830|-808": 1, "-829|-808": 1, "-828|-808": 1, "-827|-808": 1,
                "-826|-808": 1, "-830|-807": 1, "-829|-807": 1, "-828|-807": 1, "-827|-807": 1, "-826|-807": 1,
                "-828|-806": 1, "-827|-806": 1, "92|99": 1, "93|99": 1, "93|100": 1, "94|100": 1, "93|101": 1,
                "92|102": 1, "93|102": 1, "94|102": 1, "91|103": 1, "92|103": 1, "93|103": 1, "94|103": 1,
                "95|103": 1, "91|104": 1, "92|104": 1, "93|104": 1, "94|104": 1, "95|104": 1, "92|105": 1,
                "-579|-497": 1, "-578|-497": 1, "-577|-497": 1, "-576|-497": 1, "-575|-497": 1, "-313|-198": 1,
                "-312|-198": 1, "-310|-198": 1, "-315|-197": 1, "-314|-197": 1, "-313|-197": 1, "-312|-197": 1,
                "-311|-197": 1, "-310|-197": 1, "-316|-196": 1, "-315|-196": 1, "-314|-196": 1, "-313|-196": 1,
                "-312|-196": 1, "-311|-196": 1, "-310|-196": 1, "-309|-196": 1, "-308|-196": 1, "-316|-195": 1,
                "-315|-195": 1, "-314|-195": 1, "-313|-195": 1, "-312|-195": 1, "-311|-195": 1, "-310|-195": 1,
                "-309|-195": 1, "-316|-194": 1, "-315|-194": 1, "-314|-194": 1, "-313|-194": 1, "-312|-194": 1,
                "-311|-194": 1, "-310|-194": 1, "-309|-194": 1, "-308|-194": 1, "-315|-193": 1, "-314|-193": 1,
                "-313|-193": 1, "-312|-193": 1, "-311|-193": 1, "-310|-193": 1, "-309|-193": 1, "-315|-192": 1,
                "-314|-192": 1, "-313|-192": 1, "-312|-192": 1, "-311|-192": 1, "-310|-192": 1, "106|81": 1, "107|81": 1,
                "108|81": 1, "107|82": 1, "108|82": 1, "111|82": 1, "106|83": 1, "107|83": 1, "108|83": 1, "109|83": 1,
                "110|83": 1, "111|83": 1, "112|83": 1, "106|84": 1, "107|84": 1, "108|84": 1, "109|84": 1, "110|84": 1,
                "111|84": 1, "106|85": 1, "107|85": 1, "108|85": 1, "109|85": 1, "110|85": 1, "111|85": 1, "105|86": 1,
                "106|86": 1, "107|86": 1, "108|86": 1, "109|86": 1, "110|86": 1, "111|86": 1, "112|86": 1, "105|87": 1,
                "106|87": 1, "108|87": 1, "111|87": 1, "112|87": 1, "111|88": 1, "-486|-158": 1, "-485|-158": 1,
                "-486|-157": 1, "-485|-157": 1, "-484|-157": 1, "-486|-156": 1, "-485|-156": 1, "-484|-156": 1,
                "-483|-156": 1, "-486|-155": 1, "-485|-155": 1, "-484|-155": 1, "-851|-852": 1, "-850|-852": 1,
                "-849|-852": 1, "-852|-851": 1, "-851|-851": 1, "-850|-851": 1, "-849|-851": 1, "-848|-851": 1,
                "-852|-850": 1, "-851|-850": 1, "-850|-850": 1, "-849|-850": 1, "-850|-849": 1, "-449|-449": 1,
                "-448|-449": 1, "-449|-448": 1, "-448|-448": 1, "-447|-448": 1, "-449|-447": 1, "-448|-447": 1,
                "-447|-447": 1, "-448|-446": 1, "-100|-105": 1, "-100|-104": 1,
            };


        // Modifizierter Dijkstra-Algorithmus
        //
        // Um Platz zu sparen, verzichten wir auf eine explizite Graphen-Darstellung
        // der Karte. Stattdessen wird eine implizite Kante zwischen allen benach-
        // barten Feldern des assoziativen Arrays "map" angenommen:
        //
        // map["x|y"]=1
        //
        // Zusaetzliche Kanten stehen im assoziativen Array "edge":
        //
        // edges("von-x|von-y") = array("nach-x|nach-y|beschreibung|tools", ...)
        //
        // Zauberkugeln werden grundsaetzlich nur im 1. Schritt eingesetzt
        //
        // edges("teleport") = array("nach-x|nach-y|beschreibung|tools", ...)
        //
        // wobei "tools" ein Bitfeld ist, das die Hilfsmittel/Bedingungen
        // beschreibt, um diese Kante nutzen zu koennen.
        //
        // Der Algorithmus wird automatisch zuerst die beste Loesung suchen und
        // danach sukzessive auf eingesetzte Hilfsmittel verzichten, bis er bei
        // einer reinen Fussweg-Loesung ankommt (sofern es die gibt).
        //
        // Die Heimzauber-Anwendung ist derzeit abgeschaltet, weil es sonst bei
        // einigen Suchen zu viele unnuetze Loesungen gibt, siehe unten.

        var edges = {

            // Portal in Reikan
            "94|111" : new Array(
                "90|115|Portal nach Kerdis|2",
                "64|80|Portal nach Rovonia|2",
                "54|76|Portal nach Laree|2",
                "122|100|Portal nach Kuridan/Wandelfluss|2",
                "72|116|Portal nach Terasi|2",
                "144|126|Portal zur Felseninsel|2",
                "121|91|Portal nach Torihn|2",
                "122|116|Portal nach Lardikia|2",
                "62|83|Portal nach Kolun|2",
                "59|106|Portal nach Krato|2",
                "129|90|Portal nach Brondor|2",
                "115|100|Portal nach Kuridan/Prärie|2",
                "111|83|Portal nach Wilisien|2",
                "135|115|Portal nach Linya|2",
                "58|98|Portal nach Dranar|2",
                "106|93|Portal nach Ferdolien|2",
                "110|107|Portal nach Nawor|2",
                "118|124|Portal nach Dorea|2",
                "96|78|Portal nach Ragnur|2"
            ),

            // sonstige Teleport-Mechanismen
            "teleport" : new Array(
                "Heimzauber-Dummy - muss Index 0 besitzen!",
                "87|90|Stab des Handels zum Marktplatz|32",
                "88|89|Stab des Handels zum Zentrallager|32",
                "97|108|ZK/Nebel/Flügel nach reikan|8",
                "99|115|ZK/Nebel/Flügel nach mentoran|8",
                "98|120|Ring des Sandwindes nach Mentoran|4",
                "58|107|Ring des Sandwindes nach Krato|4",
                "121|112|Ring des Sandwindes nach Lardikia|4",
                "-599|-489|gelbe ZK zum Lichtwald|16",
                "96|101|Stab des Handels zur Markthalle|32",
                "117|113|Stab des Handels zur Markthalle von Lardikia|32",
                "81|94|ZK/Nebel/Flügel nach vergessenenestal|8",
                "72|85|Ring des Sandwindes nach Urdanien|4",
                "87|87|Stab des Handels zur Auktionshalle|32",
                "501|51|ZK/Nebel/Flügel nach narubia|8",
                "98|81|Ring des Sandwindes nach Latenia|4",
                "-803|-808|gelbe ZK zur Ruine|16",
                "103|110|ZK/Nebel/Flügel nach nawor|8",
                "101|100|ZK/Nebel/Flügel nach konlir|8",
                "65|96|Ring des Sandwindes nach Delos|4",
                "80|87|ZK/Nebel/Flügel nach buran|8",
                "108|114|ZK/Nebel/Flügel nach orewu|8",
                "-798|-798|gelbe ZK zum Grab|16",
                "-785|-786|gelbe ZK zur Kanalisation|16",
                "75|99|ZK/Nebel/Flügel nach kanobien|8",
                "92|105|ZK/Nebel/Flügel nach baw|8",
                "123|92|Ring des Sandwindes nach Torihn|4",
                "100|94|ZK/Nebel/Flügel nach ferdolien|8",
                "-347|-693|gelbe ZK zur Eishöhle|16",
                "93|96|ZK/Nebel/Flügel nach talderruinen|8",
                "71|92|ZK/Nebel/Flügel nach sutranien|8",
                "66|111|ZK/Nebel/Flügel nach terasi|8",
                "85|102|ZK/Nebel/Flügel nach anatubien|8",
                "92|90|ZK/Nebel/Flügel nach hewien|8",
                "114|76|ZK/Nebel/Flügel nach lodradon|8",
                "1005|1005|Auf die gefrorene Insel|128",
                "90|115|Portal nach Kerdis|256",
                "64|80|Portal nach Rovonia|256",
                "122|100|Portal nach Kuridan/Wandelfluss|256",
                "72|116|Portal nach Terasi|256",
                "144|126|Portal zur Felseninsel|256",
                "121|91|Portal nach Torihn|256",
                "122|116|Portal nach Lardikia|256",
                "62|83|Portal nach Kolun|256",
                "59|106|Portal nach Krato|256",
                "129|90|Portal nach Brondor|256",
                "115|100|Portal nach Kuridan/Prärie|256",
                "111|83|Portal nach Wilisien|256",
                "135|115|Portal nach Linya|256",
                "58|98|Portal nach Dranar|256",
                "106|93|Portal nach Ferdolien|256",
                "110|107|Portal nach Nawor|256",
                "118|124|Portal nach Dorea|256",
                "96|78|Portal nach Ragnur|256",
                "-605|-206|Portal nach Bernsteinhöhle|256",
                "-100|-95|Portal nach Keller der Post|256",
                "-286|-479|Portal nach vergessene Kathedrale (Ebene 1)|256",
                "-827|-919|Portal nach Grotte des Todes|256"
            ),

            // normale Kanten
            "108|96": new Array("105|100|Vom Geist der Wiese teleportieren lassen|1"),
            "112|97": new Array("105|100|Vom Geist der Wiese teleportieren lassen|1"),
            "113|99": new Array("105|100|Vom Geist der Wiese teleportieren lassen|1"),

            "87|104"    : new Array("-812|-810|Die Grotte betreten|0"),
            "83|81"     : new Array("97|116|In das Loch steigen und das Portal betreten|0",
                "-312|-195|Den Ring des Vulkans in das Portal werfen|0"),
            "62|95"     : new Array("-288|-475|Die vergessene Kathedrale betreten|0"),
            "-934|-552" : new Array("92|104|Die Diebeshöhle verlassen|0"),
            "-559|-497" : new Array("88|90|Die Höhle verlassen|0"),
            "-558|-497" : new Array("89|90|Die Höhle verlassen|0"),
            "-568|-495" : new Array("91|90|Die Höhle verlassen|0"),
            "-780|-793" : new Array("-780|-790|Nach unten gehen|0"),
            "-345|-693" : new Array("98|84|Die Eishöhle verlassen|0"),
            "85|97"     : new Array("-10004|-10005|Die Höhle betreten|0"),
            "86|97"     : new Array("-10001|-10005|Die Höhle betreten|0"),
            "-818|-825" : new Array("82|92|Das Verliess verlassen|0"),
            "-585|-490" : new Array("90|92|Die Höhle verlassen|0"),
            "-197|-396" : new Array("72|107|Dein Grab verlassen|0"),
            "90|89"     : new Array("-548|-497|Die Höhle betreten|0"),
            "88|90"     : new Array("-559|-497|Die Höhle betreten|0"),
            "89|90"     : new Array("-558|-497|Die Höhle betreten|0"),
            "91|90"     : new Array("-568|-495|Die Höhle betreten|0"),
            "87|92"     : new Array("-579|-497|Die Höhle betreten|0"),
            "90|92"     : new Array("-585|-490|Die Höhle betreten|0"),
            "88|93"     : new Array("-599|-498|Die Höhle betreten|0"),
            "-548|-497" : new Array("90|89|Die Höhle verlassen|0"),
            "-787|-790" : new Array("-758|-752|Durch den Gang nach unten gehen|0"),
            "-780|-790" : new Array("-780|-793|Mit Hilfe der Holzleiter nach oben gehen|0"),
            "-758|-752" : new Array("-787|-790|Durch den Gang nach oben gehen|0"),
            "-500|-500" : new Array("99|103|Kathedrale verlassen|0"),
            "-196|-100" : new Array("82|86|Den Keller verlassen|0"),
            "-191|-98"  : new Array("85|88|Den Keller verlassen|0"),
            "-185|-97"  : new Array("82|84|Den Keller verlassen|0"),
            "-200|-93"  : new Array("80|89|Den Keller verlassen|0"),
            "-99|-100"  : new Array("99|103|Die Treppe nach oben laufen|0"),
            "-100|-95"  : new Array("91|104|Die Treppe nach oben laufen|0"),
            "-10001|-10011" : new Array("93|101|Den Keller verlassen|0"),
            "98|102"    : new Array("-790|-786|Die Kanalisation betreten|0"),
            "99|103"    : new Array("-99|-100|Durch die Türe nach unten in den Keller gehen|0",
                "-500|-500|Kathedrale betreten|0"),
            "98|104"    : new Array("-100|-104|Die Gefängniszelle betreten|0"),
            "-231|-369" : new Array("122|113|Auftauchen|0"),
            "-230|-369" : new Array("122|113|Auftauchen|0"),
            "-229|-369" : new Array("122|113|Auftauchen|0"),
            "-228|-369" : new Array("122|113|Auftauchen|0"),
            "-227|-369" : new Array("122|113|Auftauchen|0"),
            "-226|-369" : new Array("122|113|Auftauchen|0"),
            "-232|-368" : new Array("122|113|Auftauchen|0"),
            "-231|-368" : new Array("122|113|Auftauchen|0"),
            "-230|-368" : new Array("122|113|Auftauchen|0"),
            "-229|-368" : new Array("122|113|Auftauchen|0"),
            "-228|-368" : new Array("122|113|Auftauchen|0"),
            "-227|-368" : new Array("122|113|Auftauchen|0"),
            "-226|-368" : new Array("122|113|Auftauchen|0"),
            "-225|-368" : new Array("122|113|Auftauchen|0"),
            "-231|-367" : new Array("122|113|Auftauchen|0"),
            "-230|-367" : new Array("122|113|Auftauchen|0"),
            "-229|-367" : new Array("122|113|Auftauchen|0"),
            "-228|-367" : new Array("122|113|Auftauchen|0"),
            "-227|-367" : new Array("122|113|Auftauchen|0"),
            "-226|-367" : new Array("122|113|Auftauchen|0"),
            "-231|-366" : new Array("122|113|Auftauchen|0"),
            "-230|-366" : new Array("122|113|Auftauchen|0"),
            "-229|-366" : new Array("122|113|Auftauchen|0"),
            "-228|-366" : new Array("122|113|Auftauchen|0"),
            "-227|-366" : new Array("122|113|Auftauchen|0"),
            "-226|-366" : new Array("122|113|Auftauchen|0"),
            "-225|-366" : new Array("122|113|Auftauchen|0"),
            "-227|-365" : new Array("122|113|Auftauchen|0"),
            "-226|-365" : new Array("122|113|Auftauchen|0"),
            "122|113"   : new Array("-232|-368|Tauchen|0"),
            "96|82"     : new Array("-349|-698|Die Eishöhle betreten|0"),
            "-812|-810" : new Array("87|104|Die Grotte verlassen|0"),
            "111|107"   : new Array("-449|-449|Durch den Felsspalt nach unten gehen|0"),
            "-802|-807" : new Array("94|96|Die Ruine verlassen|0"),
            "-10004|-10005" : new Array("85|97|Die Höhle verlassen|0"),
            "-10001|-10005" : new Array("86|97|Die Höhle verlassen|0"),
            "94|96"     : new Array("-802|-807|Die Ruine betreten|0"),
            "-177|-277" : new Array("122|113|Auftauchen|0"),
            "-172|-277" : new Array("122|113|Auftauchen|0"),
            "-177|-276" : new Array("122|113|Auftauchen|0"),
            "-175|-276" : new Array("122|113|Auftauchen|0"),
            "-173|-276" : new Array("122|113|Auftauchen|0"),
            "-172|-276" : new Array("122|113|Auftauchen|0"),
            "-171|-276" : new Array("122|113|Auftauchen|0"),
            "-177|-275" : new Array("122|113|Auftauchen|0"),
            "-176|-275" : new Array("122|113|Auftauchen|0"),
            "-175|-275" : new Array("122|113|Auftauchen|0"),
            "-173|-275" : new Array("122|113|Auftauchen|0"),
            "-172|-275" : new Array("122|113|Auftauchen|0"),
            "-178|-274" : new Array("122|113|Auftauchen|0"),
            "-177|-274" : new Array("122|113|Auftauchen|0"),
            "-175|-274" : new Array("122|113|Auftauchen|0"),
            "-174|-274" : new Array("122|113|Auftauchen|0"),
            "-173|-274" : new Array("122|113|Auftauchen|0"),
            "-172|-274" : new Array("122|113|Auftauchen|0"),
            "-171|-274" : new Array("122|113|Auftauchen|0"),
            "-177|-273" : new Array("122|113|Auftauchen|0"),
            "-173|-273" : new Array("122|113|Auftauchen|0"),
            "-172|-273" : new Array("122|113|Auftauchen|0"),
            "-178|-272" : new Array("122|113|Auftauchen|0"),
            "-177|-272" : new Array("122|113|Auftauchen|0"),
            "-175|-272" : new Array("122|113|Auftauchen|0"),
            "-173|-272" : new Array("122|113|Auftauchen|0"),
            "-172|-272" : new Array("122|113|Auftauchen|0"),
            "-171|-272" : new Array("122|113|Auftauchen|0"),
            "-178|-271" : new Array("122|113|Auftauchen|0"),
            "-177|-271" : new Array("122|113|Auftauchen|0"),
            "-176|-271" : new Array("122|113|Auftauchen|0"),
            "-175|-271" : new Array("122|113|Auftauchen|0"),
            "-174|-271" : new Array("122|113|Auftauchen|0"),
            "-173|-271" : new Array("122|113|Auftauchen|0"),
            "-178|-270" : new Array("122|113|Auftauchen|0"),
            "-176|-270" : new Array("122|113|Auftauchen|0"),
            "-176|-269" : new Array("122|113|Auftauchen|0"),
            "-176|-268" : new Array("122|113|Auftauchen|0"),
            "-594|-448" : new Array("73|99|Den unterirdischen Lichtwald verlassen|0"),
            "-284|-476" : new Array("-289|-471|Die Treppe nach oben gehen|0"),
            "-289|-471" : new Array("-284|-476|Die Treppe nach unten gehen|0"),
            "-285|-471" : new Array("-289|-467|Die Treppe nach oben gehen|0"),
            "-289|-467" : new Array("-285|-471|Die Treppe nach unten gehen|0"),
            "82|92"     : new Array("-818|-825|Durch die Türe nach unten in das Verliess gehen|0"),
            "93|101"    : new Array("-10001|-10011|In den Keller gehen|0"),
            "91|104"    : new Array("-100|-95|Die Treppe nach unten laufen|0"),
            "92|104"    : new Array("-934|-552|Die Diebeshöhle betreten|0"),
            "-449|-449" : new Array("111|107|Die Höhle verlassen|0"),
            "-100|-104" : new Array("98|104|Das Gefängnis verlassen|0"),
            "501|57"    : new Array("101|100|Katapult|0"),
            "78|98"     : new Array("-811|-826|Die Äste beiseite schieben|0"),
            "-811|-826" : new Array("78|98|Den hohlen Baum verlassen|0"),
            "79|99"     : new Array("80|114|Mit der Liane durch die Lüfte schwingen|0"),
            "80|114"    : new Array("79|99|Mit der Liane durch die Lüfte schwingen|0"),
            "-90|-90"   : new Array("98|98|Die Ruhmeshalle verlassen|0"),
            "98|98"     : new Array("-90|-90|Die Ruhmeshalle betreten|0"),
            "101|117"   : new Array("-105|-95|Das Nomadenzelt betreten|0"),
            "-105|-95"  : new Array("-105|-95|Das Nomadenzelt verlassen|0"),
            "94|90"     : new Array("102|99|Vom Fluss fortgespült|0"),
            "97|90"     : new Array("102|99|Vom Fluss fortgespült|0"),
            "90|111"    : new Array("92|108|Dem Pfad in die Berge folgen|0"),
            "118|106"   : new Array("132|117|Dem Fährmann Geld für die Überfahrt geben|0"),
            "132|117"   : new Array("118|106|Dem Fährmann Geld für die Überfahrt geben|0"),
            "-798|-800" : new Array("98|109|Die Grabkammer verlassen|0"),
            "98|109"    : new Array("-798|-800|Die Grabkammer betreten|0"),
            "-288|-475" : new Array("62|95|Die vergessene Kathedrale verlassen|0"),
            "90|88"      : new Array("-1298|-1399|Kampfgebiet betreten|0"),
            "92|92"      : new Array("-1294|-1393|Kampfgebiet betreten|0"),
            "-1298|-1399": new Array("90|88|Kampfgebiet verlassen|0"),
            "-1294|-1393": new Array("92|92|Kampfgebiet verlassen|0"),
            "80|75"      : new Array("87|76|Seilbahn benutzen|0"),
            "87|76"      : new Array("80|75|Seilbahn benutzen|0")
        };


        // Namen der Hilfsmittel
        var teleport_mittel = {
            0 : "",
            1 : "Portal in Reikan",
            2 : "Ring des Sandwindes",
            3 : "Zauberkugel/Nebel/Flügel",
            4 : "gelbe Zauberkugel",
            5 : "Stab des Handels",
            6 : "Mensch/Arbeiter-Heimzauber",
            7 : "Mensch/Kämpfer-Heimzauber",
            8 : "Mensch/Zauberer-Heimzauber",
            9 : "Onlo-Heimzauber",
            10 : "DM-Heimzauber",
            11 : "Taruner-Heimzauber",
            12 : "Serum-Geist-Heimzauber",
            13 : "Natla-Heimzauber"
        };

        // Hauptfunktion, gibt einen formatierten Text zurück

        function finde_weg(src, dst)
        {
            if (!map[src])
            {
                return "Startfeld '" + src + "' nicht gefunden (Syntax: x|y)";
            }
            if (!map[dst])
            {
                return "Zielfeld '" + dst + "' nicht gefunden (Syntax: x|y)";
            }

            // hier kommt ein Array von Loesungs-Strings zurueck.
            // 63 ist die Menge der erlaubten Hilfsmittel (=alles ausser
            // Heimzauber; benuzte 16383, um auch Heimzauber zu erlauben)

            probiert = new Array();
            loesungen = finde_weg_internal(src, dst, 10, new Array());

            string = "";

            // die Loesungs-Strings haben die Form
            // hilfsmittel;laenge;wegbeschreibung
            // - hieraus nun String bauen
            if (loesungen.length == 0)
            {
                string = "Kein Weg gefunden.";
            }
            else
            {
                var AlleLösungen = new Array();
                for(var i=0; i<loesungen.length; i++)
                {
                    n = i+1;
                    string += "<b>Lösung "+n+":</b><ul>";
                    elements=loesungen[i].split(";");
                    if (elements[0] != 0)
                    {
                        string +="<li>Erfordert: ";
                        komma=0;
                        for(j=0; j<16; j++)
                        {
                            if (elements[0] & (1<<j))
                            {
                                if (komma) string += ", ";
                                string += teleport_mittel[j];
                                komma=1;
                            }
                        }
                        string += "</li>\n";
                    }
                    else
                    {
                        string += "<li>reiner Fußweg</li>\n";
                    }
                    string +="<li>Länge: "+elements[1]+"</li>\n";
                    string +="<li>Weg: "+elements[2]+"<br>\n";
                    string += makemap(src, dst, elements[2]);
                    string +="</li></ul>";
                    var dieselösung = new Lösung(elements[1],elements[2]);
                    AlleLösungen.push(dieselösung);
                    //console.log(AlleLösungen[AlleLösungen.length - 1].length +" : " +AlleLösungen[AlleLösungen.length - 1].way);
                }
                string += "<p>";
            }
            if (AlleLösungen[0])
            {

                var schnellsteLösung = -1;
                var schnellsterWeg;
                for (var x in AlleLösungen)
                {
                    var aktuelleLösung = parseInt(AlleLösungen[x].length);
                    if (aktuelleLösung < schnellsteLösung || schnellsteLösung == -1)
                    {
                        schnellsteLösung = AlleLösungen[x].length;
                        schnellsterWeg = AlleLösungen[x].way;
                    }
                }
                var schnellsteLösungObj = new Lösung(schnellsteLösung,schnellsterWeg);

            }
            //return string;
            return schnellsteLösungObj;
        }

        class Lösung {
            constructor(length, way) {
                this.length = length;
                this.way = way;
            }
        }

        function makemap(src, dst, weg)
        {
            rv = "<div style=\"float:none; position:relative; top:0; left:0; height:300\"><div style=\"position:absolute; left:0; top:0;\"><img src=\"sfc.jpg\"></div>\n";
            rv += makemap_point(src, "green.png");
            pts = weg.split("->");
            lastplot=src;
            for(var i=0; i<pts.length; i++)
            {
                rv += makemap_line(lastplot, pts[i], "yellow.png");
                pt = makemap_point(pts[i], "yellow.png");
                if (pt != "")
                {
                    lastplot=pts[i];
                    rv += pt;
                }
            }
            rv += makemap_point(dst, "red.png");
            rv += "</div>";
            return rv;
        }

        function makemap_line(from, to, img)
        {
            k = from.split("|");
            x0 = (k[0]-54) * 6+3;
            y0 = (k[1]-80) * 6+3;
            k = to.split("|");
            x1 = (k[0]-54) * 6+3;
            y1 = (k[1]-80) * 6+3;
            line="";
            xd = Math.abs(x1-x0);
            yd = Math.abs(y1-y0);
            if ((x0>0) && (y0>0) && (x0<600) && (y0<400) && (x1>0) && (y1>0) && (x1<600) && (y1<400) && ((xd>0 || yd>0)))
            {
                if (xd>yd)
                {
                    // y-entfernung ist schleifen-master, y ist slave
                    if (x0>x1)
                    {
                        // tauschen
                        xt=x0; x0=x1; x1=xt;
                        yt=y0; y0=y1; y1=yt;
                    }
                    for(x=x0; x<x1; x++)
                    {
                        y=(y0+(y1-y0)*(x-x0)/(x1-x0));
                        line+="<div style=\"position:absolute; left:"+x+"; top:"+y+"\"><img src=\""+img+"\" width=\"1\" height=\"1\"></div>\n";
                    }
                }
                else
                {
                    // x-entfernung ist schleifen-master, y ist slave
                    if (y0>y1)
                    {
                        // tauschen
                        xt=x0; x0=x1; x1=xt;
                        yt=y0; y0=y1; y1=yt;
                    }
                    for(y=y0; y<y1; y++)
                    {
                        x=(x0+(x1-x0)*(y-y0)/(y1-y0));
                        line+="<div style=\"position:absolute; left:"+x+"; top:"+y+"\"><img src=\""+img+"\" width=\"1\" height=\"1\"></div>\n";
                    }
                }
            }
            return line;
        }

        function makemap_point(koord, img)
        {
            k = koord.split("|");
            x = (k[0]-54) * 6;
            y = (k[1]-80) * 6;
            point = "";
            if ((x>0) && (y>0) && (x<600) && (y<400))
            {
                point = "<div style=\"position:absolute; left:"+x+"; top:"+y+"\"><img src=\""+img+"\"></div>";
            }
            return point;
        }

        // interne Suchfunktion.
        //
        // bekommt in result_bisher die bisherige Loe, gibt selbst
        // ein zwei-Elementiges Array zurueck, bei dem
        function finde_weg_internal(src, dst, erlaubte_bits, result_bisher)
        {
            // menge der bearbeiteten knoten
            // struktur des "done"-arrays:
            // done["x|y"] = (pfadtext, entfernung, tool-bitmask)
            var done = new Array();

            // mit startfeld initialisieren
            done[src] = new Array("Start", 0, 0);

            // alle teleport-felder hinzufuegen, sofern erlaubt
            for(var i=0; i<edges["teleport"].length; i++)
            {
                k = edges["teleport"][i].split("|");
                if ((k[3] & erlaubte_bits) == k[3])
                {
                    done[k[0]+"|"+k[1]] = new Array(k[2]+"->"+k[0]+"|"+k[1], 1, k[3]);
                }
            }

            // alle bearbeiteten knoten zum scannen vormerken
            // (scannen = verfolgen aller kanten vom knoten aus)
            var numscan = 0;
            var scan = new Array();
            for (var i in done)
            {
                scan[i] = 1;
                numscan++;
            }

            var current;

            // der eigentliche dijkstra-loop
            while(numscan)
            {
                // array fuer neue zu scannende knoten vorbereiten
                newscan = new Array();
                numscan = 0;
                // alle zum scannen vorgemerkten knoten bearbeiten
                for (var i in scan)
                {
                    current = done[i];
                    // wenn am ziel: fertig
                    if (i == dst) break;

                    // nachbarn des knotens finden
                    nb = finde_nachbarn(i, erlaubte_bits);
                    for (j = 0; j<nb.length; j++)
                    {
                        k = nb[j].split("|");
                        ko = k[0]+"|"+k[1];

                        // jeder nachbar, der tatsaechlich existiert, aber noch
                        // nicht in der "done"-liste ist, wird mit entfernungswert,
                        // pfadbeschreibung und evtl. erweiterter tool-menge versehen
                        // und zum scannen vorgemerkt
                        if (map[ko] && !done[ko])
                        {
                            path = current[0]+"->";
                            if (k[2]) path += k[2]+"->";
                            path += ko;
                            done[ko] = new Array(path, current[1] + 1, current[2]|k[3]);
                            newscan[ko] = 1;
                            numscan++;
                        }
                    }
                }
                if (i==dst) break;
                // scan-liste abgearbeitet; durch neue ersetzen
                // (falls neue liste leer, endet die while-schleife ohne ergebnis)
                scan = newscan;
            }

            // ziel erreicht?
            if (i==dst)
            {
                // pfad merken.
                diese_loesung=current[2]+";"+current[1]+";"+current[0];
                for (var j=0; j<result_bisher.length; j++)
                {
                    if (result_bisher[j] == diese_loesung)
                    {
                        // die Loesung ist uns schon bekannt.
                        return result_bisher;
                    }
                }

                result_bisher.push(diese_loesung);

                // falls tools eingesetzt wurden...
                if (current[2] != 0)
                {
                    for (var i=0; i<16; i++)
                    {
                        if ((current[2] & (1<<i)) == (1<<i))
                        {
                            // ... dann fuer jedes eingesetzte tool die suche OHNE
                            // dieses wiederholen. der vorgang ist rekursiv, falls
                            // mehr als ein tool eingesetzt wurde.
                            // die ergebnisliste result_bisher wird dabei verlaengert.
                            eb = erlaubte_bits & ~(1<<i);
                            if (probiert[eb]) continue;
                            probiert[eb]=1;
                            result_bisher = finde_weg_internal(src, dst, eb, result_bisher);
                        }
                    }
                }
            }
            return result_bisher;
        }

        // sucht die nachbarn eines feldes. gibt u.u. auch nichtbegehbare
        // felder (bergfelder usw.) zurueck.
        function finde_nachbarn(f, bits)
        {
            var k = f.split("|");
            var x1=parseInt(k[0]);
            var x0=x1-1;
            var x2=x1+1;
            var y1=parseInt(k[1]);
            var y0=y1-1;
            var y2=y1+1;
            // die 8 umliegenden felder stupide aufnehmen
            nachbarn = new Array(
                x0+"|"+y0, x1+"|"+y0, x2+"|"+y0,
                x0+"|"+y1, x2+"|"+y1,
                x0+"|"+y2, x1+"|"+y2, x2+"|"+y2);

            // falls zusatzkanten definiert und lt. bitmaske erlaubt,
            // diese mit aufnehmen
            if (edges[f])
            {
                for (var i=0; i<edges[f].length; i++)
                {
                    k = edges[f][i].split("|");
                    if ((k[3] & bits) == k[3])
                    {
                        nachbarn.push(edges[f][i]);
                    }
                }
            }

            return nachbarn;
        }


        //Eigene Funktionen

        function main(){
            var xcoord = parent.mapFrame.document.getElementsByClassName("positiontext")[0].innerText.trim().split(" ")[2];
            var ycoord = parent.mapFrame.document.getElementsByClassName("positiontext")[0].innerText.trim().split(" ")[4];
            var curposition = xcoord+"|"+ycoord;
            let Pfad = getPath();
            console.log(Pfad);

            var oldposition = localStorage.getItem("position");
            if (!oldposition){
                //console.log("Konnte keine alte Position finden setze standard!");
                var oldposition = "0|0";
            }

            if (localStorage.getItem("autobuddeln") == "true"){
                if (curposition === oldposition){
                    if (localStorage.getItem("nixgefunden") === "true")
                    {
                        //console.log("Ich war schonmal hier und habe das letzte mal nichts gefunden!");
                        /*if(Pfad[0]){
                            move(Pfad[0],Pfad);
                            return;
                        }*/
                    }
                    else{
                        //console.log("Ich war schonmal hier und habe bisher immer etwas gefunden!");
                        Buddeln();
                    }
                }
                else{
                    //console.log("Das erste mal auf diesem Feld, buddle und setze position!");
                    Pfad.splice(0,1);
                    localStorage.setItem('eintraegeArray', JSON.stringify(Pfad));
                    localStorage.setItem("nixgefunden", false);
                    localStorage.setItem("position", curposition);
                    Buddeln();
                }
            }

            if (localStorage.getItem("nixgefunden") === "true" || localStorage.getItem("autobuddeln") === "false"){
                if (curposition !== oldposition){
                    //console.log("Das erste mal auf diesem Feld, setze position!");
                    Pfad.splice(0,1);
                    localStorage.setItem('eintraegeArray', JSON.stringify(Pfad));
                    localStorage.setItem("position", curposition);
                }

                if(Pfad[0]){
                    move(Pfad[0],Pfad);
                }
            }
        }


        function createbuttonsandstuff(){
            var autowalkAn = localStorage.getItem("autowalk");
            if (!autowalkAn){
                //console.log("Autowalk wird standardmäßig true gesetzt!");
                autowalkAn = "true";
                localStorage.setItem("autowalk", "true");
            }
            var neuesElementwalk = document.createElement("input");
            neuesElementwalk.type="checkbox";
            neuesElementwalk.id="autowalktrigger";
            neuesElementwalk.name="autowalktrigger";
            neuesElementwalk.onclick = function(){
                if (localStorage.getItem("autowalk") == "false"){
                    localStorage.setItem("autowalk", true);
                    console.log("Autowalk AN");
                    appendpathbuttons(walkdiv);
                }
                else if (localStorage.getItem("autowalk") == "true"){
                    localStorage.setItem("autowalk", false);
                    console.log("Autowalk AUS");
                    localStorage.setItem("eintraegeArray","");
                    localStorage.removeItem("position");
                    window.location.reload();
                }
            };

            var autobuddelnAn = localStorage.getItem("autobuddeln");
            if (!autobuddelnAn){
                //console.log("Autobuddeln wird standardmäßig true gesetzt!");
                autobuddelnAn = "true";
                localStorage.setItem("autobuddeln", "true");
            }
            var neuesElementbuddeln = document.createElement("input");
            neuesElementbuddeln.type="checkbox";
            neuesElementbuddeln.id="autobuddeltrigger";
            neuesElementbuddeln.name="autobuddeltrigger";
            neuesElementbuddeln.onclick = function(){
                if (localStorage.getItem("autobuddeln") == "false"){
                    localStorage.setItem("autobuddeln", true);
                    console.log("Autobuddeln AN");
                }
                else if (localStorage.getItem("autobuddeln") == "true"){
                    localStorage.setItem("autobuddeln", false);
                    console.log("Autobuddeln AUS");
                    window.location.reload();
                }
            };


            var neuesElementwalk2 = document.createElement("label");
            neuesElementwalk2.style.color = "magenta";
            neuesElementwalk2.innerHTML=("Autowalk: ");


            var neuesElementbuddeln2 = document.createElement("label");
            neuesElementbuddeln2.style.color = "teal";
            neuesElementbuddeln2.innerHTML=("Autobuddeln: ");
            neuesElementbuddeln2.style.position = "relative";
            neuesElementbuddeln2.style.marginLeft = "20px";

            var walkdiv = document.createElement("div");
            walkdiv.id = "walkdiv";
            //buddeldiv.style.float = "right";
            //buddeldiv.style.marginRight = "10%";
            walkdiv.style.lineHeight = "2";
            walkdiv.style.width = "15%";
            walkdiv.appendChild(neuesElementwalk2);
            walkdiv.appendChild(neuesElementwalk);
            walkdiv.appendChild(neuesElementbuddeln2);
            walkdiv.appendChild(neuesElementbuddeln);

            document.body.appendChild(walkdiv);

            if (autowalkAn == "true"){
                neuesElementwalk.checked=true;
                appendpathbuttons(walkdiv);
            }
            else if (autowalkAn == "false"){
                neuesElementwalk.checked=false;
            }
            if (autobuddelnAn == "true"){
                neuesElementbuddeln.checked=true;
            }
            else if (autobuddelnAn == "false"){
                neuesElementbuddeln.checked=false;
            }
        }

        //Use Item
        function useItem(Item) {
            var itemlink = 0;
            //bei offenem Inventar das folgende ausführen
            if (parent.itemFrame.document.getElementsByClassName("listcaption")[1].innerText.search("schließen") != -1) {
                //console.log("Durchsuche offenes Inventar nach: " +Item)
                var itemreihe = parent.itemFrame.document.getElementsByClassName("listitemrow");
                //console.log("Alle Reihen gesammelt. Es gibt " + itemreihe.length + " Reihen");

                //console.log(Item);
                for (var i = 0; i < itemreihe.length; i++) {
                    //console.log("innerhalb der for schleife. Reihe " +i +" von " +itemreihe.length);
                    if (itemreihe[i].innerText.search(Item) != -1) {
                        //console.log("Ding Ding Ding wir haben die richtige Reihe gefunden!!")
                        var richtigeReihe = i;
                        i = itemreihe.length;
                    }
                }
                if (!richtigeReihe) {
                    return;
                }
                //console.log(richtigeReihe + " ist die Richtige Reihe");
                for (var t = 0; t < itemreihe[richtigeReihe].childNodes.length; t++) {
                    //console.log("Innerhalb der 2. For schleife. Bin beim " +t +". von " +itemreihe[richtigeReihe].childNodes.length +" Versuchen.")
                    if (itemreihe[richtigeReihe].childNodes[t].innerText == "Anwenden") {
                        itemlink = itemreihe[richtigeReihe].childNodes[t].href;
                        //console.log("der vom offenen inventar genommene Itemlink ist        " +itemlink);
                        break;
                    }
                }
            }

            //bei geschlossenem Inventar auf Schnellzauber zurückgreifen
            else {

                for (var x = 1; x < 10; x++) {
                    //console.log("Teste Schnellzauber " +i)
                    try {
                        if (parent.itemFrame.document.getElementById("accessfast" + x)) {
                            if (parent.itemFrame.document.getElementById("accessfast" + x).innerText == Item) {
                                itemlink = parent.itemFrame.document.getElementById("accessfast" + x).href;
                                //console.log("der Itemlink ist        " +itemlink);
                                break;
                            }
                        }
                    }
                    catch (e) {
                    }

                }
            }
            //console.log ("Itemlink für " +Item + " lautet: \n" +itemlink);
            if (itemlink !== 0) {
                return itemlink;
            }
            else {
                return null;
            }
        }

        function move(direction, Pfad) {
            if(direction == "siedesteinminebetreten" || direction == "siedesteinmineverlassen")
            {
                var betreten;
                switch (direction)
                {
                    case "siedesteinminebetreten":
                        betreten = "2813";
                        break;
                    case "siedesteinmineverlassen":
                        betreten = "2775";
                        break;
                }

                var betretenreq = new XMLHttpRequest();
                betretenreq.open("GET", "https://"+welt+".freewar.de/freewar/internal/main.php?arrive_eval=oben"+betreten, true);
                betretenreq.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
                betretenreq.setRequestHeader("Accept-Language", "de,en-US;q=0.7,en;q=0.3");
                betretenreq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                betretenreq.send();
                parent.mapFrame.location.reload();

            }
            else if(direction == "mine1betreten" || direction == "mine1verlassen")
            {
                var betreten;
                switch (direction)
                {
                    case "mine1betreten":
                        betreten = "2817";
                        break;
                    case "mine1verlassen":
                        betreten = "2774";
                        break;
                }

                var betretenreq = new XMLHttpRequest();
                betretenreq.open("GET", "https://"+welt+".freewar.de/freewar/internal/main.php?arrive_eval=oben"+betreten, true);
                betretenreq.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
                betretenreq.setRequestHeader("Accept-Language", "de,en-US;q=0.7,en;q=0.3");
                betretenreq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                betretenreq.send();
                parent.mapFrame.location.reload();

            }
            else if(direction == "mine2betreten" || direction == "mine2verlassen")
            {
                var betreten;
                switch (direction)
                {
                    case "mine2betreten":
                        betreten = "2820";
                        break;
                    case "mine2verlassen":
                        betreten = "2798";
                        break;
                }

                var betretenreq = new XMLHttpRequest();
                betretenreq.open("GET", "https://"+welt+".freewar.de/freewar/internal/main.php?arrive_eval=oben"+betreten, true);
                betretenreq.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
                betretenreq.setRequestHeader("Accept-Language", "de,en-US;q=0.7,en;q=0.3");
                betretenreq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                betretenreq.send();
                parent.mapFrame.location.reload();
            }

            else if(direction == "kathedralebetreten" || direction == "kathedraleverlassen")
            {
                var betreten;
                switch (direction)
                {
                    case "kathedralebetreten":
                        betreten = "1996";
                        break;
                    case "kathedraleverlassen":
                        betreten = "2635";
                        break;
                }

                var betretenreq = new XMLHttpRequest();
                betretenreq.open("GET", "https://"+welt+".freewar.de/freewar/internal/main.php?arrive_eval=oben"+betreten, true);
                betretenreq.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
                betretenreq.setRequestHeader("Accept-Language", "de,en-US;q=0.7,en;q=0.3");
                betretenreq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                betretenreq.send();
                parent.mapFrame.location.reload();
            }



            else if(direction == "kathedrale2betreten" || direction == "kathedrale2verlassen")
            {
                var betreten;
                switch (direction)
                {
                    case "kathedrale2betreten":
                        betreten = "2654";
                        break;
                    case "kathedrale2verlassen":
                        betreten = "2631";
                        break;
                }

                var betretenreq = new XMLHttpRequest();
                betretenreq.open("GET", "https://"+welt+".freewar.de/freewar/internal/main.php?arrive_eval=oben"+betreten, true);
                betretenreq.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
                betretenreq.setRequestHeader("Accept-Language", "de,en-US;q=0.7,en;q=0.3");
                betretenreq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                betretenreq.send();
                parent.mapFrame.location.reload();
            }

            else if(direction == "kathedrale3betreten" || direction == "kathedrale3verlassen")
            {
                var betreten;
                switch (direction)
                {
                    case "kathedrale3betreten":
                        betreten = "2653";
                        break;
                    case "kathedrale3verlassen":
                        betreten = "2632";
                        break;
                }

                var betretenreq = new XMLHttpRequest();
                betretenreq.open("GET", "https://"+welt+".freewar.de/freewar/internal/main.php?arrive_eval=oben"+betreten, true);
                betretenreq.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
                betretenreq.setRequestHeader("Accept-Language", "de,en-US;q=0.7,en;q=0.3");
                betretenreq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                betretenreq.send();
                parent.mapFrame.location.reload();
            }

            else if(direction == "altdranarbetreten" || direction == "altdranarverlassen")
            {
                var betreten;
                switch (direction)
                {
                    case "altdranarbetreten":
                        betreten = "301";
                        break;
                    case "altdranarverlassen":
                        betreten = "301";
                        break;
                }

                var betretenreq = new XMLHttpRequest();
                betretenreq.open("GET", "https://"+welt+".freewar.de/freewar/internal/main.php?arrive_eval=oben"+betreten, true);
                betretenreq.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
                betretenreq.setRequestHeader("Accept-Language", "de,en-US;q=0.7,en;q=0.3");
                betretenreq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                betretenreq.send();
                parent.mapFrame.location.reload();
            }

            else if(direction == "diebeshöhlebetreten" || direction == "diebeshöhleverlassen")
            {
                var betreten;
                switch (direction)
                {
                    case "diebeshöhlebetreten":
                        betreten = "48";
                        break;
                    case "diebeshöhleverlassen":
                        betreten = "2175";
                        break;
                }

                var betretenreq = new XMLHttpRequest();
                betretenreq.open("GET", "https://"+welt+".freewar.de/freewar/internal/main.php?arrive_eval=oben"+betreten, true);
                betretenreq.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
                betretenreq.setRequestHeader("Accept-Language", "de,en-US;q=0.7,en;q=0.3");
                betretenreq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                betretenreq.send();
                parent.mapFrame.location.reload();
            }

            else if(direction ==  "hulnodarburgbetreten" || direction == "hulnodarburgverlassen")
            {
                var betreten;
                switch (direction)
                {
                    case "hulnodarburgbetreten":
                        betreten = "unten2064";
                        break;
                    case "hulnodarburgverlassen":
                        betreten = "oben2419";
                        break;
                }

                var betretenreq = new XMLHttpRequest();
                betretenreq.open("GET", "https://"+welt+".freewar.de/freewar/internal/main.php?arrive_eval="+betreten, true);
                betretenreq.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
                betretenreq.setRequestHeader("Accept-Language", "de,en-US;q=0.7,en;q=0.3");
                betretenreq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                betretenreq.send();
                parent.mapFrame.location.reload();
            }

            else if(direction ==  "vulkanbetreten" || direction == "vulkanverlassen")
            {
                var betreten;
                switch (direction)
                {
                    case "vulkanbetreten":
                        betreten = "oben62";
                        break;
                    case "vulkanverlassen":
                        betreten = "oben217";
                        break;
                }

                var betretenreq = new XMLHttpRequest();
                betretenreq.open("GET", "https://"+welt+".freewar.de/freewar/internal/main.php?arrive_eval="+betreten, true);
                betretenreq.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
                betretenreq.setRequestHeader("Accept-Language", "de,en-US;q=0.7,en;q=0.3");
                betretenreq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                betretenreq.send();
                parent.mapFrame.location.reload();
            }

            else if(direction ==  "korallenriffbetreten" || direction == "tiefenriff")
            {
                var betreten;
                switch (direction)
                {
                    case "korallenriffbetreten":
                        betreten = "unten1450";
                        break;
                    case "tiefenriff":
                        betreten = "unten";
                        break;
                }

                var betretenreq = new XMLHttpRequest();
                betretenreq.open("GET", "https://"+welt+".freewar.de/freewar/internal/main.php?arrive_eval="+betreten, true);
                betretenreq.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
                betretenreq.setRequestHeader("Accept-Language", "de,en-US;q=0.7,en;q=0.3");
                betretenreq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                betretenreq.send();
                parent.mapFrame.location.reload();
            }
            else if(direction == "schifflinya")
        {
            var betreten;
            switch (direction)
            {
                case "schifflinya":
                    betreten = "1849";
                    break;
            }

            var betretenreq = new XMLHttpRequest();
            betretenreq.open("GET", "https://"+welt+".freewar.de/freewar/internal/main.php?arrive_eval=oben"+betreten, true);
            betretenreq.setRequestHeader("User-Agent","Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063");
            betretenreq.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,/;q=0.8");
            betretenreq.setRequestHeader("Accept-Language", "de,en-US;q=0.7,en;q=0.3");
            betretenreq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            betretenreq.send();
            parent.mapFrame.location.reload();
        }
         else if(direction == "kanalisation2betreten")
        {
            var betreten;
            switch (direction)
            {
                case "kanalisation2betreten":
                    betreten = "236";
                    break;
            }

            var betretenreq = new XMLHttpRequest();
            betretenreq.open("GET", "https://"+welt+".freewar.de/freewar/internal/main.php?arrive_eval=oben"+betreten, true);
            betretenreq.setRequestHeader("User-Agent","Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063");
            betretenreq.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,/;q=0.8");
            betretenreq.setRequestHeader("Accept-Language", "de,en-US;q=0.7,en;q=0.3");
            betretenreq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            betretenreq.send();
            parent.mapFrame.location.reload();
        }
              else if(direction == "ruinebetreten" || direction == "ruineverlassen")
        {
            var betreten;
            switch (direction)
            {
                case "ruinebetreten":
                    betreten = "111";
                    break;
                case "ruineverlassen":
                    betreten = "380";
                    break;
            }

            var betretenreq = new XMLHttpRequest();
            betretenreq.open("GET", "https://"+welt+".freewar.de/freewar/internal/main.php?arrive_eval=oben"+betreten, true);
            betretenreq.setRequestHeader("User-Agent","Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063");
            betretenreq.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,/;q=0.8");
            betretenreq.setRequestHeader("Accept-Language", "de,en-US;q=0.7,en;q=0.3");
            betretenreq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            betretenreq.send();
            parent.mapFrame.location.reload();
        }
            else if(direction == "repairall")
            {
                var repairreq = new XMLHttpRequest();
                repairreq.open("GET", "https://"+welt+".freewar.de/freewar/internal/main.php?arrive_eval=dorepairall", true);
                repairreq.setRequestHeader("User-Agent","Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063");
                repairreq.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
                repairreq.setRequestHeader("Accept-Language", "de,en-US;q=0.7,en;q=0.3");
                repairreq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                Pfad.splice(0,1);
                localStorage.setItem('eintraegeArray', JSON.stringify(Pfad));
                repairreq.send();
                //parent.mainFrame.location.reaload();
            }
            else if(direction == "sumpfgaslagerleeren" || direction == "oellagerleeren" || direction == "fischlagerleeren")
            {
                var myhtml = document.getElementsByClassName("areadescription")[1].innerHTML;
                var checkID = myhtml.substring(myhtml.search("checkid=")+8,myhtml.search("\">"));
                var betretenreq = new XMLHttpRequest();
                betretenreq.open("GET", "https://"+welt+".freewar.de/freewar/internal/main.php?arrive_eval=drink&checkid="+checkID, true);
                betretenreq.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
                betretenreq.setRequestHeader("Accept-Language", "de,en-US;q=0.7,en;q=0.3");
                betretenreq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                Pfad.splice(0,1);
                betretenreq.onreadystatechange = function(){
                        if (betretenreq.readyState === 4 && betretenreq.status === 200){
                            parent.mapFrame.location.reload();
                        }
                };
                localStorage.setItem('eintraegeArray', JSON.stringify(Pfad));
                betretenreq.send();
            }
            else if(direction == "finstereisbetreten" || direction == "finstereisverlassen")
        {
            var betreten;
            switch (direction)
            {
                case "finstereisbetreten":
                    betreten = "4320";
                    break;
                case "finstereisverlassen":
                    betreten = "4528";
                    break;
            }

            var betretenreq = new XMLHttpRequest();
            betretenreq.open("GET", "https://"+welt+".freewar.de/freewar/internal/main.php?arrive_eval=oben"+betreten, true);
            betretenreq.setRequestHeader("User-Agent","Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063");
            betretenreq.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,/;q=0.8");
            betretenreq.setRequestHeader("Accept-Language", "de,en-US;q=0.7,en;q=0.3");
            betretenreq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            betretenreq.send();
            parent.mapFrame.location.reload();
        }

            else if(direction == "wasserhöhlebetreten" || direction == "wasserhöhleverlassen")
        {
            var betreten;
            switch (direction)
            {
                case "wasserhöhlebetreten":
                    betreten = "863";
                    break;
                case "wasserhöhleverlassen":
                    betreten = "918";
                    break;
            }

            var betretenreq = new XMLHttpRequest();
            betretenreq.open("GET", "https://"+welt+".freewar.de/freewar/internal/main.php?arrive_eval=oben"+betreten, true);
            betretenreq.setRequestHeader("User-Agent","Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063");
            betretenreq.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,/;q=0.8");
            betretenreq.setRequestHeader("Accept-Language", "de,en-US;q=0.7,en;q=0.3");
            betretenreq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            betretenreq.send();
            parent.mapFrame.location.reload();
        }
            else if(direction == "kltropfsteinhöhlebetreten" || direction == "kltropfsteinhöhleverlassen")
        {
            var betreten;
            switch (direction)
            {
                case "kltropfsteinhöhlebetreten":
                    betreten = "879";
                    break;
                case "kltropfsteinhöhleverlassen":
                    betreten = "919";
                    break;
            }

            var betretenreq = new XMLHttpRequest();
            betretenreq.open("GET", "https://"+welt+".freewar.de/freewar/internal/main.php?arrive_eval=oben"+betreten, true);
            betretenreq.setRequestHeader("User-Agent","Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063");
            betretenreq.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,/;q=0.8");
            betretenreq.setRequestHeader("Accept-Language", "de,en-US;q=0.7,en;q=0.3");
            betretenreq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            betretenreq.send();
            parent.mapFrame.location.reload();
        }
            else if(direction == "grtropfsteinhöhlebetreten" || direction == "grtropfsteinhöhleverlassen")
        {
            var betreten;
            switch (direction)
            {
                case "grtropfsteinhöhlebetreten":
                    betreten = "877";
                    break;
                case "grtropfsteinhöhleverlassen":
                    betreten = "895";
                    break;
            }

            var betretenreq = new XMLHttpRequest();
            betretenreq.open("GET", "https://"+welt+".freewar.de/freewar/internal/main.php?arrive_eval=oben"+betreten, true);
            betretenreq.setRequestHeader("User-Agent","Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063");
            betretenreq.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,/;q=0.8");
            betretenreq.setRequestHeader("Accept-Language", "de,en-US;q=0.7,en;q=0.3");
            betretenreq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            betretenreq.send();
            parent.mapFrame.location.reload();
        }
            else if(direction == "stiftungabholen")
            {
                var stiftungreq = new XMLHttpRequest();
                stiftungreq.open("GET", "https://"+welt+".freewar.de/freewar/internal/main.php?arrive_eval=drinkwater", true);
                stiftungreq.setRequestHeader("User-Agent","Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063");
                stiftungreq.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
                stiftungreq.setRequestHeader("Accept-Language", "de,en-US;q=0.7,en;q=0.3");
                stiftungreq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                stiftungreq.send();
                parent.mapFrame.location.reload();

            }
            else if(direction.includes("start:"))
            {
                var xcoord = parent.mapFrame.document.getElementsByClassName("positiontext")[0].innerText.trim().split(" ")[2];
                var ycoord = parent.mapFrame.document.getElementsByClassName("positiontext")[0].innerText.trim().split(" ")[4];
                var curposition = xcoord+"|"+ycoord;
                Pfad.splice(0,1);

                //console.log("Finde Weg "+curposition+" -> " +direction.replace("start:",""));
                var newdirections = finde_weg(curposition,direction.replace("start:",""));
                if (newdirections.way.search("Portal nach") !== -1)
                {
                    newdirections.way = newdirections.way.substring(newdirections.way.search("Portal nach"), newdirections.way.length);
                    newdirections.way = newdirections.way.replace("Portal nach ","portal-");
                }

                newdirections.way = newdirections.way.replace("Start->","");
                newdirections.way = newdirections.way.split("->");
                //console.log(newdirections.way);

                newdirections.way = translatefromwayfinder(newdirections.way, curposition);

                newdirections.way = newdirections.way.reverse();
                for (var i=0;i<newdirections.way.length;i++)
                {
                    Pfad.unshift(newdirections.way[i]);
                }
                //console.log(Pfad);
                if(Pfad[0] == null)
                {
                    Pfad.shift();
                }
                localStorage.setItem('eintraegeArray', JSON.stringify(Pfad));

            }
            else if (direction.startsWith("gzk-") || direction.startsWith("ZK/Nebel/Flügel nach "))
            {
                direction = direction.replace("gzk-","");
                direction = direction.replace("ZK/Nebel/Flügel nach ","");
                usegzk(direction);
            }
            else if (direction.startsWith("gelbezk-"))
        {
            direction = direction.replace("gelbezk-","");
            usegelbezk(direction);
        }
            else if (direction.startsWith("portal-"))
            {
                direction = direction.replace("portal-","");
                useportal(direction);
            }
            else if (parent.mapFrame.document.getElementById("test").innerText === "Du kannst in 1 Sekunden weiterreisen" || parent.mapFrame.document.getElementById("test").innerText === "")
            {
                //console.log("Kann mich jetzt bewegen");
                var walkid = parent.mapFrame.document.head.innerText.search("&intwalkid=");
                walkid = parent.mapFrame.document.head.innerText.substring(walkid, walkid+40);
                walkid = walkid.substring(walkid.search("=")+1,walkid.search("';"));

                if (!document.URL.includes("afsrv")){
                    switch (direction){
                        case "left":
                            direction = "X=-1&walkY=0";
                            break;
                        case "upleft":
                            direction = "X=-1&walkY=-1";
                            break;
                        case "up":
                            direction = "X=0&walkY=-1";
                            break;
                        case "upright":
                            direction = "X=1&walkY=-1";
                            break;
                        case "right":
                            direction = "X=1&walkY=0";
                            break;
                        case "downright":
                            direction = "X=1&walkY=1";
                            break;
                        case "down":
                            direction = "X=0&walkY=1";
                            break;
                        case "downleft":
                            direction = "X=-1&walkY=1";
                            break;
                    }
                }
                else{
                    direction = "="+direction;
                }
                parent.mapFrame.location.href = "map.php?walk" +direction + "&intwalkid=" + walkid;
            }
            else
            {
                setTimeout(move, 300, direction, Pfad);
            }
        }

        function getPath() {
            var eintraegeArray = localStorage.getItem('eintraegeArray');
            if (!eintraegeArray) {
                eintraegeArray = [];
                localStorage.setItem('eintraegeArray', JSON.stringify(eintraegeArray));
            } else {
                eintraegeArray = JSON.parse(eintraegeArray);
            }
            return eintraegeArray;
        }

        function translatefromwayfinder(way, startpos){
            var tobeadded;
            //console.log("Mein ausgegebener weg ist:\n"+way);
            /*switch (way[0])
            {
                case "portal-Kolun":
                    startpos = "62|83";
                    break;
                case "portal-Kerdis":
                    startpos = "90|115";
                    break;
                case "portal-Rovonia":
                    startpos = "64|80";
                    break;
                case "portal-Laree":
                    startpos = "54|76";
                    break;
                case "portal-Kuridan/Wandelfluss":
                    startpos = "122|100";
                    break;
                case "portal-Terasi":
                    startpos = "72|116";
                    break;
                case "portal-Felseninsel":
                    startpos = "144|126";
                    break;
                case "portal-Torihn":
                    startpos = "121|91";
                    break;
                case "portal-Lardikia":
                    startpos = "122|116";
                    break;
                case "portal-Krato":
                    startpos = "59|106";
                    break;
                case "portal-Brondor":
                    startpos = "129|90";
                    break;
                case "portal-Kuridan/Prärie":
                    startpos = "115|100";
                    break;
                case "portal-Wilisien":
                    startpos = "111|83";
                    break;
                case "portal-Linya":
                    startpos = "135|115";
                    break;
                case "portal-Dranar":
                    startpos = "58|98";
                    break;
                case "portal-Ferdolien":
                    startpos = "106|93";
                    break;
                case "portal-Nawor":
                    startpos = "110|107";
                    break;
                case "portal-Dorea":
                    startpos = "118|124";
                    break;
                case "portal-Ragnur":
                    startpos = "96|78";
                    break;
                case "portal-vergessenekathedrale":
                    startpos = "-286|-479";
                    break;
                case "portal-todesgrotte":
                    startpos = "-827|-919";
                    break;

            }*/
            if (way[0].startsWith("portal"))
            {
                tobeadded = way[0];
                startpos = way[1];
                way.shift();
                way.shift();
            }
            var xcoord = parseInt(startpos.split("|")[0]);
            var ycoord = parseInt(startpos.split("|")[1]);
            //console.log("Gehe in die Schleife mit startpos:\n"+startpos+"\nund weg:\n"+way);
            for (var i = 0; i<way.length; i++)
            {
                var next = way[i].split("|");
                if (parseInt(next[0]) == parseInt(xcoord) && parseInt(next[1]) == parseInt(ycoord))
                {
                    way.splice(0,1);
                }
                else if (parseInt(next[0]) == parseInt(xcoord) && parseInt(next[1]) < parseInt(ycoord))
                {
                    ycoord--;
                    way[i] = "up";
                }
                else if (parseInt(next[0]) == parseInt(xcoord) && parseInt(next[1]) > parseInt(ycoord))
                {
                    ycoord++;
                    way[i] = "down";
                }
                else if (parseInt(next[0]) < parseInt(xcoord) && parseInt(next[1]) == parseInt(ycoord))
                {
                    xcoord--;
                    way[i] = "left";
                }
                else if (parseInt(next[0]) > parseInt(xcoord) && parseInt(next[1]) == parseInt(ycoord))
                {
                    xcoord++;
                    way[i] = "right";
                }
                else if (parseInt(next[0]) > parseInt(xcoord) && parseInt(next[1]) < parseInt(ycoord))
                {
                    ycoord--;
                    xcoord++;
                    way[i] = "upright";
                }
                else if (parseInt(next[0]) > parseInt(xcoord) && parseInt(next[1]) > parseInt(ycoord))
                {
                    ycoord++;
                    xcoord++;
                    way[i] = "downright";
                }
                else if (parseInt(next[0]) < parseInt(xcoord) && parseInt(next[1]) > parseInt(ycoord))
                {
                    ycoord++;
                    xcoord--;
                    way[i] = "downleft";
                }
                else if (parseInt(next[0]) < parseInt(xcoord) && parseInt(next[1]) < parseInt(ycoord))
                {
                    ycoord--;
                    xcoord--;
                    way[i] = "upleft";
                }

            }
            way.unshift(tobeadded);
            //console.log("Mein übersetzter weg lautet: "+way)
            return way;
        }

        function Buddeln(){
            if (parent.mapFrame.document.getElementById("test").innerText === ""){
                console.log("Buddle...");
                var itemlink = useItem("Ausgrabungsspaten");
                if(!itemlink){var itemlink = useItem("Ausgrabungsschaufel");}
                itemlink += "&mode=1";
                console.log(itemlink);

                var buddelrequest = new XMLHttpRequest();
                buddelrequest.open("GET", itemlink, true);
                buddelrequest.onreadystatechange = function(){
                    if(buddelrequest.readyState == 4 && buddelrequest.status == 200){
                        var buddelantwort = buddelrequest.response;
                        if (buddelantwort.indexOf("nichts.") !== -1){
                            localStorage.setItem("nixgefunden", true);
                            //parent.mapFrame.location.reload();
                        }
                    }
                };
                buddelrequest.send();
            }
            else
            {
                setTimeout(Buddeln, 500);
            }

        }

        function AddtoPath(directions){
            let pfad = getPath();
            for (var i=0;i<directions.length; i++){
                pfad.push(directions[i]);
            }
            localStorage.setItem('eintraegeArray', JSON.stringify(pfad));
        }

        function appendpathbuttons(walkdiv){
            var Zeilenumbruch1 = document.createElement("br");
            walkdiv.appendChild(Zeilenumbruch1);

        var buttonmentoran = document.createElement("button");
        buttonmentoran.style="height: 20px; width: 50px;";
        buttonmentoran.style.fontSize = "9";
        buttonmentoran.textContent = "Mentoran";
        buttonmentoran.onclick = function(){console.log("Füge mentoran laufstrecke zum pfad hinzu");AddtoPath(waymentoran);};
        walkdiv.appendChild(buttonmentoran);

        var buttonplefir = document.createElement("button");
        buttonplefir.style="height: 20px; width: 50px;";
        buttonplefir.style.fontSize = "9";
        buttonplefir.textContent = "Plefir";
        buttonplefir.onclick = function(){console.log("Füge plefir laufstrecke zum pfad hinzu");AddtoPath(wayplefir);};
        walkdiv.appendChild(buttonplefir);

        var buttonorewu = document.createElement("button");
        buttonorewu.style="height: 20px; width: 50px;";
        buttonorewu.style.fontSize = "9";
        buttonorewu.textContent = "Orewu";
        buttonorewu.onclick = function(){console.log("Füge orewu laufstrecke zum pfad hinzu");AddtoPath(wayorewu);};
        walkdiv.appendChild(buttonorewu);

        var buttonhewien = document.createElement("button");
        buttonhewien.style="height: 20px; width: 50px;";
        buttonhewien.style.fontSize = "9";
        buttonhewien.textContent = "Hewien";
        buttonhewien.onclick = function(){console.log("Füge hewien laufstrecke zum pfad hinzu");AddtoPath(wayhewien);};
        walkdiv.appendChild(buttonhewien);

        var buttonkerdis = document.createElement("button");
        buttonkerdis.style="height: 20px; width: 50px;";
        buttonkerdis.style.fontSize = "9";
        buttonkerdis.textContent = "KerdisCo";
        buttonkerdis.onclick = function(){console.log("Füge kerdis laufstrecke zum pfad hinzu");AddtoPath(waykerdis);};
        walkdiv.appendChild(buttonkerdis);

        var buttonburan = document.createElement("button");
        buttonburan.style="height: 20px; width: 50px;";
        buttonburan.style.fontSize = "9";
        buttonburan.textContent = "Buran";
        buttonburan.onclick = function(){console.log("Füge buran laufstrecke zum pfad hinzu");AddtoPath(wayburan);};
        walkdiv.appendChild(buttonburan);

        var buttonnarubia = document.createElement("button");
        buttonnarubia.style="height: 20px; width: 50px;";
        buttonnarubia.style.fontSize = "9";
        buttonnarubia.textContent = "Narubia";
        buttonnarubia.onclick = function(){console.log("Füge buran laufstrecke zum pfad hinzu");AddtoPath(waynarubia);};
        walkdiv.appendChild(buttonnarubia);

        var buttondorea = document.createElement("button");
        buttondorea.style="height: 20px; width: 50px;";
        buttondorea.style.fontSize = "9";
        buttondorea.textContent = "Dorea";
        buttondorea.onclick = function(){console.log("Füge dorea laufstrecke zum pfad hinzu");AddtoPath(waydorea);};
        walkdiv.appendChild(buttondorea);

        var buttonruward = document.createElement("button");
        buttonruward.style="height: 20px; width: 50px;";
        buttonruward.style.fontSize = "9";
        buttonruward.textContent = "Ruward";
        buttonruward.onclick = function(){console.log("Füge buran laufstrecke zum pfad hinzu");AddtoPath(wayruward);};
        walkdiv.appendChild(buttonruward);

        var buttonsutranien = document.createElement("button");
        buttonsutranien.style="height: 20px; width: 50px;";
        buttonsutranien.style.fontSize = "9";
        buttonsutranien.textContent = "Sutra";
        buttonsutranien.onclick = function(){console.log("Füge buran laufstrecke zum pfad hinzu");AddtoPath(waysutranien);};
        walkdiv.appendChild(buttonsutranien);

        var buttonurdanien = document.createElement("button");
        buttonurdanien.style="height: 20px; width: 50px;";
        buttonurdanien.style.fontSize = "9";
        buttonurdanien.textContent = "Urda";
        buttonurdanien.onclick = function(){console.log("Füge buran laufstrecke zum pfad hinzu");AddtoPath(wayurdanien);};
        walkdiv.appendChild(buttonurdanien);

        var buttontdr = document.createElement("button");
        buttontdr.style="height: 20px; width: 50px;";
        buttontdr.style.fontSize = "9";
        buttontdr.textContent = "T.d.Ruinen";
        buttontdr.onclick = function(){console.log("Füge buran laufstrecke zum pfad hinzu");AddtoPath(waytdr);};
        walkdiv.appendChild(buttontdr);

        var buttonhewienhöhlen = document.createElement("button");
        buttonhewienhöhlen.style="height: 20px; width: 50px;";
        buttonhewienhöhlen.style.fontSize = "9";
        buttonhewienhöhlen.textContent = "HewienHö";
        buttonhewienhöhlen.onclick = function(){console.log("Füge Hewien Höhlen laufstrecke zum pfad hinzu");AddtoPath(wayhewienhöhlen);};
        walkdiv.appendChild(buttonhewienhöhlen);

        var buttonsteinrutsch = document.createElement("button");
        buttonsteinrutsch.style="height: 20px; width: 50px;";
        buttonsteinrutsch.style.fontSize = "9";
        buttonsteinrutsch.textContent = "Steinrutsch";
        buttonsteinrutsch.onclick = function(){console.log("Füge Frostis laufstrecke zum pfad hinzu");AddtoPath(waysteinrutsch);};
        walkdiv.appendChild(buttonsteinrutsch);

        var buttonkanobien = document.createElement("button");
        buttonkanobien.style="height: 20px; width: 50px;";
        buttonkanobien.style.fontSize = "9";
        buttonkanobien.textContent = "Kanobien";
        buttonkanobien.onclick = function(){console.log("Füge Frostis laufstrecke zum pfad hinzu");AddtoPath(waykanobien);};
        walkdiv.appendChild(buttonkanobien);

        var buttongobos = document.createElement("button");
        buttongobos.style="height: 20px; width: 50px;";
        buttongobos.style.fontSize = "9";
        buttongobos.textContent = "Gobos";
        buttongobos.onclick = function(){console.log("Füge Frostis laufstrecke zum pfad hinzu");AddtoPath(waygobos);};
        walkdiv.appendChild(buttongobos);

        var buttonterasi = document.createElement("button");
        buttonterasi.style="height: 20px; width: 50px;";
        buttonterasi.style.fontSize = "9";
        buttonterasi.textContent = "Terasi";
        buttonterasi.onclick = function(){console.log("Füge Terasi laufstrecke zum pfad hinzu");AddtoPath(wayterasi);};
        walkdiv.appendChild(buttonterasi);

        var buttonnawor = document.createElement("button");
        buttonnawor.style="height: 20px; width: 50px;";
        buttonnawor.style.fontSize = "9";
        buttonnawor.textContent = "Nawor";
        buttonnawor.onclick = function(){console.log("Füge Nawor laufstrecke zum pfad hinzu");AddtoPath(waynawor);};
        walkdiv.appendChild(buttonnawor);

        var buttondelos = document.createElement("button");
        buttondelos.style="height: 20px; width: 50px;";
        buttondelos.style.fontSize = "9";
        buttondelos.textContent = "Delos";
        buttondelos.onclick = function(){console.log("Füge delos laufstrecke zum pfad hinzu");AddtoPath(waydelos);};
        walkdiv.appendChild(buttondelos);

        var buttonanatubien = document.createElement("button");
        buttonanatubien.style="height: 20px; width: 50px;";
        buttonanatubien.style.fontSize = "9";
        buttonanatubien.textContent = "Anatub.";
        buttonanatubien.onclick = function(){console.log("Füge Anatubien laufstrecke zum pfad hinzu");AddtoPath(wayanatubien);};
        walkdiv.appendChild(buttonanatubien);

        var buttonkonlir = document.createElement("button");
        buttonkonlir.style="height: 20px; width: 50px;";
        buttonkonlir.style.fontSize = "9";
        buttonkonlir.textContent = "Konlir";
        buttonkonlir.onclick = function(){console.log("Füge Konlir laufstrecke zum pfad hinzu");AddtoPath(waykonlir);};
        walkdiv.appendChild(buttonkonlir);

        var buttonlatenia = document.createElement("button");
        buttonlatenia.style="height: 20px; width: 50px;";
        buttonlatenia.style.fontSize = "9";
        buttonlatenia.textContent = "Latenia";
        buttonlatenia.onclick = function(){console.log("Füge Latenia laufstrecke zum pfad hinzu");AddtoPath(waylatenia);};
        walkdiv.appendChild(buttonlatenia);

        var buttonterbat = document.createElement("button");
        buttonterbat.style="height: 20px; width: 50px;";
        buttonterbat.style.fontSize = "9";
        buttonterbat.textContent = "Terbat";
        buttonterbat.onclick = function(){console.log("Füge Terbat laufstrecke zum pfad hinzu");AddtoPath(wayterbat);};
        walkdiv.appendChild(buttonterbat);

        var buttonlodradon = document.createElement("button");
        buttonlodradon.style="height: 20px; width: 50px;";
        buttonlodradon.style.fontSize = "9";
        buttonlodradon.textContent = "Lodra.";
        buttonlodradon.onclick = function(){console.log("Füge Lodradon laufstrecke zum pfad hinzu");AddtoPath(waylodradon);};
        walkdiv.appendChild(buttonlodradon);

        var buttonferdo = document.createElement("button");
        buttonferdo.style="height: 20px; width: 50px;";
        buttonferdo.style.fontSize = "9";
        buttonferdo.textContent = "Ferdolien";
        buttonferdo.onclick = function(){console.log("Füge Ferdolien laufstrecke zum pfad hinzu");AddtoPath(wayferdolien);};
        walkdiv.appendChild(buttonferdo);

        var buttonazul = document.createElement("button");
        buttonazul.style="height: 20px; width: 50px;";
        buttonazul.style.fontSize = "9";
        buttonazul.textContent = "Azul";
        buttonazul.onclick = function(){console.log("Füge Azul laufstrecke zum pfad hinzu");AddtoPath(wayazul);};
        walkdiv.appendChild(buttonazul);

        var buttonryn = document.createElement("button");
        buttonryn.style="height: 20px; width: 50px;";
        buttonryn.style.fontSize = "9";
        buttonryn.textContent = "Ryn";
        buttonryn.onclick = function(){console.log("Füge Ryn laufstrecke zum pfad hinzu");AddtoPath(wayryn);};
        walkdiv.appendChild(buttonryn);

        var buttonfinstereis = document.createElement("button");
        buttonfinstereis.style="height: 20px; width: 50px;";
        buttonfinstereis.style.fontSize = "9";
        buttonfinstereis.textContent = "Finstereis";
        buttonfinstereis.onclick = function(){console.log("Füge finstereis laufstrecke zum pfad hinzu");AddtoPath(wayfinstereis);};
        walkdiv.appendChild(buttonfinstereis);

        var buttonkrato = document.createElement("button");
        buttonkrato.style="height: 20px; width: 50px;";
        buttonkrato.style.fontSize = "9";
        buttonkrato.textContent = "Krato+";
        buttonkrato.onclick = function(){console.log("Füge pensal laufstrecke zum pfad hinzu");AddtoPath(waykrato);};
        walkdiv.appendChild(buttonkrato);

        var buttonpensal = document.createElement("button");
        buttonpensal.style="height: 20px; width: 50px;";
        buttonpensal.style.fontSize = "9";
        buttonpensal.textContent = "+Pensal";
        buttonpensal.onclick = function(){console.log("Füge pensal laufstrecke zum pfad hinzu");AddtoPath(waypensal);};
        walkdiv.appendChild(buttonpensal);

        var buttonwilisien = document.createElement("button");
        buttonwilisien.style="height: 20px; width: 50px;";
        buttonwilisien.style.fontSize = "9";
        buttonwilisien.textContent = "Wilisien";
        buttonwilisien.onclick = function(){console.log("Füge Frostis laufstrecke zum pfad hinzu");AddtoPath(wayfrostis);};
        walkdiv.appendChild(buttonwilisien);

        var buttonragnur = document.createElement("button");
        buttonragnur.style="height: 20px; width: 50px;";
        buttonragnur.style.fontSize = "9";
        buttonragnur.textContent = "+Ragnur";
        buttonragnur.onclick = function(){console.log("Füge Frostis laufstrecke zum pfad hinzu");AddtoPath(wayragnurright);};
        walkdiv.appendChild(buttonragnur);

        var buttonkolun = document.createElement("button");
        buttonkolun.style="height: 20px; width: 50px;";
        buttonkolun.style.fontSize = "9";
        buttonkolun.textContent = "Kolun+";
        buttonkolun.onclick = function(){console.log("Füge Kolun laufstrecke zum pfad hinzu");AddtoPath(waykolun);};
        walkdiv.appendChild(buttonkolun);

        var buttonlimm = document.createElement("button");
        buttonlimm.style="height: 20px; width: 50px;";
        buttonlimm.style.fontSize = "9";
        buttonlimm.textContent = "+Limm";
        buttonlimm.onclick = function(){console.log("Füge Limm laufstrecke zum pfad hinzu");AddtoPath(waylimm);};
        walkdiv.appendChild(buttonlimm);

         var buttonrovonia = document.createElement("button");
        buttonrovonia.style="height: 20px; width: 50px;";
        buttonrovonia.style.fontSize = "9";
        buttonrovonia.textContent = "Rovonia+";
        buttonrovonia.onclick = function(){console.log("Füge rovonia laufstrecke zum pfad hinzu");AddtoPath(wayrovonia);};
        walkdiv.appendChild(buttonrovonia);

        var buttonvenost = document.createElement("button")
        buttonvenost.style="height: 20px; width: 50px;";
        buttonvenost.style.fontSize = "9";
        buttonvenost.textContent = "+Venost";
        buttonvenost.onclick = function(){console.log("Füge venost laufstrecke zum pfad hinzu");AddtoPath(wayvenost);};
        walkdiv.appendChild(buttonvenost);

        var buttonprärie = document.createElement("button");
        buttonprärie.style="height: 20px; width: 50px;";
        buttonprärie.style.fontSize = "9";
        buttonprärie.textContent = "Prärie";
        buttonprärie.onclick = function(){console.log("Füge prärie laufstrecke zum pfad hinzu");AddtoPath(wayprärie);};
        walkdiv.appendChild(buttonprärie);

        var buttonlinya = document.createElement("button");
        buttonlinya.style="height: 20px; width: 50px;";
        buttonlinya.style.fontSize = "9";
        buttonlinya.textContent = "+Linya";
        buttonlinya.onclick = function(){console.log("Füge linya laufstrecke zum pfad hinzu");AddtoPath(waylinya);};
        walkdiv.appendChild(buttonlinya);

        var buttondranaralt = document.createElement("button");
        buttondranaralt.style="height: 20px; width: 50px;";
        buttondranaralt.style.fontSize = "9";
        buttondranaralt.textContent = "alt+Dranar";
        buttondranaralt.onclick = function(){console.log("Füge Altes Dranar laufstrecke zum pfad hinzu");AddtoPath(wayaltesdranar);};
        walkdiv.appendChild(buttondranaralt);

        var buttonmine = document.createElement("button");
        buttonmine.style="height: 20px; width: 50px;";
        buttonmine.style.fontSize = "9";
        buttonmine.textContent = "Minen";
        buttonmine.onclick = function(){console.log("Füge Minen laufstrecke zum pfad hinzu");AddtoPath(waymine);};
        walkdiv.appendChild(buttonmine);

        //var buttonmineundso = document.createElement("button");
        //buttonmineundso.style="height: 20px; width: 50px;";
        //buttonmineundso.style.fontSize = "9";
        //buttonmineundso.textContent = "In Arbeit";
        //buttonmineundso.onclick = function(){console.log("Füge Mine++ laufstrecke zum pfad hinzu");AddtoPath(mineundsojagenauto,Pfad);};
        //walkdiv.appendChild(buttonmineundso);

        var buttonlaree = document.createElement("button");
        buttonlaree.style="height: 20px; width: 50px;";
        buttonlaree.style.fontSize = "9";
        buttonlaree.textContent = "Laree";
        buttonlaree.onclick = function(){console.log("Füge Laree laufstrecke zum pfad hinzu");AddtoPath(waylaree);};
        walkdiv.appendChild(buttonlaree);

        var buttonriff = document.createElement("button");
        buttonriff.style="height: 20px; width: 50px;";
        buttonriff.style.fontSize = "9";
        buttonriff.textContent = "Riff";
        buttonriff.onclick = function(){console.log("Füge Riff laufstrecke zum pfad hinzu");AddtoPath(wayriff);};
        walkdiv.appendChild(buttonriff);

        var buttonwasserfall = document.createElement("button");
        buttonwasserfall.style="height: 20px; width: 50px;";
        buttonwasserfall.style.fontSize = "9";
        buttonwasserfall.textContent = "Wasserfall";
        buttonwasserfall.onclick = function(){console.log("Füge Wasserfall laufstrecke zum pfad hinzu");AddtoPath(waywasserfall);};
        walkdiv.appendChild(buttonwasserfall);

        var buttonkathedrale = document.createElement("button");
        buttonkathedrale.style="height: 20px; width: 50px;";
        buttonkathedrale.style.fontSize = "9";
        buttonkathedrale.textContent = "Kathe";
        buttonkathedrale.onclick = function(){console.log("Füge kathedrale laufstrecke zum pfad hinzu");AddtoPath(waykathedrale);};
        walkdiv.appendChild(buttonkathedrale);

        var buttonbernsteinhöhle = document.createElement("button");
        buttonbernsteinhöhle.style="height: 20px; width: 50px;";
        buttonbernsteinhöhle.style.fontSize = "9";
        buttonbernsteinhöhle.textContent = "Bernstein";
        buttonbernsteinhöhle.onclick = function(){console.log("Füge bernsteinhöhle laufstrecke zum pfad hinzu");AddtoPath(waybernsteinhöhle);};
        walkdiv.appendChild(buttonbernsteinhöhle);

        var buttongrotte = document.createElement("button");
        buttongrotte.style="height: 20px; width: 50px;";
        buttongrotte.style.fontSize = "9";
        buttongrotte.textContent = "Grotte";
        buttongrotte.onclick = function(){console.log("Füge grotte laufstrecke zum pfad hinzu");AddtoPath(waytodesgrotte);};
        walkdiv.appendChild(buttongrotte);

        var buttonsiedestein = document.createElement("button");
        buttonsiedestein.style="height: 20px; width: 50px;";
        buttonsiedestein.style.fontSize = "9";
        buttonsiedestein.textContent = "Siede";
        buttonsiedestein.onclick = function(){console.log("Füge siedestein laufstrecke zum pfad hinzu");AddtoPath(waysiedestein);};
        walkdiv.appendChild(buttonsiedestein);

        var buttondiebi = document.createElement("button");
        buttondiebi.style="height: 20px; width: 50px;";
        buttondiebi.style.fontSize = "9";
        buttondiebi.textContent = "Diebi";
        buttondiebi.onclick = function(){console.log("Füge Diebi laufstrecke zum pfad hinzu");AddtoPath(waydiebi);};
        walkdiv.appendChild(buttondiebi);

        var buttonbrondor = document.createElement("button");
        buttonbrondor.style="height: 20px; width: 50px;";
        buttonbrondor.style.fontSize = "9";
        buttonbrondor.textContent = "Brondor";
        buttonbrondor.onclick = function(){console.log("Füge brondor laufstrecke zum pfad hinzu");AddtoPath(waybrondor);};
        walkdiv.appendChild(buttonbrondor);

        var buttonwandelfluss = document.createElement("button");
        buttonwandelfluss.style="height: 20px; width: 50px;";
        buttonwandelfluss.style.fontSize = "9";
        buttonwandelfluss.textContent = "Wandelfl.";
        buttonwandelfluss.onclick = function(){console.log("Füge wandelfluss laufstrecke zum pfad hinzu");AddtoPath(waywandelfluss);};
        walkdiv.appendChild(buttonwandelfluss);

        var buttongrabvonreikan = document.createElement("button");
        buttongrabvonreikan.style="height: 20px; width: 50px;";
        buttongrabvonreikan.style.fontSize = "9";
        buttongrabvonreikan.textContent = "Grab";
        buttongrabvonreikan.onclick = function(){console.log("Füge grab laufstrecke zum pfad hinzu");AddtoPath(waygrabvonreikan);};
        walkdiv.appendChild(buttongrabvonreikan);

        var buttonkanalisation = document.createElement("button");
        buttonkanalisation.style="height: 20px; width: 50px;";
        buttonkanalisation.style.fontSize = "9";
        buttonkanalisation.textContent = "Quallen";
        buttonkanalisation.onclick = function(){console.log("Füge kanalisation laufstrecke zum pfad hinzu");AddtoPath(waykanalisation);};
        walkdiv.appendChild(buttonkanalisation);

        var buttoneishöhle = document.createElement("button");
        buttoneishöhle.style="height: 20px; width: 50px;";
        buttoneishöhle.style.fontSize = "9";
        buttoneishöhle.textContent = "Glypras";
        buttoneishöhle.onclick = function(){console.log("Füge eishöhle laufstrecke zum pfad hinzu");AddtoPath(wayeishöhle);};
        walkdiv.appendChild(buttoneishöhle);

        var buttonlichtwald = document.createElement("button");
        buttonlichtwald.style="height: 20px; width: 50px;";
        buttonlichtwald.style.fontSize = "9";
        buttonlichtwald.textContent = "Lichtwald";
        buttonlichtwald.onclick = function(){console.log("Füge lichtwald laufstrecke zum pfad hinzu");AddtoPath(waylichtwald);};
        walkdiv.appendChild(buttonlichtwald);

        var buttonollager = document.createElement("button");
        buttonollager.style="height: 20px; width: 50px;";
        buttonollager.style.fontSize = "9";
        buttonollager.textContent = "Öllager";
        buttonollager.onclick = function(){console.log("Füge ollager laufstrecke zum pfad hinzu");AddtoPath(wayollager);};
        walkdiv.appendChild(buttonollager);

        var buttonsumpfgas = document.createElement("button");
        buttonsumpfgas.style="height: 20px; width: 50px;";
        buttonsumpfgas.style.fontSize = "9";
        buttonsumpfgas.textContent = "Sumpfgas";
        buttonsumpfgas.onclick = function(){console.log("Füge Sumpfgas laufstrecke zum pfad hinzu");AddtoPath(waysumpfgas);};
        walkdiv.appendChild(buttonsumpfgas);

        var buttonstiftung = document.createElement("button");
        buttonstiftung.style="height: 20px; width: 50px;";
        buttonstiftung.style.fontSize = "9";
        buttonstiftung.textContent = "Stiftung";
        buttonstiftung.onclick = function(){console.log("Füge stiftung laufstrecke zum pfad hinzu");AddtoPath(waystiftung);};
        walkdiv.appendChild(buttonstiftung);

        var buttonontolon = document.createElement("button");
        buttonontolon.style="height: 20px; width: 50px;";
        buttonontolon.style.fontSize = "9";
        buttonontolon.textContent = "Custom";
        buttonontolon.onclick = function(){console.log("Füge ontolon laufstrecke zum pfad hinzu");AddtoPath(waycustom);};
        walkdiv.appendChild(buttonontolon);


        }

        function usegzk(destination){
            var itemlink = useItem("gepresste Zauberkugel");
            //console.log(itemlink);
            if (itemlink == null)
            {
                itemlink = useItem("große Zauberkugel");
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

    function usegelbezk(destination){
        var itemlink = useItem("geklebte, gelbe Zauberkugel");
        //console.log(itemlink);
        if (itemlink == null)
        {
            itemlink = useItem("gelbe Zauberkugel");
        }
        var value;
        switch (destination){
            case "grabvonreikan":
                value = "227";
                break;
            case "kanalisation":
                value = "244";
                break;
            case "ruine":
                value = "377";
                break;
            case "eishöhle":
                value = "1204";
                break;
            case "lichtwald":
                value = "1366";
                break;
        }
        //console.log(value);
        //console.log(itemlink);
        if (itemlink){
            var gelbezkrequest = new XMLHttpRequest();
            gelbezkrequest.open("POST", itemlink, true);
            gelbezkrequest.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
            gelbezkrequest.setRequestHeader("Accept-Language", "de,en-US;q=0.7,en;q=0.3");
            gelbezkrequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            var params = "z_pos_id=" +value;
            gelbezkrequest.send(params);
            parent.mapFrame.location.reload();

        }



    }



})();