<template id="city">
	<div>
		<div class="header">
			<div class="search">
				<img src="../assets/images/search.png" alt="" />
				<input type="search" placeholder="搜索城市或国家" :class="{width:width}" @focus="add()" @blur="sub()">
				<span class="cancel" v-show="show" @click="sub()">取消</span>
			</div>
		</div>
		
		<div class="content" v-show="cont">
			<mt-navbar v-model="selected">
				<mt-tab-item id="1"><h1>国内城市</h1></mt-tab-item>
				<mt-tab-item id="2"><h1>国际/中国港澳台</h1></mt-tab-item>
			</mt-navbar>

			<!-- tab-container -->
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1">
					<div class="history">
						<p>定位/历史</p>
						<div class="guang">
							<p><img src="../assets/images/dw.jpg" alt="" />定位失败</p>
							<p v-for="(v,i) in list1" @click="change0(v.gz)">{{v.gz}}</p>
						</div>
						<p>热门城市</p>
						<div class="hot">
							<p v-for="(v,i) in list0" @click="change0(v.hot)">{{v.hot}}</p>
						</div>
					</div>
					
					<div>
						<p class="letter" :class="{aaa:aaa}" id="aaa">A</p>
						<ul class="com">
							<li v-for="(v,i) in lista" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter" :class="{bbb:bbb}" id="bbb">B</p>
						<ul class="com">
							<li v-for="(v,i) in listb" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter" :class="{ccc:ccc}" id="ccc">C</p>
						<ul class="com">
							<li v-for="(v,i) in listc" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter" :class="{ddd:ddd}" id="ddd">D</p>
						<ul class="com">
							<li v-for="(v,i) in listd" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter" :class="{eee:eee}" id="eee">E</p>
						<ul class="com">
							<li v-for="(v,i) in liste" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter" :class="{fff:fff}" id="fff">F</p>
						<ul class="com">
							<li v-for="(v,i) in listf" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter" :class="{ggg:ggg}" id="ggg">G</p>
						<ul class="com">
							<li v-for="(v,i) in listg" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter" :class="{hhh:hhh}" id="hhh">H</p>
						<ul class="com">
							<li v-for="(v,i) in listh" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter" :class="{jjj:jjj}" id="jjj">J</p>
						<ul class="com">
							<li v-for="(v,i) in listj" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter" :class="{kkk:kkk}" id="kkk">K</p>
						<ul class="com">
							<li v-for="(v,i) in listk" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter" :class="{lll:lll}" id="lll">L</p>
						<ul class="com">
							<li v-for="(v,i) in listl" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter" :class="{mmm:mmm}" id="mmm">M</p>
						<ul class="com">
							<li v-for="(v,i) in listm" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter" :class="{nnn:nnn}" id="nnn">N</p>
						<ul class="com">
							<li v-for="(v,i) in listn" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter" :class="{ppp:ppp}" id="ppp">P</p>
						<ul class="com">
							<li v-for="(v,i) in listp" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter" :class="{qqq:qqq}" id="qqq">Q</p>
						<ul class="com">
							<li v-for="(v,i) in listq" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter" :class="{rrr:rrr}" id="rrr">R</p>
						<ul class="com">
							<li v-for="(v,i) in listr" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter" :class="{sss:sss}" id="sss">S</p>
						<ul class="com">
							<li v-for="(v,i) in lists" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter" :class="{ttt:ttt}" id="ttt">T</p>
						<ul class="com">
							<li v-for="(v,i) in listt" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter" :class="{www:www}" id="www">W</p>
						<ul class="com">
							<li v-for="(v,i) in listw" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter" :class="{xxx:xxx}" id="xxx">X</p>
						<ul class="com">
							<li v-for="(v,i) in listx" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter" :class="{yyy:yyy}" id="yyy">Y</p>
						<ul class="com">
							<li v-for="(v,i) in listy" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter" :class="{zzz:zzz}" id="zzz">Z</p>
						<ul class="com">
							<li v-for="(v,i) in listz" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
				</mt-tab-container-item>
				
				<aside class="aside">
					<p>热门城市</p>
					<ul>
						<li v-for="(v,i) in list" @click="jump(i)">{{v.le}}</li>
					</ul>
				</aside>
				
				<mt-tab-container-item id="2">
					<div class="history">
						<p>定位/历史</p>
						<div class="guang">
							<p><img src="../assets/images/dw.jpg" alt="" />定位失败</p>
							<p v-for="(v,i) in list1" @click="change0(v.gz)">{{v.gz}}</p>
						</div>
						<p>热门城市</p>
						<div class="hot">
							<p v-for="(v,i) in list0" @click="change0(v.hot)">{{v.hot}}</p>
						</div>
					</div>
					
					<div>
						<p class="letter">A</p>
						<ul class="com">
							<li v-for="(v,i) in lista" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter">B</p>
						<ul class="com">
							<li v-for="(v,i) in listb" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter">C</p>
						<ul class="com">
							<li v-for="(v,i) in listc" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter">D</p>
						<ul class="com">
							<li v-for="(v,i) in listd" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter">E</p>
						<ul class="com">
							<li v-for="(v,i) in liste" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter">F</p>
						<ul class="com">
							<li v-for="(v,i) in listf" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter">G</p>
						<ul class="com">
							<li v-for="(v,i) in listg" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter">H</p>
						<ul class="com">
							<li v-for="(v,i) in listh" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter">J</p>
						<ul class="com">
							<li v-for="(v,i) in listj" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter">K</p>
						<ul class="com">
							<li v-for="(v,i) in listk" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter">L</p>
						<ul class="com">
							<li v-for="(v,i) in listl" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter">M</p>
						<ul class="com">
							<li v-for="(v,i) in listm" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter">N</p>
						<ul class="com">
							<li v-for="(v,i) in listn" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter">P</p>
						<ul class="com">
							<li v-for="(v,i) in listp" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter">Q</p>
						<ul class="com">
							<li v-for="(v,i) in listq" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter">R</p>
						<ul class="com">
							<li v-for="(v,i) in listr" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter">S</p>
						<ul class="com">
							<li v-for="(v,i) in lists" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter">T</p>
						<ul class="com">
							<li v-for="(v,i) in listt" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter">W</p>
						<ul class="com">
							<li v-for="(v,i) in listw" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter">X</p>
						<ul class="com">
							<li v-for="(v,i) in listx" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter">Y</p>
						<ul class="com">
							<li v-for="(v,i) in listy" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
					<div>
						<p class="letter">Z</p>
						<ul class="com">
							<li v-for="(v,i) in listz" @click="change0(v.city)">
								{{v.city}}
								<span>{{v.dec}}</span>
							</li>
						</ul>
					</div>
				</mt-tab-container-item>
			</mt-tab-container>
		</div>
	</div>
</template>

<script>
	export default{
		name:'city',
		data(){
			return{
				aaa:false,
				bbb:false,
				ccc:false,
				ddd:false,
				eee:false,
				fff:false,
				ggg:false,
				hhh:false,
				jjj:false,
				kkk:false,
				lll:false,
				mmm:false,
				nnn:false,
				ppp:false,
				qqq:false,
				rrr:false,
				sss:false,
				ttt:false,
				www:false,
				xxx:false,
				yyy:false,
				zzz:false,
				show:false,
				width:false,
				cont:true,
				selected:'1',
				list0:[],
				list1:[],
				lista:[],listb:[],listc:[],listd:[],liste:[],listf:[],listg:[],listh:[],listj:[],listk:[],listl:[],listm:[],listn:[],listp:[],listq:[],listr:[],lists:[],listt:[],listw:[],listx:[],listy:[],listz:[],
				list:[
					{
						"le":'A'
					},
					{
						"le":'B'
					},
					{
						"le":'C'
					},
					{
						"le":'D'
					},
					{
						"le":'E'
					},
					{
						"le":'F'
					},
					{
						"le":'G'
					},
					{
						"le":'H'
					},
					{
						"le":'J'
					},
					{
						"le":'K'
					},
					{
						"le":'L'
					},
					{
						"le":'M'
					},
					{
						"le":'N'
					},
					{
						"le":'P'
					},
					{
						"le":'Q'
					},
					{
						"le":'R'
					},
					{
						"le":'S'
					},
					{
						"le":'T'
					},
					{
						"le":'W'
					},
					{
						"le":'X'
					},
					{
						"le":'Y'
					},
					{
						"le":'Z'
					}
				]
			}
		},
		methods:{
			add(){
				this.show=true;
				this.width=true;
				this.cont=false
			},
			sub(){
				this.show=false;
				this.width=false;
				this.cont=true
			},
			change0(city0){
				this.$store.commit('change0',city0),
				this.$router.back(-1)
			},
			getScroll(){
				var scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
				var aaa=document.querySelector('#aaa').offsetTop;
				var bbb=document.querySelector('#bbb').offsetTop;
				var ccc=document.querySelector('#ccc').offsetTop;
				var ddd=document.querySelector('#ddd').offsetTop;
				var eee=document.querySelector('#eee').offsetTop;
				var fff=document.querySelector('#fff').offsetTop;
				var ggg=document.querySelector('#ggg').offsetTop;
				var hhh=document.querySelector('#hhh').offsetTop;
				var jjj=document.querySelector('#jjj').offsetTop;
				var kkk=document.querySelector('#kkk').offsetTop;
				var lll=document.querySelector('#lll').offsetTop;
				var mmm=document.querySelector('#mmm').offsetTop;
				var nnn=document.querySelector('#nnn').offsetTop;
				var ppp=document.querySelector('#ppp').offsetTop;
				var qqq=document.querySelector('#qqq').offsetTop;
				var rrr=document.querySelector('#rrr').offsetTop;
				var sss=document.querySelector('#sss').offsetTop;
				var ttt=document.querySelector('#ttt').offsetTop;
				var www=document.querySelector('#www').offsetTop;
				var xxx=document.querySelector('#xxx').offsetTop;
				var yyy=document.querySelector('#yyy').offsetTop;
				var zzz=document.querySelector('#zzz').offsetTop;

				if(scrollTop>aaa && scrollTop<bbb){
					this.aaa=true
				}else if(scrollTop>bbb && scrollTop<ccc){
					this.bbb=true
				}else if(scrollTop>ccc && scrollTop<ddd){
					this.ccc=true
				}else if(scrollTop>ddd && scrollTop<eee){
					this.ddd=true
				}else if(scrollTop>eee && scrollTop<fff){
					this.eee=true
				}else if(scrollTop>fff && scrollTop<ggg){
					this.fff=true
				}else if(scrollTop>ggg && scrollTop<hhh){
					this.ggg=true
				}else if(scrollTop>hhh && scrollTop<jjj){
					this.hhh=true
				}else if(scrollTop>jjj && scrollTop<kkk){
					this.jjj=true
				}else if(scrollTop>kkk && scrollTop<lll){
					this.kkk=true
				}else if(scrollTop>lll && scrollTop<mmm){
					this.lll=true
				}else if(scrollTop>mmm && scrollTop<nnn){
					thismmm=true
				}else if(scrollTop>nnn && scrollTop<ppp){
					this.nnn=true
				}else if(scrollTop>ppp && scrollTop<qqq){
					this.ppp=true
				}else if(scrollTop>qqq && scrollTop<rrr){
					this.qqq=true
				}else if(scrollTop>rrr && scrollTop<sss){
					this.rrr=true
				}else if(scrollTop>sss && scrollTop<ttt){
					this.sss=true
				}else if(scrollTop>ttt && scrollTop<www){
					this.ttt=true
				}else if(scrollTop>www && scrollTop<xxx){
					this.www=true
				}else if(scrollTop>xxx && scrollTop<yyy){
					this.xxx=true
				}else if(scrollTop>yyy && scrollTop<zzz){
					this.yyy=true
				}else if(scrollTop>zzz){
					this.zzz=true
				}else{
					this.aaa=false;
					this.bbb=false;
					this.ccc=false;
					this.ddd=false;
					this.eee=false;
					this.fff=false;
					this.ggg=false;
					this.hhh=false;
					this.jjj=false;
					this.kkk=false;
					this.lll=false;
					this.mmm=false;
					this.nnn=false;
					this.ppp=false;
					this.qqq=false;
					this.rrr=false;
					this.sss=false;
					this.ttt=false;
					this.www=false;
					this.xxx=false;
					this.yyy=false;
					this.zzz=false;
				}
			},
			jump(i){
				let jump = document.querySelectorAll('.letter')
				// 获取需要滚动的距离
				let total = jump[i].offsetTop
				// Chrome
				document.body.scrollTop = total
				// Firefox
				document.documentElement.scrollTop = total
				// Safari
				window.pageYOffset = total
			}
		},
		mounted() {
			window.addEventListener("scroll",this.getScroll);
			var _this=this;
			//默认去项目根路径寻找
			this.$http.get('./data/city.json')
			.then((response)=>{
				this.list0=response.data.hot;
				this.list1=response.data.gz;
				this.lista=response.data.lista;
				this.listb=response.data.listb;
				this.listc=response.data.listc;
				this.listd=response.data.listd;
				this.liste=response.data.liste;
				this.listf=response.data.listf;
				this.listg=response.data.listg;
				this.listh=response.data.listh;
				this.listi=response.data.listi;
				this.listj=response.data.listj;
				this.listk=response.data.listk;
				this.listl=response.data.listl;
				this.listm=response.data.listm;
				this.listn=response.data.listn;
				this.listo=response.data.listo;
				this.listp=response.data.listp;
				this.listq=response.data.listq;
				this.listr=response.data.listr;
				this.lists=response.data.lists;
				this.listt=response.data.listt;
				this.listu=response.data.listu;
				this.listv=response.data.listv;
				this.listw=response.data.listw;
				this.listx=response.data.listx;
				this.listy=response.data.listy;
				this.listz=response.data.listz;
			})
		},
		destroyed(){
			window.removeEventListener("scroll",this.getScroll);
		}
	}
</script>

<style scoped>
	.header{
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		background: #ffcd00;
		padding: 5px 0;
		z-index: 999;
	}
	.header .search{
		margin: 0 auto;
		width: 95%;
		position: relative;
		vertical-align: middle;
		
	}
	.search>img{
		position: absolute;
		top: 6px;
		width: 3%;
		padding-left: 10px;
		line-height: 30px;

	}
	.search input{
		width: 100%;
		padding-left: 30px;
		background: #fff7d6;
		border: none;
		line-height: 30px;
	}
	.search .width{
		width: 90%;
	}
	.header .cancel{
		display: inline-block;
		width: 8%;
		text-align:center;
		cursor: pointer;
	}
	.mint-navbar{
		position: fixed;
		top: 42px;
		left: 0px;
		width: 100%;
		z-index: 999;
	}
	.content{
		background: #f2f3f4;
		width: 100%;
		margin-top: 100px;
	}
	.content h1{
		font-size: 18px;
		text-align: center;
	}
	.mint-navbar .mint-tab-item.is-selected {
	    border-bottom: 3px solid #ffcd00;
	    color: #000000;
	    margin-bottom: -3px;
    }
	.history>p{
		font-size: 12px;
		color: #999999;
		padding-left: 10px;
		margin-bottom: 10px;
	}
	.history .guang,.hot{
		display: flex;
		text-align: center;
		padding-left: 10px;
		flex-wrap: wrap;
	}
	.history .guang p,.hot p{
		width: 120px;
		background: #FFFFFF;
		border: 1px solid #CCCCCC;
		line-height: 30px;
		margin-right: 10px;
		margin-bottom: 10px;
	}
	.guang img{
		width: 15%;
		padding-right: 3px;
	}
	.letter{
		color: #999999;
		font-size: 12px;
		padding-left: 10px;
		line-height: 20px;
		background: #fbfbfb;
		border-top:1px solid #CCCCCC;
		border-bottom:1px solid #CCCCCC;
	}
	.com{
		padding-left: 10px;
		background: #FFFFFF;
		color: #333333;
	}
	.com li{
		line-height: 50px;
		border-bottom: 1px solid rgba(0,0,0,0.05);
	}
	.com span{
		color: #999999;
		font-size: 12px;
	}
	.aside{
		position: fixed;
		top: 100px;
		right: 15px;
		width: 30px;
		color: #999999;
		font-size: 12px;
		line-height: 16px;
		z-index: 1000;
	}
	.aside ul{
		position: relative;
		left: 10px;
	}
	.aaa,.bbb,.ccc,.ddd,.eee,.fff,.ggg,.hhh,.jjj,.kkk,.lll,.mmm,.nnn,.ppp,.qqq,.rrr,.sss,.ttt,.www,.xxx,.yyy,.zzz{
		position: fixed;
		top: 97px;
		left: 0px;
		width: 100%;
		z-index: 999;
	}
</style>