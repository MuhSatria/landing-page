<template>
  <div class="box-content container my-5">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <h1 class="data-title font-weight-bolder text-dark" v-html="data.title">PHP Hosting</h1>
        <h2 class="data-subtitle font-weight-normal text-secondary my-4" v-text="data.subtitle"></h2>
        <div
          class="d-flex align-items-center my-3"
          v-for="(data_row, index_li) in data.list"
          :key="index_li">
          <img
            class="list-icon mr-2"
            :src="data.list[index_li].icon"
            height="20px" >
          <div class="text-secondary" v-text="data.list[index_li].text"></div>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <img class="img-data" :src="dataImg" width="100%" height="280px" alt="banner" >
      </div>
    </div>
  </div>
</template>

<script>
import checkIcon from '@/assets/icon/checklist-alt.svg'
export default {
  data () {
    return {
      checkIcon: checkIcon,
      dataImg: 'https://raw.githubusercontent.com/bylabz/frontend-test/aa4165e6bdd93d101df1bee35713f68a88f868f8/assets/svg/illustration%20banner%20PHP%20hosting-01.svg',
      data: {
        title: 'PHP Hosting',
        subtitle: 'Cepat, handal, penuh dengan modul PHP yang Anda butuhkan',
        list: [
          {
            icon: checkIcon,
            text: 'Solusi PHP untuk performa query yang lebih cepat'
          },
          {
            icon: checkIcon,
            text: 'Konsumsi memori yang lebih rendah'
          },
          {
            icon: checkIcon,
            text: 'Support PHP 5.3, PHP 5.4, PHP 5.5, PHP 5.6, PHP 7'
          },
          {
            icon: checkIcon,
            text: 'Fitur enkripsi IonCube dan Zend Guard Loaders'
          }
        ]
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
// .box-content
</style>
