<template>
   <div class="container">
        <div id="home">
        <img  class="img-logo" src="./assets/images/picknpay.jpg" alt=""> 
        <input  id="input" type="text" placeholder="Search..">
        <div id="buttons"> <button id="login"> Login</button> <button id="Register"> Register</button></div>
       
    </div>
    <div id="landing">
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#home{
    height: 100px;
    margin: auto;
    background-color: rgb(236, 243, 243);
    display: flex;
    padding:20px;
    justify-content: space-between;
}
.img-logo{
    height:99px;
    background-color: rgb(234, 240, 240);
    
}
#input{
    margin-top: 45px;
    height: 50px;
    border-radius: 50px;
    width: 500px;
}

#buttons{
    display: flex;
    justify-content: center;
    gap: 20px;
}

#login{
    margin-top: 50px;
    height: 50px;
    background-color: rgb(9, 9, 114);
    color: white;
    width: 90px;
}
#Register{
    margin-top: 50px;
    height: 50px;
    background-color: rgb(9, 9, 114);
    color: white;
    width: 90px;
}

#landing {
    height: 100vh;
    background: 
      /* top, transparent red, faked with gradient */ linear-gradient(
        rgba(0, 0, 0, 0.45),
        rgba(0, 0, 0, 0.45)
      ),
      /* bottom, image */ url("https://i.postimg.cc/g22ndBxW/Pick-n-Pay-w-filters.png");
    background-size: cover;
    /* background-attachment: fixed; */
  }
</style>