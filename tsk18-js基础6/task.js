window.onload = function() {
    var queueArray = [];

    var box = document.getElementById('queue');

    function rederQueue() {
        var wrap = '';
        for (var i in queueArray) {
            var num = queueArray[i];
            wrap += '<span style="display:inline-block;background:red;color:#fff;padding:5px;margin:5px">' + num + '</span>';
        }
        box.innerHTML = wrap;
    }


    var fn = {
        leftIn: function(anum) {
            queueArray.unshift(anum);
        },

        rightIn: function(anum) {
            queueArray.push(anum);
        },

        leftOut: function() {
            queueArray.shift();
        },
        rightOut: function() {
            queueArray.pop();
        }
    };

    var button = document.getElementById('button');
    button.addEventListener('click', function(event) {
        var num = document.getElementById('num').value;
        if(num != '') {
        switch (event.target) {
            case button.children[0]:
                fn.leftIn(num);
                break;
            case button.children[1]:
                fn.rightIn(num);
                break;
            case button.children[2]:
                fn.leftOut();
                break;
            default:
                fn.rightOut();
        }
            rederQueue();
        }
    });
};
