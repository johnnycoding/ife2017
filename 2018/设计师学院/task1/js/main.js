var textElm = document.getElementById('text');
var switchBtnElm = document.getElementById('switchBtn');
// 添加点击事件
switchBtnElm.addEventListener('click', function () {
    // 根据单双数切换效果
    textElm.classList.toggle('active');
});

document.title = 'new page';