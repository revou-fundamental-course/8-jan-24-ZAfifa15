//fungsi untuk menghitung luas dan keliling
function keliling() {
    var sideLength = document.getElementById("perimeterInput").value; 
    if (!sideLength|| isNaN(sideLength)) {
      alert("Masukkan panjang sisi dengan nilai angka! Contoh : 50");
      return;
    }
  
    var kelilingPersegi = 4 * sideLength;
    console.log(kelilingPersegi)
    document.getElementById("perResult").innerHTML = kelilingPersegi;
  }
  
  function luas() {
    var sideLength = document.getElementById("areaInput").value; 
    if (!sideLength|| isNaN(sideLength)) {
      alert("Masukkan panjang sisi dengan nilai angka! Contoh : 50");
      return;
    }
  
    var luasPersegi = sideLength * sideLength;
    console.log(luasPersegi)
    document.getElementById("areResult").innerHTML = luasPersegi;
  }
  
  //membuat fungsi untuk tombol reset
  function reset1() {
      var resultPer = document.getElementById("perResult");
      var perimeterSide = document.getElementById("perimeterInput");
    
      if (resultPer) {
        resultPer.innerHTML = "";
      }
    
      if (perimeterSide) {
        perimeterSide.value = "";
      }
  } 
  
  function reset2() {
      var resultAre = document.getElementById("areResult");
      var areaSide = document.getElementById("areaInput");
    
      if (resultAre) {
        resultAre.innerHTML = "";
      }
    
      if (areaSide) {
        areaSide.value = "";
      }
  } 