


// // let sonDice = className("android.view.View").textContains("骰子×").depth("14").findOne()//.next();
// // if (sonDice) {
// //     sleep(600)
// //     toastLog("关闭扔骰子弹窗")
// //     let cloneDice = className("android.view.View").textContains("骰子×").depth("14").findOne().next();
// //     randomClick(cloneDice)
// //     toastLog(cloneDice)
// // }


// // // 指定区域随机点击  
// // function randomClick(i) {
// //     let link = i.bounds();
// //     let randX = link.left + Math.random() * (link.right - link.left);
// //     let randY = link.top + Math.random() * (link.bottom - link.top);
// //     click(randX, randY);
// // }


// // let x1 = random(device.width / 4, (device.width / 4) * 3);
// // let y1 = random((device.height / 4) * 3, (device.height / 4) * 3);
// // let x2 = random(device.width / 4, (device.width / 4) * 3);
// // let y2 = random((device.height / .4) * 0.7, (device.height / 4) * 0.5);
// // sleep(600)
// // toastLog(x1)
// // toastLog(x2)
// // toastLog(y1)
// // toastLog(y2)

// //#region  场次
// // console.show();
// // while (1) {
// //     let iiii = 0;
// //     let getSession = getCong = id("ll_perform_item").findOne();

// //     if (getSession) {
// //         console.log(2352);
// //         console.log(getSession);
// //         if (getSession.text().textContains("2024-11-28")) {
// //             console.log("点击了");

// //             getSession.click();
// //             break;

// //         }
// //     } else {
// //         iiii++;
// //         console.log(2352);
// //         if (iiii == 100) {
// //             break
// //         }
// //     }
// // }
// //#endregion


// //#region 票档
// // console.show();
// // while (1) {
// //     // 票档
// //     let getSession = id("cn.damai:id/project_detail_perform_price_flowlayout").findOne();
// //     if (getSession) {
// //         for (let i = 0; i < getSession.childCount(); i++) {
// //             let getSession = getSession.child(i).findOne();
// //             console.log(getSession);
// //             if (getSession.text().textEndsWith("1080元")) {
// //                 console.log("点击了-1080元");
// //                 getSession.click();
// //                 break;
// //             }
// //         }
// //     }
// // }

//#endregion
goAntWoods()

// 去淘宝双11赢红包
function goAntWoods() {
    toastLog("进入-去蚂蚁森林逛一逛")
    //  通过祖父组件获取子主间信息
    let getFather = idContains("taskWrap").findOne(3000).child(4).child(0)


    // 获取当前列序号   
    let getAntWoodsVal = getFatherOrSon("去蚂蚁森林逛一逛");

    // 获取 去完成信息   
    goLookTrade = getFather.child(getAntWoodsVal + 7);
    if (goLookTrade.text() == "去完成") {
        // 点击去完成按钮
        randomClick(goLookTrade);
        sleep(800)
        console.log("点击去完成后，延迟6秒")
        sleep(2000)
        // 是否打开了支付宝
        if (currentPackage() === "com.eg.android.AlipayGphone") {
            // 支付宝里的弹窗-开始
            sleep(3000)
            console.log("等待3秒");
            console.log("返回闲鱼列表...")
            let flag = app.launch("com.taobao.idlefish") // 打开闲鱼
            if (flag) {
                sleep(3000)
                if (text("支付宝").findOne()) {
                    log("返回闲鱼列表")
                    sleep(800)
                    return randomClick(desc("返回").findOne())
                }
            }
            // 支付宝里的弹窗-结束
        } else if (goLookTrade.text() == "领取奖励") {
            goLookTrade.click()
            sleep(500)
            console.log("点击领取咸鱼币后，延迟6秒")
            sleep(6000)
        } else if (goLookTrade.text() == "已完成") {
            sleep(500)
            console.info("【观看完整短视频】任务已完成")
            sleep(3000)
        }
    }
}


// 通过祖父组件获取当前子组件信息  
function getFatherOrSon(textName) {
    console.log("获取当前子组件信息");
    //  通过祖父组件获取子主间信息
    var getFather = idContains("taskWrap").findOne(3000).child(4).child(0)
    // 获取父组件数量
    let getCount = getFather.childCount();
    for (let i = 0; i < getCount; i++) {
        if (getFather.child(i).text() == textName) {
            toastLog("返回当前子组件信息:" + i)
            return i;
        }
    }
}



// 正在领取奖励
function rewardClick() {
    toastLog("正在领取奖励")
    let getReward = className("android.view.View").text("领取奖励").findOne();
    if (getReward) {
        randomClick(getReward);
        sleep(800)
        toastLog("已领取奖励")
    }
}


// 通过祖父组件获取当前子组件信息  
function getFatherOrSon(textName) {
    //  通过祖父组件获取子主间信息
    var getFather = idContains("taskWrap").findOne(3000).child(4).child(0)
    // 获取父组件数量
    let getCount = getFather.childCount();
    for (let i = 0; i < getCount; i++) {
        if (getFather.child(i).text() == textName) {
            return i;
        }
    }

}



//========================================公共
// 指定区域随机点击  
function randomClick(i) {
    let link = i.bounds();
    let randX = link.left + Math.random() * (link.right - link.left);
    let randY = link.top + Math.random() * (link.bottom - link.top);
    click(randX, randY);
    return true;
}

// 倒计时函数
function getSec(seconds) {
    let remainingSeconds = seconds ;
    let sec = threads.start(function () {
        while (remainingSeconds > 0) {
            toastLog("倒计时： " + remainingSeconds + " 秒");
            sleep(1000);
            remainingSeconds--;
        }
        log("倒计时结束！");
        //停止线程执行
        sec.interrupt();
        return remainingSeconds;
    });
    return remainingSeconds;
}

//#region 曲线滑动
//======================= 曲线滑动-开始 =======================

// 下拉
function swipeScreenDown() {
    toastLog("滑动屏幕开始")
    // 获取屏幕宽高， 修复AutoX7.0-Bug
    let device = {
        width: Packages.android.content.res.Resources.getSystem().getDisplayMetrics().widthPixels,
        height: Packages.android.content.res.Resources.getSystem().getDisplayMetrics().heightPixels
    }

    let time = random(400, 2500);
    sleep(time); //开始滑动视频
    let x1 = random(device.width / 4, (device.width / 4) * 3);
    let x2 = random(device.width / 4, (device.width / 4) * 3);
    let y1 = device.height - (device.height * 0.15)
    let y2 = device.height * 0.2
    let pressTime = random(700, 2500); // 滑动时间
    let timesInterval = random(1, 20);    // 滑动时间间隔
    sleep(1000)


    //  概率0-9 大于3的时候采用曲线概率 小于3的时候直线概率
    let probability = Math.floor(Math.random() * 10);
    if (probability > 7) {
        swipeCurveDown(x1, y1, x2, y2, pressTime, timesInterval); // 曲线
    } else {
        //                      
        swipeLineDown(x1, y1, x2, y2, pressTime, timesInterval); //直线
    }

}



/**
 * 仿真随机带曲线滑动（视频/小说）
 * @param{起点x}qx
 * @param(起点y}qy 
 * @param{终点x}zx
 * @param(终点y}zy
 * @param(滑动时间}time
 * @param(滑动时间间隔}time
/**
 * 曲线滑动屏幕向下滑动并延迟n秒
 */
function swipeCurveDown(qx, qy, zx, zy, time, timesInterval) {
    let xxy = [time];
    let point = [];
    let dx0 = {
        "x": qx,
        "y": qy
    };
    let dx1 = {
        // "x": random(qx - 100, qx + 100),
        "x": random(qx - (device.width / 4) * 0.25, qx + (device.width / 4) * 0.25),
        "y": random(qy, qy + 50)
    };
    let dx2 = {
        // "x": random(zx - 100, zx + 100),
        "x": random(zx - (device.width / 4) * 0.25, zx + (device.width / 4) * 0.25),
        "y": random(zy, zy + 50),
    };
    let dx3 = {
        "x": zx,
        "y": zy
    };
    for (let i = 0; i < 4; i++) {
        eval("point.push(dx" + i + ")");
    };

    for (let i = 0; i < 1; i += 0.08) {
        let newPoint = bezier_curves(point, i);
        // =============》
        xxyy = [parseInt(newPoint.x), parseInt(newPoint.y)]
        xxy.push(xxyy);
    }
    gesture.apply(null, xxy);


    // =============》
    let randomMin = timesInterval * 1000;
    let randomMax = (parseInt(timesInterval) + 2) * 1000;
    let delayTime = random(randomMin, randomMax);
    sleep(delayTime);
}

/**
 * 直线滑动屏幕向下滑动并延迟n秒
 * @param{起点x}qx
 * @param(起点y}qy 
 * @param{终点x}zx
 * @param(终点y}zy
 * @param(滑动时间}time
 * @param(滑动时间间隔}time
 */
function swipeLineDown(startX, startY, endX, endY, pressTime, timesInterval) {
    swipe(startX, startY, endX, endY, pressTime);
    let randomMin = timesInterval * 100;
    let randomMax = (parseInt(timesInterval) + 3) * 1000;
    let delayTime = Math.floor(random(randomMin, randomMax));
    log("直线滑动休息：" + delayTime + "秒")
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
//======================= 曲线滑动-结束 =======================
//#endregion 










