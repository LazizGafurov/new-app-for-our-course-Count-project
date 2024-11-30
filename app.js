function calculateProfit() {
  // Foydalanuvchidan ma'lumotlarni olish
  const productName = document.getElementById("productName").value;
  const costPrice = parseFloat(document.getElementById("costPrice").value);
  const sellingPrice = parseFloat(
    document.getElementById("sellingPrice").value
  );

  // Kiritilgan ma'lumotlarni tekshirish
  if (!productName || isNaN(costPrice) || isNaN(sellingPrice)) {
    alert("Iltimos, barcha maydonlarni to'ldiring.");
    return;
  }

  // Foyda hisoblash
  const profit = sellingPrice - costPrice;

  // Natijani ekranda ko'rsatish
  let resultText = `${productName} tovaridan foyda: ${profit} so'm.`;

  if (profit > 0) {
    resultText += " Tovar foyda keltirdi!";
  } else if (profit < 0) {
    resultText += " Tovar zarar keltirdi.";
  } else {
    resultText += " Tovar foyda yoki zarar keltirmadi.";
  }

  // Foyda natijasini chiqarish
  document.getElementById("result").innerText = resultText;
}
