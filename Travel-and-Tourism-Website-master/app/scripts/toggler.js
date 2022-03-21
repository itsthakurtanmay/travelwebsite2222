/* Script To toggle Menu  */
const selectElement = (element) => document.querySelector(element)
selectElement('.menu-icons.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active')
})

selectElement('.menu-icons.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active')
})

$(document).ready(function () {
    $(".tab-a").click(function () {
      $(".tab").removeClass("tab-active");
      $(".tab[data-id='" + $(this).attr("data-id") + "']").addClass("tab-active");
      $(".tab-a").removeClass("active-a");
      $(this).parent().find(".tab-a").addClass("active-a");
    });
  });