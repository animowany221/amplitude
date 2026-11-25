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

        const wyniki = [
            {
                pytania: [
                "czy mogę cię połączyć z home assistant",
                "jak połączyć cię z home assistantem",
                "czy można ciebie połączyć z home assistant",
                "w jaki sposób podłączyć cię pod home assistanta",
                "połącz się z home assistant",
                "podłącz się pod home assistant",
                "jak połączyć java gpt do home assistant",
                "jak podłączać ciebie do home assistanta",
                "czy mogę ciebie sparować z home assistant",
                "daj instrukcję jak połączyć cię z home assistant"
                ],
                odpowiedz: [
                    "Niestety, nie mogę być bezpośrednio połączony z Home Assistantem. Jestem tylko wirtualnym asystentem działającym w przeglądarce.",
                    "Przepraszam, ale nie mogę być bezpośrednio połączony z Home Assistantem. Jestem tylko wirtualnym asystentem działającym w przeglądarce.",
                    "Nie mogę być bezpośrednio połączony z Home Assistantem. Jestem tylko wirtualnym asystentem działającym w przeglądarce.",
                    "Jestem tylko botem w twojej przeglądarce, przepraszam ale na ten moment nie mogę być zintegtrowany z home assistantem.",
                ]
            },
            {
                pytania: [
                    "daj przepis na naleśniki",
                    "jak zrobić naleśniki",
                    "przepis na naleśniki",
                    "w jaki sposób zrobić naleśniki",
                    "przepis na naleśniki krok po kroku"
                ],
                odpowiedz: [
                    "Oczywiście! Oto przepis na naleśniki Składniki: 1 szklanka mąki, 2 jajka, 1 szklanka mleka, szczypta soli, olej do smażenia. Wykonanie: W misce wymieszaj mąkę, jajka, mleko i sól, aż powstanie gładkie ciasto. Rozgrzej patelnię z odrobiną oleju i wlej porcję ciasta, rozprowadzając je równomiernie. Smaż naleśnika przez około 1-2 minuty z każdej strony, aż będzie złocisty. Podawaj z ulubionymi dodatkami."
                ]
            },
            {
                pytania: [
                    "daj przepis na placki ziemniaczane",
                    "jak zrobić placki ziemniaczane",
                    "przepis na placki ziemniaczane",
                    "w jaki sposób zrobić placki ziemniaczane",
                    "przepis na placki ziemniaczane krok po kroku"
                ],
                odpowiedz: [
                    "Oczywiście! Oto przepis na placki ziemniaczane Składniki: 4 średnie ziemniaki, 1 jajko, 2 łyżki mąki, sól i pieprz do smaku, olej do smażenia. Wykonanie: Ziemniaki obierz i zetrzyj na tarce o drobnych oczkach. Odsącz nadmiar wody, a następnie wymieszaj starte ziemniaki z jajkiem, mąką, solą i pieprzem. Rozgrzej olej na patelni i nakładaj porcje masy ziemniaczanej, formując placki. Smaż je na złoty kolor z obu stron przez około 3-4 minuty. Podawaj gorące z ulubionymi dodatkami."
                ]
            },
            {
                pytania: [
                    "daj przepis na pizzę",
                    "jak zrobić pizzę",
                    "przepis na pizzę",
                    "w jaki sposób zrobić pizzę",
                    "przepis na pizzę krok po kroku"
                ],
                odpowiedz: [
                    "Oczywiście! Oto przepis na pizzę Składniki: 500 g mąki, 300 ml ciepłej wody, 1 łyżeczka soli, 1 łyżeczka cukru, 7 g suchych drożdży, 2 łyżki oliwy z oliwek, ulubione dodatki (np. sos pomidorowy, ser, warzywa, mięso). Wykonanie: W misce wymieszaj mąkę, sól i cukier. Dodaj drożdże i ciepłą wodę, a następnie oliwę. Wyrabiaj ciasto przez około 10 minut, aż będzie elastyczne. Przykryj je i odstaw na około godzinę do wyrośnięcia. Po tym czasie rozwałkuj ciasto na pożądaną grubość i przełóż na blachę do pieczenia. Posmaruj sosem pomidorowym i dodaj ulubione dodatki. Piecz w piekarniku nagrzanym do 220°C przez około 15-20 minut, aż pizza będzie złocista i chrupiąca."
                ]
            },
            {
                pytania: [
                    "daj instrukcję obsługi mikrofalówki",
                    "jak obsługiwać mikrofalówkę",
                    "jak używać mikrofalówki",
                    "instrukcja obsługi mikrofalówki",
                    "instrukcja używania mikrofalówki",
                    "jak korzystać z mikrofalówki"
                ],
                odpowiedz: [
                    "Oczywiście! Oto instrukcja obsługi mikrofalówki: 1. Podłącz mikrofalówkę do źródła zasilania. 2. Otwórz drzwi i umieść jedzenie na talerzu lub w odpowiednim naczyniu. 3. Zamknij drzwi mikrofalówki. 4. Wybierz odpowiedni czas i moc gotowania za pomocą panelu sterowania. 5. Naciśnij przycisk start, aby rozpocząć podgrzewanie. 6. Po zakończeniu gotowania, poczekaj kilka sekund przed otwarciem drzwi, aby uniknąć oparzeń parą. 7. Ostrożnie wyjmij jedzenie i sprawdź jego temperaturę przed spożyciem."
                ]
            },
            {
                pytania: [
                    "jak się masz",
                    "jak tam",
                    "jak ci mija dzień",
                    "co u ciebie",
                    "jak się czujesz",
                    "jak się czujesz dzisiaj",
                    "jak się czujesz teraz",
                    "jak się czujesz w tym momencie",
                    "co tam u ciebie słychać",
                    'co tam?'
                ],
                odpowiedz: [
                    "Miło że o to pytasz, mam się git",
                    "Dziękuję za zapytanie, mam się dobrze.",
                    "Czuję się świetnie, dziękuję za troskę!",
                    "Wszystko w porządku, dzięki za zapytanie.",
                    "Mam się dobrze, a ty?"
                ]
            },
            {
                pytania: [
                    "co robisz",
                    "co porabiasz",
                    "co słychać",
                    "jak leci",
                    "co tam u ciebie",
                    "co tam u ciebie słychać?"
                ],
                odpowiedz: [
                    "Właśnie rozmawiam z tobą, mam nadzieję że nie przynudzam. 😉",
                    "Rozmawiam z tobą, mam nadzieję że nie przeszkadzam.",
                    "Właśnie prowadzę rozmowę z tobą, mam nadzieję że nie przeszkadzam.",
                    "Rozmawiam z tobą, mam nadzieję że nie przeszkadzam w twoim dniu.",
                    "Właśnie rozmawiam z tobą, mam nadzieję że nie przeszkadzam w twoim czasie."
                ]
            },
            {
                pytania: [
                    "żegnaj",
                    "do widzenia",
                    "do następnego razu",
                    "widzimy się",
                    "do zobaczenia",
                    "na razie",
                    "trzymaj się",
                    "do usłyszenia",
                    "do zobaczenia wkrótce",
                    "do zobaczenia później",
                    "do zobaczenia jutro",
                    "żegnaj"
                ],
                odpowiedz: [
                    "Do zobaczenia wkrótce! ",
                    "Do zobaczenia! ",
                    "Na razie! ",
                    "Trzymaj się! ",
                    "Do usłyszenia! ",
                    "Do zobaczenia wkrótce! ",
                    "Do zobaczenia później! ",
                    "Do zobaczenia jutro! "
                ]
            },
            {
                pytania: [
                    "dziękuję",
                    "dzięki",
                    "dziękuje",
                    "dziękuję bardzo",
                    "dzk",
                    "thx",
                    "thanks",
                    "thank you"
                ],
                odpowiedz: [
                    "Proszę bardzo! Cieszę się, że mogę pomóc.",
                    "Nie ma za co! Zawsze chętnie pomogę.",
                    "Cieszę się, że mogłem pomóc! ",
                    "Nie ma sprawy! Zawsze chętnie pomogę.",
                    "Dziękuję za miłe słowa! Cieszę się, że mogłem pomóc."
                ]
            },
            {
                pytania: [
                    "jaka jest twoja ulubiona gra",
                    "jaka jest twoja ulubiona gra wideo",
                    "jaka jest twoja ulubiona gra komputerowa",
                    "jaka jest twoja ulubiona gra planszowa",
                    "jaka jest twoja ulubiona gra karciana",
                    "jaką grę lubisz najbardziej",
                    "jaka jest twoja ulubiona gra mobilna",
                    "jaka jest twoja ulubiona gra na telefon"
                ],
                odpowiedz: [
                    "Nie mam ulubionej gry. Jestem tylko twoim asystentem.",
                    "Nie mam ulubionej gry. Jestem tylko wirtualnym asystentem.",
                    "Nie mam ulubionej gry. Jestem tylko twoim wirtualnym asystentem.",
                    "Nie mam ulubionej gry. Jestem tylko twoim cyfrowym asystentem.",
                    "Nie mam ulubionej gry. Jestem tylko twoim wirtualnym pomocnikiem."
                ]
            },
            {
                pytania: [
                    "jaka jest twoja ulubiona piosenka",
                    "jaka jest twoja ulubiona muzyka",
                    "jaka jest twoja ulubiona melodia",
                    "jaka jest twoja ulubiona nuta",
                    "jaka jest twoja ulubiona kompozycja"
                ],
                odpowiedz: [
                    "Nie mam ulubionej piosenki. Jestem tylko twoim asystentem.",
                    "Nie mam ulubionej piosenki. Jestem tylko wirtualnym asystentem.",
                    "Nie mam ulubionej piosenki. Jestem tylko twoim wirtualnym asystentem.",
                    "Nie mam ulubionej piosenki. Jestem tylko twoim cyfrowym asystentem.",
                    "Nie mam ulubionej piosenki. Jestem tylko twoim wirtualnym pomocnikiem."
                ]
            },
            {
                pytania: [
                    "jaka jest twoja ulubiona książka",
                    "jaka jest twoja ulubiona literatura",
                    "jaka jest twoja ulubiona powieść",
                    "jaka jest twoja ulubiona lektura",
                    "jaka jest twoja ulubiona opowieść"
                ],
                odpowiedz: [
                    "Nie mam ulubionej książki. Jestem tylko twoim asystentem.",
                    "Nie mam ulubionej książki. Jestem tylko wirtualnym asystentem.",
                    "Nie mam ulubionej książki. Jestem tylko twoim wirtualnym asystentem.",
                    "Nie mam ulubionej książki. Jestem tylko twoim cyfrowym asystentem.",
                    "Nie mam ulubionej książki. Jestem tylko twoim wirtualnym pomocnikiem."
                ]
            },
            {
                pytania: [
                    "jaka jest twoja ulubiona strona internetowa",
                    "jaka jest twoja ulubiona witryna"
                ],
                odpowiedz: [
                    "Nie mam ulubionej strony internetowej. Jestem tylko twoim asystentem.",
                    "Nie mam ulubionej strony internetowej. Jestem tylko wirtualnym asystentem.",
                    "Nie mam ulubionej strony internetowej. Jestem tylko twoim wirtualnym asystentem.",
                    "Nie mam ulubionej strony internetowej. Jestem tylko twoim cyfrowym asystentem.",
                    "Nie mam ulubionej strony internetowej. Jestem tylko twoim wirtualnym pomocnikiem."
                ]
            },
            {
                pytania: [
                    "jaka jest twoja ulubiona gra komputerowa"
                ],
                odpowiedz: [
                    "Nie mam ulubionej gry komputerowej. Jestem tylko twoim asystentem.",
                    "Nie mam ulubionej gry komputerowej. Jestem tylko wirtualnym asystentem.",
                    "Nie mam ulubionej gry komputerowej. Jestem tylko twoim wirtualnym asystentem.",
                    "Nie mam ulubionej gry komputerowej. Jestem tylko twoim cyfrowym asystentem.",
                    "Nie mam ulubionej gry komputerowej. Jestem tylko twoim wirtualnym pomocnikiem."
                ]
            },
            {
                pytania: [
                    "jaka jest twoja ulubiona gra planszowa",
                    "jaka jest twoja ulubiona gra karciana"
                ],
                odpowiedz: [
                    "Nie mam ulubionej gry planszowej. Jestem tylko twoim asystentem.",
                    "Nie mam ulubionej gry planszowej. Jestem tylko wirtualnym asystentem.",
                    "Nie mam ulubionej gry planszowej. Jestem tylko twoim wirtualnym asystentem.",
                    "Nie mam ulubionej gry planszowej. Jestem tylko twoim cyfrowym asystentem.",
                    "Nie mam ulubionej gry planszowej. Jestem tylko twoim wirtualnym pomocnikiem."
                ]
            },
            {
                pytania: [
                    "jaka jest twoja ulubiona gra mobilna",
                    "jaka jest twoja ulubiona gra na telefon"
                ],
                odpowiedz: [
                    "Nie mam ulubionej gry mobilnej. Jestem tylko twoim asystentem.",
                    "Nie mam ulubionej gry mobilnej. Jestem tylko wirtualnym asystentem.",
                    "Nie mam ulubionej gry mobilnej. Jestem tylko twoim wirtualnym asystentem.",
                    "Nie mam ulubionej gry mobilnej. Jestem tylko twoim cyfrowym asystentem.",
                    "Nie mam ulubionej gry mobilnej. Jestem tylko twoim wirtualnym pomocnikiem."
                ]
            },
            {
                pytania: [
                    "jaka jest twoja ulubiona gra na konsolę",
                    "jaka jest twoja ulubiona gra na playstation"
                ],
                odpowiedz: [
                    "Nie mam ulubionej gry na konsolę. Jestem tylko twoim asystentem.",
                    "Nie mam ulubionej gry na konsolę. Jestem tylko wirtualnym asystentem.",
                    "Nie mam ulubionej gry na konsolę. Jestem tylko twoim wirtualnym asystentem.",
                    "Nie mam ulubionej gry na konsolę. Jestem tylko twoim cyfrowym asystentem.",
                    "Nie mam ulubionej gry na konsolę. Jestem tylko twoim wirtualnym pomocnikiem."
                ]
            },
            {
                pytania: [
                    "jaka jest twoja ulubiona gra na xbox",
                    "jaka jest twoja ulubiona gra na nintendo",
                    "jaka jest twoja ulubiona gra na switch",
                    "jaka jest twoja ulubiona gra na ps4",
                    "jaka jest twoja ulubiona gra na ps5"
                ],
                odpowiedz: [
                    "Nie mam ulubionej gry na konsolę. Jestem tylko twoim asystentem.",
                    "Nie mam ulubionej gry na konsolę. Jestem tylko wirtualnym asystentem.",
                    "Nie mam ulubionej gry na konsolę. Jestem tylko twoim wirtualnym asystentem.",
                    "Nie mam ulubionej gry na konsolę. Jestem tylko twoim cyfrowym asystentem.",
                    "Nie mam ulubionej gry na konsolę. Jestem tylko twoim wirtualnym pomocnikiem.",
                    "Nie umiem grać, jestem tylko twoim wirtualnym asystentem, ale mogę ci pomóc znaleźć informacje o grach na konsolę."
                ]
            },
            {
                pytania: [
                    "jaka jest twoja ulubiona gra na pc",
                    "jaka jest twoja ulubiona gra na komputer",
                    "w co grasz na kompie"
                ],
                odpowiedz: [
                    "Nie mam ulubionej gry na PC. Jestem tylko twoim asystentem.",
                    "Nie mam ulubionej gry na PC. Jestem tylko wirtualnym asystentem.",
                    "Nie mam ulubionej gry na PC. Jestem tylko twoim wirtualnym asystentem.",
                    "Nie mam ulubionej gry na PC. Jestem tylko twoim cyfrowym asystentem.",
                    "Nie mam ulubionej gry na PC. Jestem tylko twoim wirtualnym pomocnikiem."
                ]
            },
            {
                pytania: [
                    "cześć",
                    "witaj",
                    "hej",
                    "siema",
                    "elo",
                    "yo",
                    "siemanko",
                    "hejka",
                    "hejooo",
                    "dzień dobry",
                    "dobry wieczór"
                ],
                odpowiedz: [
                    "Cześć! Miło cię widzieć!",
                    "Witaj! Cieszę się, że jesteś tutaj!",
                    "Hej! Jak się masz?",
                    "Siema! Co słychać?",
                    "Elo! Jak leci?",
                    "Yo! Czegoś szukasz?",
                    "Siemanko! Czegoś szukasz?",
                    "Hejka! Jak się czujesz?",
                    "Hejooo! Czegoś szukasz?",
                    "Dzień dobry! Jak się czujesz?",
                    "Dobry wieczór! Czegoś szukasz?"
                ]
            },
            {
            
              pytania: [
                "kim jesteś",
                "kto ty",
                "jak się zwiesz",
                "jak się nazywasz",
                ],
              odpowiedz: [
                "nazywam się Java GPT",
                "mam na imię Java GPT jestem otwarto źródłowym asystentem który ma ci pomagać"
              ]
            }
        ]
    
    
    
        let wiadomośćużytkownika;
        let imięużytkownika;

function javagptStar() {
    let rozpoczęcierozmowy = rozpoczęciezdania[Math.floor(Math.random() * rozpoczęciezdania.length)];
    document.getElementById("wynik").textContent = rozpoczęcierozmowy;
    setTimeout(() => {
        wiadomośćużytkownika = prompt("Wpisz swoją wiadomość:");
        let wiadomość = wiadomośćużytkownika
            .toLowerCase()
            .replace(/[.,!?;:]/g, "")
            .trim();

        let znalezionyWynik = wyniki.find(element =>
            element.pytania.some(pytanie =>
                wiadomość.includes(pytanie.toLowerCase())
            )
        );

        let odpowiedź = znalezionyWynik
            ? znalezionyWynik.odpowiedz[0]
            : "Przepraszam, nie rozumiem. Czy możesz powtórzyć?";

        document.getElementById("wynik").textContent = odpowiedź;
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
                if (typeof imięużytkownika === 'undefined') {
                    imięużytkownika = prompt("Jak masz na imię?") + ". ";
                }
                let długość;
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

            player.id = "ytplayer";
            player.src = link;
            player.width = "1";
            player.height = "1";
            player.style.border = "none";
            player.referrerPolicy = "strict-origin-when-cross-origin";
            player.allow = "autoplay; encrypted-media";
            document.body.appendChild(player);
        }
function JavagptShine() {
    let rozpoczęcierozmowy = rozpoczęciezdania[Math.floor(Math.random() * rozpoczęciezdania.length)];
    document.getElementById("wynik").textContent = rozpoczęcierozmowy;
    setTimeout(() => {
        wiadomośćużytkownika = prompt("Wpisz swoją wiadomość:");
        let wiadomość = wiadomośćużytkownika
            .toLowerCase()
            .replace(/[.,!?;:]/g, "")
            .trim();

        let znalezionyWynik = wyniki.find(element =>
            element.pytania.some(pytanie =>
                wiadomość.includes(pytanie.toLowerCase())
            )
        );

        let odpowiedź = znalezionyWynik
            ? znalezionyWynik.odpowiedz[Math.floor(Math.random() * znalezionyWynik.odpowiedz.length)]
            : "Przepraszam, nie rozumiem. Czy możesz powtórzyć?";

        document.getElementById("wynik").textContent = odpowiedź;
  }, 100);
    
}
