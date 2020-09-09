<template>
  <div>
    <div data-v-55c55916="" class="home">
      <div class="refresh-element" id="refresh-element">
        <div class="refresh-box">
          <div class="refresh-content">
            <div class="refresh-icon"></div>
            <div class="refresh-text"></div>
          </div>
        </div>
      </div>
      <!-- <div data-v-3f834e15="" data-v-55c55916="" class="head">
                <div data-v-3f834e15="" flex="cross:center" class="head-nav">
                    <div data-v-3f834e15="" class="head-logo"><img data-v-3f834e15="" src="../assets/img/logo.png" alt=""></div>
                </div>
            </div> -->
      <div class="backcoFFF">
        <div data-v-3f834e15="" data-v-f35c3ba2="" class="head">
          <div data-v-3f834e15="" flex="cross:center" class="head-nav">
            <div data-v-3f834e15="" class="head-logo"><img data-v-3f834e15="" src="../assets/img/logo.png" alt=""></div>
          </div>
        </div>
        <div class="draw-notice">
          <div data-v-f35c3ba2="" class="bar"></div>
          <div data-v-f35c3ba2="" flex="box:mean" class="tab">
            <div data-v-f35c3ba2="" :class="{'tab-active':currentBar=='left'}" @click="currentBarHandle('left')"
              class="tab-item ">
              新加坡天天乐彩
            </div>
            <div data-v-f35c3ba2="" class="tab-item">
              接口調用
            </div>
            <div id="tab-gsb" style="background-color: #0068b7;" data-v-f35c3ba2="" @click="currentBarHandle('right')"
              :class="{'tab-active':currentBar=='right'}" class="tab-item">资料区<sup
                style="color:red;margin-top:-10px;position: absolute;font-size:xx-small;">hot</sup></div>
          </div>
        </div>
      </div>
      <div data-v-55c55916="" class="lottery-videos">
        <div class="leftBar" v-if="currentBar=='left'">
          <div data-v-55c55916="" class="bar"></div>
          <div data-v-55c55916="" class="video-container">
            <div data-v-55c55916="" class="open-notice">
              <div data-v-55c55916="" flex="" class="open-label"><span data-v-55c55916="" class="text">即時開獎驗證</span>
              </div>
              <div data-v-55c55916="" class="notice-content"><span
                  data-v-55c55916="">開獎現場直播，同步播報中央電視臺1套視頻，開獎過程100%公開公正！</span></div>
            </div>
            <div data-v-55c55916="" id="openLive" class="open-live">
              <div data-v-55c55916="" class="badge" style="display: none;">
                直播
              </div>
              <div data-v-55c55916="" flex="main:center cross:center dir:top" class="is-rest">
                <p data-v-55c55916="">該欄目暫未開放，敬請期待</p>
                <!-- <p data-v-55c55916=""><span data-v-55c55916="" class="red">20:35-21:00</span>(北京時間)，敬請查看。</p> -->
              </div>
            </div>
            <div data-v-55c55916="" class="search-bar">
              <div data-v-55c55916="" flex="main:justify cross:center">
                <div data-v-55c55916="" class="title">開獎視頻</div>
                <div data-v-55c55916="" class="search-input-group"><input data-v-55c55916="" type="number"
                    placeholder="開獎查詢"><i data-v-55c55916="" class="icon iconfont">&#xe6f9;</i></div>
              </div>
              <ul data-v-55c55916="" flex="cross:center main:justify" class="search-field">
                <li data-v-55c55916="" class="day active">
                  今年
                </li>
              </ul>
            </div>
            <div data-v-55c55916="" class="video-list">
              <!-- <div data-v-55c55916="" class="video-notice">開獎視頻回放，僅保留當年部分供用戶查看</div> -->
              <div data-v-55c55916="" class="container">
                <!-- <div data-v-55c55916="" class="video-detail">
                            <div data-v-55c55916="" flex="cross:center" class="video-bg">
                                <div data-v-55c55916="" class="video-play-btn"><img data-v-55c55916="" src="data:image/png;base64,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"
                                        alt=""></div>
                            </div>
                            <div data-v-55c55916="" class="video-desc">
                                <p data-v-55c55916="">新加坡天天乐彩</p>
                                <p data-v-55c55916="">第2020203期開獎視頻</p>
                            </div>
                        </div> -->

                <div data-v-55c55916="" class="load-more">
                  該欄目暫未開放，敬請期待
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="rightBar" v-if="currentBar=='right'">
            <dataFile></dataFile>
        </div>

      </div>
      <footerLink :active="'lotteryVideo'"></footerLink>
    </div>
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
import dataFile from "@/components/datafile.vue";
export default {
  components: {
    footerLink,
    dataFile
  },
  name: "video",
  data() {
      return {
          currentBar:'left'
      }
  },
  methods: {
       currentBarHandle(val){
        this.currentBar=val
    }
  },
};
</script>