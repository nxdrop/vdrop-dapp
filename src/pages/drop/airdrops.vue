<template>
	<div class="page" data-app="true">
		<!-- <Header /> -->
		<div class="page-main">
			<div class="container">
				<!-- <div class="page-section">
					<div class="mys-main flex-center">
						<div class="mys-photo">
							<img src="@/assets/images/page4/box.gif" >
						</div>
						<div class="flex_bd">
							<div class="mys-title">Mystery Box</div>
							<div class="cion-cells flex-center">
								<div class="flex_bd">
									<v-row >
										<v-col cols="6" sm="3" md="3">
											<div class="cion-cell">
												<div class="cion-ico">
													<img src="@/assets/images/huobi56.jpg" >
												</div>
												<div class="flex_bd">
													<div class="cion-x">HT Price</div>
													<div class="cion-val">7.161</div>
												</div>
											</div>
										</v-col>
										<v-col cols="6" sm="3" md="3">
											<div class="cion-cell">
												<div class="cion-ico">
													<img src="@/assets/images/bnb56.jpg" >
												</div>
												<div class="flex_bd">
													<div class="cion-x">BNB Price</div>
													<div class="cion-val">0.155</div>
												</div>
											</div>
										</v-col>
										<v-col cols="6" sm="3" md="3">
											<div class="cion-cell">
												<div class="cion-ico">
													<img src="@/assets/images/Polygon56.jpg" >
												</div>
												<div class="flex_bd">
													<div class="cion-x">Matic Price</div>
													<div class="cion-val">42.778</div>
												</div>
											</div>
										</v-col>
										<v-col cols="6" sm="3" md="3">
											<div class="cion-cell">
												<div class="cion-ico">
													<img src="@/assets/images/USDT56.png" >
												</div>
												<div class="flex_bd">
													<div class="cion-x">USDT TRC</div>
													<div class="cion-val">69</div>
												</div>
											</div>
										</v-col>
									</v-row>
								</div>
								<button class="btn btn-blue btn-open">Buy & Open</button>
							</div>
							<div class="mys-cells">
								<v-row >
									<v-col v-for="(item,index) in myslist" :key="index" cols="12" sm="6" >
										<div class="mys-cell">
											<div class="mys-ico">
												<img :src="item.pic" >
											</div>
											<div class="flex_bd">
												<div class="mys-cell-title">Avatar Tank Operator</div>
												<div class="mys-intro line-2">Defence 1,Attack 2,Speed. 2 of 9 left,17%,Rare</div>
											</div>
										</div>
									</v-col>
								</v-row>
							</div>
						</div>
					</div>
				</div> -->
				<div class="page-section">
					<div class="sec-head flex-center">
						<div class="sec-title">NFT Sale & Auction</div>
						<div class="sec-filter flex-center">
							<v-row>
								<v-col cols="12" sm="4">
									<v-select
									v-model="FilterA"
									:items="itemsA"
									label="HECO"
									append-icon="mdi-chevron-down"
									solo
									hide-details
									></v-select>
								</v-col>
								<v-col cols="12" sm="4">
									<v-select
									v-model="FilterB"
									:items="itemsB"
									label="HECO"
									append-icon="mdi-chevron-down"
									solo
									hide-details
									></v-select>
								</v-col>
								<v-col cols="12" sm="4">
									<v-select
									v-model="FilterC"
									:items="itemsC"
									label="HECO"
									append-icon="mdi-chevron-down"
									solo
									hide-details
									></v-select>
								</v-col>
							</v-row>
							<button class="btn btn-blue btn-filter"><span>Filter</span>
								<v-icon aria-hidden="false">
								  mdi-close
								</v-icon>
							</button>
						</div>
					</div>
					<div class="MuiGrid-root MuiGrid-lg-root ">
						<v-row gutter="20">
							<v-col  v-for="(item,index) in lists" :key="index" cols="6" sm="4" md="3" >
								<div class="grid-hbiCard">
									<div class="hbiCard aos-init aos-animate" data-aos="flip-left" data-aos-delay="300">
										<div class="hbiCard-box">
											<div class="hbiCard-photo" :style="{ 'background-image': 'url(' + item.pic + ')' }">
												<div class="bar-bg"></div><div class="bar-bg"></div><div class="bar-bg"></div><div class="bar-bg"></div>
											</div>
											<label class="hb-label">Purchasing!</label>
											<div class="hb-heart"><img src="@/assets/images/page4/heart.svg" ></div>
											<button class="btn btn-hbi">
												<span>Place a bid </span><img src="@/assets/images/page4/bidIcon.svg" >
											</button>
										</div>
										<div class="hotBidDecription">
											<div class="hbdLeft">
												<h3>Amazing digital art</h3>
												<span class="lfpcPrice">2.45 ETH</span>
											</div>
											<div class="hbdRight">
												<div class="hbdRight-tt"><span class="label">Highest bid</span> 0.001ETH</div>
												<div class="stock">3 in stock</div>
											</div>
										</div>
									</div>
								</div>
							</v-col>
						</v-row>
					</div>
					<div class="page-foot">
						<v-pagination
							v-model="pageV"
							next-icon="next"
						      prev-icon="prev"
						      :length="6"
						    ></v-pagination>
					</div>
				</div>
			</div>
		</div>
		<!-- <Footer /> -->
	</div>
</template>

<script>
	
	import AOS from 'aos'
	// import Header from '@/components/header.vue'
	// import Footer from '@/components/footer.vue'
	export default {
		name: 'Page',
		components: {
			// Header,
			// Footer,
		},
		data: () => ({
			pageV:1,
			lists: [{
				pic: require('@/assets/images/page5/Card1.jpg'),
			}, {
				pic: require('@/assets/images/page5/Card2.jpg'),
			}, {
				pic: require('@/assets/images/page5/Card3.jpg'),
			}, {
				pic: require('@/assets/images/page5/Card4.jpg'),
			}, {
				pic: require('@/assets/images/page5/Card5.jpg'),
			}, {
				pic: require('@/assets/images/page5/Card6.jpg'),
			},{
				pic: require('@/assets/images/page5/Card1.jpg'),
			}, {
				pic: require('@/assets/images/page5/Card2.jpg'),
			}, ],
			myslist:[
				{
					pic: require('@/assets/images/page4/mys1.png'),
				},
				{
					pic: require('@/assets/images/page4/mys1.png'),
				},
				{
					pic: require('@/assets/images/page4/mys2.png'),
				},
				{
					pic: require('@/assets/images/page4/mys2.png'),
				},
				{
					pic: require('@/assets/images/page4/mys3.png'),
				},
				{
					pic: require('@/assets/images/page4/mys3.png'),
				},
				{
					pic: require('@/assets/images/page4/mys4.png'),
				},
				{
					pic: require('@/assets/images/page4/mys4.png'),
				},
			],
			FilterA:'All Collections ',
			itemsA: [
				'All Collections ',
				'Avatar',
				'Pet',
				'Equipment',
				'Land',
				'Pass / Key',
			],
			FilterB:'USDT-Tron',
			itemsB: [
				'USDT-Tron',
				'WETH-Polygon',
				'USDC-Polygon',
			],
			FilterC:'Recently Listed',
			itemsC: [
				'Price Low to High',
				'Price High to Low',
				'Highest rarity',
			]
		}),
		computed: {},
		mounted() {
			// 在项目加载完成之后初始化wow
			this.$nextTick(() => {
				AOS.init({
				   offset: 10,   
				   duration: 600,   
				   easing: 'ease-in-sine',   
				   delay: 100
				})
			})
		},
		methods: {}
	}
</script>
<style scoped>
	
	
	
	
	
	
</style>