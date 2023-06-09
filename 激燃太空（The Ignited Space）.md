## 激燃太空（The Ignited Space）
http://www.gityx.com/g8hh/hanhuazhong/694.html

https://g1tyx.github.io/the-ignited-space/

## 前置操作
![image](https://github.com/pjy612/gityx-cheat/assets/4072526/85b8581a-81fe-4065-904e-1f4fd6ea6407)
图上位置打断点，然后 控制台 输入 
```js
INS = t.instance;
```
![image](https://github.com/pjy612/gityx-cheat/assets/4072526/4fca864f-4814-4e8d-9740-1a49e097b2e5)
也可以使用条件断点,进行自动赋值 并不用断下来。
```js
INS = t.instance,false
```
## 修改脚本
```js
//资源不增反加
if(!INS.resources.addResource_o){
INS.resources.addResource_o = INS.resources.addResource;
INS.resources.subtractResource = INS.resources.addResource;
}
if(INS.resources.addResource_o){
INS.resources.addResource = function(e, t){
if(t<0){
t=0-t;
}
return INS.resources.addResource_o(e,t);
}
}

//资源自动根据容量递增
if(!INS.resources.setBalance_o){
INS.resources.setBalance_o = INS.resources.setBalance;
}
if(INS.resources.setBalance_o){
INS.resources.setBalance = function(e,t){
    let cap = INS.resources.getResourceCap(e);
    if(cap>0){
        return INS.resources.setBalance_o(e,cap);
    }
    let nbalance = INS.resources.getBalance(e);
    if(nbalance!=0 && t<nbalance){
        t=nbalance;
    }else if(nbalance<0){
        t = 0-nbalance;
    }
    return INS.resources.setBalance_o(e,t);
}
}
```
