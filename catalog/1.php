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

			<div class = "product-accessibility">
				<span class = "accessibility-span">Доступность товара:</span>
				<div class = "accessibility-div">
					<svg aria-hidden="true" class = "accessibility-svg">
                        <circle cx="7.5" cy="7.5" r="7.5" fill="rgb(62,214,96, 0.3)"/>
                        <circle cx="7.5" cy="7.5" r="5" stroke="rgb(255, 255, 255)" stroke-width="1" fill="rgb(62,214,96)"/>
                    </svg>
					<span>В наличии</span>
				</div>
			</div>

			<p class = "product-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ratione, 
				doloremque cupiditate, eaque rem sint explicabo vero quos est veniam tenetur
				 provident numquam consequatur! Id impedit temporibus doloribus ex nisi!
			</p>

			<p class = "product-volume">
				<span>Объем</span>
				<div class = "volume-variants">
					<div class="volume-item volume-item-disable volume-item-250">250 г</div>
					<div class="volume-item volume-item-available volume-item-500">500 г</div>
					<div class="volume-item volume-item-available active volume-item-active volume-item-1000">1000 г</div>
				</div>
			</p>

			<div class="product-amount">
				<span class="product-span">Количество:</span>
				<div class="amount-select">
					<div class = "amount-select-minus">—</div>
					<input class = "amount-select-value" value = "3" />
					<div class = "amount-select-plus">+</div>
				</div>
			</div>
		</div>
	</section>
</div>

	<? require_once('../php/footer.php');?>

</body>
</html>