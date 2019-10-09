<template id="search">
	<main @click="show=false">
		<div class="search">
			<input type="search" placeholder="云南旅游" @focus="change()" @blur="change1()">
			<p v-show="num==1">取消</p>
			<div>
				<span @click.stop="show=!show" v-show="zmq">...</span>
				<!-- 隐藏的导航 -->
				<div class="hide" v-show="show">
					<img src="../assets/images/jiao.png" alt="" class="jiao"/>
					<ul>
						<li v-for="(v,i) in list2">
							<router-link to="">
								<img :src="v.src" alt="">
								<span>{{v.cont}}</span>
							</router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="sou">
			<p>搜索-发现</p>
			<ul class="oneul">
				<li v-for="(v,i) in list">
					<router-link to="">
						<img :src="v.src" alt="">
						<span>{{v.dec}}</span>
					</router-link>
				</li>
			</ul>
			<ul class="twoul">
				<li v-for="(v,i) in list1">
					<router-link to="">
						<p>{{v.cont}}</p>
					</router-link>
				</li>
			</ul>
		</div>
	</main>
</template>

<script>
	export default{
		name:'search',
		data(){
			return{
				show:false,
				num:0,
				zmq:true,
				list:[
					{
						src:require('../assets/images/one.png'),
						dec:"酒店"
					},
					{
						src:require('../assets/images/two.png'),
						dec:"火车票"
					},
					{
						src:require('../assets/images/three.png'),
						dec:"机票"
					},
					{
						src:require('../assets/images/four.png'),
						dec:"汽车票"
					}
				],
				list1:[],
				list2:[
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
						src:require('../assets/images/icon6.png'),
						cont:"购物车"
					}
				]
			}
		},
		mounted(){
			var _this=this;
			//默认去项目根路径寻找
			this.$http.get('./data/addr.json')
			.then((response)=>{
				this.list1=response.data.addr;
			})
		},
		methods:{
			change(){
				this.num=1;
				this.zmq=false;
			},
			change1(){
				this.num=0;
				this.zmq=true;
			}
		}
	}
</script>

<style scoped>
	a{
		text-decoration: none;
		color: rgb(51, 51, 51);
	}
	main{
		height: 100vh;
	}
	.search{
		position: relative;
	}
	.search input{
		margin: 10px 0 10px 10px;
		width: 85%;
		height: 30px;
		background:#F1F1F1;
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		padding: 5%;
		border: none;
	}
	.search p{
		position: absolute;
		right: 20px;
		bottom: 52%;
		font-size: 0.8rem;
	}
	
	.sou>p{
		font-weight: bold;
		font-size: 1rem;
		padding-left: 5%;
		margin-bottom: 20px;
	}
	
	/* 隐藏的导航 */
	.search>div>span{
		position: absolute;
		right: 20px;
		bottom: 50%;
		font-size: 2rem;
		color: #666666;
	}
	.search>div>img{
		width: 100%;
	}
	.hide{
		position: absolute;
		background: #FFFFFF;
		width: 30vw;
		right: 10px;
		top: 80%;
		z-index: 5;
		box-shadow: 0 0 5px 0 #ccc;
		padding: 10px;
		border-radius: 5px;
	}
	.hide .jiao{
		display: flex;
	    width: 20px;
	    height: 10px;
	    position: absolute;
	    top: -10px;
	    opacity: 1;
	    right: 8px;
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
		font-size: 15px;
		margin-left: 10px;
		
	}
	
	.oneul{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		text-align: center;
		margin-left: 20px;
	}
	.oneul img{
		width: 20%;
		position: relative;
		top: 3px;
	}
	.oneul span{
		font-size: 16px;
	}
	.twoul{
		display: flex;
		flex-wrap: wrap;
		margin-left: 20px;
	}
	.twoul li a{
		display: inline-block;
	}
	.oneul li,.twoul li{
		background: #f1f1f1;
		border-radius: 5px;
		padding: 0 5px;
		line-height: 40px;
		margin-right: 10px;
		margin-bottom: 10px;
	}
</style>
