<template>
    <div class="container fixed bottom-[10%] right-[30px] w-[64px] flex flex-col">
        <div class="container-item bg-[#41A5E0] w-[64px] h-[64px] rounded-[32px] mb-[12px] flex flex-col justify-center items-center">
            <el-image src="https://deepimage.polo-e.net/applets/20230915/064911_email-icon.png" class="w-[29px] h-[20px]"></el-image>
            <div class="text-white text-[12px] leading-[17px]">邮箱</div>
            <div class="showtixd p-[10px] text-[18px] font-[bold] text-[#333]">
                MasterH的邮箱为：
                <br />
                xksaturn@gmail.com
            </div>
        </div>
        <div class="container-item bg-[#41A5E0] w-[64px] h-[64px] rounded-[32px] mb-[12px] flex flex-col justify-center items-center">
            <el-image src="https://deepimage.polo-e.net/applets/20230915/083739_wx-icon.png" class="w-[30px] h-[26px]"></el-image>
            <div class="text-white text-[12px] leading-[17px]">公众号</div>
            <div class="showtixd p-[6px]">
                <img src="https://image.xiaosaturn.com/masterHgzh.jpg" />
                <div>扫码关注公众号，获取最新信息</div>
            </div>
        </div>
        <!-- <div class="container-item bg-[#41A5E0] w-[64px] h-[64px] rounded-[32px] mb-[12px] flex flex-col justify-center items-center">
            <el-image src="https://deepimage.polo-e.net/applets/20230915/083807_mini-icon.png" class="w-[28px] h-[28px]"></el-image>
            <div class="text-white text-[12px] leading-[17px]">小程序</div>
        </div> -->
        <!-- <div class="container-item bg-[#41A5E0] w-[64px] h-[64px] rounded-[32px] mb-[12px] flex flex-col justify-center items-center">
            <el-image src="https://deepimage.polo-e.net/applets/20230915/083833_contact-icon.png" class="w-[24px] h-[25px]"></el-image>
            <div class="text-white text-[12px] leading-[17px]">客服热线</div>
            <div class="showtixd p-[10px] text-[18px] font-[bold] text-[#333]">
                MasterH的邮箱为：
                <br />
                xksaturn@gmail.com
            </div>
        </div> -->
        <!-- <div @click="scrollToTop" class="container-item bg-[#41A5E0] w-[64px] h-[64px] rounded-[32px] mb-[12px] flex flex-col justify-center items-center">
            <el-image src="https://deepimage.polo-e.net/applets/20230915/083900_right-up-icon.png" class="w-[24px] h-[29px]"></el-image>
        </div> -->
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const scrollToTop = () => {
    const headerBar = document.querySelector("#welcomeText");
    console.log('headerBar:', headerBar);
    if (headerBar) {
        headerBar.scrollIntoView({
            behavior: 'smooth'
        });
    }
}
</script>

<style lang="scss" scoped>
.container {
    z-index: 9999;
}
.container-item:hover {
    cursor: pointer;
    background-color: rgba(65, 165, 224, 0.7);
}

.showtixd {
    position: absolute;
    min-width: 150px;
    height: auto;
    background: #fff;
    border: 1px solid #ddd;
    display: none;
    right: 70px;
    img {
        width: 100%;
    }
}

.container-item:hover {
    .showtixd {
        display: block;
    }
}

</style>