/**
 * Created by Iris on 2017/3/23.
 */
$(function(){
    //搜索
    (function(){
        var aLi=$('#menu li');
        var oText=$('#search').find('.form .txt');
        var arrText=[
            '例如：例如：芝士排骨 或 大闸蟹',
            '例如：昌平区育新站龙七广场',
            '例如：万达影院双人情侣券',
            '例如：XX出事了，上级打起太极，谁来负责此事？',
            '例如：今日天气转冷，注意保暖'];

        var num=0;
        oText.val(arrText[num]);

        aLi.each(function( index ){
            $(this).click(function(){
                 aLi.attr('class','grad');
                $(this).attr('class','active');

                num=index;
                oText.val(arrText[num]);
            });
        });

        oText.focus(function(){
            if ($(this).val()==arrText[num]){
                $(this).val('');
            }
        });
        oText.blur(function(){
            if ($(this).val()==''){
                $(this).val(arrText[num]);
            }
        })
    })();
    //选项卡切换
    (function(){
        fnTab($('.tabNav1'),$('.tabCon1'),'click');
        fnTab($('.tabNav2'),$('.tabCon2'),'mouseover');
        fnTab($('.tabNav3'),$('.tabCon3'),'mouseover');

        function fnTab(oNav,aCon,sEvent){
            var aElem=oNav.children();
            aCon.hide().eq(0).show();

            aElem.each(function( index ){

                $(this).on(sEvent,function(){
                     aElem .removeClass('active').addClass('grad');
                    $(this).addClass('active').removeClass('grad');
                    aElem.find('a').attr('class','triangle_down_gray');
                    $(this).find('a').attr('class','triangle_down_red');

                    aCon.hide().eq(index).show();
                });
            })
        }
    })();
    //HOT区域设置
    (function(){
        var arrText=[
            '',
            '用户1<br/>人气1',
            '用户名：性感宝贝<br/>区域：朝阳CBD<br/>人气：124987',
            '用户2<br/>人气2',
            '用户3<br/>人气3',
            '用户4<br/>人气4',
            '用户5<br/>人气5',
            '用户6<br/>人气6',
            '用户7<br/>人气7',
            '用户8<br/>人气8',
            '用户9<br/>人气9'
        ];

        $('.hot_area li').mouseover(function(){
            if($(this).index()==0)return;
            $('.hot_area li p').remove();
            $(this).append('<p style="width:'+($(this).width()-12)+'px;height: '+($(this).height()-12)+'px ">'+arrText[$(this).index()]+'</p>')
        })
    })();
});