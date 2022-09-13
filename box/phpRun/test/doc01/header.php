<?
$title = 'soocha page';
$address = 'Busan, JinGu, BujeonDong Greencomputer';
$tel  = '051-234-1251';
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $title ?></title>
    <style>
        a {
            text-decoration:none;
            color: inherit;

        }
        li.on a {
            color : #f00;
        }
    </style>
</head>
<body>
    <div class="Wrap">
        <header class="Header">
            <nav>
                <ul>
                    <li><a href="sub01.php">menu01</a></li>
                    <li><a href="sub02.php">menu02</a></li>
                    <li><a href="sub03.php">menu03</a></li>
                    <li><a href="sub04.php">menu04</a></li>
                    <li><a href="sub05.php">menu05</a></li>
                </ul>  
            </nav>
        </header>  
