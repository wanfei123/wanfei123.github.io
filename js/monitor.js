(function($,window){
//这是最小高度
var win = jQuery(window);
var app = $('#app');
win.on('resize',function(){
    app.css({'min-height':win.height()});
}).trigger('resize');

var last_nav_actice = null;
var nav_items = $('.nav-stacked').find('.nav-item');
nav_items.on('click',function(){
    var me = $(this);
    if(last_nav_actice){
        last_nav_actice.removeClass('active');
    }
    me.addClass('active');
    last_nav_actice = me;
});
nav_items.eq(0).trigger('click');

$('.controls').find('button').on('click',function () {
    var me = $(this);
    me.button('loading');
    setTimeout(function() {
       me.button('reset');
    },1000);
});


//日志开关
$('.rc-switch').on('click',function() {
    var me = $(this);
    if(!me.hasClass('rc-switch-checked')){
        me.addClass('rc-switch-checked');
    }else{
        me.removeClass('rc-switch-checked');
    }
});

function getRandom(){
    var series = [];
    for (var i =0; i <7; i++) {
        series.push(Math.random()*60);
    }
    return series;
}
var data = {};
var metrices = {'memory':'memory-chart','cpu':'cpu-chart'};
for(i in metrices){
    data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "metrices",
                fill: true,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: getRandom(),
            }
        ]
    };
    new window.Chart(document.getElementById(metrices[i]).getContext('2d'), {
        type: 'line',
        data: data,
        options: {
            xAxes: [{
                display: false
            }]
        }
    }); 
}

})(jQuery,window);