function main() {
  const ubahButton = document.getElementById("ubahDokumen")
  const ubahButtonText = document.getElementById("ubahDokumenText")

  $('#isiDokumen').summernote("disable")

  ubahButton.addEventListener("click", (event) => {
    $('#judulDokumen').removeAttr("disabled")
    $('#jenisDokumen').removeAttr("disabled")
    $('#isiDokumen').summernote("enable")

    ubahButton.setAttribute("class", "btn btn-success btn-icon-split")
    if (ubahButtonText.innerText === "Selesai Ubah") 
      window.location.href = "./dokumen.html"
    else
      ubahButtonText.innerText = "Selesai Ubah"
  })
}

main()