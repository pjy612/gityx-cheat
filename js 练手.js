http://www.gityx.com/hanhua/hanhuazhong/643.html
http://idlegame.gitee.io/proto23/

//阅读速度
you.mods.rdgrt=1e6

//有效技能快速升级
Object.values(skl).forEach(v=>{
if(v.expnext){
if(typeof expnext_b=='undefined') v.expnext_b = v.expnext;
if(v.mlstn){
let max = Math.max(...v.mlstn.map(r=>r.lv));
v.expnext = ()=>{
if(v.lvl<max) return 1;
return v.expnext_b();
};
}
}
if(v.expnext_t){
v.expnext_t = 1;
}
});

//制作无消耗
Object.values(rcp).forEach(v=>{
if(v.rec){
v.rec.forEach(vv=>{
if(vv.amount>0) vv.amount = 0-vv.amount;
})
}
});

大数塔（Towers of Googology）
http://www.gityx.com/hanhua/yihanhua/645.html
http://likexia.gitee.io/towers-of-googology/


function autoFight(){
let pPos = getPlayerPos();
if (!pPos) return;
let pTile = getTile(pPos);
let player = pTile[0];
    function check(offset){     
        let tile = getTile([pPos[0] + offset[0], pPos[1] + offset[1]]);        console.log('tile',tile);
        if(tile){
            if (tile[0][0] == "enemy"){
                if(player[1].gte(tile[0][1])|| game.spells.ice > 0){
                    movePlayer(offset);
                }
            }
            else if (tile[0][0] == "loot"){
                movePlayer(offset);
            }
        }else if(!tile && pPos[1]==0) {
            movePlayer([1, 0]);
            return true;
        }        
        return false;
    }
if(check([0,1]))return;
if(check([0,-1]))return;
}
clearInterval(typeof stopAutoFight=='undefined' ? 0 : stopAutoFight)
stopAutoFight = setInterval(()=>autoFight(),200);


//自动游戏
function autoFight(){
let pPos = getPlayerPos();
if (pPos) {
    if (getTower(pPos[0]).length <= 1) movePlayer([1, 0]);
    else {
        let tUp = getTile([pPos[0], pPos[1] + 1]);
        let tDown = getTile([pPos[0], pPos[1] - 1]);
        if (tDown && (!tUp || tDown[0][1].lt(tUp[0][1]))) movePlayer([0, -1]);
        else movePlayer([0, 1]);
    }
}
}
clearInterval(typeof stopAutoFight=='undefined' ? 0 : stopAutoFight)
stopAutoFight = setInterval(()=>autoFight(),100);

//升级低消耗
Object.values(upgrades).forEach(v=>{
v.cost=(x)=>(EN(1));
})





怪物饲养员（Monster Breeder）
http://www.gityx.com/hanhua/hanhuazhong/646.html#J_download
http://idlegame.gitee.io/monster-breeder/


//无限钱
Cash = Infinity;
//无限容量
TruckCap = Infinity;


格子王国（Grid land）
http://www.gityx.com/hanhua/hanhuazhong/647.html
http://idlegame.gitee.io/gridland/


//创建简易消除脚本 左边会出现一个 单选框
//勾上后 匹配模式会很简单 但是夜晚难度也会增加
//夜晚记得使用道具
//简易模式会导致白天时间走的慢，差不多后就自行关闭吧

//执行前置脚本 触发断点
debug(window.tiles);window.tiles();undebug(window.tiles);
//断点触发后执行下面脚本 新增功能
typeof ii != 'undefined' ? ii.remove():null;
ii=document.createElement('input');
ii.type = 'checkbox';
ii.onclick = function(){
if(this.checked){
c=/([^X])\1{1,}/g;
}else{
c=/([^X])\1{2,}/g;
}
};
document.body.append(ii);
//F8继续游戏


//道具无限
require("app/loot").useItem = function (t) {
    var e=require("app/eventmanager");
    var n=require("app/gamestate");
    var r=require("app/gamecontent");
    var i = 3;
    require("app/world").canMove() && (n.items[t] = i, e.trigger("lootUsed", [t, i]), r.LootType[t].onUse())
}
gamestate=require("app/gamestate");
gamestate.stores



灵魂建造者（Soul Builder）
http://www.gityx.com/hanhua/yihanhua/649.html

o.onMouseMove(n)

document.onkeydown = function(k){
o.onKey(k);
}

杀鸡（Chickens）
http://www.gityx.com/hanhua/yihanhua/650.html#J_download
http://likexia.gitee.io/chickens/

//无冷却
if(typeof _cd == 'undefined'){
_cd = cd;
}
cd = function(countdown,id,val) {
countdown=0;
_cd(countdown,id,val);
}
if(typeof _cdb == 'undefined'){
_cdb = cdb;
}
cdb = function(countdown,id) {
countdown=0;
_cdb(countdown,id);
}
if(typeof _cdc == 'undefined') {
_cdc = cdc;
}
cdc = function (countdown,id,val) {
countdown=0;
_cdc(countdown,id,val)
}
//战斗后自动拾取
function cdi(countdown,id) {
	takedrop(id)
}
//物品不减反增
itemNoCostHandle = {
    set(target, key, value) {
        let oval = target[key];
        if(key=='owned' && target['name']!='robots'){
            if(value<oval){
                value = oval+(oval-value);
            }
        }
        return Reflect.set(target, key, value);
    }
}
items.forEach((v,i,arr)=>{
arr[i]=new Proxy(v,itemNoCostHandle);
});

材料勇士（Material Warrior）
http://www.gityx.com/hanhua/hanhuazhong/653.html
http://likexia.gitee.io/material-warrior/




Object.entries(Game.save.entities).filter(([k,v])=> v&&v.name=='package')
var boxlist = Object.entries(Game.save.entities).filter(([k,v])=> v&&v.name=='package').map(([k,v])=>k);

var t = boxlist.shift();
if(t){
var pt = t.split(',').map(it=>it-0)
Player.takePackage(pt[0],pt[1])
}

//所有箱子坐标
console.table(Object.entries(Game.save.entities).filter(([k,v])=> v&&v.name=='package').map(([k,v])=>(k)))
//神装套件
Player.save.inventory.head.push("magic-hat");
Player.save.inventory.body.push("heart-armor");
Player.save.inventory.weapon.push("hammer");
UI.update();



React RPG
http://www.gityx.com/hanhua/hanhuazhong/658.html
https://react-rpg.com/

main.866c681f.chunk.js 格式化代码后世 搜索  he = ye 然后下断点。
刷新游戏 触发断点。控制台 输入 GG = ye 回车 F8继续游戏。
//加攻击和防御
GG.getState().stats.damage+=100
GG.getState().stats.defence+=1e6


弹珠放置（Pachinkremental）
http://www.gityx.com/hanhua/yihanhua/518.html
http://idlegame.gitee.io/pachinkremental/
//升级低消耗
state.machines.forEach(m=>{
Object.values(m.upgrades).forEach(u=>{
u.GetCost = ()=>(1);
})
});
u.cost_func = ()=>(1);

克隆军队点击器（Clone Armies Clicker）
http://www.gityx.com/hanhua/yihanhua/675.html
http://idlegame.gitee.io/clone-armies-clicker/
[hide]
[code]
[/code]
[/hide]

game.player.spendCookies = function (amount) {
    this.cookies += amount;
    this.cookieStats.Spent += amount;
    return true;
} 
https://bbs.gityx.com/forum.php?mod=post&action=newthread&fid=39

合并个球（Yet Another Merge Game）
http://www.gityx.com/hanhua/yihanhua/530.html
http://idlegame.gitee.io/yet-another-merge-game/
Object.values(game.matter.upgrades).forEach(u=>{
u.getPrice = (lv)=>(new Decimal(lv));
u.updatePrice();
});

Object.values(game.prestige.upgrades).forEach(u=>{
u.getPrice = (lv)=>(new Decimal(lv));
u.updatePrice();
});
Object.values(game.molecules.upgrades).forEach(u=>{
u.getPrice = (lv)=>(new Decimal(lv));
u.updatePrice();
});
//数量不减，进度条需求低
amountNotCostHandle = {
    set(target, key, value) {        
        if(key=='amount'||key=='quantumFoam'){
            let oval = target[key];
            if(value.lt(oval)){
                value = oval.add(oval.sub(value));
            }
        }
        return Reflect.set(target, key, value);
    }
}
game.matter = new Proxy(game.matter,amountNotCostHandle);
game.prestige = new Proxy(game.prestige,amountNotCostHandle);
game.molecules = new Proxy(game.molecules,amountNotCostHandle);
game.isotopes = new Proxy(game.isotopes,amountNotCostHandle);
game.energyCores.cores.forEach(c=>{
c.getBaseNeededMerges = (lv)=>(lv);
});
game.molecules.molecules.forEach(c=>{
c.getMergesNeeded = ()=>(5);
});


文物发掘放置（Relics）
http://www.gityx.com/hanhua/yihanhua/676.html
http://idlegame.gitee.io/relics/

main.708c1e38.chunk.js

key: "onTick"

//资源不减
resourceNotCostHandle = {
    set(target, key, value) {                
        let oval = target[key];
        if(key=='relics'){
            oval = target['relicCap'];
        }
        if(key=='money'){
            oval = target['moneyCap'];
        }
        if(key=='knowledge'){
            oval = target['knowledgeCap'];
        }
        if(value<oval){
            value = oval+(oval-value);
        }
        return Reflect.set(target, key, value);
    }
}
GG.state.gameState.resourceState = new Proxy(GG.state.gameState.resourceState,resourceNotCostHandle)

//H5魔塔  相关修改
//H5魔塔商店不减反增
if(typeof _useShopHandle=='undefined'){
    _useShopHandle = {
    apply:function(target, thisArgument, args){
        let shop = args[0];
        let index = args[1];        
        let cost = core.calValue(shop.need || shop.choices[index],null,null,shop.times);
        if(cost > 0){
            core.setStatus(shop.use, core.getStatus(shop.use) + cost*2);
        }        
        return Reflect.apply(...arguments);
    }
}
typeof _useShop == 'undefined'? (_useShop = events.prototype._useShop) :null;
events.prototype._useShop = new Proxy(_useShop,_useShopHandle);
}

//英雄特殊属性不减
if(typeof heroStateNotCostHandle=='undefined'){
heroStateNotCostHandle={
    set:function(target, key, value) {
        var needKeys = ["hpmax", "hp", "mana", "atk", "def", "mdef", "money", "exp"];
        if(needKeys.includes(key)){
            if(key=='mana'){
                let oval = target[key];
                if(value < oval){
                    value = oval+(oval-value);
                }
            }
        }
        return Reflect.set(...arguments);
    }
}
core.status.hero = new Proxy(core.status.hero,heroStateNotCostHandle);
}

//身上钥匙类道具不减
if(typeof heroToolsItemsNotCostHandle=='undefined'){
heroToolsItemsNotCostHandle={
    set:function(target, key, value) {        
        let oval = target[key];
        if(value < oval){
            value = oval+(oval-value);
        }
        return Reflect.set(...arguments);
    }
}
core.status.hero.items.tools = new Proxy(core.status.hero.items.tools,heroToolsItemsNotCostHandle);
}




r.updateTech(t);
stamina
 ["hp", "stamina", "rage", "bf", "unease", "weary", "rage", "madness"]
 ["herbs",
"gold",
"scrolls",
"exp",
"stamina",
"hp",
"sp",
"mana",
"codices",
"arcana",
"research",
"wizardhall"]
