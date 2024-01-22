<?php
//$logFile = 'formdata.log';
//$logHandle = fopen($logFile, 'a') or die('Не удалось открыть лог-файл');
//
//$dataToLog = $_POST['name'] . ' - ' . $_POST['site'] . "\n";
//fwrite($logHandle, $dataToLog);
//
//fclose($logHandle);


if (isset($_POST)) {
    print("Имя: " . $_POST['name']);
    print("<br>Сайт: " . $_POST['site']);
    print("<br>Телефон: " . $_POST['phone']);
}
?>