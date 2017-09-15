angular.module('starter.controllers', [])

.controller('viewpointCtrl', function($scope) {
	var mySwiper2 = new Swiper('#swiper-container2',{
watchSlidesProgress : true,
watchSlidesVisibility : true,
slidesPerView : 3,//可见的数量
//点击事件
onTap: function(){
			//把mySwiper3跳转到对应点击下标
			mySwiper3.slideTo( mySwiper2.clickedIndex)
		}
})
//
var mySwiper3 = new Swiper('#swiper-container3',{
//滑动开始的时候触发
onSlideChangeStart: function(){
			updateNavPosition()
		}

})

function updateNavPosition(){
	//设置swiper2的激活样式
		$('#swiper-container2 .active-nav').removeClass('active-nav')
								//设置当前mySwiper3的激活下标
		var activeNav = $('#swiper-container2 .swiper-slide').eq(mySwiper3.activeIndex).addClass('active-nav');

		console.log(activeNav)
		//假如当前有激活样式的元素没有可见
	
	
				//滚动到当前有激活样式的下标
				mySwiper2.slideTo(activeNav.index())
			
	
	}
//轮播图
	var mySwiperlunbo=new Swiper('.swiper-containerlunbo',{
			autoplay:2000,//可选选项，自动滑动
			noSwiping : true,//禁止切换
		})
	var mySwiperlunbo2=new Swiper('.swiper-containerlunbo2',{
			autoplay:2000,//可选选项，自动滑动
			noSwiping : true,//禁止切换
		
		})
	var mySwiperlunbo3=new Swiper('.swiper-containerlunbo3',{
			autoplay:2000,//可选选项，自动滑动
			noSwiping : true,//禁止切换
		})
	var mySwiperlunbo4=new Swiper('.swiper-containerlunbo4',{
			autoplay:2000,//可选选项，自动滑动
			noSwiping : true,//禁止切换
		})
	var mySwiperlunbo5=new Swiper('.swiper-containerlunbo5',{
			autoplay:2000,//可选选项，自动滑动
			noSwiping : true,//禁止切换
		
		})
	
	var mySwiperlunbo6=new Swiper('.swiper-containerlunbo6',{
			autoplay:2000,//可选选项，自动滑动
			noSwiping : true,//禁止切换
		
		})
	var mySwiperlunbo7=new Swiper('.swiper-containerlunbo7',{
			autoplay:2000,//可选选项，自动滑动
			noSwiping : true,//禁止切换
		
		})
	var mySwiperlunbo8=new Swiper('.swiper-containerlunbo8',{
			autoplay:2000,//可选选项，自动滑动
			noSwiping : true,//禁止切换
		
		})
	
	var mySwiperlunbo9=new Swiper('.swiper-containerlunbo9',{
			autoplay:2000,//可选选项，自动滑动
			noSwiping : true,//禁止切换
		
		})
	var mySwiperlunbo10=new Swiper('.swiper-containerlunbo10',{
			autoplay:2000,//可选选项，自动滑动
			noSwiping : true,//禁止切换
		
		})
	var mySwiperlunbo11=new Swiper('.swiper-containerlunbo11',{
			autoplay:2000,//可选选项，自动滑动
			noSwiping : true,//禁止切换
		
		})
	
	var mySwiperlunbo12=new Swiper('.swiper-containerlunbo12',{
			autoplay:2000,//可选选项，自动滑动
			noSwiping : true,//禁止切换
		
		})
	var mySwiperlunbo13=new Swiper('.swiper-containerlunbo13',{
			autoplay:2000,//可选选项，自动滑动
			noSwiping : true,//禁止切换
		})
	var mySwiperlunbo14=new Swiper('.swiper-containerlunbo14',{
			autoplay:2000,//可选选项，自动滑动
			noSwiping : true,//禁止切换
		
		})
	var mySwiperlunbo15=new Swiper('.swiper-containerlunbo15',{
			autoplay:2000,//可选选项，自动滑动
			noSwiping : true,//禁止切换
		
		})
	var mySwiperlunbo16=new Swiper('.swiper-containerlunbo16',{
			autoplay:2000,//可选选项，自动滑动
			noSwiping : true,//禁止切换
		
		})
	var mySwiperlunbo17=new Swiper('.swiper-containerlunbo17',{
			autoplay:2000,//可选选项，自动滑动
			noSwiping : true,//禁止切换
		
		})
	
})



.controller('discoverCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.discover = discover.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})



.controller('bookmarksCtrl', function($scope) {
  //点击改变头部样式
  $scope.back=function(){
  	console.log(111)
  	this.style.background="#b0b0b0";
  }
})

.controller('personalCtrl',function($scope){
	
	
})
.controller('loginCtrl',function($scope){
	
})
.controller('registerCtrl',function($scope){
	
})