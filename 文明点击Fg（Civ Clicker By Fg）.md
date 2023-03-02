# 文明点击Fg（Civ Clicker By Fg）
http://www.gityx.com/g8hh/yihanhua/580.html

https://gityxs.github.io/civ-clicker-fg/

## 修改脚本
```js
//农民效率
civData.farmer.efficiency_base=1e3;

//劳工建造奇迹时 反向增加资源
function doLabourers() {
	if (curCiv.curWonder.stage !== 1) { return }
	if (curCiv.curWonder.progress >= 100) {
		civData.unemployed.owned += civData.labourer.owned
		civData.unemployed.ill += civData.labourer.ill
		civData.labourer.owned = 0
		civData.labourer.ill = 0
		calculatePopulation()
		++curCiv.curWonder.stage
	}
    else {
		let prod = getWonderProduction()
		wonderResources.forEach(resource => { 
			resource.owned += prod
			resource.net += prod
		})
		curCiv.curWonder.progress += prod / (1000000 * getWonderCostMultiplier())
	}
}

//自动点击可增按钮
clearInterval(globalThis?.autoplay)
autoplay = setInterval(()=>{
$('button[data-action=increment]').each((i,e)=>{
    increment(e)
})    
},50);

//升级，建筑，训练 低消耗
var crequire = ["upgrade","building","unit"]
civData.filter(it=>crequire.includes(it.type)).forEach(u=>{
Object.keys(u?.require??{}).forEach(k=>{
u.require[k]=0;
})
});

```
