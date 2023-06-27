# Fg异星工厂2（Fg Factory 2）
https://gityx.com/g8hh/yihanhua/700.html

https://g1tyx.github.io/fgfactory2/

## 修改脚本
```js
Game.prototype.doTick = function(stepMs) {
    //---
    let seconds = stepMs / 1000
    //---
    let elems = this.elems.filter(elem => elem.id != 'machineManual' && elem.unlocked == true && (elem.type == 'item' || elem.type == 'machine' || elem.type == 'storer'))
    elems.forEach(elem => {
        //---
        elem.prod = 0
        //---
        elem.rawProd = 0
        elem.rawConsum = 0
    })
    //---
    let lines = this.elems.filter(elem => (elem.type == 'line' || elem.type == 'manual') && elem.unlocked == true && elem.count > 0)
    lines.forEach(line => {
        //---
        let outputElem = this.elems.find(elem => elem.id == line.output.id)
        if (this.canProduce(line.id)) {
            //---
            if (line.inputs && line.inputs.length > 0) {
                //---
                line.inputs.forEach(input => {
                    //---
                    let inputElem = this.elems.find(elem => elem.id == input.id)
                    //这里改成 += 让消耗的资源只增不减
                    inputElem.prod += input.count * line.count
                    inputElem.rawConsum += input.count * line.count
                })
            }
            //---
            outputElem.prod += line.output.count * line.count
            outputElem.rawProd += line.output.count * line.count
        }
    })
    //---
    elems.forEach(elem => {
        //---
        let prod = elem.prod * seconds
        let newCount = elem.count + prod
        //---
        if (newCount != elem.count) elem.count = newCount
        //---
        let max = this.getMax(elem.id)
        if (max > 0 && elem.count > max) elem.count = max
        //---
        if (elem.count < 0) elem.count = 0
    })
}
```
