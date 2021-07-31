<?php

function mime_encode($str, $charset)
{
    $str_charset_enc = mb_convert_encoding($str, $charset, "UTF-8");
    $str_base64_enc = base64_encode($str_charset_enc);
    $str_mime_enc = "=?" .$charset . "?B?" . $str_base64_enc . "?=";
    return $str_mime_enc;
}

function mail_attachment($filename, $path, $mailto, $from_mail,
                         $from_name, $replyto, $subject, $message) 
{
    $charset = "EUC-JP";

    $file = $path . $filename;

    $attach_fn = "添付ファイル名.zip";
    $enc_fn = mb_convert_encoding($attach_fn, $charset, "UTF-8");

    $enc_base64 = base64_encode($enc_fn);

    $content_type_name = mime_encode($attach_fn, $charset);
    $content_disposition_fn = $content_type_name;

    $subject_mime = mime_encode($subject, $charset);
    $from_name_enc = mime_encode($from_name,  $charset);

    $msg_enc = mb_convert_encoding($message, $charset, "UTF-8");

    /* make data attach */
    $file_size = filesize($file);
    $handle = fopen($file, "r");
    $content = fread($handle, $file_size);
    fclose($handle);
    $content = chunk_split(base64_encode($content));

    $uid = md5(uniqid(time()));

    $header = "From: ". $from_name_enc . " <".$from_mail.">\r\n";
    $header .= "Reply-To: " . $replyto . "\r\n";
    $header .= "MIME-Version: 1.0\r\n";
    $header .= "Content-Type: multipart/mixed; boundary=\"".$uid."\"\r\n\r\n";
    $header .= "This is a multi-part message in MIME format.\r\n";
    $header .= "--".$uid."\r\n";
    $header .= "Content-type:text/plain; charset=$charset\r\n";
    $header .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $header .= $msg_enc."\r\n\r\n";

    $header .= "--".$uid."\r\n";
    $header .= "Content-Type: application/octet-stream; charset=$charset; name=\"" . $content_type_name . "\"\r\n";
    $header .= "Content-Transfer-Encoding: base64\r\n";
    $header .= "Content-Disposition: attachment; filename=\"" . $content_disposition_fn . "\"\r\n\r\n";
    $header .= $content."\r\n\r\n";
    $header .= "--".$uid."--";

    if (mail($mailto, $subject_mime, "", $header)) {
        echo "mail send ... OK"; // or use booleans here
    } else {
        echo "mail send ... ERROR!";
    }

}

$my_file = "testfile.zip";
$my_path = "attach/";

$my_name = "テストユーザ";
$my_mail = "dung@example.com";
$my_replyto = "user1@example.com";
$my_subject = "テスト件名";
$my_message = "テスト本文1です。\r\nテスト本文2です。\r\n\r\n";
mail_attachment($my_file, $my_path, $my_replyto, $my_mail, $my_name, $my_replyto, $my_subject, $my_message);

?>
