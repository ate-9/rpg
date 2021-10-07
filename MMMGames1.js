'use strict';

var MMM = MMM || {}
MMM.mCurrentFrame = 0;                        //経過フレーム数
MMM.mFPS = 60;                                //フレームレート

MMM.onTimer = function() {}


MMM.init = function() {
  requestAnimationFrame(MMM.wmTimer);                   //60fpsになって滑らかになる
}

//IE対応
MMM.Sign = function (val) {
  if(val == 0) {
    return (0);
  }
  if (val <0) {
    return -1;
  }
  return (1) ;
}

MMM.wmTimer = function() {
  if(!MMM.mCurrentStart) {
    MMM.mCurrentStart = performance.now();
  }

  let d = Math.floor((performance.now() - MMM.mCurrentStart) * MMM.mFPS / 1000) - MMM.mCurrentFrame;
  if(d > 0){
    MMM.onTimer(d);
    MMM.mCurrentFrame += d;
  }
  requestAnimationFrame(MMM.wmTimer);
}

//EOF