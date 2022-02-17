$(document).ready(function() {
    console.log('doc ready');

     //----- Create div element and append to body ----//
     $('body').append($('<div>'));
      //----- Create ul element and append to body ----//
     $('body').append($('<ul class="list">'));

//--- Set initial button state as disabled --- //
    $('#btnSubmit').prop('disabled', true);

    //--- Add keyup event to enable btn when there is text in form ---//
    $('.inputTxt').keyup(function(){
        if ($('.inputTxt').val != ' ') {
            $('#btnSubmit').prop('disabled', false);} 
     });

     $('#btnSubmit').click(function(e){
         e.preventDefault();
         if ($('.inputTxt').val() !== ' ') {
            $('.list').append(`<li>${$('.inputTxt').val()}</li>`);
            $('.inputTxt').val(' ');
//------Create random bg color function ----------//
            function getRandColor() {
                let r = Math.floor(Math.random() * 256);
                let b = Math.floor(Math.random() * 256);
                let g = Math.floor(Math.random() * 256);

                let bgColor = "rgb(" + r + "," + b + "," + g + ")";
                return bgColor;
            }
//------Create random border function ----------//
            // function getRandBorder(){
            //     let randomBord = Math.floor(Math.random() * 40);

            //     let border = randomBord + 'px';
            //     return border;
            // }
        //-----Click event on list item -------//
            $('li').click(function(e){
                let randomBGColor = getRandColor();
                // let randomBorderRad = getRandBorder();

                $(e.target).css('background-color', randomBGColor,);
            })

            //------Doubleclick event on list to delete -----//
            $('li').dblclick(function(e){
                $(e.target).remove();
            });
         };
     });
});

