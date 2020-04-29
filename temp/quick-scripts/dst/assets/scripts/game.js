
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7e697w+jRRDzYPrGs+7LSOA', 'game');
// scripts/game.js

"use strict";

var _cc$Class;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

cc.Class((_cc$Class = {
  "extends": cc.Component,
  properties: {
    // 这个属性引用了星星预制资源
    starPrefab: {
      "default": null,
      type: cc.Prefab
    },
    // 星星产生后消失时间的随机范围
    maxStarDuration: 0,
    minStarDuration: 0,
    // 地面节点，用于确定星星生成的高度
    ground: {
      "default": null,
      type: cc.Node
    },
    // player 节点，用于获取主角弹跳的高度，和控制主角行动开关
    player: {
      "default": null,
      type: cc.Node
    },
    scoreDisplay: {
      "default": null,
      type: cc.Label
    },
    scoreAudio: {
      "default": null,
      type: cc.AudioClip
    }
  },
  update: function update(dt) {
    cc.log('Update:' + Date.now());
  },
  onLoad: function onLoad() {
    // 初始化计分
    this.score = 0; // 初始化计时器

    this.timer = 0; // 获取地平面的 y 轴坐标

    this.groundY = this.ground.y + this.ground.height / 2; // 生成一个新的星星

    this.spawnNewStar();
  },
  gainScore: function gainScore() {
    this.score += 1;
    cc.audioEngine.playEffect(this.scoreAudio, false); // 更新 scoreDisplay Label 的文字

    this.scoreDisplay.string = 'Score: ' + this.score;
  },
  spawnNewStar: function spawnNewStar() {
    // 使用给定的模板在场景中生成一个新节点
    var newStar = cc.instantiate(this.starPrefab); // 初始化计时器

    this.timer = 0; // 重置计时器，根据消失时间范围随机取一个值

    this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration); // 将新增的节点添加到 Canvas 节点下面

    this.node.addChild(newStar); // 为星星设置一个随机位置

    newStar.setPosition(this.getNewStarPosition()); // 在星星组件上暂存 Game 对象的引用

    newStar.getComponent('Star').game = this;
  },
  getNewStarPosition: function getNewStarPosition() {
    var randX = 0; // 根据地平面位置和主角跳跃高度，随机得到一个星星的 y 坐标

    var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50; // 根据屏幕宽度，随机得到一个星星 x 坐标

    var maxX = this.node.width / 2;
    randX = (Math.random() - 0.5) * 2 * maxX; // 返回星星坐标

    return cc.v2(randX, randY);
  }
}, _defineProperty(_cc$Class, "update", function update(dt) {
  if (this.timer > this.starDuration) {
    this.gameOver();
    return;
  }

  this.timer += dt;
}), _defineProperty(_cc$Class, "gameOver", function gameOver() {
  this.player.getComponent('Player').gameOver();
  cc.director.loadScene('game');
}), _cc$Class));

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFyUHJlZmFiIiwidHlwZSIsIlByZWZhYiIsIm1heFN0YXJEdXJhdGlvbiIsIm1pblN0YXJEdXJhdGlvbiIsImdyb3VuZCIsIk5vZGUiLCJwbGF5ZXIiLCJzY29yZURpc3BsYXkiLCJMYWJlbCIsInNjb3JlQXVkaW8iLCJBdWRpb0NsaXAiLCJ1cGRhdGUiLCJkdCIsImxvZyIsIkRhdGUiLCJub3ciLCJvbkxvYWQiLCJzY29yZSIsInRpbWVyIiwiZ3JvdW5kWSIsInkiLCJoZWlnaHQiLCJzcGF3bk5ld1N0YXIiLCJnYWluU2NvcmUiLCJhdWRpb0VuZ2luZSIsInBsYXlFZmZlY3QiLCJzdHJpbmciLCJuZXdTdGFyIiwiaW5zdGFudGlhdGUiLCJzdGFyRHVyYXRpb24iLCJNYXRoIiwicmFuZG9tIiwibm9kZSIsImFkZENoaWxkIiwic2V0UG9zaXRpb24iLCJnZXROZXdTdGFyUG9zaXRpb24iLCJnZXRDb21wb25lbnQiLCJnYW1lIiwicmFuZFgiLCJyYW5kWSIsImp1bXBIZWlnaHQiLCJtYXhYIiwid2lkdGgiLCJ2MiIsImdhbWVPdmVyIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUg7QUFDSSxhQUFTRCxFQUFFLENBQUNFLFNBRGhCO0FBR0lDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0FDLElBQUFBLFVBQVUsRUFBRTtBQUNSLGlCQUFTLElBREQ7QUFFUkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkQsS0FGSjtBQU1SO0FBQ0FDLElBQUFBLGVBQWUsRUFBRSxDQVBUO0FBUVJDLElBQUFBLGVBQWUsRUFBRSxDQVJUO0FBU1I7QUFDQUMsSUFBQUEsTUFBTSxFQUFFO0FBQ0osaUJBQVMsSUFETDtBQUVKSixNQUFBQSxJ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QztBQUM5QixTQUFLZSxRQUFMO0FBQ0E7QUFDSDs7QUFDRCxPQUFLMUIsS0FBTCxJQUFjTixFQUFkO0FBQ0gsQ0F2RkwsMENBeUZhLG9CQUFZO0FBQ2pCLE9BQUtOLE1BQUwsQ0FBWThCLFlBQVosQ0FBeUIsUUFBekIsRUFBbUNRLFFBQW5DO0FBQ0FqRCxFQUFBQSxFQUFFLENBQUNrRCxRQUFILENBQVlDLFNBQVosQ0FBc0IsTUFBdEI7QUFDSCxDQTVGTCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8g6L+Z5Liq5bGe5oCn5byV55So5LqG5pif5pif6aKE5Yi26LWE5rqQXG4gICAgICAgIHN0YXJQcmVmYWI6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICAgICAgfSxcbiAgICAgICAgLy8g5pif5pif5Lqn55Sf5ZCO5raI5aSx5pe26Ze055qE6ZqP5py66IyD5Zu0XG4gICAgICAgIG1heFN0YXJEdXJhdGlvbjogMCxcbiAgICAgICAgbWluU3RhckR1cmF0aW9uOiAwLFxuICAgICAgICAvLyDlnLDpnaLoioLngrnvvIznlKjkuo7noa7lrprmmJ/mmJ/nlJ/miJDnmoTpq5jluqZcbiAgICAgICAgZ3JvdW5kOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICAvLyBwbGF5ZXIg6IqC54K577yM55So5LqO6I635Y+W5Li76KeS5by56Lez55qE6auY5bqm77yM5ZKM5o6n5Yi25Li76KeS6KGM5Yqo5byA5YWzXG4gICAgICAgIHBsYXllcjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfSxcblxuICAgICAgICBzY29yZURpc3BsYXk6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgfSxcbiAgICAgICAgc2NvcmVBdWRpbzp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLkF1ZGlvQ2xpcFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG4gICAgICAgIGNjLmxvZygnVXBkYXRlOicgKyBEYXRlLm5vdygpKTtcbiAgICB9LFxuXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIOWIneWni+WMluiuoeWIhlxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgLy8g5Yid5aeL5YyW6K6h5pe25ZmoXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgICAgICAvLyDojrflj5blnLDlubPpnaLnmoQgeSDovbTlnZDmoIdcbiAgICAgICAgdGhpcy5ncm91bmRZID0gdGhpcy5ncm91bmQueSArIHRoaXMuZ3JvdW5kLmhlaWdodCAvIDI7XG4gICAgICAgIC8vIOeUn+aIkOS4gOS4quaWsOeahOaYn+aYn1xuICAgICAgICB0aGlzLnNwYXduTmV3U3RhcigpO1xuICAgIH0sXG5cbiAgICBnYWluU2NvcmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zY29yZSArPSAxO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc2NvcmVBdWRpbyxmYWxzZSk7XG4gICAgICAgIC8vIOabtOaWsCBzY29yZURpc3BsYXkgTGFiZWwg55qE5paH5a2XXG4gICAgICAgIHRoaXMuc2NvcmVEaXNwbGF5LnN0cmluZyA9ICdTY29yZTogJyArIHRoaXMuc2NvcmU7XG4gICAgfSxcblxuICAgIHNwYXduTmV3U3RhcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyDkvb/nlKjnu5nlrprnmoTmqKHmnb/lnKjlnLrmma/kuK3nlJ/miJDkuIDkuKrmlrDoioLngrlcbiAgICAgICAgdmFyIG5ld1N0YXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnN0YXJQcmVmYWIpO1xuICAgICAgICAvLyDliJ3lp4vljJborqHml7blmahcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgICAgIC8vIOmHjee9ruiuoeaXtuWZqO+8jOagueaNrua2iOWkseaXtumXtOiMg+WbtOmaj+acuuWPluS4gOS4quWAvFxuICAgICAgICB0aGlzLnN0YXJEdXJhdGlvbiA9IHRoaXMubWluU3RhckR1cmF0aW9uICsgTWF0aC5yYW5kb20oKSAqICh0aGlzLm1heFN0YXJEdXJhdGlvbiAtIHRoaXMubWluU3RhckR1cmF0aW9uKTtcbiAgICAgICAgLy8g5bCG5paw5aKe55qE6IqC54K55re75Yqg5YiwIENhbnZhcyDoioLngrnkuIvpnaJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld1N0YXIpO1xuICAgICAgICAvLyDkuLrmmJ/mmJ/orr7nva7kuIDkuKrpmo/mnLrkvY3nva5cbiAgICAgICAgbmV3U3Rhci5zZXRQb3NpdGlvbih0aGlzLmdldE5ld1N0YXJQb3NpdGlvbigpKTtcbiAgICAgICAgLy8g5Zyo5pif5pif57uE5Lu25LiK5pqC5a2YIEdhbWUg5a+56LGh55qE5byV55SoXG4gICAgICAgIG5ld1N0YXIuZ2V0Q29tcG9uZW50KCdTdGFyJykuZ2FtZSA9IHRoaXM7XG4gICAgfSxcblxuICAgIGdldE5ld1N0YXJQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmFuZFggPSAwO1xuICAgICAgICAvLyDmoLnmja7lnLDlubPpnaLkvY3nva7lkozkuLvop5Lot7Pot4Ppq5jluqbvvIzpmo/mnLrlvpfliLDkuIDkuKrmmJ/mmJ/nmoQgeSDlnZDmoIdcbiAgICAgICAgdmFyIHJhbmRZID0gdGhpcy5ncm91bmRZICsgTWF0aC5yYW5kb20oKSAqIHRoaXMucGxheWVyLmdldENvbXBvbmVudCgnUGxheWVyJykuanVtcEhlaWdodCArIDUwO1xuICAgICAgICAvLyDmoLnmja7lsY/luZXlrr3luqbvvIzpmo/mnLrlvpfliLDkuIDkuKrmmJ/mmJ8geCDlnZDmoIdcbiAgICAgICAgdmFyIG1heFggPSB0aGlzLm5vZGUud2lkdGggLyAyO1xuICAgICAgICByYW5kWCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIgKiBtYXhYO1xuICAgICAgICAvLyDov5Tlm57mmJ/mmJ/lnZDmoIdcbiAgICAgICAgcmV0dXJuIGNjLnYyKHJhbmRYLCByYW5kWSk7XG4gICAgfSxcblxuICAgIHVwZGF0ZTpmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgaWYodGhpcy50aW1lciA+IHRoaXMuc3RhckR1cmF0aW9uKXtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRpbWVyICs9IGR0O1xuICAgIH0sXG5cbiAgICBnYW1lT3ZlcjpmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucGxheWVyLmdldENvbXBvbmVudCgnUGxheWVyJykuZ2FtZU92ZXIoKTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdnYW1lJyk7XG4gICAgfVxufSk7XG4iXX0=