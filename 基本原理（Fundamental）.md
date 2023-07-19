# 基本原理（Fundamental）

## 前置步骤
Chrome 的 开发工具中 点击右上角齿轮 打开设置界面  
![image](https://github.com/pjy612/gityx-cheat/assets/4072526/b7a793eb-7cfd-4b0d-a068-60e9b6faa8f6)

如下图 选择 Experiments 然后 Filter 中输入 map 勾选 对应的功能
![image](https://github.com/pjy612/gityx-cheat/assets/4072526/3cb7c583-629b-4648-8710-99adfdbedcbe)

游戏进行中选择 Source -> Update.ts
搜索 numbersUpdate 下断点
![image](https://github.com/pjy612/gityx-cheat/assets/4072526/62309751-b210-4d1e-8df5-54eb4d398907)

可以断下来，然后 可以根据 ts 获取一些 内部变量并弹出。
![image](https://github.com/pjy612/gityx-cheat/assets/4072526/5ed31ca5-8207-40ba-aba7-86834164333f)

此时输入前置代码
```js
//弹出有必要的变量
window.G = global;
window.P = player;
window.L = overlimit;

//可选 但只能此时执行
//升级研究消耗不自增
calculateResearchCost = ()=>{}
```
弹出后取消断点 然后 F8 继续游戏

## 修改脚本
```js
//降低基础增量
window.G.buildingsInfo.increase.forEach((e,i)=>{
    if(e.length>0){
        e = new Array(e.length).fill(1+1e-11);
        e[0]=0;
        G.buildingsInfo.increase[i] = e
    }
})

//批量处理函数
function setcost(u){
if(u.startCost){
    u.startCost = new Array(u.startCost.length).fill(0)
}
if(u.cost){
    u.cost = new Array(u.cost.length).fill(0)
}
}
//清空升级消耗
window.G.upgradesInfo.forEach(setcost)
//清空研究消耗
window.G.researchesInfo.forEach(setcost)
window.G.researchesExtraInfo.forEach(setcost)
setcost(window.G.researchesAutoInfo)
setcost(window.G.ASRInfo)

//清空 坍缩 阶段 元素消耗
setcost(window.G.elementsInfo)
//清空 坍缩 阶段 升级 研究消耗
Object.keys(G.collapseInfo).filter(k=>k.startsWith('unlock')).forEach(k=>{
G.collapseInfo[k] = new Array(G.collapseInfo[k].length).fill(0)
});
//之后没玩

```
