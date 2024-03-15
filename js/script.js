function dataPerson(){
    let nama = document.getElementById('frm').nama.value;
    let pekerjaan = document.getElementById('frm').pekerjaan.value;
    let hobby = document.getElementById('frm').hobby.value;
    let input = 'SELAMAT DATANG &nbsp' + nama + '<br> Pekerjaan:&nbsp' + pekerjaan + '<br> Hobby:&nbsp' + hobby;
    let not_input = 'maaf belum di isi';
    let hasil = (nama && pekerjaan && hobby !='') ? input : not_input;

    document.getElementById('hasil').innerHTML = hasil;

}