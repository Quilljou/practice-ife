window.onload = function() {
    var queueArray = [];

    var box = document.getElementById('box');

    function rederQueue(stream) {
        var wrap = '';
        for (var i in queueArray) {
            var txt = queueArray[i];
            if(txt === stream) {
                wrap += '<span style="display:inline-block;background:green;color:#fff;padding:5px;margin:5px;">' + txt + '</span>';
            }else{
                wrap += '<span style="display:inline-block;background:red;color:#fff;padding:5px;margin:5px;">' + txt + '</span>';
            }
        }
        box.innerHTML = wrap;
    }


    var fn = {
        leftIn: function(text) {
            queueArray.unshift(text);
        },

        rightIn: function(text) {
            queueArray.push(text);
        },

        leftOut: function() {
            queueArray.shift();
        },
        rightOut: function() {
            queueArray.pop();
        }
    };



    //trigger insert text
        var button = document.getElementById('button');
        button.addEventListener('click', function(event) {
            var textarea = document.getElementById('text');
            var input = textarea.value;
            input = input.replace(/[\s、,，]/g,' ');
            input = input.split(' ');
            for(var i in input) {
                if(input[i] != '') {
                var text = input[i];
                }
                switch (event.target) {
                    case button.children[0]:
                    fn.leftIn(text);
                    break;
                    case button.children[1]:
                    fn.rightIn(text);
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


        // search part
        var searchBtn = document.querySelector('#searchBtn');
        searchBtn.addEventListener('click',function(){
            var searchStr = document.querySelector('#searchStr').value;
            // var matchArr = [];
            for(var i in queueArray){
                if(queueArray[i].match(searchStr)) {
                    var stream = queueArray[i];
                    rederQueue(stream);
                }
            }
        });
};
