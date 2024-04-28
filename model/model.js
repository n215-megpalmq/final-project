export function loadPage(pageID){
    
    if (pageID != '') {
        $.get(`pages/${pageID}.html`, function (data) {
        console.log('data ' + data);
        $('#app').html(data);
        });
    } else {
        $.get(`pages/home.html`, function (data) {
        console.log('data ' + data);
        $('#app').html(data);
        });
    }
}

export function mixWords(firstWord, secondWord){
    let newWord= secondWord+ " "+ firstWord;
    console.log(newWord);
}