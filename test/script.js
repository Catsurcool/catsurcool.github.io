var ta1 = document.getElementById('ta1');
var ta2 = document.getElementById('ta2');

var engStr = ''

function toD() {

}

var dovahWords = [
  'ree',
  'ree2',
  'ree3'
]

function toE() {
  var words = ta2.value.split(' ');
  console.log(words);
  words.forEach(
    function (element) {
      engStr += element;
    }
  );
  // dFP = '<textarea id="englishText" class="input" style="width:99%; font-family:Palatino Linotype, Book Antiqua, Palatino, serif;" maxlength="500" cols="30" rows="10" value="">' + engStr + '</textarea>'
  document.getElementById('ta1space').innerHTML = '<textarea rows="8" cols="80" id="ta1" class="dragon" placeholder="Text to translate into English" style="margin-top: -20px;" spellcheck="false" value="">' + engStr + '</textarea>';
  // console.log(engStr)
}
// ree ree2 ree3
function dovahWordFinder() {

}

// var mySubString = ta2.value.substring(
//     ta2.value.lastIndexOf(":") + 1,
//     ta2.value.lastIndexOf(";")
// );



//var allElements = document.querySelectorAll('*'); attr(); function attr() { var allElements = document.querySelectorAll('*'); var tag = prompt('Tag of object: '); var val = prompt('Value of tag: '); allElements.forEach(function(element){ element.style[tag] = val; }); void 0; }
