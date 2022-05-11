<!--
 - @Author: zhaoxin
 - @Date: 2022/3/17 10:00
 - @Description: enter
 -->
<template>
  <div id="enter">
    <div class="content">
      <svg-icon class="like_icon" icon-class="like" @click.native="like"></svg-icon>
    </div>
    <div class="content">
      <el-button @click="dialog">Look here</el-button>
    </div>
    <div class="content">
      <el-button @click="leave">Go Back</el-button>
    </div>
    <MyDialogs ref="myDialogs" 
      :name="name"
      :userId="client.userId"
      @closeDialog="closeDialog(...arguments)"
    >
      <template v-slot:content>
        <h2 class="content_text">Hello {{client.userId}}, this is your world ！</h2>
      </template>
    </MyDialogs>
  </div>
</template>

<script>
import MyDialogs from '../components/MyDialogs'
import {mapState, mapActions} from 'vuex'

const stores = {
  computed: {
    ...mapState({
      client: state => state.client,
    })
  },
  methods: {
    ...mapActions([
      
    ]),
  }
}

export default {
  name: "Enter",
  components: {
    MyDialogs,
  },
  computed: {
    ...stores.computed,
    
  },
  data() {
    return {
      name: "Enter"
    }
  },
  mounted() {

  },
  methods: {
    ...stores.methods,
    like() {
      console.log('like')
    },  
    dialog() {
      this.$refs.myDialogs.openDialog()
    },
    closeDialog(str) {
      console.log('Enter closeDialog, str is:', str)
    },  
    leave() {
      this.$router.replace({path: '/'})
    },
  }
}
</script>

<style lang="scss">
@import "../assets/css/color";

#enter {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  padding-top: 100px;
  box-sizing: border-box;
  background-color: $background-index;
  color: $font;
  .like_icon{
    font-size: 48px;
    color: #ee5e22;
  }
}

</style>
