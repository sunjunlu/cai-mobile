<template>
    <div>
        <div  class="buttonGroup" id="textarea">
            <button v-for="item in buttonGrop" :key="item.id" @click="buttonHandle(item)" :class="{'buttonActive':current==item.id}">
            {{item.name}}
        </button>
        </div>
        <div class="quill-editor">
            <div class="ql-container ql-snow">
                <div class="fileGroup">
                    <div class="descBox ql-editor" :id="'#textarea'+index" v-for="(item,index) in textareaVal" :key="index"  v-html='item'></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getTomorrow } from "@/utils/public.js";
export default {
    name:'datafile',
    data() {
        return {
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
            current:'0',
            textareaVal:[
                // '<p>111<strong>去呜呜呜呜呜</strong></p><p><u>1222222222</u></p><p><s>12222222222</s></p><h1>111111223</h1><h2>12222222222</h2><ol><li>11111111111111</li></ol><ul><li>2333333333333</li></ul><p><sub>233333333333333333</sub></p><p><sup>22222222222222222</sup></p><p>2222222222222222222222</p><p class="ql-indent-3">2222222222</p><p class="ql-indent-3 ql-align-right ql-direction-rtl"><br></p><p class="ql-indent-3 ql-align-right ql-direction-rtl"><br></p><p class="ql-indent-3 ql-align-right ql-direction-rtl"><br></p><p class="ql-indent-3 ql-align-right ql-direction-rtl">333333333333333333</p><p class="ql-indent-3"><span class="ql-size-small">12222223</span></p><p class="ql-indent-3">我问问</p><p class="ql-indent-3"><br></p><p class="ql-indent-3"><span class="ql-size-large">俄问问</span></p><p class="ql-indent-3"><span class="ql-size-huge">嗡嗡嗡</span></p><p class="ql-indent-3"><span class="ql-size-huge" style="color: rgb(230, 0, 0);">嗡嗡嗡</span></p><p class="ql-indent-3"><span style="background-color: rgb(255, 153, 0);">嗡嗡嗡嗡</span></p><p class="ql-indent-3">但嗡嗡嗡嗡</p><p class="ql-indent-3 ql-align-center">俄嗡嗡嗡嗡嗡</p><p class="ql-indent-3 ql-align-center"><br></p><p class="ql-align-right ql-indent-3">俄嗡嗡嗡嗡嗡俄问问</p><p class="ql-align-justify">生生世世生生世世</p><p>俄问问俄问问</p><p><img src="http://122.114.91.149:88/gamble/imgs/2020-8-6/1596729128.png"></p><p><br></p>',
                // '<p>222<strong>去呜呜呜呜呜</strong></p><p><u>1222222222</u></p><p><s>12222222222</s></p><h1>111111223</h1><h2>12222222222</h2><ol><li>11111111111111</li></ol><ul><li>2333333333333</li></ul><p><sub>233333333333333333</sub></p><p><sup>22222222222222222</sup></p><p>2222222222222222222222</p><p class="ql-indent-3">2222222222</p><p class="ql-indent-3 ql-align-right ql-direction-rtl"><br></p><p class="ql-indent-3 ql-align-right ql-direction-rtl"><br></p><p class="ql-indent-3 ql-align-right ql-direction-rtl"><br></p><p class="ql-indent-3 ql-align-right ql-direction-rtl">333333333333333333</p><p class="ql-indent-3"><span class="ql-size-small">12222223</span></p><p class="ql-indent-3">我问问</p><p class="ql-indent-3"><br></p><p class="ql-indent-3"><span class="ql-size-large">俄问问</span></p><p class="ql-indent-3"><span class="ql-size-huge">嗡嗡嗡</span></p><p class="ql-indent-3"><span class="ql-size-huge" style="color: rgb(230, 0, 0);">嗡嗡嗡</span></p><p class="ql-indent-3"><span style="background-color: rgb(255, 153, 0);">嗡嗡嗡嗡</span></p><p class="ql-indent-3">但嗡嗡嗡嗡</p><p class="ql-indent-3 ql-align-center">俄嗡嗡嗡嗡嗡</p><p class="ql-indent-3 ql-align-center"><br></p><p class="ql-align-right ql-indent-3">俄嗡嗡嗡嗡嗡俄问问</p><p class="ql-align-justify">生生世世生生世世</p><p>俄问问俄问问</p><p><img src="http://122.114.91.149:88/gamble/imgs/2020-8-6/1596729128.png"></p><p><br></p>'
                ]
        }
    },
    methods: {
        buttonHandle(item){
            this.current=item.id;
            let height =document.getElementById("#textarea"+item.id).offsetTop;
            $("html,body").animate({scrollTop:height},1000)
       },
        gettextArea(){
            let data={ "tag": "get_article","data":{mark_start:'0',mark_finish:'9'}}
            this.$http.post(baseApi() + "/api",data).then(res=> {
                if(res.data.code=='01'){
                    this.textareaVal=res.data.msg;
                    this.createHtml()
                }
            })
        },
        createHtml(){

        }
    },
    mounted() {
        this.gettextArea()
    },
}
</script>
<style >
.fileGroup{
    margin-top: 1.3rem;
}
    .descBox img{
        width: 100%;
    }
</style>