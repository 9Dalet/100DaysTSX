import Reaper from '../assets/reaper.png';

const rules = [
  {
    id: 1,
    name: "Intro",
    text1: "Benvenuti/e in 100Days",
    text2: "\nil gioco da tavola a tema morte!\nRiuscirete a sfuggire\nal gelido abbraccio della morte?",
    image: Reaper
  },
  {
    id: 2,
    name: "Giocatori",
    text: "2-6 giocatori"
  },
  {
    id: 3,
    name: "Obiettivo",
    text: "Scoprire il proprio destino prima di arrivare alla fine del tabellone"
  },
  {
    id: 4,
    name: "Contenuti",
    text: "- Plancia di gioco\n- 2 dadi a 6 facce\n- 6 pedine\n- 3 mazzi di carte\n(destino, shinigami e sfida)"
  },
  {
    id: 5,
    name: "Prima di Iniziare",
    text: "Dopo aver mischiato tutti i mazzi di carte, i giocatori dovranno pescare dal mazzo DESTINO una carta senza poterla però guardare. Essa dovrà essere invece vista dagli altri giocatori.\n\nSuccessivamente, i giocatori dovranno eleggere 2 MOIRE(in caso di 2 giocatori entrambi ricopriranno il ruolo).\nLe MOIRE hanno il compito di dare indizi riguardo al destino del giocatore nel caso di vittoria nelle sfide dello SHINIGAMI."
  },
  {
    id: 6,
    name: "Inizio del Gioco",
    text: "L'ordine dei giocatori si basa sull'età anagrafica in ordine decrescente(dal più vecchio al più giovane).\n\nIl primo giocatore lancia i dadi e avanza di un numero di caselle pari al numero indicato sui dadi."
  },
  {
    id: 7,
    name: "Caselle",
    text1: "Imprevisto",
    text2: "Sfida",
    text3: "Shinigami"
  },
  {
    id: 8,
    name: "Per Vincere",
    text: "All'inizio di ogni turno dopo il 2° giro i giocatori potranno chiamare la morte per indovinare il loro destino prima di lanciare i dadi.\nSe il giocatore indovina vincerà il gioco.\nIn caso di risposta sbagliata dovrà avanzare di una casella e successivamente procederà regolarmente col suo turno."
  },
]

export default rules;