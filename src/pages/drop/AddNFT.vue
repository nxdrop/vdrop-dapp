<template>
  <v-container>
    <v-row class="justify-center py-4">
      <h3>创建我的 NFT 空投项目</h3>
    </v-row>
    <v-row class="justify-center py-4">
      <v-col md="10" sm="12">
        <v-card class="px-4 py-4">
          <v-card-title class="meta-drop-card-title">
            <div class="meta-toggle-wrap">
              <v-btn-toggle :value="filterType" mandatory>
                <v-btn @click="setDropFilterTypeHandler(1)">白名单空投</v-btn>
                <v-btn @click="setDropFilterTypeHandler(2)">自定义筛选条件</v-btn>
              </v-btn-toggle>
            </div>

            <div class="meta-step-wrap">
              <v-stepper
                v-if="filterType === 1"
                key="whiteListType"
                :value="whiteStepVal"
                alt-labels
                :outlined="false"
                elevation="0"
              >
                <v-stepper-header>
                  <v-stepper-step step="1" :complete="whiteStepVal > 1"> Enter Project Infomation </v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step step="2" :complete="whiteStepVal > 2"> Upload Address List </v-stepper-step>

                  <v-divider></v-divider>
                  <v-stepper-step step="3" :complete="whiteStepVal > 3"> Approve Drop Proxy </v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step step="4" editable> Submit </v-stepper-step>
                </v-stepper-header>
              </v-stepper>

              <v-stepper
                v-if="filterType !== 1"
                key="customFilterStep"
                v-model="customStepVal"
                alt-labels
                :outlined="false"
                elevation="0"
              >
                <v-stepper-header>
                  <v-stepper-step step="1" :complete="customStepVal > 1"> Enter Project Infomation </v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step step="2" :complete="customStepVal > 2"> Select Filter Rule </v-stepper-step>

                  <v-divider></v-divider>
                  <v-stepper-step step="3" :complete="customStepVal > 3"> Approve Drop Proxy </v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step step="3" editable> Submit </v-stepper-step>
                </v-stepper-header>
              </v-stepper>
            </div>
          </v-card-title>

          <v-form ref="form" class="px-2" name="nftForm">
            <v-col cols="8" md="8">
              <v-text-field
                name="name"
                :value="name"
                :rules="rules.nameRules"
                label="Project Name"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="8" md="8">
              <v-text-field
                name="projUrl"
                :value="projUrl"
                label="Project Official Site"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="8" md="8">
              <v-text-field name="projLogo" :value="projUrl" label="Project Logo Url" required outlined></v-text-field>
            </v-col>
            <v-col cols="8" md="8">
              <v-textarea solo name="input-7-4" label="Project Intro" outlined></v-textarea>
            </v-col>

            <v-col v-if="filterType === 1" key="uploadAddressInputCol" cols="8" md="8">
              <v-file-input
                accept="image/*"
                label="Upload your addresses white list"
                name="addressesFile"
                :value="addressesFile"
                outlined
              >
              </v-file-input>
            </v-col>

            <v-col v-if="filterType !== 1" key="useMetaRuleCol" class="meta-rule-wrap" cols="8" md="8" sm="8">
              <v-select
                :value="select"
                :items="filterRules"
                single-line
                label="Select address filter rule"
                return-object
                outlined
              ></v-select>
              <div class="meta-rule-btn px-2">
                <v-btn text color="orange">add custom rule</v-btn>
              </div>
            </v-col>
            <v-divider></v-divider>
            <v-col cols="12" md="8">
              <v-radio-group mandatory row>
                <v-radio label="Use MetaDrop NFT Contract Mint" value="1" @click="() => (useMetaSc = 1)"></v-radio>
                <v-radio label="Use my NFT Contract Mint" value="2" @click="() => (useMetaSc = 2)"></v-radio>
              </v-radio-group>
              {{ useMetaSc }}
            </v-col>
            <v-col cols="8" md="8">
              <v-text-field
                name="tokenAmount"
                :value="tokenAmount"
                hint="Entry will drop NFT amount"
                label="Drop amount"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col v-if="showUseMetaSc" key="useMetaBaseUrl" cols="8" md="8">
              <v-text-field
                name="nftBaseUrl"
                :value="nftBaseUrl"
                hint="nftBaseUrl"
                label="Your NFT Contract address"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col v-if="!showUseMetaSc" key="useCustNFTSCAddress" cols="8" md="8">
              <v-text-field
                name="custNFTAddress"
                :value="nftScAddress"
                hint="Your NFT Contract must Implement mint to address method"
                label="NFT Contract Address"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col v-if="!showUseMetaSc" key="useCustNFTSCPrePay" cols="8" md="8">
              <v-text-field
                name="custNFTPrePay"
                :value="nftScAddress"
                hint="PrePay Metadrop mint Gas fee
              (5usdt/100NFT)"
                label="PrePay Metadrop mint Gas fee"
                required
                outlined
              />
            </v-col>

            <v-col cols="12" md="4">
              <v-switch
                :value="opensea"
                label="Add opeasea traits protocol"
                :true-value="true"
                :false-value="false"
                @change="onOpenseaChangeHandler"
              ></v-switch>
            </v-col>
          </v-form>
          <v-form ref="TraitsForm">
            <v-list v-if="!!opensea" key="openseaList">
              <v-list-item v-for="(t, idx) in traits" :key="'traits_' + idx" three-line>
                <v-list-item-avatar width="60">
                  <v-progress-circular :value="t.value || 0" :color="getCircleColor(t.value)"></v-progress-circular>
                </v-list-item-avatar>
                <v-row>
                  <v-col cols="4">
                    <v-text-field
                      name="'traitsType_'+idx"
                      :value="t.trait_type"
                      hint="trait_type in opensea require an string"
                      label="trait_type"
                      required
                      outlined
                      @input="(v) => traitInputHandler(idx, v, 'trait_type')"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      name="nftBaseUrl"
                      :value="t.value"
                      hint="an number 0~100"
                      label="trait value"
                      required
                      outlined
                      type="number"
                      @input="(v) => traitInputHandler(idx, v, 'value')"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      name="nftBaseUrl"
                      :value="t.display_type"
                      hint="the trait type display in opensea"
                      label="display type"
                      required
                      outlined
                      @input="(v) => traitInputHandler(idx, v, 'display_type')"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-list-item-action class="meta-attrs-action" style="min-width: 80px">
                  <v-btn :key="'plusbtn_' + idx" icon @click="addTraitState"><v-icon>mdi-plus</v-icon></v-btn>
                  <v-btn v-if="idx !== 0" :key="'minusbtn_' + idx" icon @click="delTraitState(idx)">
                    <v-icon>mdi-minus</v-icon></v-btn
                  >
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-form>

          <!-- Btn -->
          <v-card-actions class="meta-actions-wrap">
            <v-row v-if="filterType === 1" key="whitleBtns" class="justiy-center">
              <v-col cols="6" class="px-2"
                ><v-btn color="orange" block text :disabled="whiteStepVal <= 1" @click="prevStepHandler(1)"
                  >Apporve</v-btn
                ></v-col
              >
              <v-col cols="6" class="px-2"
                ><v-btn color="orange" block text :disabled="whiteStepVal !== 4">Submit</v-btn></v-col
              >
            </v-row>
            <v-row v-if="filterType !== 1" key="custBtns" class="justiy-center">
              <v-col cols="6" class="px-2"
                ><v-btn color="orange" block text :disabled="customStepVal <= 1" @click="prevStepHandler(1)"
                  >Apporve</v-btn
                ></v-col
              >
              <v-col cols="6" class="px-2"
                ><v-btn color="orange" block text :disabled="customStepVal !== 4">Submit</v-btn></v-col
              >
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AddNFTDrop',
  components: {},
  data() {
    return {
      filterType: 1,
      name: '',
      projUrl: '',
      whiteStepVal: 1,
      customStepVal: 2,
      addressesFile: null,
      tokenAmount: 100,
      opensea: true,
      useMetaSc: 1,
      nftScAddress: '',
      rules: {
        nameRules: [(v) => !!v || 'Name is required'],
      },
      select: null,
      nftBaseUrl: '',
      filterRules: [
        {
          hash: '11111',
          text: 'susiswap',
        },
        {
          hash: '11112',
          text: 'uniswap',
        },
        {
          hash: '1',
          text: 'metadrop address collections',
        },
      ],
      traits: [{ trait_type: '', value: 10, display_type: '' }],
    }
  },
  computed: {
    dyncTraits() {
      return this.traits
    },
    showUseMetaSc() {
      return this.useMetaSc === 1
    },
  },
  methods: {
    getCircleColor(v) {
      if (!v) return ''
      if (v > 0 && v < 30) return 'blue-grey'
      if (v >= 30 && v < 50) return 'brown'
      if (v >= 50 && v < 80) return 'deep-orange lighten-2'
      if (v >= 80) return 'red accent-2'
    },
    setDropFilterTypeHandler(typ) {
      this.filterType = typ
    },
    nextStepHandler(typ) {
      if (typ === 1) {
        if (this.whiteStepVal <= 4) {
          this.whiteStepVal = this.whiteStepVal + 1
        } else {
          this.whiteStepVal = 4
        }
      } else {
        if (this.customStepVal <= 3) {
          this.customStepVal = 1
        } else {
          this.customStepVal = this.customStepVal + 1
        }
      }
      console.log('>>>>>>>>>>>>>>>>>>>', this.whiteStepVal, this.customStepVal)
    },
    prevStepHandler(typ) {
      if (typ === 1) {
        if (this.whiteStepVal > 1) {
          this.whiteStepVal = this.whiteStepVal - 1
        } else {
          this.whiteStepVal = 1
        }
      } else {
        if (this.customStepVal > 1) {
          this.customStepVal -= 1
        } else {
          this.customStepVal = 1
        }
      }
      console.log('>>>>>>>>>>>>>>>>>>>', this.whiteStepVal, this.customStepVal)
    },

    addTraitState() {
      const t = { trait_type: '', value: 10, display_type: '' }
      this.traits.push(t)
    },
    delTraitState(idx) {
      this.traits.splice(idx, 1)
    },
    traitInputHandler(idx, v, key) {
      let old = this.traits[idx]
      const n = Object.assign({}, old, { [key]: v })
      this.traits.splice(idx, 1, n)
    },
    onUseMetaScHandler(v) {
      console.log('>>>>>>>>>>>>>>>>', v)
      this.useMetaSc = v
    },
    onOpenseaChangeHandler(v) {
      console.log('>>>>>>>>>>>>>>>>', v)
      this.opensea = Boolean(v)
    },
  },
}
</script>
<style lang="scss" scoped>
.meta {
  &-toggle {
    &-wrap {
      flex: 1 1 100%;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
  }

  &-step {
    &-wrap {
      width: 100%;
    }
  }

  &-actions {
    &-wrap {
      width: 100%;
    }
  }

  &-rule {
    &-wrap {
      display: flex;
      flex-flow: row;
      align-items: center;
    }
  }

  &-attrs {
    &-action {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      align-items: center;
    }
  }

  &-drop {
    &-card-title {
      flex: 1 1 100%;
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
}
</style>
