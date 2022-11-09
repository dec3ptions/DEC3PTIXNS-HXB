console.log(
    "░█▀▀▄ ░█▀▀▀ ░█▀▀█ █▀▀█ ░█▀▀█ ▀▀█▀▀ ▀█▀ ▀▄░▄▀ ░█▄─░█ ░█▀▀▀█ 　 ░█─░█ ▀▄░▄▀ ░█▀▀█ \n"+
    "░█─░█ ░█▀▀▀ ░█─── ──▀▄ ░█▄▄█ ─░█── ░█─ ─░█── ░█░█░█ ─▀▀▀▄▄ 　 ░█▀▀█ ─░█── ░█▀▀▄ \n"+
    "░█▄▄▀ ░█▄▄▄ ░█▄▄█ █▄▄█ ░█─── ─░█── ▄█▄ ▄▀░▀▄ ░█──▀█ ░█▄▄▄█ 　 ░█─░█ ▄▀░▀▄ ░█▄▄█ "
);
    
    
    
    // GUI
    
document.body.insertAdjacentHTML('beforeEnd',
    '<div class="screen" id="screen_exploits" style="visibility: visible;"><div class="main_menu_row"><div class="button main_menu_btn" id="exploits_btn">DEC3PTIXNS HXB</div></div></div>'+
    '<div class="screen" id="screen_exploits_buttons" style="visibility: visible; display: none;"><h1>DEC3PTIXNS HXB</h1>'+
    
    '<h1>Get Daggers<h1>'+
    '<div class="button" id="exploits_getDaggers_specific_btn">Specific</div>'+
    '<div class="button" id="exploits_getDaggers_rapidSpecific_btn">Rapid Specific</div>'+
    '<div class="button" id="exploits_getDaggers_instaLevel_btn">Level</div>'+
    '<div class="button" id="exploits_getDaggers_rapidLevel_btn">Rapid Level</div>'+
    
    '<h1>Equip Daggers<h1>'+
    '<div class="button" id="exploits_equipDaggers_equipDagger_btn">Dagger</div>'+
    '<div class="button" id="exploits_equipDaggers_equipLoadout_btn">Loadout</div>'+
    '<div class="button" id="exploits_equipDaggers_equipRandom_btn">Random</div>'+
    '<div class="button" id="exploits_equipDaggers_equipUnobtainable_btn">Unobtainable</div>'+
    
    '<h1>Upgrades<h1>'+
    '<div class="button" id="exploits_upgrades_infUpgrades_btn">Inf Upgrades</div>'+
    '<div class="button" id="exploits_upgrades_freeUpgrades_btn">Free Upgrades</div>'+
    
    '<h1>Xp<h1>'+
    '<div class="button" id="exploits_xp_set_btn">Set XP</div>'+
    
    '<h1>Daily Gifts<h1>'+
    '<div class="button" id="exploits_dailyGift_instaGift_btn">Insta Gift</div>'+
    '<div class="button" id="exploits_dailyGift_rapidGift_btn">Rapid Gift</div>'+
    '<div class="button" id="exploits_dailyGift_999gifts_btn">999 Gifts</div>'+
    
'</div>');
    
    
    
    
    
    
    
    
// EMBEDDING
    
    state_blueprint.push({id: "exploits",on_focus: () => {$("#screen_exploits_buttons").show();
    $("#exploits_btn").hide()}, on_blur: () => { $("#screen_exploits_buttons").hide(); $("#exploits_btn").show()}});
    
    
    
// MAIN
    
    $("#exploits_btn").click(function() {state.set("exploits")});
    


// GUI FUNCTIONS
    
    $("#exploits_upgrades_infUpgrades_btn").click(function() { setInterval(function infUpgrades() { upgrades.damage = 99999; upgrades.health = 99999; upgrades.speed = 99; upgrades.spin= 99999 }, 500)});
    
    $("#exploits_upgrades_freeUpgrades_btn").click(function() { upgrade_blueprint['damage'].costs = [0,0,0,0,0,0,0,0]; upgrade_blueprint['health'].costs = [0,0,0,0,0,0,0,0]; upgrade_blueprint['speed'].costs = [0,0,0,0,0,0,0,0]; upgrade_blueprint['spin'].costs = [0,0,0,0,0,0,0,0]});
    
    $("#exploits_dailyGift_instaGift_btn").click(function() { daily_gift.open(); console.clear(); console.log('Opened!')});
    
    $("#exploits_dailyGift_rapidGift_btn").click(function() { setInterval(function dailyRewards() {daily_gift.open();console.clear();console.log('Opened!')},20)});
    
    $("#exploits_dailyGift_999gifts_btn").click(function() { const func = () => setInterval(function dailyRewards() { daily_gift.open();console.clear();console.log('Opened!') },20);const times = 999; Array.from({length: times}, () => func())});
    
    var option_equipDaggers_equipDagger = ""
    $("#exploits_equipDaggers_equipDagger_btn").click(function() { let choice_EQUIP_DAGGERS_DAGGER_weapon_id = prompt("Which weapon (in weaponList) to equip.", option_equipDaggers_equipDagger); if (choice_EQUIP_DAGGERS_DAGGER_weapon_id == null || choice_EQUIP_DAGGERS_DAGGER_weapon_id == "") { return } else { option_equipDaggers_equipDagger = choice_EQUIP_DAGGERS_DAGGER_weapon_id }; function equip(weapon_id) { dagger_selection.equip_dagger(weapon_id) }; equip(option_equipDaggers_equipDagger)});
    
    var option_equipDaggers_equipLoadout = ""
    $("#exploits_equipDaggers_equipLoadout_btn").click(function() {let choice_EQUIP_DAGGERS_LOADOUT_weapon_id = prompt("Which weapon (in weaponList) to equip 4 times.", option_equipDaggers_equipLoadout); if (choice_EQUIP_DAGGERS_LOADOUT_weapon_id == null || choice_EQUIP_DAGGERS_LOADOUT_weapon_id == "") { return } else { option_equipDaggers_equipLoadout = choice_EQUIP_DAGGERS_LOADOUT_weapon_id}; function loadout(weapon_id) { dagger_selection.equipped = []; dagger_selection.equip_dagger(weapon_id); dagger_selection.equip_dagger(weapon_id); dagger_selection.equip_dagger(weapon_id); dagger_selection.equip_dagger(weapon_id)}; loadout(option_equipDaggers_equipLoadout)});
    
    $("#exploits_getDaggers_instaLevel_btn").click(function() { dagger_selection.reward_level_clear(); console.clear(); console.log('Opened!')});
    
    $("#exploits_getDaggers_rapidLevel_btn").click(function() { setInterval(function dailyRewards() { dagger_selection.reward_level_clear(); console.clear(); console.log('Opened!')},20)});
    
    var option_getDaggers_specific = ""
    $("#exploits_getDaggers_specific_btn").click(async function() { let choice_GET_DAGGERS_specific_weapon_ids = prompt("Which weapon (in weaponList) to receive.", option_getDaggers_specific); if (choice_GET_DAGGERS_specific_weapon_ids == null || choice_GET_DAGGERS_specific_weapon_ids == "") { return } else { option_getDaggers_specific = [choice_GET_DAGGERS_specific_weapon_ids]}; let w_index = Math.floor(Math.random() * option_getDaggers_specific.length); var weapon_id = option_getDaggers_specific[Math.floor(Math.random() * option_getDaggers_specific.length)]; var n = await sync.async_get("w_"+weapon_id) || 0; var index = -1; var count = 0; for (let unlocked_dagger of dagger_selection.unlocked) {if (unlocked_dagger.id == weapon_id) {index = count;break;}count += 1}; await sync.async_set("w_"+weapon_id, n+1); dagger_selection.unlocked.push({id: weapon_id,n: n+1}); dagger_selection.init()});
    
    var option_getDaggers_rapidSpecific = ""
    $("#exploits_getDaggers_rapidSpecific_btn").click(async function() { let choice_GET_DAGGERS_rapidSpecific_weapon_ids = prompt("Which weapon (in weaponList) do you want to receive?", option_getDaggers_rapidSpecific); if (choice_GET_DAGGERS_rapidSpecific_weapon_ids == null || choice_GET_DAGGERS_rapidSpecific_weapon_ids == "") { return } else { option_getDaggers_rapidSpecific = [choice_GET_DAGGERS_rapidSpecific_weapon_ids]}; setInterval(async function specificRapid() { let w_index = Math.floor(Math.random() * option_getDaggers_rapidSpecific.length); var weapon_id = option_getDaggers_rapidSpecific[Math.floor(Math.random() * option_getDaggers_rapidSpecific.length)]; var n = await sync.async_get("w_"+weapon_id) || 0; var index = -1; var count = 0; for (let unlocked_dagger of dagger_selection.unlocked) {if (unlocked_dagger.id == weapon_id) {index = count;break;}count += 1}; await sync.async_set("w_"+weapon_id, n+1); dagger_selection.unlocked.push({id: weapon_id,n: n+1}); dagger_selection.init()},20)});
    
    var option_xp_set = ""
    $("#exploits_xp_set_btn").click(async function() { let choice_XP_SET_xp = prompt("What should your XP be set to?", option_xp_set); if (choice_XP_SET_xp == null || choice_XP_SET_xp == "") { return } else {		
    option_xp_set = choice_XP_SET_xp}; await sync.async_set("xp", choice_XP_SET_xp); upgrades.init()});
    
    
     
// TOGGLE
    
    $(document).keypress(function(keyPressed) {
        if(keyPressed.key === "e") { $("#screen_exploits").show()}; if(keyPressed.key === "r") { $("#screen_exploits").hide()}});
    
    
    
// LOGS
    
alert("E - Show UI\nR - Hide UI");