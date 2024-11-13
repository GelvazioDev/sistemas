<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>jQuery DataTable Tutorial With Bootstrap</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="css/dataTables.bootstrap.min.css">
</head>
<body>
    <div class="container" style="margin-top: 20px">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <table class="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Country Name</td>
                            <td>Country Code</td>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                            $conn = new mysqli('localhost', 'root', '', 'jQueryDataTable');

                            $sql = $conn->query('SELECT * FROM country');
                            while($data = $sql->fetch_array()) {
                                echo '
                                    <tr>
                                        <td>'.$data['id'].'</td>
                                        <td>'.$data['name'].'</td>
                                        <td>'.$data['countryCode'].'</td>
                                    </tr>
                                ';
                            }
                        ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <script
            src="http://code.jquery.com/jquery-3.2.1.min.js"
            integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
            crossorigin="anonymous"></script>
    <script type="text/javascript" src="js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="js/dataTables.bootstrap.min.js"></script>
    <script type="text/javascript">
        $(document).ready(function() {
            $(".table").DataTable({
                "ordering": true,
                "searching": true,
                "paging": true,
                "columnDefs": [
                    // remove a pesquisa do primeiro campo que é o id
                    {
                        "targets": 0,
                        "searchable": false,
                        // habilita a visualização
                        "visible": true
                    }
                ],
                "order": [[2, "desc"]]
            });
        });
    </script>
</body>
</html>
