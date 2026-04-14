const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

// Funzione con callback separato definito esternamente
function printNames (nome, index) {
    console.log((nome));
}
names.forEach(printNames);

// Funzione anonima
names.forEach(function (nome, i) {
    console.log(nome);
});

