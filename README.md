<!DOCTYPE html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Tip Calculator</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="../assets/css/all.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
</head>

<body>
    <i class="fas fa-money-bill-wave"></i>
    <h1>Tip Calculator</h1>
    <p>Enter bill total and tip percent</p>
    <form id="tip-form">
        <h3>Bill</h3>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text">$</span>
            </div>
            <input type="number" class="form-control" id="bill" min="0" placeholder="0" data-type="currency">
        </div>
        <h3>Tip</h3>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text">%</span>
            </div>
            <input type="number" class="form-control" id="tip" min="0" placeholder="0">
        </div>
    </form>
    <hr>
    <div class="total">
        <div class="tip-total amount">
            <h4>Tip total</h4>
            <p id="tip-amount">$0.00</p>
        </div>
        <div class="bill-total amount">
            <h4>Bill total</h4>
            <p id="bill-total">$0.00</p>
        </div>
    </div>
    <script src="script.js"></script>
</body>

</html>