var w_input = document.getElementById('w_input')
var w_tishi = document.getElementById('w_tishi')
var h_input = document.getElementById('h_input')
var h_tishi = document.getElementById('h_tishi')
window.onload = function() {
	// 监听Input输入框焦点事件
	w_input.focus();
	document.onclick = function(e) {
		if (w_input.value == '') {
			w_input.focus();
			w_tishi.innerHTML = '请输矩形宽度'
			h_input.setAttribute('disabled', 'disabled');
		} else {
			w_tishi.innerHTML = ''
			h_input.removeAttribute('disabled');
			if (h_input.value == '') {
				h_input.focus();
				h_tishi.innerHTML = '请输矩形高度'
				w_input.setAttribute('disabled', 'disabled');
			} else {
				h_tishi.innerHTML = ''
				w_input.removeAttribute('disabled');
			}
		}
	}
}

// 监听宽度输入框内容事件
function watch_w(e) {
	if (w_input.value <= 0) {
		w_input.value = ''
		w_tishi.innerHTML = '宽度不能为0'
		w_input.value = ''
		w_input.focus();
	} else {
		w_tishi.value = ''

	}
}

// 监听高度输入框内容事件
function watch_h(e) {
	if (h_input.value <= 0) {
		h_input.value = ''
		h_tishi.innerHTML = '宽度不能为0'
		h_input.value = ''
		h_input.focus();
	} else {
		h_tishi.value = ''
	}
}

var btn = document.getElementById('jisuan')
var week = document.getElementById('week')
var area = document.getElementById('area')
console.log(week.value, 'week')
// 点击计算开始计算周长与面积
btn.onclick = function() {
	if (w_input.value != '' && h_input.value != '') {
		console.log('w_input.value', w_input.value)
		console.log('h_input.value', h_input.value)
		week.value = (Number(w_input.value) + Number(h_input.value)) * 2
		area.value = Number(w_input.value) * Number(h_input.value)
	}
}
