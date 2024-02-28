<!DOCTYPE html>

<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dependent Dropdown</title>

        <!-- bootstrap cdn  -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.min.js"
                integrity="sha512-ykZ1QQr0Jy/4ZkvKuqWn4iF3lqPZyij9iRv6sGqLRdTPkY69YX6+7wvVGmsdBbiIfN/8OdsI7HABjvEok6ZopQ=="
                crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
              integrity="sha512-jnSuA4Ss2PkkikSOLtYs8BlYIeeIK1h99ty4YfvRPAlzr377vr3CXDb7sb7eEEBYjDtcYj+AjBH3FLv5uSJuXg=="
              crossorigin="anonymous" referrerpolicy="no-referrer" />

        <link rel="stylesheet" href="style.css">

    </head>

    <body>
        <div class="container h-100">
            <div class="row pt-5">
                <div class="col-12 col-lg-6 mx-auto">
                    <h2>Dependent Dropdown</h2>
                    <br>
                    <label for="countries" class="form-label fs-5">Country:</label>
                    <select name="countries" id="countries" class="form-select">
                        <option value="">--Select Country--</option>
                    </select> <br>
                    <label for="states" class="form-label fs-5">State:</label>
                    <select name="states" id="states" class="form-select" disabled="true">
                        <option value="">--Select State--</option>
                    </select> <br>
                    <label for="cities" class="form-label fs-5">City:</label>
                    <select name="cities" id="cities" class="form-select" disabled="true">
                        <option value="">--Select City--</option>
                    </select>
                </div>
            </div>
        </div>

        <script src="response_data.js"></script>

    </body>

</html>