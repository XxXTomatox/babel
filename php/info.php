<?php
    if ($_GET['filtro']) {
        echo json_encode(['1',[$_GET['filtro'],"otros datos"]]);
    }else{
        echo json_encode(['1',[$_GET['usuario'],$_GET['pass']]]);
    }
?>