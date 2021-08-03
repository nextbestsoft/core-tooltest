//$(document).ready(function() {

alert("aaa");

    // 	number of items displayed on each page
    var itemsOnPage = 10;

    // text to be display on the previous button
    var prevText = "≪";

    // text to be display on the next button
    var nextText = "≫";
    
    // text to be display on the fist button
    var firstText = "First";

    // text to be display on the last button
    var lastText = "Last";

    var initFlag = false;
//alert($("#initpaging").val());
    if(typeof($("#initpaging").val()) !== "undefined") {
        if ($("#initpaging").val() === "1") {
            initFlag = true;
        }
    }
//alert("initFlag=" + initFlag);

    $.fn.updatePagination = function (currentPage) {

         var startPage = 1;
         var endPage = itemsOnPage;

         if ($("#starpage").val() !== "undefined") {
             startPage = $("#startpage").val();
         }

         if ($("#endpage").val() !== "undefined") {
             endPage = $("#endpage").val();
         }

         var floorNum = Math.floor(itemsOnPage / 2);
         
//alert("startPage=" + startPage + ": endPage = " + endPage);
         if (currentPage > floorNum) {
//alert("DEBUG1")
              startPage = currentPage - startPage;
              endPage = startPage + itemsOnPage;
         } else {
//alert("DEBUG2")
              startPage = parseInt(currentPage) + 1;
              endPage = parseInt(currentPage) + 1 + itemsOnPage;
         }
//alert("startPage=" + startPage + ": endPage = " + endPage);

         $("#paging").empty();
         $("#paging").drawPages();
         $("#startpage").remove();
         $("#endpage").remove();
         $("<input>", {
             id: "startpage",
             type: "hidden",
             name : "startpage",
             value : startPage,
         }).appendTo('#hidden-paging');
         $("<input>", {
             id: "endpage",
             type: "hidden",
             name : "endpage",
             value : endPage
         }).appendTo('#hidden-paging')
    }

    $.fn.drawPages = function () {

         $("<a />", {
             id : 1,
             name : "first_page",
             class: "nav-page first-page",
             href : "",
             text : firstText + " "
         }).appendTo('#paging');

         $("<a />", {
             id : idx - 1,
             class: "nav-page pre-page",
             name : "pre_spage",
             href : "",
             text : prevText + " "
         }).appendTo('#paging');

         for (var idx = startPage; idx < endPage; idx++) {

             if (currentPage == idx) {
                 className = "nav-page cur-page";
             } else {
                 className = "nav-page";
             }

             $("<a />", {
                 id : idx,
                 name : "link",
                 class: className,
                 href : "#",
                 text : idx + " "
             }).appendTo('#paging');
             console.log(idx);
         }

         $("<a />", {
             id : "next-page",
             name : "next_page",
             class: "nav-page next-page",
             href : "#next",
             text : nextText + " "
         }).appendTo('#paging');

         $("<a />", {
             id : "last-page",
             name : "last_page",
             class: "nav-page last-page",
             href : "#last",
             text : lastText + " "
         }).appendTo('#paging');

    };

    $.fn.intitPagination = function (currentPageInit, totalPagesInit) {
         var className;
         initPaging = true;
         currentPage = currentPageInit;
         startPage = currentPage;
         totalPages = totalPagesInit;

         if (totalPages < (itemsOnPage + currentPage)) {
             endPage = totalPages;
         } else {
             endPage = itemsOnPage + currentPage;
         }
 
         $('#paging').drawPages();
         $('#paging').setHidden(1, startPage, endPage);
    };

    $.fn.setHidden = function (initFlag, startpage, endPage) {
         $('#hidden-paging').empty();
         $("<input>", {
             id: "initpaging",
             type: "hidden",
             name : "initpaging",
             value : 1,
         }).appendTo('#hidden-paging');
         $("<input>", {
             id: "startpage",
             type: "hidden",
             name : "startpage",
             value : startPage,
         }).appendTo('#hidden-paging');
         $("<input>", {
             id: "endpage",
             type: "hidden",
             name : "endpage",
             value : endPage
         }).appendTo('#hidden-paging');
    }

    if (initFlag == false) {
        // init Pagination
        $('#paging').intitPagination(1, 100);
    }

    $("#next-page").click(function() {
alert("clicked page");
        currentPage = $(this).attr("id");
        //alert(currentPage);
        $('#paging').updatePagination(currentPage);
    });

    $("#last-page").click(function() {
alert("clicked last-page");
        currentPage = $(this).attr("id");
        //alert(currentPage);
        $('#paging').updatePagination(currentPage);
    });


//});


