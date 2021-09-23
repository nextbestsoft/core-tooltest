$(function() {

   // Denotes total number of rows
      var rowIdx = 0;
  
      // jQuery button click event to add a row
      $('#addBtn').on('click', function () {
        // Adding a row inside the tbody.
        $('#tbody').append(`<tr id="R${++rowIdx}">
                        <td><input type="text"></td>
                        <td><input type="text"></td>
                        <td>
                          <input type="button" name="finish-add" value="finish-add">
                          <input class="btn btn-danger remove" type="button" name="finish-add" value="stop-add">
                       </td>
              </tr>`);
      });
  
      // jQuery button click event to remove a row.
      $('#tbody').on('click', '.remove', function () {
  
        // Getting all the rows next to the row
        // containing the clicked button
        var child = $(this).closest('tr').nextAll();
  
        // Iterating across all the rows 
        // obtained to change the index
        child.each(function () {
  
          // Getting <tr> id.
          var id = $(this).attr('id');
  
          // Getting the <p> inside the .row-index class.
          var idx = $(this).children('.row-index').children('p');
  
          // Gets the row number from <tr> id.
          var dig = parseInt(id.substring(1));
  
          // Modifying row index.
          idx.html(`Row ${dig - 1}`);
  
          // Modifying row id.
          $(this).attr('id', `R${dig - 1}`);
        });
  
        // Removing the current row.
        $(this).closest('tr').remove();
  
        // Decreasing total number of rows by 1.
        rowIdx--;
      });	

      // jQuery button click event to add a row
      $('#tbody').on('click', '.finish-edit', function () {
	  console.log("clicked finish-edit");
	  this.value = 'edit';
          $(this).removeClass('finish-edit');
          $(this).addClass('edit');	      

          $(this).closest('tr').children('td').each(function(){
              alert($(this).children('input').val());
	  });
      });	

      // jQuery button click event to add a row
      $('#tbody').on('click', '.edit', function () {
	  this.value = 'finish-edit';
          $(this).removeClass('edit');
          $(this).addClass('finish-edit');  
	  this.class = 'finish-edit';

          var test1 = $(this).closest('tr').children('td')[0].innerHTML;
          var test2 = $(this).closest('tr').children('td')[1].innerHTML;
	  console.log(test1);
	  console.log(test2);

          var input1 = document.createElement("input");
          input1.setAttribute("type", "text");
          input1.setAttribute("value", test1);

	  $(this).closest('tr').children('td')[0].innerHTML = '<input name="" value="' + test1 + '">';
	  $(this).closest('tr').children('td')[1].innerHTML = '<input name="" value="' + test2 + '">';
      });	


})


