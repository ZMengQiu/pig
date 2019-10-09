<template id="fined">
	<main>
		<div class="top">
			<!-- 背景切换 -->
			<img :src="v.back" alt=""  v-for="(v,i) in list1" v-show="num==i">
			<img src="../assets/images/ban.jpg" class="ban"/>
				
			<!-- </swiper> -->
			<!-- 搜索框 -->
			<div class="text">
				<router-link to="/search">
					<span class="search">
						<img src="../assets/images/search.png" alt="">
					</span>
					<input type="search" placeholder="搜索你要寻找的旅行好货">
				</router-link>
			</div>
			<!-- 轮播图 -->
			<!-- {{swiperOption.coverflowEffect.realIndex}} -->
			<swiper :options="swiperOption">
				<swiper-slide v-for="(v,i) in list1">
					<router-link to="">
						<img :src="v.back" alt="">
						<div class="one">
							<p class="img1"><img :src="v.src" alt=""></p>
							<p class="img2">
								<img :src="v.val" alt="">
								<img :src="v.num0" alt="">
								<img :src="v.num1" alt="">
							</p>
						</div>
						<div class="two">
							<h2>{{v.title}}</h2>
							<p class="pone">
								<span>{{v.p1}}</span>
								<span>{{v.p2}}</span>
							</p>
							<p class="ptwo">
								<span>{{v.p3}}</span>
								<span>{{v.p4}}</span>
							</p>
						</div>
					</router-link>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
		<div class="play">
			<ul>
				<li v-for="(v,i) in list">
					<router-link to="">
						<div class="left">
							<img :src="v.src" alt="">
						</div>
						<div class="right">
							<div class="top">
								<sup><img :src="v.sup" alt=""></sup>
								<h3>{{v.title}}</h3>
							</div>
							<p class="dec">{{v.dec}}</p>
							<div class="bottom">
								<img :src="v.fei" alt="">
								<span>{{v.count}}</span>
								<img :src="v.point" alt="" class="point">
							</div>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
	</main>
</template>

<script>
	export default{
		name:'fined',
		data(){
			var a=this;
			return{
				list:[],
				list1:[],
				num:0,
				swiperOption: {
					effect: 'coverflow',
					grabCursor: true,
					centeredSlides: true,
					slidesPerView: 'auto',
					coverflowEffect: {
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows : true,
					},
					on:{
						// var _this=this;
						transitionEnd:function(swiper){
						console.log(this.realIndex);
						a.num=this.realIndex;
					    }
					},
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					}
				}
			}
		},
		mounted() {
			console.log(this.swiperOption)
			var _this=this;
			//默认去项目根路径寻找
			this.$http.get('./data/fined.json')
			.then((response)=>{
				this.list=response.data.fined;
				this.list1=response.data.carousel;
			})
		}
	}
</script>

<style scoped="scoped">
	/* 背景轮播 */
	.top{
		position: relative;
		overflow: hidden;
	}
	.top>img{
		position: absolute;
		width: 100%;
	}
	/*搜索框*/
	.text{
		width: 90%;
		background:#FFFFFF;
		margin: 20px auto;
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		position: relative;
		z-index: 1;
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
	input[type='search']{
		border:none;
		width: 80%;
		outline: none;
		position: relative;
		top: -3px;
		font-size: 15px;
	}
	/*半圆*/
	.ban{
		display: flex;
	    width: 414px;
	    height: 33.12px;
	    position: absolute;
	    bottom: 0px;
	}
	/* 轮播图 */
	.swiper-slide{
		position: relative;
	}
	.swiper-slide img{
		width: 100%;
		border-radius: 10px;
	}
	.swiper-inner {
	    width: 100%;
	    height: 400px;
	    padding-top: 50px;
	    padding-bottom: 50px;
	 }
	.swiper-slide {
	    background-position: center;
	    background-size: cover;
	    width: 300px;
	    height: 300px;
	  }
	.swiper-slide .one{
	  	position: absolute;
	  	top: 0px;
	  	margin: 20px;
	  }
	.swiper-slide .img1 img{
	  	width: 30%;
	  }
	.swiper-slide .img2 img:nth-child(1){
	  	width: 35%;
	 }
	 .swiper-slide .img2 img:nth-child(2),.swiper-slide .img2 img:nth-child(3){
	  	width: 15%;
	}
	.swiper-slide .two{
		position: absolute;
		bottom: 0px;
		margin: 20px;
		color: #FFFFFF;
	}
	.two h2{
		line-height: 50px;
		font-size: 1.5rem;
	}
	.two .pone{
		margin-bottom: 20px;
	}
	.two .ptwo span{
		font-size: 13px;
		background: rgba(0,0,0,0.5);
		padding: 1% 2%;
	}
	/* 列表 */
	.play{
		width: 95%;
		margin: 0 auto;
	}
	.play a{
		display: inline-block;
		overflow: hidden;
		margin: 20px auto;
		height: 40vw;
	}
	.play .left{
		width: 40%;
		float: left;
	}
	.play .left img{
		width: 100%;
		border-radius: 10px;
	}
	.play .right{
		width: 58%;
		margin-left: 2%;
		float: right;
		color: #666666;
	}
	.right>.dec{
		font-size: 14px;
		line-height: 20px;
		text-overflow: ellipsis;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.right .top{
		margin-bottom: 10px;
	}
	.top:after{
		content: '';
		display: inline-block;
		clear: both;
	}
	.top sup{
		float: left;
		width: 20%;
	}
	.right sup img{
		width: 100%;
	}
	.top h3{
		float: right;
		width: 78%;
		padding-left: 2%;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		color: #000000;
		font-weight: 400;
	}
	.bottom{
		position: relative;
		margin-top: 30px;
	}
	.bottom>img{
		width: 10%;
		position: relative;
		top: 3px;
	}
	.bottom>span{
		color: #fdc65d;
		font-size: 14px;
	}
	.bottom .point{
		position: absolute;
		right: 0;
		top: 15px;
	}
</style>
