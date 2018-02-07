var allBars = document.getElementsByClassName('skill-bar-circle');
var percentage=[90,85,70];
var icons=['devicon-java-plain','icon-spring'];
var i;
var cir=[];
for(i=0;i<allBars.length;i++){
    cir[i] = new ProgressBar.Circle('#skill-bar'+i, {
        easing: 'bounce',
        strokeWidth: 15,
        trailColor: '#cad9ea',
        text: {
            style: {
                fontFamily: '',
                color: '#234f7f',
                position: 'absolute',
                left: '50%',
                top: '50%',
                padding: 0,
                margin: 0,
                transform: {
                    prefix: true,
                    value: 'translate(-50%, -50%)'
                }
            }
        }
    });

}

var inview = new Waypoint.Inview({
    element: $('#skill-bar0')[0],
    enter: function(direction) {},
    entered: function() {
        var x=0;
        for(var k=0;k<cir.length;k++){
            (function () {
            cir[k].animate(percentage[k]/100, {
                duration: 4000, from: {color: '#f4fcff'}, to: {color: '#15286a'},
                step: function(state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        
                        circle.setText("<i class='"+icons[x%cir.length]+" icon' style='opacity: "+(value/100)*0.5+"'/>");
                    }
                    x++; //GOD DAMN IT WHAT HAVE I DONE XD XD XD


                }
            })
            })();
        }

    },
    exit: function(direction) {},
    exited: function() {

        var k;
        for(k=0;k<cir.length;k++){
            cir[k].animate(0);
        }
    }
});

/*
var sections=["about","skill","experience","education","interest"];
for(var x=0;x<4;x++) {
    var waypointsDown = $("#topic" + x).waypoint(function (direction) {
        if (direction === "down" && x<5) {
            console.log("load down"+sections[x]);
            $(sections[x+1]+'-section').animate({opacity:1},1000);        }
    }, {offset: '5%'});
    var waypointsUp = $("#topic" + x).waypoint(function (direction) {
        if (direction === "up" && x>=1) {
            console.log("load up "+sections[x-1]);
            $(sections[x-1]+'-section').animate({opacity:0},1000);        }
    }, {offset: '60%'});
}

*/

