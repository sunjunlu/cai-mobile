<template>
  <div :class="{fixtab:currentBar=='right'}" >
    <div data-v-f35c3ba2="" class="home">
      <div class="refresh-element" id="refresh-element">
        <div class="refresh-box">
          <div class="refresh-content">
            <div class="refresh-icon"></div>
            <div class="refresh-text"></div>
          </div>
        </div>
      </div>
      <div class="backcoFFF">
          <div data-v-3f834e15="" data-v-f35c3ba2="" class="head">
            <div data-v-3f834e15="" flex="cross:center" class="head-nav">
            <div data-v-3f834e15="" class="head-logo"><img data-v-3f834e15="" src="../assets/img/logo.png" alt=""></div>
            </div>
        </div>
        <div class="draw-notice">
            <div data-v-f35c3ba2="" class="bar"></div>
            <div data-v-f35c3ba2="" flex="box:mean"  class="tab">
            <div data-v-f35c3ba2="" :class="{'tab-active':currentBar=='left'}" @click="currentBarHandle('left')" class="tab-item ">
                新加坡天天乐彩
            </div>
            <div data-v-f35c3ba2=""   class="tab-item">
                接口調用
            </div>
            <div id="tab-gsb" data-v-f35c3ba2="" @click="currentBarHandle('right')" :class="{'tab-active':currentBar=='right'}"  class="tab-item">资料区<sup
                style="color:red;margin-top:-10px;position: absolute;font-size:xx-small;">hot</sup></div>
            </div>
        </div>
      </div>
      
      <div data-v-f35c3ba2="" class="draw-notice">
       
        <div class="leftBar" v-if="currentBar=='left'">
          <div data-v-f35c3ba2="" class="bar"></div>
          <div data-v-f35c3ba2="">
            <div data-v-f35c3ba2="" class="open-notice">
              <div data-v-f35c3ba2="" flex="" class="open-label"><span data-v-f35c3ba2="" class="text">重要通知</span></div>
              <div data-v-f35c3ba2="" class="notice-content"><span
                  data-v-f35c3ba2="">新加坡天天乐彩於14/5/2020起，攪珠時間變更為每天晚間舉行，並於網絡現場直播。</span></div>
            </div>
            <div data-v-f35c3ba2="" class="search-bar">
              <div data-v-f35c3ba2="" flex="main:justify cross:center">
                <div data-v-f35c3ba2="" class="search-bar-title">
                  <p data-v-f35c3ba2="" class="lottery-name">新加坡天天乐彩</p>
                  <p data-v-f35c3ba2="" class="title">開獎公告</p>
                </div>
                <div data-v-f35c3ba2="" flex-box="0" class="search-input-group"><input data-v-f35c3ba2="" type="number"
                    placeholder="開獎查詢"><i data-v-f35c3ba2="" class="icon iconfont">&#xe6f9;</i></div>
              </div>
            </div>
            <div data-v-f35c3ba2="" class="current-info">
              <!---->
              <div data-v-f35c3ba2="" class="lottery-info">
                <div data-v-f35c3ba2="" flex="" class="title">
                  <p data-v-f35c3ba2=""><span data-v-f35c3ba2="">第</span><span data-v-f35c3ba2=""
                      class="issue"></span><span data-v-f35c3ba2="">期開獎號碼</span></p>
                </div>
                <div data-v-f35c3ba2="" flex="cross:center" class="open-num lhc">
                  <showNumber class="noBoder" :insert="nowOpen"></showNumber>
                </div>

              </div>
              <div data-v-f35c3ba2="" class="lottery-time">
                <h3 data-v-f35c3ba2="">
                  下期截止時間<span data-v-f35c3ba2="" class="time">{{getnextOpen}}</span></h3>
                <lotteryTime></lotteryTime>
              </div>
            </div>
            <ul data-v-f35c3ba2="" flex="cross:center main:justify" class="search-field">
              <li data-v-f35c3ba2="" class="day active">
                今年
              </li>
            </ul>
            <div data-v-f35c3ba2="" class="history-list-wrap">
              <div data-v-f35c3ba2="" flex="cross:center main:justify" v-for="(item,index) in allData" :key="index"
                class="history-list-item">
                <div data-v-f35c3ba2="" flex="dir:top" class="left">
                  <div data-v-f35c3ba2="" flex="" class="top">
                    <p data-v-f35c3ba2="" class="active">期号</p>
                    <p data-v-f35c3ba2="" class="normal">第<span data-v-f35c3ba2="">{{item.ticket}}</span>期</p>
                  </div>
                  <div data-v-f35c3ba2="" flex="" class="center">
                    <p data-v-f35c3ba2="" class="active">開獎時間</p>
                    <p data-v-f35c3ba2="" class="normal">{{item.date}}</p>
                  </div>
                  <div data-v-f35c3ba2="" flex="" class="bottom">
                    <p data-v-f35c3ba2="" class="active">中獎號碼</p>
                    <showNumber class="noBoder indexList" :insert="item.number"></showNumber>
                  </div>
                </div>
                <!-- <div data-v-f35c3ba2="" class="right"><img data-v-f35c3ba2=""
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAdCAYAAAApQnX+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjhEMjkzNzg5NTkzMDExRUFBNTlCOEVDMzE0QTIyRTc4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjhEMjkzNzhBNTkzMDExRUFBNTlCOEVDMzE0QTIyRTc4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEQyOTM3ODc1OTMwMTFFQUE1OUI4RUMzMTRBMjJFNzgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEQyOTM3ODg1OTMwMTFFQUE1OUI4RUMzMTRBMjJFNzgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz69hXKAAAABFElEQVR42mK8wSDIMMiAORAvBOITLIPMYR5AvB6IOYBYFeQ4RyCuBmIBGlv8B4h3AnEjEP/DIm8PxGuhDgMBJkZgtD4HMiToGDpeQLwdS1SCHM6PLMhEZ4eBAHoiVwHizegOgzluIIEANBRFsUkOpOMYgXgZNOQYBpvjyoDYE5+CgXKcMjTXMgxGxwUCMftgdRxRhf9A59ZRx406btRxo44bro77N5gdtxGIfw1Wx90E4trBnOa6oSE4KB33H4jjgfjyYM2tH4HYB4hf43LcSzo76BMa/xEQu0EditGuigLieiCWobGjvgLxNizdQhC4AMT+UHkueCdjkA1HgDr4m4CYB4h/DrYaYj8QOwDxHSCeDRBgAJcHKVMZVLZVAAAAAElFTkSuQmCC"
                  alt=""></div> -->
              </div>
              <div data-v-f35c3ba2="" @click="loadNext()" v-if="page*5<total" class="load-more">
                點擊加載更多&gt;&gt;
              </div>
            </div>
          </div>
        </div>
        <div class="rightBar" v-if="currentBar=='right'">
            <dataFile></dataFile>
        </div>
      </div>
    </div>
    <footerLink :active="'drawNotice'"></footerLink>
    <div data-v-e6da23f8="" class="orien" style="display: none;"><img data-v-e6da23f8=""
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAADaCAMAAABU68ovAAAAUVBMVEUAAAD09PT5+fn////////x8fH5+fny8vL////5+fn39/f6+vr////x8fH////////+/v7////09PTx8fH39/f////////////////x8fH///8Np52hAAAAGXRSTlMADSCTBvhm1p9XNoLxwb6tbiiX6k/XzuVDP/ip3gAAA/tJREFUeNrt3VuTmyAUwPEDIvESr/ES+f4ftIW24bhNUw2S47Tn/7AP+7DzG0GTgR0Bn8j76pYuHym9VX0u4Pdk/xkBtvQS1qkyXQhKS4UV8rIQdZFeUdwWsm7F41oQKJBDgktcFtIuwjHKhbjSDUnQPVLpTiipq6D7xQ5LH3I9i8csDxnZHkCkAZdCwCNRBVwOAXnw3ILwmZ6HjEkBq4qQUaneHxJYF/SnbgFXcl3A+N7g/RkqvzK69+coLG+nvjLE8nZHMhQJQ35lSBKG/srQIYwz3LDfGWd4fH1nnOFhbhn0H22OQf9B7xhBVVoq/7UngHGKmMEMZuxjpFrARxM6fcJo4ePpJwwBH088YQBBzGAGM5jBDGYw43vMwDEDxwwcM3DMwDEDxwwcM3DMwDEDxwwcM3DMwDEDxwwcM15UtEk9Xo0x17nO2kIRMFTeWADu2qB/y5XtBxgyQQYsSSS4xDRGZ8jM/LnMQRpjirgMVZrXlQoSY0wSldGN5tGUtPdOCtnddTL5X4+9/TnHZGjzq1oLwAldm1X3eIzkMQW6pzMXM7JYDPVrbjYSnicbdNuISIyfinmAP5d7Rx6B4UeklvAidDmaKAxtXJl6TUWJCIzOuBJ4VWtw+niGGjdM/8Gsqo9nlMZWq9dXLE/qGTnk0QxpbLOEvyeHshmNqz2Oge/VAbYmijabzHQwQ/o7cE/dwYzEMSTxl0B19XcJISM3to6a0biblfybuRsTTc0ojE1QM1qrmACIGYn/TKNk1P7BTMkY/TdcSsbVPzUoGf5JTspIbAL2pkob+fqGNDZyRmcVV3LG3TJGckZrGTU548fDl5wxWUZLzRDGVlAztLtRyNdFa8toqBmdseXUjMyNiSJmSGNL4FhGt5fROIY8mDGZKWsLsVkx+GWIIxmtcY1NOcgtQzLHWljwzXWSvx4kVRtbefwyS21WDRuWIUZ1PEMbXLtlybCD4xkCK5Iti7gaAhjBC56y9tQARuDy7zD7FfMYDHE1rm1r5pmKxIDMoJJnkC5DkycW425cW/ZTdMydRzfq/Wp3Sf/cXWpXu0sdxGS4HbRNe21RGYUxzaadx7gMGCexYR82OqOVfkI+3ZVWBHv0qmizer5awFgnbfGf/8cCM5jxiBk4ZuCYgWMGjhk4ZuCYgWMGjhk4ZuCYgWMGjhk4ZuCYgWMGjhk4ZuCYEbXzvifwJG9NPMk7JPf2b7/Yc0/MwDEDxwwcM351GQS8TAyX+IzLHxBh75vffTjFABsaln2lu4/qEFsYYvdRHdUZGBX0ZxiUHvIzTNEcREp/w6YCoF/I6/3xT4Sl8jyHYZ3laLCTHJR2lmPjznKI3lmOFDzLAYvUx01+A/VOPKInRdhvAAAAAElFTkSuQmCC"
        alt="landscape">
      <div data-v-e6da23f8="" class="p">
        <p data-v-e6da23f8="">为了更好的体验 请您使用竖屏浏览</p>
      </div>
    </div>
  </div>
</template>
<script>
import footerLink from "@/components/footer.vue";
import showNumber from "@/components/shownumber.vue";
import lotteryTime from "@/components/lotteryTime.vue";
import dataFile from "@/components/datafile.vue";
import { getTomorrow } from "@/utils/public.js";
export default {
  name: "drawNotice",
  components: {
    footerLink,
    showNumber,
    lotteryTime,
    dataFile
  },
  data() {
    return {
      nextOpen: "",
      showOpen: false,
      allData: [],
      showfive: true,
      page: 1,
      total: 0,
      nowOpen: {},
      currentBar:'left',
      buttonGrop:[
        {name:'精典五肖',id:'0'},
        {name:'新加坡传真',id:'1'},
        {name:'民间高手',id:'2'},
        {name:'精英好料',id:'3'},
        {name:'公式规律',id:'4'},
        {name:'传真20码',id:'5'},
        {name:'一肖一码',id:'6'},
        {name:'解玄机诗',id:'7'},
        {name:'解藏宝图',id:'8'},
        {name:'新彩图库',id:'9'},
    ],
    };
  },
  methods: {
    dataInit() {
      let _that = this;
      let data = { tag: "output_number", data: {} };
      this.$http.post(baseApi() + "/api", data).then(function(res) {
        if (res.data.code == "01") {
          if (res.data.msg) {
            _that.nowOpen = res.data.msg;
          }
        }
      });
    },
    datalastHistoryNum() {
      let data = { tag: "get_all_index", data: {} };
      let _that = this;
      this.$http.post(baseApi() + "/api", data).then(function(res) {
        if (res.data.code == "01") {
          if (res.data.msg.total > 0) {
            _that.total = res.data.msg.total;
            if (res.data.msg.total > 5) {
              _that.datalastHistory(4);
            } else {
              _that.datalastHistory(res.data.msg.total);
            }
          }
        }
      });
    },
    datalastHistory(end) {
      let _that = this;
      let data = { tag: "get_some_index", data: { start: 0, finish: end } };
      this.$http.post(baseApi() + "/api", data).then(function(res) {
        if (res.data.code == "01") {
          _that.allData = Object.values(res.data.msg);
          // console.log(_that.allData)
        }
      });
    },
    loadNext() {
      if (this.total > (this.page + 1) * 5) {
        this.datalastHistory((this.page + 1) * 5 - 1);
        this.page++;
      } else {
        if (this.total < (this.page + 1) * 5 && this.page * 5 < this.total) {
          this.datalastHistory(this.total - 1);
          this.page++;
        }
      }
    },
    currentBarHandle(val){
        this.currentBar=val
    }
  },
  computed: {
    getnextOpen() {
      return getTomorrow();
    }
  },
  mounted() {
    this.dataInit();
    this.datalastHistoryNum();
  }
};
</script>
<style >
    
</style>