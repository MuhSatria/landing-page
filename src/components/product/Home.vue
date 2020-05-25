<template>
  <div class="box-content container base-color">
    <div class="box-component">
      <div class="row">
        <div
          class="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center"
          v-for="(menu_row, index_menu) in option"
          :key="index_menu">
          <img class="img-data" :src="option[index_menu].image" height="180px" alt="logo" >
          <p class="mt-2" v-text="option[index_menu].label"></p>
        </div>
      </div>
    </div>
    <div class="box-component my-1 pb-4">
      <div class="box-data-component text-center my-5">
        <h3 class="font-weight-bolder">Paket Hosting Singapura yang Tepat</h3>
        <h3>Diskon 40% + Domain dan SSL Gratis untuk Anda</h3>
      </div>
      <div class="box-data-component">
        <div class="row">
          <div
            v-for="(data_row, index_prod) in data"
            :key="index_prod"
            :class="data[index_prod].status === 0 ? 'col-lg-3 col-md-3 col-sm-12-col-xs-12 px-0 border text-center mobile-card-view' : 'col-lg-3 col-md-3 col-sm-12-col-xs-12 px-0 border border-primary text-center mobile-card-view'"
          >
            <img v-if="data[index_prod].status === 1" class="img-best position-absolute" :src="bestSeller" width="40%" alt="icon" >
            <h4
              :class="data[index_prod].status === 0 ? 'data-title font-weight-bolder border-bottom mb-0' : 'data-title font-weight-bolder border-bottom mb-0 bg-primary text-light border-primary'"
              v-text="data[index_prod].title"></h4>
            <div
              :class="data[index_prod].status === 0 ? 'data-price pt-4' : 'data-price pt-4 bg-primary text-light'">
              <p class="discon mb-0" v-text="data[index_prod].discon"></p>
              <div class="d-flex justify-content-center" v-html="data[index_prod].price + '/ bln'"></div>
            </div>
            <div
              :class="data[index_prod].status === 1 ? 'data-pengguna border-top border-primary py-2 text-light deepblue' : 'data-pengguna border-top py-2'"
              v-html="'<strong>' +data[index_prod].pengguna + '</strong>' + ' Pengguna Terdaftar'"></div>
            <div class="data-list py-3 px-1 border-top">
              <p class="font-weight-bold" v-text="data[index_prod].res"></p>
              <p v-html="'<strong>' + data[index_prod].space + '</strong>' + ' Disk Space'"></p>
              <p v-html="'<strong>' + data[index_prod].bandwidth + '</strong>' + ' Bandwidth'"></p>
              <p
                v-show="data[index_prod].popEmail !== undefined"
                v-html="'<strong>' + data[index_prod].popEmail + '</strong>' + ' POP3 Email'"></p>
              <p v-html="'<strong>' + data[index_prod].database + '</strong>' + ' Database'"></p>
              <p
                v-show="data[index_prod].addDomain !== undefined"
                v-html="'<strong>' + data[index_prod].addDomain + '</strong>' + ' Domain Gratis'"></p>
              <p
                v-show="data[index_prod].domain !== undefined"
                v-html="'<strong>' + data[index_prod].domain + '</strong>' + ' Domain'"></p>
              <p
                v-show="data[index_prod].backup !== undefined"
                v-html="'<strong>' + data[index_prod].backup + '</strong>' + ' Backup'"></p>
              <p
                v-show="data[index_prod].backupRestor !== undefined"
                v-html="'<strong>' + data[index_prod].backupRestor + '</strong>' + ' Backup & Restore'"></p>
              <p
                v-show="data[index_prod].bonus !== undefined"
                v-html="'<strong>' + data[index_prod].bonus + '</strong>' + ' Selamanya'"></p>
              <p v-html="'<strong>' + data[index_prod].ssl + '</strong>' + ' Gratis Selamanya'"></p>
              <p
                v-show="data[index_prod].nameServer !== undefined"
                v-html="'<strong>' + data[index_prod].nameServer + '</strong>' + ' Name Server'"></p>
              <p
                class="mb-0"
                v-show="data[index_prod].support !== undefined"
                v-html="'<strong>' + data[index_prod].support + '</strong>' + ' Layanan Support'"></p>
              <img v-show="data[index_prod].support !== undefined" class="img-rating my-1" :src="starIcon" height="15px" >
              <p
                class="mt-2"
                v-show="data[index_prod].mailProtec !== undefined"
                v-html="'<strong>' + data[index_prod].mailProtec + '</strong>' + ' Mail Protection'"></p>
            </div>
            <button
              type="button"
              :class="data[index_prod].status === 0 ? 'btn btn-outline-secondary btn-item mb-5 px-3 font-weight-bold' : 'btn btn-primary btn-item mb-5 px-3 font-weight-bold'"
            >{{ data[index_prod].potongan !== undefined ? 'Diskon ' + data[index_prod].potongan + '%' : 'Pilih Sekarang' }}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="box-component my-5">
      <h3 class="text-center mt-5 mb-4">Powerful dengan Limit PHP yang Lebih Besar</h3>
      <div class="row justify-content-md-center">
        <div class="data-looping col-lg-4 col-md-6 col-sm-12 col-xs-12 flex">
          <div
            class="box-data-component d-flex border px-3 py-2 data-looping"
            v-for="(maxData_row, index_max) in maxData"
            :key="index_max"
          >
            <img
              class="list-icon mr-2 align-self-center"
              :src="checkIcon"
              height="20px" >
            <div class="data-check" v-text="maxData[index_max].text"></div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 py-2">
          <div
            class="box-data-component d-flex border px-3 py-1 data-looping"
            v-for="(posData_row, index_pos) in posData"
            :key="index_pos"
          >
            <img
              class="list-icon mr-2 align-self-center"
              :src="checkIcon"
              height="20px" >
            <div class="data-check" v-text="posData[index_pos].text"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import zanguardIcon from '@/assets/img/zendguard.png'
import composerIcon from '@/assets/img/composer.png'
import ionCubeIcon from '@/assets/img/ionCube.png'
import checkIcon from '@/assets/icon/checklist-alt.svg'
import bestSeller from '@/assets/icon/best-seller-alt.svg'
import starIcon from '@/assets/icon/star-alt.svg'
export default {
  data () {
    return {
      zanguardIcon: zanguardIcon,
      composerIcon: composerIcon,
      ionCubeIcon: ionCubeIcon,
      checkIcon: checkIcon,
      bestSeller: bestSeller,
      starIcon: starIcon,
      option: [
        {
          image: zanguardIcon,
          label: 'PHP Zend Guard Loader'
        },
        {
          image: composerIcon,
          label: 'PHP Composer'
        },
        {
          image: ionCubeIcon,
          label: 'PHP ionCube Loader'
        }
      ],
      data: [
        {
          status: 0,
          title: 'Bayi',
          price: 'RP <h1 style="font-weight: 900; margin-left: 5px;">14</h1><strong>.900</strong>',
          discon: 'Rp 19.900',
          pengguna: 938,
          res: '0.5X RESOURCE POWER',
          space: '500 MB',
          bandwidth: 'Unlimited',
          database: 'Unlimited',
          domain: 1,
          backup: 'Instant',
          ssl: 'Unlimited SSL'
        },
        {
          status: 0,
          title: 'Pelajar',
          price: 'RP <h1 style="font-weight: 900; margin-left: 5px;">23</h1><strong>.450</strong>',
          discon: 'Rp 46.900',
          pengguna: 4.168,
          res: '1X RESOURCE POWER',
          space: 'Unlimited',
          bandwidth: 'Unlimited',
          popEmail: 'Unlimited',
          database: 'Unlimited',
          addDomain: 10,
          backup: 'Instant',
          bonus: 'Domain Gratis',
          ssl: 'Unlimited SSL'
        },
        {
          status: 1,
          title: 'Personal',
          price: 'RP <h1 style="font-weight: 900; margin-left: 5px;">38</h1><strong>.900</strong>',
          discon: 'Rp 58.900',
          pengguna: 10.017,
          res: '2X RESOURCE POWER',
          space: 'Unlimited',
          bandwidth: 'Unlimited',
          popEmain: 'Unlimited',
          database: 'Unlimited',
          addDomain: 'Unlimited',
          backup: 'Instant',
          bonus: 'Domain Gratis',
          ssl: 'Unlimited SSL',
          nameServer: 'Private',
          mailProtec: 'SpamAssasin'
        },
        {
          status: 0,
          potongan: 40,
          title: 'Bisnis',
          price: 'RP <h1 style="font-weight: 900; margin-left: 5px;">65</h1><strong>.900</strong>',
          discon: 'Rp 109.900',
          pengguna: 3.552,
          res: '3X RESOURCE POWER',
          space: 'Unlimited',
          bandwidth: 'Unlimited',
          popEmain: 'Unlimited',
          database: 'Unlimited',
          addDomain: 'Unlimited',
          backupRestor: 'magic Auto',
          bonus: 'Domain Gratis',
          ssl: 'Unlimited SSL',
          nameServer: 'Private',
          support: 'Prioritas',
          mailProtec: 'SpamExpert Pro'
        }
      ],
      maxData: [
        {
          text: 'max execution time 300s'
        },
        {
          text: 'max execution time 300s'
        },
        {
          text: 'php memory limit 1024 MB'
        }
      ],
      posData: [
        {
          text: 'post max size 128 MB'
        },
        {
          text: 'upload max filesize 128 MB'
        },
        {
          text: 'max input vars 2500'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.box-content
  .box-component
    .box-data-component
      .discon
        text-decoration line-through
      .data-check
        width 100%
        text-align center
.btn-item
  border-radius 50px
.deepblue
  background-color #275a99
.data-looping:nth-child(2n)
  background-color #f1f1f1
  border 1px solid #f1f1f1 !important
.img-best
  left -13px
  top -10px
.img-data
  @media only screen and (max-width 768px)
    height 150px
.mobile-card-view
  @media only screen and (max-width 527px)
    margin 15px
</style>
