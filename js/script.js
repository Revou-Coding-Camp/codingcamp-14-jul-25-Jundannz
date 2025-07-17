document.addEventListener("DOMContentLoaded", function() {
    const namaPengguna = prompt("Masukkan nama Anda:", "Pengguna");

    if (namaPengguna) {
        document.querySelector("#home h1 span").textContent = namaPengguna;
    }

    initOutputForm();
    
    function updateWaktu() {
        const now = new Date();
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short',
            timeZone: 'Asia/Jakarta',
            locale: 'id-ID'
        };
    
        const waktuSekarang = now.toLocaleString('id-ID', options);
        const waktuElement = document.getElementById("waktu-realtime");
        if (waktuElement) {
            waktuElement.textContent = waktuSekarang;
        }
    }

    updateWaktu();
    setInterval(updateWaktu, 1000);
});

function initOutputForm() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
        timeZone: 'Asia/Jakarta',
        locale: 'id-ID'
    };

    const currentTime = now.toLocaleString('id-ID', options);

    document.getElementById("hasilform").innerHTML = `
        <div id="time-container">
            <p><span class="bold">Current time</span> : <span id="waktu-realtime">${currentTime}</span></p>
        </div>
        <div id="form-data-container">
            <p><span class="bold">Nama</span> : -</p>
            <p><span class="bold">Tanggal Lahir</span> : -</p>
            <p><span class="bold">Jenis Kelamin</span> : -</p>
            <p><span class="bold">Pesan</span> : -</p>
        </div>`;
}

function updateFormData(nama, tanggal, gender, pesan) {
    const formDataContainer = document.getElementById("form-data-container");
    if (formDataContainer) {
        formDataContainer.innerHTML = `
            <p><span class="bold">Nama</span> : ${nama || '-'}</p>
            <p><span class="bold">Tanggal Lahir</span> : ${tanggal || '-'}</p>
            <p><span class="bold">Jenis Kelamin</span> : ${gender || '-'}</p>
            <p><span class="bold">Pesan</span> : ${pesan || '-'}</p>`;
    }
}

function tampilkanOutput(e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const tanggal = document.getElementById("tanggal").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const pesan = document.getElementById("pesan").value.trim();

    if (nama.length < 3) {
        alert("Nama harus terdiri dari minimal 3 karakter.");
        return;
    }
    if (!tanggal) {
        alert("Tanggal lahir harus diisi.");
        return;
    }
    if (!gender) {
        alert("Jenis kelamin harus dipilih.");
        return;
    }
    if (pesan.length < 5) {
        alert("Pesan harus terdiri dari minimal 5 karakter.");
        return;
    }

    updateFormData(nama, tanggal, gender, pesan);
}