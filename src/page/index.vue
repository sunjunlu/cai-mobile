<template>
<div >
        <div data-v-7bf92f17="" class="home" @click="novisiable">
            <div class="refresh-element" id="refresh-element" style="min-height: 0px;">
                <div class="refresh-box">
                    <div class="refresh-content">
                        <div class="refresh-icon">⇣</div>
                        <div class="refresh-text">下拉以刷新页面</div>
                    </div>
                </div>
            </div>
            <div data-v-3f834e15="" data-v-7bf92f17="" class="head">
                <div data-v-3f834e15="" flex="cross:center" class="head-nav">
                    <div data-v-3f834e15="" class="head-logo"><img data-v-3f834e15="" src="../assets/img/logo.png" alt=""></div>
                </div>
            </div>
            <Swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <swipe-item><img data-v-7bf92f17="" src="../assets/img/banner1.jpg" alt=""></swipe-item>
                <swipe-item><img data-v-7bf92f17="" src="../assets/img/banner3.jpg" alt=""></swipe-item>
                <swipe-item><img data-v-7bf92f17="" src="../assets/img/banner4.jpg" alt=""></swipe-item>
            </Swipe>
            <div data-v-7bf92f17="" class="content">
                <div data-v-7bf92f17="" class="lottery-list">
                    <div data-v-7bf92f17="" flex="cross:center main:justify" class="title s-1">
                        <div data-v-7bf92f17="" flex="main:justify" class="left"><b data-v-7bf92f17="" class="name">新加坡天天乐彩</b>
                            <p data-v-7bf92f17="" class="wrap-issue">第<b data-v-7bf92f17="" class="issue">2020204</b>期</p>
                        </div>
                        <div data-v-7bf92f17="" class="line"></div>
                        <div data-v-7bf92f17="" class="right">
                            <p data-v-7bf92f17="" class="text">下期截止時間</p>
                            <p data-v-7bf92f17="" class="time">{{getnextOpen}}</p>
                        </div>
                    </div>
                    <div data-v-7bf92f17="" flex="dir:top main:center" class="count-down">
                        <div data-v-7bf92f17="" flex="dir:top" class="inner-wrap">
                            <lotteryTime ></lotteryTime>
                            <div data-v-7bf92f17="" flex="main:justify" class="option-btn">
                                <div data-v-7bf92f17="" flex="" class="_t">
                                    <div data-v-7bf92f17="" flex="main:center cross:center" class="live-btn"><span data-v-7bf92f17="" @click="showOpenHandle">開獎驗證</span></div>
                                    <div data-v-7bf92f17="" flex="main:center cross:center" class="verify-btn"><router-link to="/lotteryVideo"><span data-v-7bf92f17="">直播</span></router-link></div>
                                </div>
                                <div data-v-7bf92f17="" class="history-btn"><router-link to="/drawNotice"><span data-v-7bf92f17="">歷史開獎查詢</span><i data-v-7bf92f17="" class="icon ">></i></router-link></div>
                            </div>
                        </div>
                    </div>
                    <showNumber :insert="nowOpen"></showNumber>
                    <div data-v-7bf92f17="" flex="main:center cross:center" @click="showfiveHandle()" class="last-issue"><span data-v-7bf92f17="">查看近五期</span>
                    <!-- <i data-v-7bf92f17="" :class="{'icon-arrow-up':showfive,'icon-xiajiantou':!showfive}" class="icon iconfont"></i> -->
                    <i data-v-0975c882="" v-if="showfive"  class="icon iconfont">&#xe6ff;</i>
                    <i data-v-0975c882="" v-if="!showfive"  class="icon iconfont">&#xe711;</i>
                    </div>
                    <ul data-v-7bf92f17="" class="last-issue-list" v-if="showfive">
                        <li data-v-7bf92f17="" flex="cross:center main:justify" v-for="(item,index) in lastFive" :key="index" class="list-item">
                            <div data-v-7bf92f17="" class="issue-text">
                                第<span data-v-7bf92f17="" class="issue">{{item.ticket}}</span>期
                            </div>
                            <showNumber flex="cross:center main:justify" :insert="item.number" class="list-item indexList"></showNumber>
                        </li>
                    </ul>
                    <div data-v-93487c46="" data-v-7bf92f17="" class="lottery-certifly" v-if="showOpen">
                        <div data-v-93487c46="" class="content">
                            <div data-v-93487c46="" flex="cross:center" class="title"><img data-v-93487c46="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC4ElEQVRYR9WXzUtUYRSHnzM5SqJ0Z1EU9GWIc29G0SIKAltFH0RF0aY20SZISy36H1pZoVI7/4IWSqBRLSqCoE1SNo6WaZRFUPdKaqSTJ66Oo45z574qMXS37zm/33PPe94vocCfFNif/wvgLWU7hOhxQQ8qbATZMFNB/SLwCeTRFJPt2xl9Y1pZowr4xhGid4H9JsKKPolAfRyvOyw+L4BCUR9Wk0IdiBHsnKGqQEsV3lWBVBBIoOg7ytalKLoPsifsL/KP68siUscqGf2WKy4ngEK0l9hTgX0rM093CLywcWsEJrP1cgIksFoEqTUxVxgXtCldqUNBOYq2Onh1oQDphnttYj7d/+gVB6+5H0pSxAYF1gdDsNPBXaC9qAK9xDqBw+YAXHZwW3qgOEJsKB8A0GXjHpmvvQAggbVVkA+m5jMVMJuCOc2pbTYjGY8FAL1YDSA3zQG0Q9EekDOCVJrlaaONd2s2NgvArPyKpiJIQxy31Rd6T2zzJAyZASychmyABGCHCSmcA70Y4ffZOL8+D2BtmUAGw/LS4702rpOzAgliYwKl+YQU/SHIQ9C9Nl6FH5skdklhuhphn8KYg1sWBPBTIDMYAtLk4F3zY5aychRGHdzyAAArKUhV2F/44wI1cdxnw1A6guUKUmySp2ifgxdfaRN+t/HWCmgf1qkp5J6JeTrmgY2b2Weyl2E9SGaJBItqm413YWb+rTZFzpsDaIONdzugAmsqIDIQLqYnbbx2BUli+adcF8hpYHVYrqIVDl5mxSxrK/6DW1INEwnKq4RVdxS6BWkMMwc6bdyj8+MWASSxdinyKk/5p2Bik834sEIkSewGcN3A3N+2ww8jXyiB1SzIoqNzzkT9aepQOCDIbjNzw+PYFyv4hcSHKOiVbLakBb2Uzp/XdGP6e73RtRx4Lmjtiq/l2c3VT1l1iuiJ7IeJoF+BjyCP/8nDxKTLlxuzxMfGcm2C8woO8BchQw0wTs0zKAAAAABJRU5ErkJggg=="
                                    alt="">
                                <h3 data-v-93487c46="">即時開獎驗證</h3>
                            </div>
                            <div data-v-93487c46="" class="content-txt">
                                <p data-v-93487c46="" class="txt">開獎現場直播，同步播報中央電視臺1套視頻，開獎過程100%公開公正！</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <footerLink :active="'index'"></footerLink>
        </div>
        <div data-v-e6da23f8="" class="orien" style="display: none;"><img data-v-e6da23f8="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAADaCAMAAABU68ovAAAAUVBMVEUAAAD09PT5+fn////////x8fH5+fny8vL////5+fn39/f6+vr////x8fH////////+/v7////09PTx8fH39/f////////////////x8fH///8Np52hAAAAGXRSTlMADSCTBvhm1p9XNoLxwb6tbiiX6k/XzuVDP/ip3gAAA/tJREFUeNrt3VuTmyAUwPEDIvESr/ES+f4ftIW24bhNUw2S47Tn/7AP+7DzG0GTgR0Bn8j76pYuHym9VX0u4Pdk/xkBtvQS1qkyXQhKS4UV8rIQdZFeUdwWsm7F41oQKJBDgktcFtIuwjHKhbjSDUnQPVLpTiipq6D7xQ5LH3I9i8csDxnZHkCkAZdCwCNRBVwOAXnw3ILwmZ6HjEkBq4qQUaneHxJYF/SnbgFXcl3A+N7g/RkqvzK69+coLG+nvjLE8nZHMhQJQ35lSBKG/srQIYwz3LDfGWd4fH1nnOFhbhn0H22OQf9B7xhBVVoq/7UngHGKmMEMZuxjpFrARxM6fcJo4ePpJwwBH088YQBBzGAGM5jBDGYw43vMwDEDxwwcM3DMwDEDxwwcM3DMwDEDxwwcM3DMwDEDxwwcM15UtEk9Xo0x17nO2kIRMFTeWADu2qB/y5XtBxgyQQYsSSS4xDRGZ8jM/LnMQRpjirgMVZrXlQoSY0wSldGN5tGUtPdOCtnddTL5X4+9/TnHZGjzq1oLwAldm1X3eIzkMQW6pzMXM7JYDPVrbjYSnicbdNuISIyfinmAP5d7Rx6B4UeklvAidDmaKAxtXJl6TUWJCIzOuBJ4VWtw+niGGjdM/8Gsqo9nlMZWq9dXLE/qGTnk0QxpbLOEvyeHshmNqz2Oge/VAbYmijabzHQwQ/o7cE/dwYzEMSTxl0B19XcJISM3to6a0biblfybuRsTTc0ojE1QM1qrmACIGYn/TKNk1P7BTMkY/TdcSsbVPzUoGf5JTspIbAL2pkob+fqGNDZyRmcVV3LG3TJGckZrGTU548fDl5wxWUZLzRDGVlAztLtRyNdFa8toqBmdseXUjMyNiSJmSGNL4FhGt5fROIY8mDGZKWsLsVkx+GWIIxmtcY1NOcgtQzLHWljwzXWSvx4kVRtbefwyS21WDRuWIUZ1PEMbXLtlybCD4xkCK5Iti7gaAhjBC56y9tQARuDy7zD7FfMYDHE1rm1r5pmKxIDMoJJnkC5DkycW425cW/ZTdMydRzfq/Wp3Sf/cXWpXu0sdxGS4HbRNe21RGYUxzaadx7gMGCexYR82OqOVfkI+3ZVWBHv0qmizer5awFgnbfGf/8cCM5jxiBk4ZuCYgWMGjhk4ZuCYgWMGjhk4ZuCYgWMGjhk4ZuCYgWMGjhk4ZuCYEbXzvifwJG9NPMk7JPf2b7/Yc0/MwDEDxwwcM351GQS8TAyX+IzLHxBh75vffTjFABsaln2lu4/qEFsYYvdRHdUZGBX0ZxiUHvIzTNEcREp/w6YCoF/I6/3xT4Sl8jyHYZ3laLCTHJR2lmPjznKI3lmOFDzLAYvUx01+A/VOPKInRdhvAAAAAElFTkSuQmCC"
                alt="landscape">
            <div data-v-e6da23f8="" class="p">
                <p data-v-e6da23f8="">为了更好的体验 请您使用竖屏浏览</p>
            </div>
        </div>
        
    </div>
</template>
<script>
import footerLink from'@/components/footer.vue';
import {getTomorrow} from'@/utils/public.js';
import { Swipe, SwipeItem  } from 'vant';
import showNumber from '@/components/shownumber.vue'
import lotteryTime from '@/components/lotteryTime.vue'
export default {
    name:'indexPage',
    components:{
        footerLink,
        Swipe,
        SwipeItem,
        showNumber,
        lotteryTime
    },
    data(){
        return{
            nextOpen:'',
            showOpen:false,
            lastFive:[],
            showfive:true,
            nowOpen:{
            }
        }
    },
    methods: {
        dataInput(){
            let data={ "tag": "input_number","data": { "1":"CG11",
                "2":"DR34",
                "3":"IR29",
                "4":"BG16",
                "5":"HR29",
                "6":"IB25",
                "7":"BR20",}}
            this.$http.post(baseApi()+'/api',data).then(function (res) {
                // console.log(res)
            })
        },
        dataInit(){
            let _that=this;
            let data={ "tag": "output_number","data": { }}
            this.$http.post(baseApi()+'/api',data).then(function (res) {
                if(res.data.code=='01'){
                    if(res.data.msg){
                        _that.nowOpen=res.data.msg;
                    }
                }
            })
        },
        datalastHistoryNum(){
            let data={ "tag": "get_all_index","data": { }}
            let _that=this;
            this.$http.post(baseApi()+'/api',data).then(function (res) {
                if(res.data.code=='01'){
                    if(res.data.msg.total>0){
                        if(res.data.msg.total>5){
                            _that.datalastHistory(4)
                        }else{
                            _that.datalastHistory(res.data.msg.total)
                        }
                    }
                }
            })
        },
        datalastHistory(end){
            let _that=this;
            let data={ "tag": "get_some_index","data": {"start":0,"finish":end}}
            this.$http.post(baseApi()+'/api',data).then(function (res) {
                if(res.data.code=='01'){
                    _that.lastFive=Object.values(res.data.msg);
                }
            })
        },
        showOpenHandle(e){
            e.stopPropagation();
            this.showOpen=true;
        },
        novisiable(e){
            
            this.showOpen=false;
        },
        showfiveHandle(){
            this.showfive=!this.showfive;
        }
    },
    computed: {
       getnextOpen(){
            return getTomorrow();
        }
    },
    mounted() {
         
         this.dataInit();
         this.datalastHistoryNum();
         
        // console.log(getTomorrow())
    },
}
</script>
<style lang="">
    .option-btn a{
        color: #fff;
    }
    .history-btn a{
        color: #000
    }    
    .my-swipe .van-swipe-item img{
        width: 100%;
    }
</style>
