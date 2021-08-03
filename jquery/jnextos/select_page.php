<?php

function _log($text) 
{
    openlog("phperrors", LOG_PID | LOG_PERROR);
    syslog(LOG_ERR, $text);
    closelog();
}


_log("test_log");

var_dump($_POST);
print("sleep in 5 seconds ...");
sleep(5);
