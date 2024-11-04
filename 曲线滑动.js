// auto.waitFor();//判断和等待开启无障碍
// console.show(); //开启日志（悬浮窗权限）
// app.launchApp('快手');//只有一个快手以直接Launch就可以，不用包名
// 获取屏幕宽高， 修复AutoX7.0-Bug
let device = {
    width: Packages.android.content.res.Resources.getSystem().getDisplayMetrics().widthPixels,
    height: Packages.android.content.res.Resources.getSystem().getDisplayMetrics().heightPixels
}

// cutDownBySleep(8);//等待splash时间倒计时
let x1 = random(device.width * 0.8, device.width * 0.9);
let y1 = device.height - (device.height * 0.15)
let x2 = random(device.width * 0.8, device.width * 0.9);
let y2 = device.height * 0.3
let pressTime = random(700, 2500); // 滑动时间
let timesInterval = random(1, 10);    // 滑动时间间隔

adolescentWindows()
closeUpgrageTip()
clickVideo()

while (true) {
    swipeScreenDown(x1, y1, x2, y2, pressTime, timesInterval)
    toastLog("向下滑动中...")
}

function clickVideo() {
    if (text("精选").exists()) {
        clickControlBounds(text("精选"))
    }
}
/**
 * 青少年窗口
 */
function adolescentWindows() {
    if (text("我知道了").exists()) {
        text("我知道了").findOnce().click();
    }
    if (text("知道了").exists()) {
        text("知道了").findOnce().click();
    }
}
/**
 * 直接无视
 */
function closeUpgrageTip() {
    if (text("直接无视").exists()) {
        text("直接无视").findOnce().click();
    }
    if (text("刷新重试").exists()) {
        text("刷新重试").findOnce().click();
    }
}
/**
 * 点击屏幕上的坐标
 * @param {坐标} b 
 */
function clickControlBounds(element) {
    let clickResult = false;
    if (element == null) {
        return false;
    }
    try {
        if (element.exists()) {

            let b = element.findOnce().bounds();
            clickResult = click(b.centerX(), b.centerY());
            sleep(random(2000, 3200));
        } else {

        }
        return clickResult;
    } catch (error) {
        toastLog("clickControlBounds方法出现错误：" + error)
        return false;
    }
}

/**
 * 倒计时方法适用于脚本
 * @param {倒计时时间} lasterTime 
 */
function cutDownBySleep(lasterTime, message) {
    message = message || ""
    for (let i = lasterTime; i => 0; i--) {
        console.info(message + "剩余" + i + "秒...")
        sleep(1000)
        if (i == 1) {
            return
        }
    }
}
/**
 * 概率0-9 大于3的时候采用曲线概率 小于3的时候直线概率
 */
function randomFunction() {
    return Math.floor(Math.random() * 10);
}
/**
 * 滑动(默认概率是百分之三十)
 * @param {*} qx 
 * @param {*} qy 
 * @param {*} zx 
 * @param {*} zy 
 * @param {*} time 
 * @param {*} timesInterval 
 */
function swipeScreenDown(qx, qy, zx, zy, time, timesInterval) {

    let probability = randomFunction()
    if (probability >= 7) {
        swipeCurveDown(qx, qy, zx, zy, time, timesInterval); //曲线概率
    } else {
        swipeLineDown(qx, qy, zx, zy, time, timesInterval); //直线概率
    }
}
/**
 * 曲线滑动屏幕向下滑动并延迟n秒
 */
function swipeCurveDown(qx, qy, zx, zy, time, timesInterval) {
    toastLog("曲线滑动");
    var xxy = [time];
    var point = [];
    var dx0 = {
        "x": qx,
        "y": qy
    };
    var dx1 = {
        "x": random(qx - 100, qx + 100),
        "y": random(qy, qy + 50)
    };
    var dx2 = {
        "x": random(zx - 100, zx + 100),
        "y": random(zy, zy + 50),
    };
    var dx3 = {
        "x": zx,
        "y": zy
    };
    for (var i = 0; i < 4; i++) {
        eval("point.push(dx" + i + ")");
    };
    for (let i = 0; i < 1; i += 0.08) {
        let newPoint = bezier_curves(point, i);
        xxyy = [parseInt(newPoint.x), parseInt(newPoint.y)]
        xxy.push(xxyy);
    }
    gesture.apply(null, xxy);

    let randomMin = timesInterval * 1000;
    let randomMax = (parseInt(timesInterval) + 2) * 1000;
    let delayTime = random(randomMin, randomMax);
    sleep(delayTime);
}
/**
 * 直线滑动屏幕向下滑动并延迟n秒
 */
function swipeLineDown(startX, startY, endX, endY, pressTime, timesInterval) {
    toastLog("直线滑动");
    swipe(startX, startY, endX, endY, pressTime);
    let randomMin = timesInterval * 1000;
    let randomMax = (parseInt(timesInterval) + 3) * 1000;
    let delayTime = random(randomMin, randomMax);
    sleep(delayTime);
}
/**
 * 贝塞尔曲线
 * @param {坐标点} ScreenPoint 
 * @param {偏移量} Offset 
 */
function bezier_curves(ScreenPoint, Offset) {
    cx = 3.0 * (ScreenPoint[1].x - ScreenPoint[0].x);
    bx = 3.0 * (ScreenPoint[2].x - ScreenPoint[1].x) - cx;
    ax = ScreenPoint[3].x - ScreenPoint[0].x - cx - bx;
    cy = 3.0 * (ScreenPoint[1].y - ScreenPoint[0].y);
    by = 3.0 * (ScreenPoint[2].y - ScreenPoint[1].y) - cy;
    ay = ScreenPoint[3].y - ScreenPoint[0].y - cy - by;
    tSquared = Offset * Offset;
    tCubed = tSquared * Offset;
    result = {
        "x": 0,
        "y": 0
    };
    result.x = (ax * tCubed) + (bx * tSquared) + (cx * Offset) + ScreenPoint[0].x;
    result.y = (ay * tCubed) + (by * tSquared) + (cy * Offset) + ScreenPoint[0].y;
    return result;
}