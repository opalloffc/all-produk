document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      // stock: 0 (produk kosong)
      // discount: 10 (diskon 10%)
      {
        id: 1,
        name: "VPS Ram 2 Core 2",
        img: "vps.jpg",
        price: 30000,
        stock: 0,
      },
      { id: 2, name: "VPS Ram 4 Core 2", img: "vps.jpg", price: 40000, stock: 0 },
      { id: 3, name: "VPS Ram 8 Core 4", img: "vps.jpg", price: 50000, stock: 0 },
      { id: 4, name: "VPS Ram 16 Core 4", img: "vps.jpg", price: 60000, stock: 0 },
      { id: 5, name: "Ram 1GB", img: "panel.jpg", price: 1000 },
      { id: 6, name: "Ram 2GB", img: "panel.jpg", price: 2000 },
      { id: 7, name: "Ram 3GB", img: "panel.jpg", price: 3000 },
      { id: 8, name: "Ram 4GB", img: "panel.jpg", price: 4000 },
      { id: 9, name: "Ram 5GB", img: "panel.jpg", price: 5000 },
      { id: 10, name: "Ram 6GB", img: "panel.jpg", price: 6000 },
      { id: 11, name: "Ram 7GB", img: "panel.jpg", price: 7000 },
      { id: 12, name: "Ram 8GB", img: "panel.jpg", price: 8000 },
      { id: 13, name: "Ram 9GB", img: "panel.jpg", price: 9000 },
      { id: 14, name: "Unlimited", img: "panel.jpg", price: 15000, discount: 30 },
      { id: 15, name: "Admin Panel", img: "panel.jpg", price: 15000, discount: 30 },
      { id: 16, name: "Patner Panel", img: "panel.jpg", price: 35000, discount: 20 },
      { id: 17, name: "Owner Panel", img: "panel.jpg", price: 40000, discount: 25 },
      {
        id: 18,
        name: "Resseler Panel Private",
        img: "panel.jpg",
        price: 10000,
      },
      { id: 19, name: "OpallBotz-V1", img: "wabot.jpg", price: 25000 },
      { id: 20, name: "OpallBotz-V2", img: "wabot.jpg", price: 45000, discount: 40 },
      { id: 21, name: "Owner Script", img: "wabot.jpg", price: 50000 },
      { id: 22, name: "Nokos Indo", img: "nokos.jpg", price: 5000 },
      { id: 23, name: "function database", img: "security.jpg", price: 45000 },
    ],

    //list services
    services: [
      {id: 1, name: "Jasa Add Database", img: "security.jpg", price: 45000, discount: 32 },
      {id: 2, name: "Jasa Install Panel Pterodactyl", img: "panel.jpg", price: 5000}
    ],
    getDiscountedPrice(item) {
      return item.discount
        ? item.price - (item.price * item.discount / 100)
        : item.price;
    },
    getDiscountedPrice(service) {
      return service.discount
        ? service.price - (service.price * service.discount / 100)
        : service.price;
    },

    rupiah(angka) {
      return angka.toLocaleString("id-ID");
    },

    beli(item) {
      if (item.stock <= 0){
        alert("produk ini sedang kosong");
        return;
      }
      let hargaSetelahDiskon = this.getDiscountedPrice(item);
      let pesan = `Halo Admin, saya ingin membeli produk:
      Nama: ${item.name}
      Harga: Rp ${hargaSetelahDiskon.toLocaleString("id-ID")}
      Payment: QRIS;`
      let nomorWA = "6283867448495";
      let urlWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
      //window.open(urlWA, "_blank");
      window.location.href = urlWA;
    },
//SERVICE
    belilayanan(service) {
      let hargaSetelahDiskon = this.getDiscountedPrice(service);
      let pesan_jasa = `Halo admin, saya ingin menggunakan jasa anda:
      Nama: ${service.name}
      Harga: Rp ${hargaSetelahDiskon.toLocaleString("id-ID")}
      Payment: QRIS;`
      let nomorWA = "6283867448495";
      let urlWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan_jasa)}`;
      //window.open(urlWA, "_blank");
      window.location.href = urlWA;
    },

    // beli(item) {
    //   const nomorWA = "6283867448495";
    //   const pesan = `Halo saya ingin membeli:\n\n` + `*${item.name}*\nHarga: Rp ${item.price.toLocaleString()}\n\n` + `Bagaimana cara pembeliannya`;
    //   const urlWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
    //   window.open(urlWA, "_blank");
    // }
  }));

  // function hitungHargaDiskon(harga, diskon) {
  //   if (!diskon || diskon === 0) {
  //     return harga;
  //   }
  //   return harga - (harga * diskon) / 100;
  // }

  // function beliSekarang(namaProduk, harga, diskon) {
  //   const nomorWA = "6283867448495";

  //   let hargaFinal = harga;
  //   let pesan = `Halo, saya ingin membeli:\n ${namaProduk}\n Harga: Rp ${harga}`;

  //   if (diskon && diskon > 0) {
  //     hargaFinal = harga - (harga * diskon) / 100;
  //     pesan += `\n Diskon ${diskon}%\nHarga Setelah Diskon: Rp ${hargaFinal}`;
  //   }

  //   pesan += `\nBagaimana cara pembeliannaya?`;

  //   //const pesan = `Halo saya ingin membeli:\n\n` + `*${item.name}*\nHarga: Rp ${item.price.toLocaleString()}\n\n` + `Bagaimana cara pembeliannya`;
  //   const urlWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
  //   window.location.href = urlWA;
  // }

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      //cek apakah ada barang yang sama di cart
      const cartItem = this.items.find((item) => item.id === newItem.id);

      // jika belum ada
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        // jika barang sama atau beda
        this.items = this.items.map((item) => {
          //jika barang beda
          if (item.id !== newItem.id) {
            return item;
          } else {
            //jika barang ada
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },
    remove(id) {
      //ambil item yang mau di remove
      const cartItem = this.items.find((item) => item.id === id);

      //jika item lebih dari 1
      if (cartItem.quantity > 1) {
        //telusuri 1 1
        this.items = this.items.map((item) => {
          //jika bukan barang yang di klik
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        //jika barang sisa 1
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

//form validation
const checkoutButton = document.querySelector(".checkout-button");
checkoutButton.disabled = true;

const form = document.querySelector("#checkoutForm");

form.addEventListener("keyup", function () {
  for (let i = 0; i < form.elements.length; i++) {
    if (form.elements[i].value.length !== 0) {
      checkoutButton.classList.remove("disabled");
      checkoutButton.classList.add("disabled");
    } else {
      return false;
    }
  }
  checkoutButton.disabled = false;
  checkoutButton.classList.remove("disabled");
});

//kirim data ketika tombol checkout di klik
checkoutButton.addEventListener("click", async function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const data = new URLSearchParams(formData);
  const objData = Object.fromEntries(data);
  //   const message = formatMessage(objData);
  //   window.open('http://wa.me/6283867448495?text=' + encodeURI(message));

  //minta trx token
  try {
    const response = await fetch("midtrans/midtrans.php", {
      method: "POST",
      body: data,
    });
    const token = await response.text();
    // console.log(token);
    window.snap.pay(token);
  } catch (err) {
    console.log(err.message);
  }
});
//format pesan whatsapp
const formatMessage = (obj) => {
  return `Data Customer
    Nama: ${obj.name}
    Email: ${obj.email}
    No HP: ${obj.phone}
    Data Pesanan
    ${JSON.parse(obj.items).map(
      (item) => `${item.name} (${item.quantity} x ${rupiah(item.total)}) \n`
    )}
    TOTAL: ${rupiah(obj.total)}
    Terima kasih`;
};

//k konversi ke rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
