<template>
	<main @click="ha()">
		<div class="top">
			<swiper :options="swiperOption">
		        <swiper-slide v-for="(v,i) in list" v-if="m==0">
		        	<img :src="v.src" alt="" />
		        </swiper-slide>
				
				<swiper-slide v-for="(v,i) in list" v-if="m==1">
					<img :src="v.src1" alt="" />
				</swiper-slide>
				
				<swiper-slide v-for="(v,i) in list" v-if="m==2">
					<img :src="v.src2" alt="" />
				</swiper-slide>
				
				<swiper-slide v-for="(v,i) in list" v-if="m==3">
					<img :src="v.src3" alt="" />
				</swiper-slide>
				
				<swiper-slide v-for="(v,i) in list" v-if="m==4">
					<img :src="v.src4" alt="" />
				</swiper-slide>
				
				<swiper-slide v-for="(v,i) in list" v-if="m==5">
					<img :src="v.src5" alt="" />
				</swiper-slide>
				
		        <div class="swiper-pagination" slot="pagination"></div>
			</swiper>
			
			
			<img src="../assets/images/cart.png" alt="" class="cart">
	    	<p class="jingnei">境内当地玩乐</p>
	    	<div class="tu">
	    		<span>图片</span>
	    		<span>行程</span>
	    	</div>
    	</div>
	    
	    <!--第一部分-->
	    <div class="one">
	    	<p class="price">￥{{price}}</p>
	    	<h2>{{msg}}</h2>
	    	<div class="comment">
	    		<span>4.5分 非常好</span>
	    		<span>评论103条</span>
	    		<span>月销6笔</span>
	    	</div>
	    	<div class="fly" @click.stop="fly()">
	    		<div>
	    			<img src="../assets/images/fly.png"/>
	    		</div>
	    		<div>
	    			<img src="../assets/images/sure.png" alt="" />
	    			<span>更改则赔付</span>
	    		</div>
	    		<div>
	    			<img src="../assets/images/sure.png" alt="" />
	    			<span>承诺不加价</span>
	    		</div>
	    		<div>
	    			<img src="../assets/images/sure.png" alt="" />
	    			<span>取消则赔付</span>
	    		</div>
	    		<div>
	    			<img src="../assets/images/right.png" alt="" />
	    		</div>
	    	</div>
	    </div>
		<div class="over" :class="{over0:over}">
			<div class="content" @click.stop="">
				<div class="title"><img src="../assets/images/fly.png" alt=""></div>
				<div class="cont">
					<p>服务说明</p>
					<div>
						<p><img src="../assets/images/sure.png" alt="">出票保障</p>
						<div>订单生效后，商家未在规定时间内按照订单或约定内容出票且影响买家使用的，商家赔付买家商品实际成交金额的30%（但最高不超过500元）。</div>
					</div>
					<div>
						<p><img src="../assets/images/sure.png" alt="">入园保障</p>
						<div>订单生效后，因商家原因导致买家无法正常使用门票，买家可在景区购买市场价票入园，差价由商家承担，同时，商家还需要赔偿买家商品实际成交金额的30%（但最高不超过500元）。</div>
					</div>
					<div>
						<p><img src="../assets/images/sure.png" alt="">注意事项</p>
						<div>以上保障内容如与《门票商品服务保障标准》有冲突的，以《门票商品服务保障标准》 为准。</div>
					</div>
					
					<p>基础服务</p>
					<div>
						<p><img src="../assets/images/red.png" alt="">注意事项</p>
						<div>不支持7天无理由退货</div>
					</div>
					<div>
						<p><img src="../assets/images/red.png" alt="">注意事项</p>
						<div>信用卡支付</div>
					</div>
					<div>
						<p><img src="../assets/images/red.png" alt="">注意事项</p>
						<div>集分宝</div>
					</div>
				</div>
			</div>
			<span :class="{yiya:yi}"></span>
			<p class="fini" @click.stop="fly0()">完成</p>
		</div>
	    
	    <!--促销-->
		<div class="two">
			<span>促销</span>
			<span>飞猪里程</span>
			<span>最多可送696飞猪里程</span>
			<span><img src="../assets/images/right.png"/></span>
		</div>
		<div class="three">
			<div>服务</div>
			<div>
				<p><img src="../assets/images/once.png" alt="" /></p>
				<p>该商品在支付成功后需等待卖家确认，平均确认时长1小时8分钟，通过率94%</p>
			</div>
		</div>
		
		<!--套餐类型-->
		<div class="four">
			<h2>套餐类型</h2>
			<ul>
				<li class="ye" v-for="(v,i) in list1" @click.stop="haShow(i)">
					<span>{{v.dec}}</span>
					<span>{{v.price}}</span>
					<img src="../assets/images/xia.png" alt="" />
				</li>
			</ul>
			<!--隐藏列表-->
			<div class="all">
				<div class="hide" v-for="(v,i) in hide" v-show="i==num">
					<div class="m1">
						<div>酒店</div>
						<div>{{v.one}}</div>
						<div>预定</div>
					</div>
					<div class="m2">
						<div>餐饮</div>
						<div>早餐 | 酒店自助早餐 | </div>
					</div>
					<div class="m3">
						<div>说明</div>
						<div>{{v.two}}</div>
					</div>
				</div>
			</div>
		</div>
		
		<!--宝贝评价-->
		<div class="five">
			<div class="baby">
				<h2>宝贝评价(37)</h2>
				<span>查看全部<img src="../assets/images/right.png" alt="" /></span>
			</div>
			<ul>
				<li v-for="(v,i) in list2">
					{{v.cont}}
				</li>
			</ul>
			<div class="per">
				<p>
					<img src="../assets/images/getAvatar.jpg" alt="" />
					<sup>a***7</sup>
				</p>
				<p>酒店不错，很方便，就是忘记带泳衣</p>
				<p>2019-08-05 19:01:50</p>
			</div>
			<div class="wen">
				<div class="baby">
					<h2>问大家(1)</h2>
					<span>查看全部<img src="../assets/images/right.png" alt="" /></span>
				</div>
				<p>
					<img src="../assets/images/wen.png" alt="" />
					<span>请问门票可以第二天使用吗?</span>
					<span>2个回答</span>
				</p>
			</div>
		</div>
		
		<!--旗舰店-->
		<div class="six">
			<div class="store">
				<img src="../assets/images/guangz.jpg" alt="" />
				<div class="guang">
					<p>广之旅旗舰店</p>
					<img src="../assets/images/fly.png" alt="" />
				</div>
				<div class="miao">
					<p>
						描述相符
						<span>4.9 <img src="../assets/images/gao.png" alt="" /></span>
					</p>
					<p>
						服务态度
						<span>4.9 <img src="../assets/images/gao.png" alt="" /></span>
					</p>
				</div>
				<span><img src="../assets/images/right.png" alt="" /></span>
			</div>
			<div class="tui">
				<div class="top">
					<h2>店铺推荐</h2>
					<span>查看全部<img src="../assets/images/right.png" alt="" /></span>
				</div>
				<ul>
					<li v-for="(v,i) in list3">
						<img :src="v.src" alt="" />
						<p>{{v.dec}}</p>
						<p>{{v.count}}</p>
						<p>{{v.price}}</p>
						<span>玩乐套餐</span>
					</li>
				</ul>
			</div>
		</div>
		
		<!--tab栏-->
		<div id="testNavBar">
			<ul class="mint-navbar" v-model="selected" :class='{fixed:fixed}' id="fix">
				<li class="mint-tab-item" id="1">
					<span class="yes" @click="toOne()">图文介绍</span>
					<span :class="{lala:la}"></span>
				</li>
				<li  class="mint-tab-item" id="2">
					<span class="yes" @click="toTwo()">商品详情</span>
					<span :class="{lala2:la1}"></span>
				</li>
				<li  class="mint-tab-item" id="3">
					<span class="yes" @click="toThree()">商品推荐</span>
					<span :class="{lala3:la2}"></span>
				</li>
			</ul>
		</div>
		<!-- tab-container -->
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<div class="s1">
					<h1>商家说亮点</h1>
					<ul class="shang">
						<li v-for="(v,i) in list4">
							<p>{{v.dec}}</p>
						</li>
					</ul>
				</div>
				<div class="s2">
					<h1>产品说明</h1>
					<ul>
						<li v-for="(v,i) in list5">
							<p>{{v.aaa}}</p>
							<p>{{v.bbb}}</p>
						</li>
					</ul>
				</div>
				<div class="s3">
					<h1>宝贝视频</h1>
					<div class="video">
						<video src="../assets/video/video.mp4" id="video"></video>
					</div>
					<div :class="{icon:icon,icon0:icon0}" @click="play()"></div>
				</div>
				<div class="s4">
					<h1 id="one">图文介绍</h1>
					<ul>
						<li v-for="(v,i) in list6">
							<img :src="v.src" alt="" />
						</li>
					</ul>
				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="2">
				<div class="xiang">
					<h1 id="two">商品详情</h1>
					<div>
						<ul>
							<li v-for="(v,i) in list7" @click="add($event)" class="lis" @mouseover="add0()" @mouseenter="add1(i)">
								{{v.title}}出发
							</li>
						</ul>
						<section>
							<div v-for="(v,i) in 9" :class="{line:i==num0}"></div>
						</section>
					</div>
				</div>
				<div class="yellow">
					{{msg0}}-网红5日游
				</div>
				<div class="xing">
					<h1>行程信息(5天4晚)</h1>
					<ul>
						<li v-for="(v,i) in list8">
							<div class="day">
								<h2>{{v.day}}</h2>
							</div>
							<div class="jing">
								<p>{{v.title1}} <span>{{v.time}}</span></p>
								<img :src="v.src" alt="" />
								<span>{{v.dec1}}</span>
							</div>
							<div class="eat">
								<p>{{v.title2}}</p>
							</div>
							<div class="zhu">
								<p>{{v.title3}}</p>
								<span>{{v.dec2}}</span>
							</div>
						</li>
					</ul>
				</div>
				<div class="container">
					<h2>费用包含</h2>
					<p v-for="(v,i) in list9">{{v.p}}</p>
				</div>
				<div class="nocont">
					<h2>费用不包含</h2>
					<p v-for="(v,i) in list10">{{v.p}}</p>
				</div>
				<div class="xu">
					<h2>预订须知</h2>
					<p v-for="(v,i) in list11">{{v.p}}</p>
				</div>
				<div class="say">
					<h2>保险说明</h2>
					<p>该商品不赠送保险，飞猪建议您自行购买出行保险，为您的旅行增加一份保障，家人添一份安心。</p>
				</div>
				<div class="cancel">
					<h2>取消政策</h2>
					<p>【买家违约】订单生效后，因买家原因取消订单的，费用扣除标准如下：</p>
					<table class="table table-bordered">
						<thead>
							<tr>
								<th>行驶开始前</th>
								<th>违约金(占订单总费用)</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>7日以上</td>
								<td>5%</td>
							</tr>
							<tr>
								<td>3-6日</td>
								<td>20%</td>
							</tr>
							<tr>
								<td>1-2日</td>
								<td>50%</td>
							</tr>
							<tr>
								<td>行程开始当日</td>
								<td>100%</td>
							</tr>
						</tbody>
					</table>
					<p>【商家违约】订单生效后，因商家原因取消订单的，除全额退款外，商家还应向买家支付下表对应金额的违约金：</p>
					<table class="table table-bordered">
						<thead>
							<tr>
								<th>行驶开始前</th>
								<th>违约金(占订单总费用)</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>7日以上</td>
								<td>5%</td>
							</tr>
							<tr>
								<td>3-6日</td>
								<td>10%</td>
							</tr>
							<tr>
								<td>1-2日</td>
								<td>20%</td>
							</tr>
							<tr>
								<td>行程开始当日</td>
								<td>70%</td>
							</tr>
						</tbody>
					</table>
					<p>针对飞猪专线或出境超市的商品，如商家按上述规定向买家支付的违约金金额低于订单金额的，商家应向买家支付与订单金额同等金额的违约金。</p>
					<p>注：订单生效的规定以《飞猪规则》的相关规定为准。</p>
				</div>
				<div class="jia">
					<h2>价格说明</h2>
					<ul>
						<li v-for="(v,i) in list12">
							<h3>{{v.title}}</h3>
							<p>{{v.p}}</p>
						</li>
					</ul>
				</div>
			</mt-tab-container-item>
			<div class="more" id="three">看了又看</div>
			<mt-tab-container-item id="3">
				<ul class="last">
					<li v-for="(v,i) in list13">
						<img :src="v.src" alt="" />
						<p>{{v.dec}}</p>
						<div class="bottom">
							<span>{{v.price}}</span>
							<span>{{v.num}}</span>
						</div>
						<span>{{v.top}}</span>
					</li>
				</ul>
			</mt-tab-container-item>
		</mt-tab-container>
		<!--底部导航栏-->
		<div class="footer">
			<div class="haha">
				<ul>
					<li>
						<p class="iconfont icon-kefuwangwang"></p>
						客服
					</li>
					<li>
						<p class="iconfont icon-shoucang"></p>
						收藏
					</li>
					<li>
						<p class="iconfont icon-dianpu"></p>
						 店铺
					</li>
				</ul>
			</div>
			<div class="xixi">
				<router-link to="/order"><span class="oh1">加入购物车</span></router-link>
				<router-link to="/order"><span class="oh2">立即购买</span></router-link>
			</div>
		</div>
	</main>
</template>

<script>
	export default {
	    data() {
			return {
				yi:false,
				over:false,
				la:true,
				la1:false,
				la2:false,
				num1:0,
				num0:0,
				m:'',
				price:'',
				msg:'',
				hide:false,
				icon:true,
				icon0:false,
				current:0,
				fixed:false,
				show:true,
				num:-1,
				selected:"1",
				msg0:'恩施出发',
				line:false,
				list:[],
				list1:[],
				list3:[],
				list8:[],
				list13:[],
				hide:[],
				list2:[
					{
						cont:"住宿环境很好(6)"
					},
					{
						cont:"价格实惠(3)"
					},
					{
						cont:"服务不错(1)"
					},
					{
						cont:"性价比很高(1)"
					},
					{
						cont:"娱乐项目不错(1)"
					}
				],
				list4:[
					{
						dec:"【国庆特惠】当天咨询下单最高可减599，每位赠恩施富硒绿茶，详询客服!"
					},
					{
						dec:"【网红专属】打造网红精品线路，独家策划，行走不一样的网红恩施 ！"
					},
					{
						dec:"【网红餐厅】网红餐厅，十大名吃-张关合渣，十年老店，带上胃去旅行！"
					},
					{
						dec:"【网红达人】网红打 CALL，市井之间尽是故事，行走的脚步从未停止过！"
					}
				],
				list5:[
					{
						aaa:"出发地",
						bbb:"杭州、武汉、北京、苏州、成都、南京、恩施、上海、广州"
					},
					{
						aaa:"目的地",
						bbb:"杭州、武汉、北京、苏州、成都、南京、恩施、上海、广州"
					},
					{
						aaa:"行程天数",
						bbb:"5天4晚"
					},
					{
						aaa:"交通方式",
						bbb:"去程汽车 返程汽车"
					},
					{
						aaa:"是否购物",
						bbb:"纯玩无购物"
					}
				],
				list6:[
					{
						src:require("../assets/images/t1.jpg")
					},
					{
						src:require('../assets/images/t2.jpg')
					},
					{
						src:require('../assets/images/t3.jpg')
					},
					{
						src:require('../assets/images/t4.png')
					},
					{
						src:require('../assets/images/t5.jpg')
					},
					{
						src:require('../assets/images/t6.jpg')
					},
					{
						src:require('../assets/images/t7.png')
					},
					{
						src:require('../assets/images/t8.jpg')
					},
					{
						src:require('../assets/images/t9.png')
					},
					{
						src:require('../assets/images/t10.jpg')
					},
					{
						src:require('../assets/images/t11.jpg')
					},
					{
						src:require('../assets/images/t12.png')
					}
				],
		    	list7:[
		    		{
		    			title:"恩施"
		    		},
		    		{
		    			title:"武汉"
		    		},
		    		{
		    			title:"上海"
		    		},
		    		{
		    			title:"南京"
		    		},
		    		{
		    			title:"杭州"
		    		},
		    		{
		    			title:"北京"
		    		},
		    		{
		    			title:"苏州"
		    		},
		    		{
		    			title:"广州"
		    		},
		    		{
		    			title:"成都"
		    		}
		    	],
		    	list9:[
		    		{
		    			p:"【酒店】全程入住指定酒店或备选酒店，不提供自然单间，产生自然单房的需补房差；全程如需大床房提前告知。"
		    		},
					{
						p:"【用餐】全程4早4正，正餐不吃不退，特别安排两大社会餐厅：1、张关合渣 ,2、土家摔碗酒 "
					},
					{
						p:"【景点】含所列景点第一道门票，团队票同进（不含景区内缆车、电梯、电瓶车及其他景区个人消费）。 赠送景点或项目因时间或天气原因不能前往或自动放弃，按“不退费用”和“不更换景点”处理！ 【交通】恩施地接指定委派高一级GPS安全监控系统旅游车配置空调旅游新车，确保每一游客一个正座。 临时退位：如客人在出发前3天临时取消，收取车位损失300元/人。"
					},
					{
						p:"【导游】持证优秀导游讲解服务，如5位以下成人散客不成团，由导游兼司机服务。 "
					},
					{
						p:"【购物】购物随客意（部分景区或酒店内设有购物场所，属于其自行商业行为）。 "
					},
					{
						p:"【接送】由公司派专职人员专车负责机场/火车站接送。"
					},
					{
						p:"【小孩】2岁以上1.2米以下儿童只含车位。超高及其它费用自理。 已购买《恩施旅行社责任险》（最高保额80万元/人），确保游客安全保障。强烈建议游客自行购买旅游意外险。"
					},
					{
						p:"【赠水】赠送矿泉水1人/天/瓶。"
					}
		    	],
		    	list10:[
		    		{
		    			p:"1、景区交通必须自理项目：恩施大峡谷景交30元/人、上行索道105元/人（景区规定，必须消费）屏山大峡谷船票60元/人，狮子关景交30元/人（景区规定，必须消费）"
		    		},
		    		{
		    			p:"2、景区交通自愿自理项目：恩施大峡谷手扶电梯30元/人，下行索道100元/人（自愿乘坐，不坐不产生）3、因不可抗因素而导致的额外费用及旅游期间一切个人消费"
		    		},
		    		{
		    			p:"3、如单人产生自然单房的需补房差"
		    		}
		    	],
		    	list11:[
		    		{
		    			p:"湖北想游国旅专营店竭诚为您服务，感谢您选择我们！"
		    		},
		    		{
		    			p:"1、官方客服主机：0718-8269885 / 0718-8269886 官方客服专员：杨婷 17771653430 /赵芙蓉 15971687055，我们会及时联系拍下行程的客户，您也可直接拨打该电话咨询。"
		    		},
		    		{
		    			p:"2、组团形式： 本产品与其他旅行社联合发团。 根据发团需要，本产品在部分行程段发生团友的变化，请您谅解。具体次数及行程段视线路收客情况而定。"
		    		},
		    		{
		    			p:"3、附加说明： 根据发团需要。行程中将换当地用车或换当地导游。由于此产品为散客拼团，所以有可能不使用同一辆车，不是同一个导游接待，请您见谅。"
		    		},
		    		{
		    			p:"4、行程成团说明：及时确认产品，下单成功即为订单确认，保证出游，二次确认产品，客人会在6小时内确认成团与否，您也可以第一时间联系我们客服电话咨询。"
		    		},
		    		{
		    			p:"5、行程游览中的景点游览可以自由游览（不跟导游一起游览）只要按导游说的集合时间到就可以了，此报价为包装价政策，中途放弃任何景点不退费用。敬请谅解。"
		    		},
		    		{
		    			p:"6、您预订的参团日期的前一天（21:00-22:00），导游会以电话或短信的形式与您联系确认行程，告知集合地点、时间、导游电话等信息，如超过22:00还未联系您，请回拨官方客服电话与我们联系！"
		    		},
		    		{
		    			p:"7、关于售后：参团过程中,如遇任何问题请当即与客服联系！，我们的客服会核实情况后给立即处理问题！请不要把问题带回家差评不是目的，解决问题才是关键，如若行程结束后再向我们反映，此时已经耽误了为您解决问题的最佳时间，旅游的心情已经破坏，我们也没能为亲提供最优质的服务！"
		    		}
		    	],
		    	list12:[
		    		{
		    			title:"划线价格",
		    			p:"指商品的门市价、零售价、服务提供商指导价或该商品的曾经展示过的销售价等，并非原价，仅供参考。"
		    		},
		    		{
		    			title:"未划线价格",
		    			p:"指商品在飞猪上的实时售价，不因表述的差异改变性质。具体成交价格根据商品参加活动，或会员使用优惠券、积分、里程等发生变化，最终以订单结算页价格为准。"
		    		},
		    		{
		    			p:"商家详情页（含主图）以图片或文字形式标注的一口价、促销价、优惠价等价格可能是在使用优惠券、满减或特定优惠活动和时段等情形下的价格，具体请以结算页面的标价、优惠条件或活动规则为准。"
		    		},
		    		{
		    			p:"此说明仅当出现价格比较时有效，具体请参见《淘宝价格发布规范》。若商家单独对划线价格进行说明的，以商家的表述为准。"
		    		}
		    	],
		    	swiperOption: {
		     		pagination: {
		       			el: '.swiper-pagination',
						type: 'fraction'
		  			}
		   		 }
		 	}
	    },
	    methods:{
			getFix(){
				var scrollTop=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				var offsetTop=document.querySelector('#fix').offsetTop;//2058
				var one=document.querySelector('#one').offsetTop;
				var two=document.querySelector('#two').offsetTop;
				var three=document.querySelector('#three').offsetTop;
				if(scrollTop>2058){
					this.fixed=true
				}else{
					this.fixed=false
				}
				
				if(scrollTop>one && scrollTop<two){
					this.la=true;
					this.la1=false;
					this.la2=false;
					
				}else if((scrollTop>two && scrollTop<three)){
					this.la1=true;
					this.la=false;
					this.la2=false;
				}else{
					this.la2=true;
					this.la1=false;
					this.la=false;
				}
			},
			toOne(){
				document.querySelector('#one').scrollIntoView(true);
				this.la=true;
				this.la1=false;
				this.la2=false;
			},
			toTwo(){
				document.querySelector('#two').scrollIntoView(true);
				this.la1=true;
				this.la=false;
				this.la2=false;
			},
			toThree(){
				document.querySelector('#three').scrollIntoView(true);
				this.la2=true;
				this.la1=false;
				this.la=false;
			},
			add(e){
				this.msg0=e.target.innerHTML;
				
			},
			add0(){
				var lis = document.getElementsByClassName('lis')
				var line=document.getElementById('line')
				for(let i=0;i<lis.length;i++){
					lis[i].onclick=function(){
						for(let j=0;j<lis.length;j++){
							lis[j].style.color='#000000'
						}
						this.style.color='#fdbf00'
					}
				}
			},
			add1(i){
				this.num0=i
			},
			haShow(i){
				this.num=i;
			},
			ha(){
				this.num=-1;
				this.over=false;
				this.yi=false;
			},
			play(){
				var video=document.getElementById('video');
				this.icon=!this.icon;
				this.icon0=!this.icon0;
				if(this.icon==false && video.pause){
					video.play();
				}else if(video.play()){
					video.pause();
				}
			},
			fly(){
				this.over=true;
				this.yi=true;
			},
			fly0(){
				this.over=false;
				this.yi=false;
			}
		},
	    mounted(){
	    	window.addEventListener('scroll',this.getFix);
			var _this=this;
			//默认去项目根路径寻找
			this.$http.get('./data/details.json')
			.then((response)=>{
				this.list=response.data.details;
				this.list1=response.data.taocan;
				this.list3=response.data.tui;
				this.list8=response.data.day;
				this.list13=response.data.kan;
				this.hide=response.data.hide;
			})
			
			if(this.$route.params.m==0){
				this.msg='私家沙滩|秦皇岛北戴河阿尔卡迪亚滨海度假酒店猪猪侠亲子房旅游Z',
				this.price='439-1392',
				this.m=0
			}else if(this.$route.params.m==1){
				this.msg='【即买即用】 柳州百里柳江夜游柳江船票瑞通1号豪华游船 2/3号普通',
				this.price='119',
				this.m=1
			}else if(this.$route.params.m==2){
				this.msg='[卡乐星球-大门票]柳州卡乐星球门票 卡乐星球票',
				this.price='309-2392',
				this.m=2
			}else if(this.$route.params.m==3){
				this.msg='北京/上海/广州/成都往返格鲁吉亚第比利斯5-30天经济舱含税机票',
				this.price='520-1022',
				this.m=3
			}else if(this.$route.params.m==4){
				this.msg='[融水双龙沟原始森林度假区-大门票]融水双龙沟原始森林景区 大门票',
				this.price='300-892',
				this.m=4
			}else{
				this.msg='【天津精华一日游】意式风情街+瓷房子+张园+网红图书馆+外滩游船',
				this.price='145-999',
				this.m=5
			}
		},
		destroyed(){
			window.removeEventListener('scroll',this.getFix);
		}
  	}
	
</script>
<style>
	.mint-tab-container-wrap{
		display: flex;
		flex-wrap: wrap;
	}
</style>

<style scoped="scoped">
	a{
		text-decoration: none;
	}
	.swiper-container{
		width: 100%;
	}
	main{
		background: #f2f3f4;
	}
	.top{
		position: relative;
	}
	.swiper-slide>img:nth-child(1){
		width: 100%;
	}
	.cart{
		position: absolute;
		margin: 3%;
		width: 8%;
		right: 0px;
		top: 0px;
		background: rgba(0,0,0,0.3);
		border-radius: 50%;
		z-index: 9999;
	}
	.jingnei{
		position: absolute;
		left: 20px;
		bottom: 38px;
		color: #FFFFFF;
		font-size: 12px;
		font-weight: bold;
		padding: 5px 10px;
		background: rgba(0,0,0,0.5);
		border-radius: 10px;
		z-index: 9999;
	}
	.tu{
		position: absolute;
		bottom: 10%;
		left: 40%;
		z-index: 9999;
	}
	.tu>span{
		background: #FFFFFF;
		border-radius: 10px;
		font-size: 12px;
		padding: 3px 15px;
	}
	.tu span:nth-child(1){
		background: #ffcd00;
	}
	.swiper-pagination-fraction{
		position: absolute;
		color: #FFFFFF;
		font-size: 12px;
		bottom: 10%;
		transform: translateX(350px);
		width: 10%;
		background: rgba(0,0,0,0.5);
		border-radius: 10px;
		padding: 3px 5px;
	}
	
	.one,.two,.three,.four,.five{
		background: #FFFFFF;
		padding: 0 20px;
		margin: 0 auto 20px;
		vertical-align: middle;
	}
	.one .price{
		color: #ff5a0f;
		font-size: 30px;
		line-height: 50px;
	}
	.one h2{
		color: #333333;
		line-height: 23px;
		font-size: 18px;
		margin-bottom: 10px;
	}
	.one .comment{
		font-size: 14px;
		color: #666666;
		margin-bottom: 10px;
		display: flex;
		justify-content: space-between;
	}
	.one .fly{
		display: flex;
		justify-content: space-between;
		font-size: 14px;
		color: #666666;
		line-height: 25px;
	}
	.fly div img{
		width: 10%;
	}
	.fly div:nth-child(1){
		width: 15%;
	}
	.fly div:nth-child(1) img{
		width: 100%;
	}
	.fly div:nth-child(5){
		line-height: 32px;
	}
	.fly div:nth-child(5) img{
		width: 60%;
	}
	
	.two{
		position: relative;
		line-height: 50px;
	}
	.two span:nth-child(1){
		color: #666666;
		font-size: 14px;
		vertical-align: middle;
	}
	.two span:nth-child(2){
		color: #ff7637;
		border: 1px solid #ff7637;
		font-size: 12px;
		margin: 0 10px;
		vertical-align: middle;
	}
	.two span:nth-child(3){
		color: #333333;
		font-size: 14px;
		vertical-align: middle;
	}
	.two span:nth-child(4){
		position: absolute;
		right: 20px;
		width: 2%;
	}
	.two span:nth-child(4) img{
		width: 100%;
		position: relative;
		left: -5px;
	}
	.three{
		overflow: hidden;
		padding: 20px;
	}
	.three div{
		float: left;
		vertical-align: middle;
	}
	.three div:nth-child(1){
		width: 10%;
		color: #666666;
		font-size: 14px;
	}
	.three div:nth-child(2){
		width: 90%;
		font-size: 12px;
		line-height: 18px;
	}
	.three div:nth-child(2) img{
		width: 18%;
	}
	
	/*套餐类型*/
	.four{
		position: relative;
	}
	.four h2{
		font-size: 20px;
		line-height: 50px;
	}
	.four ul>li{
		font-size: 18px;
		color: #333333;
		line-height: 50px;
		border-top: 1px solid rgba(0,0,0,0.05);
		position: relative;
	}
	.four ul li>span:nth-child(2){
		color: #ff5000;
		position: absolute;
		right: 50px;
	}
	.four ul li img{
		width: 3%;
		position: absolute;
		right: 10px;
		top: 20px;
	}
	/*隐藏的列表*/
	.hide{
		background: #f2f3f4;
		position: relative;
		margin: 0 auto;
		padding: 10px;
	}
	.hide>div{
		margin-bottom: 10px;
		display: flex;
	}
	.m1 div:first-child,.m2 div:first-child,.m3 div:first-child{
		color: #999999;
		width: 15%;
	}
	.m1 div:nth-child(2),.m2 div:nth-child(2),.m3 div:nth-child(2){
		font-size: 16px;
		width: 50%;
		margin-left: 20px;
		line-height: 22px;
	}
	.m1 div:nth-child(3),.m2 div:nth-child(3),.m3 div:nth-child(3){
		font-size: 16px;
		text-align: center;
		color: #FFFFFF;
		background: #ff6d00;
		width: 60px;
		height: 30px;
		line-height: 30px;
		border-radius: 20px;
		margin-left: 20px;
	}
	.all>div{
		position: absolute;
		width: 100%;
		z-index: 100;
	}
	.all>div:first-child{
		top: 100px;
		left: 0px;
	}
	.all>div:nth-child(2){
		top: 150px;
		left: 0px;
	}
	.all>div:nth-child(3){
		top: 200px;
		left: 0px;
	}
	.all>div:nth-child(4){
		top: 250px;
		left: 0px;
	}
	
	/*宝贝评价*/
	.five h2{
		font-size: 20px;
		line-height: 50px;
	}
	.five ul{
		display: flex;
		flex-wrap: wrap;
	}
	.five ul li{
		background: #fff9de;
		border-radius: 10px;
		padding: 2% 3%;
		margin: 0 10px 10px 0;
	}
	.baby{
		position: relative;
	}
	.baby>span{
		position: absolute;
		right: 20px;
		top: 15px;
		color: #fca500;
	}
	.baby img{
		width: 10%;
		position: relative;
		left: 10px;
		top: 1px;
	}
	.per{
		border-bottom: 1px solid rgba(0,0,0,0.05);
	}
	.per p{
		line-height: 30px;
	}
	.per img{
		width: 8%;
		border-radius: 50%;
	}
	.per sup{
		color: #666666;
	}
	.per p:nth-child(3){
		color: #666666;
	}
	.wen{
		padding-bottom: 20px;
	}
	.wen>p>img{
		width: 4%;
	}
	.wen>p{
		position: relative;
	}
	.wen>p>span:nth-child(3){
		color: #666666;
		position: absolute;
		right: 20px;
	}
	
	/*旗舰店*/
	.six{
		background: #FFFFFF;
	}
	.store{
		display: flex;
		width: 95%;
		margin:0 auto;
		padding: 2% 0;
		border-bottom: 1px solid rgba(0,0,0,0.05);
	}
	.store>img{
		width: 15%;
		margin-right: 10px;
	}
	.store>span img{
		width: 70%;
		transform: translateY(100%);
		position: relative;
		left: 5px;
	}
	.guang{
		position: relative;
		top: 5px;
		width: 50%;
	}
	.guang p{
		font-size: 20px;
		line-height: 30px;
	}
	.guang>img{
		width: 25%;
	}
	.miao{
		color: #999999;
	}
	.miao p{
		line-height: 30px;
	}
	.miao span{
		color: #fca500;
	}
	.miao span img{
		width: 15%;
		position: relative;
		top: 3px;
	}
	
	/*店铺推荐*/
	.tui{
		width: 95%;
		margin: 20px auto;
	}
	.tui h2{
		font-size: 20px;
	}
	.tui .top{
		position: relative;
	}
	.tui .top span img{
		width: 10%;
		position: relative;
		left: 5px;
	}
	.tui .top span{
		position: absolute;
		right: 20px;
		top: 1px;
		color: #fca500;
	}
	.tui ul{
		margin-top: 20px;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.tui ul li{
		width: 30%;
		position: relative;
		margin-bottom: 20px;
	}
	.tui ul li img{
		width: 100%;
		border-radius: 10px;
	}
	.tui ul li p:nth-child(2){
		font-size: 14px;
		color: #333333;
		line-height: 20px;
		margin-top: 10px;
		text-overflow: ellipsis;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.tui ul li p:nth-child(3){
		font-size: 12px;
		color: #999999;
		line-height: 30px;
	}
	.tui ul li p:nth-child(4){
		color: #ff5000;
	}
	.tui ul li span{
		position: absolute;
		top: 0px;
		left: 0px;
		color: #FFFFFF;
		background: rgba(0,0,0,0.8);
		font-size: 14px;
		padding: 5%;
		border-top-left-radius: 10px;
	}
	/*tab栏*/
	.mint-tab-container-wrap {
	    display: block;
	}
	.mint-tab-container-item{
		display: block!important;
		margin-bottom: 20px;
	}
	.yes{
		font-size: 18px;
		color: #333333;
	}
	.mint-navbar{
		margin-bottom: 20px;
		background-color: #fff;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		text-align: center;
	}
	.mint-tab-item {
	    display: block;
	    padding: 7px 0;
	    -webkit-box-flex: 1;
	    -ms-flex: 1;
	    flex: 1;
		padding: 10px 0 0 0;
	}
	.mint-tab-item-label {
	    font-size: 18px;
	}
	.lala{
		display: inline-block;
		width: 80px;
		height: 4px;
		background: #ffc900;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		position: relative;
		top: 2px;
	}
	.lala2{
		display: inline-block;
		width: 80px;
		height: 4px;
		background: #ffc900;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		position: relative;
		top: 2px;
	}
	.lala3{
		display: inline-block;
		width: 80px;
		height: 4px;
		background: #ffc900;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		position: relative;
		top: 2px;
	}
	
	
	.s1,.s2,.s3,.s4{
		padding: 1% 3%;
		background: #FFFFFF;
		margin-bottom: 20px;
	}
	.mint-tab-container-item h1{
		font-size: 20px;
		line-height: 50px;
		padding-left: 10px;
	}
	.shang li{
		position: relative;
	    padding-left: 20px;
	    font-size: 18px;
	    line-height: 20px;
	    color: #333333;
	    margin-bottom: 10px;
	}
	.shang li:before{
		content: "";
	    background: url('../assets/images/start.png') no-repeat;
	    background-size: 100%;
	    position: absolute;
	    top: 4px;
	    left: 0;
	    width: 12px;
	    height: 11px;
	}
	.s2 ul li{
		border-top: 1px solid rgba(0,0,0,0.1);
		padding: 30px 0;
		overflow: hidden;
	}
	.s2 ul li p:nth-child(1){
		color: #999999;
		font-size: 18px;
		float: left;
		width: 20%;
		line-height: 25px;
	}
	.s2 ul li p:nth-child(2){
		float: right;
		width: 70%;
		line-height: 25px;
	}
	/*宝贝视频*/
	.s3{
		position: relative;
	}
	.icon{
		position: absolute;
		left: 50%;
		margin-left: -30px;
		top: 55%;
		margin-top: -30px;
		width: 60px;
	    height: 60px;
	    background: url("../assets/images/play.png") no-repeat 50%;
	    background-size: cover;
	    z-index: 999;
	}
	.icon0{
		position: absolute;
		left: 50%;
		margin-left: -30px;
		top: 55%;
		margin-top: -30px;
		width: 60px;
	    height: 60px;
	    background: url("../assets/images/pause.png") no-repeat 50%;
	    background-size: cover;
	    z-index: 999;
	}
	.s3 video{
		width: 100%;
		animation-play-state: paused;
	}
	
	/*固定*/
	.fixed{
		width: 100%;
	    position: fixed;
	    top: 0;
	    left: 0;
	    z-index: 1000;
	}
	/*图文介绍*/
	.s4 ul li{
		width: 100%;
	}
	.s4 ul li img{
		width: 100%;
	}
	/*商品详情*/
	.xiang,.container,.nocont,.xu,.say,.cancel,.jia{
		padding: 1% 3%;
	    background: #FFFFFF;
	    margin-bottom: 20px;
	    overflow: hidden;
	}
	.xiang div{
		overflow: scroll;
	}
	.xiang ul,section{
		display: flex;
		width: 200%;
		flex-wrap: nowrap;
		padding-bottom: 20px;
	}
	.xiang ul li{
		width: 30%;
		font-size: 18px;
		color: #333333;
		line-height: 30px;
	}
	.xiang ul li:first-child{
		color: #fdbf00;
	}
	.yellow{
		font-size: 14px;
		line-height: 30px;
		border-radius: 3px;
		text-align: center;
		margin-left: 10px;
		width: 40%;
		background: linear-gradient(to right, #f5dc1d, #ffc604); /* 标准的语法 */
	}
	section>div{
		width: 80px;
		height: 3px;
		background: #fdbf00;
		margin-right: 10px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		bottom: 0px;
		opacity: 0;
	}
	section div.line{
		opacity: 1;
	}
	/*行程信息*/
	.xing .day,.jing,.eat,.zhu{
		position: relative;
	}
	.xing .day:after,.jing:after,.eat:after,.zhu:after{
		content: "";
	    position: absolute;
	    left: 0;
	    top: 10px;
	    width: 7px;
	    height: 7px;
	    background: #ffc900;
	    border-radius: 50%;
	    -mox-box-shadow: 0 0 1px #fff;
	    box-shadow: 0 0 1px #fff;
	}
	.xing ul li img{
		width:100%
	}
	.xing .day h2,.eat{
		line-height: 50px;
		font-size: 18px;
		padding-left: 20px;
	}
	.xing ul{
		position: relative;
	}
	.xing ul li{
		padding: 6% 3%;
	    background: #FFFFFF;
	    margin-bottom: 20px;
	}
	.day:before,.jing:before,.eat:before,.zhu:before{
		content: "";
	    position: absolute;
	    top: 20px;
	    left: 3px;
	    height: 100%;
	    border-left: 1px dashed #ccc;
	    overflow: hidden;
	}
	.jing,.zhu{
		padding-left: 20px;
	}
	.jing p,.zhu>p{
		font-size: 18px;
		line-height: 50px;
	}
	.jing p>span{
		color: #999999;
		font-size: 16px;
	}
	.jing>span{
		font-size: 12px;
		color: #999999;
	}
	.zhu>span{
		color: #333333;
		font-size: 14px;
	}
	/*费用包含/费用不包含/预定须知/保险说明*/
	.container h2,.nocont h2,.xu h2,.say h2,.jia h2,.cancel h2{
		line-height: 50px;
		font-size: 20px;
	}
	.container p,.nocont p,.xu p,.say p,.jia p{
		line-height: 22px;
		font-size: 14px;
		color: #333333;
	}
	/*取消政策*/
	.cancel p{
		font-size: 18px;
		line-height: 25px;
		color: #333333;
	}
	.table{
		width: 100%;
    	border: 1px solid #ccc;
	}
	.table th,.table td{
		text-align: left;
		border: 1px solid #ccc;
    	padding: 0 10px;
	}
	.table th:first-child{
		width: 30%;
	}
	.table th{
		font-size: 18px;
		color: #333333;
		line-height: 30px;
	}
	.table td{
		color: #333333;
		line-height: 30px;
	}
	/*价格说明*/
	.jia h3,.jia p{
		margin-bottom: 10px;
		position: relative;
		padding-left: 20px;
	}
	.jia h3:before,.jia p:before{
		content: '';
		position: absolute;
		width: 3px;
		height: 3px;
		background: #ffc900;
		left: 0px;
		top: 5px;
		border-radius: 50%;
	}
	/*看了又看*/
	.more{
		width: 100%;
		font-size: 18px;
		text-align: center;
		line-height: 30px;
		position: relative;
	}
	.more::after{
		position: absolute;
		content: '';
		width: 100px;
		height: 1px;
		background: #CCCCCC;
		top: 15px;
		right: 50px;
	}
	.more::before{
		position: absolute;
		content: '';
		width: 100px;
		height: 1px;
		background: #CCCCCC;
		top: 15px;
		left: 50px;
	}
	/*商品推荐*/
	.last{
		margin: 20px 0 100px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.last li{
		width: 49%;
		background: #FFFFFF;
		margin-bottom: 10px;
		position: relative;
	}
	.last li img{
		width: 100%;
	}
	.last li p{
		width: 90%;
		margin: 0 auto;
		font-size: 16px;
		color: #333333;
		line-height: 25px;
		margin-top: 10px;
		text-overflow: ellipsis;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.last li .bottom{
		margin-top: 50px;
		position: relative;
		padding: 0 0 20px 10px;
	}
	.last li .bottom>span:nth-child(1){
		color: red;
		font-size: 18px;
	}
	.last li .bottom>span:nth-child(2){
		color: #999999;
		font-size: 16px;
		position: absolute;
		right: 20px;
	}
	.last li>span{
		font-size: 14px;
		color: #FFFFFF;
		background: rgba(0,0,0,0.5);
		position: absolute;
		left: 0px;
		top: 0px;
		padding: 2%;
		border-bottom-right-radius: 10px;
	}
	/*底部导航*/
	.footer{
		width: 100%;
		position: fixed;
		bottom: 0px;
		left: 0px;
		background: #FFFFFF;
		display: flex;
		padding: 10px;
	}
	.haha{
		
	}
	.haha ul{
		display: flex;
		text-align: center;
	}
	.haha ul li{
		margin-right: 20px;
	}
	.iconfont{
		font-size: 25PX;
    	color: #ff5100;
    	margin-bottom: 5px;
	}
	.xixi{
		font-size: 16px;
		color: #000000;
		line-height: 50px;
	}
	.xixi .oh1{
		display: inline-block;
		width: 120px;
		text-align: center;
		color: #FFFFFF;
		background: linear-gradient(to right, #ffcb01, #ff9502); 
		border-top-left-radius: 30px;
		border-bottom-left-radius: 30px;
	}
	.xixi .oh2{
		display: inline-block;
		width: 120px;
		text-align: center;
		color: #FFFFFF;
		background: linear-gradient(to right, #ff7501, #ff3750);
		border-top-right-radius: 30px;
		border-bottom-right-radius: 30px;
		position: relative;
		left: -5px;
	}
	
	.over{
		position: fixed;
		width: 100%;
		left: 0px;
		bottom: -539px;
		z-index: 10000;
		transition: -webkit-transform 0.2s linear 0s;
		visibility: visible;
		display: block;
		height: 539px;
		transform: translate3d(0px, 0, 0px);
	}
	.over0{
		transform: translate3d(0px, -100%, 0px);
	}
	.over .content{
		background: #fff;
		font-size: 16px;
		color: #333;
		height: 100%;
		border-radius: .24rem .24rem 0 0;
		padding-bottom: env(safe-area-inset-bottom);
		position: relative;
		z-index: 99999;
		overflow: auto;
	}
	.yiya{
		display: inline-block;
		position: fixed;
		z-index: 99;
		left: 0;
		bottom: -100px;
		top: -200px;
		right: 0;
		background-color: rgba(0,0,0,.6);
	}
	.over .title{
		border-top-left-radius: 9px;
		border-top-right-radius: 9px;
		box-sizing: border-box;
		background: #ffdb00;
		text-align: center;
		padding: 10px 0;
		position: fixed;
		width: 100%;
	}
	.title>img{
		width: 20%;
	}
	.cont{
		margin: 50px 20px;
	}
	.cont>p{
		text-align: center;
		font-size: 18px;
		line-height: 50px;
	}
	.cont>div{
		margin-bottom: 20px;
	}
	.cont>div img{
		width: 3%;
		margin-right: 10px;
	}
	.cont>div>p{
		font-size: 18px;
		margin-bottom: 10px;
	}
	.cont>div>div{
		margin-left: 20px;
		color: gray;
		line-height: 22px;
	}
	.fini{
		background: #ffc900;
		text-align: center;
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px;
		border-top-right-radius: 20px;
		border-bottom-right-radius: 20px;
		position: fixed;
		bottom: 0px;
		left: 0;
		width: 95%;
		margin-left: 10px;
		line-height: 50px;
		z-index: 999999;
	}
</style>