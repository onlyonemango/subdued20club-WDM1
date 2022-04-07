$(document).ready(function(){
var $filterCheckboxes = $('input[type="checkbox"]');
  
  
var filterFunc = function() {
  
  var selectedFilters = {};

  $filterCheckboxes.filter(':checked').each(function() {

    if (!selectedFilters.hasOwnProperty(this.name)) {
      selectedFilters[this.name] = [];
    }

    selectedFilters[this.name].push(this.value);
  });


  var $filteredResults = $('.mobile');


  $.each(selectedFilters, function(name, filterValues) {


    $filteredResults = $filteredResults.filter(function() {

      var matched = false,
        currentFilterValues = $(this).data('category').split(' ');

 
      $.each(currentFilterValues, function(_, currentFilterValue) {

  

        if ($.inArray(currentFilterValue, filterValues) != -1) {
          matched = true;
          return false;
        }
      });

  
      return matched;

    });
  });

  $('.mobile').hide().filter($filteredResults).show();
}


$(".clear").click(function(){
 $('input[type=checkbox]').prop('checked',false);
   $('.mobile').show();
});

$filterCheckboxes.on('change', filterFunc);  

});