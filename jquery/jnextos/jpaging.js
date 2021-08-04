$(document).ready(function() {

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

    $.fn.updatePagination = function (currentPage, mode) {

         var startPage = 1;
         var endPage = itemsOnPage;

         if ($("#starpage").val() !== "undefined") {
             startPage = $("#startpage").val();
         }

         if ($("#endpage").val() !== "undefined") {
             endPage = $("#endpage").val();
         }
 
         if (mode == 3) {
             startPage++;
             endPage++;
         }
          
         $("#page-link-list").empty();
         $("#page-link-list").updatePageList(startPage, endPage);
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

    $("#first-page").click(function() {
        currentPage = 1
        $('body').updatePagination(currentPage, 3);
    });

    $("#pre-page").click(function() {
        currentPage = $(this).attr("id");
        $('body').updatePagination(currentPage, 3);
    });

    $("#next-page").click(function() {
        $('body').updatePagination(currentPage, 3);
    });

    $("#last-page").click(function() {
        currentPage = $(this).attr("id");
        $('body').updatePagination(currentPage, 4);
    });

    // declare function intitPagination()
    $.fn.intitPagination = function (currentPageInit, totalPagesInit) {
         console.log("intitPagination() start");

         currentPage = currentPageInit;
         startPage = currentPage;
         totalPages = totalPagesInit;

         if (totalPages < (itemsOnPage + currentPage)) {
             endPage = totalPages;
         } else {
             endPage = itemsOnPage + currentPage;
         }
 
         $('body').drawPages();
         $('body').setHidden(startPage, endPage);

         console.log("intitPagination() finsh");
    };

    // declare function
    $.fn.updatePageList = function (startPage, endPage) {
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
             }).appendTo('#page-link-list');
             console.log(idx);
         }
    };
    

    // declare function
    $.fn.drawPages = function () {

         $("<a />", {
             name : "first_page",
             href : "#",
             text : firstText + " "
         }).appendTo('#first-page');

         $("<a />", {
             name : "prev_page",
             href : "#",
             text : prevText + " "
         }).appendTo('#prev-page');

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
             }).appendTo('#page-link-list');
             console.log(idx);
         }

         $("<a />", {
             name : "next_page",
             href : "#",
             text : nextText + " "
         }).appendTo('#next-page');

         $("<a />", {
             name : "last_page",
             href : "#",
             text : lastText + " "
         }).appendTo('#last-page');

    };

    // declare function setHidden()
    $.fn.setHidden = function (startpage, endPage) {

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

});

