<template>
  <header class="container">
    <div class="content-1">
      <div class="content-2">
          <h1 class="h2">We Provide Efficious Mult<br>Channel Payment Services</h1>
      
        <p>  Suited for Governments, online merchants, small businesses and
          currently inadequately serviced by traditional payment mechanism
        </p>
        <div class="btn">
          <button>More About Us</button>
          <button>More About Us</button>
        </div>
      </div>
    
      <img class="Ellipse4" src="../../assets/Ellipse4.png"  />
    </div>
    <img class="mng" src="../../assets/mng.png" />
  </header>

</template>
<style scoped>
.container {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  background: linear-gradient(135deg, #0079CD 0%, #509DFD 100%);
  height: 40%;
  width: 90%;
  border-radius: 10px;
}

.content-1 {
 display: flex;
 flex-direction: row;
 max-width: 200px;

}

.btn {
  display: flex;
}
.Ellipse4 {
    width: 30vw;
    height: 80vh;
}
.mng {
  width: 40px;
  height: 60px;
  border-radius:  10px;
  object-fit: cover;
}
.content-12 {
  margin: 50px 0px 0px 150px;
}
.content-12 h1 {
  margin-bottom: 30px;
  line-height: 0.5;

}
.content-12 p {
  color: #6d6c6c;
}
.btn {
  margin-top: 30px;
}
.btn button {
  background: #1e1c8a;
  margin: 20px;
  padding: 10px;
  border-radius: 20px;
  outline: none;
  color: white;
  outline:none;
  border: none;
}
</style>
