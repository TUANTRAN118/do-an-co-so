<template>
    <compheader />
    <h1 class="text-center"> FORM LIÊN HỆ </h1>
    <div class="container p-5">
        <div class="col-md-6">
            <label for="inputEmail4" class="form-label"> Họ và Tên </label>
            <input type="email" class="form-control" id="inputEmail4">
        </div>
        <form class="row g-3">
            <div class="col-md-6">
                <label for="inputEmail4" class="form-label"> Số điện thoại </label>
                <input type="email" class="form-control" id="inputEmail4">
            </div>
            <div class="col-md-6">
                <label for="inpuemail" class="form-label"> Email </label>
                <input type="email" class="form-control" id="inputemail" placeholder="@gmail.com">
            </div>
            <div class="col-12">
                <label for="inputAddress" class="form-label"> Địa chỉ </label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1 Phù Đổng">
            </div>
            <div class="col-12">
                <label for="inputAddress2" class="form-label"> Địa chỉ khác </label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Căn hộ, tầng, phòng">
            </div>
            <div class="col-md-6">
                <label for="inputCity" class="form-label"> Thành phố </label>
                <input type="text" class="form-control" id="inputCity">
            </div>
            <div class="col-md-4">
                <label for="inputState" class="form-label"> Tình trạng </label>
                <select id="inputState" class="form-select">
                    <option selected>Chọn...</option>
                    <option>...</option>
                </select>
            </div>
            <div id="mess" class="col-md-4">
                <label for="inputState" class="form-label"> Lời nhắn </label>
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                        style="height: 100px"></textarea>
                    <label for="floatingTextarea2"> Message </label>
                </div>
            </div>

            <div class="col-12">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck">
                    <label class="form-check-label" for="gridCheck">
                        Check me out
                    </label>
                </div>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary">SEND</button>
            </div>
        </form>
    </div>




    <compfooter />
</template>
  
  
  
  
<script>
import compheader from '../components/compheader.vue';
import compfooter from '../components/compfooter.vue';

export default {
    components: {
        compheader,
        compfooter,

    }

}

</script>
  
  
  
  
<style>
h1 {
    margin-top: 150px;
}
#mess{
    width: 625px;
}

.container {}
</style>
  