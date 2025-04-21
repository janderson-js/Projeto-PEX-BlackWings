function changeBGofBTN(listSelector, btnSelector) {
  // Select the last list item and the button
  const list = document.querySelector(listSelector);
  const lastLI = list.lastElementChild;
  const btn = document.querySelector(btnSelector);

  if (!list || !lastLI || !btn) {
    console.error("Elementos não encontrados. Verifique os IDs.");
    return;
  }

  lastLI.addEventListener("mouseover", function () {
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
    btn.style.border = "2px solid #d4af3f";
  });

  lastLI.addEventListener("mouseout", function () {
    btn.style.backgroundColor = "#d4af3f";
    btn.style.color = "#000";
    btn.style.border = "2px solid #000";
  });
}

