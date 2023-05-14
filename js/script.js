"use strict";
const hambugerMenu = document.querySelector(".hamburger-menu");
const sidebar = document.querySelector(".sidebar");
const logoHeader = document.querySelector(".logo-header");
const overlay = document.querySelector(".overlay");
const btnAccount = document.querySelector(".btn-account");
const accountSettingList = document.querySelector(".account-list");
const btnsModal = document.querySelectorAll(".modal-button");
const btnModalContainer = document.querySelector(".buttons-container");
const modal = document.querySelectorAll(".modal-container");
const btnCariSurat = document.querySelector(".btn-cari-surat");
const listSurat = document.querySelector(".list-surat");
const listSuratTambah = document.querySelector(".list-surat-tambah");
const btnTambahDisposisiPegawai = document.querySelectorAll(
  ".btn-tambah-disposisi-pegawai"
);
const btnTambahPegawai = document.querySelectorAll(".btn-tambah-pegawai");
const pilihPegawai = document.querySelector(".pilih-pegawai");

const showPegawaiModal = function (e) {
  const target = document.querySelector(`#${e.target.dataset.modal}`);
  toggleModalPegawai(target);
};

btnTambahDisposisiPegawai?.forEach((element) => {
  element.addEventListener("click", (e) => showPegawaiModal(e));
});

btnTambahPegawai?.forEach((element) => {
  element.addEventListener("click", (e) => showPegawaiModal(e));
});

const toggleModalPegawai = function (target) {
  target.classList.toggle("hidden");
};

btnCariSurat?.addEventListener("click", function () {
  listSurat.classList.toggle("hidden");
});

const toggleModalClass = function (target) {
  target.classList.toggle("hidden");
  target.classList.toggle("modal-active");
};

const showModal = function (modalTarget) {
  const target = document.querySelector(`#${modalTarget}`);
  toggleModalClass(target);
};

const closeModal = function () {
  const target = document.querySelector(".modal-container.modal-active");
  if (!target) return;
  toggleModalClass(target);
};

document.addEventListener("click", function (e) {
  const target = e.target;
  if (target.classList.contains("modal-button")) {
    const modalTarget = target.dataset.modal;
    showModal(modalTarget);
    return;
  }

  if (target.classList.contains("modal-close")) {
    closeModal();
    return;
  }

  return;
});

hambugerMenu.addEventListener("click", function (e) {
  const target = e.target;
  if (!target.classList.contains("close-sidebar")) {
    target.classList.add("close-sidebar");
    sidebar.classList.add("hidden");
    logoHeader.classList.add("hidden");
    overlay.classList.add("hidden");

    hambugerMenu.src = "./assets/icon/menu-icon.svg";
    return;
  }

  target.classList.remove("close-sidebar");
  sidebar.classList.remove("hidden");
  logoHeader.classList.remove("hidden");
  logoHeader.classList.add("flex");
  logoHeader.classList.add("items-center");
  overlay.classList.remove("hidden");

  hambugerMenu.src = "./assets/icon/cross.svg";
  return;
});

btnAccount.addEventListener("click", function (e) {
  const target = e.target;

  if (!target.classList.contains("modal-open")) {
    target.classList.add("modal-open");
    accountSettingList.classList.remove("hidden");
    return;
  }

  target.classList.remove("modal-open");
  accountSettingList.classList.add("hidden");
  return;
});
