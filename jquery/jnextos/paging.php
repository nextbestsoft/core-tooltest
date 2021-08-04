<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" >
    <script src="jquery-3.6.0.min.js"></script>

    <script src="jpaging.js"></script>
    <script>
        $(document).ready(function() {
            $('#paging').intitPagination(1, 100);
        });
    </script>
    <link rel="stylesheet" href="jpaging.css" >
    <title>Demo paging use jquery</title>
  </head>

  <body>
    <h1>Demo paging 1</h1>
    <div class="container text-center">
      <ul class="paging" id="paging">
        <li id="first-page" class="page-link"></li>
        <li id="prev-page" class="page-link"></li>
        <li id="page-link-list" class="page-link"></li>
        <li id="next-page" class="page-link"></li>
        <li id="last-page" class="page-link"></li>
      </ul>
      <div id="hidden-paging"></div>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
  </body>

</html>
