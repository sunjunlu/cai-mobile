<template>
  <div data-v-7bf92f17="" flex="cross:center" flex-box="0" class="lottery-time lotteryTimeGroup">
    <div data-v-7bf92f17="" class="hour">
      <span data-v-7bf92f17="" class="number">{{hour1||'0'}}</span>
      <span data-v-7bf92f17="" class="number">{{hour2||'0'}}</span>
    </div>
    <div data-v-7bf92f17="" class="division">
      <span data-v-7bf92f17="" class="colon">:</span>
    </div>
    <div data-v-7bf92f17="" class="minute">
      <span data-v-7bf92f17="" class="number">{{minute1||'0'}}</span><span data-v-7bf92f17="" class="number">{{minute2||'0'}}</span>
    </div>
    <div data-v-7bf92f17="" class="division">
      <span data-v-7bf92f17="" class="colon">:</span>
    </div>
    <div data-v-7bf92f17="" class="second">
      <span data-v-7bf92f17="" class="number">{{second1||'0'}}</span>
      <span data-v-7bf92f17="" class="number">{{second2||'0'}}</span>
    </div>
  </div>
</template>
<script>
import {getTomorrow} from'@/utils/public.js';

export default {
    props:[],
    data() {
        return {
            hour:'',
            minute:'',
            second:''
        }
    },
    computed: {
        hour1(){
            return this.hour.slice(0,1);
        },
        hour2(){
            return this.hour.slice(1,2);
        },
        minute1(){
            return this.minute.slice(0,1);
        },
        minute2(){
            return this.minute.slice(1,2);
        },
        second1(){
            return this.second.slice(0,1);
        },
        second2(){
            return this.second.slice(1,2);
        },
    },
    mounted() {
        this.timeLoop();
        let that=this;
        setInterval(that.timeLoop,1000)
    },
    methods: {
        timeLoop(){
            let time = getTomorrow().replace(/-/g,"/")
            let nextOpen=new Date(time);
            let nowDate=new Date();
            let lastSecondTime=(nextOpen-nowDate)/1000;
            let lastHour=Math.floor(lastSecondTime/3600);
            let lastMinute=Math.floor((lastSecondTime-lastHour*3600)/60);
            let lastSecond=Math.floor(lastSecondTime-lastHour*3600-lastMinute*60);
            this.hour=lastHour>=10?lastHour+'':('0'+lastHour);
            this.minute=lastMinute>=10?lastMinute+'':('0'+lastMinute);
            this.second=lastSecond>=10?lastSecond+'':('0'+lastSecond);
            // console.log(this.hour,this.minute,this.second);
        }
    },
};


</script>
<style lang="">
</style>