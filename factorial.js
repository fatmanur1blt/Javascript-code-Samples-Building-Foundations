const faktoriyelHesapla = (n) => {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * faktoriyelHesapla(n - 1);
    }
  };
  
  console.log(faktoriyelHesapla(6));