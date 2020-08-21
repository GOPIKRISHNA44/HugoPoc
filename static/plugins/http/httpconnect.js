function makePostCall(url)
{
    $.get(url,function(data,status){
        console.table(data.data);
        var arr=data.data;
        $("#titleid").html( arr[Math.floor(Math.random() * arr.length)]["employee_name"]);
    })
}


function deselect(e) {
    $('.pop').slideFadeToggle(function() {
      e.removeClass('selected');
    });    
  }
  
  $(function() {
    $('#contact').on('click', function() {
      if($(this).hasClass('selected')) {
        deselect($(this));               
      } else {
        $(this).addClass('selected');
        $('.pop').slideFadeToggle();
      }
      return false;
    });
  
    $('.close').on('click', function() {
      deselect($('#contact'));
      return false;
    });
  });
  
  $.fn.slideFadeToggle = function(easing, callback) {
    return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
  };