const nowTime = new Date();
const limitTime = new Date(nowTime.getFullYear() + 1, 0, 1, 0, 0, 0);

function CountdownTimer(elemID, timeLimit) {
    this.initialize.apply(this, arguments);
}
CountdownTimer.prototype = {

    initialize: function (elemID, timeLimit) {
        this.elem = document.getElementById(elemID);
        this.timeLimit = timeLimit;
    },

    countDown: function () {
        let timer = "";
        let today = new Date();
        let days = Math.floor((this.timeLimit - today) / (24 * 60 * 60 * 1000));
        let hours = Math.floor(((this.timeLimit - today) % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        let mins = Math.floor(((this.timeLimit - today) % (24 * 60 * 60 * 1000)) / (60 * 1000)) % 60;
        let secs = Math.floor(((this.timeLimit - today) % (24 * 60 * 60 * 1000)) / 1000) % 60 % 60;
        let milis = Math.floor(((this.timeLimit - today) % (24 * 60 * 60 * 1000)) / 10) % 100;
        let me = this;

        if (this.elem != null) {
            if ((this.timeLimit - today) > 0) {
                if (days > 0) {
                    timer = '<span class="num">' + days + '</span>日';
                }
                if (hours > 0) {
                    timer = timer + '<span class="num">' + this.addZero(hours) + '</span>時間';
                }
                timer = timer + '<span class="num">' + this.addZero(mins) + '</span>分<span class="num">' + this.addZero(secs) + '</span>秒' + '<span class="num">' + this.addZero(milis) + '</span>';
                this.elem.innerHTML = timer;
                tid = setTimeout(function () { me.countDown(); }, 10);
            } else {
                return;
            }
        }
    },

    addZero: function (num) {
        num = '00' + num;
        str = num.substring(num.length - 2, num.length);
        return str;
    }
}
const timer01 = new CountdownTimer("coundown01", limitTime);
timer01.countDown();