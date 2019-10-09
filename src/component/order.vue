<template>
	<main>
		<p class="top">填写订单</p>
		<div class="one">
			<h2>【早晚餐套票】从化都喜泰丽温泉酒店别墅 近碧泉空中碧水湾 从都</h2>
			<div>
				<span>套餐类型:</span>
				<span>至尊湖景大</span>
			</div>
			<div>
				<span>出游人群:</span>
				<span>成人</span>
			</div>
			<div>
				<span>出行日期</span>
				<span>2019-10-31</span>
				<span>预订须知&gt;</span>
			</div>
		</div>
		
		<!--确认-->
		<div class="two">
			<p>
				<span>【此商品需二次确认】</span>
				付款后卖家将在2个工作小时内（工作日9：00-18：00）核实是否有位，若核实无位或超时未确认，将自动退款
			</p>
		</div>
		
		<!--购买数量-->
		<div class="three">
			<h2>购买数量</h2>
			<div>
				<div class="left">成人</div>
				<div class="right">
					<div>
						<span class="sub" @click="sub()">-</span>
						<span class="num">{{num}}</span>
						<span class="add" @click="add()">+</span>
					</div>
					<div>
						<span>单价：</span>
						<span>￥{{one}}</span>
					</div>
				</div>
			</div>
		</div>
		
		<!--出行人-->
		<div class="four">
			<h2>出行人</h2>
			<div>
				<div>出行人</div>
				<div>添加<span>1位</span>出行人</div>
				<div>选择出行人</div>
			</div>
		</div>
		
		<!--买家留言-->
		<div class="five">
			<label for="txt">买家留言</label>
			<input type="text" name="txt" id="txt" value="" placeholder="选填，请先和商家协商一致"/>
		</div>
		
		<!--联系人-->
		<div class="six">
			<h2>联系人</h2>
			<div>
				<span>姓名</span>
				<input type="text" value="张三"></input>
				<span><img src="../assets/images/zs.png" alt="" /></span>
			</div>
			<div>
				<span>手机号</span>
				<input type="text" value="12345678910"></input>
			</div>
		</div>
		
		<!--出行保障-->
		<div class="seven">
			<h2>出行保障</h2>
			<p>若因计划有变取消出游最多会损失￥1694.0，购买无忧取消服务，最高可获取100%损失补偿！</p>
		</div>
		
		<!--取消险-->
		<p class="gray">取消险</p>
		<div class="eight">
			<div>取消出游损失补偿服务<img src="../assets/images/tan.png" alt="" /></div>
			<div>
				<span>非自身原因取消出游损失额补偿-100%</span>
			</div>
			<span>￥{{money0}}/份×1</span>
			<span :class="{sure0:sure0,sure:sure}" @click="zmq()"></span>
			<div>自身原因取消出游损失金额补偿-80%</div>
		</div>
		
		<!--旅游意外险-->
		<p class="gray">旅游意外险</p>
		<div class="nine">
			<div>泰康·国内旅游险_93万保障<img src="../assets/images/tan.png" alt="" /></div>
			<div>
				<span>现金损失</span>
				<span>航班延误</span>
				<span>突发疾病</span>
			</div>
			<span>￥{{money1}}/份起</span>
			<span :class="{sure1:sure1,sure2:sure2}" @click="zmq0()"></span>
		</div>
		
		<!--优惠-->
		<div class="ten">
			<h2>优惠</h2>
			<div class="one0">
				<span>红包抵扣</span>
				<span>红包抵扣￥2 <img src="../assets/images/tan.png" alt="" /></span>
				<!--开关-->
				<div class="switch" @click="change()" :class="{core:core}">
					<span class="before" :class="{core0:core0}"></span>
					<span class="after" :class="{core1:core1}"></span>
				</div>
			</div>
			<div class="two0">
				<span>里程底线</span>
				<span>不使用里程</span>
				<span class="rrr"><img src="../assets/images/right.png" alt="" /></span>
			</div>
		</div>
		
		<!--赠品-->
		<div class="eleven">
			<h2>赠品</h2>
			<div>
				<p>赠品</p>
				<p>本次购买可获得<span>848</span>里程</p>
				<p class="rrr"><img src="../assets/images/right.png" alt="" /></p>
			</div>
		</div>
		
		<!--花呗分期-->
		<div class="twelve">
			<h2>花呗分期</h2>
			<p>当前可用分期额度(￥1500.00)不足，不能使用分期</p>
		</div>
		<div class="bottom0">
			<p><img src="../assets/images/ht.png"/>请您仔细阅读<span>预订须知</span>,点击去付款即代表您已阅读并同意条款内容。</p>
			<div>
				<p>更多服务 为您保障</p>
				<div>
					<span>更改则赔付</span>
					<span>承诺不加价</span>
					<span>取消则赔付</span>
				</div>
			</div>
		</div>
		<div class="fixed">
			<div class="price1">
				<span>￥</span>
				<span class="total">{{total}}</span>
				<del v-show="del">￥{{total0}}</del>
				<p v-show="show">已优惠￥2</p>
			</div>
			<div class="price2">
				<span @click="fade()">明细<img src="../assets/images/xia.png" alt="" :class="{circle:circle}"/></span>
			</div>
			<div class="price3" @click="go()">
				去付款
			</div>
		</div>
		
		<!-- 费用明细 -->
		<div class="back" v-show="v" @click="v=false">
			<div class="pay" @click.stop="">
				<p>费用明细</p>
				<div>
					<span>成人</span>
					<span>￥1696.00x1人</span>
				</div>
				<div v-show="xian1">
					<span>取消出游损失补偿服务</span>
					<span>+￥67.84</span>
				</div>
				<div v-show="xian2">
					<span>泰康·国内旅游险_93万保障</span>
					<span>+￥26</span>
				</div>
				<div v-show="s">
					<span>红包抵扣</span>
					<span>-￥2.00</span>
				</div>
			</div>
		</div>
		
	</main>
</template>

<script>
	export default{
		data(){
			return{
				core:false,
				core0:false,
				core1:false,
				v:false,
				s:false,
				circle:false,
				sure:false,
				sure0:true,
				sure1:true,
				sure2:false,
				show:false,
				del:false,
				xian1:false,
				xian2:false,
				num:1,
				one:1696.00,
				total:1696.00,
				total0:1696.00,//商品总价
				totalNum:0,//商品总数量
				money0:67.84,
				money1:26.00
			}
		},
		methods:{
			sub(n){
				if(this.num>1){
					this.num--;
					this.total=this.one*this.num;
					this.total0=this.one*this.num;
					if(this.sure==true && this.sure2==false){
						this.total=this.one*this.num+this.money0;
						this.total0=this.one*this.num+this.money0;
					}
					if(this.sure2==true && this.sure==false){
						this.total=this.one*this.num+this.money1;
						this.total0=this.one*this.num+this.money1;
					}
					if(this.sure2==true && this.sure==true){
						this.total=this.one*this.num+this.money1+this.money0;
						this.total0=this.one*this.num+this.money1+this.money0;
					}
					if(this.show==true && this.sure==false && this.sure2==false){
						this.total=his.one*this.num-2;
						this.total0=his.one*this.num;
					}
					if(this.show==true && this.sure==true && this.sure2==false){
						this.total=this.one*this.num+this.money0-2;
						this.total0=this.one*this.num+this.money0;
					}
					if(this.show==true && this.sure==false && this.sure2==true){
						this.total=this.one*this.num+this.money1-2;
						this.total0=this.one*this.num+this.money1;
					}
					if(this.show==true && this.sure==true && this.sure2==true){
						this.total=this.one*this.num+this.money1+this.money0-2;
						this.total0=this.one*this.num+this.money1+this.money0;
					}
				}else{
					this.num=1;
					this.total=this.one*this.num;
					this.total0=this.one*this.num;
					if(this.sure==true && this.sure2==false){
						this.total=this.one*this.num+this.money0;
						this.total0=this.one*this.num+this.money0;
					}
					if(this.sure2==true && this.sure==false){
						this.total=this.one*this.num+this.money1;
						this.total0=this.one*this.num+this.money1;
					}
					if(this.sure2==true && this.sure==true){
						this.total=this.one*this.num+this.money1+this.money0;
						this.total0=this.one*this.num+this.money1+this.money0;
					}
				}
			},
			add(n){
				this.num++;
				this.total=this.one*this.num;
				this.total0=this.one*this.num;
				if(this.sure==true && this.sure2==false){
					this.total=this.one*this.num+this.money0;
					this.total0=this.one*this.num+this.money0;
				}
				if(this.sure2==true && this.sure==false){
					this.total=this.one*this.num+this.money1;
					this.total0=this.one*this.num+this.money1;
				}
				if(this.sure2==true && this.sure==true){
					this.total=this.one*this.num+this.money1+this.money0;
					this.total0=this.one*this.num+this.money1+this.money0;
				}
			},
			change(){
				this.show=!this.show;
				this.core=!this.core;
				this.core0=!this.core0;
				this.core1=!this.core1;
				this.s=!this.s;
				this.del=!this.del;
				if(this.show==true){
					this.total=this.total-2;
				}else{
					this.total=this.total+2;
				}
			},
			go(){
				alert('付款成功')
			},
			fade(){
				this.v=!this.v;
				this.circle=!this.circle;
			},
			zmq(){
				this.sure0=!this.sure0;
				this.sure=!this.sure;
				if(this.sure==true){
					this.total=this.total+this.money0;
					this.total0=this.total0+this.money0;
					this.xian1=true;
				}else{
					this.total=this.total-this.money0;
					this.total0=this.total0-this.money0;
					this.xian1=false;
				}
			},
			zmq0(){
				this.sure1=!this.sure1;
				this.sure2=!this.sure2;
				if(this.sure2==true){
					this.total=this.total+this.money1;
					this.total0=this.total0+this.money1;
					this.xian2=true;
				}else{
					this.total=this.total-this.money1;
					this.total0=this.total0-this.money1;
					this.xian2=false;
				}
			}
		}
	}
</script>

<style>
	.mint-switch-input:checked + .mint-switch-core {
	    border-color: #ffc900;
	    background-color: #ffc900;
    }
</style>
<style scoped>
	main{
		background: #f4f4f4;
	}
	.top{
		text-align: center;
		font-size: 18px;
		line-height: 50px;
	}
	.one,.two,.three,.four,.five,.six,.seven,.eight,.nine,.ten,.eleven,.twelve{
		background: #FFFFFF;
		width: 95%;
		margin: 0 auto 10px;
		border-radius: 10px;
		padding: 20px 0;
	}
	.one h2,.two h2,.three h2,.four h2,.five h2,.six h2,.seven h2,.eight h2,.nine h2,.ten h2,.eleven h2,.twelve h2{
		color: #3d3d3d;
		font-size: 18px;
		font-weight: bold;
		line-height: 22px;
		margin-left: 10px;
	}
	.one>div{
		margin-left: 10px;
		line-height: 30px;
		font-size: 15px;
		position: relative;
	}
	.one>div>span:nth-child(2){
		margin-left: 20px;
	}
	.one>div>span:nth-child(3){
		color: #f2a652;
		position: absolute;
		right: 10px;
	}
	
	/*购买数量*/
	.two p{
		font-size: 12px;
		color: #333333;
		line-height: 20px;
		padding-left: 10px;
	}
	.two p span{
		color: #e9ba75;
		font-weight: 600;
	}
	
	/*出行人*/
	.three>div{
		margin-top: 20px;
		padding: 0 10px;
		display: flex;
		justify-content: space-between;
	}
	.three .right>div:first-child{
		border: 1px solid #CCCCCC;
		display: flex;
		justify-content: space-between;
	}
	.three .num{
		line-height: 30px;
	}
	.three .sub{
		border-right: 1px solid #CCCCCC;
	}
	.three .add{
		border-left: 1px solid #CCCCCC;
	}
	.three .sub,.three .add{
		display: inline-block;
		font-size: 30px;
		color: #999999;
		font-weight: bold;
		width: 35px;
		text-align: center;
	}
	.three .right>div:last-child{
		margin-top: 10px;
	}
	.three .right>div:last-child span:first-child{
		color: #999999;
	}
	
	/*买家留言*/
	.four>div{
		font-size: 14px;
		margin-top: 20px;
		padding: 0 10px;
		display: flex;
		justify-content: space-between;
		line-height: 35px;
	}
	.four>div div:nth-child(2) span{
		color: #fca500;
	}
	.four>div div:last-child{
		background: #ffdc00;
		padding: 0 5px;
		border-radius: 5px;
	}
	.five label{
		padding-left: 10px;
		color: #3D3D3D;
	}
	
	/*联系人*/
	.five input{
		padding-left: 20px;
		border: none;
		font-size: 16px;
	}
	.six div{
		padding-left: 10px;
		margin-top: 20px;
		position: relative;
	}
	.six div span:first-child{
		display: inline-block;
		color: #999999;
		width: 20%;
	}
	.six div span:nth-child(3){
		margin-left: 20px;
		position: absolute;
		right: 10px;
		top: -5px;
	}
	.six div span:nth-child(3) img{
		width: 60%;
	}
	.six input{
		border: none;
	}
	
	/*出行保障*/
	.seven p{
		margin-top: 20px;
		padding: 10px;
		font-size: 14px;
		background: #fffbe8;
		color: #c1874d;
	}
	.gray{
		color: #999999;
		margin: 20px;
	}
	
	/*保险*/
	.eight,.nine{
		position: relative;
	}
	.eight>div,.nine>div{
		margin-left: 10px;
		margin-bottom: 10px;
	}
	.eight img,.nine img{
		margin-left: 10px;
		width: 4%;
	}
	.eight>div:nth-child(2),.nine>div:nth-child(2) span:first-child{
		font-size: 14px;
		color: #fdb900;
		border: 1px solid #fce9b8;
		line-height: 22px;
		width: 63%;
	}
	.eight>div:nth-child(4),.nine>div:nth-child(2) span:nth-child(2),.nine>div:nth-child(2) span:nth-child(3){
		font-size: 14px;
		color: #999999;
		border: 1px solid #999999;
		line-height: 22px;
		width: 63%;
	}
	.eight>span:nth-child(3),.nine>span:nth-child(3){
		display: inline-block;
		font-size: 14px;
		position: absolute;
		right: 40px;
		top: 50%;
		color: #ffb452;
	}
	/*优惠*/
	.ten h2,.eleven h2{
		margin-bottom: 20px;
	}
	.ten>div,.eleven>div{
		margin-left: 10px;
		border-top: 1px solid rgba(0,0,0,0.1);
		padding: 20px 0;
	}
	.ten .one0{
		position: relative;
	}
	.ten .one0>span:first-child,.ten .two0>span:first-child{
		font-size: 14px;
		color: #ff9884;
		border: 1px solid #ff9884;
		line-height: 22px;
	}
	.ten .one0>span:last-child,.ten .two0>span:last-child{
		margin-left: 20px;
		font-size: 14px;
	}
	.ten .one0 img{
		width: 4%;
		margin-left: 5px;
	}
	.ten .one0 label{
		display: inline-block;
		position: absolute;
		right: 20px;
		top: 15px;
	}
	.ten .two0{
		position: relative;
	}
	.rrr img{
		width: 2%;
		position: absolute;
		right: 20px;
	}
	/*开关*/
	.switch{
		position: absolute;
		right: 20px;
		top: 15px;
	    width: 52px;
	    height: 32px;
	    border: 1px solid #d9d9d9;
	    border-radius: 16px;
	    box-sizing: border-box;
	    background: #d9d9d9;
	}
	.core{
		border-color: #ffc900;
    	background-color: #ffc900;
	}
	.before{
		width: 50px;
	    height: 30px;
	    background-color: #fdfdfd;
	    top: 0;
	    left: 0;
	    position: absolute;
	    -webkit-transition: -webkit-transform .3s;
	    transition: -webkit-transform .3s;
	    transition: transform .3s;
	    transition: transform .3s, -webkit-transform .3s;
	    border-radius: 15px;
	}
	.core0{
		-webkit-transform: scale(0);
     	transform: scale(0);
	}
	.after{
		width: 30px;
	    height: 30px;
	    background-color: #fff;
	    box-shadow: 0 1px 3px rgba(0, 0, 0, .4);
		top: 0;
	    left: 0;
	    position: absolute;
		width: 30px;
	    height: 30px;
	    background-color: #fff;
	    box-shadow: 0 1px 3px rgba(0, 0, 0, .4);
	    transition: transform .3s, -webkit-transform .3s;
    	border-radius: 15px;
	}
	.core1{
		-webkit-transform: translateX(20px);
    	transform: translateX(20px);
	}
	
	/*赠品*/
	.eleven>div{
		display: flex;
	}
	.eleven>div>p:first-child{
		font-size: 14px;
		color: #ff9884;
		border: 1px solid #ff9884;
		line-height: 22px;
	}
	.eleven>div>p:nth-child(2){
		margin-left: 20px;
		line-height: 22px;
	}
	.eleven>div>p:nth-child(2) span{
		color: #fdb900;
	}
	/*花呗分期*/
	.twelve h2{
		margin-bottom: 20px;
	}
	.twelve p{
		margin-left: 10px;
		color: #999999;
		font-size: 14px;
		border-top: 1px solid rgba(0,0,0,0.05);
		padding: 20px 0;
	}
	/*底部*/
	.bottom0{
		width: 95%;
		margin: 20px auto 0;
		font-size: 14px;
		color: #999999;
		padding-bottom: 100px;
	}
	.bottom0 img{
		width: 5%;
		margin-right: 5px;
	}
	.bottom0>div{
		margin-top: 20px;
		text-align: center;
		line-height: 22px;
	}
	.bottom0>div>p{
		position: relative;
	}
	.bottom0>div>p:after{
		position: absolute;
		content: '';
		width: 10px;
		height: 2px;
		background: #CCCCCC;
		top: 10px;
		right: 160px;
	}
	.bottom0>div>p:before{
		position: absolute;
		content: '';
		width: 10px;
		height: 2px;
		background: #CCCCCC;
		top: 10px;
		left: 160px;
	}
	.bottom0>div>div>span:after{
		display: inline-block;
	    margin: 0 4px;
	    content: "";
	    width: 1px;
	    height: 7px;
	    background-color: #b7b7b7;
	}
	.fixed{
		position: fixed;
		width: 100%;
		bottom: 0px;
		left: 0px;
		background: #FFFFFF;
		padding: 10px;
		border-top: 1px solid rgba(0,0,0,0.05);
		z-index: 9999;
	}
	.price1 span{
		color: red;
		font-size: 18px;
		line-height: 30px;
	}
	.price1 del{
		color: #999999;
	}
	.price1 p{
		font-size: 12px;
		color: #999999;
	}
	.price2{
		color: #999999;
		font-size: 12px;
		position: absolute;
		top: 20px;
		left: 45%;
	}
	.price2 img{
		width: 30%;
		margin-left: 5px;
	}
	.circle{
		transform: rotate(180deg);
	}
	.price3{
		width: 150px;
		text-align: center;
		line-height: 61px;
		color: #FFFFFF;
		font-weight: bold;
		font-size: 18px;
		position: absolute;
		right: 20px;
		top: 1px;
		background: linear-gradient(to right, #ff7501, #ff3750); 
	}
	
	.back{
		position: fixed;
	    z-index: 899;
	    top: -100px;
	    left: 0;
	    bottom: -100px;
	    right: 0;
	    background-color: rgba(0,0,0,.6);
        transition-duration: 0.2s;
	}
	.pay{
		position: fixed;
		bottom: 51px;
		left: 0px;
		width: 100%;
		background: #FFFFFF;
		padding: 10px;
		
	    /*padding-bottom: constant(safe-area-inset-bottom);
	    padding-bottom: env(safe-area-inset-bottom);
	    height: 100%;
	    overflow-y: scroll;*/
	}
	.pay>p{
		text-align: center;
		margin-bottom: 20px;
	}
	.pay>div{
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
		border-top: 1px solid rgba(0,0,0,0.05);
		padding-top: 20px;
	}
	.pay>div>span:last-child{
		color: red;
		position: relative;
		right: 20px;
	}
	.sure0{
		position: absolute;
		right: 10px;
		top: 48%;
		margin-left: 30px;
	    cursor: pointer;
	    background-image: url('../assets/images/sure0.png');
	    height: 18px;
	    width: 18px;
	    background-repeat: no-repeat;
	    background-size: contain;
	    background-position: 50%;
	}
	.sure{
		position: absolute;
		right: 10px;
		top: 48%;
		margin-left: 30px;
	    cursor: pointer;
	    background-image: url('../assets/images/sure.png');
	    height: 18px;
	    width: 18px;
	    background-repeat: no-repeat;
	    background-size: contain;
	    background-position: 50%;
	}
	.sure1{
		position: absolute;
		right: 10px;
		top: 48%;
		margin-left: 30px;
	    cursor: pointer;
	    background-image: url('../assets/images/sure0.png');
	    height: 18px;
	    width: 18px;
	    background-repeat: no-repeat;
	    background-size: contain;
	    background-position: 50%;
	}
	.sure2{
		position: absolute;
		right: 10px;
		top: 48%;
		margin-left: 30px;
	    cursor: pointer;
	    background-image: url('../assets/images/sure.png');
	    height: 18px;
	    width: 18px;
	    background-repeat: no-repeat;
	    background-size: contain;
	    background-position: 50%;
	}
</style>

