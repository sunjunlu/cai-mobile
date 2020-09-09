<template>
  <div>
    <div data-v-0975c882="" class="home">
      <div class="refresh-element" id="refresh-element">
        <div class="refresh-box">
          <div class="refresh-content">
            <div class="refresh-icon"></div>
            <div class="refresh-text"></div>
          </div>
        </div>
      </div>
      <div data-v-3f834e15="" data-v-0975c882="" class="head">
        <div data-v-3f834e15="" flex="cross:center" class="head-nav">
          <div data-v-3f834e15="" class="head-logo"><img data-v-3f834e15="" src="../assets/img/logo.png" alt=""></div>
        </div>
      </div>
      <div data-v-0975c882="" class="faq">
        <div data-v-0975c882="" class="bar"></div>
        <div data-v-6c7f34c1="" data-v-0975c882="" flex="" class="tab">
          <div data-v-6c7f34c1="" flex="box:mean" class="tab">
            <div data-v-6c7f34c1="" @click="changeIndex(0)" :class="{'tab-active':currentIndex==0}" class="tab-item ">
              FAQ
            </div>
            <div data-v-6c7f34c1="" @click="changeIndex(1)" :class="{'tab-active':currentIndex==1}" class="tab-item">
              技術支持
            </div>
          </div>
        </div>
        <div data-v-0975c882="" class="bar"></div>
        <div v-if="currentIndex==0" class="faqContainer">
          <div data-v-0975c882="" class="faq-info">
            <h3 data-v-0975c882="">FAQ</h3>
          </div>
          <div data-v-0975c882="" class="accordion" v-for="(item,index) in question" :key="index">
            <div data-v-0975c882="" flex="main:justify cross:center" class="accordion-title" @click="showAnswer(index)">
              <p data-v-0975c882="">{{item.key}}</p>
              <i data-v-0975c882="" v-if="item.show"  class="icon iconfont">&#xe6ff;</i>
              <i data-v-0975c882="" v-if="!item.show"  class="icon iconfont">&#xe711;</i>
            </div>
            <div data-v-0975c882="" v-if="item.show" class="accordion-content"><p data-v-0975c882="">{{item.value}}</p></div>
          </div>
        </div>
        <div class="faqContainer" v-if="currentIndex==1">
            <div data-v-0975c882="" class="technical-support"><h3 data-v-0975c882="">技術支持</h3><p data-v-0975c882="">最低硬體系統要求：</p><ul data-v-0975c882=""><li data-v-0975c882="">
                        1、可以接上互聯網的電腦；
                    </li><li data-v-0975c882="">
                        2、區域寬頻；
                    </li><li data-v-0975c882="">
                        3、Windows , Mac OS X , Linux , Android操作系統其中之一；
                    </li><li data-v-0975c882="">
                        4、Internet Explorer流覽器v10.0 或以上，Mozilla Firefox (流覽器v3.0 或以上)，Opera (流覽器v8.0 或以上)，Chrome(流覽器v6.0 或以上)，Safari (流覽器v4.0 或以上)。
                    </li></ul></div>
        </div>

        <div data-v-0975c882="" class="gap"></div>
      </div>

    </div>
    <footerLink :active="'FAQ'"></footerLink>
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
export default {
  components: {
    footerLink
  },
  data() {
      return {
          currentIndex:0,
          question:[
              {
              key:'1、新加坡天天乐彩在什麼時間段可以購買？',
              value:'答：新加坡天天乐彩票為區域性彩種，請根據具體投注站點的營運時間購買。',
              show:false
           }, {
              key:'2、需要多少錢才可以購買？',
              value:'答：新加坡天天乐彩注項單位為每注10澳門幣。',
              show:false
           }, {
              key:'3、單張彩票可以購買多少金額？',
              value:'答：購買者可對其選定的投注號碼進行單倍或多倍投注，投注倍數範圍為1-100倍。單張彩票的投注金額最高不得超過1000澳門幣。',
              show:false
           }, {
              key:'4、我應如何確認是否中獎？',
              value:'答：您可在新加坡天天乐彩的銷售站點查詢確認、或在新加坡天天乐彩官網的“開獎公告”處查詢核對中獎號碼。',
              show:false
           }, {
              key:'5、如何能進一步確認開獎結果的正確性？',
              value:'答：您可在新加坡天天乐彩官網查看即時開獎公告與開獎視頻，或查看歷史開獎期號的視頻回放。',
              show:false
           }, {
              key:'6、購買彩券後可以退款不買嗎？',
              value:'答：抱歉，根據《奖券规例》規定獎券彩票一經發出給參加者或經參加者確認，參加者不得以任何理由更換、取消或撤回。',
              show:false
           }, {
              key:'7、中獎之後領獎的步驟是什麼樣的？',
              value:'答：所有獲中彩票，必須於有關攪珠的日期後起計60天內領取 (例子：於3月1日所舉行的攪珠的獲中彩票，可於3月1日當天至4月30日內任何一天領取)。逾期未兌獎視為棄獎，棄獎獎金納入彩票公益金。',
              show:false
           }, {
              key:'8、如果我的彩券受到污染或損壞是否可以兌獎？',
              value:'答：根據《奖券规例》規定任何獎券彩票（包括損毀彩票）不會獲得派發獎金或發還退款，除非該彩票可憑其獨有的序列號碼辨證。',
              show:false
           }
          ]
      }
  },
  methods: {
      changeIndex(val){
          this.currentIndex=val;
      },
      showAnswer(index){
          this.question[index].show=!this.question[index].show; 
      }
  },

};
</script>

<style>
</style>