# 继续解锁（Theres More）0.51

http://www.gityx.com/g8hh/yihanhua/577.html

https://theresmoregame.g8hh.com/

## 前置脚本

```js
//初始化 关键词 "saveToClipboard"
GG=this;
```
![](imgs/Snipaste_2023-02-23_15-47-35.png)

## 修改脚本 

```js
//不减反增
GG.MainStore.ResourcesStore.useResource = GG.MainStore.ResourcesStore.addResource;
//自动增长
GG.MainStore.run.resources.forEach(v=>{
let cap = GG.MainStore.ResourcesStore._getResourceCap(v.id);
if(cap>0 && v.timer<cap)v.timer = cap;
});
//建造不减反增
GG.MainStore.BuildingsStore.buildings.forEach(b=>{
    b.req.forEach(r=>{
        if(r.value>0)r.value=0;
    })
});
```
