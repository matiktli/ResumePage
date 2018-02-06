var circle = new ProgressBar.Circle('#container', {
    easing: 'bounce',
    strokeWidth: 20,
    trailColor: '#cad9ea',
    text: {
        // Initial value for text.
        // Default: null
        value: 'JAVA',

        // Class name for text element.
        // Default: 'progressbar-text'
        class: 'progressbar-txt',

        // Inline CSS styles for the text element.
        // If you want to modify all CSS your self, set null to disable
        // all default styles.
        // If the style option contains values, container is automatically
        // set to position: relative. You can disable behavior this with
        // autoStyleContainer: false
        // If you specify anything in this object, none of the default styles
        // apply
        // Default: object speficied below
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#f00',
            position: 'absolute',
            left: '50%',
            top: '50%',
            padding: 0,
            margin: 0,
            // You can specify styles which will be browser prefixed
            transform: {
                prefix: true,
                value: 'translate(-50%, -50%)'
            }
        }
    }



});

var inview = new Waypoint.Inview({
    element: $('#container')[0],
    enter: function(direction) {
        console.log('Enter triggered with direction ' + direction);
    },
    entered: function(direction) {
        console.log('Entered triggered with direction ' + direction);

        circle.animate(0.7, {
            duration: 4000, from: {color: '#20ff1b'}, to: {color: '#ff1719'}, text:{value: Math.round(circle.value()*100)+"%"},
                step: function(state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value);
                    }
                }
        },
            function(){
        });
    },
    exit: function(direction) {
        console.log('Exit triggered with direction ' + direction);
    },
    exited: function(direction) {
        console.log('Exited triggered with direction ' + direction);
        circle.animate(0);

    }
});


