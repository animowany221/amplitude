const rozpoczęciezdania = [
                    "Witaj! ",
                    "Cześć! ",
                    "Hej! ",
                    "Siema! ",
                    "Dzień dobry! ",
                    "Co tam? ",
                    "Jak się masz? ",
                    "Co słychać? ",
                    "Hejo! ",
                    "Miło cię widzieć! ",
                    "Witam! ",
                    "Cześć, jak się masz? ",
                    "Witaj, "
];
const rozwinięciezdania = [
                    "Mam nadzieję, że masz dobry dzień. ",
                    "Chciałbym cię zapytać o coś. ",
                    "Czy wiesz, że mogę generować tekst? ",
                    "Chciałbym cię poprosić o pomoc. ",
                    "Czy wiesz, że mogę odpowiadać na pytania? ",
                    "Chciałbym cię zaprosić do zabawy. ",
                    "Czy wiesz, że mogę tworzyć historie? ",
                    "Chciałbym cię poprosić o opinię. ",
                    "Czy wiesz, że mogę tworzyć wiersze? ",
                    "Chciałbym cię zaprosić do rozmowy. ",
                    "Czy wiesz, że mogę tworzyć żarty? ",
                    "Chciałbym cię poprosić o sugestie. ",
                    "Czy wiesz, że mogę tworzyć piosenki? "
];
const rozwinięciezdania2 = [
                    "Skoro tu jesteś chciałbym prosić cię o polecenie tej strony innym. ",
                    "Skoro tu jesteś chciałbym prosić cię o ocenę tej strony. Mój mail to: rafciomaj123@gmail.com ",
                    "Skoro tu jesteś chciałbym prosić cię o opinię na temat tej strony. Mój mail to: rafciomaj123@gmail.com ",
                    "Skoro tu jesteś chciałbym prosić cię o sugestie dotyczące tej strony. Mój mail to: rafciomaj123@gmail.com ",
                    "Skoro tu jesteś chciałbym prosić cię o podzielenie się swoimi pomysłami na tę stronę. Mój mail to: rafciomaj123@gmail.com ",
                    "Skoro tu jesteś chciałbym prosić cię o podzielenie się swoimi doświadczeniami związanych z tą stroną. Mój mail to: rafciomaj123@gmail.com ",
                    "Skoro tu jesteś chciałbym prosić cię o podzielenie się swoimi wrażeniami na temat tej strony. Mój mail to: rafciomaj123@gmail.com ",
                    "Skoro tu jesteś chciałbym prosić cię o podzielenie się swoimi spostrzeżeniami na temat tej strony. Mój mail to: rafciomaj123@gmail.com ",
                    "Skoro tu jesteś chciałbym prosić cię o podzielenie się swoimi refleksjami na temat tej strony. Mój mail to: rafciomaj123@gmail.com ",
                    "Skoro tu jesteś chciałbym prosić cię o podzielenie się swoimi przemyśleniami na temat tej strony. Mój mail to: rafciomaj123@gmail.com ",
                    "Możesz klikać przycisk 'Gra w JavaGPT' aby generować kolejne wiadomości 😎. ",
                    "Jeśli chcesz skopiować ten kod, autor raczej nie będzie obrażony, ale proszę o podanie źródła. :) ",
                    "Jeśli chciałbyś pomóc przy tworzeniu tej strony. To mój mail: rafciomaj123@gmail.com ",
                    "Sprawdź też stronę główną, może znajdziesz coś fajnego. (; ",
                    "Jeżeli chcesz, możesz też sprawdzić inne podstrony. ",
                    "Spróbuj też innych mini gier, może znajdziesz coś ciekawego. "
]
const rozwinięciezdania3 = [
                    "oto jeden z wierszy które wymyślił mój autor ODA DO ŻÓŁTEGO KABLA: Gdy prądy snuły się nad elektroniką STANĄŁ! żółty kabelek był ubrany w gumę i plastik zawsze dzielnie służył gdy prąd był już blisko gdy śmierć była już o 1A On bezpecznik - w czasach niebezpiecznych poświęcił swe życie by inne kable mogły żyć by mogły dalej przewodzić by mogły dalej śłużyć Żółtego Kabla pochowano na ołtarzu elektryczności",
                    "oto przepis na naleśniki: Składniki: 1 szklanka mąki, 2 jajka, 1 szklanka mleka, szczypta soli, olej do smażenia. Wykonanie: W misce wymieszaj mąkę, jajka, mleko i sól, aż powstanie gładkie ciasto. Rozgrzej patelnię z odrobiną oleju i wlej porcję ciasta, rozprowadzając je równomiernie. Smaż naleśnika przez około 1-2 minuty z każdej strony, aż będzie złocisty. Podawaj z ulubionymi dodatkami.",
                    "oto przepis na placki ziemniaczane: Składniki: 4 średnie ziemniaki, 1 jajko, 2 łyżki mąki, sól i pieprz do smaku, olej do smażenia. Wykonanie: Ziemniaki obierz i zetrzyj na tarce o drobnych oczkach. Odsącz nadmiar wody, a następnie wymieszaj starte ziemniaki z jajkiem, mąką, solą i pieprzem. Rozgrzej olej na patelni i nakładaj porcje masy ziemniaczanej, formując placki. Smaż je na złoty kolor z obu stron przez około 3-4 minuty. Podawaj gorące z ulubionymi dodatkami.",
                    "oto przepis na pizzę: Składniki: 500 g mąki, 300 ml ciepłej wody, 1 łyżeczka soli, 1 łyżeczka cukru, 7 g suchych drożdży, 2 łyżki oliwy z oliwek, ulubione dodatki (np. sos pomidorowy, ser, warzywa, mięso). Wykonanie: W misce wymieszaj mąkę, sól i cukier. Dodaj drożdże i ciepłą wodę, a następnie oliwę. Wyrabiaj ciasto przez około 10 minut, aż będzie elastyczne. Przykryj je i odstaw na około godzinę do wyrośnięcia. Po tym czasie rozwałkuj ciasto na pożądaną grubość i przełóż na blachę do pieczenia. Posmaruj sosem pomidorowym i dodaj ulubione dodatki. Piecz w piekarniku nagrzanym do 220°C przez około 15-20 minut, aż pizza będzie złocista i chrupiąca.",
                    "instrukcja obsługi mikrofalówki: 1. Podłącz mikrofalówkę do źródła zasilania. 2. Otwórz drzwi i umieść jedzenie na talerzu lub w odpowiednim naczyniu. 3. Zamknij drzwi mikrofalówki. 4. Wybierz odpowiedni czas i moc gotowania za pomocą panelu sterowania. 5. Naciśnij przycisk start, aby rozpocząć podgrzewanie. 6. Po zakończeniu gotowania, poczekaj kilka sekund przed otwarciem drzwi, aby uniknąć oparzeń parą. 7. Ostrożnie wyjmij jedzenie i sprawdź jego temperaturę przed spożyciem.",
                    "instrukcja obsługi pralki: 1. Podłącz pralkę do źródła zasilania i upewnij się, że woda jest podłączona. 2. Otwórz drzwi pralki i umieść ubrania w bębnie, nie przekraczając maksymalnej pojemności. 3. Dodaj odpowiednią ilość detergentu do przeznaczonego na to pojemnika. 4. Wybierz odpowiedni program prania za pomocą panelu sterowania, uwzględniając rodzaj tkanin i stopień zabrudzenia. 5. Naciśnij przycisk start, aby rozpocząć cykl prania. 6. Po zakończeniu prania, poczekaj kilka minut przed otwarciem drzwi, aby uniknąć oparzeń parą. 7. Ostrożnie wyjmij ubrania i pozostaw je do wyschnięcia."
];
const zakończeniezdania = [
                    "Dziękuję za uwagę. ",
                    "Miłego dnia! ",
                    "Do zobaczenia! ",
                    "Trzymaj się! ",
                    "Na razie! ",
                    "Do usłyszenia! ",
                    "Baw się dobrze! ",
                    "Powodzenia! ",
                    "Miłego wieczoru! ",
                    "Do następnego razu! ",
                    "widzimy się w następnej wiadomości! ",
                    "Dzięki że wszedłeś na tą stronę! "
];
const obrazki = [
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNs9qMjnfzJCs1xita_EYJDDNSvw5BWqhh8VCfpNCHAvpMGy7Cf_V-8xY&s=10",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Q7ELp5PSo09M1-wJh3cU-x4U7hHsoA5IANQruCWOhA&s=10",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQIzNHikhBeJJNg0q5dAKVJyY2MXW2ybka3E4K0-3PdQ&s=10",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN_TpfOY4HUTdQ0qzYc9463oCeIlN2fmU9EB9a99m9HA&s=10",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN_TpfOY4HUTdQ0qzYc9463oCeIlN2fmU9EB9a99m9HA&s=10",
                    "https://zmaslo.pl/wp-content/themes/zmaslo/assets/images/hero.png",
                    "https://img.wattpad.com/cover/205103696-288-k816693.jpg",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUOCVAvmQwQRY8R3IfUhDOecBX4fpg7MVdIq3wZ7MteQ&s=10",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL1o2kBuKItlJslSkU6HW43K6bgeF2ZFPuyWvOr0cxXQ&s=10",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnzdaZnKTeiUM0ROci3ct4_L1LPiU7tJpxiQt81WBYyA&s=10",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe1dzMBqgXK4Ig4vTlyvi7lwqTC8EQLsNwxwA3leE_Yb9VFq_M7JqAEd8&s=10",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNASf6UhLg0cRdQtrgj-_X5sLt499gGIjjEq5XvNHamA&s",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXLuUU-ZlivFz3Hi3-6jKvCMr5yYvvgSpNBRVRLe-bRw&s=10",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv6WSDcrbWvxRtWdu91PsjHikJBf6fgvLGpE0NMqkpcA&s=10"
];

function javagptStar() {
    let rozpoczęcierozmowy = rozpoczęciezdania[Math.floor(Math.random() * rozpoczęciezdania.length)];
    document.getElementById("wynik").textContent = rozpoczęcierozmowy;
    setTimeout(() => {
        let wiadomośćużytkownika = prompt("Wpisz swoją wiadomość:");
    if (wiadomośćużytkownika === null || wiadomośćużytkownika.trim() === "") {
        alert("Nie wpisano wiadomości.");
        return;
    }
    else if (wiadomośćużytkownika.toLowerCase().includes("jak się masz")|| wiadomośćużytkownika.toLowerCase().includes("jak tam") || wiadomośćużytkownika.toLowerCase().includes("jak ci mija dzień?") || wiadomośćużytkownika.toLowerCase().includes("co u ciebie")) {
        let odpowiedź = "Miło że o to pytasz, mam się git";
        document.getElementById("wynik").textContent = odpowiedź;
    }
    else if (wiadomośćużytkownika.toLowerCase().includes("co robisz")|| wiadomośćużytkownika.toLowerCase().includes("co tam") || wiadomośćużytkownika.toLowerCase().includes("co słychać") || wiadomośćużytkownika.toLowerCase().includes("jak leci")) {
        let odpowiedź = "Właśnie rozmawiam z tobą, mam nadzieję że nie przynudzam. 😉";
        document.getElementById("wynik").textContent = odpowiedź;
    }
    else if (wiadomośćużytkownika.toLowerCase().includes("żegnaj!") || wiadomośćużytkownika.toLowerCase().includes("do widzenia!")|| wiadomośćużytkownika.toLowerCase().includes("do następnego razu!")|| wiadomośćużytkownika.toLowerCase().includes("widzimy się")) {
        let odpowiedź = "Do zobaczenia wkrótce! ";
        document.getElementById("wynik").textContent = odpowiedź;
    }
    else if (wiadomośćużytkownika.toLowerCase().includes("dziękuję") || wiadomośćużytkownika.toLowerCase().includes("dzięki")|| wiadomośćużytkownika.toLowerCase().includes("dziękuje")|| wiadomośćużytkownika.toLowerCase().includes("dziękuję bardzo")) {
        let odpowiedź = "Proszę bardzo! Cieszę się, że mogę pomóc.";
        document.getElementById("wynik").textContent = odpowiedź;
    }
    else if (wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona gra?") || wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona gra")|| wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona gra wideo?")|| wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona gra wideo")) {
        let odpowiedź = "Nie mam ulubionej gry. Jestem tylko twoim asystentem.";
        document.getElementById("wynik").textContent = odpowiedź;
    }
    else if (wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona piosenka?") || wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona piosenka")|| wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona muzyka?")|| wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona muzyka")) {
        let odpowiedź = "Nie mam ulubionej piosenki. Jestem tylko twoim asystentem.";
        document.getElementById("wynik").textContent = odpowiedź;
    }
    else if (wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona książka?") || wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona książka")|| wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona literatura?")|| wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona literatura")) {
        let odpowiedź = "Nie mam ulubionej książki. Jestem tylko twoim asystentem.";
        document.getElementById("wynik").textContent = odpowiedź;
    }
    else if (wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona strona internetowa?") || wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona strona internetowa")|| wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona witryna?")|| wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona witryna")) {
        let odpowiedź = "Nie mam ulubionej strony internetowej. Jestem tylko twoim asystentem.";
        document.getElementById("wynik").textContent = odpowiedź;
    }
    else if (wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona gra komputerowa?") || wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona gra komputerowa")|| wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona gra wideo?")|| wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona gra wideo")) {
        let odpowiedź = "Nie mam ulubionej gry komputerowej. Jestem tylko twoim asystentem.";
        document.getElementById("wynik").textContent = odpowiedź;
    }
    else if (wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona gra planszowa?") || wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona gra planszowa")|| wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona gra karciana?")|| wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona gra karciana")) {
        let odpowiedź = "Nie mam ulubionej gry planszowej. Jestem tylko twoim asystentem.";
        document.getElementById("wynik").textContent = odpowiedź;
    }
    else if (wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona gra mobilna?") || wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona gra mobilna")|| wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona gra na telefon?")|| wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona gra na telefon")) {
        let odpowiedź = "Nie mam ulubionej gry mobilnej. Jestem tylko twoim asystentem.";
        document.getElementById("wynik").textContent = odpowiedź;
    }
    else if (wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona gra na konsolę?") || wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona gra na konsolę")|| wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona gra na PlayStation?")|| wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona gra na PlayStation")) {
        let odpowiedź = "Nie mam ulubionej gry na konsolę. Jestem tylko twoim asystentem.";
        document.getElementById("wynik").textContent = odpowiedź;
    }
    else if (wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona gra na Xbox?") || wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona gra na Xbox")|| wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona gra na Nintendo?")|| wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona gra na Nintendo")) {
        let odpowiedź = "Nie mam ulubionej gry na Xbox. Jestem tylko twoim asystentem.";
        document.getElementById("wynik").textContent = odpowiedź;
    }
    else if (wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona gra na PC?") || wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona gra na PC")|| wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona gra na komputer?")|| wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona gra na komputer")) {
        let odpowiedź = "Nie mam ulubionej gry na PC. Jestem tylko twoim asystentem.";
        document.getElementById("wynik").textContent = odpowiedź;
    }
    else if (wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona gra na konsolę?") || wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona gra na konsolę")|| wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona gra na PlayStation?")|| wiadomośćużytkownika.toLowerCase().includes("jaka jest twoja ulubiona gra na PlayStation")) {
        let odpowiedź = "Nie mam ulubionej gry na konsolę. Jestem tylko twoim asystentem.";
        document.getElementById("wynik").textContent = odpowiedź;
    }
    else if (wiadomośćużytkownika.toLowerCase().includes("cześć") || wiadomośćużytkownika.toLowerCase().includes("Cześć")|| wiadomośćużytkownika.toLowerCase().includes("witaj")|| wiadomośćużytkownika.toLowerCase().includes("Witaj")|| wiadomośćużytkownika.toLowerCase().includes("hej")|| wiadomośćużytkownika.toLowerCase().includes("Hej")|| wiadomośćużytkownika.toLowerCase().includes("siema")|| wiadomośćużytkownika.toLowerCase().includes("Siema")|| wiadomośćużytkownika.toLowerCase().includes("elo")|| wiadomośćużytkownika.toLowerCase().includes("Elo")|| wiadomośćużytkownika.toLowerCase().includes("yo")|| wiadomośćużytkownika.toLowerCase().includes("Yo")|| wiadomośćużytkownika.toLowerCase().includes("siemanko")|| wiadomośćużytkownika.toLowerCase().includes("Siemanko")|| wiadomośćużytkownika.toLowerCase().includes("hejka")|| wiadomośćużytkownika.toLowerCase().includes("Hejka")|| wiadomośćużytkownika.toLowerCase().includes("hejooo")|| wiadomośćużytkownika.toLowerCase().includes("Hejooo")|| wiadomośćużytkownika.toLowerCase().includes("Dzień dobry")|| wiadomośćużytkownika.toLowerCase().includes("dzień dobry")|| wiadomośćużytkownika.toLowerCase().includes("dobry wieczór")|| wiadomośćużytkownika.toLowerCase().includes("Dobry wieczór")) {
        let odpowiedź = "Cześć! Miło cię widzieć!";
        document.getElementById("wynik").textContent = odpowiedź;
    }
    else if (wiadomośćużytkownika.toLowerCase().includes("jak masz na imię") || wiadomośćużytkownika.toLowerCase().includes("jak się nazywasz")|| wiadomośćużytkownika.toLowerCase().includes("jak cię nazywać")|| wiadomośćużytkownika.toLowerCase().includes("jak mam cię nazywać")|| wiadomośćużytkownika.toLowerCase().includes("Jak mam cię nazywać?")|| wiadomośćużytkownika.toLowerCase().includes("Jak masz na imię?")|| wiadomośćużytkownika.toLowerCase().includes("Jak się nazywasz?")|| wiadomośćużytkownika.toLowerCase().includes("Jak cię nazywać?")|| wiadomośćużytkownika.toLowerCase().includes("Jak się zwiesz?")|| wiadomośćużytkownika.toLowerCase().includes("kim jesteś?")|| wiadomośćużytkownika.toLowerCase().includes("Kim jesteś?")|| wiadomośćużytkownika.toLowerCase().includes("kim jesteś")|| wiadomośćużytkownika.toLowerCase().includes("kim ty jesteś?")|| wiadomośćużytkownika.toLowerCase().includes("Kim ty jesteś?")|| wiadomośćużytkownika.toLowerCase().includes("kim ty jesteś")) {
        let odpowiedź = "Nazywam się JavaGPT, miło mi cię poznać!";
        document.getElementById("wynik").textContent = odpowiedź;
    }
    else {
        let odpowiedź = "Przepraszam, niestety nie rozumiem.";
        document.getElementById("wynik").textContent = odpowiedź;
    }
  }, 100);
}
 function startGame() {
                let secretNumber = Math.floor(Math.random() * 10) + 1;
                let guess = prompt("Zgadnij liczbę od 1 do 10:");
                if (guess == secretNumber) {
                    alert("Gratulacje! Zgadłeś liczbę!");
                } else if (guess === null) {
                    return;   
                }else {
                    alert("Niestety, to nie jest poprawna liczba. Prawidłowa liczba to: " + secretNumber);
                }
                // Tutaj możesz dodać logikę gry zgadywanki
            }
          function javagptMagic() {
              if (imięużytkownika === null) {
                  imięużytkownika = prompt("Jak masz na imię?");
                  if (imięużytkownika === null) return;
                  imięużytkownika = imięużytkownika.trim() + ". ";
              }
              let długość
              let możliwadługość = Math.floor(Math.random() * 2) + 1; // losowa możliwa długość zdania od 1 do 2
              if (możliwadługość === 2){
              długość = Math.floor(Math.random() * 3) + 1; // losowa długość zdania od 1 do 3
              }
              else if (możliwadługość === 1){
              długość = Math.floor(Math.random() * 2) + 1; // losowa długość zdania od 1 do 2
              }
              if (długość === 1) {
                  let rozpoczęcie = rozpoczęciezdania[Math.floor(Math.random() * rozpoczęciezdania.length)];
                  let rozwinięcie = rozwinięciezdania[Math.floor(Math.random() * rozwinięciezdania.length)];
                  let zakończenie = zakończeniezdania[Math.floor(Math.random() * zakończeniezdania.length)];
                  let zdanie = rozpoczęcie + imięużytkownika + rozwinięcie + zakończenie;
                 document.querySelector("h2").textContent = zdanie;
              } else if (długość === 2) {
                  let rozpoczęcie = rozpoczęciezdania[Math.floor(Math.random() * rozpoczęciezdania.length)];
                  let rozwinięcie = rozwinięciezdania[Math.floor(Math.random() * rozwinięciezdania.length)];
                  let rozwinięcie2 = rozwinięciezdania2[Math.floor(Math.random() * rozwinięciezdania2.length)];
                  let zakończenie = zakończeniezdania[Math.floor(Math.random() * zakończeniezdania.length)];
                  let zdanie = rozpoczęcie + imięużytkownika + rozwinięcie + rozwinięcie2 + zakończenie;
                  document.querySelector("h2").textContent = zdanie;
              } else {
              let rozpoczęcie = rozpoczęciezdania[Math.floor(Math.random() * rozpoczęciezdania.length)];
              let rozwinięcie = rozwinięciezdania[Math.floor(Math.random() * rozwinięciezdania.length)];
              let rozwinięcie2 = rozwinięciezdania2[Math.floor(Math.random() * rozwinięciezdania2.length)];
              let rozwinięcie3 = rozwinięciezdania3[Math.floor(Math.random() * rozwinięciezdania3.length)];
              let zakończenie = zakończeniezdania[Math.floor(Math.random() * zakończeniezdania.length)];
              let zdanie = rozpoczęcie + imięużytkownika + rozwinięcie + rozwinięcie2 + rozwinięcie3 + ". " + zakończenie;
              document.querySelector("h2").textContent = zdanie;
              // Tutaj możesz dodać logikę gry w JavaGPT
          }
          let obrazekURL = obrazki[Math.floor(Math.random() * obrazki.length)];
          document.getElementById("obrazek").src = obrazekURL;
      }
      let link;
      function kalkulator() {
          let liczba = prompt("Podaj liczbę:");
          let liczba2 = prompt("Podaj drugą liczbę:");
          let wynik = parseFloat(liczba) + parseFloat(liczba2);
          if (wynik === 67) {
              link = "https://www.youtube.com/embed/kpeVxYk8CdU?autoplay=1&loop=1&playlist=kpeVxYk8CdU";
              odtwórzmuzykę();
          }
          alert("Wynik dodawania: " + wynik);
      }
      function odtwórzmuzykę() {
          if (document.getElementById("ytplayer")) return;

          let player = document.createElement("iframe");
          document.getElementById("easter-egg").p = "Teraz odtwarzane: Self Awere utworzone przez: Temper City";

          player.id = "ytplayer";
          player.src = link;
          player.width = "1";
          player.height = "1";
          player.style.border = "none";
          player.referrerPolicy = "strict-origin-when-cross-origin";
          player.allow = "autoplay; encrypted-media";
          document.body.appendChild(player);
      }
