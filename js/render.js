"use strict";
// DOM & REPORT
const dataTable = document.querySelector(".table-data");
console.log(dataTable);

const dataSuratMasuk = [
  {
    no_surat: "800/172/BKD-BJM/2023",
    tgl_surat: "2/2/2023",
    isi: "Mengikuti Acara Halal Mengikuti Acara Halal Bil Halal untuk menjalin tali silaturahmi",
    pengirim: "BKN",
  },
  {
    no_surat: "122.2/170/Pemda-BJM/2023",
    tgl_surat: "5/2/2023",
    isi: "Rapat Evaluasi Kerja",
    pengirim: "Pemerintah Kota Banjarmasin",
  },
  {
    no_surat: "800/170/Dinkes-BJM/2023",
    tgl_surat: "10/2/2023",
    isi: "Sosialisasi mengenai bahaya penyakit menular di lingkungan",
    pengirim: "Dinas Kesehatan",
  },
];

const renderSuratMasuk = function () {
  dataTable.innerHTML = "";
  dataSuratMasuk?.forEach((d, index) => {
    const html = `<tr class="border-b dark:border-neutral-500">
    <td class="whitespace-nowrap px-4 py-4 font-medium">${index + 1}</td>
    <td class="whitespace-normal px-4 py-4">
      ${d.no_surat}
    </td>
    <td class="whitespace-nowrap px-4 py-4">${d.tgl_surat}</td>
    <td class="whitespace-normal px-4 py-4 max-w-[13rem]">
      ${d.isi}
    </td>
    <td class="whitespace-normal px-4 py-4 max-w-[13rem]">
      ${d.pengirim}
    </td>
    <td
      class="whitespace-nowrap px-6 py-4 flex gap-4 flex-wrap text-center"
    >
      <button
        data-modal="modal-detail"
        class="modal-button bg-green-100 p-2 px-4 rounded-md flex items-center justify-center gap-x-1 hover:bg-green-200"
      >
        <img
          class="w-3 cursor-pointer pointer-events-none"
          src="assets/icon/square-info.svg"
          alt=""
        />
        <span class="text-sm font-medium pointer-events-none"
          >Detail</span
        >
      </button>

      <button
        data-modal="modal-edit"
        class="modal-button bg-blue-100 p-2 px-4 rounded-md flex items-center justify-center gap-x-1 hover:bg-blue-200"
      >
        <img
          class="w-3 cursor-pointer pointer-events-none"
          src="assets/icon/edit-alt.svg"
          alt=""
        />
        <span class="text-sm font-medium pointer-events-none"
          >Edit</span
        >
      </button>

      <button
        data-modal="modal-hapus"
        class="modal-button bg-red-100 p-2 px-4 rounded-md flex items-center justify-center gap-x-1 hover:bg-red-200"
      >
        <img
          class="w-3 cursor-pointer pointer-events-none"
          src="assets/icon/trash.svg"
          alt=""
        />
        <span class="text-sm font-medium pointer-events-none"
          >Delete</span
        >
      </button>
    </td>
  </tr>`;

    dataTable.insertAdjacentHTML("beforeend", html);
  });
};

// renderSuratMasuk();

const dataDisposisi = [
  {
    no_surat: "800/172/BKD-BJM/2023",
    tgl_disposisi: "2/2/2023",
    isi: "Mengikuti Acara Halal Mengikuti Acara Halal Bil Halal untuk menjalin tali silaturahmi",
    pengirim: "BKN",
    sifat: "Penting",
  },
  {
    no_surat: "122.2/170/Pemda-BJM/2023",
    tgl_disposisi: "5/2/2023",
    isi: "Rapat Evaluasi Kerja",
    pengirim: "Pemerintah Kota Banjarmasin",
    sifat: "Penting",
  },
  {
    no_surat: "800/170/Dinkes-BJM/2023",
    tgl_disposisi: "10/2/2023",
    isi: "Sosialisasi bahaya penyakit",
    pengirim: "Dinas Kesehatan",
    sifat: "Penting",
  },
];

const renderDisposisi = function () {
  dataTable.innerHTML = "";
  dataDisposisi?.forEach((d, index) => {
    const html = `
    <td class="whitespace-nowrap px-4 py-4 font-medium">${index + 1}</td>
    <td class="whitespace-normal px-4 py-4">
      ${d.no_surat}
    </td>
    <td class="whitespace-nowrap px-4 py-4">${d.tgl_disposisi}</td>
    <td class="whitespace-normal px-4 py-4 max-w-[13rem]">
      ${d.isi}
    </td>
    <td class="whitespace-nowrap px-4 py-4">
      <span
        class="p-2 bg-red-500 font-bold rounded-md text-white"
        >${d.sifat}</span
      >
    </td>
    <td
      class="whitespace-nowrap px-6 py-4 flex gap-4 flex-wrap text-center"
    >
      <button
        data-modal="modal-detail"
        class="modal-button bg-green-100 p-2 px-4 rounded-md flex items-center justify-center gap-x-1 hover:bg-green-200"
      >
        <img
          class="w-3 cursor-pointer pointer-events-none"
          src="assets/icon/square-info.svg"
          alt=""
        />
        <span class="text-sm font-medium pointer-events-none"
          >Detail</span
        >
      </button>

      <button
        data-modal="modal-edit"
        class="modal-button bg-blue-100 p-2 px-4 rounded-md flex items-center justify-center gap-x-1 hover:bg-blue-200"
      >
        <img
          class="w-3 cursor-pointer pointer-events-none"
          src="assets/icon/edit-alt.svg"
          alt=""
        />
        <span class="text-sm font-medium pointer-events-none"
          >Edit</span
        >
      </button>

      <button
        data-modal="modal-hapus"
        class="modal-button bg-red-100 p-2 px-4 rounded-md flex items-center justify-center gap-x-1 hover:bg-red-200"
      >
        <img
          class="w-3 cursor-pointer pointer-events-none"
          src="assets/icon/trash.svg"
          alt=""
        />
        <span class="text-sm font-medium pointer-events-none"
          >Delete</span
        >
      </button>
    </td>`;

    dataTable.insertAdjacentHTML("beforeend", html);
  });
};

renderDisposisi();
