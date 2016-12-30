var lhtemplate = function () {
    var page = 1;
    var resultsPerPage = 10;
    var data = [];
    $.addTemplateFormatter({
        currency: function (value, template) {
            switch (template) {
                case "en":
                    return "&pound;" + value;
                default:
                    return value;
            }
        },
        tags: function (value, template) {
            return value.join(", ");
        },
        coordinates: function (value) {
            return value.latitude + ", " + value.longitude;
        },
        productLink: function (value) {
            return "Products/" + value;
        }
    });

    $("#PerformSearch").click(function () {
        $.get("searchResults.txt", function (response) {
            data = response
            displayPage(1);
        }, "json");
    });

    $("[data-action='next']").click(function () {
        displayPage(page + 1);
    });

    $("[data-action='prev']").click(function () {
        displayPage(page - 1);
    });

    function displayPage(pageNo) {
        $("#ResultsDisplay tbody").loadTemplate("ExampleSearchResults/Templates/SearchResult.html", data, {paged: true, pageNo: pageNo, elemPerPage: resultsPerPage, success: function() {console.log('success');}, complete: function(){console.log('complete')}, error: function(){console.log('error');}});
        page = pageNo;
        if (page * resultsPerPage > data.length) {
            $("[data-action='next']").attr('disabled', 'disabled');
        } else {
            $("[data-action='next']").removeAttr('disabled');
        }
        if (page <= 1) {
            $("[data-action='prev']").attr('disabled', 'disabled');
        } else {
            $("[data-action='prev']").removeAttr('disabled');
        }
        $("#ResultsDisplay").show();
        $("#ResultsPaging").show();
    }
};
