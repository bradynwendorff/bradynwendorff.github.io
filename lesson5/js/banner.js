<?PHP
if (date('l') == 'Saturday' || date('l') == 'Sunday')){
   echo 'Lorem ipsum';
}else{ //it's a weekday
   if (intval(date('H')) < 8){
     echo 'Lorem ipsum';
   }elseif(/* another expression */){
     echo "something else..
   }
}