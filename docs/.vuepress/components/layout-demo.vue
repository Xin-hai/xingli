<template>
  <div>
    <xin-layout>
      <xin-header >header</xin-header>
      <xin-content >content</xin-content>
      <xin-footer >footer</xin-footer>
    </xin-layout>
    <br>
    <xin-layout >
      <xin-header >header</xin-header>
      <xin-layout>
        <xin-side>side</xin-side>
        <xin-content >content</xin-content>
      </xin-layout>
      <xin-footer >footer</xin-footer>
    </xin-layout>
    <br>
    <xin-layout>
      <xin-side>side</xin-side>
      <xin-layout>
        <xin-header>header</xin-header>
        <xin-content>content</xin-content>
        <xin-footer>footer</xin-footer>
      </xin-layout>
    </xin-layout>
    <br>
    <xin-layout>
      <xin-layout>
        <xin-header>header</xin-header>
        <xin-content>content</xin-content>
        <xin-footer>footer</xin-footer>
      </xin-layout>
      <xin-side should-close="true">side</xin-side>
    </xin-layout>
  </div>
</template>

<style scoped lang="scss">
$background: lightskyblue;
.header{
  height: 50px;
  background: $background;
}
.content{
  height: 150px;
  background: darken($background, 10%);
}
.footer{
  height: 50px;
  background: darken($background, 30%);
}
.side{
  width: 150px;
  background: lighten($background, 15%);
}
</style>

<script>
import Layout from "../../../src/layout.vue";
import Header from "../../../src/header.vue";
import Content from "../../../src/content.vue";
import Side from "../../../src/side.vue";
import Footer from "../../../src/footer.vue";
export default {
  components: {
    'xin-layout': Layout,
    'xin-content': Content,
    'xin-header': Header,
    'xin-side': Side,
    'xin-footer': Footer
  }
}
</script>

