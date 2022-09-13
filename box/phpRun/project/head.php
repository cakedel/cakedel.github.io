<? include 'head.sub.php'; ?>
<div class="SubPage">
    <div class="SubMain">
        <div class="container">
            <div class="subSlogan">
                <?= $eSlogan ?>
            </div>
            <div class="subTitle">
                <?= $subTitle ?>
            </div>
        </div>
    </div>
    <style>
        .SubMain {
            background: url(./img/product0<?= $subNum ?>.jpg) no-repeat center center/cover;
        }
    </style>
    <div class="SubContent">
        <div class="container">
            <aside>
                <div class="Lnb">
                    <!-- Local navigation bar -->
                    <? include 'nav.php' ?>
                </div>
            </aside>
            <article>