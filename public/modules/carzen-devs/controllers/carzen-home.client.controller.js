'use strict';

angular.module('carzen-devs').controller('CarzenHomeController', ['$scope','$log',
	function($scope,$log) {
		// Carzen home controller logic
		// ...
		/*
		 정비이력조회
		 정산관리
		 차량관리
		 사전점검관리
		 매장찾기
		 관리자메뉴
		*/
		$scope.tmenus = [
			{name: '정비이력조회'},
			{name: '정산관리'},
			{name: '차량관리'},
			{name: '사전점검관리'},
			{name: '매장찾기'},
			{name: '관리자메뉴'}
		];

		$scope.rowCollection1 = [
			{outDate: '2015-01-02', carNum: '94마2012', carName: '5톤 집게차', miles: '186,771', price1: '33,000', price2:'39,600', branchName:'시화대형점', status: '승인완료'}
		];

		$scope.rowCollection = [
			{branchName: '도봉1급정비', represents: '김창호', bizNum: '210-81-70209', phone: '02-902-4040', address: '서울시 도봉구 방학동 711', pto:'', emergency: '', map:''},
			{branchName: '양평1급점', represents: '장인대', bizNum: '210-81-70209', phone: '02-902-4040', address: '서울시 영등포구 양평동6가 1번지',pto:'',emergency: '',map:''},
			{branchName: '카젠', represents: '김태진', bizNum: '210-81-70209', phone: '02-902-4040', address: '경기도 성남시 중원구 상대원동 442-2 한라시그마밸리 405호,406호', pto:'',emergency: '',map:''}
		];


		var tabs = [
			{ title: '정비이력조회', content: "Tabs will become paginated if there isn't enough room for them."},
			{ title: '정산관리', content: "You can swipe left and right on a mobile device to change tabs."},
			{ title: '차량관리', content: "You can bind the selected tab via the selected attribute on the md-tabs element."},
			{ title: '사전점검관리', content: "If you set the selected tab binding to -1, it will leave no tab selected."},
			{ title: '매장찾기', content: "If you remove a tab, it will try to select a new one."},
			{ title: '관리자메뉴', content: "There's an ink bar that follows the selected tab, you can turn it off if you want."},

		];
		$scope.tabs = tabs;
		$scope.selectedIndex = 0;
	}
]);
