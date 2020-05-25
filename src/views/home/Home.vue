<template>
  <div class="box-content">
    <header-menu></header-menu>
    <banner-menu></banner-menu>
    <hr>
    <product-menu></product-menu>
    <paket-menu></paket-menu>
    <module-menu></module-menu>
    <hr class="mt-0">
    <module-description></module-description>
    <service-menu></service-menu>
    <footer-menu></footer-menu>
  </div>
</template>

<script>
import HeaderMenu from '@/components/header/Home'
import FooterMenu from '@/components/footer/Home'
import BannerMenu from '@/components/banner/Home'
import ProductMenu from '@/components/product/Home'
import PaketMenu from '@/components/paket/Home'
import ModuleMenu from '@/components/module/Home'
import ModuleDescription from '@/components/module/ModuleDesc'
import ServiceMenu from '@/components/service/Home'
export default {
  components: {
    HeaderMenu,
    FooterMenu,
    BannerMenu,
    ProductMenu,
    PaketMenu,
    ModuleMenu,
    ModuleDescription,
    ServiceMenu
  }
}
</script>
