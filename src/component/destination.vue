<template id="destination">
	<main>
		<!-- 搜索栏 -->
		<div class="search">
			<input type="search" placeholder="发现你感兴趣的目的地">
		</div>
		
		<mt-navbar v-model="selected">
			<mt-tab-item id="1"><span>推荐</span></mt-tab-item>
			<mt-tab-item id="2"><span>中国</span></mt-tab-item>
			<mt-tab-item id="3"><span>亚洲</span></mt-tab-item>
			<mt-tab-item id="4"><span>欧洲</span></mt-tab-item>
			<mt-tab-item id="5"><span>北美洲</span></mt-tab-item>
			<mt-tab-item id="6"><span>大洋洲</span></mt-tab-item>
			<mt-tab-item id="7"><span>非洲</span></mt-tab-item>
			<mt-tab-item id="8"><span>南美洲</span></mt-tab-item>
			<mt-tab-item id="9"><span>南极洲</span></mt-tab-item>
		</mt-navbar>
		
		<!-- tab-container -->
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<div class="recommend">
					<h3>境内热门</h3>
					<ul>
						<li v-for="(v,i) in list1">
							<img :src="v.src" alt="" />
							<p>{{v.addr}}</p>
						</li>
					</ul>
				</div>
				<div class="recommend">
					<h3>境外热门</h3>
					<ul>
						<li v-for="(v,i) in list2">
							<img :src="v.src" alt="" />
							<p>{{v.addr}}</p>
						</li>
					</ul>
				</div>
				<div class="recommend">
					<h3>9月去哪玩</h3>
					<ul>
						<li v-for="(v,i) in list3">
							<img :src="v.src" alt="" />
							<p>{{v.addr}}</p>
						</li>
					</ul>
				</div>
				<div class="more">
					<p>更多推荐目的地</p>
				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="2">
			<div class="china">
				<h3>热门城市</h3>
				<ul>
					<li v-for="(v,i) in list4">
						<img :src="v.src"/>
						<p>{{v.addr}}</p>
					</li>
				</ul>
			</div>
			<div class="all">
				<h3>全部省份</h3>
				<ul>
					<li v-for="(v,i) in list5">
						<p>{{v.addr}}</p>
					</li>
				</ul>
			</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="3">
				<div class="asia">
					<h3>热门城市</h3>
					<ul>
						<li v-for="(v,i) in list6">
							<img :src="v.src" alt="" />
							<p>{{v.addr}}</p>
						</li>
					</ul>
				</div>
				<div class="asia1">
					<h3>热门国家</h3>
					<ul>
						<li v-for="(v,i) in list7">
							<p>{{v.addr}}</p>
						</li>
					</ul>
				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="4">
				<div class="europe">
					<h3>热门城市</h3>
					<ul>
						<li v-for="(v,i) in list8">
							<img :src="v.src" alt="" />
							<p>{{v.addr}}</p>
						</li>
					</ul>
				</div>
				<div class="europe1">
					<h3>热门国家</h3>
					<ul>
						<li v-for="(v,i) in list9">
							<p>{{v.addr}}</p>
						</li>
					</ul>
				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="5">
				<div class="north">
					<h3>热门城市</h3>
					<ul>
						<li v-for="(v,i) in list10">
							<img :src="v.src" alt="" />
							<p>{{v.addr}}</p>
						</li>
					</ul>
				</div>
				<div class="north1">
					<h3>热门国家</h3>
					<ul>
						<li v-for="(v,i) in list11">
							<p>{{v.addr}}</p>
						</li>
					</ul>
				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="6">
				<div class="oceania">
					<h3>热门城市</h3>
					<ul>
						<li v-for="(v,i) in list12">
							<img :src="v.src" alt="" />
							<p>{{v.addr}}</p>
						</li>
					</ul>
				</div>
				<div class="oceania1">
					<h3>热门国家</h3>
					<ul>
						<li v-for="(v,i) in list13">
							<p>{{v.addr}}</p>
						</li>
					</ul>
				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="7">
				<div class="africa">
					<h3>热门城市</h3>
					<ul>
						<li v-for="(v,i) in list14">
							<img :src="v.src" alt="" />
							<p>{{v.addr}}</p>
						</li>
					</ul>
				</div>
				<div class="africa1">
					<h3>热门国家</h3>
					<ul>
						<li v-for="(v,i) in list15">
							<p>{{v.addr}}</p>
						</li>
					</ul>
				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="8">
				<div class="south">
					<h3>热门城市</h3>
					<ul>
						<li v-for="(v,i) in list16">
							<img :src="v.src" alt="" />
							<p>{{v.addr}}</p>
						</li>
					</ul>
				</div>
				<div class="south1">
					<h3>热门国家</h3>
					<ul>
						<li v-for="(v,i) in list17">
							<p>{{v.addr}}</p>
						</li>
					</ul>
				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="9">
				<div class="antartic">
					<h3>热门目的地</h3>
					<ul>
						<li v-for="(v,i) in list18">
							<img :src="v.src" alt="" />
							<p>{{v.addr}}</p>
						</li>
					</ul>
				</div>
			</mt-tab-container-item>
		</mt-tab-container>
	</main>
</template>

<script>
	export default{
		name:'destination',
		data(){
			return{
				selected:'1',
				list1:[
					{
						src:require("../assets/images/shanghai.jpg"),
						addr:"上海"
					},
					{
						src:require("../assets/images/beijing.jpg"),
						addr:"北京"
					},
					{
						src:require("../assets/images/sanya.jpg"),
						addr:"三亚"
					},
					{
						src:require("../assets/images/guang.jpg"),
						addr:"广州"
					},
					{
						src:require("../assets/images/hang.jpg"),
						addr:"杭州"
					},
					{
						src:require("../assets/images/xia.jpg"),
						addr:"厦门"
					},
				],
				list2:[
					{
						src:require("../assets/images/pu.jpg"),
						addr:"普吉"
					},
					{
						src:require("../assets/images/man.jpg"),
						addr:"曼谷"
					},
					{
						src:require("../assets/images/qing.jpg"),
						addr:"清迈"
					},
					{
						src:require("../assets/images/shou.jpg"),
						addr:"首尔"
					},
					{
						src:require("../assets/images/ba.jpg"),
						addr:"巴黎"
					},
					{
						src:require("../assets/images/batina.jpg"),
						addr:"芭提雅"
					}
				],
				list3:[
					{
						src:require("../assets/images/bei.jpg"),
						addr:"北京"
					},
					{
						src:require("../assets/images/xi.jpg"),
						addr:"西安"
					},
					{
						src:require("../assets/images/gui.jpg"),
						addr:"桂林"
					},
					{
						src:require("../assets/images/qingdao.jpg"),
						addr:"青岛"
					},
					{
						src:require("../assets/images/wuhan.jpg"),
						addr:"武汉"
					},
					{
						src:require("../assets/images/zhang.png"),
						addr:"张家界"
					}
				],
				list4:[
					{
						src:require("../assets/images/shanghai.jpg"),
						addr:"上海"
					},
					{
						src:require("../assets/images/bei.jpg"),
						addr:"北京"
					},
					{
						src:require("../assets/images/sanya.jpg"),
						addr:"三亚"
					},
					{
						src:require("../assets/images/guang.jpg"),
						addr:"广州"
					},
					{
						src:require("../assets/images/hang.jpg"),
						addr:"杭州"
					},
					{
						src:require("../assets/images/xia.jpg"),
						addr:"厦门"
					},
					{
						src:require("../assets/images/cheng.jpg"),
						addr:"成都"
					},
					{
						src:require("../assets/images/nanjing.jpg"),
						addr:"南京"
					},
					{
						src:require("../assets/images/xi.jpg"),
						addr:"西安"
					}
				],
				list5:[
					{
						addr:"安徽"
					},
					{
						addr:"澳门"
					},
					{
						addr:"北京"
					},
					{
						addr:"重庆"
					},
					{
						addr:"福建"
					},
					{
						addr:"甘肃"
					},
					{
						addr:"广东"
					},
					{
						addr:"广西"
					},
					{
						addr:"贵州"
					},
					{
						addr:"海南"
					},
					{
						addr:"河北"
					},
					{
						addr:"黑龙江"
					},
					{
						addr:"河南"
					},
					{
						addr:"湖北"
					},
					{
						addr:"湖南"
					},
					{
						addr:"江苏"
					},
					{
						addr:"江西"
					},
					{
						addr:"吉林"
					},
					{
						addr:"辽宁"
					},
					{
						addr:"内蒙古"
					},
					{
						addr:"宁夏"
					},
					{
						addr:"青海"
					},
					{
						addr:"山东"
					},
					{
						addr:"上海"
					},
					{
						addr:"山西"
					},
					{
						addr:"四川"
					},
					{
						addr:"台湾"
					},
					{
						addr:"天津"
					},
					{
						addr:"香港"
					},
					{
						addr:"西藏"
					},
					{
						addr:"新疆"
					},
					{
						addr:"云南"
					},
					{
						addr:"浙江"
					}
				],
				list6:[
					{
						src:require("../assets/images/pu.jpg"),
						addr:"普吉"
					},
					{
						src:require("../assets/images/man.jpg"),
						addr:"曼谷"
					},
					{
						src:require("../assets/images/qing.jpg"),
						addr:"清迈"
					},
					{
						src:require("../assets/images/shou.jpg"),
						addr:"首尔"
					},
					{
						src:require("../assets/images/batina.jpg"),
						addr:"芭提雅"
					},
					{
						src:require("../assets/images/dong.jpg"),
						addr:"东京"
					},
					{
						src:require("../assets/images/da.jpg"),
						addr:"大阪"
					},{
						src:require("../assets/images/ji.jpg"),
						addr:"济州岛"
					},
					{
						src:require("../assets/images/li.jpg"),
						addr:"暹粒"
					}
				],
				list7:[
					{
						addr:"阿联酋"
					},
					{
						addr:"阿塞拜疆"
					},
					{
						addr:"巴基斯坦"
					},
					{
						addr:"菲律宾"
					},
					{
						addr:"格鲁吉亚"
					},
					{
						addr:"韩国"
					},
					{
						addr:"柬埔寨"
					},
					{
						addr:"老挝"
					},
					{
						addr:"马来西亚"
					},
					{
						addr:"缅甸"
					},
					{
						addr:"尼泊尔"
					},
					{
						addr:"日本"
					},
					{
						addr:"斯里兰卡"
					},
					{
						addr:"泰国"
					},
					{
						addr:"塔吉克斯坦"
					},
					{
						addr:"乌兹别克斯坦"
					},
					{
						addr:"新加坡"
					},
					{
						addr:"亚美尼亚"
					},
					{
						addr:"印度"
					},
					{
						addr:"印度尼西亚"
					},
					{
						addr:"以色列"
					},
					{
						addr:"约旦"
					},
					{
						addr:"越南"
					}
				],
				list8:[
					{
						src:require("../assets/images/ba.jpg"),
						addr:"巴黎"
					},
					{
						src:require("../assets/images/lun.jpg"),
						addr:"伦敦"
					},
					{
						src:require("../assets/images/luo.jpg"),
						addr:"罗马"
					},
					{
						src:require("../assets/images/wei.jpg"),
						addr:"威尼斯"
					},
					{
						src:require("../assets/images/yisi.jpg"),
						addr:"伊斯坦布尔"
					},
					{
						src:require("../assets/images/basai.jpg"),
						addr:"巴塞罗那"
					},
					{
						src:require("../assets/images/misike.jpg"),
						addr:"莫斯科"
					},{
						src:require("../assets/images/madeli.jpg"),
						addr:"马德里"
					},
					{
						src:require("../assets/images/malan.jpg"),
						addr:"米兰"
					}
				],
				list9:[
					{
						addr:"爱尔兰"
					},
					{
						addr:"爱沙尼亚"
					},
					{
						addr:"奥地利"
					},
					{
						addr:"白俄罗斯"
					},
					{
						addr:"保加利亚"
					},
					{
						addr:"比利时"
					},
					{
						addr:"冰岛"
					},
					{
						addr:"波兰"
					},
					{
						addr:"丹麦"
					},
					{
						addr:"德国"
					},
					{
						addr:"俄罗斯"
					},
					{
						addr:"法国"
					},
					{
						addr:"芬兰"
					},
					{
						addr:"黑山"
					},
					{
						addr:"荷兰"
					},
					{
						addr:"捷克"
					},
					{
						addr:"克罗地亚"
					},
					{
						addr:"立陶宛"
					},
					{
						addr:"罗马尼亚"
					},
					{
						addr:"卢森堡"
					},
					{
						addr:"马耳他"
					},
					{
						addr:"挪威"
					},
					{
						addr:"葡萄牙"
					},
					{
						addr:"马耳他"
					},
					{
						addr:"挪威"
					},
					{
						addr:"葡萄牙"
					},
					{
						addr:"瑞典"
					},
					{
						addr:"瑞士"
					},
					{
						addr:"塞尔维亚"
					},
					{
						addr:"斯洛伐克"
					},
					{
						addr:"斯洛文尼亚"
					},
					{
						addr:"土耳其"
					},
					{
						addr:"乌克兰"
					},
					{
						addr:"西班牙"
					},
					{
						addr:"希腊"
					},
					{
						addr:"匈牙利"
					},
					{
						addr:"意大利"
					},
					{
						addr:"英国"
					}
				],
				list10:[
					{
						src:require("../assets/images/niu.jpg"),
						addr:"纽约"
					},
					{
						src:require("../assets/images/luoshanji.jpg"),
						addr:"洛杉矶"
					},
					{
						src:require("../assets/images/saiban.jpg"),
						addr:"塞班"
					},
					{
						src:require("../assets/images/jiu.jpg"),
						addr:"旧金山"
					},
					{
						src:require("../assets/images/la.jpg"),
						addr:"拉斯维加斯"
					},
					{
						src:require("../assets/images/hua.jpg"),
						addr:"华盛顿"
					},
					{
						src:require("../assets/images/xiyatu.jpg"),
						addr:"西雅图"
					},{
						src:require("../assets/images/wen.jpg"),
						addr:"温哥华"
					},
					{
						src:require("../assets/images/zhijiage.jpg"),
						addr:"芝加哥"
					}
				],
				list11:[
					{
						addr:"波多黎各"
					},
					{
						addr:"古巴"
					},
					{
						addr:"加拿大"
					},
					{
						addr:"美国"
					},
					{
						addr:"墨西哥"
					}
				],
				list12:[
					{
						src:require("../assets/images/xini.jpg"),
						addr:"悉尼"
					},
					{
						src:require("../assets/images/moerben.jpg"),
						addr:"墨尔本"
					},
					{
						src:require("../assets/images/huang.jpg"),
						addr:"黄金海岸"
					},
					{
						src:require("../assets/images/ao.jpg"),
						addr:"奥克兰"
					},
					{
						src:require("../assets/images/huanghouzhen.jpg"),
						addr:"皇后镇"
					},
					{
						src:require("../assets/images/buli.jpg"),
						addr:"布里斯班"
					},
					{
						src:require("../assets/images/luotuo.jpg"),
						addr:"罗托鲁瓦"
					},
					{
						src:require("../assets/images/jidu.jpg"),
						addr:"基督城"
					},{
						src:require("../assets/images/bosi.jpg"),
						addr:"帕斯"
					}
				],
				list13:[
					{
						addr:"澳大利亚"
					},
					{
						addr:"法属波利尼西亚"
					},
					{
						addr:"新西兰"
					}
				],
				list14:[
					{
						src:require("../assets/images/kailuo.jpg"),
						addr:"开罗"
					},
					{
						src:require("../assets/images/kaipudu.jpg"),
						addr:"开普敦"
					},
					{
						src:require("../assets/images/lukesuo.jpg"),
						addr:"卢克索"
					},
					{
						src:require("../assets/images/ya.jpg"),
						addr:"亚历山大"
					},
					{
						src:require("../assets/images/yue.jpg"),
						addr:"约翰内斯堡"
					},
					{
						src:require("../assets/images/nei.jpg"),
						addr:"内罗毕"
					},
					{
						src:require("../assets/images/busa.jpg"),
						addr:"卡萨布兰卡"
					},
					{
						src:require("../assets/images/asi.jpg"),
						addr:"阿斯旺"
					},{
						src:require("../assets/images/mala.jpg"),
						addr:"马拉喀什"
					}
				],
				list15:[
					{
						addr:"埃及"
					},
					{
						addr:"津巴布韦"
					},
					{
						addr:"肯尼亚"
					},
					{
						addr:"卢旺达"
					},
					{
						addr:"毛里求斯"
					},
					{
						addr:"摩洛哥"
					},
					{
						addr:"纳米比亚"
					},
					{
						addr:"南非"
					},
					{
						addr:"塞舌尔"
					},
					{
						addr:"坦桑尼亚"
					}
				],
				list16:[
					{
						src:require("../assets/images/liyue.jpg"),
						addr:"里约热内卢"
					},
					{
						src:require("../assets/images/sheng.jpg"),
						addr:"圣保罗"
					},
					{
						src:require("../assets/images/buyi.jpg"),
						addr:"布宜诺斯艾利斯"
					},
					{
						src:require("../assets/images/basi.jpg"),
						addr:"巴西利亚"
					},
					{
						src:require("../assets/images/shengdi.png"),
						addr:"圣地亚哥（智利）"
					},
					{
						src:require("../assets/images/yiguasu.jpg"),
						addr:"伊瓜苏"
					},
					{
						src:require("../assets/images/laba.jpg"),
						addr:"拉巴斯"
					}
				],
				list17:[
					{
						addr:"阿根廷"
					},
					{
						addr:"巴西"
					},
					{
						addr:"秘鲁"
					},
					{
						addr:"玻利维亚"
					},
					{
						addr:"厄瓜多尔"
					},
					{
						addr:"乌拉圭"
					},
					{
						addr:"智利"
					},
					{
						addr:"南非"
					}
				],
				list18:[
					{
						src:require("../assets/images/nanji.jpg"),
						addr:"南极"
					}
				]
			}
		}
	}
</script>

<style scoped="scoped">
	.search{
		width: 95%;
		margin: 20px auto;
		background: #f7f7f7;
		border-bottom-left-radius: 20px;
		border-top-left-radius: 20px;
		border-bottom-right-radius: 20px;
	}
	input[type='search']{
		border: 0;
		outline: none;
		display: block;
		height: 32px;
		line-height: 32px;
		padding: 0 34px 0 40px;
		background: url('../../dist/search.png') 16px 8px no-repeat;
		background-size: 15px 15px;
		color: #3d3d3d;
		font-size: 14px;
		text-align: left;
	}
	
	.mint-navbar{
		flex-direction: column;
		text-align: left;
		width: 25%;
		float: left;
		background: #f7f7f7;
		height: 150vh;
	}
	.mint-navbar span{
		font-size: 18px;
		margin-left: 20px;
	}
	.mint-tab-container{
		float: right;
		width: 70%;
	}
	.mint-navbar .mint-tab-item.is-selected{
		border-bottom: none;
		margin-bottom: 0px;
		border-left: 3px solid #ffd900;
		color: #fdc34f;
		margin-left: 3px;
		background: #FFFFFF;
	}
	.mint-tab-item-label{
		font-size: 16px;
	}
	.mint-tab-item{
		flex: 0;
	}
	.mint-navbar .mint-tab-item{
		padding: 0;
	}
	.mint-navbar .mint-tab-item span{
		line-height: 50px;
	}
	/*推荐*/
	.recommend{
		margin: 3% 0;
	}
	h3{
		color: #999999;
		line-height: 40px;
		font-weight: 500;
	}
	ul{
		display: flex;
		/*justify-content: space-around;*/
		flex-wrap: wrap;
		text-align: center;
	}
	ul li{
		width: 30%;
		font-size: 14px;
		line-height: 25px;
		margin-right: 6px;
	}
	ul li img{
		width: 100%;
		border-radius: 5px;
	}
	.north ul li:last-child img{
		height: 12vh;
	}
	.more{
		border: 1px solid #fca500;
		color: #fca500;
		width: 50%;
		margin: 10% auto;
		padding: 5% 10%;
		text-align: center;
	}
	/*中国*/
	.all ul li,.asia1 ul li,.europe1 ul li,.north1 ul li,.oceania1 ul li,.africa1 ul li,.south1 ul li{
		background: #f7f7f7;
		margin-bottom: 10px;
		border-radius: 5px;
	}
	/*非洲*/
	.africa ul li:nth-child(3) img{
		height: 12vh;
	}
	/*南美洲*/
	.south ul li:nth-child(5) img{
		height: 12vh;
	}
</style>
