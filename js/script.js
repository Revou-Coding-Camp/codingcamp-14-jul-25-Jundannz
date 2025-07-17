document.addEventListener("DOMContentLoaded", function(){
    const namaPengguna = prompt("Masukkan nama Anda:", "Pengguna");

    if(namaPengguna){
        document.querySelector("#home h1 span").textContent = namaPengguna;
    }
});

function tampilkanPesan(e){
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const tanggal = document.getElementById("tanggal").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const pesan = document.getElementById("pesan").value;
    
    const now = new Date();
    const currentTime = now.toLocaleString(navigator.language, {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short'
    });

    const hasilform = document.getElementById("hasilform").innerHTML = `
        <p><span class="bold">Current time</span> : ${currentTime}</p>
        <p><span class="bold">Nama</span> : ${nama}</p>
        <p><span class="bold">Tanggal Lahir</span> : ${tanggal}</p>
        <p><span class="bold">Jenis Kelamin</span> : ${gender}</p>
        <p><span class="bold">Pesan</span> : ${pesan}</p>
    `;
}