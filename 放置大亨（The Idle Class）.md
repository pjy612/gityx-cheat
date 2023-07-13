# 放置大亨（The Idle Class）
https://gityx.com/g8hh/yihanhua/239.html

https://gityxs.github.io/the-idle-class/

## 修改脚本
### 持续生效
```js
//升级便宜
for(u of game.upgrades()){
u.price.val(1);
u.price.displayVal('$1');
}
//员工低价,培训低价,培训加快
for(u of game.units()){
u.basePrice(1);
u.price.val=ko.observable(1)
u.trainingCost.val=ko.observable(1)
u.trainingTime.val=ko.observable(1/1e6)
u.timeRemaining(1)
}
//员工应急无压力
game.composedMail().stressLevel.val=()=>(0)

//员工效率翻10倍（叠加）
for(u of game.units()){
u.baseClick(u.baseClick()*10);
}


//一下两块儿 二选一 
//选举选票固定
game.election().pollNumber=()=>(1000)
//选举时间固定5秒
game.election().electionTime.val = ko.observable(5e3)
//---------------------------------------------------------
//选举捐赠 支持率加成变高
game.electionSupportRate.val(100)
//选举捐赠免费
game.election().donationAmount.val=()=>(0)
```
### 单次生效
```js
//批量刷培训等级
for(c of game.careerUpgrades()){
c.cost.val = ko.observable(1)
c.level(c.level()+100)
}

//收购企业后招募价格低（每次收购都要执行）
for(a of game.activeAcquisitions()){
for(w of a.workers()){
w.price.val=ko.observable(0)
}
}

```
