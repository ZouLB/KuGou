// 默认已经定义了main模块
loader.define(function(require,exports,module) {
    var pageview = {};
    
    // 模块初始化定义    
    pageview.init = function () {
        
    }
    
    // 初始化
    pageview.init();

    //头部tab
    var uiSlideTab = bui.slide({
        id:"#uiSlide",
        menu:"#uiSlideTabNav",
        children:".bui-tab-main ul",
        scroll: true
    })

    //公告
    var uiSlide = bui.slide({ 
        id:"#slideNote",
         height:40, 
         autoplay: true, 
         direction: "y"
    })       

    var uiSidebar = bui.sidebar({
        id: "#uiSidebar",
        width:400,
    });  

    $('.icon-menu').on("click",function(){
        uiSidebar.open();
    })

    $(".loginLink").on("click",function () {
        router.load({url:"login"});
    })

    var uiSlideTab = bui.slide({
        id:"#uiSlideSing",
        menu:".tabHeadSing",
        children:".tabMainSing ul",
        scroll: true
    })

    var uiList = bui.list({
        id: "#uiScrollList",
        url: "",
        data: {},
        template: template,
        onLoad: function (scroll) {
            // 自定义渲染
        },
        callback: function (e) {
            // 点击单行回调 console.log($(this).text())
        },
        height: 0,
        page:1,
        pageSize:10,
        field: {
            page: "page",        // 分页字段
            size: "pageSize",    // 页数字段
            data: "data"         // 数据
        }
    });
    
    var data = [{
        name: "张三"
    },{
        name: "李四"
    },{
        name: "王五"
    }];
    //生成列表的模板
    function template (data) {
    
        var html = "";
    
            $.each(data,function(index, el) {

                html += '<li class="bui-btn bui-box"><div class="span1"><h3 class="item-title status-title">'+el.name+'</h3>';
                html += '<div class="wrap-content container-y"><div class="bui-btn bui-box " ><div class="icon">';
                html += '<img src="../images/applogo.png" alt=""></div><div class="span1 sub-content">';
                html += '关注关注关注关注关注关注关注关注关注关注关注关注关注关注关注关注关注关注关注关注关注</div>';
                html += '</div></div><div class="bui-box status-time"><div class="span1"><span class="data-time">2015-12-12 15:10</span> ';
                html += '<span class="data-remove">删除</span></div><span class="bui-right"><i class="icon-info"></i></span></div></div></li>';

            });
    
        return html;
    };

    var listTpl = template(data);

    // $渲染
     $(".buiListTpl").html(listTpl);

    // 输出模块
    module.exports = pageview;
})