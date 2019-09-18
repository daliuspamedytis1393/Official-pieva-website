<template>
    <div id="callme">
        <div id="callmeMain">

        </div>

    </div>
</template>

<script>
export default {
	name: 'CallMeButton'
}
</script>

<style lang='css'>
#callme {
    position: fixed;
    bottom: 0;
    left: 0;
    margin: 1em;
    width: 56px;
    height: 56px;
    cursor: pointer;
    opacity: 0.9;

}
#callme #callmeMain {

    border-radius: 50% !important;
    -moz-background-clip: padding;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    background-color: #da552f;
    width: 56px;
    height: 56px;
    animation: zcwmini2 1.5s 4s ease-out infinite;
}
#callme #callmeMain:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url(https://ss.zadarma.com/callbackWidget/images/mini.png);
    background-repeat: no-repeat;
    background-position: center center;
    animation: zcwphone2 1.5s 4s linear infinite;
}
@-webkit-keyframes zcwphone {
    0% {-ms-transform:rotate(0deg);-webkit-transform:rotate(0deg);transform:rotate(0deg);}
    25% {-ms-transform:rotate(30deg);-webkit-transform:rotate(30deg);transform:rotate(30deg);}
    50% {-ms-transform:rotate(0deg);-webkit-transform:rotate(0deg);transform:rotate(0deg);}
    75% {-ms-transform:rotate(-30deg);-webkit-transform:rotate(-30deg);transform:rotate(-30deg);}
    100% {-ms-transform:rotate(0deg);-webkit-transform:rotate(0deg);transform:rotate(0deg);}
}
@-moz-keyframes zcwphone {
    0% {-ms-transform:rotate(0deg);-webkit-transform:rotate(0deg);transform:rotate(0deg);}
    25% {-ms-transform:rotate(30deg);-webkit-transform:rotate(30deg);transform:rotate(30deg);}
    50% {-ms-transform:rotate(0deg);-webkit-transform:rotate(0deg);transform:rotate(0deg);}
    75% {-ms-transform:rotate(-30deg);-webkit-transform:rotate(-30deg);transform:rotate(-30deg);}
    100% {-ms-transform:rotate(0deg);-webkit-transform:rotate(0deg);transform:rotate(0deg);}
}
@keyframes zcwphone {
    0% {-ms-transform:rotate(0deg);-webkit-transform:rotate(0deg);transform:rotate(0deg);}
    25% {-ms-transform:rotate(30deg);-webkit-transform:rotate(30deg);transform:rotate(30deg);}
    50% {-ms-transform:rotate(0deg);-webkit-transform:rotate(0deg);transform:rotate(0deg);}
    75% {-ms-transform:rotate(-30deg);-webkit-transform:rotate(-30deg);transform:rotate(-30deg);}
    100% {-ms-transform:rotate(0deg);-webkit-transform:rotate(0deg);transform:rotate(0deg);}
}
@-webkit-keyframes zcwphone2 {
    0% {-ms-transform:rotate(0deg);-webkit-transform:rotate(0deg);transform:rotate(0deg);}
    25% {-ms-transform:rotate(30deg);-webkit-transform:rotate(30deg);transform:rotate(30deg);}
    50% {-ms-transform:rotate(0deg);-webkit-transform:rotate(0deg);transform:rotate(0deg);}
    75% {-ms-transform:rotate(-30deg);-webkit-transform:rotate(-30deg);transform:rotate(-30deg);}
    100% {-ms-transform:rotate(0deg);-webkit-transform:rotate(0deg);transform:rotate(0deg);}
}
@-moz-keyframes zcwphone2 {
    0% {-ms-transform:rotate(0deg);-webkit-transform:rotate(0deg);transform:rotate(0deg);}
    25% {-ms-transform:rotate(30deg);-webkit-transform:rotate(30deg);transform:rotate(30deg);}
    50% {-ms-transform:rotate(0deg);-webkit-transform:rotate(0deg);transform:rotate(0deg);}
    75% {-ms-transform:rotate(-30deg);-webkit-transform:rotate(-30deg);transform:rotate(-30deg);}
    100% {-ms-transform:rotate(0deg);-webkit-transform:rotate(0deg);transform:rotate(0deg);}
}
@keyframes zcwphone2 {
    0% {-ms-transform:rotate(0deg);-webkit-transform:rotate(0deg);transform:rotate(0deg);}
    25% {-ms-transform:rotate(30deg);-webkit-transform:rotate(30deg);transform:rotate(30deg);}
    50% {-ms-transform:rotate(0deg);-webkit-transform:rotate(0deg);transform:rotate(0deg);}
    75% {-ms-transform:rotate(-30deg);-webkit-transform:rotate(-30deg);transform:rotate(-30deg);}
    100% {-ms-transform:rotate(0deg);-webkit-transform:rotate(0deg);transform:rotate(0deg);}
}
@-webkit-keyframes zcwmini {
    0% {box-shadow: 0 0 8px 6px rgba(207,8,8, 0), 0 0 0 0 rgba(0,0,0,0), 0 0 0 0 rgba(207,8,8, 0);}
    10% {box-shadow: 0 0 8px 6px , 0 0 12px 10px rgba(0,0,0,0), 0 0 12px 14px ;}
    100% {box-shadow: 0 0 8px 6px rgba(207,8,8, 0), 0 0 0 40px rgba(0,0,0,0), 0 0 0 40px rgba(207,8,8, 0);}
}
@-moz-keyframes zcwmini {
    0% {box-shadow: 0 0 8px 6px rgba(207,8,8, 0), 0 0 0 0 rgba(0,0,0,0), 0 0 0 0 rgba(207,8,8, 0);}
    10% {box-shadow: 0 0 8px 6px , 0 0 12px 10px rgba(0,0,0,0), 0 0 12px 14px ;}
    100% {box-shadow: 0 0 8px 6px rgba(207,8,8, 0), 0 0 0 40px rgba(0,0,0,0), 0 0 0 40px rgba(207,8,8, 0);}
}
@keyframes zcwmini {
    0% {box-shadow: 0 0 8px 6px rgba(207,8,8, 0), 0 0 0 0 rgba(0,0,0,0), 0 0 0 0 rgba(207,8,8, 0);}
    10% {box-shadow: 0 0 8px 6px , 0 0 12px 10px rgba(0,0,0,0), 0 0 12px 14px ;}
    100% {box-shadow: 0 0 8px 6px rgba(207,8,8, 0), 0 0 0 40px rgba(0,0,0,0), 0 0 0 40px rgba(207,8,8, 0);}
}
@-webkit-keyframes zcwmini2 {
    0% {box-shadow: 0 0 8px 6px rgba(207,8,8, 0), 0 0 0 0 rgba(0,0,0,0), 0 0 0 0 rgba(207,8,8, 0);}
    10% {box-shadow: 0 0 8px 6px , 0 0 12px 10px rgba(0,0,0,0), 0 0 12px 14px ;}
    100% {box-shadow: 0 0 8px 6px rgba(207,8,8, 0), 0 0 0 40px rgba(0,0,0,0), 0 0 0 40px rgba(207,8,8, 0);}
}
@-moz-keyframes zcwmini2 {
    0% {box-shadow: 0 0 8px 6px rgba(207,8,8, 0), 0 0 0 0 rgba(0,0,0,0), 0 0 0 0 rgba(207,8,8, 0);}
    10% {box-shadow: 0 0 8px 6px , 0 0 12px 10px rgba(0,0,0,0), 0 0 12px 14px ;}
    100% {box-shadow: 0 0 8px 6px rgba(207,8,8, 0), 0 0 0 40px rgba(0,0,0,0), 0 0 0 40px rgba(207,8,8, 0);}
}
@keyframes zcwmini2 {
    0% {box-shadow: 0 0 8px 6px rgba(207,8,8, 0), 0 0 0 0 rgba(0,0,0,0), 0 0 0 0 rgba(207,8,8, 0);}
    10% {box-shadow: 0 0 8px 6px , 0 0 12px 10px rgba(0,0,0,0), 0 0 12px 14px ;}
    100% {box-shadow: 0 0 8px 6px rgba(207,8,8, 0), 0 0 0 40px rgba(0,0,0,0), 0 0 0 40px rgba(207,8,8, 0);}
}

</style>
