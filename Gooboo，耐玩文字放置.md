# Gooboo，耐玩文字放置
https://gityx.com/g8hh/yihanhua/778.html

https://gityxs.github.io/gooboo/

## 修改脚本
```js
//初始化全局对象
VUE = $(".game-app")[0].__vue__;
//采矿 绿水晶
VUE.$store.state.currency.mining_crystalGreen.value+=1e9
//村庄 祝福
VUE.$store.state.currency.village_blessing.value+=1e9

//升级低消耗，村庄建筑低耗时
function hookupgradePrice(u)
{
    let t = 'price';
    let handler = {
      apply: function (target, thisArg, ...argumentsList) {
        let ret = Reflect.apply(...arguments);
        if(Array.isArray(ret))
        {
            for(let r of ret)
                for (let k in r)
                    r[k] = 1
        }else
        {
            for (let k in ret)
                ret[k] = 1
        }
        //console.log(ret)
        return ret;
      }
    };
    if(u[t])
    {    
        if(!u[`__${t}`]) u[`__${t}`] = u[t];
        u[t] = new Proxy(u[`__${t}`],handler);
    }
}

function hooktimeNeed(u)
{
    let t = 'timeNeeded';
    let handler = {
        apply: function (target, thisArg, ...argumentsList) {
            let ret = Reflect.apply(...arguments);
            if('number'==typeof(ret))
            {
                ret = 0.001;
            }
            return ret;
        }
    };
    if(u[t])
    {
        if(!u[`__${t}`]) u[`__${t}`] = u[t];
        u[t] = new Proxy(u[`__${t}`],handler);
    }
}
Object.values(VUE.$store.state.upgrade.item).forEach(u=>{
    hookupgradePrice(u)
    hooktimeNeed(u)
})

//村庄 供品低消耗
function hook_offering_cost(u)
{
    let t = 'cost';
    let handler = {
        apply: function (target, thisArg, ...argumentsList) {
            let ret = Reflect.apply(...arguments);
            if('number'==typeof(ret))
            {
                ret = 1;
            }
            return ret;
        }
    };
    if(u[t])
    {
    if(!u[`__${t}`]) u[`__${t}`] = u[t];
    u[t] = new Proxy(u[`__${t}`],handler);
    }
}
Object.values(VUE.$store.state.village.offering).forEach(o=>{
    hook_offering_cost(o);
    if(o.amount)o.amount = 0;
})

//村庄工人 低需求
Object.values(VUE.$store.state.village.job).forEach(j=>{
if(j.needed)
{
    j.needed = 1;
}
})
```
