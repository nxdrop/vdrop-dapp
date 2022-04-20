<template>
	<div class="page" data-app="true">
		<!-- <Header /> -->
		<div class="main">
			<section class="account-banner">
				<div class="banner-ab">
					<div class="banner-title">
						<p>Stake FIL tokens as pledge collateral and share</p>
						<p>revenue from providing IPFS data storage</p>
						<div class="buts">
							<button class="but-btn">EDIT COVER PHOTO</button>
							<button class="but-btn">EDIT PROFILE</button>
						</div>
					</div>
				</div>
			</section>
			<section class="Investment">
				<div class="container">
					<div class="MuiGrid-container">
						<div class="left-box">
							<div class="left-flex">
								<div class="left-box-headimg"><img
src="@/assets/images/page5/img36.4f9bb009.png"
										alt="" class="img-fluid"></div>
								<div class="left-box-tbody">
									<div class="left-box-name">Aladdin GPU Cloud</div>
									<div class="left-box-key">Oxc4c16a645@b21a <img
											src="@/assets/images/page5/Filled.png" alt=""></div>
									<div class="left-box-text">High-quality GPU computing services delivered in seconds
										with the lowest cost.</div>
									<div class="left-box-flex">
										<div class="left-box-flex-left">
											<div class="left-box-num">11</div>
											<div class="left-box-ntext">Following</div>
										</div>
										<div class="left-box-flex-right">
											<div class="left-box-num">3663</div>
											<div class="left-box-ntext">Followers</div>
										</div>
										<button tabindex="0" type="button" class="btn-follow">
											<span class="MuiButton-label">Follow</span>
										</button>
									</div>
									<div class="left-box-href">http://aladin.work</div>
									<div class="left-box-hrimg">
										<img src="@/assets/images/page5/twitterIcon.2c1a523e.svg" alt="">
										<img src="@/assets/images/page5/instaIcon.ffc2b007.svg" alt="">
										<img src="@/assets/images/page5/facebookIcon.5e2b3022.svg" alt="">
									</div>
									<div class="left-box-Credit">
										<div class="flex_bd">
											<div class="left-box-text">Credit rating</div>
											<div class="left-box-star">
												<img src="@/assets/images/page5/star.png" alt="">
												<img src="@/assets/images/page5/star.png" alt="">
												<img src="@/assets/images/page5/star.png" alt="">
												<img src="@/assets/images/page5/star.png" alt="">
												<img src="@/assets/images/page5/star.png" alt="">
											</div>
										</div>
										<div class="left-box-sc"><img
												src="@/assets/images/page5/uploadIcon.0c609857.svg" alt=""
												@click="showModal=true"></div>
									</div>
								</div>
							</div>
							<div class="left-box-bottom">
								<div class="left-bottom" style="font-size: 14px;">Member since Mar 15, 2021</div>
							</div>
						</div>
						<div class="flex-contain">
							<div class="account-panel">
								<nav>
									<div id="nav-tab" class="nav nav-tabs px-0" role="tablist">
										<ul class="nav-tab-list">                                   
											<li><a
class="nav-item nav-link" :class="{active:show==0}"
													@click="show = 0">Onsale</a></li>  
											<li><a
class="nav-item nav-link" :class="{active:show==1}"
													@click="show = 1">Collectible</a></li>
											<li><a
class="nav-item nav-link" :class="{active:show==2}"
													@click="show = 2">Created</a></li>
											<li><a
class="nav-item nav-link" :class="{active:show==3}"
													@click="show = 3">Like &Following</a></li>
											<li>
                        <a
class="nav-item nav-link" :class="{active:show==4}"
													@click="show = 4">Follower</a></li>
											<li><a
class="nav-item nav-link" :class="{active:show==5}"
													@click="show = 5">Credentials</a></li>
											<li><a
class="nav-item nav-link" :class="{active:show==6}"
													@click="show = 6">Events</a></li>
										</ul>
									</div>
								</nav>
							</div>
							<div class="con">
								<div v-if="show==0">
									<div class="MuiGrid-root ">
										<v-row gutter="20">
											<v-col  v-for="(item,index) in lists" :key="index" cols="6" sm="6" md="4" >
												<div class="grid-hbiCard" :data-num="index">
													<div class="hbiCard aos-init aos-animate" data-aos="flip-left" data-aos-delay="300">
														<div class="hbiCard-box">
															<div class="hbiCard-photo" :style="{ 'background-image': 'url(' + item.pic + ')' }">
																<div class="bar-bg"></div><div class="bar-bg"></div><div class="bar-bg"></div><div class="bar-bg"></div>
															</div>
															<label class="hb-label">Purchasing!</label>
															<div class="hb-heart" @click="collect(index)">
																<img v-if="!item.isCollect" src="@/assets/images/favoroff.png">
																<img v-if="item.isCollect" src="@/assets/images/favoron.png">
															</div>
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
								</div>
								<div v-if="show==1">
									<div class="MuiGrid-root ">
										<v-row  gutter="20">
											<v-col  v-for="(item,index) in lists" :key="index" cols="6" sm="6" md="4" >
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

								</div>
								<div v-if="show==2">
									<div class="MuiGrid-root ">
										<v-row  gutter="20">
											<v-col  v-for="(item,index) in lists" :key="index" cols="6" sm="6" md="4" >
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

								</div>
								<div v-if="show==3">
									<div class="MuiGrid-root ">
										<v-row  gutter="20">
											<v-col  v-for="(item,index) in lists" :key="index" cols="6" sm="6" md="4" >
												<div class="grid-hbiCard">
													<div class="hbiCard aos-init aos-animate" data-aos="flip-left" data-aos-delay="300">
														<div class="hbiCard-box">
															<div class="hbiCard-photo" :style="{ 'background-image': 'url(' + item.pic + ')' }"></div>
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

								</div>
								<div v-if="show==4">
									<div class="fol-cells">
										<div class="fol-row">
											<div class="fol-grid">
												<div class="fol-avatar">
													<img src="@/assets/images/102.png" >
												</div>
												<div class="flex_bd">
													<div class="fol-title">Sally Fadel</div>
													<div class="fol-desc">161 followers</div>
													<v-btn type="primary" class="btn-primary">Follow</v-btn>
												</div>
											</div>
											<div class="fol-main">
												<div class="flex_bd">
													<div class="fol-scroll">
														<div class="fol-pic"><img src="@/assets/images/130.png" ></div>
														<div class="fol-pic"><img src="@/assets/images/130.png" ></div>
														<div class="fol-pic"><img src="@/assets/images/130.png" ></div>
													</div>
												</div>
												<div class="fol-more"></div>
											</div>
										</div>
										<div class="fol-row">
											<div class="fol-grid">
												<div class="fol-avatar">
													<img src="@/assets/images/102.png" >
												</div>
												<div class="flex_bd">
													<div class="fol-title">Sally Fadel</div>
													<div class="fol-desc">161 followers</div>
													<v-btn type="primary" class="btn-primary">Follow</v-btn>
												</div>
											</div>
											<div class="fol-main">
												<div class="flex_bd">
													<div class="fol-scroll">
														<div class="fol-pic"><img src="@/assets/images/130.png" ></div>
														<div class="fol-pic"><img src="@/assets/images/130.png" ></div>
														<div class="fol-pic"><img src="@/assets/images/130.png" ></div>
													</div>
												</div>
												<div class="fol-more"></div>
											</div>
										</div>
										<div class="fol-row">
											<div class="fol-grid">
												<div class="fol-avatar">
													<img src="@/assets/images/102.png" >
												</div>
												<div class="flex_bd">
													<div class="fol-title">Sally Fadel</div>
													<div class="fol-desc">161 followers</div>
													<v-btn type="primary" class="btn-primary">Follow</v-btn>
												</div>
											</div>
											<div class="fol-main">
												<div class="flex_bd">
													<div class="fol-scroll">
														<div class="fol-pic"><img src="@/assets/images/130.png" ></div>
														<div class="fol-pic"><img src="@/assets/images/130.png" ></div>
														<div class="fol-pic"><img src="@/assets/images/130.png" ></div>
													</div>
												</div>
												<div class="fol-more"></div>
											</div>
										</div>
									</div>
								</div>
								<div v-if="show==5">
									<ul class="Cred-list">
										<li class="flex-box">
											<div class="dot"></div>
											<div class="cred-ico"><img src="@/assets/images/huobi56.jpg" ></div>
											<div class="flex_bd">
												<div class="cred-time">2022-1-15</div>
												<div class="cred-title">Join 2022 BlogackChian study camping.</div>
												<div class="cred-intro">
													<strong>-form TeamAzuki</strong>0x47872C824DCB2B3a4D23F06077242Ca5a614f1eD
												</div>
											</div>
										</li>
										<li class="flex-box">
											<div class="dot"></div>
											<div class="cred-ico"><img src="@/assets/images/bnb56.jpg" ></div>
											<div class="flex_bd">
												<div class="cred-time">2022-1-15</div>
												<div class="cred-title">Join 2022 BlogackChian study camping.</div>
												<div class="cred-intro">
													<strong>-form TeamAzuki</strong>0x47872C824DCB2B3a4D23F06077242Ca5a614f1eD
												</div>
											</div>
										</li>
										<li class="flex-box">
											<div class="dot"></div>
											<div class="cred-ico"><img src="@/assets/images/Polygon56.jpg" ></div>
											<div class="flex_bd">
												<div class="cred-time">2022-1-15</div>
												<div class="cred-title">Join 2022 BlogackChian study camping.</div>
												<div class="cred-intro">
													<strong>-form TeamAzuki</strong>0x47872C824DCB2B3a4D23F06077242Ca5a614f1eD
												</div>
											</div>
										</li>
										<li class="flex-box">
											<div class="dot"></div>
											<div class="cred-ico"><img src="@/assets/images/huobi56.jpg" ></div>
											<div class="flex_bd">
												<div class="cred-time">2022-1-15</div>
												<div class="cred-title">Join 2022 BlogackChian study camping.</div>
												<div class="cred-intro">
													<strong>-form TeamAzuki</strong>0x47872C824DCB2B3a4D23F06077242Ca5a614f1eD
												</div>
											</div>
										</li>
										<li class="flex-box">
											<div class="dot"></div>
											<div class="cred-ico"><img src="@/assets/images/bnb56.jpg" ></div>
											<div class="flex_bd">
												<div class="cred-time">2022-1-15</div>
												<div class="cred-title">Join 2022 BlogackChian study camping.</div>
												<div class="cred-intro">
													<strong>-form TeamAzuki</strong>0x47872C824DCB2B3a4D23F06077242Ca5a614f1eD
												</div>
											</div>
										</li>
										<li class="flex-box">
											<div class="dot"></div>
											<div class="cred-ico"><img src="@/assets/images/Polygon56.jpg" ></div>
											<div class="flex_bd">
												<div class="cred-time">2022-1-15</div>
												<div class="cred-title">Join 2022 BlogackChian study camping.</div>
												<div class="cred-intro">
													<strong>-form TeamAzuki</strong>0x47872C824DCB2B3a4D23F06077242Ca5a614f1eD
												</div>
											</div>
										</li>
									</ul>
								</div>
								<div v-if="show==6">
									<div class="Events-row ">
										<v-row gutter="20">
											<v-col cols="12" sm="6"  >
												<ul class="Cred-list">
													<li class="ev-cell">
														<div class="dot"></div>
														<div class="flex_bd">
															<div class="cred-time">2022-1-15</div>
															<div class="cred-title">Join 2022 BlogackChian study camping.</div>
															<div class="cred-intro">
																<strong>-form TeamAzuki</strong>
															</div>
															<div class="cred-pic"><img src="@/assets/images/ev-left3.png" ></div>
														</div>
													</li>
													<li class="ev-cell">
														<div class="dot"></div>
														<div class="flex_bd">
															<div class="cred-time">2022-1-15</div>
															<div class="cred-title">Join 2022 BlogackChian study camping.</div>
															<div class="cred-intro">
																<strong>-form TeamAzuki</strong>
															</div>
															<div class="cred-pic"><img src="@/assets/images/ev-left2.png" ></div>
														</div>
													</li>
													<li class="ev-cell">
														<div class="dot"></div>
														<div class="flex_bd">
															<div class="cred-time">2022-1-15</div>
															<div class="cred-title">Join 2022 BlogackChian study camping.</div>
															<div class="cred-intro">
																<strong>-form TeamAzuki</strong>
															</div>
														</div>
														<div class="cred-pic"><img src="@/assets/images/ev-left1.png" ></div>
													</li>
												</ul>
											</v-col>
											<v-col cols="12" sm="6"  >
												<ul class="Cred-list">
													<li class="ev-cell">
														<div class="dot"></div>
														<div class="flex_bd">
															<div class="cred-time">2022-1-15</div>
															<div class="cred-title">Join 2022 BlogackChian study camping.</div>
															<div class="cred-intro">
																<strong>-form TeamAzuki</strong>
															</div>
														</div>
														<div class="cred-pic"><img src="@/assets/images/ev-right1.png" ></div>
													</li>
													<li class="ev-cell">
														<div class="dot"></div>
														<div class="flex_bd">
															<div class="cred-time">2022-1-15</div>
															<div class="cred-title">Join 2022 BlogackChian study camping.</div>
															<div class="cred-intro">
																<strong>-form TeamAzuki</strong>
															</div>
														</div>
														<div class="cred-pic"><img src="@/assets/images/ev-right2.png" ></div>
													</li>
													<li class="ev-cell">
														<div class="dot"></div>
														<div class="flex_bd">
															<div class="cred-time">2022-1-15</div>
															<div class="cred-title">Join 2022 BlogackChian study camping.</div>
															<div class="cred-intro">
																<strong>-form TeamAzuki</strong>
															</div>
														</div>
														<div class="cred-pic"><img src="@/assets/images/ev-right3.png" ></div>
													</li>
												</ul>
											</v-col>
										</v-row>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div v-if="showModal" class="fenxiang" @click="showModal=false">
				<div class="checkout-flex">
					<div class="fenxiang-box">
						<h3>Share this NET</h3>
						<div class="check-flex">
							<div class="Yay-flex-in">
								<div>
									<div class="Yay-flex-item" style="width: 52px;"> <img
											style="width: 24px; height: 24px;"
											src="@/assets/images/page5/facebookIcon.5e2b3022.svg" /> </div>
									<div class="fx-name">Twitter</div>
								</div>
							</div>
							<div class="Yay-flex-in">
								<div>
									<div class="Yay-flex-item" style="width: 52px;"> <img
											style="width: 24px; height: 24px;"
											src="@/assets/images/page5/twitterIcon.2c1a523e.svg" /> </div>
									<div class="fx-name">Facebook</div>
								</div>
							</div>
							<div class="Yay-flex-in">
								<div>
									<div class="Yay-flex-item" style="width: 52px;"> <img
											style="width: 24px; height: 24px;"
											src="@/assets/images/page5/instaIcon.ffc2b007.svg" /> </div>
									<div class="fx-name">Telegram</div>
								</div>
							</div>
							<div class="Yay-flex-in">
								<div>
									<div class="Yay-flex-item" style="width: 52px;"> <img
											style="width: 24px; height: 24px;" src="@/assets/images/page5/mail.png" />
									</div>
									<div class="fx-name">E-mail</div>
								</div>
							</div>
						</div>
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
			show: 0,
			showModal: false,
			lists: [{
				pic: require('@/assets/images/page5/Card1.jpg'),
				isCollect: false,
			}, {
				pic: require('@/assets/images/page5/Card2.jpg'),
				isCollect: false,
			}, {
				pic: require('@/assets/images/page5/Card3.jpg'),
				isCollect: false,
			}, {
				pic: require('@/assets/images/page5/Card4.jpg'),
				isCollect: false,
			}, {
				pic: require('@/assets/images/page5/Card5.jpg'),
				isCollect: false,
			}, {
				pic: require('@/assets/images/page5/Card6.jpg'),
				isCollect: false,
			},],
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
		methods: {
			collect(index) {
				var isCollect = this.lists[index].isCollect;
				this.lists[index].isCollect = isCollect === true ? false : true;
			},
		}
	}
</script>

<style scoped="scoped">
	.account-banner{
		background: url(~@/assets/images/page5/background.jpg) no-repeat center;
		background-size: cover;
		height: 200px;
	}
</style>
