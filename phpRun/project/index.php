<? include 'head.sub.php' ?>
<main>
    <section class="MainVisual">
        <div class="mainSlider">
            <figure class="itm01"></figure>
            <figure class="itm02"></figure>
            <figure class="itm03"></figure>
            <figure class="itm04"></figure>
        </div>
        <div class="slogan">
            <h2><?= $slogan ?></h2>
            <p><?= $eSlogan ?></p>
        </div>
    </section>
    <section class="Customer">
        <ul class="container">
            <h3>news &amp; notice <small><a href="">more </a><i class="xi-angle-right"></i></small></h3>
            <ul>
                <li><a href=""><?= $slogan ?></a><span>2022.12.25</span></li>
                <li><a href=""><?= $slogan ?></a><span>2022.12.25</span></li>
                <li><a href=""><?= $slogan ?></a><span>2022.12.25</span></li>
                <li><a href=""><?= $slogan ?></a><span>2022.12.25</span></li>
            </ul>
            <li>
                <div class="ProductSlider">
                    <figure>
                        <img src="./img/p01.jpg" alt="">
                    </figure>
                    <figure>
                        <img src="./img/p02.jpg" alt="">
                    </figure>
                    <figure>
                        <img src="./img/p03.jpg" alt="">
                    </figure>
                </div>
                <div class="produtArrows">
                    <i class="xi-angle-left"></i>
                    <i class="xi-angle-right"></i>
                </div>
            </li>
            <li>
                <div class="customerDetail">
                    <h3>customer support</h3>
                    <p>열린 우리 서비스 훌륭합니다 최고</p>
                    <div class="tel">
                        <a href="tel:<?= $tel ?>"><?= $tel ?></a>
                    </div>
                    <div class="email">
                        <a href="mailto:<?= $email ?>"><?= $email ?></a>
                    </div>
                </div>
            </li>
        </ul>
    </section>
</main>
<? include 'tail.sub.php' ?>