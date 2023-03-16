## 吸血鬼幸存者（Vampire Survivors）
https://gityx.com/pc/steam/197.html

https://g8hh.github.io/vampire-survivors/

## 前置操作
Source 搜索代码
```js
['update'](_0x15c148, _0x485deb)
```
打断点，立刻就能触发
然后 Console 输入脚本
```js
window.GAME = _0x43cd9a['Core'];
```
之后释放断点。继续游戏

##修改脚本
```js
//金币
GAME.PlayerOptions.Coins=1e6

//游戏开始后
//新道具生效

//道具最低冷却
GAME.Player.cooldown=0.1
//道具射速
GAME.Player.speed+=1
//道具基础伤害
GAME.Player.power+=10
//道具基础数量
GAME.Player.amount+=10

//道具持续时间？
GAME.Player.duration+=10
//基础护甲？
GAME.Player.armor+=10
//道具基础范围？
GAME.Player.area+=2

```
