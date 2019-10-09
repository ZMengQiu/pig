<template id="ticket">
	<main>
		<div class="top">
			<img src="../assets/images/train.png" alt="">
			<div class="box">
				<mt-navbar v-model="selected">
				  <mt-tab-item id="1"><span class="yes">单程</span></mt-tab-item>
				  <div  @click="add()" class="add">
				  	 <mt-tab-item id="2"><span class="yes">往返</span></mt-tab-item>
				  </div>
				  <mt-tab-item id="3"><span class="yes">跨境多程</span></mt-tab-item>
				</mt-navbar>
				<!-- tab-container -->
				<mt-tab-container v-model="selected">
					<mt-tab-container-item id="1">
						<div class="bei">
							<div class="from">
								<router-link to="/city">
									<span>{{this.$store.state.city}}</span>
								</router-link>
							</div>
							<div class="fly">
								<img src="../assets/images/bluefly.png" alt="">
							</div>
							<div class="to">
								<router-link to="/city0">
									<span>{{this.$store.state.city0}}</span>
								</router-link>
							</div>
						</div>
						<div class="time">
							<p>
								<span>09月28日</span>
								<sup>明天</sup>
							</p>
							<span><img src="../assets/images/right.png"/></span>
						</div>
						<div class="check">
							<div class="tong">
								<input type="checkbox" :class="{check0:check0}" @click="check()">
								<p>携带儿童<span> 2-12岁</span></p>
							</div>
							<div class="ying">
								<input type="checkbox" :class="{check1:check1}" @click="newcheck()">
								<p>携带婴儿<span> 14天-2岁</span></p>
							</div>
						</div>
						<input type="submit" value="搜索机票">
					</mt-tab-container-item>
					
					<mt-tab-container-item id="2">
						<div class="bei">
							<div class="from">
								<span>{{msg}}</span>
							</div>
							<div class="fly">
								<img src="../assets/images/bluefly.png" alt="">
							</div>
							<div class="to">
								<span>{{msg0}}</span>
							</div>
						</div>
						<div class="time">
							<p>
								<span>09月28日</span>
								<sup>明天</sup>
								<span class="br"><img src="../assets/images/right.png"/></span>
							</p>
							<p>
								<span>10月01日</span>
								<sup>周二</sup>
								<span class="br"><img src="../assets/images/right.png"/></span>
							</p>
						</div>
						<div class="check">
							<div class="tong">
								<input type="checkbox" :class="{check0:check0}" @click="check()">
								<p>携带儿童<span> 2-12岁</span></p>
							</div>
							<div class="ying">
								<input type="checkbox" :class="{check1:check1}" @click="newcheck()">
								<p>携带婴儿<span> 14天-2岁</span></p>
							</div>
						</div>
						<input type="submit" value="搜索机票">
					</mt-tab-container-item>
				  
					<mt-tab-container-item id="3">
						<div class="bei">
							<label for="">2</label>
							<div class="from">
								<router-link to="/city">
									<span>{{this.$store.state.city}}</span>
								</router-link>
							</div>
							<div class="fly">
								<img src="../assets/images/bluefly.png" alt="">
							</div>
							<div class="to">
								<router-link to="/city0">
									<span>{{this.$store.state.city0}}</span>
								</router-link>
							</div>
						</div>
						<div class="time">
							<p>
								<span>09月28日</span>
								<sup>明天</sup>
							</p>
							<span><img src="../assets/images/right.png"/></span>
						</div>
						
						<div class="bei">
							<label for="">1</label>
							<div class="from">
								<router-link to="/city">
									<span>{{this.$store.state.city}}</span>
								</router-link>
							</div>
							<div class="fly">
								<img src="../assets/images/bluefly.png" alt="">
							</div>
							<div class="to">
								<router-link to="/city0">
									<span>{{this.$store.state.city0}}</span>
								</router-link>
							</div>
						</div>
						<div class="time">
							<p>
								<span>10月01日</span>
								<sup>周二</sup>
							</p>
							<span><img src="../assets/images/right.png"/></span>
						</div>
						
						<div class="bei">
							<label for="">+</label>
							<div class="from wu1">
								<span class="zai">再加一程</span>
							</div>
							<div class="to wu2">
								<span class="qing">请至少选择一个国际/中共港澳台城市</span>
							</div>
						</div>
						<div class="time">
							<p>
								<span>不限仓位</span>
								<span class="bu"><img src="../assets/images/right.png"/></span>
							</p>
							<p>
								<span>1成年</span>
								<span>0儿童</span>
								<span>0婴儿</span>
								<span class="yi"><img src="../assets/images/right.png"/></span>
							</p>
						</div>
						<input type="submit" value="搜索机票">
					</mt-tab-container-item>
				</mt-tab-container>
				
				<mt-tab-container v-model="active">
				  <mt-tab-container-item id="tab-container1">
				    <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>
				  </mt-tab-container-item>
				  <mt-tab-container-item id="tab-container2">
				    <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
				  </mt-tab-container-item>
				  <mt-tab-container-item id="tab-container3">
				    <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
				  </mt-tab-container-item>
				</mt-tab-container>
			</div>
			<!-- 轮播图 -->
			<mt-swipe :auto="4000" class="zmq0">
			  <mt-swipe-item v-for="(v,i) in list">
				  <router-link to="">
					  <img :src="v.src" alt="">
				  </router-link>
			  </mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="cheap">
			<h1>特价机票</h1>
			<router-link to="">更多特价&gt;</router-link>
			<div class="all">
				<div class="all0">
					<div class="left">
						<router-link to="" v-for="(v,i) in list1">
							<span>{{v.addr1}}</span>
							<img :src="v.src" alt="">
							<span>{{v.addr2}}</span>
							<div class="price">
								<span>{{v.price}}</span>
								<span>{{v.dec}}</span>
							</div>
						</router-link>
					</div>
					<div class="middle">
						<router-link to="" v-for="(v,i) in list2">
							<span>{{v.addr1}}</span>
							<img :src="v.src" alt="">
							<span>{{v.addr2}}</span>
							<div class="price">
								<span>{{v.price}}</span>
								<span>{{v.dec}}</span>
							</div>
						</router-link>
					</div>
					<div class="right">
						
					</div>
				</div>
			</div>
		</div>
		<div class="footer"></div>
		<div class="fixed">
			<mt-tabbar v-model="selected0">
			  <mt-tab-item id="外卖">
			    <img slot="icon" src="../assets/images/icon7.png">
			    联系飞猪
			  </mt-tab-item>
			  <mt-tab-item id="订单">
			    <img slot="icon" src="../assets/images/icon8.png">
			    我的收藏
			  </mt-tab-item>
			  <mt-tab-item id="发现">
			    <img slot="icon" src="../assets/images/icon9.png">
			    订单-退改签-报销
			  </mt-tab-item>
			</mt-tabbar>
		</div>
		
	</main>
</template>

<script>
	export default{
		name:'ticket',
		data(){
			return{
				check0:false,
				check1:false,
				list:[],
				list1:[],
				list2:[],
				selected:'1',
				selected0:'',
				active:'',
				msg:'广州',
				msg0:'北京'
			}
		},
		mounted(){
			var _this=this;
			//默认去项目根路径寻找
			this.$http.get('./data/ticket.json')
			.then((response)=>{
				this.list=response.data.ticket;
				this.list1=response.data.cheap;
				this.list2=response.data.cheap1;
			})
		},
		methods:{
			add(){
				this.msg=this.$store.state.city0
				this.msg0=this.$store.state.city
			},
			check(){
				this.check0=!this.check0
			},
			newcheck(){
				this.check1=!this.check1
			}
		}
	}
</script>

<style>
	a{
		text-decoration: none;
		color: #000000;
	}
	/*轮播图*/
	.zmq0{
		position: relative;
		margin: 20px auto;
	}
	.zmq0 .mint-swipe-items-wrap{
		width: 95%;
		padding-bottom: 22%;
		margin: 0 auto;
		border-radius: 5px;
	}
	.zmq0 img{
		width: 100%;
	}
	.zmq0 .mint-swipe-indicators{
		z-index: 2;
	}
	.zmq0 .mint-swipe-indicator{
		margin: 0 2px;
		background: #fff;
		opacity: 1;
	}
	.zmq0 .is-active{
		background:rgb(255,201,0);
	}
</style>
<style scoped>
	.yes{
		font-size: 18px;
	}
	.mint-tab-container{
		margin-top: 20px;
	}
	.mint-navbar .mint-tab-item.is-selected{
		border-bottom: 5px solid #ffe758;
		color: #000000;
		background: #FFFFFF;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
	}
	.mint-tab-container-wrap{
		width: 90%;
		margin: 0 auto;
		padding-top: 20px;
	}
	.top{
		position: relative;
		padding-top: 20px;
	}
	.top>img{
		position: absolute;
		width: 100%;
		height: auto;
		left: 0;
		top: 0;
	}
	.box{
		background-color: #FFFFFF;
		width: 95%;
		margin:0px auto;
		border-radius: 10px;
		position: relative;
		padding-bottom: 20px;
	}
	.top .mint-navbar{
		background:#f2f3f5;
		display: flex;
		justify-content: space-around;
		line-height: 50px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		
	}
	.add{
		width: 30%;
	}
		
	/* 特价机票 */
	.cheap{
		width: 95%;
		margin: 20px auto;
		position: relative;
	}
	.cheap h1{
		font-size: 1.5rem;
		font-weight: 400;
		margin-bottom: 20px;
	}
	.cheap .all{
		overflow: auto;
	}
	.cheap .all0{
		display: flex;
		width: 200%;
	}
	.cheap .left,.cheap .middle{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.cheap .left a,.cheap .middle a{
		width: 50%;
	}
	.cheap>a{
		display: inline-block;
		position: absolute;
		right: 0;
		top: 1%;
		color: #87d3ff;
	}
	.cheap .price{
		margin: 20px auto;
		color: #ff6b28;
	}
	.cheap .price span:nth-child(2){
		font-size: 12px;
		border: 1px solid #CCCCCC;
	}
	.footer{
		background: url('../assets/images/footer.png') center 20px no-repeat;
		background-size: auto 50px;
		height: 91px;
	}
	/* 固定导航栏 */
	.fixed{
		height: 100px;
	}
	.mint-tabbar{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: auto;
	}
	
	.bei{
		display: flex;
		border-bottom: 1px solid rgba(0,0,0,0.05);
		padding-bottom: 10px;
	}
	.from,.fly,.to{
		width: 33%;
		font-size: 1.2rem;
		line-height: 30px;
	}
	.from{
		text-align: center;
	}
	.from span,.to span{
		color: #333333;
		font-size: 25px;
		font-weight: 500;
	}
	.fly{
		text-align: center;
		background-image: url('../assets/images/circle.png');
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
	}
	.to{
		text-align: center;
	}
	.fly>img{
		width: 20%;
		position: relative;
		top: 3px;
	}
	
	.time{
		margin: 20px auto;
		display: flex;
		justify-content: space-between;
		line-height: 30px;
		border-bottom: 1px solid rgba(0,0,0,0.05);
		padding: 0 15px 15px 10px;
	}
	.time img{
		width: 60%;
	}
	.br>img{
		width: 6%;
		margin-left: 5px;
		position: relative;
		top: 1px;
	}
	
	.check{
		font-size: 18px;
		display: flex;
		justify-content: space-between;
		padding: 0 15px 15px 10px;
	}
	.check p{
		display: inline-block;
	}
	.check span{
		color: #666666;
		font-size: 14px;
	}
	input[type='checkbox']{
		width: 20px;
		height: 20px;
		display: inline-block;
		outline: 0;
	    border: 1px solid #e1e1e1;
	    border-radius: 2px;
	    -webkit-appearance: none;
	    margin: 0;
	    padding: 0;
	    position: relative;
	    top: 2px;
	}
	.check0{
		background: url('../assets/images/gou.png') 50% no-repeat;
		background-size: 100% 100%;
    	border: none;
	}
	.check1{
		background: url('../assets/images/gou.png') 50% no-repeat;
		background-size: 100% 100%;
    	border: none;
	}
	input[type='submit']{
		width: 95%;
		margin-top: 20px;
		background: #ffdd00;
		font-size: 1.2rem;
		line-height: 50px;
		border: none;
		border-radius: 30px;
	}
	.wu1{
		width: 20%;
	}
	.wu2{
		width: 80%;
	}
	.from .zai{
		font-size: 18px;
	}
	.to .qing{
		font-size: 14px;
		color: #47bcff;
	}
	.bu>img{
		width: 10%;
		position: relative;
		top: 2px;
		margin-left: 5px;
	}
	.yi>img{
		width: 6%;
		position: relative;
		top: 2px;
		margin-left: 5px;
	}
	label{
		margin-top: .4rem;
		    margin-right: .6rem;
		    display: inline-block;
		    text-align: center;
		    height: 20px;
		    width: 20px;
		    line-height: 1rem;
		    color: #3d3d3d;
		    font-size: 1rem;
		    border: none;
		    background-color: #fd0;
		    border-bottom-right-radius: 5px;
		}
	
</style>
