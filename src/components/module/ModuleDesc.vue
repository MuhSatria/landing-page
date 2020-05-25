<template>
  <div class="box-content container my-5">
    <div class="box-component text-center">
      <h4 class="text-center base-color my-5">Modul Lengkap untuk Menjalankan Aplikasi PHP Anda.</h4>
      <div class="row">
        <div
          class="col-lg-3 col-md-3 col-6 text-left pl-4"
          v-for="(data_row, index_list) in data"
          :key="index_list"
        >
          <p class="base-color" v-html="data[index_list].list"></p>
        </div>
      </div>
      <button type="button" class="btn btn-outline-secondary btn-item font-weight-bold px-4 my-3 py-2">Selengkapnya</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [
        {
          list: 'IcePHP<br>apc<br>apcu<br>apm<br>ares<br>bcmath<br>bcompiler<br>big_nit<br>bitset<br>bloomy<br>bz2_filter<br>clamav<br>coin_acceptor<br>crack<br>dba'
        },
        {
          list: 'http<br>huffman<br>idn<br>igbinary<br>imagick<br>imap<br>include<br>inotify<br>interbase<br>intl<br>ioncube_loader<br>ioncube_loader_4<br>jsmin<br>json<br>Idap'
        },
        {
          list: 'nd_pdo_mysql<br>oauth<br>oci8<br>odbc<br>opcache<br>pdf<br>pdo<br>pdo_dblib<br>pdo_firedbird<br>pdo_mysql<br>pdo_odbc<br>pdo_pgsql<br>pdo_sqlite<br>pgsql<br>phalcon'
        },
        {
          list: 'stats<br>stem<br>stomp<br>suhosin<br>sybase_ct<br>sysvmsg<br>sysvmsg<br>sysvsem<br>sysvshm<br>tidy<br>timezonedb<br>trader<br>translit<br>uploadprogress<br>uri_template<br>uuid'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.btn-item
  border-radius 50px
</style>
