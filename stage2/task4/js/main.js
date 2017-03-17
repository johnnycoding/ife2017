	// this is js for task4 to realize insert or delete sort
	var leftInsert = document.getElementById('leftInsert');
	var rightInsert = document.getElementById('rightInsert');
	var leftDelete = document.getElementById('leftDelete');
	var rightDelete = document.getElementById('rightDelete');
	leftInsert.onclick = function() {
		var items = document.getElementById('items');
		var textValue = document.getElementById('textInsert').value;
		var oDiv = document.createElement('div');
		oDiv.innerHTML = textValue;
		items.insertBefore(oDiv,items.firstChild);
	}
	rightInsert.onclick = function() {
		var items = document.getElementById('items');
		var textValue = document.getElementById('textInsert').value;
		var oDiv = document.createElement('div');
		oDiv.innerHTML = textValue;
		items.appendChild(oDiv);
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