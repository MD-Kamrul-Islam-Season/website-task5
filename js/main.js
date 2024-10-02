//Common function for donateBtns
function donateBtnHandler(event) {
  const modal = document.getElementById("myModal");
  let inputValue;
  if (event.target.id === "donateBtn1") {
    inputValue = document.getElementById("donationInputBox1").value;
  } else if (event.target.id === "donateBtn2") {
    inputValue = document.getElementById("donationInputBox2").value;
  } else if (event.target.id === "donateBtn3") {
    inputValue = document.getElementById("donationInputBox3").value;
  }
  const inputNumber = parseFloat(inputValue);
  if (!Number.isNaN(inputNumber) && inputNumber > 0) {
    modal.showModal();
  } else {
    alert("Invalid Donation amount");
  }
}
document
  .getElementById("donateBtn1")
  .addEventListener("click", donateBtnHandler);
document
  .getElementById("donateBtn2")
  .addEventListener("click", donateBtnHandler);
document
  .getElementById("donateBtn3")
  .addEventListener("click", donateBtnHandler);
