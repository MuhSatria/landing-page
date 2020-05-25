<template>
  <div class="box-content">
    <div class="box-component container">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 base-color">
          <h3>Linux Hosting yang Stabil <br> dengan Teknologi LVE</h3>
          <p class="my-4" v-html="desc"></p>
          <button type="button" class="btn btn-primary btn-item font-weight-bold my-3 px-3">Pilih Hosting Anda</button>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <img class="img-data mt-5" :src="imgData" height="280px" alt="img-data" >
        </div>
      </div>
    </div>
    <div class="box-component container-fluid bg-light text-dark py-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-6 col-sm-12 col-xs-12 mobile-xs-icon-view">
            <div class="font-weight-bold">Bagikan Jika Anda menyukai halaman ini</div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex mobile-xs-icon-view">
            <div
              v-for="(sosmed_row, index_sosmed) in sosmed"
              :key="index_sosmed"
              class="d-flex mx-2 align-items-center">
              <img class="icon-sosmed mr-1" :src="sosmed[index_sosmed].icon" width="25px" height="25px" >
              <div class="label-data-sosmend px-3 py-1 align-self-center border" v-text="sosmed[index_sosmed].input"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box-component container-fluid bg-primary text-light justify-content-center py-5 d-flex mobile-footer-view">
      <h1 class="border-right px-4">Perlu <strong>Bantuan?</strong> Hubungi Kami : <strong>0274-5305505</strong></h1>
      <button type="button" class="btn btn-outline-light font-weight-bold btn-item mx-4 px-4 d-flex align-items-center">
        <img class="mr-3" :src="chatIcon" width="25px" height="25px" >
        Live Chat
      </button>
    </div>
  </div>
</template>

<script>
import checkIcon from '@/assets/icon/checklist-alt.svg'
import chatIcon from '@/assets/icon/chat-white-alt.svg'
import facebookIcon from '@/assets/icon/facebook.svg'
import twitterIcon from '@/assets/icon/twitter.svg'
import googleIcon from '@/assets/icon/google-plus.svg'
export default {
  data () {
    return {
      checkIcon: checkIcon,
      chatIcon: chatIcon,
      facebookIcon: facebookIcon,
      twitterIcon: twitterIcon,
      googleIcon: googleIcon,
      desc: 'SuperMicro <strong>Intel Xeon 24-Cores</strong> server dengan RAM <strong>128 GB</strong> dan <br> teknologi <storong>LVE CloudLinux</strong> untuk stabilitas server Anda. Dilengkapi <br> dengan <strong>SSD</strong> untuk kecepatan <strong>MySQL</strong> dan caching. Apache load balancer <br> berbasis LiteSpeed Technologies, <strong>CageFS</strong> security, <strong>Raid-10</strong> protection <br> dan auto backup untuk keamanan website PHP Anda.',
      imgData: 'https://raw.githubusercontent.com/bylabz/frontend-test/master/assets/images/Image%20support.png',
      sosmed: [
        {
          icon: facebookIcon,
          input: '80k'
        },
        {
          icon: twitterIcon,
          input: '450'
        },
        {
          icon: googleIcon,
          input: '1900'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.label-data-sosmend
  font-size 12px
.btn-item
  border-radius 50px
  &:hover
    background-color #007bff
    color #ffffff
.img-data
  @media only screen and (max-width 768px)
    height 180px
  @media only screen and (max-width 320px)
    height 165px
.mobile-footer-view
  @media only screen and (max-width 527px)
    display block !important
.mobile-xs-icon-view
  @media only screen and (max-width 320px)
    padding 10px 0
h1
  @media only screen and (max-width 527px)
    border none !important
    margin-bottom 20px
  @media only screen and (min-width 768px) and (max-width 768px)
    padding-right 10px !important
    padding-left 0 !important
    font-size 24px
  @media only screen and (min-width 1024px) and (max-width 1024px)
    font-size 34px
</style>
