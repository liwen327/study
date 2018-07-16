function scrollAdInsert(){
    var $list=$(".info_ad_box:last ~ .info_box");
    var startIndex=1;
    var step=3;
    if($list.length < step){
        return;
    }
    $list.each(function(i){
        if(i!=0 &&(i+startIndex)%step == 0){
            var adTpl = '<dl class="info_box info_ad_box" id="info_ad'+i+'"></dl>';
            $(this).after(adTpl);
            NEWS_FEED({
                w: 808,
                h : 80,
                showid : 'wc4SIC',
                placeholderId: "info_ad"+i,
                inject : 'define',
                define : {
                    imagePosition : 'left',
                    imageBorderRadius : 0,
                    imageWidth: 40,
                    imageHeight: 30,
                    imageFill : 'clip',
                    displayImage : true,
                    displayTitle : true,
                    titleFontSize: 16,
                    titleFontColor: '#000',
                    titleFontFamily : 'Microsoft Yahei',
                    titleFontWeight: 'bold',
                    titlePaddingTop : 0,
                    titlePaddingRight : 0,
                    titlePaddingBottom : 5,
                    titlePaddingLeft : 16,
                    displayDesc : true,
                    descFontSize: 12,
                    descFontColor: '#8e959a',
                    descFontFamily : 'Microsoft Yahei',
                    paddingTop : 20,
                    paddingRight : 0,
                    paddingBottom : 0,
                    paddingLeft : 0,
                    backgroundColor: '#fff',
                    hoverColor: '#000'
                }
            });
        }
    });
}
$(function() {
    var not_loading = true,pageNum = 3,oList = $("#album_detail_wrap");
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        var scrollHeight = $(document).height() ;
        var windowHeight = $(this).height();
        if (scrollTop + windowHeight >= scrollHeight) {
            if(not_loading){
                refreshMore();
                setTimeout(function(){
                    getMore(function(){
                        //在这里插入广告
                        scrollAdInsert();
                    });
                },100);
            }else{
                $(".dl_more").remove();
            }
        }
    });
    function appendHtml(data) {
        for (var i = 0; i < data.length; i++) {
            oList.append(data[i]);
        }
    }

    function getMore(callback){
        $.ajax({
            type: 'get',
            url: 'data.json',
            data:{
                sort_by:'',
                page:pageNum
            },
            //async: false,
            dataType: 'json',
            success: function (resobj) {
                var totalNum = resobj.total_pages;
                if(pageNum <=totalNum ){
                    $(".dl_more").remove();
                    appendHtml(resobj.oHtml);
                    if(typeof callback == 'function'){
                        callback();
                    }
                    refreshMore();
                    not_loading = true;
                    pageNum++;
                }else{
                    not_loading = false;
                    noMore();
                }
            },
            error: function (err) {
                console.log(err);
            },
            complete:function(){

            }
        });
    }

    function noMore(){
        $(".dl_more").remove();
        if(oList.find(".dl_no_more").length ==0){
            oList.append('<div class="dl_no_more" style="font-size:14px; color:red; text-align:center;padding-top:10px; ">我们是很有底线的</div>');
        }
    }

    function refreshMore(){
        if(oList.find(".dl_more").length ==0){
            oList.append('<div class="dl_more" style="font-size:14px; color:red;padding-top:10px;"><img src="images/feedLoading.gif"/></div>');
        }
    }
});