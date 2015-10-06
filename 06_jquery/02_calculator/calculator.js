function recalculate() {
	var sum = 0;
  _.each($("#tab tbody tr"), function(row) {
    var $el = $(row);
		var unitPrice = parseInt($el.find(".unit-price").val(), 10);
		var qty = parseInt($el.find(".qty").val());
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
	});

	$('#del').click(function() {
		if (confirm("정말 삭제하시겠습니까?")) {
			var $els = $("tr input[type='checkbox']:checked");
      _.each($els, function(el) {
        $(el).parents("tr").empty();
      });
			recalculate();
		}
	});

	$('#add').click();
}
