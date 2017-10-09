"use strict";

function recalculate() {
  var sum = 0;
  $("#tab tbody tr").each(function(idx, row) {
    var $el = $(row);
    var unitPrice = parseInt($el.find(".unit-price").val(), 10);
    var qty = parseInt($el.find(".qty").val(), 10);
    if (!isNaN(unitPrice) && !isNaN(qty) ) {
      var price = unitPrice * qty;
      $el.find(".price").text(price);
      sum = sum + price;
    }
  });
  $("#sum").text(sum);
}

function initCalculator() {
  $('#add').click(function() {
    $("#tab tbody").append($('#rowTemplate').html());
    $("#tab tbody > tr:last-child .unit-price").change(recalculate);
    $("#tab tbody > tr:last-child .qty").change(recalculate);
  });
  $('#del').click(function() {
    if (confirm("정말 삭제하시겠습니까?")) {
      var $els = $("tr input[type='checkbox']:checked");
      $els.each(function(idx, el) {
        $(el).parents("tr").empty();
      });
      recalculate();
    }
  });
  $('#add').click();
}

