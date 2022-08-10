<footer class="Footer">
    <div class="container">
        <div class="logo">
            <img src="./img/logo02.png" alt="">
        </div>
        <address>
            address
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