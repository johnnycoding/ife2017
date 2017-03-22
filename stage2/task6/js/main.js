  // task6 of js document
  var EventUtil = {
  		addHandler: function (element, type, handler) {
  			if (element.addEventListener) {
  				element.addEventListener(type, handler, false); // DOM2级事件处理程序，chrome、firefox、opera等浏览器
  			} else if (element.attachEvent) {
  				element.attachEvent('on' + type, handler); // IE事件处理程序
  			} else {
  				element['on' + type] = handler; // DOM0级事件处理程序，为所有现代浏览器支持
  			}
  		},
  		removeHandler: function (element, type, handler) {
  			if (element.removeEventListener) {
  				element.removeEventListener(type, handler, false);
  			} else if (element.detachEvent) {
  				element.detachEvent('on' + type, handler);
  			} else {
  				element['on' + type] = null;
  			}
  		}
  	};

  var add = document.getElementById('add');
  var itemsDiv = document.getElementById('items');
  var inText = document.getElementById('inText');
  var array = new Array;
  EventUtil.addHandler(add, 'click', splitText);
  EventUtil.addHandler(query, 'click', queryText);

  // 分割字符串
  function splitText() {
  	var string = inText.value;
    var fragment = document.createDocumentFragment();
    // 正则表达式：非数字，非英文字母，非中文。
  	array = string.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/).filter(function(e){return e != '';});
  	for (var i = 0; i < array.length; i++) {
  		var div = document.createElement('div');
  		div.appendChild(document.createTextNode(array[i]));
  		fragment.appendChild(div);
  	}
    itemsDiv.appendChild(fragment);
  }
  // 对输入的字符进行查找匹配并突出标记
  function queryText() {
    var str = document.getElementById('selectText').value;
    // e是数组的每一项，map是一个数组的迭代方法，join避免为生成字符串添加”,“
    itemsDiv.innerHTML = array.map(function(e) {
      if (str != null && str.length > 0) {}
      e = e.replace(str, '<span class="selected">'+str+'</span>');
      return '<div>' + e + '</div>';
    }).join('');
    }