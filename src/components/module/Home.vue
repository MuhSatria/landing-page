<template>
  <div class="box-content container">
    <div class="box-component text-center">
      <img class="img-icon mb-5" :src="stripIcon" height="8px" width="80px" alt="strip-icon" >
    </div>
    <div class="box-component md-view">
      <h3 class="text-center base-color mb-4">Mendukung Penuh Framework Laravel</h3>
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <h6 class="mb-4 font-title base-color">Tak perlu menggunakan dedicated server ataupun VPS<br> yang mahal. Layanan PHP hosting murah kami <br> mendukung penuh framework favorit Anda</h6>
          <div
            class="d-flex py-1"
            v-for="(data_row, index_list) in data"
            :key="index_list"
          >
            <img class="img-list mr-3" :src="checkIcon" alt="icon" >
            <div class="label-data base-color" v-html="data[index_list].text"></div>
          </div>
          <p class="text-weight-light mt-3 font-small">NB. Composer dan SSH hanya tersedia pada paket Personal dan Bisnis</p>
          <button type="button" class="btn btn-primary btn-item mt-2 px-3 font-weight-bold">Pilih Hosting Anda</button>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <img class="img-data" :src="imgData" width="100%" height="350px" alt="img-data" >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import checkIcon from '@/assets/icon/checklist-alt.svg'
import stripIcon from '@/assets/icon/strip-line-alt.svg'
export default {
  data () {
    return {
      checkIcon: checkIcon,
      stripIcon: stripIcon,
      imgData: 'https://raw.githubusercontent.com/bylabz/frontend-test/aa4165e6bdd93d101df1bee35713f68a88f868f8/assets/svg/illustration%20banner%20support%20laravel%20hosting.svg',
      data: [
        {
          text: 'Install Laravel 1 <strong>klik</strong> dengan Softaculous Installer.'
        },
        {
          text: 'Mendukung ekstensi <strong>PHP MCrypt, phar, mbstring, json,</strong> dan <strong>fileinfo.</strong>'
        },
        {
          text: 'Tersedia <strong>Composer</strong> dan <strong>SSH</strong> untuk menginstal packages pilihan Anda.'
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
.base-color
  color #4c4c4c
</style>

<style lang="stylus" scoped>
.font-title
  font-size 1.2rem
.font-small
  font-size 0.7rem
.btn-item
  border-radius 50px
.md-view
  @media only screen and (max-width 768px)
    margin-bottom 20px
</style>
