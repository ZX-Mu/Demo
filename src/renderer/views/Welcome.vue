<!--
 - @Author: zhaoxin
 - @Date: 2022/3/15 18:55
 - @Description: welcome
 -->
<template>
  <div id="demo">
    <div class="content">
      <el-image :src="url" fit="contain" @click.native="dialog()"></el-image>
    </div>
    <div class="content">
      <el-input v-model="userId"></el-input>
    </div>
    <div class="content enterBtn">
      <el-button @click="enter">Enter</el-button>
    </div>

    <MyDialogs ref="myDialogs" 
      :name="name"
      :userId="userId"
      @closeDialog="closeDialog(...arguments)"
    >
      <template v-slot:content>
        <h2 class="content_text">Wow, congratulations on discovering this mysterious continent</h2>
      </template>
    </MyDialogs>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import MyDialogs from '@/components/MyDialogs'

const stores = {
  computed: {
    ...mapState({
      client: state => state.client,
    })
  },
  methods: {
    ...mapGetters([
    ]),
    ...mapMutations([
      'client/SET_UCC_ID',
    ]),
    ...mapActions([
      
    ]),
  }
}

export default {
  name: 'Welcome',
  components: {
    MyDialogs
  },
  computed: {
    ...stores.computed,
    //与v-model配合使用
    userId: {
      get() {
        return this.client.userId;
      },
      set(val) {
        this['client/SET_UCC_ID'](val)
      }
    }
  },
  data() {
    return {      
      name: 'Welcome',
      url: require('@/assets/images/welcome.png'),
    }
  },
  mounted() {
    this.userId = "沐小小"
  },
  methods: {
    ...stores.methods,
    dialog() {
      this.$refs.myDialogs.openDialog()
    },
    closeDialog(str) {
      console.log('Welcome closeDialog, str is:', str)
    },
    enter(){
        this.$router.push({path: '/enter'})
    }
  }
}
</script>

<style lang="scss">
@import "../assets/css/color";

#demo {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: $background-index;
  color: $font;
  text-align: center;
  padding-top: 100px;
  box-sizing: border-box;
  .enterBtn{
    margin-top: 36px;
  }
}
.content{
    width: 40vw;
    padding: 24px 0px;
    box-sizing: border-box;
    margin: auto;
  }
.content_text{
  color: #fdaf85;
}

</style>
