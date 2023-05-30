<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link rel="stylesheet" href="../css/common.css">
	<link rel="stylesheet" href="../css/product_item.css">
	<script src = "/node_modules/@glidejs/glide/dist/glide.min.js"></script>
	<script src = "../js/script.js"></script>
</head>
<body>

	<? require_once('../php/nav.php');?>

<div class = "wrapper">

	<section class="product-item">
		
		<div class = "product-pics">
			<div class="glide">
				<div class="glide__track" data-glide-el="track">
					<div class="glide-w">
						<div class = "glide__item">
							<img src="../images/products/1/1.jpg" alt="" class = "glide__item-pic">
						</div>
						<div class = "glide__item">
							<img src="../images/products/1/2.jpg" alt="" class = "glide__item-pic">
						</div>
						<div class = "glide__item">
							<img src="../images/products/1/3.jpg" alt="" class = "glide__item-pic">
						</div>
						<div class = "glide__item">
							<img src="../images/products/1/4.jpg" alt="" class = "glide__item-pic">
						</div>
					</div>
					<div class="glide__arrows" data-glide-el="controls">
						<button class="glide__arrow glide__arrow--left product-pics-arrow product-pics-left" data-glide-dir="<"></button>
						<button class="glide__arrow glide__arrow--right product-pics-arrow product-pics-right" data-glide-dir=">"></button>
					</div>
				</div>
			</div>
			<div class = "product-icons">
				<div class="product-icons-ins">
					<button class="product-icon-item active" data-glide-dir="=0"  style = "background-image: url('../images/products/1/1.jpg');"></button>
					<button class="product-icon-item" data-glide-dir="=1" style = "background-image: url('../images/products/1/2.jpg');"></button>
					<button class="product-icon-item" data-glide-dir="=2" style = "background-image: url('../images/products/1/3.jpg');"></button>
					<button class="product-icon-item" data-glide-dir="=3" style = "background-image: url('../images/products/1/4.jpg');"></button>
				</div>
			</div>
		</div>
		<div class = "product-description">
			<h2 class="main-h2">Кофе Arabica Lavazza 1 кг</h2>
		</div>
	</section>
</div>

	<? require_once('../php/footer.php');?>

</body>
</html>