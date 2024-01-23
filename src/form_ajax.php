<?php
if (isset($_POST)) {
    print("Имя: " . $_POST['name']);
    print("<br>Сайт: " . $_POST['site']);
    print("<br>Телефон: " . $_POST['phone']);
}
?>
