




toastLog(234)

function main() {

    let meClick = text("我的").findOne().parent();
    randomClick(meClick)
}

dayTask()


// 获取经验值   
function dayTask() {

    toastLog("获取经验值中")
    experience();


    toastLog("获取经验值中")
    let daySign = descEndsWith('\n每天免费加曝光').visibleToUser().findOne();
    randomClick(daySign);
    while (1) {
        toastLog("领取酬金中")
        // 领取酬金
        let money = text("领取酬金").findOne();
        if (money) {
            log("已领取酬金")
            randomClick(money);
            sleep(2000)
        }

        //  关闭扔骰子弹窗-子线程
        closeDiceWin()

        // 扔骰子寻宝
        getDice()

        // 赚骰子
        geTEarn()

        break;
    }
}

// 获取经验值
function experience() {
    let getExperience = desc("今日500经验值待领取，来加速升级吧\n500\n经验值").findOnce();
    if (getExperience) {
        randomClick(getExperience);
        sleep(2000)

        // 点击返回按钮
        let breakFlag = idContains("PageMain").findOnce()
            .child(0).child(2).child(0).child(1).child(0).child(0);
        if (randomClick(breakFlag)) {
            return toastLog("获取经验值成功")
        }
    }
}


// 扔骰子寻宝
function getDice() {
    toastLog("扔骰子寻宝")
    let son = className("android.view.View").textContains("×").findOne();
    if (son) {
        randomClick(son);
        sleep(900)
        return;
    }
}


//  关闭扔骰子弹窗-子线程
function closeDiceWin() {
    threads.start(function () {
        while (true) {
            // 扔骰子弹窗
            let sonDice = className("android.view.View").textContains("骰子×").depth("14").findOne()//.next();
            if (sonDice) {
                sleep(600)
                toastLog("关闭扔骰子弹窗")
                let cloneDice = className("android.view.View").textContains("骰子×").depth("14").findOne().next();
                randomClick(cloneDice)
                toastLog(cloneDice)
                break;
            }
        }
    })
}



// 赚骰子
// geTEarn()

// 赚骰子
function geTEarn() {
    //赚骰子
    // let earn = text("领").findOne();
    // if (earn) {
    //     sleep(600)
    //     toastLog("签到赚骰子")
    //     randomClick(earn);
    //     sleep(600)
    // } else
    toastLog("进入")
    if (className("android.view.View").text("提醒签到收益+10%").exists()) {

        toastLog("进入-赚骰子页面")

        // 搜一搜推荐商品
        // getTrade()

        // 点击指定频道好物  =====》 待完善-商品目录Auto遍历不出来
        goAssignTrade()

        // 去浏览全新好物
        // goBrowse()

        // 去参与1站到底  ===》已完成
        // goOneBottom()

        // 搜一搜喜欢的商品     =====》  下滑有点问题
        // goLinkTrade()


        // 去淘宝双11赢红包    =====》   待完善-商品目录Auto遍历不出来
        // goLookTaoBao()


        // 好物夺宝试试手气   =====》已完成-不用了，浪费鱼币
        // goBig()

        // 去蚂蚁庄园逛一逛   =====》待完善
        // goAntManor()

        // 去支付宝农场领水果   
        // goApple()

        // 去蚂蚁森林逛一逛   =====》 待测试
        // goAntWoods()
        // goQuikEpedite()

        //  倒计时30s获得1个骰子 - 只获取第一个
        // getCountDown()

    } else {
        toastLog("没有签到赚骰子")
        return;
    }


    // 倒计时30s获得1个骰子   30s-30m-1h
    function getCountDown() {
        toastLog("倒计时30s获得1个骰子")
        sleep(3000)
        //  通过祖父组件获取子主间信息
        let getFather = idContains("taskWrap").findOne(3000).child(4).child(0)
        // 获取当前列序号   
        let getPresentVal = getFatherOrSon("倒计时30s获得1个骰子");
        // 获取 去完成信息
        goLookTrade = getFather.child(getPresentVal + 5);

        if (goLookTrade.text() == "领取奖励") {
            goLookTrade.click()
            console.log("点击领取咸鱼币")
            return sleep(4000)
        } else if (goLookTrade.text() == "已完成") {
            sleep(500)
            console.info("【倒计时30s获得1个骰子】任务已完成")
            return sleep(2000)
        }
    }

    // 搜一搜推荐商品              =====》
    function getTrade() {
        toastLog("进入-搜一搜推荐商品")
        sleep(900)
        //  通过祖父组件获取子主间信息
        let getFather = idContains("taskWrap").findOne(3000).child(4).child(0)
        // 获取当前列序号
        let getTradeVal = getFatherOrSon("搜一搜推荐商品");
        // 获取 去完成信息
        goLookTrade = getFather.child(getTradeVal + 7);
        sleep(900)

        if (goLookTrade.text() == "去完成") {
            // 点击去完成按钮
            randomClick(goLookTrade);
            sleep(800)
            console.log("进入-视频页面，搜索中...")

            sleep(1000)
            console.log("视频页面-输入搜索框内容");
            let setInpText = "EasyClick破解版";
            setText(setInpText);
            sleep(1000)

            console.log("点击搜索按钮");
            let flag = text("搜索").findOne().click()

            if (flag) {
                if (text("滑动浏览得奖励").findOne()) {
                    let sec = getSec(20);
                    while (1) {
                        sleep(800)
                        // 20秒后退出循环
                        if (sec === 20) {
                            console.log("已滑动30秒")
                            sleep(400)
                            log("点击返回闲鱼列表")
                            sleep(800)
                            let breakBtn =
                                id("root").findOne().child(1).child(2).child(1).child(1)
                            randomClick(breakBtn)

                            //  返回
                            log("返回闲鱼列表")
                            // sleep(800)
                            // randomClick(text("搜索").findOne())
                            break;
                        }
                        // 向下滑动
                        swipeScreenDown()
                    }
                }
            }

        } else if (goLookTrade.text == "领取奖励") {
            goLookTrade.click()
            sleep(500)
            toastLog("点击领取咸鱼币")
            sleep(6000)
        } else if (goLookTrade.text == "已完成") {
            sleep(500)
            toastLog("【搜一搜推荐商品】任务已完成")
            sleep(3000)
        }
    }

    // 点击指定频道好物   =====》 待完善-商品目录Auto遍历不出来
    function goAssignTrade() {
        while (1) {
            toastLog("进入-点击指定频道好物")
            //  通过祖父组件获取子主间信息
            let getFather = idContains("taskWrap").visibleToUser().findOne(3000).child(4).child(0)
            // 获取当前列序号
            let getAssignTradeVal = getFatherOrSon("点击指定频道好物");
            // 获取 去完成信息
            goLookTrade = getFather.child(getAssignTradeVal + 12);
            // toastLog(goLookTrade.text())

            if (goLookTrade.text() == "去完成") {
                toastLog("点击去完成按钮")
                // 点击去完成按钮
                let flag = randomClick(goLookTrade);
                sleep(800)
                console.log("浏览中...")

                let tenSon = textContains("再点击").findOnce();

                if (tenSon) {
                    randomClick(tenSon)
                    sleep(800)
                    for (let i = 0; i < 10; i++) {

                        // 向下滑动
                        swipeScreenDown()
                        toastLog(i + "次")
                        // 点击商品
                        clickProduct()
                        i++;
                        if (i === 10) {
                            console.log("点击返回闲鱼列表")
                            sleep(800)

                            break;
                        }
                        break;
                    }
                }

            }
            else if (goLookTrade.text() == "领取奖励") {
                sleep(500)
                toastLog("点击领取咸鱼币")
                rewardClick(goLookTrade);
                break;
            } else if (goLookTrade.text() == "已完成") {
                sleep(500)
                toastLog("【搜一搜推荐商品】任务已完成")
                sleep(3000)
                break;
            }
        }
    }

    // 去浏览全新好物    =====》
    function goBrowse() {
        while (1) {
            toastLog("进入-去浏览全新好物")
            //  通过祖父组件获取子主间信息
            let getFather = idContains("taskWrap").findOne(3000).child(4).child(0)
            // toastLog("浏览中...")
            // // 获取当前列序号
            let getTradeVal = getFatherOrSon("去浏览全新好物");
            toastLog("进入-去浏览全新好物页面")
            // // 获取 去完成信息
            goLookTrade = getFather.child(getTradeVal + 7);

            sleep(300)
            if (goLookTrade.text() == "去完成") {
                console.log("点击去完成");
                // 点击去完成按钮
                let flag = randomClick(goLookTrade);
                console.log(flag);

                sleep(800)
                if (flag) {
                    toastLog("向下滚动屏幕，浏览中...")
                    while (1) {
                        // 20秒后退出循环
                        if (getSec(20) === 0) {
                            console.log("已滑动30秒")
                            sleep(400)
                            log("点击返回闲鱼列表")
                            sleep(800)
                            randomClick(text("搜索").findOne())
                            break
                        }
                        // 向下滑动
                        swipeScreenDown()
                    }
                }
            } else if (goLookTrade.text() == "领取奖励") {
                goLookTrade.click()
                sleep(500)
                console.log("点击领取咸鱼币")
                sleep(6000)
                break
            } else if (goLookTrade.text() == "已完成") {
                sleep(500)
                console.info("【观看完整短视频】任务已完成")
                sleep(3000)
                break
            }
        }
    }

    // 去参与1站到底   =====》已完成
    function goOneBottom() {
        while (1) {
            toastLog("进入-去参与1站到底")
            //  通过祖父组件获取子主间信息
            let getFather = idContains("taskWrap").findOne(3000).child(4).child(0)
            // 获取当前列序号
            let getTradeVal = getFatherOrSon("去参与1站到底");
            // 获取 去完成信息
            goLookTrade = getFather.child(getTradeVal + 4);

            if (goLookTrade.text() == "去完成") {
                console.log("点击去完成");

                // 点击去完成按钮
                let flag = randomClick(goLookTrade);
                if (flag) {
                    sleep(random(3000, 5000))
                    console.log("已浏览1站到底,点击返回")
                    log("返回闲鱼列表")
                    let breakBtn = id("scrollContainer").findOne().child(3).child(2).child(1).child(1)
                    randomClick(breakBtn)
                    break
                }
            } else if (goLookTrade.text() == "领取奖励") {
                goLookTrade.click()
                sleep(500)
                console.log("点击领取咸鱼币")
                sleep(6000)
                break
            } else if (goLookTrade.text() == "已完成") {
                sleep(500)
                console.info("【1站到底】任务已完成")
                sleep(3000)
                break
            }
        }
    }


    // 搜一搜喜欢的商品   =====》  下滑有点问题
    function goLinkTrade() {
        while (1) {
            toastLog("进入-搜一搜喜欢的商品")
            //  通过祖父组件获取子主间信息
            let getFather = idContains("taskWrap").findOne(3000).child(4).child(0)

            // 获取当前列序号
            let getTradeVal = getFatherOrSon("搜一搜喜欢的商品");
            // 获取 去完成信息
            goLookTrade = getFather.child(getTradeVal + 7);

            if (goLookTrade.text() == "去完成") {
                // 点击去完成按钮
                let flag = randomClick(goLookTrade);
                sleep(3000)
                toastLog("开始浏览商品")
                // 20秒后退出循环
                if (flag) {

                    // 向下滑动
                    swipeScreenDown()

                    log("点击返回闲鱼列表")
                    sleep(800)
                    let breakBtn = desc("返回").findOne()
                    randomClick(breakBtn)
                    break;
                }
            } else if (goLookTrade.text() == "领取奖励") {
                goLookTrade.click()
                sleep(500)
                console.log("点击领取咸鱼币")
                sleep(6000)
                break
            } else if (goLookTrade.text() == "已完成") {
                sleep(500)
                console.info("【搜一搜商品】任务已完成")
                sleep(3000)
                break
            }
        }
    }

    // 去淘宝双11赢红包  =====》    待完善
    function goLookTaoBao() {
        while (1) {
            toastLog("进入-搜一搜喜欢的商品")
            //  通过祖父组件获取子主间信息
            let getFather = idContains("taskWrap").findOne(3000).child(4).child(0)

            // 获取当前列序号
            let getTradeVal = getFatherOrSon("去淘宝双11赢红包");
            // 获取 去完成信息
            goLookTrade = getFather.child(getTradeVal + 7);

            if (goLookTrade.text() == "去完成") {
                console.log("点击去完成");

                // 点击去完成按钮
                let flag = randomClick(goLookTrade);
                console.log(flag);

                sleep(900)
                if (flag) {
                    sleep(3000)

                    if (flag) {
                        console.log("返回闲鱼列表...")
                        randomClick(desc("返回").findOne())
                        break
                    }
                }
            } else if (goLookTrade.text() == "领取奖励") {
                goLookTrade.click()
                sleep(500)
                console.log("点击领取咸鱼币")
                sleep(6000)
            } else if (goLookTrade.text() == "已完成") {
                sleep(500)
                console.info("【观看完整短视频】任务已完成")
                sleep(3000)
            }
        }
    }

    // 好物夺宝试试手气    =====》
    function goBig() {
        toastLog("进入-好物夺宝试试手气")
        while (1) {
            //  通过祖父组件获取子主间信息
            let getFather = idContains("taskWrap").findOne(3000).child(4).child(0)

            // 获取当前列序号
            let getTradeVal = getFatherOrSon("好物夺宝试试手气");
            // 获取 去完成信息
            goLookTrade = getFather.child(getTradeVal + 7);

            if (goLookTrade.text() == "去完成") {
                // 点击去完成按钮
                randomClick(goLookTrade);
                sleep(3000)
                // 点击返回按钮
                let breakBtn = id("com.taobao.idlefish:id/weex_render_view").findOne().child(2).child(0).child(0).child(0)
                // 20秒后退出循环
                log("点击返回闲鱼列表")
                randomClick(breakBtn)
                break;
            } else if (goLookTrade.text() == "领取奖励") {
                goLookTrade.click()
                sleep(500)
                console.log("点击领取咸鱼币")
                sleep(6000)
            } else if (goLookTrade.text() == "已完成") {
                sleep(500)
                console.info("【观看完整短视频】任务已完成")
                sleep(3000)
            }
        }
    }


    // 去蚂蚁庄园逛一逛    =====》    待完善
    function goAntManor() {
        toastLog("进入-去蚂蚁庄园逛一逛")
        while (true) {
            //  通过祖父组件获取子主间信息
            let getFather = idContains("taskWrap").findOne(3000).child(4).child(0)

            // 获取当前列序号
            let getAntManorVal = getFatherOrSon("去蚂蚁庄园逛一逛");
            // 获取 去完成信息
            goLookTrade = getFather.child(getAntManorVal + 7);

            if (goLookTrade.text() == "去完成") {
                console.log("点击去完成");

                // 点击去完成按钮
                let flag = randomClick(goLookTrade);
                console.log(flag);

                sleep(800)
                console.log("浏览中...")
                if (flag) {
                    let sec = getSec(20);
                    while (1) {
                        // 20秒后退出循环
                        if (sec === 0) {
                            console.log("已滑动30秒")
                            sleep(400)
                            log("点击返回闲鱼列表")
                            sleep(800)
                            let breakBtn =
                                id("root").findOne().child(1).child(2).child(1).child(1)
                            randomClick(breakBtn)
                            break;
                        }
                        // 向下滑动
                        swipeScreenDown()
                    }
                }
            } else if (goLookTrade.text() == "领取奖励") {
                goLookTrade.click()
                sleep(500)
                console.log("点击领取咸鱼币")
                sleep(6000)
            } else if (goLookTrade.text() == "已完成") {
                sleep(500)
                console.info("【蚂蚁庄园逛一逛】任务已完成")
                sleep(3000)
            }
        }
    }


    // 去支付宝农场领水果      =====》 切换app 后，返回闲鱼列表
    function goApple() {
        toastLog("进入-去支付宝农场领水果")
        //  通过祖父组件获取子主间信息
        let getFather = idContains("taskWrap").findOne(3000).child(4).child(0)


        // 获取当前列序号
        let getAlipayVal = getFatherOrSon("去支付宝农场领水果");
        // 获取 去完成信息
        goLookTrade = getFather.child(getAlipayVal + 6);

        if (goLookTrade.text() == "去完成") {
            // 点击去完成按钮
            let flag = randomClick(goLookTrade);
            sleep(800)
            if (flag) {

                // 是否打开了支付宝
                if (currentPackage() === "com.eg.android.AlipayGphone") {
                    // 支付宝里的弹窗-开始
                    let breakBtn =
                        text("立即领奖").findOne().parent().parent().parent();
                    if (randomClick(breakBtn)) {
                        let iSeeBtn = text("知道了").findOnce()
                        if (randomClick(iSeeBtn)) {
                            sleep(500)
                            console.log("点击领取后，延迟3秒")
                            return sleep(3000)
                        }
                    }
                    console.log("返回闲鱼列表...")
                    sleep(3000)
                    app.launch("com.taobao.idlefish") // 打开闲鱼
                    if (flag) {
                        sleep(3000)
                        if (text("支付宝").findOne()) {
                            log("返回闲鱼列表")
                            sleep(800)
                            return randomClick(desc("返回").findOne())
                        }
                    }
                    // 支付宝里的弹窗-结束
                } else {
                    console.log("返回闲鱼列表...")
                    sleep(3000)
                    app.launch("com.taobao.idlefish") // 打开闲鱼
                    if (flag) {
                        sleep(3000)
                        if (text("支付宝").findOne()) {
                            log("返回闲鱼列表")
                            sleep(800)
                            // return
                            return randomClick(desc("返回").findOne())
                        }
                    }
                }
            } else if (goLookTrade.text() == "领取奖励") {
                goLookTrade.click()
                sleep(500)
                console.log("点击领取咸鱼币")
                sleep(6000)
            } else if (goLookTrade.text() == "已完成") {
                sleep(500)
                console.info("【支付宝农场领水果】任务已完成")
                sleep(3000)
            }
        }
    }


    // 去蚂蚁森林逛一逛    =====》 待测试
    function goAntWoods() {
        toastLog("进入-去蚂蚁森林逛一逛")
        while (true) {
            //  通过祖父组件获取子主间信息
            let getFather = idContains("taskWrap").findOne(3000).child(4).child(0)
            // 获取当前列序号   
            let getAntWoodsVal = getFatherOrSon("去蚂蚁森林逛一逛");

            // 获取 去完成信息   
            goLookTrade = getFather.child(getAntWoodsVal + 6);

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
                            randomClick(desc("返回").findOne())
                            break
                        }
                    }
                    // 支付宝里的弹窗-结束
                } else if (goLookTrade.text() == "领取奖励") {
                    goLookTrade.click()
                    sleep(500)
                    console.log("点击领取咸鱼币")
                    sleep(6000)
                    break
                } else if (goLookTrade.text() == "已完成") {
                    sleep(500)
                    console.info("【蚂蚁森林逛一逛】任务已完成")
                    sleep(3000)
                    break
                }
            }
        }
    }


    // 去快手极速版领红包      ===》 不打开快手-布局获取有点问题
    function goQuikEpedite() {
        toastLog("进入-去快手极速版领红包")
        while (true) {
            //  通过祖父组件获取子主间信息
            let getFather = idContains("taskWrap").findOne(3000).child(4).child(0)

            // 获取当前列序号
            let geQuikEpediteVal = getFatherOrSon("去快手极速版领红包");
            // 获取 去完成信息
            goLookTrade = getFather.child(geQuikEpediteVal + 7);

            if (goLookTrade.text() == "去完成") {
                // 点击去完成按钮
                randomClick(goLookTrade);
                sleep(800)


                // 是否打开了快手
                if (currentPackage() === "com.smile.gifmaker") {
                    // 支付宝里的弹窗-开始
                    let breakBtn =
                        text("立即领奖").findOne().parent().parent().parent();
                    if (randomClick(breakBtn)) {
                        let iSeeBtn = text("知道了").findOnce()
                        if (randomClick(iSeeBtn)) {
                            sleep(500)
                            console.log("点击领取后，延迟3秒")
                            return sleep(3000)
                        }
                    }
                    console.log("返回闲鱼列表...")
                    sleep(3000)
                    let kfFlag = app.launch("com.smile.gifmaker") // 打开闲鱼
                    if (kfFlag) {
                        sleep(3000)
                        if (text("支付宝").findOne()) {
                            log("返回闲鱼列表")
                            sleep(800)
                            return randomClick(desc("返回").findOne())
                        }
                    }
                    // 支付宝里的弹窗-结束
                } else {
                    console.log("返回闲鱼列表...")
                    sleep(3000)
                    let ksFlag = app.launch("com.taobao.idlefish") // 打开闲鱼
                    if (ksFlag) {
                        sleep(3000)
                        if (text("支付宝").findOne()) {
                            log("返回闲鱼列表")
                            sleep(800)
                            // return
                            return randomClick(desc("返回").findOne())
                        }
                    }
                }


            } else if (goLookTrade.text() == "领取奖励") {
                goLookTrade.click()
                sleep(500)
                console.log("点击领取咸鱼币")
                sleep(6000)
                break
            } else if (goLookTrade.text() == "已完成") {
                sleep(500)
                console.info("【观看完整短视频】任务已完成")
                sleep(3000)
                break
            }
        }
    }


    // 去芭芭农场领水果
    function goBarbieFarm() {
        toastLog("进入-去芭芭农场领水果")
        //  通过祖父组件获取子主间信息
        let getFather = idContains("taskWrap").findOne(3000).child(4).child(0)


        // 获取当前列序号
        let getBarbieFarmVal = getFatherOrSon("去芭芭农场领水果");
        // 获取 去完成信息
        goLookTrade = getFather.child(getBarbieFarmVal + 7);

        if (goLookTrade.text() == "去完成") {
            // 点击去完成按钮
            randomClick(goLookTrade);
            sleep(800)
            console.log("进入-视频页面，搜索中...")

        } else if (goLookTrade.text() == "领取奖励") {
            goLookTrade.click()
            sleep(500)
            console.log("点击领取咸鱼币")
            sleep(6000)
        } else if (goLookTrade.text() == "已完成") {
            sleep(500)
            console.info("【观看完整短视频】任务已完成")
            sleep(3000)
        }
    }


    // 去中国移动签到领话费
    function goChinaMobile() {
        toastLog("进入-去中国移动签到领话费")
        //  通过祖父组件获取子主间信息
        let getFather = idContains("taskWrap").findOne(3000).child(4).child(0)


        // 获取当前列序号
        let getChinaMobileVal = getFatherOrSon("去中国移动签到领话费");
        // 获取 去完成信息
        goLookTrade = getFather.child(getChinaMobileVal + 7);

        if (goLookTrade.text() == "去完成") {
            // 点击去完成按钮
            randomClick(goLookTrade);
            sleep(800)
            console.log("进入-视频页面，搜索中...")

        } else if (goLookTrade.text() == "领取奖励") {
            goLookTrade.click()
            sleep(500)
            console.log("点击领取咸鱼币")
            sleep(6000)
        } else if (goLookTrade.text() == "已完成") {
            sleep(500)
            console.info("【观看完整短视频】任务已完成")
            sleep(3000)
        }
    }


    // 去淘宝签到领红包
    function goTaoBao() {
        toastLog("进入-去淘宝签到领红包")
        //  通过祖父组件获取子主间信息
        let getFather = idContains("taskWrap").findOne(3000).child(4).child(0)


        // 获取当前列序号
        let getTaoBaoVal = getFatherOrSon("去淘宝签到领红包");
        // 获取 去完成信息
        goLookTrade = getFather.child(getTaoBaoVal + 7);

        if (goLookTrade.text() == "去完成") {
            // 点击去完成按钮
            randomClick(goLookTrade);
            sleep(800)
            console.log("进入-视频页面，搜索中...")

        } else if (goLookTrade.text() == "领取奖励") {
            goLookTrade.click()
            sleep(500)
            console.log("点击领取咸鱼币")
            sleep(6000)
        } else if (goLookTrade.text() == "已完成") {
            sleep(500)
            console.info("【观看完整短视频】任务已完成")
            sleep(3000)
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

    if (desc("搜索栏").findOne()) {
        let breakFlag = desc("返回").findOnce()
        if (breakFlag) {
            sleep(3000)
            randomClick(breakFlag)
            return toastLog("返回闲鱼")
        }
    }
}



//========================================公共========
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
    let timesInterval = random(1, 10);    // 滑动时间间隔


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
    log("滑动屏幕开始")

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
    log("曲线滑动休息：" + delayTime + "秒")
    return sleep(delayTime);
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
    toastLog("开始直线滑动");
    swipe(startX, startY, endX, endY, pressTime);
    let randomMin = timesInterval * 100;
    let randomMax = (parseInt(timesInterval) + 3) * 1000;
    let delayTime = random(randomMin, randomMax);
    log("直线滑动休息：" + delayTime + "秒")
    return sleep(delayTime);
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