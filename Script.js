const tarifler = [
  {
    ad: "Menemen",
    malzemeler: ["yumurta", "domates", "biber", "zeytinyağı"],
    aciklama: "Tavada domates ve biberi sotele, yumurtayı kır, karıştır, afiyetle ye!"
  },
  {
    ad: "Patates Kızartması",
    malzemeler: ["patates", "yağ", "tuz"],
    aciklama: "Patatesleri doğrayıp kızgın yağda çıtır olana kadar kızart."
  },
  {
    ad: "Peynirli Omlet",
    malzemeler: ["yumurta", "peynir", "tuz", "tereyağı"],
    aciklama: "Yumurtayı çırp, tavada tereyağında pişir, içine peyniri ekle ve katla."
  }
];

function tarifAra() {
  const giris = document.getElementById("malzemeInput").value.toLowerCase();
  const girilen = giris.split(",").map(m => m.trim());
  const uygunTarifler = tarifler.filter(tarif =>
    tarif.malzemeler.some(m => girilen.includes(m))
  );

  const sonucDiv = document.getElementById("sonuclar");
  sonucDiv.innerHTML = "";

  if (uygunTarifler.length === 0) {
    sonucDiv.innerHTML = "<p>Üzgünüm, uygun tarif bulunamadı.</p>";
    return;
  }

  uygunTarifler.forEach(tarif => {
    const kart = document.createElement("div");
    kart.style.marginBottom = "16px";
    kart.innerHTML = `
      <h3>${tarif.ad}</h3>
      <p><strong>Tarif:</strong> ${tarif.aciklama}</p>
    `;
    sonucDiv.appendChild(kart);
  });
}
