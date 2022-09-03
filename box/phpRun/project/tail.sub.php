<footer class="Footer">
    <div class="container">
        <div class="logo">
            <img src="./img/logo02.png" alt="">
        </div>
        <address>
            <ul>
                <li>주소 : <?= $cAdress ?></li>
                <li>대표 : <?= $cCeo ?></li>
                <li>사업자등록번호 : <?= $cNum ?></li>
                <li>전화 :
                    <a href="tel:<?= $tel ?>"><?= $tel ?></a>
                </li>
                <li>이메일 :
                    <a href="mailto:<?= $email ?>"><?= $email ?></a>
                </li>
            </ul>
            <div class="copyright">
                &copy; <?= $company ?> all rights reserved.
            </div>
        </address>
    </div>
</footer>
</div>
<script src="./js/jquery-1.12.4.min.js"></script>
<script src="./js/slick.min.js"></script>
<script src="./js/main.js"></script>
<script>
    var pageNum = <?= $subNum ?>;
    $('.Lnb li').eq(pageNum - 1).addClass('on')
</script>
</body>

</html>