player1_name = localStorage.getitem("player1_name") ;
player2_name = localStorage.getitem("player2_name") ;
player1_score = 0;
player2_score = 0;

document.getElementByid("player1_name").innerHTML = player1_name + "j";
document.getElementByid("player1_name").innerHTML = player1_name + "j";
document.getElementByid("player1_score").innerHTML = player1_score;
document.getElementByid("player1_score").innerHTML = player1_score;
document.getElementByid("player_question").innerHTML = "turno para pregeuntar - " + player1_name;
document.getElementByid("player_answer").innerHTML = "turno para responder - " + player2_name;

function send(){
  get_word = document.getElementByid("word").value;
  word = get_word.toLowerCase();
  charAT= word.charAT(1);
  legth_divide_2= Math.floor(word.length/2);
  charAT2= word.charAT(legth_divide_2);
  length_minus_1= word.length - 1;
  charAT3= word.charAT(length_minus_1);
    
  remove_charAT= word.replce(charAT,"_");
  remove_charAT2= remove_charAT.replace(charAT2,"_");  
  remove_charAT3= remove_charAT2.replace(charAT3,"_");  


  question_word = "<h4 id='word_display'> P. "+remove_charAt3+"</h4>";
    input_box = "<br>Respuesta : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Comprobar</button>";
    row =  question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";


  
}