function getData(event) {
    event.preventDefault()

    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let selectoption = document.getElementById("selectoption").value
    let areatext = document.getElementById("areatext").value
    alert("Silahkan Cek data anda")

    alert(`
        Nama anda adalah     : ${name}
        Email     :${email}
        Nomor Handphone     : ${phone}
        Pilihan yang anda pilih     : ${selectoption}
        Pesan anda     : ${areatext}
        `)

}