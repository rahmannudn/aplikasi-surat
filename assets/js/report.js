"use strict";
const btnReportSuratMasuk = document.querySelector(".btn-report-surat-masuk");
const dataSuratMasuk = [
  [
    "800/172/BKD-BJM/2023",
    "BKN",
    "Mengikuti Acara Halal Bil Halal untuk menjalin tali silaturahmi",
    "2/2/2023",
    "2/2/2023",
    "-",
    "Surat Keterangan",
    "Reza",
  ],
  [
    "122.2/170/Pemda-BJM/2023",
    "Pemerintah Kota Banjarmasin",
    "Rapat Evaluasi Kerja",
    "5/2/2023",
    "6/2/2023",
    "-",
    "Surat Pemberitahuan",
    "Rahmanuddin",
  ],
  [
    "800/170/Dinkes-BJM/2023",
    "Dinas Kesehatan",
    "Sosialisasi mengenai bahaya penyakit menular di lingkungan",
    "10/2/2023",
    "12/2/2023",
    "-",
    "Surat Keterangan",
    "Rahmanuddin",
  ],
];

btnReportSuratMasuk?.addEventListener("click", function () {
  var props = {
    outputType: jsPDFInvoiceTemplate.Save,
    returnJsPDFDocObject: true,
    fileName: "Laporan Surat Masuk",
    orientationLandscape: true,
    compress: true,
    logo: {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSME_mTHRD3VM_5SZM6JS9fi8d2EjgIHoqccmOOdi5W&s",
      type: "PNG", //optional, when src= data:uri (nodejs case)
      width: 25, //aspect ratio = width/height
      height: 30,
      margin: {
        top: -3, //negative or positive num, from the current position
        left: 0, //negative or positive num, from the current position
      },
    },
    business: {
      name: "Badan Keuangan Daerah Banjarmasin",
      address:
        "Jl. RE Martadinata No.1, Kertak Baru Ilir, Kec. Banjarmasin Tengah 70001",
      phone: "(+355) 069 11 11 111",
      email: "bkd@gmail.com",
      website: "https://bkd.banjarmasinkota.go.id/",
    },
    contact: {
      name: "Laporan Surat Masuk",
      address: "Laporan Dari : 01/01/2021",
      phone: "Sampai : 02/02/2021",
    },
    invoice: {
      headerBorder: true,
      tableBodyBorder: true,
      header: [
        {
          title: "No",
          style: {
            width: 10,
          },
        },
        {
          title: "No Surat",
        },
        {
          title: "Pengirim",
        },
        {
          title: "Isi",
        },
        {
          title: "Tgl Masuk",
          style: {
            width: 25,
          },
        },
        {
          title: "Tgl Diterima",
          style: {
            width: 25,
          },
        },
        {
          title: "Keterangan",
          style: {
            width: 20,
          },
        },
        {
          title: "Jenis Surat",
        },
        {
          title: "Riwayat Disposisi",
        },
      ],
      table: Array.from(dataSuratMasuk, (item, index) => [
        index + 1,
        item[0],
        item[1],
        item[2],
        item[3],
        item[4],
        item[5],
        item[6],
        item[7],
      ]),
    },
    pageEnable: true,
    pageLabel: "Page ",
  };

  var pdfObject = jsPDFInvoiceTemplate.default(props); //returns number of pages created
});

const dataDisposisi = [
  [
    "800/172/BKD-BJM/2023",
    "BKN",
    "Mengikuti Acara Halal Mengikuti Acara Halal Bil Halal untuk menjalin tali silaturahmi",
    "2/2/2023",
    "Penting",
    "-",
    "Reza",
    "Kepegawaian",
  ],
  [
    "122.2/170/Pemda-BJM/2023",
    "Pemerintah Kota Banjarmasin",
    "Rapat Evaluasi Kerja",
    "5/2/2023",
    "Penting",
    "-",
    "Rahmanuddin",
    "Umum",
  ],
  [
    "800/170/Dinkes-BJM/2023",
    "Dinas Kesehatan",
    "Sosialisasi bahaya penyakit",
    "10/2/2023",
    "Penting",
    "-",
    "ujang supli",
    "Pembendaharaan",
  ],
];

const btnReportDisposisi = document.querySelector(".btn-report-disposisi");

btnReportDisposisi?.addEventListener("click", function () {
  var props = {
    outputType: jsPDFInvoiceTemplate.Save,
    returnJsPDFDocObject: true,
    fileName: "Laporan Disposisi",
    orientationLandscape: true,
    compress: true,
    logo: {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSME_mTHRD3VM_5SZM6JS9fi8d2EjgIHoqccmOOdi5W&s",
      type: "PNG", //optional, when src= data:uri (nodejs case)
      width: 25, //aspect ratio = width/height
      height: 30,
      margin: {
        top: -3, //negative or positive num, from the current position
        left: 0, //negative or positive num, from the current position
      },
    },
    business: {
      name: "Badan Keuangan Daerah Banjarmasin",
      address:
        "Jl. RE Martadinata No.1, Kertak Baru Ilir, Kec. Banjarmasin Tengah 70001",
      phone: "(+355) 069 11 11 111",
      email: "bkd@gmail.com",
      website: "https://bkd.banjarmasinkota.go.id/",
    },
    contact: {
      name: "Laporan Disposisi",
      address: "Laporan Dari : 01/01/2021",
      phone: "Sampai : 02/02/2021",
    },
    invoice: {
      headerBorder: true,
      tableBodyBorder: true,
      header: [
        {
          title: "No",
          style: {
            width: 10,
          },
        },
        {
          title: "No Surat",
        },
        {
          title: "Asal Surat",
        },
        {
          title: "Isi",
        },
        {
          title: "Tgl Disposisi",
          style: {
            width: 25,
          },
        },
        {
          title: "Sifat Disposisi",
          style: {
            width: 25,
          },
        },
        {
          title: "Keterangan",
          style: {
            width: 25,
          },
        },
        {
          title: "Nama Pegawai",
        },
        {
          title: "Bidang",
        },
      ],
      table: Array.from(dataDisposisi, (item, index) => [
        index + 1,
        item[0],
        item[1],
        item[2],
        item[3],
        item[4],
        item[5],
        item[6],
        item[7],
      ]),
    },
    pageEnable: true,
    pageLabel: "Page ",
  };

  var pdfObject = jsPDFInvoiceTemplate.default(props); //returns number of pages created
});

const dataSuratKeluar = [
  [
    "800/152/BKD-BJM/2023",
    "ULM",
    "Menyatakan siap menerima mahasiswa magang",
    "2/2/2023",
    "Surat Keterangan",
    "-",
  ],
  [
    "800/155/BKD-BJM/2023",
    "ULM",
    "Menyatakan mahasiswa bernama ujang melakukan penelitian",
    "10/3/2023",
    "Surat Keterangan",
    "-",
  ],
  [
    "800/156/BKD-BJM/2023",
    "Seluruh Sekolah SD & SMP sekota",
    "rapat sosialisasi aset",
    "20/3/2023",
    "Surat Keterangan",
    "-",
  ],
  [
    "200.2/157/BKD-BJM/2023",
    "-",
    "Surat tugas pa reza untuk melaksanakan perjalanan dinas",
    "10/4/2023",
    "Surat Tugas",
    "-",
  ],
];

const btnReportSuratKeluar = document.querySelector(".btn-report-surat-keluar");
btnReportSuratKeluar?.addEventListener("click", function () {
  var props = {
    outputType: jsPDFInvoiceTemplate.Save,
    returnJsPDFDocObject: true,
    fileName: "Laporan Surat Keluar",
    orientationLandscape: true,
    compress: true,
    logo: {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSME_mTHRD3VM_5SZM6JS9fi8d2EjgIHoqccmOOdi5W&s",
      type: "PNG", //optional, when src= data:uri (nodejs case)
      width: 25, //aspect ratio = width/height
      height: 30,
      margin: {
        top: -3, //negative or positive num, from the current position
        left: 0, //negative or positive num, from the current position
      },
    },
    business: {
      name: "Badan Keuangan Daerah Banjarmasin",
      address:
        "Jl. RE Martadinata No.1, Kertak Baru Ilir, Kec. Banjarmasin Tengah 70001",
      phone: "(+355) 069 11 11 111",
      email: "bkd@gmail.com",
      website: "https://bkd.banjarmasinkota.go.id/",
    },
    contact: {
      name: "Laporan Surat Keluar",
      address: "Laporan Dari : 01/01/2021",
      phone: "Sampai : 02/02/2021",
    },
    invoice: {
      headerBorder: true,
      tableBodyBorder: true,
      header: [
        {
          title: "No",
          style: {
            width: 10,
          },
        },
        {
          title: "No Surat",
        },
        {
          title: "Tujuan",
        },
        {
          title: "Isi Surat",
        },
        {
          title: "Tgl Surat",
          style: {
            width: 25,
          },
        },
        {
          title: "Jenis Surat",
          style: {
            width: 35,
          },
        },
        {
          title: "Keterangan",
          style: {
            width: 25,
          },
        },
      ],
      table: Array.from(dataSuratKeluar, (item, index) => [
        index + 1,
        item[0],
        item[1],
        item[2],
        item[3],
        item[4],
        item[5],
      ]),
    },
    pageEnable: true,
    pageLabel: "Page ",
  };

  var pdfObject = jsPDFInvoiceTemplate.default(props); //returns number of pages created
});

const dataPegawai = [
  [
    "Rizky Munawar",
    "Kepala Bidang",
    "rzkymunawar0@gmail.com",
    "rzkymunawar0",
    "Kebendaharaan",
  ],
  ["Rahmanuddin", "Admin", "rahmann@gmail.com", "rahmann", "Umum"],
  ["Reza", "Pegawai", "reza998@gmail.com", "reza998", "Kebendaharaan"],
];
const btnReportPegawai = document.querySelector(".btn-report-pegawai");
btnReportPegawai?.addEventListener("click", function () {
  var props = {
    outputType: jsPDFInvoiceTemplate.Save,
    returnJsPDFDocObject: true,
    fileName: "Laporan Pegawai",
    orientationLandscape: true,
    compress: true,
    logo: {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSME_mTHRD3VM_5SZM6JS9fi8d2EjgIHoqccmOOdi5W&s",
      type: "PNG", //optional, when src= data:uri (nodejs case)
      width: 25, //aspect ratio = width/height
      height: 30,
      margin: {
        top: -3, //negative or positive num, from the current position
        left: 0, //negative or positive num, from the current position
      },
    },
    business: {
      name: "Badan Keuangan Daerah Banjarmasin",
      address:
        "Jl. RE Martadinata No.1, Kertak Baru Ilir, Kec. Banjarmasin Tengah 70001",
      phone: "(+355) 069 11 11 111",
      email: "bkd@gmail.com",
      website: "https://bkd.banjarmasinkota.go.id/",
    },
    contact: {
      name: "Laporan Pegawai",
      address: "Laporan Dari : 01/01/2021",
      phone: "Sampai : 02/02/2021",
    },
    invoice: {
      headerBorder: true,
      tableBodyBorder: true,
      header: [
        {
          title: "No",
          style: {
            width: 10,
          },
        },
        {
          title: "Nama",
        },
        {
          title: "Jabatan",
        },
        {
          title: "Email",
        },
        {
          title: "Username",
        },
        {
          title: "Bidang",
        },
      ],
      table: Array.from(dataPegawai, (item, index) => [
        index + 1,
        item[0],
        item[1],
        item[2],
        item[3],
        item[4],
      ]),
    },
    pageEnable: true,
    pageLabel: "Page ",
  };

  var pdfObject = jsPDFInvoiceTemplate.default(props); //returns number of pages created
});

const dataJenisSurat = [
  [800, "Surat Keterangan"],
  [421, "Surat Tugas"],
  [200, "Surat Peringatan"],
];
const btnReportJenisSurat = document.querySelector(".btn-report-jenis-surat");
btnReportJenisSurat?.addEventListener("click", function () {
  var props = {
    outputType: jsPDFInvoiceTemplate.Save,
    returnJsPDFDocObject: true,
    fileName: "Laporan Jenis Surat",
    orientationLandscape: true,
    compress: true,
    logo: {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSME_mTHRD3VM_5SZM6JS9fi8d2EjgIHoqccmOOdi5W&s",
      type: "PNG", //optional, when src= data:uri (nodejs case)
      width: 25, //aspect ratio = width/height
      height: 30,
      margin: {
        top: -3, //negative or positive num, from the current position
        left: 0, //negative or positive num, from the current position
      },
    },
    business: {
      name: "Badan Keuangan Daerah Banjarmasin",
      address:
        "Jl. RE Martadinata No.1, Kertak Baru Ilir, Kec. Banjarmasin Tengah 70001",
      phone: "(+355) 069 11 11 111",
      email: "bkd@gmail.com",
      website: "https://bkd.banjarmasinkota.go.id/",
    },
    contact: {
      name: "Laporan Jenis Surat",
      address: "Laporan Dari : 01/01/2021",
      phone: "Sampai : 02/02/2021",
    },
    invoice: {
      headerBorder: true,
      tableBodyBorder: true,
      header: [
        {
          title: "No",
          style: {
            width: 10,
          },
        },
        {
          title: "Kode Surat",
        },
        {
          title: "Jenis Surat",
        },
      ],
      table: Array.from(dataJenisSurat, (item, index) => [
        index + 1,
        item[0],
        item[1],
      ]),
    },
    pageEnable: true,
    pageLabel: "Page ",
  };

  var pdfObject = jsPDFInvoiceTemplate.default(props); //returns number of pages created
});

const dataBidang = [
  ["001", "Pembendaharaan"],
  ["002", "Anggaran"],
  ["003", "Pendataan Dan Penetapan"],
  ["004", "Penagihan dan Pengawasan"],
];
const btnReportBidang = document.querySelector(".btn-report-bidang");
console.log(btnReportBidang);
btnReportBidang?.addEventListener("click", function () {
  var props = {
    outputType: jsPDFInvoiceTemplate.Save,
    returnJsPDFDocObject: true,
    fileName: "Laporan Bidang",
    orientationLandscape: true,
    compress: true,
    logo: {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSME_mTHRD3VM_5SZM6JS9fi8d2EjgIHoqccmOOdi5W&s",
      type: "PNG", //optional, when src= data:uri (nodejs case)
      width: 25, //aspect ratio = width/height
      height: 30,
      margin: {
        top: -3, //negative or positive num, from the current position
        left: 0, //negative or positive num, from the current position
      },
    },
    business: {
      name: "Badan Keuangan Daerah Banjarmasin",
      address:
        "Jl. RE Martadinata No.1, Kertak Baru Ilir, Kec. Banjarmasin Tengah 70001",
      phone: "(+355) 069 11 11 111",
      email: "bkd@gmail.com",
      website: "https://bkd.banjarmasinkota.go.id/",
    },
    contact: {
      name: "Laporan Bidang",
      address: "Laporan Dari : 01/01/2021",
      phone: "Sampai : 02/02/2021",
    },
    invoice: {
      headerBorder: true,
      tableBodyBorder: true,
      header: [
        {
          title: "No",
          style: {
            width: 10,
          },
        },
        {
          title: "Kode Bidang",
        },
        {
          title: "Bidang",
        },
      ],
      table: Array.from(dataBidang, (item, index) => [
        index + 1,
        item[0],
        item[1],
      ]),
    },
    pageEnable: true,
    pageLabel: "Page ",
  };

  var pdfObject = jsPDFInvoiceTemplate.default(props); //returns number of pages created
});
