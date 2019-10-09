<template  id="index">
	<main @click="show=false">
		<!-- 头部 -->
		<header class="header">
			<div class="top">
				<div class="logo-img">
					<img src="../assets/images/logo.png" alt="" />
				</div>
				<!-- 隐藏的导航 -->
				<div class="per-img" :class="{fixed0:fixed0}">
					<img src="../assets/images/person.png" alt="" v-on:click.stop="show=!show"/>
					<div class="hide" v-show="show" id="hide">
						<ul>
							<li v-for="(v,i) in list8">
								<router-link to="">
									<img :src="v.src" alt="">
									<span>{{v.cont}}</span>
								</router-link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<!-- 搜索框 -->
			<div :class="{fixed1:fixed1}"></div>
			<div class="text" id="text" :class="{fixed:fixed}">
				<router-link to="search">
					<span class="search"><img src="../assets/images/search.png" alt="" /></span>
					<input type="text" placeholder="日本签证"/>
				</router-link>
			</div>
			<ul class="h-list">
				<li v-for="(v,i) in list">
					<router-link to="">{{v.txt}}</router-link>
				</li>
			</ul>
		</header>
		<!-- 轮播图 -->
		<mt-swipe :auto="3000" class="zmq">
		  <mt-swipe-item v-for="(v,i) in list9">
			  <router-link to="">
				  <img :src="v.src" alt="">
			  </router-link>
		  </mt-swipe-item>
		</mt-swipe>
		<!-- 各种票 -->
		<div class="type">
			<ul class="list1">
				<li v-for="(v,i) in list1">
					<router-link to="/ticket">
						<img :src="v.src" alt="" />
						<p>{{v.title}}</p>
					</router-link>
				</li>
			</ul>
		</div>
		<!-- 旅游 -->
		<div class="tour">
			<ul class="list2">
				<li v-for="(v,i) in list2">
					<router-link to="">
						<h4>{{v.h4}}</h4>
						<p>{{v.p}}</p>
					</router-link>
				</li>
			</ul>
		</div>
		<!-- 我的会员 签到 -->
		<div class="mymb">
			<router-link to="/login">
				<img src="../assets/images/member.jpg" alt="" class="imgone"/>
				<span>专属福利天天领取</span>
			</router-link>
			<router-link to="/login">
				<img src="../assets/images/qiandao.jpg" alt="" class="imgtwo"/>
				<span>马上签到</span>
			</router-link>
		</div>
		<!-- 国庆 -->
		<div class="guo">
			<router-link to="">
				<img src="../assets/images/guo.jpg" alt="">
			</router-link>
		</div>
		<!-- 下载 -->
		<div class="down">
			<router-link to="/down">
				<img src="../assets/images/pig.jpg" alt="" />
				<div class="go1">
					<h3>去飞猪APP</h3>
					<p>享受一下装箱权益与优惠</p>
				</div>
				<p class="go2">去下载</p>
			</router-link>
		</div>
		
		<div class="one">
			<router-link to="" v-for="(v,i) in list3">
				<h3>{{v.h3}}</h3>
				<p>{{v.p1}}</p>
				<p>{{v.p2}}</p>
				<img :src="v.src" alt="">
			</router-link>
		</div>
		<!-- 超级新发现 -->
		<div class="two">
			<router-link to="/fined" class="left">
				<div>
					<img src="../assets/images/super.jpg" alt="">
					<div class="time">
						<p class="p1">25</p>
						<p class="p2">Sep.</p>
					</div>
					<p>泰国芭提雅格兰岛一日游</p>
					<p class="hao">11142<span>人说好</span></p>
				</div>
			</router-link>
			<div class="right">
				<div class="top">
					<router-link to="">
						<img src="../assets/images/super2.jpg" alt="">
						<p class="addr">上海<img src="../assets/images/fff.jpg" alt="">北京<span>单程</span></p>
						<p class="price">
							<span>￥</span>
							350起
							<span>2.6折</span>
						</p>
					</router-link>
				</div>
				<div class="bottom">
					<router-link to="">
						<p class="addr">北京希尔顿逸林酒店</p>
						<p class="price">
							<span>￥</span>
							822起
							<span>豪华</span>
						</p>
					</router-link>
				</div>
			</div>
		</div>
		
		<!-- 当地旅行地 -->
		<div class="location">
			<h2>当季旅行地</h2>
			<router-link to="/destination">探索更多目的地&gt;</router-link>
			<div>
				<ul>
					<li v-for="(v,i) in list4">
						<router-link to="">
							<img :src="v.src" alt="">
							<p>{{v.title}}</p>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		
		<!-- 旅行主题 -->
		<div class="theme">
			<h2>旅行主题</h2>
			<router-link to="">最适合你的旅行方式</router-link>
			<ul>
				<li v-for="(v,i) in list5">
					<router-link to="">
						<img :src="v.src" alt="">
						<div class="txt">
							<h3>{{v.title}}</h3>
							<p>{{v.dec}}</p>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
		
		<!-- 旅行直播 -->
		<div class="zhi">
			<h2>旅行直播</h2>
			<router-link to="">达人带你看世界</router-link>
			<ul>
				<li v-for="(v,i) in list6">
					<router-link to="">
						<img :src="v.src" alt="">
						<div class="txt">
							<h3>{{v.title}}</h3>
							<p><img :src="v.zhi" alt="">{{v.dec}}</p>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
		
		<!-- 猜你喜欢 -->
		<div class="guess">
			<h2>猜你喜欢</h2>
			<router-link to="">你想要的旅行好货</router-link>
			<ul>
				<li v-for="(v,i) in list7">
					<router-link :to="'/details/'+v.id">
						<img :src="v.src" alt="">
						<div class="txt">
							<p>{{v.g1}}</p>
							<p>{{v.g2}}</p>
							<p>{{v.g3}}<span>{{v.g4}}</span><i><img src="../assets/images/point.png" alt="" /></i></p>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
		
	</main>
</template>

<script>
	export default{
		name:'index',
		data(){
			return{
				fixed:false,
				fixed0:false,
				fixed1:false,
				show:false,
				list1:[],
				list7:[],
				list9:[],
				list:[
					{
						txt:'热搜'
					},
					{
						txt:'日本签证'
					},
					{
						txt:'云南旅游'
					},
					{
						txt:'上海海昌海洋门票'
					}
				],
				list2:[
					{
						h4:"出境游",
						p:"出走全球"
					},
					{
						h4:"国内游",
						p:"精选路线"
					},
					{
						h4:"周边游",
						p:"乐享周末"
					},
					{
						h4:"出境购",
						p:"免税预购"
					},
					{
						h4:"签证/上网",
						p:"在线办理"
					},
					{
						h4:"用车",
						p:"领232元券"
					},
					{
						h4:"邮轮游",
						p:"在海上城堡"
					},
					{
						h4:"全部",
						p:"更多推荐"
					}
				],
				list3:[
					{
						h3:"里程抵现",
						p1:"100里程=1元",
						p2:"里程直接当钱花",
						src:require("../assets/images/licheng.jpg")
					},
					{
						h3:"新人专享",
						p1:"100元起",
						p2:"旅行红包免费领",
						src:require("../assets/images/newsper.jpg")
					},
					{
						h3:"福利中心",
						p1:"游玩出行",
						p2:"好券优惠天天送",
						src:require("../assets/images/fuli.jpg")
					}
				],
				list4:[
					{
						src:require("../assets/images/chengdu.jpg"),
						title:"成都"
					},
					{
						src:require("../assets/images/xiangg.jpg"),
						title:"香港"
					},
					{
						src:require("../assets/images/mangu.jpg"),
						title:"曼谷"
					},
					{
						src:require("../assets/images/huizhou.jpg"),
						title:"惠州"
					},
					{
						src:require("../assets/images/lijiang.jpg"),
						title:"丽江"
					}
				],
				list5:[
					{
						src:require("../assets/images/th1.jpg"),
						title:"男生最爱玩",
						dec:"热血老司机"
					},
					{
						src:require("../assets/images/th2.jpg"),
						title:"时代大氧吧",
						dec:"逃离城市去种树"
					},
					{
						src:require("../assets/images/th3.jpg"),
						title:"主题乐园控",
						dec:"刷遍全国乐园"
					},
					{
						src:require("../assets/images/th4.jpg"),
						title:"免签落地签",
						dec:"有护照就出发"
					},
					{
						src:require("../assets/images/th5.jpg"),
						title:"网红打卡地",
						dec:"抖音同款Get"
					}
				],
				list6:[
					{
						src:require("../assets/images/lv1.jpg"),
						title:"国庆出游特惠价",
						zhi:require("../assets/images/zhi.jpg"),
						dec:"378观看"
					},
					{
						src:require("../assets/images/lv2.jpg"),
						title:"你更喜欢哪个季节出游",
						zhi:require("../assets/images/zhi.jpg"),
						dec:"748观看"
					}
				],
				list8:[
					{
						src:require('../assets/images/icon1.png'),
						cont:"我的订单"
					},
					{
						src:require('../assets/images/icon2.png'),
						cont:"我的行程"
					},
					{
						src:require('../assets/images/icon3.png'),
						cont:"我的收藏"
					},
					{
						src:require('../assets/images/icon4.png'),
						cont:"我的红包"
					},
					{
						src:require('../assets/images/icon5.png'),
						cont:"会员中心"
					},
					{
						src:require('../assets/images/icon6.png'),
						cont:"购物车"
					},
					{
						src:require('../assets/images/icon7.png'),
						cont:"联系飞猪"
					}
				]
			}
		},
		mounted(){
			window.addEventListener("scroll",this.getFix);
			var _this=this;
			//默认去项目根路径寻找
			this.$http.get('./data/my.json')
			.then((response)=>{
				this.list1=response.data.pros;
				this.list7=response.data.guess;
				this.list9=response.data.carousel;
			})
		},
		methods:{
			getFix(){
				var scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
				if(scrollTop>10){
					this.fixed=true;
					this.fixed0=true;
					this.fixed1=true;
				}else{
					this.fixed=false;
					this.fixed0=false;
					this.fixed1=false;
				}
			}
		}
	}
</script>

<style>
	*{
		margin:0;
		padding: 0;
	}
	li{
		list-style: none;
	}
	a{
		text-decoration: none;
		color: rgb(51, 51, 51);
	}

	/*轮播图*/
	.zmq{
		position: relative;
	}
	.zmq:after{
		content: '';
		position: absolute;
		width: 100%;
		height: 80%;
		background: #ffb400;
		top: 0px;
	}
	.zmq .mint-swipe-items-wrap{
		width: 95%;
		padding-bottom: 30%;
		margin: 0 auto;
		border-radius: 5px;
		z-index: 2;
	}
	.zmq img{
		width: 100%;
	}
	.zmq .mint-swipe-indicators{
		left: 75%;
		z-index: 3;
	}
	.zmq .mint-swipe-indicator{
		margin: 0 2px;
		background: #fff;
		opacity: 1;
	}
	.zmq .is-active{
		background:rgb(255,201,0)
	}
</style>
<style scoped>
	/*头部*/
	.header{
		position: fixed;
		left: 0px;
		top: 0px;
		width: 100%;
		z-index: 999;
	}
	.header{
		background: #fdbf00;
		position: relative;
	}
	.logo-img{
		width: 13%;
		margin: 0 auto;
		padding: 3% 0;
	}
	.logo-img>img{
		width: 100%;
	}
	
	/* 隐藏的导航 */
	.per-img{
		position: absolute;
		right: 0px;
		top: 0px;
		width: 7%;
		padding: 2% 3%;
	}
	.fixed0{
		position: fixed;
		right: 0px;
		top: 0px;
		width: 7%;
		padding: 2% 3%;
		z-index: 9;
	}
	.per-img>img{
		width: 100%;
	}
	.hide{
		position: absolute;
		background: #FFFFFF;
		width: 35vw;
		right: 10px;
		top: 55px;
		z-index: 5;
		box-shadow: 0 0 5px 0 #ccc;
		padding: 10px;
		border-radius: 5px;
	}
	.hide:before{
		content: '';
		position: absolute;
		top: -24px;
		right: 8px;
		border: 12px solid #FFFFFF;
		border-top-color: transparent;
		border-left-color: transparent;
		border-right-color: transparent;
	}
	.hide a{
		display: inline-block;
		margin-bottom: 20px;
	}
	.hide img{
		width: 6vw;
		position: relative;
		top: 5px;
	}
	.hide span{
		color: #333333;
		font-size: 18px;
		margin-left: 10px;
	}
	/*热搜*/
	.h-list{
		padding: 10px 0;
	}
	.h-list:after{
		content: '';
		display: block;
		clear: both;
	}
	.h-list>li{
		float: left;
		background-color: rgba(225,225,225,0.3);
		border-radius: 20px;
		margin-left: 10px;
	}
	.h-list>li:first-child{
		background: transparent;
	}
	.h-list .router-link-exact-active{
		color: #fff;
		line-height: 25px;
		padding: 0 10px;
	}
	/*搜索框*/
	.text{
		width: 90%;
		height: 40px;
		background:#fff;
		margin: 0 auto;
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
	}
	.search{
		display: inline-block;
		width: 5%;
		padding: 2% 0;
		margin-left: 5%;
		position: relative;
		top: 2px;
	}
	.search>img{
		width: 100%;
	}
	input[type='text']{
		font-size: 16px;
		border:none;
		width: 80%;
		height: 38px;
		outline: none;
		position: relative;
		top: 0px;
	}
	.fixed{
		position: fixed;
		left: 20px;
		top: 10px;
		width: 80%;
	}
	.fixed1{
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		background: #fdbf00;
		height: 60px;
	}
	
	.type{
		margin: 20px auto;
	}
	.list1{
		text-align: center;
	}
	.list1>li{
		display: inline-block;
		width: 18%;
		margin-left: 6px;
	}
	.list1>li:nth-child(1){
		margin-left: 0;
	}
	.list1>li>a>img{
		width: 100%;
	}
	.list1>li>a>p{
		font-size: 16px;
	}
	
	.tour{
		width: 100%;
		margin: 0 auto;
	}
	.list2:after{
		content: '';
		display: block;
		clear: both;
	}
	.list2>li{
		text-align: center;
		float: left;
		width: 20%;
		margin-left: 4%;
		margin-bottom: 10px;
	}
	.list2>li>a>h4{
		font-weight: 100;
		color: #333333;
		font-size: 18px;
	}
	.list2>li>a>p{
		font-size: 14px;
		color: #999999;
		line-height: 30px;
	}
	
	.mymb{
		width: 95%;
		margin: 0 auto;
	}
	.mymb>a:nth-child(2){
		margin-left: 10px;
	}
	.mymb>a>span{
		font-size: 16px;
		color: #666;
	}
	.mymb>a>img{
		position: relative;
	}
	.imgone{
		width: 26%;
		top: 5px;
	}
	.imgtwo{
		width: 18%;
		top: 6px;
	}
	
	.down{
		width: 90%;
		margin: 10px auto;
		position: relative;
	}
	.down>a{
		display: block;
		width: 100%;
	}
	.down>a>img{
		width: 18%;
	}
	.go1{
		position: absolute;
		left: 70px;
		top: 5px;
		margin-left: 5px;
	}
	.go1>h3{
		color: #333333;
		font-weight: 600;
		font-size: 18px;
	}
	.go1>p{
		font-size: 16px;
		line-height: 22px;
		color: #404040;
	}
	.go2{
		position: absolute;
		background: #fdbf00;
		line-height: 30px;
		width: 20%;
		text-align: center;
		border-radius: 20px;
		right: 0px;
		top: 20px;
		font-size: 14px;
	}
	.guo{
		margin: 10px auto;
	}
	.guo>a{
		width: 100%;
	}
	.guo>a>img{
		width: 100%;
	}
	
	.one{
		width: 100%;
		margin: 0 auto;
		text-align: center;
	}
	.one:after{
		content: '';
		display: block;
		clear: both;
	}
	.one>a{
		float: left;
		width: 33.3%;
	}
	.one>a>h3{
		font-size: 18px;
		line-height: 30px;
	}
	.one>a>p{
		font-size: 14px;
		color: #333333;
		line-height: 22px;
	}
	.one>a>img{
		width: 100%;
		margin-top: 10px;
	}

	.two{
		width: 90%;
		margin: 20px auto;
	}
	.two:after{
		content: '';
		display: block;
		clear: both;
	}
	.two a{
		display: inline-block;
	}
	.two>.left{
		width: 50%;
		height: 240px;
		background: url('../assets/images/back1.jpg');
		float: left;
		background-size: cover;
		background-position: center center;
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
	}
	.two>.left>div>img{
		width: 40%;
		margin: 5%;
	}
	.two>.left>div>div{
		float: right;
	}
	.left>div>.time>p{
		color: rgb(255,201,0);
		font-weight: bold;
		position: relative;
		left: -10px;
		margin: 5%;
	}
	.left .time>.p1{
		font-size: 16px;
	}
	.left .time>.p2{
		font-size: 12px;
	}
	.left>div>p{
		font-size: 16px;
		color: #fff;
		font-weight: bold;
		margin: 5%;
	}
	.left>div>.hao{
		width: 45%;
		background: rgb(255,201,0);
		color: #000000;
		border-radius: 10px;
		font-size: 14px;
		text-align: center;
		line-height: 25px;
	}
	.left>div>.hao>span{
		font-size: 12px;
	}
	.right{
		width: 50%;
		float: right;
	}
	.right>.top{
		background-image: url('../assets/images/back2.jpg');
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;
		width: 100%;
		height: 120px;
		border-top-right-radius: 10px;
	}
	.right>.top>a>img{
		width: 50%;
		margin: 5%;
	}
	.top>a>.addr{
		font-size: 0.8rem;
		margin: 0 5% 5%;
		font-weight: 600;
	}
	.top>a>.addr>img{
		width: 15%;
	}
	.top>a>.addr>span{
		color: #666;
		font-size: 0.5rem;
	}
	.top>a>.price,.bottom>a>.price{
		background: #ff5000;
		border-radius: 7px;
		font-size: 0.7rem;
		color: #fff;
		width: 80%;
		line-height: 25px;
		margin: 5%;
		text-align: center;
	}
	.top>a>.price>span,.top>a>.price>span{
		font-size: 0.5rem;
	}
	.right>.bottom{
		background: url('../assets/images/back3.jpg');
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;
		width: 100%;
		height: 120px;
		border-bottom-right-radius: 10px;
	}
	.bottom>a>.addr{
		color: #fff;
		font-size: 0.8rem;
		margin:5%;
		font-weight: 600;
	}
	
	/* 当季旅行地 */
	.location,.theme,.zhi,.guess{
		position: relative;
		width: 90%;
		margin: 10px auto;
		overflow: hidden;
	}
	.location>div{
		overflow: scroll;
	}
	.location>h2,.theme>h2,.zhi>h2,.guess>h2{
		color: rgb(68, 68, 68);
		font-weight: 600;
		font-size: 1.5rem;
		width: 50%;
	}
	.location>a,.theme>a,.zhi>a,.guess>a{
		font-size: 16px;
		font-weight: 300;
		color: rgb(102, 102, 102);
		width: 35%;
		position: absolute;
		right: 0px;
		top: 10px;
	}
	.location:after{
		content: '';
		display: block;
		clear: both;
	}
	.location ul{
		width: 200%;
		margin: 10px 0;
	}
	.location ul li{
		width: 15%;
		float: left;
		margin-left: 1%;
		position: relative;
	}
	.location ul li:nth-child(1){
		margin-left: 0;
	}
	.location ul li img{
		width: 100%;
		border-radius: 10px;
	}
	.location ul li p{
		position: absolute;
		bottom: 20px;
		color: #fff;
		font-weight: bold;
		left: 30px;
	}
	/* 旅行主题 */
	.theme>a{
		width: 40%;
	}
	.theme a{
		display: block;
	}
	.theme ul,.zhi ul{
		margin: 10px 0;
	}
	.theme ul:after{
		content: '';
		display: block;
		clear: both;
	}
	.theme ul li:nth-child(1){
		width: 65%;
		margin-left: 0;
	}
	.theme ul li{
		float: left;
		width: 30%;
		margin-left: 10px;
		position: relative;
	}
	.theme ul li>a>img{
		width: 100%;
		height: 40vw;
		border-radius: 10px;
	}
	.theme ul li:nth-child(2) img{
		/* padding-bottom: 20%; */
	}
	.theme .txt{
		position: absolute;
		bottom: 15px;
		left: 10px;
		color: #fff;
	}
	.theme .txt h3{
		font-size: 18px;
	}
	.theme .txt p{
		font-size: 16px;
		line-height: 30px;
	}
	
	/* 旅行直播 */
	.zhi a{
		display: inline-block;
	}
	.zhi ul li{
		width: 50%;
		float: left;
		text-align: center;
		position: relative;
	}
	.zhi ul li img{
		width: 98%;
	}
	.zhi .txt{
		position: absolute;
		bottom: 15px;
		color: #fff;
		left: 10px;
		text-align: left;
	}
	.zhi .txt h3{
		font-size: 16px;
		line-height: 23px;
	}
	.zhi .txt img{
		width: 50%;
		position: relative;
		top: 2px;
	}
	.zhi .txt p{
		text-align: left;
		width: 80%;
		line-height: 20px;
		font-size: 14px;
		background:rgb(0,0,0,0.6);
		border-radius: 10px;
	}
	/* 猜你喜欢 */
	.guess>a{
		width: 36%;
		display: inline-block;
	}
	.guess ul{
		margin-top: 10px;
	}
	.guess ul:after{
		content: '';
		display: block;
		clear: both;
	}
	.guess ul li{
		float: left;
		width: 50%;
		text-align: center;
		margin-bottom: 10px;
	}
	.guess ul li a>img{
		width: 98%;
		height: 45vw;
		border-radius: 10px;
	}
	.guess .txt{
		text-align: left;
		width: 90%;
		margin: 10px auto;
	}
	.guess .txt p:nth-child(1){
		font-size: 14px;
		color: #406196;
		font-weight: bold;
		margin-bottom: 8px;
	}
	.guess .txt p:nth-child(2){
		text-overflow: ellipsis;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		font-size: 15px;
		font-weight: bold;
		line-height: 22px;
		margin-bottom: 20px;
	}
	.guess .txt p:nth-child(3){
		color: red;
		font-size: 20px;
		position: relative;
	}
	.guess .txt span{
		font-size: 14px;
		color: #999999;
		padding: 0 2%;
	}
	.guess .txt i{
		position: absolute;
		right: 0;
		bottom: 3%;
	}
	.guess .txt i img{
		width: 60%;
		position: relative;
		top: -3px;
	}
	
	
	
</style>