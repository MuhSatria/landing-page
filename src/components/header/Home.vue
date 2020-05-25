<template>
  <div class="box-content base-color">
    <div class="navbar-info container-lg pb-1">
      <div class="box-component navbar-notif">
        <div class="box-data-component float-left d-flex">
          <img class="icon" :src="bookmarks" width="25px" alt="icon">
          <div class="label-name mx-2 my-auto">Gratis Ebook 9 Cara Cerdas Menggunakan Domain [x]</div>
        </div>
        <div class="box-data-component float-right d-flex">
          <div class="box-section-data d-flex mx-2 py-2">
            <img class="icon" :src="altPhone" width="15px" alt="icon">
            <div class="label-name mx-2 my-auto">0274-5305505</div>
          </div>
          <div class="box-section-data d-flex mx-2 py-2">
            <img class="icon" :src="chatIcon" width="20px" alt="icon">
            <div class="label-name mx-2 my-auto">Live Chat</div>
          </div>
          <div class="box-section-data d-flex mx-2 py-2">
            <img class="icon" :src="accountIcon" width="20px" alt="icon">
            <div class="label-name mx-2 my-auto">Member Area</div>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-0">
    <nav class="navbar navbar-expand-lg container-lg navbar-light py-2">
      <a class="navbar-brand" href="#">
        <img class="img-fluid logo-header" :src="imgLogo" width="250px" alt="logo" >
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active px-1">
            <a class="nav-link" href="#">Hosting <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item px-1">
            <a class="nav-link" href="#">Domain</a>
          </li>
          <li class="nav-item px-1">
            <a class="nav-link" href="#">Server</a>
          </li>
          <li class="nav-item px-1">
            <a class="nav-link" href="#">Website</a>
          </li>
          <li class="nav-item px-1">
            <a class="nav-link" href="#">Afiliasi</a>
          </li>
          <li class="nav-item px-1">
            <a class="nav-link" href="#">Promo</a>
          </li>
          <li class="nav-item px-1">
            <a class="nav-link" href="#">Pembayaran</a>
          </li>
          <li class="nav-item px-1">
            <a class="nav-link" href="#">Review</a>
          </li>
          <li class="nav-item px-1">
            <a class="nav-link" href="#">Kontak</a>
          </li>
          <li class="nav-item px-1">
            <a class="nav-link" href="#">Blog</a>
          </li>
        </ul>
      </div>
    </nav>
    <hr class="my-0">
  </div>
</template>

<script>
import logo from '@/assets/img/niagahoster-logo.png'
import altPhone from '@/assets/icon/phone-alt-solid.svg'
import bookmarks from '@/assets/icon/bookmark.svg'
import chatIcon from '@/assets/icon/chat.svg'
import accountIcon from '@/assets/icon/account.svg'
export default {
  data () {
    return {
      imgLogo: logo,
      altPhone: altPhone,
      bookmarks: bookmarks,
      chatIcon: chatIcon,
      accountIcon: accountIcon
    }
  }
}
</script>

<style lang="stylus" scoped>
.box-content
  z-index 100
  .navbar-info
    @media only screen and (max-width 890px)
      display none
    .navbar-notif
      display flow-root
.logo-header
  @media only screen and (max-width 414px)
    width 155px
</style>
