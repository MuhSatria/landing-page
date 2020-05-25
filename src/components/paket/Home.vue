<template>
  <div class="box-content container my-5">
    <div class="box-component text-center">
      <img class="img-icon mb-5" :src="stripIcon" height="8px" width="80px" alt="strip-icon" >
    </div>
    <div class="box-component text-center">
      <h3>Semua Paket Hosting Sudah Termasuk</h3>
      <div class="row">
        <div
          class="col-lg-4 col-md-4 col-sm-12 col-xs-12"
          v-for="(data_row, index_home) in data"
          :key="index_home"
        >
          <div class="box-data-component px-3">
            <img class="img-data my-4" :src="data[index_home].image" height="80px" alt="img-data" >
            <h5 class="font-weight-bolder" v-text="data[index_home].title"></h5>
            <p v-html="data[index_home].desc"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import stripIcon from '@/assets/icon/strip-line-alt.svg'
export default {
  data () {
    return {
      stripIcon: stripIcon,
      data: [
        {
          title: 'PHP Semua Versi',
          desc: 'Pilih mulai dari versi PHP 5.3 s/d PHP 7.<br>Ubah sesuka Anda!',
          image: 'https://raw.githubusercontent.com/bylabz/frontend-test/aa4165e6bdd93d101df1bee35713f68a88f868f8/assets/svg/icon%20PHP%20Hosting_PHP%20Semua%20Versi.svg'
        },
        {
          title: 'MySQL Versi 5.6',
          desc: 'Nikmati MySQL versi terbaru, tercepat dan <br>kaya akan fitur.',
          image: 'https://raw.githubusercontent.com/bylabz/frontend-test/aa4165e6bdd93d101df1bee35713f68a88f868f8/assets/svg/icon%20PHP%20Hosting_My%20SQL.svg'
        },
        {
          title: 'Panel Hosting cPanel',
          desc: 'Kelola webiste dengan panel canggih yang <br> familiar di hati Anda.',
          image: 'https://raw.githubusercontent.com/bylabz/frontend-test/aa4165e6bdd93d101df1bee35713f68a88f868f8/assets/svg/icon%20PHP%20Hosting_CPanel.svg'
        },
        {
          title: 'Gransi Uptime 99.9%',
          desc: 'Data center yang mendukung kelangsungan <br> website Anda 24/7.',
          image: 'https://raw.githubusercontent.com/bylabz/frontend-test/aa4165e6bdd93d101df1bee35713f68a88f868f8/assets/svg/icon%20PHP%20Hosting_garansi%20uptime.svg'
        },
        {
          title: 'Database InnoDB Unlimited',
          desc: 'Jumlah dan ukuran database yang tumbuh <br> sesuai kebutuhan Anda.',
          image: 'https://raw.githubusercontent.com/bylabz/frontend-test/aa4165e6bdd93d101df1bee35713f68a88f868f8/assets/svg/icon%20PHP%20Hosting_InnoDB.svg'
        },
        {
          title: 'Wildcard Remote MySQL',
          desc: 'Mendukung s/d 25 max_user_connections <br> dan 100 max_connections.',
          image: 'https://raw.githubusercontent.com/bylabz/frontend-test/aa4165e6bdd93d101df1bee35713f68a88f868f8/assets/svg/icon%20PHP%20Hosting_My%20SQL%20remote.svg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
