	// this is js for task4 to realize insert or delete sort
	var leftInsert = document.getElementById('leftInsert');
	var rightInsert = document.getElementById('rightInsert');
	var leftDelete = document.getElementById('leftDelete');
	var rightDelete = document.getElementById('rightDelete');
	var randomData = document.getElementById('randomData');
	leftInsert.onclick = function() {
		var items = document.getElementById('items');
		var textValue = parseInt(document.getElementById('textInsert').value);
		var restrict = /\d/;
		if (restrict.test(textValue) && textValue >= 10 && textValue <= 100) {
			if (items.children.length < 10 ) {
				var oDiv = document.createElement('div');
				oDiv.innerHTML = textValue;
				oDiv.style.height = 100+textValue*2+'px';
				items.insertBefore(oDiv,items.firstChild);
			}else
				alert('当前队列元素最多限制为60个');
	}else{
		alert('输入的数值范围应该在10~100');
		}
	}

	rightInsert.onclick = function() {
		var items = document.getElementById('items');
		var textValue = parseInt(document.getElementById('textInsert').value);
		// 
		var restrict = /^[1-9][0-9]|100$/;
		if (restrict.test(textValue) && textValue >= 10 && textValue <= 100) {
			if (items.children.length < 10 ) {
				var oDiv = document.createElement('div');
				oDiv.innerHTML = textValue;
				oDiv.style.height = 100+textValue*2+'px';
				items.appendChild(oDiv);
			}else
				alert('当前队列元素最多限制为60个');
	}else{
		alert('输入的数值范围应该在10~100');
		}
	}

	leftDelete.onclick = function() {
		var items = document.getElementById('items');
		if (items.childNodes.length <= 0) {
			alert('已经没有子节点可以删除！');
		}else{
			var record = items.firstChild.innerHTML;
			items.removeChild(items.firstChild);
			alert(record);
		}
	}

	rightDelete.onclick = function() {
		var items = document.getElementById('items');
		if (items.childNodes.length <= 0) {
			alert('已经没有子节点可以删除！');
		}else{
			var record = items.lastChild.innerHTML;
			items.removeChild(items.lastChild);
			alert(record);
		}
	}

	// 随机生成节点数据
	randomData.onclick = function randomData() {
		var fragment = document.createDocumentFragment();
		var items = document.getElementById('items');
		var itemsChild = items.children;
		var oDiv = new Array();

		// 在生成节点之前先清除已存在节点.
		// for (var i = itemsChild.length - 1; i >= 0; i--) {
		// 	items.removeChild(itemsChild[i]);
		// }
		// 清除子节点更好的方法.
		items.innerHTML = null;

		// 向节点添加多个子节点，并设置属性和css样式.
			// 使用DocumentFragment进行性能优化，避免浏览器反复渲染.
			// 使用数组方便为每一个元素设置属性和css样式.
		for (var i = 0; i < 60; i++) {
			oDiv[i] = document.createElement('div');
			var randomNum = parseInt(Math.random()*100);
			oDiv[i].style.height = 100+randomNum*2+'px';
			oDiv[i].appendChild(document.createTextNode(randomNum));
			fragment.appendChild(oDiv[i]);
		}
		items.appendChild(fragment);
	}

	// 排序功能
	rankData.onclick = function() {
		var rankData = document.getElementById('rankData');
		var itemsChild = document.getElementById('items').getElementsByTagName('div');
		// 遍历所有div的innerHTML，然后存储到数组.
		var array = new Array();

		// 排序方法一：sort()排序
		for (var i = 0; i < itemsChild.length; i++) {
			array.push(parseInt(itemsChild[i].innerHTML));
		}

		// array.sort(function(a,b){return a - b ;});
		// alterData(array);
		// sort()排序结束
		
		// 排序方法二：冒泡排序
		for (var j = 0; j < array.length - 1; j++) {
			for (var i = 0; i < array.length - j; i++) {
				if(array[i] > array[i+1]){
					temp = array[i+1];
					array[i+1] = array[i];
					array[i] = temp;
					itemsChild[i].innerHTML = array[i];
					itemsChild[i+1].innerHTML = array[i+1];
					itemsChild[i].style.height = 100+array[i]*2+'px';
					itemsChild[i+1].style.height = 100+array[i+1]*2+'px';
				}
			}
		}
		// 冒泡排序结束
	}

	//sort()排序调用的函数
	function alterData(arr) {
		var fragment = document.createDocumentFragment();
		var items = document.getElementById('items');
		var itemsChild = items.children;
		var oDiv = new Array();

		items.innerHTML = null;

		for (var i = 0; i < 60; i++) {
			oDiv[i] = document.createElement('div');
			oDiv[i].style.height = arr[i]*2+100+'px';
			oDiv[i].appendChild(document.createTextNode(arr[i]));
			fragment.appendChild(oDiv[i]);
		}
		items.appendChild(fragment);
	}
	// 待完善：可视化排序
	// 使用DOM1级
	// 使用对象