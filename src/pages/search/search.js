loader.define(function(require,exports,module) {

	var uiSearchbar = bui.searchbar({
	    id:"#uiSearchbar",
	    callback: function (ui,keyword) {
	      // 点击搜索
	    },
	    onInput: function(ui,keyword) {
	      // 输入实时搜索
	    },
	    onRemove: function(ui,keyword) {
	      // 删除关键词需要做什么其它处理
	    }
	});
	return {};
})