//Common function for donateBtns
function donateBtnHandler(event) {
  //declaring variables
  const modal = document.getElementById("myModal");
  const mainBalance = document.getElementById("mainBalance").innerText;
  let inputValue;
  let totalAmount;

  if (event.target.id === "donateBtn1") {
    inputValue = document.getElementById("donationInputBox1").value;
    totalAmount = document.getElementById("totalAmount1").innerText;
  } else if (event.target.id === "donateBtn2") {
    inputValue = document.getElementById("donationInputBox2").value;
    totalAmount = document.getElementById("totalAmount2").innerText;
  } else if (event.target.id === "donateBtn3") {
    inputValue = document.getElementById("donationInputBox3").value;
    totalAmount = document.getElementById("totalAmount3").innerText;
  }
  // transforming string into numbers
  const mainBalanceNumber = parseFloat(mainBalance);
  const inputNumber = parseFloat(inputValue);
  const totalAmountNumber = parseFloat(totalAmount);
  if (!Number.isNaN(inputNumber) && inputNumber > 0) {
    modal.showModal();
    let newInputNumber = totalAmountNumber + inputNumber;
    let newMainBalance = mainBalanceNumber - inputNumber;
    const historySection = document.getElementById("historySection");
    const currentDate = new Date();
    const localDate = currentDate.toLocaleDateString();
    const localTime = currentDate.toLocaleTimeString();

    if (event.target.id === "donateBtn1") {
      document.getElementById("totalAmount1").innerText = newInputNumber;
      const div = document.createElement("div");
      div.innerHTML = `
     <h6>${inputValue} Taka is Donated for famine-2024 at Feni,Bangladesh</h6>
     <p>Date: ${localDate} ${localTime} GMT +0600 (Bangladesh Standard Time)</p>
     `;
      historySection.appendChild(div);
    } else if (event.target.id === "donateBtn2") {
      document.getElementById("totalAmount2").innerText = newInputNumber;
    } else if (event.target.id === "donateBtn3") {
      document.getElementById("totalAmount3").innerText = newInputNumber;
    }
    document.getElementById("mainBalance").innerText = newMainBalance;
  } else {
    alert("Invalid Donation amount");
  }
}
// add EventListeners to three buttons
document
  .getElementById("donateBtn1")
  .addEventListener("click", donateBtnHandler);
document
  .getElementById("donateBtn2")
  .addEventListener("click", donateBtnHandler);
document
  .getElementById("donateBtn3")
  .addEventListener("click", donateBtnHandler);

// Donation and History buttons showup and closeup
document.getElementById("donationBtn").addEventListener("click", function () {
  document.getElementById("donationSection").classList.remove("hidden");
  document.getElementById("historySection").classList.add("hidden");
});
document.getElementById("historyBtn").addEventListener("click", function () {
  document.getElementById("historySection").classList.remove("hidden");
  document.getElementById("donationSection").classList.add("hidden");
});
