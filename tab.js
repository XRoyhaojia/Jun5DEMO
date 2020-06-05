var that;
class tab {
    constructor(id) {
        that = this;
        this.main = document.querySelector(id);
        this.add = this.main.querySelector('.tabadd');
        this.ul = this.main.querySelector('.fisrstnav ul:first-child');
        this.fsection = this.main.querySelector('.tabscon');
        this.init();
    }
    init() {
            this.upDate();
            //初始化
            this.add.onclick = this.addTab;
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].index = i;
                this.lis[i].onclick = this.toggleTab;
                this.remove[i].onclick = this.removeTab;
                this.spans[i].ondblclick = this.editTab;
                this.sections[i].ondblclick = this.editTab;
            }
        }
        //动态数据更新
    upDate() {
            this.lis = this.main.querySelectorAll('li');
            this.sections = this.main.querySelectorAll('section');
            this.remove = this.main.querySelectorAll('.icon-guanbi');
            this.spans = this.main.querySelectorAll('.fisrstnav  li span:first-child')

        }
        //1,切换
    toggleTab() {
            that.clearClass();

            this.className = 'liactive';
            that.sections[this.index].className = 'conactive';

        }
        //2增加
    addTab() {
            that.clearClass();
            var li = '<li class="liactive"><span>测试</span><span class="iconfont icon-guanbi"></span></li>';
            var section = '<section class="conactive">测试</section>'
            that.ul.insertAdjacentHTML('beforeend', li);
            that.fsection.insertAdjacentHTML('beforeend', section);
            that.init();
        }
        //3，删除
    removeTab(e) {
            e.stopPropagation();
            var index = this.parentNode.index;
            that.lis[index].remove();
            that.sections[index].remove();
            that.init();
            if (document.querySelector('.liactive')) return;
            index--;
            that.lis[index] && that.lis[index].click();
        }
        //4,修改
    editTab() {
            // alert(11)
            var str = this.innerHTML;
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
            this.innerHTML = '<input type="text" />';
            var input = this.children[0];
            input.value = str;
            input.select();
            input.onblur = function() {
                this.parentNode.innerHTML = this.value;
            }
            input.onkeyup = function(e) {
                if (e.keyCode === 13)
                    this.blur();
            }

        }
        //5,清除
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }


}
var test = new tab('#tab');