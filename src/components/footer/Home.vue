<template>
  <div class="box-content">
    <footer class="footer pt-5 pb-4">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-3 col-md-6 col-sm-6 col-xs-12 mt-4"
            v-for="(data_row, index_home) in data"
            :key="index_home">
            <h6 class="label-title text-uppercase" v-text="data[index_home].title">Hubungi Kami</h6>
            <div class="data line-height-view" v-html="data[index_home].dataInput"></div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-4">
            <h6>NEWSLETTER</h6>
            <div class="row">
              <div class="col-lg-6 col-md-12 col-12 mt-3">
                <form action="">
                  <div class="input-group mb-3">
                    <input type="text" class="form-control input-data" placeholder="Email" aria-label="Recipient's username" aria-describedby="button-addon2">
                    <button
                      class="btn btn-primary btn-custom position-absolute px-2 py-2"
                      type="button"
                      id="button-addon2">
                      Berlangganan
                    </button>
                  </div>
                  <div class="label-notif text-muted" style="font-size: 14px;">
                    Dapatkan promo dan konten menarik dari penyedia hosting terbaik Anda.
                  </div>
                </form>
              </div>
              <div class="col-lg-6 col-md-12 col-12 mt-3">
                <img class="icon-data mx-3" v-for="(icons_row, index_icon) in icons" :key="index_icon" :src="icons[index_icon].icon" width="50px" >
              </div>
            </div>
          </div>
          <div class="col-lg-12 col-12 mt-4">
            <h6 class="label-title">Pembayaran</h6>
            <img
              class="img-logo"
              v-for="(payment_row, index_pay) in payment"
              :key="index_pay"
              height="50px"
              :src="payment[index_pay].icon"
              alt="logo-bank" >
            <p class="my-4 text-muted">Aktivasi instan dengan e-Payment. Hosting dan domain langsung aktif!</p>
          </div>
        </div>
        <hr>
        <div class="box-component">
          <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <p class="copyright">Copyright &copy;2016 Niagahoster | Hosting powered by PHP7, CloudFlare, BitNinja and DC Biznet<br>Technovillage Jakarta Cloud VPS Murah powered by Webuzo Softaculous, intel SSD and cloud computing technology</p>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <p class="copyright text-right mobile-view">Syarat dan Ketentuan | Kebijakan Privasi</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import facebookIcon from '@/assets/icon/facebook-alt.svg'
import twitterIcon from '@/assets/icon/twitter-alt.svg'
import googleIcon from '@/assets/icon/google-alt.svg'
import bcaIcon from '@/assets/img/bca-alt.png'
import mandiriIcon from '@/assets/img/mandiri-alt.png'
import bniIcon from '@/assets/img/bni-alt.png'
import visaIcon from '@/assets/img/visa-alt.png'
import mastercardIcon from '@/assets/img/mastercard-alt.png'
import atmbersamaIcon from '@/assets/img/atmbersama-alt.png'
import permataIcon from '@/assets/img/permata-alt.png'
import primaIcon from '@/assets/img/prima-alt.png'
import altoIcon from '@/assets/img/alto-alt.png'
export default {
  data () {
    return {
      data: [
        {
          title: 'Hubungi Kami',
          dataInput: '<p><a href="#" style="color: #c4c4c4;">0274-5305505</a><br>Senin - Minggu<br/>24 Jam Nonstop</p><p>Jl. Selokan Mataram Monjali<br>Karangjati MT I/304<br>Sinduadi, Mlati, Sleman<br> Yogyakarta 55284</p>'
        },
        {
          title: 'Layanan',
          dataInput: '<p>Domain<br>Shared Hosting<br>Cloud VPS Hosting<br>Managed VPS Hosting<br>Web Builder<br>Keamanan SSL / HTTPS<br>Jasa Pembuatan Website<br>Program Affiliasi</p>'
        },
        {
          title: 'Service Hosting',
          dataInput: '<p>Hosting Murah<br>Hosting Indonesia<br>Hosting Singapura SG<br>Hosting PHP<br>Hosting Wordpress<br>Hosting Laravel</p>'
        },
        {
          title: 'Tutorial',
          dataInput: '<p>Knowledgebase<br>Blog<br>Cara Pembayaran</p>'
        },
        {
          title: 'Tentang Kami',
          dataInput: '<p>Tim Niagahoster<br>Karir<br>Events<br>Penawaran & Promo Spesial<br>Kontak Kami</p>'
        },
        {
          title: 'Kenapa Pilih Niagahoster?',
          dataInput: '<p>Support Terbaik<br>Garansi Harga Termurah<br>Domain Gratis Selamanya<br>Datacenter Hosting Terbaik<br>Review Pelanggan</p>'
        }
      ],
      facebookIcon: facebookIcon,
      twitterIcon: twitterIcon,
      googleIcon: googleIcon,
      bcaIcon: bcaIcon,
      mandiriIcon: mandiriIcon,
      bniIcon: bniIcon,
      visaIcon: visaIcon,
      mastercardIcon: mastercardIcon,
      atmbersamaIcon: atmbersamaIcon,
      permataIcon: permataIcon,
      primaIcon: primaIcon,
      altoIcon: altoIcon,
      icons: [
        {
          icon: facebookIcon
        },
        {
          icon: twitterIcon
        },
        {
          icon: googleIcon
        }
      ],
      payment: [
        {
          icon: bcaIcon
        },
        {
          icon: mandiriIcon
        },
        {
          icon: bniIcon
        },
        {
          icon: visaIcon
        },
        {
          icon: mastercardIcon
        },
        {
          icon: atmbersamaIcon
        },
        {
          icon: permataIcon
        },
        {
          icon: primaIcon
        },
        {
          icon: altoIcon
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.line-height-view
  line-height 1.8rem
.copyright
  font-size 13px
.box-content
  .footer
    background-color #333
    color #c4c4c4
    .container
      .footer-menu-list
        list-style none
      .input-group
        .input-data
          height 60px
          padding-right 130px
          border-radius 40px
        .btn-custom
          z-index 99
          right 10px
          border-radius 25px
          align-self center
        .mobile-view
          @media only screen and (max-width 576px)
            text-align left

</style>
