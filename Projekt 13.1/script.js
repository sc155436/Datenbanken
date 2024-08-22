<script>
document.getElementById('umrechnungsformular').addEventListener('submit', function(event) {
    event.preventDefault();

    const betrag = parseFloat(document.getElementById('betrag').value);
    const ausgangswaehrung = document.getElementById('ausgangswaehrung').value;
    const zielwaehrung = document.getElementById('zielwaehrung').value;
    let ergebnis = 0;

    // Beispielhafte Umrechnungskurse (diese können durch echte Daten ersetzt werden)
    const umrechnungskurse = {
        usd: { usd: 1, eur: 0.85, gbp: 0.75, jpy: 110 },
        eur: { usd: 1.18, eur: 1, gbp: 0.88, jpy: 129.5 },
        gbp: { usd: 1.33, eur: 1.14, gbp: 1, jpy: 147 },
        jpy: { usd: 0.0091, eur: 0.0077, gbp: 0.0068, jpy: 1 }
    };

    // Umrechnung durchführen
    if (umrechnungskurse[ausgangswaehrung] && umrechnungskurse[ausgangswaehrung][zielwaehrung]) {
        ergebnis = betrag * umrechnungskurse[ausgangswaehrung][zielwaehrung];
    }

    // Ergebnis anzeigen
    document.getElementById('ergebnis').value = ergebnis.toFixed(2);
});
</script>