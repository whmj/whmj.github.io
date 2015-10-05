 $(function(){
    	// 给表格添加样式
    	$(".listTable>tbody tr:odd").addClass("add");
    	$(".listTable>tbody tr:even").addClass("even");
    	// 当鼠标经过每过表格的每一行时的样式
    	$(".listTable tbody tr").hover(function(){
            $(this).addClass("odd");},
            function(){$(this).removeClass("odd");
        })
        // 左侧下拉菜单
    	$(".tit").toggle(
    		function(){
    		$(this).next().slideDown()
            // show();
    	},function(){
    		$(this).next().slideUp();
            $(this).next().children("ul").slideUp(); });
        // 
    	$(".listUser li").click(function(){
    		var index=$(".listUser li").index(this);
    		var odiv=$(".right").children("div");
    		odiv.eq(index).show().siblings().hide();
    		$(".rightOne").children("div").hide();
    		$(".rightTwo").children("div").hide();
    		$(".rightThree").children("div").hide();
    		$(".rightFour").children("div").hide();
    		$(".rightFive").children("div").hide();
            $(".index").hide();
    	})
    	$(".listGoods li").click(function(){
    		var index=$(".listGoods li").index(this);
    		var odiv=$(".rightOne").children("div");
    		odiv.eq(index).show().siblings().hide();
    		$(".right").children("div").hide();
    		$(".rightTwo").children("div").hide();
    		$(".rightThree").children("div").hide();
    		$(".rightFour").children("div").hide();
    		$(".rightFive").children("div").hide();
    		$(".index").hide();
    	})
    	$(".listIndent li").click(function(){
    		var index=$(".listIndent li").index(this);
    		var odiv=$(".rightTwo").children("div");
    		odiv.eq(index).show().siblings().hide();
    		$(".right").children("div").hide();
    		$(".rightOne").children("div").hide();
    		$(".rightThree").children("div").hide();
    		$(".rightFour").children("div").hide();
    		$(".rightFive").children("div").hide();
    		$(".index").hide();
    	})
    	$(".listComment li").click(function(){
    		var index=$(".listComment li").index(this);
    		var odiv=$(".rightThree").children("div");
    		odiv.eq(index).show().siblings().hide();
    		$(".right").children("div").hide();
    		$(".rightOne").children("div").hide();
    		$(".rightTwo").children("div").hide();
    		$(".rightFour").children("div").hide();
    		$(".rightFive").children("div").hide();
    		$(".index").hide();
    	})
    	$(".listLimit li").click(function(){
    		var index=$(".listLimit li").index(this);
    		var odiv=$(".rightFour").children("div");
    		odiv.eq(index).show().siblings().hide();
    		$(".right").children("div").hide();
    		$(".rightOne").children("div").hide();
    		$(".rightTwo").children("div").hide();
    		$(".rightThree").children("div").hide();
    		$(".rightFive").children("div").hide();
    		$(".index").hide();
    	})
    	$(".listType li").click(function(){
    		var index=$(".listType li").index(this);
    		var odiv=$(".rightFive").children("div");
    		odiv.eq(index).show().siblings().hide();
    		$(".right").children("div").hide();
    		$(".rightOne").children("div").hide();
    		$(".rightTwo").children("div").hide();
    		$(".rightThree").children("div").hide();
    		$(".rightFour").children("div").hide();
    		$(".index").hide();
    	})
    	$(".homepage").click(function(){
    		$(".index").show();
    		$(".right").children("div").hide();
    		$(".rightOne").children("div").hide();
    		$(".rightTwo").children("div").hide();
    		$(".rightThree").children("div").hide();
    		$(".rightFour").children("div").hide();
    		$(".rightFive").children("div").hide();
    	})
        $(".user").keyup(function(){
            $(".listTable tbody tr").hide()
            .filter(":contains('"+($(this).val())+"')").show();
        })
        $("#ad").keyup(function(){
            $(".listTable tbody tr").hide()
            .filter(":contains('"+($(this).val())+"')").show();
        })
    })
 

    