<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link rel="stylesheet" href="../css/common.css">
	<link rel="stylesheet" href="../css/product_item.css">
	<script src = "/node_modules/glidejs/dist/glide.min.js">
	<script src = "script.js"></script>
</head>
<body>

<div class = "wrapper">

	<? require_once('../php/nav.php');?>

	<section class="product-item">
		
		<div class = "product-pics">
			<div class="glide">
			  <div class="glide__track" data-glide-el="track">
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
			</div>
			<div class = "product-icons">
				<div class = "product-icons-ins">
					<div class = "product-icon-item" style = "background-image: url('../images/products/1/1.jpg');"></div>
					<div class = "product-icon-item" style = "background-image: url('../images/products/1/2.jpg');"></div>
					<div class = "product-icon-item" style = "background-image: url('../images/products/1/3.jpg');"></div>
					<div class = "product-icon-item" style = "background-image: url('../images/products/1/4.jpg');"></div>
				</div>
			</div>
		</div>
		<div class = "prooduct-description">
		</div>
	</section>


</div>

	<? require_once('../php/footer.php');?>

	
</body>
</html>