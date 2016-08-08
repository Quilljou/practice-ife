/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    '北京': 90,
 *    '上海': 40
 * };
 */

var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var city = document.getElementById('aqi-city-input');
    var values = document.getElementById('aqi-value-input');
    var cityRegex = /^[\u4e00-\u9fa5]+$|^[a-zA-Z]\s+$/;
    var valueRegex = /^[1-9]\d*$/;
    city = city.value.trim();
    values = values.value.trim();
    if (!(city && values)) {
        alert('请不要输入空字符');
    }else if (!cityRegex.test(city)) {
        alert('请输入正确的城市');
    }else if(!valueRegex.test(values)) {
        alert('请输入0-100之间的整数');
    }else{
        aqiData[city]=values;
    }
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var table = document.getElementById('aqi-table');
    var items = '<td>城市</td><td>空气质量</td><td>操作</td>';
        for(var city in aqiData){
        items += '<tr><td>'+city+'</td><td>'+aqiData[city]+'</td><td><button>删除</button></td></tr>';
    }
    table.innerHTML = items;
}


/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(target) {
    var tr = target.parentElement.parentElement;
    var city = tr.children[0].innerText;
    delete aqiData[city];
    renderAqiList();
}

window.onload = function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    var btn = document.getElementById('add-btn');
    btn.onclick = addBtnHandle;
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    var table = document.getElementById('aqi-table');
    table.addEventListener('click',function(event){
        if(event.target && event.target.nodeName === 'BUTTON') {
            delBtnHandle(event.target);
        }
    });
};
