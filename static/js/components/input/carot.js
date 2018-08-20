import $ from "Jquery"

export function caretCreator(){


  $("input").on('change blur mouseup focus keydown', function(evt) { // change to id later
    var $el = $(evt.target);
    $el.css("padding-top","35px")
    // $el.css("height") = "100px"
    //check if the carret can be hidden
    //AFAIK from the modern mainstream browsers
    //only Safari doesn't support caret-color
    if (!$el.css("caret-color")) return;

    var caretIndex = $el[0].selectionStart;
    var textBeforeCarret = $el.val().substring(0, caretIndex);

    var bgr = getBackgroundStyle($el, textBeforeCarret);

    $el.css("background", bgr);
    clearInterval(window.blinkInterval);
    //just an examplethis should be in a module scope, not on window level
    window.blinkInterval = setInterval(blink, 600);
  })

  //$('input').focus().select()

  $("input").on('keyup', function(evt){
    $('.listDiv').css("visibility","visible");
    //$("input").attr("placeholder","")
  })



  function blink() {
    $("input").each((index, el) => {
      var $el = $(el);
      if ($el.css("background-blend-mode") != "normal") {
        $el.css("background-blend-mode", "normal");
      } else {
        $el.css("background-blend-mode", "color-burn");
      }
    });
  }


  function getBackgroundStyle($el, text) {
    var fontSize = $el.css("font-size");
    var fontFamily = $el.css("font-family");

    var font = fontSize + " " + fontFamily;
    var canvas = $el.data("carretCanvas");
    //cache the canvas for performance reasons
    //it is a good idea to invalidate if the input size changes because of the browser text resize/zoom)
    if (canvas == null) {
      canvas = document.createElement("canvas");
      $el.data("carretCanvas", canvas);
      var ctx = canvas.getContext("2d");
      ctx.height = 50;
      ctx.width = 10;
      ctx.font = font;
      ctx.strokeStyle = $el.css("color");
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, 43);
      ctx.lineTo(7, 53);
      ctx.lineTo(0, 63);
      //aproximate width of the caret
      ctx.lineTo(0, 80);
      ctx.stroke();
    }

    var offsetLeft = canvas.getContext("2d").measureText(text).width + parseInt($el.css("padding-left"));

    return "#fff url(" + canvas.toDataURL() + ") no-repeat "
    +
    (offsetLeft - $el.scrollLeft()+30)+ "px "
    +
    "0"
    // ($el.height() + parseInt($el.css("padding-top"))) + "px";
  }



}
