<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link rel="stylesheet" href="../css/common.css">
	<link rel="stylesheet" href="../css/cart.css">
	<script src = "../js/script.js"></script>
</head>
<body>

<div class = "wrapper">

	<? require_once('php/nav.php');?>

	<h1 class = "main-h1">Корзина</h1>

	<section class = "cart-section">

		<div class="cart-wrapper">

			<div class = "cart-item">
				<div class = "cart-id">2</div>
				<div class = "cart-pic">2</div>
				<div class = "cart-title">1</div>
				<div class = "cart-weight">4</div>
				<div class = "cart-amount">5</div>
				<div class = "cart-plus">2</div>
				<div class = "cart-remove">
					<div class = "cart-close" title = "Удалить"></div>
				</div>
			</div>

			<div class = "cart-item">
				<div class = "cart-id">2</div>
				<div class = "cart-pic">2</div>
				<div class = "cart-title">1</div>
				<div class = "cart-weight">4</div>
				<div class = "cart-amount">5</div>
				<div class = "cart-plus">2</div>
				<div class = "cart-remove">
					<div class = "cart-close" title = "Удалить"></div>
				</div>
			</div>	

			<div class = "cart-item-final">
				<div class = "cart-item-info">Итого: </div>
			</div>
		</div>

	</section>

</div>

	<? require_once('php/footer.php');?>

</body>
</html>