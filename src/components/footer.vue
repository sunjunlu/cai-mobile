<template>
    <footer data-v-720b630a="" data-v-7bf92f17="" class="app-footer">
            <ul data-v-720b630a="" flex="box:mean cross:center" class="footer-list">
                <li data-v-720b630a="" flex="dir:top cross:center main:center" :class="{'is-active':active=='index'}" class="footer-list-item ">
                    <router-link to="/"> 
                        <p data-v-720b630a="" flex="main:center cross:center" class="icon"><img data-v-720b630a="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAApVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+4/eNVAAAANnRSTlMA+wQL4wf36dZvSPTe0Z1OFUIO8JV/VxgSUjIcsXp1Yj7azL5d7bSpooo5IMfChmgr4LmQKCSbz96JAAADNklEQVRIx+1W13bqMBCUC8UFjA3GNtVJaDE9EP3/p91ZKY4CLnAfc07mIZJXjHZ2tSuF/eG3I/beJ+2W47Tak4Md/A+zsfjQ+A9oq2HjSaoxa32zvvcwrafoiStoH1N7qzOmb+3wTWzxYj922xU/PMYsGNleOhbGniU2HDxwPu6QxCEbh5gQWt2U7PqCQnnt1XE/TXJgxAONK+wyBgRdUrSt8QtuM2GpSRxnv9msxEwLGWGhgV3p24DUZcYScruydWG7vjv42ogPvw/lVXFv4DdjPrimr6zRBOwuzcTSoJw7xI88Fi1VYqI0ouGAhblUjpldKhrxXRhbc+5KbmNAgg3MMOlLWxdhlwkPwTLYCPkZScMF8pu8E2MbJONd2AKcmFXiGHITsXX3y6BBSPzGPyhYuG7kws2i6yPnHRQDEnqSVTXCTARDVdKhdBB01NqiQN6LpIDRZsBox4EpoxzM8HcqdQMWjvGeG+GYDKiSqk+ObKojG/X5UOiGfKlI41pQPKcJhhnnVE4r7ma9kMqMsgjDloKSeMsjUBjILIJAKpvC3Uw02FUKk+GoCATUfpmM6IBB4wklp8Wn2VeVonKYhE0ab4EKoTLw5Mqe73SQzW+BCedrJrGVIhRIqCb6Cq2hy/ycYpz5VkU1zS84NPkdGVUgxjbSkYergjNQWLLuRExOBXn6FVyCOBw4k7BIajXZgWxC7OTFex0ZLA+zTxVULlslTArW/Nu1oENycnxCRfGoUlm8e7qK7i9FB2VecVSqSIDeC90cUb6gz5fQ4t207qGkPJUnON94YwjOQpfnSpRGu6QxAnXxS2hyaMtTqm4MbKgSylJ85ThbujRWtySb3ybxc7Zy+05rf7GJqqCfOR8WyEarzFrmw9SL5inMRg2t7gJkBgQNHpE3CK70zUg4hD8Uzf3ypS6OK63j2ji7S81D109ruE28t5UPfOTC96Jq9agh4LjmcXeproOypXjNwR2zGkSv9K/EvHCSjeOSQ3O1X/U0cteKbppyZopLSWePYL+IntgfvGsAtSfvsJPt4bMn0LBMXoB71Nlz0IeT5k9mc+2B+jwMP1x3zv3l+XUd+gb7wy/HP7bCh6EOMjnsAAAAAElFTkSuQmCC"
                                alt=""></p>
                        <p data-v-720b630a="" class="name">首&emsp;頁</p>
                   </router-link> 
                </li>
                <li data-v-720b630a="" flex="dir:top cross:center main:center" :class="{'is-active':active=='drawNotice'}" class="footer-list-item">
                    <router-link to="/drawNotice"> 
                        <p data-v-720b630a="" flex="main:center cross:center" class="icon"><img data-v-720b630a="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAApVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+4/eNVAAAANnRSTlMA4Pvx0GCAHwbBAupA9u67j9ium5KIVCQJ3dPKhBN5PDcvFuazp1xIRCkP5G5saDQrGsSkcU8qSgvYAAACU0lEQVRIx+2V2XLiMBAAZXlJfIMBg7mvcCcEskn//6ctwga51k6VtY9b6RcNMi2J0YwRP/xnBG1fWt3nf1G9LjfCnjCnA8gVIM3tBtA6iL4Ldt/QnUQwVYHThKah3H0oywgCI3cvkfs8/oQXE9cZQVvkpBHyYiAnwLaY97f67hsQeeLOzuDc3hPA78KETVTTnbsoTkLThH3lNrNNo8ApGQGEMG40NoEjbjxBo8LdWZSJNkMy/Kwyv2BcdreSEsfxRNjc2YgrC50CzWEFw/FTTgu7O90sVG1CfJ0Yj8C+qO/BR0n+BNfRFRkqUXGG9S0hbUhUEDIoyS7MdVXZ3Xv4Dln8DLEafVYl2VZz2tjdwwBaWTSE9DpY2CUZfhWSp+/yC56y6AUu2RolOSTWH2b6J+weV/MBh+swICzJMXKp259XvU5+7NTGV+MRv6rjk0IRDtI8WkDnfh3rLDlWST5L5HT/nNOjOb94eZKb14n+q8xeIo5KTokWfyOHyVl4EsWjufqVPel1qGC9HJDTdvIEtkQFQacZAbF7JYIwBPCPMHLdZmf7eDm8imrSdp6WAbLvBG1u9IRmDTPxDYeQqJDTYAX6nPmqqfiOX1CQxXIIDPXjPoxEPVnZFqD/Y6aQ1JfFQkJSfDw3kNVmfqp7LBYmsjN4NJY3gpORLHog3++HOKZmsupkX9knCT1RX9YZbycjoCNMZdG3dH3XkGPkQmgmHQn4qqpryC2IHVHUt72ZI+rJE6uqAWrKauvAWHbBUtgwN5bfuGM5xrI39lHIj7P44YcbfwBH1G/xybzSiAAAAABJRU5ErkJggg=="
                                alt=""></p>
                        <p data-v-720b630a="" class="name">開獎公告</p>
                   </router-link> 
                </li>
                <li data-v-720b630a="" flex="dir:top cross:center main:center" :class="{'is-active':active=='lotteryVideo'}" class="footer-list-item">
                    <router-link to="/lotteryVideo"> 
                        <p data-v-720b630a="" flex="main:center cross:center" class="icon"><img data-v-720b630a="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAaVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8G612AAAAInRSTlMAEDAgUMDg8JCAW+mG+/jOyMR58r6eCN7al2YyKScX4j0CJ7RqAQAAANZJREFUSMft1usKgyAYgOG5dJVp67y1dvT+L3KfY8EIhW+JTIbPn4x6IbLETRSF77xXWFWyjKFFY8tYfUEaYkpAAgNicFfqRjQONxhioo9EXzPYKrV7DZK/ijkF3B4XVDuZ4pk1nnmIawZqe1wyrfL+tnPJptVxAYP+ujJOFWibYXUMDhQXixyIj7gpFOgu7zjNtQwzzxAngyjh9LiYZ2RM8PGYgdH+2G2m9U4vzP9UuXwkQnaTh5XE5ZcMbSVBLoChrdu/iykmfnBjjCedthVuG5ooCt8TkmRph58+3MMAAAAASUVORK5CYII="
                                alt=""></p>
                        <p data-v-720b630a="" class="name">開獎視頻</p>
                    </router-link> 
                </li>
                <li data-v-720b630a="" flex="dir:top cross:center main:center" :class="{'is-active':active=='FAQ'}" class="footer-list-item">
                    <router-link to="/FAQ"> 
                        <p data-v-720b630a="" flex="main:center cross:center" class="icon"><img data-v-720b630a="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAn1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Kd3m4AAAANHRSTlMABfrvj/XqnwKFIrCYNNG1qolfOeTb1pN5a0UeE8tiPzzfwaWAcFhTTS8qGRbGu610CgcOE1T/DQAAAh1JREFUSMftltea4jAMhdNDKhAgCUNZemd3YM/7P9soEH82Y6fM1dygK0XSb8uWFVt7y1t+RTqLTZCaMMw0yAedH6ETy4Egw/6kNXpxjZIyzVIxwmk7NnkQaf9j8kji0B89xtm1QHUXJL1ItA2CwhbqTez/vxQ2YyjHYzJ3bw3zFmxfVzisgq6fe00hc7VrXGRex85Fdjper2bdzVGka3btbFLOLE/PxlP+XUoTZW5WV8wFZnq5cddnfR9nxH/a7nFN4j6FHvk4yE4dzd+Qccb2nEarOmsZ1bdUT8R+PtUdqR+lOQC8ijI5fOIcWLJ2uBLBpx6qu+QPEPPV89V5wJrpI2CghD0hp4BlTdKn1Qh6roS7fG3afrs9CgNZTD9Q5ZTwErioVmMIg/pArIRt2Kr6OcCV/2AAUwkDjoIdAvaJf5sw2sJ64hBLScuwnLaqyXonwdCRZuA1PL9aIt5k8obJpZIqP2J6Q6k20sGdu25Sqrwr86rjmUpGeWlRVWO8ehZJkryGLiobQ7PYIRZ62vq+LV7NzyBSwnxi41z7G6qG7ymQVV9S5kt0vlqtxoI7BJxpzTUFYFzl3JJzr9WIW9DVbNZ83Vi67LiH5Agabvlbl4LigXSA0oK9NV6xIYq4xQvaLWxZm9fFzgTJyDr4FK37e2sJEmevtZJpyJ4Vts2UbNr+QeMNIcjSO//sKRXlvdixbSfufUbaW97yK/IF8N5SfttaNgAAAAAASUVORK5CYII="
                                alt=""></p>
                        <p data-v-720b630a="" class="name">FAQ</p>
                    </router-link> 
                </li>
                <li data-v-720b630a="" flex="dir:top cross:center main:center" :class="{'is-active':active=='aboutUs'}" class="footer-list-item">
                    <router-link to="/aboutUs"> 
                        <p data-v-720b630a="" flex="main:center cross:center" class="icon"><img data-v-720b630a="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAnFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+TINBkAAAAM3RSTlMA+QPKo81q7NJwIgjcgm1kMBn150LWaCtmF39e8+V9eE4OxbdIO9+tmIxUNSbwv5zYvhHrc1W7AAACF0lEQVRIx+2W2XqbMBCFI1ZhE7ABY+N9iXcnafu//7s1TSPQlwjslovceK5mmO+MRpxZ9HCXu/y3dEaO6wuE7zqjzj8hu56NLrbXvRVqBSnAwBlHk2jsDADSwLoJ25OA6/XLD33PBWTvBmwswM4+fcxsEPFV7CMk+dcUrTyBx+vYcGj0DMNr6BhkUVrneJFnZRaFhKbMe4JQYa14B4C/6Cp0iOjVcyRJVM6rDcAzgOyrzBNkLWMB5CrOC8hT98HKfkL46+NrDkFdXaXYVhXH+Uh3Dq8qpE1aU2seZCqOz7pM0EF0FN/gmcE2rlKXsK0qDBZKd7HNfaRFfcTXPGv2WnbGHhtBWc+v6Ac4ldWHkQnsMCj1Az80z56XUh/gmMAujk5aUdGfctCOcE1gn3GpX/Q6nsCyNOb4JrAgqowNYqt+pE9Y1VWEMIFhUhmXhCR+hzylin6VxrWT3zACdof5UaIYbDpZ3VnJOeSv+OrCTXd2dRJWkY2SwbzQCXWv8GwtngHETM4SgOS4MvBsrrChBNygZ/2JM8zXwCyrKqyxtpdTWG/18bUBETXWtuqqpUDkn1ynKSzqukpFfXqfY/75i+8SwumNQPAaJslqx9Q05fozph3jJKnaITjCxOjcCjYRBA3TcyrY1+8DgbSa5jaibhuvfBC95o0xK2p8RQhx+13Vfku238/tXwbt3yTtX0Pmd9hd7vId8hvP4ky6MovCngAAAABJRU5ErkJggg=="
                                alt=""></p>
                        <p data-v-720b630a="" class="name">關於我們</p>
                    </router-link>
                </li>
            </ul>
        </footer>
</template>
<script>
export default {
    name:'footerLink',
    props:['active'],

}
</script>
<style >
    .app-footer a{
        color: #fff;
    }
</style>