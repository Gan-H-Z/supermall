<template>
  <!-- v-if="Object.keys(commentInfo).length !== 0是判断commentInfo的长度是不否为0 -->
  <!-- <div class="commentInfo" v-if="Object.keys(commentInfo).length !== 0"> -->

  <div class="commentInfo" v-if="cRate !== 0">
    <div class="top">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="user">
      <div class="user_avatar">
        <img :src="user.avatar" alt="" />
      </div>
      <div class="uname">{{ user.uname }}</div>
    </div>

    <div class="content">
      <div class="text">{{ content }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      user: {},
      cRate: 0,
      content: {},
    };
  },
  watch: {
    commentInfo() {
      // 拿到用户评论相关的信息
      this.user = this.commentInfo.list[0].user;
      this.cRate = this.commentInfo.cRate;
      this.content = this.commentInfo.list[0].content;
      // console.log(this.cRate);
      // console.log(this.commentInfo.list[0].user);
    },
  },
};
</script>
<style scoped>
.top {
  height: 45px;
  /* background-color: #ccc; */
  padding: 0 8px 0;
}
.top span {
  line-height: 40px;
  font-size: 15px;
}
.top span:nth-last-child(1) {
  float: right;
}
.user {
  height: 60px;
}
.user .user_avatar {
  width: 42px;
  height: 42px;
  border-radius: 42px;
  overflow: hidden;
  float: left;
  margin-left: 8px;
  margin-top: 8px;
}
.user .user_avatar img {
  width: 100%;
}
.user .uname {
  float: left;
  margin-left: 8px;
  margin-top: 19px;
}
.content {
  height: 250px;
  background-color: pink;
}
.content {
  font-size: 14px;
  padding: 0 8px 0;
}
</style>