const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


var moveSlider = false;
$(document).ready(function(){
    $(".ba-Slider").each(function(i){
        $(this).children(".slider").mousedown(function(){
             moveSlider = true;
            $(this).parent().children("#before").removeClass("ease");
            $(this).removeClass("ease");
        });
        $(this).children(".slider").mouseup(function(){
            moveSlider = false;
            $(this).parent().children("#before").addClass("ease");
            $(this).addClass("ease");
            var minmax = $(this).parent().width() / 8;
            if($(this).parent().children("#before").width() > $(this).parent().width() - minmax){
                $(this).parent().children("#before").width("100%");
                var sOffset = $(this).parent().width() - 16.5;
                $(this).css("left", sOffset);
            }else if($(this).parent().children("#before").width() < minmax){
                $(this).parent().children("#before").width(0);
                var sOffset = -16.5;
                $(this).css("left", sOffset);
             }

        });

        $(this).mouseup(function(){
            moveSlider = false;
            $(this).children("#before").addClass("ease");
            $(this).children(".slider").addClass("ease");
            var minmax = $(this).width() / 8;
            if($(this).children("#before").width() > $(this).width() - minmax){
                $(this).children("#before").width("100%");
                var sOffset = $(this).width() - 16.5;
                $(this).children(".slider").css("left", sOffset);
            }else if($(this).children("#before").width() < minmax){
                $(this).children("#before").width(0);
                var sOffset = -16.5;
                $(this).children(".slider").css("left", sOffset);
             }


        });
        $(this).mousemove(function(e){
            if(moveSlider == true){
                var pOffset = $(this).offset();
                var mouseX = e.pageX - pOffset.left;
                $(this).children("#before").width(mouseX - 0.5);
                var sOffset = mouseX - 16.5;
                $(this).children(".slider").css("left", sOffset);
            }

        });
    });
});





    var moveSlider = false;
    $(document).ready(function(){
        $(".ba-Slider").each(function(i){
            $(this).children(".slider").touchend(function(){
                 moveSlider = true;
                $(this).parent().children("#before").removeClass("ease");
                $(this).removeClass("ease");
            });
            $(this).children(".slider").touchestart(function(){
                moveSlider = false;
                $(this).parent().children("#before").addClass("ease");
                $(this).addClass("ease");
                var minmax = $(this).parent().width() / 8;
                if($(this).parent().children("#before").width() > $(this).parent().width() - minmax){
                    $(this).parent().children("#before").width("100%");
                    var sOffset = $(this).parent().width() - 16.5;
                    $(this).css("left", sOffset);
                }else if($(this).parent().children("#before").width() < minmax){
                    $(this).parent().children("#before").width(0);
                    var sOffset = -16.5;
                    $(this).css("left", sOffset);
                 }

            });

            $(this).touchestart(function(){
                moveSlider = false;
                $(this).children("#before").addClass("ease");
                $(this).children(".slider").addClass("ease");
                var minmax = $(this).width() / 8;
                if($(this).children("#before").width() > $(this).width() - minmax){
                    $(this).children("#before").width("100%");
                    var sOffset = $(this).width() - 16.5;
                    $(this).children(".slider").css("left", sOffset);
                }else if($(this).children("#before").width() < minmax){
                    $(this).children("#before").width(0);
                    var sOffset = -16.5;
                    $(this).children(".slider").css("left", sOffset);
                 }


            });
            $(this).touchmove(function(e){
                if(moveSlider == true){
                    var pOffset = $(this).offset();
                    var mouseX = e.pageX - pOffset.left;
                    $(this).children("#before").width(mouseX - 0.5);
                    var sOffset = mouseX - 16.5;
                    $(this).children(".slider").css("left", sOffset);
                }

            });
        });
});
