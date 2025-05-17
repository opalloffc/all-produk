document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    vpss: [
      // stock: 0 (produk kosong)
      // discount: 10 (diskon 10%)
      {
        id: 1,
        name: "VPS Ram 2 Core 2",
        img: "vps.jpg",
        price: 30000
      },
      { id: 2, name: "VPS Ram 4 Core 2", img: "vps.jpg", price: 40000 },
      { id: 3, name: "VPS Ram 8 Core 4", img: "vps.jpg", price: 50000 },
      { id: 4, name: "VPS Ram 16 Core 4", img: "vps.jpg", price: 60000 },
    ],

    //list panel
    panels: [
      { id: 5, name: "Ram 1GB", img: "panel.jpg", price: 1000 },
      { id: 6, name: "Ram 2GB", img: "panel.jpg", price: 2000 },
      { id: 7, name: "Ram 3GB", img: "panel.jpg", price: 3000 },
      { id: 8, name: "Ram 4GB", img: "panel.jpg", price: 4000 },
      { id: 9, name: "Ram 5GB", img: "panel.jpg", price: 5000 },
      { id: 10, name: "Ram 6GB", img: "panel.jpg", price: 6000 },
      { id: 11, name: "Ram 7GB", img: "panel.jpg", price: 7000 },
      { id: 12, name: "Ram 8GB", img: "panel.jpg", price: 8000 },
      { id: 13, name: "Ram 9GB", img: "panel.jpg", price: 9000 },
      { id: 14, name: "Unlimited", img: "panel.jpg", price: 10000 },
      { id: 15, name: "Admin Panel", img: "panel.jpg", price: 5000 },
      { id: 16, name: "Patner Panel", img: "panel.jpg", price: 35000 },
      { id: 17, name: "Owner Panel", img: "panel.jpg", price: 40000 },
      {
        id: 18,
        name: "Resseler Panel Private",
        img: "panel.jpg",
        price: 10000,
      },
    ],

    //list produk lainnya
    items: [
      { id: 19, name: "OpallBotz-V1", img: "wabot.jpg", price: 25000 },
      { id: 20, name: "OpallBotz-V2", img: "wabot.jpg", price: 45000 },
      { id: 21, name: "Owner Script", img: "wabot.jpg", price: 50000 },
      { id: 22, name: "Nokos Indo", img: "nokos.jpg", price: 5000 },
      { id: 23, name: "function database", img: "security.jpg", price: 45000 },
    ],

    //list services
    services: [
      {
        id: 1,
        name: "Jasa Add Database",
        img: "security.jpg",
        price: 45000,
        discount: 10,
      },
      {
        id: 2,
        name: "Jasa Install Panel Pterodactyl",
        img: "panel.jpg",
        price: 5000,
      },
      {
        id: 2,
        name: "Jasa Tema Panel Pterodactyl",
        img: "panel.jpg",
        price: 5000,
      },
    ],

    getDiscountedPrice(vps) {
      return vps.discount
        ? vps.price - (vps.price * vps.discount) / 100
        : vps.price;
    },
    getDiscountedPrice(panel) {
      return panel.discount
        ? panel.price - (panel.price * panel.discount) / 100
        : panel.price;
    },
    getDiscountedPrice(item) {
      return item.discount
        ? item.price - (item.price * item.discount) / 100
        : item.price;
    },
    getDiscountedPrice(service) {
      return service.discount
        ? service.price - (service.price * service.discount) / 100
        : service.price;
    },

    rupiah(angka) {
      return angka.toLocaleString("id-ID");
    },

    // VPS
    beli(vps) {
      if (item.stock <= 0) {
        alert("produk ini sedang kosong");
        return;
      }
      let hargaSetelahDiskon = this.getDiscountedPrice(vps);
      let pesan = `Halo, saya ingin membeli produk:
      Nama: ${vps.name}
      Harga: Rp ${hargaSetelahDiskon.toLocaleString("id-ID")}
      Payment: QRIS`;
      let nomorWA = "6283831344133";
      let urlWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
      //window.open(urlWA, "_blank");
      window.location.href = urlWA;
    },
    //PANEL
    beli(panel) {
      if (panel.stock <= 0) {
        alert("produk ini sedang kosong");
        return;
      }
      let hargaSetelahDiskon = this.getDiscountedPrice(panel);
      let pesan = `Halo, saya ingin membeli produk:
      Nama: ${panel.name}
      Harga: Rp ${hargaSetelahDiskon.toLocaleString("id-ID")}
      Payment: QRIS`;
      let nomorWA = "6283831344133";
      let urlWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
      //window.open(urlWA, "_blank");
      window.location.href = urlWA;
    },
    //ITEM
    beli(item) {
      if (item.stock <= 0) {
        alert("produk ini sedang kosong");
        return;
      }
      let hargaSetelahDiskon = this.getDiscountedPrice(item);
      let pesan = `Halo, saya ingin membeli produk:
      Nama: ${item.name}
      Harga: Rp ${hargaSetelahDiskon.toLocaleString("id-ID")}
      Payment: QRIS`;
      let nomorWA = "6283831344133";
      let urlWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
      //window.open(urlWA, "_blank");
      window.location.href = urlWA;
    },
    //SERVICE
    belilayanan(service) {
      let hargaSetelahDiskon = this.getDiscountedPrice(service);
      let pesan_jasa = `Halo, saya ingin menggunakan  ${service.name}
      Harga: Rp ${hargaSetelahDiskon.toLocaleString("id-ID")}
      Payment: QRIS`;
      let nomorWA = "6283831344133";
      let urlWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(
        pesan_jasa
      )}`;
      //window.open(urlWA, "_blank");
      window.location.href = urlWA;
    },
  }));
});
