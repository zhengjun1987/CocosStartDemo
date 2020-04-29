
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b17caSZOMBO76xFUV93cmTR', 'Player');
// scripts/Player.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    jumpHeight: 0,
    jumpDuration: 0,
    maxMoveSpeed: 0,
    accel: 0,
    jumpAudio: {
      "default": null,
      type: cc.AudioClip,
      displayName: "跳跃声音"
    }
  },
  setJumpAction: function setJumpAction() {
    // 跳跃上升
    var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut()); // 下落

    var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
    var callback = cc.callFunc(this.playJumpSound, this); // 不断重复

    return cc.repeatForever(cc.sequence(jumpUp, jumpDown, callback));
  },
  playJumpSound: function playJumpSound() {
    cc.audioEngine.playEffect(this.jumpAudio, false);
  },
  onKeyDown: function onKeyDown(event) {
    // set a flag when key pressed
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = true;
        break;

      case cc.macro.KEY.d:
        this.accRight = true;
        break;
    }
  },
  onKeyUp: function onKeyUp(event) {
    // unset a flag when key released
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = false;
        break;

      case cc.macro.KEY.d:
        this.accRight = false;
        break;
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // 初始化跳跃动作
    this.jumpAction = this.setJumpAction();
    this.node.runAction(this.jumpAction); // 加速度方向开关

    this.accLeft = false;
    this.accRight = false; // 主角当前水平方向速度

    this.xSpeed = 0; // 初始化键盘输入监听

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  onDestroy: function onDestroy() {
    // 取消键盘输入监听
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  start: function start() {},
  update: function update(dt) {
    // 根据当前加速度方向每帧更新速度
    if (this.accLeft) {
      this.xSpeed -= this.accel * dt;
    } else if (this.accRight) {
      this.xSpeed += this.accel * dt;
    } // 限制主角的速度不能超过最大值


    if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
      // if speed reach limit, use max speed with current direction
      this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
    } // 根据当前速度更新主角的位置


    this.node.x += this.xSpeed * dt;
  },
  gameOver: function gameOver() {
    cc.log("=============== Player.gameOver ===============");
    this.node.stopAction(this.jumpAction);
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BsYXllci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImp1bXBIZWlnaHQiLCJqdW1wRHVyYXRpb24iLCJtYXhNb3ZlU3BlZWQiLCJhY2NlbCIsImp1bXBBdWRpbyIsInR5cGUiLCJBdWRpb0NsaXAiLCJkaXNwbGF5TmFtZSIsInNldEp1bXBBY3Rpb24iLCJqdW1wVXAiLCJtb3ZlQnkiLCJ2MiIsImVhc2luZyIsImVhc2VDdWJpY0FjdGlvbk91dCIsImp1bXBEb3duIiwiZWFzZUN1YmljQWN0aW9uSW4iLCJjYWxsYmFjayIsImNhbGxGdW5jIiwicGxheUp1bXBTb3VuZCIsInJlcGVhdEZvcmV2ZXIiLCJzZXF1ZW5jZSIsImF1ZGlvRW5naW5lIiwicGxheUVmZmVjdCIsIm9uS2V5RG93biIsImV2ZW50Iiwia2V5Q29kZSIsIm1hY3JvIiwiS0VZIiwiYSIsImFjY0xlZnQiLCJkIiwiYWNjUmlnaHQiLCJvbktleVVwIiwib25Mb2FkIiwianVtcEFjdGlvbiIsIm5vZGUiLCJydW5BY3Rpb24iLCJ4U3BlZWQiLCJzeXN0ZW1FdmVudCIsIm9uIiwiU3lzdGVtRXZlbnQiLCJFdmVudFR5cGUiLCJLRVlfRE9XTiIsIktFWV9VUCIsIm9uRGVzdHJveSIsIm9mZiIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJNYXRoIiwiYWJzIiwieCIsImdhbWVPdmVyIiwibG9nIiwic3RvcEFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFVBQVUsRUFBRSxDQURKO0FBRVJDLElBQUFBLFlBQVksRUFBRSxDQUZOO0FBR1JDLElBQUFBLFlBQVksRUFBRSxDQUhOO0FBSVJDLElBQUFBLEtBQUssRUFBRSxDQUpDO0FBS1JDLElBQUFBLFNB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SDtBQXJHSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBqdW1wSGVpZ2h0OiAwLFxuICAgICAgICBqdW1wRHVyYXRpb246IDAsXG4gICAgICAgIG1heE1vdmVTcGVlZDogMCxcbiAgICAgICAgYWNjZWw6IDAsXG4gICAgICAgIGp1bXBBdWRpbzoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcCxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOlwi6Lez6LeD5aOw6Z+zXCJcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgc2V0SnVtcEFjdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyDot7Pot4PkuIrljYdcbiAgICAgICAgdmFyIGp1bXBVcCA9IGNjLm1vdmVCeSh0aGlzLmp1bXBEdXJhdGlvbiwgY2MudjIoMCwgdGhpcy5qdW1wSGVpZ2h0KSkuZWFzaW5nKGNjLmVhc2VDdWJpY0FjdGlvbk91dCgpKTtcbiAgICAgICAgLy8g5LiL6JC9XG4gICAgICAgIHZhciBqdW1wRG93biA9IGNjLm1vdmVCeSh0aGlzLmp1bXBEdXJhdGlvbiwgY2MudjIoMCwgLXRoaXMuanVtcEhlaWdodCkpLmVhc2luZyhjYy5lYXNlQ3ViaWNBY3Rpb25JbigpKTtcblxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBjYy5jYWxsRnVuYyh0aGlzLnBsYXlKdW1wU291bmQsdGhpcyk7XG4gICAgICAgIC8vIOS4jeaWremHjeWkjVxuICAgICAgICByZXR1cm4gY2MucmVwZWF0Rm9yZXZlcihjYy5zZXF1ZW5jZShqdW1wVXAsIGp1bXBEb3duLGNhbGxiYWNrKSk7XG4gICAgfSxcblxuICAgIHBsYXlKdW1wU291bmQoKXtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmp1bXBBdWRpbyxmYWxzZSk7XG4gICAgfSxcblxuICAgIG9uS2V5RG93bihldmVudCkge1xuICAgICAgICAvLyBzZXQgYSBmbGFnIHdoZW4ga2V5IHByZXNzZWRcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxuICAgICAgICAgICAgICAgIHRoaXMuYWNjTGVmdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxuICAgICAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uS2V5VXAoZXZlbnQpIHtcbiAgICAgICAgLy8gdW5zZXQgYSBmbGFnIHdoZW4ga2V5IHJlbGVhc2VkXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcbiAgICAgICAgICAgICAgICB0aGlzLmFjY0xlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NSaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvLyDliJ3lp4vljJbot7Pot4PliqjkvZxcbiAgICAgICAgdGhpcy5qdW1wQWN0aW9uID0gdGhpcy5zZXRKdW1wQWN0aW9uKCk7XG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24odGhpcy5qdW1wQWN0aW9uKTtcblxuICAgICAgICAvLyDliqDpgJ/luqbmlrnlkJHlvIDlhbNcbiAgICAgICAgdGhpcy5hY2NMZWZ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgLy8g5Li76KeS5b2T5YmN5rC05bmz5pa55ZCR6YCf5bqmXG4gICAgICAgIHRoaXMueFNwZWVkID0gMDtcblxuICAgICAgICAvLyDliJ3lp4vljJbplK7nm5jovpPlhaXnm5HlkKxcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XG4gICAgfSxcblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgLy8g5Y+W5raI6ZSu55uY6L6T5YWl55uR5ZCsXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XG4gICAgfSxcblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfSxcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuICAgICAgICAvLyDmoLnmja7lvZPliY3liqDpgJ/luqbmlrnlkJHmr4/luKfmm7TmlrDpgJ/luqZcbiAgICAgICAgaWYgKHRoaXMuYWNjTGVmdCkge1xuICAgICAgICAgICAgdGhpcy54U3BlZWQgLT0gdGhpcy5hY2NlbCAqIGR0O1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYWNjUmlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMueFNwZWVkICs9IHRoaXMuYWNjZWwgKiBkdDtcbiAgICAgICAgfVxuICAgICAgICAvLyDpmZDliLbkuLvop5LnmoTpgJ/luqbkuI3og73otoXov4fmnIDlpKflgLxcbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMueFNwZWVkKSA+IHRoaXMubWF4TW92ZVNwZWVkKSB7XG4gICAgICAgICAgICAvLyBpZiBzcGVlZCByZWFjaCBsaW1pdCwgdXNlIG1heCBzcGVlZCB3aXRoIGN1cnJlbnQgZGlyZWN0aW9uXG4gICAgICAgICAgICB0aGlzLnhTcGVlZCA9IHRoaXMubWF4TW92ZVNwZWVkICogdGhpcy54U3BlZWQgLyBNYXRoLmFicyh0aGlzLnhTcGVlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmoLnmja7lvZPliY3pgJ/luqbmm7TmlrDkuLvop5LnmoTkvY3nva5cbiAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy54U3BlZWQgKiBkdDtcbiAgICB9LFxuXG4gICAgZ2FtZU92ZXIoKSB7XG4gICAgICAgIGNjLmxvZyhcIj09PT09PT09PT09PT09PSBQbGF5ZXIuZ2FtZU92ZXIgPT09PT09PT09PT09PT09XCIpO1xuICAgICAgICB0aGlzLm5vZGUuc3RvcEFjdGlvbih0aGlzLmp1bXBBY3Rpb24pO1xuICAgIH1cbn0pO1xuIl19