$("#slideshow>div:gt(0)").hide()

setInterval(function(){
  $('#slideshow>div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow')

},3000);



$(document).ready(function(){
        $('#flip').click(function(){
          $('#panel').slideDown("slow")
        
        })
        $("#flip").click(function(){
          $('#panel').hide()
          
        })
        
      })