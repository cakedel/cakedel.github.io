<footer class="Footer">
    &copy <?= $title ?> <?= $address ?> <?= $tel ?>
</footer>
</div>
<script src="https://code.jquery.com/jquery-1.12.4.js"></script> 
<script>
    var num = <?= $num ?>;
    $('nav li').eq(num-1).addClass('on')
</script>
</body>
</html>