import Question from '../assets/questionMark.png';
import Challenge from '../assets/challenge.png';
import Shinigami from '../assets/shinigami.png';

const Caselle = [
  {
    id: 1,
    text: 'Casella IMPREVISTO:\n\nil giocatore dovrà rivelare il suo contenuto sollevando la casella e applicarne il contenuto.',
    image: Question
  },
  {
    id: 2,
    text: 'Casella SFIDA\n\nil giocatore dovrà sfidare un altro giocatore, dopodiché un altro giocatore non incluso nella sfida dovrà pescare e rivelare una carta sfida dal mazzo.\nIl vincitore della sfida otterrà un indizio dal perdente riguardo il proprio destino mentre il perdente rimarrà congelato(salta 1 turno).',
    image: Challenge
  },
  {
    id: 3,
    text: 'Casella SHINIGAMI:\n\nil giocatore dovrà essere interrogato da una delle MOIRE elette precedentemente(in caso una moira dovesse capitare sulla casella l\'\altra moira dovrà interrogarlo) che gli sottoporrà la domanda presente sulla carta shinigami entro il limite del Timer(30 secondi).\n\nSe lo sfidante vincerà otterrà un indizio dallo shinigami sul proprio destino.\nSe perde invece, non potrà ricevere indizi sul proprio destino alla prossima sfida shinigami.',
    image: Shinigami
  }
];

export default Caselle;