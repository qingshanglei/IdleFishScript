

// toastLog(23423)

//#region 倒计时参考
// function goAntManor() {
//     toastLog("进入-去蚂蚁庄园逛一逛")
//     //  通过祖父组件获取子主间信息
//     let getFather = idContains("taskWrap").findOne(3000).child(4).child(0)

//     // 获取当前列序号
//     let getAntManorVal = getFatherOrSon("去蚂蚁庄园逛一逛");
//     // 获取 去完成信息
//     goLookTrade = getFather.child(getAntManorVal + 7);

//     if (goLookTrade.text() == "去完成") {
//         console.log("点击去完成");

//         // 点击去完成按钮
//         let flag = randomClick(goLookTrade);
//         console.log(flag);

//         sleep(800)
//         console.log("浏览中...")
//         if (flag) {
//             let sec = getSec(20);
//             while (1) {
//                 // 20秒后退出循环
//                 if ( sec === 0) {
//                     console.log("已滑动30秒")
//                     sleep(400)
//                     log("点击返回闲鱼列表")
//                     sleep(800)
//                     let breakBtn =
//                         id("root").findOne().child(1).child(2).child(1).child(1)
//                     randomClick(breakBtn)
//                     break;
//                 }
//                 // 向下滑动
//                 swipeScreenDown()
//             }
//         }
//     } else if (goLookTrade.text() == "领取奖励") {
//         goLookTrade.click()
//         sleep(500)
//         console.log("点击领取咸鱼币后，延迟6秒")
//         sleep(6000)
//     } else if (goLookTrade.text() == "已完成") {
//         sleep(500)
//         console.info("【观看完整短视频】任务已完成")
//         sleep(3000)
//     }
// }


sleep(3000)
desc("返回").findOnce();




//#endregion

//#region 切换app参考
// function goApple() {
//     toastLog("进入-去支付宝农场领水果")
//     //  通过祖父组件获取子主间信息
//     let getFather = idContains("taskWrap").findOne(3000).child(4).child(0)


//     // 获取当前列序号
//     let getAlipayVal = getFatherOrSon("去支付宝农场领水果");
//     // 获取 去完成信息
//     goLookTrade = getFather.child(getAlipayVal + 7);

//     if (goLookTrade.text() == "去完成") {
//         // 点击去完成按钮
//         let flag = randomClick(goLookTrade);
//         sleep(800)
//         if (flag) {

//             // 是否打开了快手
//             if (currentPackage() === "com.smile.gifmaker") {
//                 // 支付宝里的弹窗-开始
//                 let breakBtn =
//                     text("立即领奖").findOne().parent().parent().parent();
//                 if (randomClick(breakBtn)) {
//                     let iSeeBtn = text("知道了").findOnce()
//                     if (randomClick(iSeeBtn)) {
//                         sleep(500)
//                         console.log("点击领取后，延迟3秒")
//                         return sleep(3000)
//                     }
//                 }
//                 console.log("返回闲鱼列表...")
//                 sleep(3000)
//                 let kfFlag = app.launch("com.smile.gifmaker") // 打开闲鱼
//                 if (kfFlag) {
//                     sleep(3000)
//                     if (text("支付宝").findOne()) {
//                         log("返回闲鱼列表")
//                         sleep(800)
//                         return randomClick(desc("返回").findOne())
//                     }
//                 }
//                 // 支付宝里的弹窗-结束
//             } else {
//                 console.log("返回闲鱼列表...")
//                 sleep(3000)
//                 let ksFlag = app.launch("com.taobao.idlefish") // 打开闲鱼
//                 if (ksFlag) {
//                     sleep(3000)
//                     if (text("支付宝").findOne()) {
//                         log("返回闲鱼列表")
//                         sleep(800)
//                         // return
//                         return randomClick(desc("返回").findOne())
//                     }
//                 }
//             }

//         } else if (goLookTrade.text() == "领取奖励") {
//             goLookTrade.click()
//             sleep(500)
//             console.log("点击领取咸鱼币后，延迟6秒")
//             sleep(6000)
//         } else if (goLookTrade.text() == "已完成") {
//             sleep(500)
//             console.info("【观看完整短视频】任务已完成")
//             sleep(3000)
//         }
//     }
// }


//#endregion



//#region   返回
// else if (goLookTrade.text() == "领取奖励") {
//     goLookTrade.click()
//     sleep(500)
//     console.log("点击领取咸鱼币后，延迟6秒")
//     sleep(6000)
// } else if (goLookTrade.text() == "已完成") {
//     sleep(500)
//     console.info("【观看完整短视频】任务已完成")
//     sleep(3000)
// }
//#endregion

// let breakBtn =
//  text("全新好物").findOne().child(0).child(0).child(1).child(0).child(0)
// console.log(launch());


// 是否打开了支付宝
//  if (currentPackage() === "com.eg.android.AlipayGphone") {
//     // 支付宝里的弹窗-开始
//     let breakBtn =
//         text("立即领奖").findOne().parent().parent().parent();
//     if (randomClick(breakBtn)) {
//         let iSeeBtn = text("知道了").findOnce()
//         if (randomClick(iSeeBtn)) {
//             sleep(500)
//             console.log("点击领取后，延迟3秒")
//             return sleep(3000)
//         }
//     }
//     console.log("返回闲鱼列表...")
//     sleep(3000)
//     app.launch("com.taobao.idlefish") // 打开闲鱼
//     if (flag) {
//         sleep(3000)
//         if (text("支付宝").findOne()) {
//             log("返回闲鱼列表")
//             sleep(800)
//             return randomClick(desc("返回").findOne())
//         }
//     }
// 支付宝里的弹窗-结束



// if (flag) {
//     console.log("返回闲鱼列表...")
//     sleep(3000)
// sleep(900)
// let breakBtn = desc("返回").findOne()
// randomClick(breakBtn);
// let flag = app.launch("com.taobao.idlefish") // 打开闲鱼




// 是否打开了支付宝



// 滑动屏幕向下滑动并延迟n秒
// getssss()
// function getssss() {
//     let longTime = 0;
//     while (1) {

//         toastLog("向下滚动屏幕，浏览中...")
//         // 20秒后退出循环
//         if (getSec(20) === 20) {
//             console.log("已滑动30" + longTime + "秒,点击返回")

//             log("返回闲鱼列表")
//             sleep(800)
//             return randomClick(desc("返回").findOne())
//         }
//     }
// }
console.log("234248888888888888888888");


// clickProduct()
// 随机点击商品
function clickProduct() {
    // 随机列
    let randomProduct = random(0, 1);
    toastLog("选择第" + (randomProduct + 1) + "列")
    // 商品列表，分两列，随机获取一列，1列23个商品
    let productList = idContains("feedsContainer").findOne().child(0).child(0).child(0).child(randomProduct)
    sleep(600)
    // 随机获取商品
    let randomProductItem = random(0, 22);
    toastLog("点击第" + (randomProductItem + 1) + "个商品")
    // 商品
    let productItem = productList.child(randomProduct)

    // 商品图片
    let productItemImg = productItem.child(0)
    sleep(3000)
    // // 商品图片点击
    randomClick(productItemImg)
    sleep(500)

}


// let breakBtn = id("com.taobao.idlefish:id/weex_render_view").findOne()
//     .child(2).child(0).child(0).child(0)
// if (breakBtn) {
//     randomClick(breakBtn);
//     sleep(400)
// }

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
    let remainingSeconds = seconds;
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
    let delayTime = Math.floor(random(randomMin, randomMax));
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
    log("暂停：" + delayTime + "秒")
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


