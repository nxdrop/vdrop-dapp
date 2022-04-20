<template>
  <div class="footer">
    <div class="foot-main">
      <div class="container">
        <div class="foot-row flex-box">
          <div class="foot-info">
            <div class="foot-logo"><img src="@/assets/logo.png" /></div>
            <div class="foot-select">
              <v-select
                v-model="selectV"
                :items="selectitems"
                label="HECO"
                append-icon="mdi-chevron-down-circle-outline"
                solo
                hide-details
              ></v-select>
            </div>
            <div class="foot-item">
              <!-- <ul class="foot-link">
                <li>
                  <router-link to="/"
                    >Play game <img src="@/assets/images/controler.png" class="controler-icon"
                  /></router-link>
                </li>
                <li><router-link to="/">Create & Bounty</router-link></li>
              </ul> -->
            </div>
          </div>
          <div class="foot-body flex_bd">
            <div class="foot-links">
              <div class="foot-link-hd">Evolvable NFT</div>
              <div class="foot-link-bd">
                <ul class="foot-link">
                  <li><router-link to="/">Claim</router-link></li>
                  <li><router-link to="/">Evolve</router-link></li>
                  <li><router-link to="/">AirDrop Tool</router-link></li>
                  <!-- <li><router-link to="/">Staking & Earn</router-link></li>
                  <li><router-link to="/">IGO & Swap </router-link></li> -->
                </ul>
                <!-- <ul class="foot-link">
                  <li><router-link to="/">My account</router-link></li>
                  <li><router-link to="/">Stable coin - $SAME</router-link></li>
                  <li><router-link to="/">KOL Affiliate program</router-link></li>
                  <li><router-link to="/">Incoming event & airdrop</router-link></li>
                  <li><router-link to="/">DAO</router-link></li>
                </ul> -->
              </div>
            </div>
          </div>
          <div class="foot-right">
            <div class="foot-links">
              <div class="foot-link-hd">Social media</div>
              <div class="foot-share">
                <a href="" class="share-item"><img src="@/assets/images/twiter.png" /></a>
                <a href="" class="share-item"><img src="@/assets/images/email.png" /></a>
                <a href="" class="share-item"><img src="@/assets/images/facebook.png" /></a>
                <a href="" class="share-item"><img src="@/assets/images/dog.png" /></a>
                <a href="" class="share-item"><img src="@/assets/images/youtube.png" /></a>
              </div>
              <div class="foot-link-bd">
                <ul class="foot-link">
                  <li><router-link to="/">About us</router-link></li>
                  <li><router-link to="/">Terms and conditions</router-link></li>
                </ul>
                <ul class="foot-link">
                  <li><router-link to="/">Support</router-link></li>
                  <li><router-link to="/">Contact</router-link></li>
                </ul>
              </div>
              <div class="foot-search flex-center">
                <div class="flex_bd">
                  <input
                    id=""
                    class="ui-input"
                    type="text"
                    placeholder="Enter Email to subscribe newsletter"
                    name=""
                    value=""
                  />
                </div>
                <button type="button" class="btn foot-btn-so"></button>
              </div>
            </div>
          </div>
        </div>
        <div class="foot-bar">
          <div class="foot-bar-item">Copyright @ 2021-2022 by evolvable NFT Lab. All rights reserved.</div>
          <div class="foot-bar-item">
            We use cookies for better service. <router-link to="" class="text-primary">Accept</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    selectV: 'Mumbai',
    selectitems: ['Ploygon', 'Mumbai'],
  }),
}
</script>
