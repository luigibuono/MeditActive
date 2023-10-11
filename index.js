document.addEventListener("DOMContentLoaded", function() {
  const goalForm = document.getElementById("goalForm");
  const userTable = document.getElementById("userTable");
  const coinCountElement = document.getElementById("coin-count");
  let coinCount = 0;

  // Aggiungi un gestore di eventi al form per l'invio dei dati
  goalForm.addEventListener("submit", function(event) {
      event.preventDefault();

      const nome = document.getElementById("nome").value;
      const eta = document.getElementById("eta").value;
      const abitudini = document.getElementById("abitudini").value;
      const obiettivo = document.getElementById("obiettivo").value;
      const tempo = document.getElementById("tempo").value;

      // Guadagna monete in base al tempo selezionato
      const coinsEarned = calculateCoinsEarned(tempo);
      coinCount += coinsEarned;
      updateCoinCount();

      // Aggiungi una nuova riga utente alla tabella
      addRow(nome, eta, abitudini, obiettivo, tempo, );

      // Resetta il modulo
      goalForm.reset();
  });

  // Funzione per aggiungere una nuova riga utente alla tabella
  function addRow(nome, eta, abitudini, obiettivo, tempo, coinsEarned) {
      const newRow = userTable.querySelector("tbody").insertRow();

      const cellNome = newRow.insertCell(0);
      const cellEta = newRow.insertCell(1);
      const cellAbitudini = newRow.insertCell(2);
      const cellObiettivo = newRow.insertCell(3);
      const cellTempo = newRow.insertCell(4);
      const cellCoins = newRow.insertCell(5);

      cellNome.textContent = nome;
      cellEta.textContent = eta;
      cellAbitudini.textContent = abitudini;
      cellObiettivo.textContent = obiettivo;
      cellTempo.textContent = tempo;
     
      // Aggiungi un gestore di eventi al pulsante "Elimina" (puoi farlo a tua discrezione)
      const deleteButton = document.createElement("button1");
      deleteButton.textContent = "Delete";
      cellTempo.appendChild(deleteButton);
      deleteButton.addEventListener("click", function() {
          userTable.querySelector("tbody").removeChild(newRow);
      });
  }

  // Funzione per calcolare le monete guadagnate in base al tempo selezionato
  function calculateCoinsEarned(tempo) {
      switch (tempo) {
          case "1":
              return 5; // Guadagna 5 monete al giorno
          case "7":
              return 25; // Guadagna 25 monete a settimana
          case "31":
              return 100; // Guadagna 100 monete al mese
          case "365":
              return 500; // Guadagna 500 monete all'anno
          default:
              return 0;
      }
  }

  // Aggiungi un gestore di eventi al pulsante "Pianta un albero"
  const plantTreeButton = document.getElementById("plant-tree-button");
  plantTreeButton.addEventListener("click", function() {
      if (coinCount >= 50) {
          coinCount -= 50;
          updateCoinCount();
          alert("Hai piantato un albero!");
      } else {
          alert("Non hai abbastanza monete per piantare un albero.");
      }
  });

  // Aggiungi un gestore di eventi al pulsante "Fai una donazione"
  const donateButton = document.getElementById("donate-button");
  donateButton.addEventListener("click", function() {
      // Puoi implementare ulteriori funzionalità di donazione qui
      const donationAmount = 20; // Modifica questo valore con l'importo della donazione
      if (coinCount >= donationAmount) {
          coinCount -= donationAmount;
          updateCoinCount();
          alert(`Hai fatto una donazione di ${donationAmount} monete.`);
      } else {
          alert("Non hai abbastanza monete per fare questa donazione.");
      }
  });

  // Funzione per aggiornare il conteggio delle monete virtuali
  function updateCoinCount() {
      coinCountElement.textContent = coinCount;
  }
});
