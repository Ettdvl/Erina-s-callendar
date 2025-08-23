const calendarContainer = document.getElementById('calendarContainer');

// Objet pour tous les jours avec message ou image
// Format : "YYYY-MM-DD": { text: "Message", image: "url_ou_vide_si_pas_d'image" }
const dailyGifts = {
  "2025-01-01": { text: "🎉 Bonne année !", image: "" },
  "2025-01-02": { text: "💌 Petit mot doux", image: "" },
  "2025-01-03": { text: "🍫 Chocolat surprise !", image: "choco.png" },
  // Continue pour chaque jour...
  "2026-12-31": { text: "🎊 Dernier jour de 2026 !", image: "" },
  "2025-06-20": { text: "💖 Joyeux anniversaire Erina ! 💖", image: "photo1.jpg" },
  "2025-08-15": { text: "Tu me manques mon amour, on se voit bientôt ! Plein de gros bisous", image: "" },
  "2025-08-16": { text: "", image: "" },
  "2025-08-17": { text: "à modifier", image: "" },
  "2025-08-18": { text: "à modifier", image: "" },
  "2025-08-19": { text: "Je t'aime mon amour, je pense fort à toi. J'ai hâte que tu rentres de Mimizan, et qu'on soit tous les deux réunis. Tu me manques énormément mon ange ❤", image: "photo3.jpg" },
  "2025-08-20": { text: "je t'aime fort mon amour, j'ai écrit ce message hier mais sur mon téléphone, je ne sais pas ce que ça donnera. En tout cas je pense tout le temps à toi et j'espère que tu vas passer une excellente journée. C'est le début de ce projet, mais je vais essayer de m'y tenir et de m'améliorer quand j'aurai le temps, voire le rendre un peu interactif si possible. J'ai déjà pas mal d'idées, et j'ai hâte de te les faire découvrir. Je t'aime mon amour, passe une bonne journée ❤️", image: "" },
  "2025-08-21": { text: "Coucou mon amour, aujourd'hui je suis chez moi, et je vais essayer de beaucoup travailler. J'espère que tu as bien dormi cette nuit et que ton ventre ne te fais pas trop mal. Si on peut se voir le 28, on est au jour -7. Je t'aime mon amour, je suis impatient...", image: "" },
  "2025-08-22": { text: "Jour -6 ! Enfin, je l'espère... J'ai vraiment besoin de te revoir, surtout qu'on a besoin de se ressouder avant de reprendre les cours, pour se donner plein de forces et renforcer nos liens. Je t'aime Erina ❤️", image: "" },
  "2025-08-23": { text: "Jour -5.. ON Y EST BIENTÔT !! (Normalement 🙄). Bon, en tous les cas je te passerai au moins un appel, ça c'est clair ! Je t'aime mon ange ❤️", image: "" },
  "2025-08-24": { text: "Coucou mon amour,j'espère que tu as bien dormi. Je t'aime tellement mon amour, j'ai énormément hâte de te revoir, tu me manques beaucoup ❤️", image: "" },
  "2025-08-25": { text: "Mon amour je t'aimeeeeed. J'espère que tu vas bien et que tout se passe pour le mieux. Je voulais te dire à quel point je t'aime ❤️. j'espère qu'on se verra bientôt, parce que tu me manques terriblement ❤️", image: "" },
  "2025-08-26": { text: "à modifier", image: "" },
  "2025-08-27": { text: "à modifier", image: "" },
  "2025-08-28": { text: "à modifier", image: "" },
  "2025-08-29": { text: "à modifier", image: "" },
  "2025-08-30": { text: "à modifier", image: "" },
  "2025-08-31": { text: "à modifier", image: "" },
  "2025-09-01": { text: "à modifier", image: "" },
  "2025-09-02": { text: "à modifier", image: "" },
  "2025-09-03": { text: "à modifier", image: "" },
  "2025-09-04": { text: "à modifier", image: "" },
  "2025-09-05": { text: "à modifier", image: "" },
  "2025-09-06": { text: "à modifier", image: "" },
  "2025-09-07": { text: "à modifier", image: "" },
  "2025-09-08": { text: "à modifier", image: "" },
  "2025-09-09": { text: "à modifier", image: "" },
  "2025-09-10": { text: "à modifier", image: "" },
  "2025-09-11": { text: "à modifier", image: "" },
  "2025-09-12": { text: "à modifier", image: "" },
  "2025-09-13": { text: "à modifier", image: "" },
  "2025-09-14": { text: "à modifier", image: "" },
  "2025-09-15": { text: "à modifier", image: "" },
  "2025-09-16": { text: "à modifier", image: "" },
  "2025-09-17": { text: "à modifier", image: "" },
  "2025-09-18": { text: "à modifier", image: "" },
  "2025-09-19": { text: "à modifier", image: "" },
  "2025-09-20": { text: "à modifier", image: "" },
  "2025-09-21": { text: "à modifier", image: "" },
  "2025-09-22": { text: "à modifier", image: "" },
  "2025-09-23": { text: "à modifier", image: "" },
  "2025-09-24": { text: "à modifier", image: "" },
  "2025-09-25": { text: "à modifier", image: "" },
  "2025-09-26": { text: "à modifier", image: "" },
  "2025-09-27": { text: "à modifier", image: "" },
  "2025-09-28": { text: "à modifier", image: "" },
  "2025-09-29": { text: "à modifier", image: "" },
  "2025-09-30": { text: "à modifier", image: "" },
  // Octobre 2025
"2025-10-01": { text: "à modifier", image: "" },
"2025-10-02": { text: "à modifier", image: "" },
"2025-10-03": { text: "à modifier", image: "" },
"2025-10-04": { text: "à modifier", image: "" },
"2025-10-05": { text: "à modifier", image: "" },
"2025-10-06": { text: "à modifier", image: "" },
"2025-10-07": { text: "à modifier", image: "" },
"2025-10-08": { text: "à modifier", image: "" },
"2025-10-09": { text: "à modifier", image: "" },
"2025-10-10": { text: "à modifier", image: "" },
"2025-10-11": { text: "à modifier", image: "" },
"2025-10-12": { text: "à modifier", image: "" },
"2025-10-13": { text: "à modifier", image: "" },
"2025-10-14": { text: "à modifier", image: "" },
"2025-10-15": { text: "à modifier", image: "" },
"2025-10-16": { text: "à modifier", image: "" },
"2025-10-17": { text: "à modifier", image: "" },
"2025-10-18": { text: "à modifier", image: "" },
"2025-10-19": { text: "à modifier", image: "" },
"2025-10-20": { text: "à modifier", image: "" },
"2025-10-21": { text: "à modifier", image: "" },
"2025-10-22": { text: "à modifier", image: "" },
"2025-10-23": { text: "à modifier", image: "" },
"2025-10-24": { text: "à modifier", image: "" },
"2025-10-25": { text: "à modifier", image: "" },
"2025-10-26": { text: "à modifier", image: "" },
"2025-10-27": { text: "à modifier", image: "" },
"2025-10-28": { text: "à modifier", image: "" },
"2025-10-29": { text: "à modifier", image: "" },
"2025-10-30": { text: "à modifier", image: "" },
"2025-10-31": { text: "à modifier", image: "" },

// Novembre 2025
"2025-11-01": { text: "à modifier", image: "" },
"2025-11-02": { text: "à modifier", image: "" },
"2025-11-03": { text: "à modifier", image: "" },
"2025-11-04": { text: "à modifier", image: "" },
"2025-11-05": { text: "à modifier", image: "" },
"2025-11-06": { text: "à modifier", image: "" },
"2025-11-07": { text: "à modifier", image: "" },
"2025-11-08": { text: "à modifier", image: "" },
"2025-11-09": { text: "à modifier", image: "" },
"2025-11-10": { text: "à modifier", image: "" },
"2025-11-11": { text: "à modifier", image: "" },
"2025-11-12": { text: "à modifier", image: "" },
"2025-11-13": { text: "à modifier", image: "" },
"2025-11-14": { text: "à modifier", image: "" },
"2025-11-15": { text: "à modifier", image: "" },
"2025-11-16": { text: "à modifier", image: "" },
"2025-11-17": { text: "à modifier", image: "" },
"2025-11-18": { text: "à modifier", image: "" },
"2025-11-19": { text: "à modifier", image: "" },
"2025-11-20": { text: "à modifier", image: "" },
"2025-11-21": { text: "à modifier", image: "" },
"2025-11-22": { text: "à modifier", image: "" },
"2025-11-23": { text: "à modifier", image: "" },
"2025-11-24": { text: "à modifier", image: "" },
"2025-11-25": { text: "à modifier", image: "" },
"2025-11-26": { text: "à modifier", image: "" },
"2025-11-27": { text: "à modifier", image: "" },
"2025-11-28": { text: "à modifier", image: "" },
"2025-11-29": { text: "à modifier", image: "" },
"2025-11-30": { text: "à modifier", image: "" },

// Décembre 2025
"2025-12-01": { text: "à modifier", image: "" },
"2025-12-02": { text: "à modifier", image: "" },
"2025-12-03": { text: "à modifier", image: "" },
"2025-12-04": { text: "à modifier", image: "" },
"2025-12-05": { text: "à modifier", image: "" },
"2025-12-06": { text: "à modifier", image: "" },
"2025-12-07": { text: "à modifier", image: "" },
"2025-12-08": { text: "à modifier", image: "" },
"2025-12-09": { text: "à modifier", image: "" },
"2025-12-10": { text: "à modifier", image: "" },
"2025-12-11": { text: "à modifier", image: "" },
"2025-12-12": { text: "à modifier", image: "" },
"2025-12-13": { text: "à modifier", image: "" },
"2025-12-14": { text: "à modifier", image: "" },
"2025-12-15": { text: "à modifier", image: "" },
"2025-12-16": { text: "à modifier", image: "" },
"2025-12-17": { text: "à modifier", image: "" },
"2025-12-18": { text: "à modifier", image: "" },
"2025-12-19": { text: "à modifier", image: "" },
"2025-12-20": { text: "à modifier", image: "" },
"2025-12-21": { text: "à modifier", image: "" },
"2025-12-22": { text: "à modifier", image: "" },
"2025-12-23": { text: "à modifier", image: "" },
"2025-12-24": { text: "à modifier", image: "" },
"2025-12-25": { text: "à modifier", image: "" },
"2025-12-26": { text: "à modifier", image: "" },
"2025-12-27": { text: "à modifier", image: "" },
"2025-12-28": { text: "à modifier", image: "" },
"2025-12-29": { text: "à modifier", image: "" },
"2025-12-30": { text: "à modifier", image: "" },
"2025-12-31": { text: "à modifier", image: "" },
// Janvier 2026
"2026-01-01": { text: "à modifier", image: "" },
"2026-01-02": { text: "à modifier", image: "" },
"2026-01-03": { text: "à modifier", image: "" },
"2026-01-04": { text: "à modifier", image: "" },
"2026-01-05": { text: "à modifier", image: "" },
"2026-01-06": { text: "à modifier", image: "" },
"2026-01-07": { text: "à modifier", image: "" },
"2026-01-08": { text: "à modifier", image: "" },
"2026-01-09": { text: "à modifier", image: "" },
"2026-01-10": { text: "à modifier", image: "" },
"2026-01-11": { text: "à modifier", image: "" },
"2026-01-12": { text: "à modifier", image: "" },
"2026-01-13": { text: "à modifier", image: "" },
"2026-01-14": { text: "à modifier", image: "" },
"2026-01-15": { text: "à modifier", image: "" },
"2026-01-16": { text: "à modifier", image: "" },
"2026-01-17": { text: "à modifier", image: "" },
"2026-01-18": { text: "à modifier", image: "" },
"2026-01-19": { text: "à modifier", image: "" },
"2026-01-20": { text: "à modifier", image: "" },
"2026-01-21": { text: "à modifier", image: "" },
"2026-01-22": { text: "à modifier", image: "" },
"2026-01-23": { text: "à modifier", image: "" },
"2026-01-24": { text: "à modifier", image: "" },
"2026-01-25": { text: "à modifier", image: "" },
"2026-01-26": { text: "à modifier", image: "" },
"2026-01-27": { text: "à modifier", image: "" },
"2026-01-28": { text: "à modifier", image: "" },
"2026-01-29": { text: "à modifier", image: "" },
"2026-01-30": { text: "à modifier", image: "" },
"2026-01-31": { text: "à modifier", image: "" },

// Février 2026
"2026-02-01": { text: "à modifier", image: "" },
"2026-02-02": { text: "à modifier", image: "" },
"2026-02-03": { text: "à modifier", image: "" },
"2026-02-04": { text: "à modifier", image: "" },
"2026-02-05": { text: "à modifier", image: "" },
"2026-02-06": { text: "à modifier", image: "" },
"2026-02-07": { text: "à modifier", image: "" },
"2026-02-08": { text: "à modifier", image: "" },
"2026-02-09": { text: "à modifier", image: "" },
"2026-02-10": { text: "à modifier", image: "" },
"2026-02-11": { text: "à modifier", image: "" },
"2026-02-12": { text: "à modifier", image: "" },
"2026-02-13": { text: "à modifier", image: "" },
"2026-02-14": { text: "à modifier", image: "" },
"2026-02-15": { text: "à modifier", image: "" },
"2026-02-16": { text: "à modifier", image: "" },
"2026-02-17": { text: "à modifier", image: "" },
"2026-02-18": { text: "à modifier", image: "" },
"2026-02-19": { text: "à modifier", image: "" },
"2026-02-20": { text: "à modifier", image: "" },
"2026-02-21": { text: "à modifier", image: "" },
"2026-02-22": { text: "à modifier", image: "" },
"2026-02-23": { text: "à modifier", image: "" },
"2026-02-24": { text: "à modifier", image: "" },
"2026-02-25": { text: "à modifier", image: "" },
"2026-02-26": { text: "à modifier", image: "" },
"2026-02-27": { text: "à modifier", image: "" },
"2026-02-28": { text: "à modifier", image: "" },

// Mars 2026
"2026-03-01": { text: "à modifier", image: "" },
"2026-03-02": { text: "à modifier", image: "" },
"2026-03-03": { text: "à modifier", image: "" },
"2026-03-04": { text: "à modifier", image: "" },
"2026-03-05": { text: "à modifier", image: "" },
"2026-03-06": { text: "à modifier", image: "" },
"2026-03-07": { text: "à modifier", image: "" },
"2026-03-08": { text: "à modifier", image: "" },
"2026-03-09": { text: "à modifier", image: "" },
"2026-03-10": { text: "à modifier", image: "" },
"2026-03-11": { text: "à modifier", image: "" },
"2026-03-12": { text: "à modifier", image: "" },
"2026-03-13": { text: "à modifier", image: "" },
"2026-03-14": { text: "à modifier", image: "" },
"2026-03-15": { text: "à modifier", image: "" },
"2026-03-16": { text: "à modifier", image: "" },
"2026-03-17": { text: "à modifier", image: "" },
"2026-03-18": { text: "à modifier", image: "" },
"2026-03-19": { text: "à modifier", image: "" },
"2026-03-20": { text: "à modifier", image: "" },
"2026-03-21": { text: "à modifier", image: "" },
"2026-03-22": { text: "à modifier", image: "" },
"2026-03-23": { text: "à modifier", image: "" },
"2026-03-24": { text: "à modifier", image: "" },
"2026-03-25": { text: "à modifier", image: "" },
"2026-03-26": { text: "à modifier", image: "" },
"2026-03-27": { text: "à modifier", image: "" },
"2026-03-28": { text: "à modifier", image: "" },
"2026-03-29": { text: "à modifier", image: "" },
"2026-03-30": { text: "à modifier", image: "" },
"2026-03-31": { text: "à modifier", image: "" },

// Avril 2026
"2026-04-01": { text: "à modifier", image: "" },
"2026-04-02": { text: "à modifier", image: "" },
"2026-04-03": { text: "à modifier", image: "" },
"2026-04-04": { text: "à modifier", image: "" },
"2026-04-05": { text: "à modifier", image: "" },
"2026-04-06": { text: "à modifier", image: "" },
"2026-04-07": { text: "à modifier", image: "" },
"2026-04-08": { text: "à modifier", image: "" },
"2026-04-09": { text: "à modifier", image: "" },
"2026-04-10": { text: "à modifier", image: "" },
"2026-04-11": { text: "à modifier", image: "" },
"2026-04-12": { text: "à modifier", image: "" },
"2026-04-13": { text: "à modifier", image: "" },
"2026-04-14": { text: "à modifier", image: "" },
"2026-04-15": { text: "à modifier", image: "" },
"2026-04-16": { text: "à modifier", image: "" },
"2026-04-17": { text: "à modifier", image: "" },
"2026-04-18": { text: "à modifier", image: "" },
"2026-04-19": { text: "à modifier", image: "" },
"2026-04-20": { text: "à modifier", image: "" },
"2026-04-21": { text: "à modifier", image: "" },
"2026-04-22": { text: "à modifier", image: "" },
"2026-04-23": { text: "à modifier", image: "" },
"2026-04-24": { text: "à modifier", image: "" },
"2026-04-25": { text: "à modifier", image: "" },
"2026-04-26": { text: "à modifier", image: "" },
"2026-04-27": { text: "à modifier", image: "" },
"2026-04-28": { text: "à modifier", image: "" },
"2026-04-29": { text: "à modifier", image: "" },
"2026-04-30": { text: "à modifier", image: "" },
// Mai 2026
"2026-05-01": { text: "à modifier", image: "" },
"2026-05-02": { text: "à modifier", image: "" },
"2026-05-03": { text: "à modifier", image: "" },
"2026-05-04": { text: "à modifier", image: "" },
"2026-05-05": { text: "à modifier", image: "" },
"2026-05-06": { text: "à modifier", image: "" },
"2026-05-07": { text: "à modifier", image: "" },
"2026-05-08": { text: "à modifier", image: "" },
"2026-05-09": { text: "à modifier", image: "" },
"2026-05-10": { text: "à modifier", image: "" },
"2026-05-11": { text: "à modifier", image: "" },
"2026-05-12": { text: "à modifier", image: "" },
"2026-05-13": { text: "à modifier", image: "" },
"2026-05-14": { text: "à modifier", image: "" },
"2026-05-15": { text: "à modifier", image: "" },
"2026-05-16": { text: "à modifier", image: "" },
"2026-05-17": { text: "à modifier", image: "" },
"2026-05-18": { text: "à modifier", image: "" },
"2026-05-19": { text: "à modifier", image: "" },
"2026-05-20": { text: "à modifier", image: "" },
"2026-05-21": { text: "à modifier", image: "" },
"2026-05-22": { text: "à modifier", image: "" },
"2026-05-23": { text: "à modifier", image: "" },
"2026-05-24": { text: "à modifier", image: "" },
"2026-05-25": { text: "à modifier", image: "" },
"2026-05-26": { text: "à modifier", image: "" },
"2026-05-27": { text: "à modifier", image: "" },
"2026-05-28": { text: "à modifier", image: "" },
"2026-05-29": { text: "à modifier", image: "" },
"2026-05-30": { text: "à modifier", image: "" },
"2026-05-31": { text: "à modifier", image: "" },

// Juin 2026
"2026-06-01": { text: "à modifier", image: "" },
"2026-06-02": { text: "à modifier", image: "" },
"2026-06-03": { text: "à modifier", image: "" },
"2026-06-04": { text: "à modifier", image: "" },
"2026-06-05": { text: "à modifier", image: "" },
"2026-06-06": { text: "à modifier", image: "" },
"2026-06-07": { text: "à modifier", image: "" },
"2026-06-08": { text: "à modifier", image: "" },
"2026-06-09": { text: "à modifier", image: "" },
"2026-06-10": { text: "à modifier", image: "" },
"2026-06-11": { text: "à modifier", image: "" },
"2026-06-12": { text: "à modifier", image: "" },
"2026-06-13": { text: "à modifier", image: "" },
"2026-06-14": { text: "à modifier", image: "" },
"2026-06-15": { text: "à modifier", image: "" },
"2026-06-16": { text: "à modifier", image: "" },
"2026-06-17": { text: "à modifier", image: "" },
"2026-06-18": { text: "à modifier", image: "" },
"2026-06-19": { text: "à modifier", image: "" },
"2026-06-20": { text: "❤Joyeux anniversaire ma princesse d'amour, je pense fort à toi depuis là où je suis ! ❤", image: "GIF1.gif" },
"2026-06-21": { text: "à modifier", image: "" },
"2026-06-22": { text: "à modifier", image: "" },
"2026-06-23": { text: "à modifier", image: "" },
"2026-06-24": { text: "à modifier", image: "" },
"2026-06-25": { text: "à modifier", image: "" },
"2026-06-26": { text: "à modifier", image: "" },
"2026-06-27": { text: "à modifier", image: "" },
"2026-06-28": { text: "à modifier", image: "" },
"2026-06-29": { text: "à modifier", image: "" },
"2026-06-30": { text: "à modifier", image: "" },

// Juillet 2026
"2026-07-01": { text: "à modifier", image: "" },
"2026-07-02": { text: "à modifier", image: "" },
"2026-07-03": { text: "à modifier", image: "" },
"2026-07-04": { text: "à modifier", image: "" },
"2026-07-05": { text: "à modifier", image: "" },
"2026-07-06": { text: "à modifier", image: "" },
"2026-07-07": { text: "à modifier", image: "" },
"2026-07-08": { text: "à modifier", image: "" },
"2026-07-09": { text: "à modifier", image: "" },
"2026-07-10": { text: "à modifier", image: "" },
"2026-07-11": { text: "à modifier", image: "" },
"2026-07-12": { text: "à modifier", image: "" },
"2026-07-13": { text: "à modifier", image: "" },
"2026-07-14": { text: "à modifier", image: "" },
"2026-07-15": { text: "à modifier", image: "" },
"2026-07-16": { text: "à modifier", image: "" },
"2026-07-17": { text: "à modifier", image: "" },
"2026-07-18": { text: "à modifier", image: "" },
"2026-07-19": { text: "à modifier", image: "" },
"2026-07-20": { text: "à modifier", image: "" },
"2026-07-21": { text: "à modifier", image: "" },
"2026-07-22": { text: "à modifier", image: "" },
"2026-07-23": { text: "à modifier", image: "" },
"2026-07-24": { text: "à modifier", image: "" },
"2026-07-25": { text: "à modifier", image: "" },
"2026-07-26": { text: "à modifier", image: "" },
"2026-07-27": { text: "à modifier", image: "" },
"2026-07-28": { text: "à modifier", image: "" },
"2026-07-29": { text: "à modifier", image: "" },
"2026-07-30": { text: "à modifier", image: "" },
"2026-07-31": { text: "à modifier", image: "" },

// Août 2026 (jusqu'au 15)
"2026-08-01": { text: "à modifier", image: "" },
"2026-08-02": { text: "à modifier", image: "" },
"2026-08-03": { text: "à modifier", image: "" },
"2026-08-04": { text: "à modifier", image: "" },
"2026-08-05": { text: "à modifier", image: "" },
"2026-08-06": { text: "à modifier", image: "" },
"2026-08-07": { text: "à modifier", image: "" },
"2026-08-08": { text: "à modifier", image: "" },
"2026-08-09": { text: "à modifier", image: "" },
"2026-08-10": { text: "à modifier", image: "" },
"2026-08-11": { text: "à modifier", image: "" },
"2026-08-12": { text: "à modifier", image: "" },
"2026-08-13": { text: "à modifier", image: "" },
"2026-08-14": { text: "à modifier", image: "" },
"2026-08-15": { text: "à modifier", image: "" },

};

// Créer le conteneur overlay pour afficher la carte en grand

const overlay = document.createElement('div');
overlay.id = 'overlay';
overlay.style.position = 'fixed';
overlay.style.top = 0;
overlay.style.left = 0;
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.background = 'rgba(0,0,0,0.6)';
overlay.style.display = 'none';
overlay.style.alignItems = 'center';
overlay.style.justifyContent = 'center';
overlay.style.zIndex = 1000;

const messageBox = document.createElement('div');
messageBox.style.background = 'white';
messageBox.style.padding = '30px';
messageBox.style.borderRadius = '20px';
messageBox.style.textAlign = 'center';
messageBox.style.maxWidth = '80%';
messageBox.style.fontSize = '1.5em';
messageBox.style.color = '#ff7096';
overlay.appendChild(messageBox);

overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
});

document.body.appendChild(overlay);

// Fonction pour générer un mois
function generateMonth(year, month) {
  const monthDiv = document.createElement('div');
  monthDiv.className = 'month';
  
  const monthName = new Date(year, month).toLocaleString('fr-FR', { month: 'long', year: 'numeric' });
  const title = document.createElement('h2');
  title.textContent = monthName.charAt(0).toUpperCase() + monthName.slice(1);
  monthDiv.appendChild(title);
  
  const grid = document.createElement('div');
  grid.className = 'calendar-grid';

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for(let i=0; i<(firstDay === 0 ? 6 : firstDay-1); i++){
    const empty = document.createElement('div');
    empty.className = 'day';
    grid.appendChild(empty);
  }

  for(let d=1; d<=daysInMonth; d++){
    const day = document.createElement('div');
    day.className = 'day';
    day.textContent = d;

    const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const gift = dailyGifts[dateStr] || { text: "🎁 Petit cadeau !", image: "" };

    day.addEventListener('click', (e) => {
      e.stopPropagation();
      if(gift.image) {
        messageBox.innerHTML = `<img src="${gift.image}" style="max-width:200px; display:block; margin:auto;"> <p>${gift.text}</p>`;
      } else {
        messageBox.textContent = gift.text;
      }
      overlay.style.display = 'flex';
    });

    grid.appendChild(day);
  }

  monthDiv.appendChild(grid);
  calendarContainer.appendChild(monthDiv);
}

// Générer tous les mois 2025-2026
for(let year=2025; year<=2026; year++){
  for(let month=0; month<12; month++){
    generateMonth(year, month);
  }
}

// Onglets
const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.style.display = 'none');
    tab.classList.add('active');
    document.getElementById(tab.dataset.target).style.display = 'block';
  });
});


