<template>
    <div>
        <div data-v-7bf92f17="" class="current-info">
            <div data-v-7bf92f17="" class="current-info-inner">
                <div data-v-7bf92f17="" flex="cross:center" class="open-num lhc">
                    <ul data-v-7bf92f17="" flex="" class="open-num-list">
                        <li data-v-7bf92f17="" v-for="(item,index) in valueAry" :class="{'symbol':item==null}" :key="index" flex="dir:top" class="open-ball">
                            <span data-v-7bf92f17="" v-if="item!=null" flex="main:center cross:center" :class="{'redBg':item.color=='R','greenBg':item.color=='G','blueBg':item.color=='B'}" class="number ">{{item.number}}</span>
                            <b data-v-7bf92f17="" v-if="item!=null" class="sheng-xiao">{{item.name}}</b>
                            <span class="nullAdd" v-if="item==null">+</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'showNumber',
    props:['insert'],
    data() {
        return {
            value:{},
            valueAry:[],
            values1:[],
            twelve:{
                "A":'鼠',
                "B":"牛",
                "C":"虎",
                "D":"兔",
                "E":"龙",
                "F":"蛇",
                "G":"马",
                "H":"羊",
                "I":"猴",
                "J":"鸡",
                "K":"狗",
                "L":"猪",
            }
        }
    },
    methods: {
        changeValue(){
            let values
            let keys=Object.keys(this.value);
            if(this.values1.length>0){
                values=this.values1;
            }else{
                values=Object.values(this.value);
            }
            values.forEach((item,index)=>{
                if(index==6){
                    this.valueAry.push(null);
                }
                let itemVal={};
                this.$set(itemVal,'name',this.twelve[item.slice(0,1)]);
                this.$set(itemVal,'color',item.slice(1,2));
                this.$set(itemVal,'number',item.slice(2,4));
                this.valueAry.push(itemVal);
                
            });
        }
    },
    computed: {
        getinsert(){
            return this.insert
        }
    },
    mounted() {
        if(this.insert){
            if(typeof this.insert=='string'){
                this.values1=this.insert.split(',');
            }else{
                this.value=JSON.parse(JSON.stringify(this.insert));
            }
            
        }
        this.changeValue();
        
    },
    watch: {
        getinsert(){
            this.value=JSON.parse(JSON.stringify(this.insert));
             this.changeValue();
        }
    },
}
</script>
<style >
    .nullAdd{
        font-weight: 700;
    }
</style>