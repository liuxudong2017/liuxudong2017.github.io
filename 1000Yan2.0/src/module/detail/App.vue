<template>
  <div class="qy-wrap">
    <header-tag :title='bookName'></header-tag>
    <book-detail></book-detail>
    <book-detail-catalog></book-detail-catalog>
    <book-detail-fans></book-detail-fans>
    <book-detail-comment></book-detail-comment>
    <div class="qy-detail-btn-all">
      <a href="commentSend.html" class="qy-go-comment-btn">发表评论</a>
      <a href="readPage.html" class="qy-go-read">立即阅读</a>
    </div>
  </div>
</template>
<script>
import HeaderTag from 'components/secondHeader/secondHeader';
import BookDetail from 'components/detail/bookDetailHeader';
import BookDetailCatalog from 'components/detail/bookDetailCatalog';
import BookDetailFans from 'components/detail/BookDetailFans';
import BookDetailComment from 'components/detail/BookDetailComment';

export default {
    name: 'app',
    components: {HeaderTag,BookDetail,BookDetailCatalog,BookDetailFans,BookDetailComment}
    ,data(){
      return{
        bookName:'清晰师生清晰师生清晰师生清晰师生清晰师生清晰师生'
      }
    }
}
</script>

<style>
body{
  background: #F2F4F7;
}
.qy-wrap{
  padding-bottom: 1.3rem;
}
.ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.ellipsis-list-3{
  display: -webkit-box;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.qy-detail-wrap{
  width:90%;
  margin:0 auto;
  padding:.2rem 0;
}
.qy-detail-group{
  background: #fff;
  margin-bottom:.2rem;
}
.qy-detail-btn-all{
  display: flex;
  justify-content:space-around;
  background: #fff;
  width:100%;
  padding:.2rem;
  position: fixed;
  bottom: 0;
  left:0;
}
.qy-detail-btn-all a{
    border: 1px solid #b9bdc0;
    font-size: .4rem;
    padding: .2rem 0.6rem;
    border-radius: .5rem;
}
.qy-detail-btn-all .qy-go-read{
  background:#f46094;
  border-color:#f46094;
  color:#fff;
}
</style>
