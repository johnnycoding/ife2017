	// this is js for task5.1 to realize insert or delete sort
	var items = document.getElementById('items');
	var arr = new Array;
	// 跨浏览器的事件处理程序
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

	var leftIn = document.getElementById('leftIn');
	var rightIn = document.getElementById('rightIn');
	var leftOut = document.getElementById('leftOut');
	var rightOut = document.getElementById('rightOut');

	// 由于DOM中element类型同样可以访问到id元素，即使不为addHandler指定element，
	// 事件处理程序也能够正常使用，但是为了避免出现错误或者语义化不明确，建议还是指定element;
	EventUtil.addHandler(leftIn, 'click', leftInsert);
	EventUtil.addHandler(rightIn, 'click', rightInsert);
	EventUtil.addHandler(leftOut, 'click', leftDelete);
	EventUtil.addHandler(rightOut, 'click', rightDelete);
	EventUtil.addHandler(randData, 'click', randNum);
	EventUtil.addHandler(rankData, 'click', rankNum);

	// 左插入按钮
	function leftInsert() {
		var inValue = parseInt(document.getElementById('inNum').value);
		// js正则表达式，匹配1~100的数值，必须使用括号组，否则无法识别
		var str = /^([1-9][0-9]|100)$/;
		if (str.test(inValue)) {
			if (items.children.length < 60) {
				var div = document.createElement('div');
				div.innerHTML = inValue;
				div.style.height = inValue*4 + 'px';
				arr.unshift(inValue);
				items.insertBefore(div, items.firstChild);
			} else {
				alert('当前队列元素至多允许60个');
			}
		} else {
			alert('数值输入的允许范围为10~100');
		}
	}

	// 右插入按钮
	function rightInsert() {
		var inValue = parseInt(document.getElementById('inNum').value);
		var str = /^([1-9][0-9]|100)$/;
		if (str.test(inValue)) {
			if (items.children.length < 60) {
				var div = document.createElement('div');
				div.innerHTML = inValue;
				div.style.height = inValue*4 + 'px';
				arr.push(inValue);
				items.appendChild(div);
			} else {
				alert('当前队列元素至多允许60个');
			}
		} else {
			alert('数值输入的允许范围为10~100');
		}
	}

	// 左删除按钮
	function leftDelete() {
		var itemsDiv = items.getElementsByTagName('div');
		if (itemsDiv.length <=0) {
			alert('已经没有子节点可以删除！');
		} else {
			arr.shift();
			console.log(arr);
			var record = itemsDiv[0].innerHTML;
			items.removeChild(itemsDiv[0]);
			alert(record);
		}
	}

	// 右删除按钮
	function rightDelete() {
		var itemsDiv = items.getElementsByTagName('div');
		if (itemsDiv.length <=0) {
			alert('已经没有子节点可以删除！');
		} else {
			arr.pop();
			console.log(arr);
			var record = itemsDiv[itemsDiv.length - 1].innerHTML;
			items.removeChild(itemsDiv[itemsDiv.length - 1]);
			alert(record);
		}
	}

	// 随机插入按钮
	function randNum() {
		var fragment = document.createDocumentFragment();
		var itemsChild = items.children;
		arr =[];
		console.log(arr);
		items.innerHTML = null;

		for (var i = 0; i < 60; i++) {
			var div = document.createElement('div');
			var randomNum = Math.floor(Math.random()*91 + 10);
			arr.push(randomNum);
			div.style.height = randomNum*4 + 'px';
			div.appendChild(document.createTextNode(randomNum));
			fragment.appendChild(div);
		}
		items.appendChild(fragment);
	}
	
	// 排序按钮
	function rankNum() {
		var i = 0,
			j = 0,
			itemsDiv = items.getElementsByTagName('div');
		time = setInterval(animate,15);

		// 排序可视化（动画）效果
		function animate() {
			if (j <　arr.length) {
				if (i < arr.length - 1) {
					if (arr[i] > arr[i+1]) {
						temp = arr[i];
						arr[i] = arr[i+1];
						arr[i+1] = temp;
						itemsDiv[i].innerHTML = arr[i];
						itemsDiv[i+1].innerHTML = arr[i+1];
						itemsDiv[i].style.height = arr[i]*4 + 'px';
						itemsDiv[i+1].style.height = arr[i+1]*4 + 'px';
					}
					i++;
					return;
				} else {
					i = 0;
					}
				j++;
			} else {
				clearInterval(time);
				}
		}
	}