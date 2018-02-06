var allBars = document.getElementsByClassName('skill-bar-circle');
var percentage=[90,85,70];
var i;
var cir=[];
for(i=0;i<allBars.length;i++){
    cir[i] = new ProgressBar.Circle('#skill-bar'+i, {
        easing: 'bounce',
        strokeWidth: 20,
        trailColor: '#cad9ea',
        text: {
            style: {
                color: '#f00',
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
        var k;
        for(k=0;k<cir.length;k++){
            cir[k].animate(percentage[k]/100, {
                duration: 4000, from: {color: '#20ff1b'}, to: {color: '#ff1719'},
                step: function(state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value+"%");
                    }
                }
            });
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


