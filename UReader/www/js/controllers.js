angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
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
				mySwiper2.slideTo(activeNav.index()-1)
			
	
	}
	
	
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})



.controller('bookmarksCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('personalCtrl',function($scope){
	
})
