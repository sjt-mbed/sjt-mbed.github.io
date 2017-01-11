jQuery(function($) {
  var $bodyEl = $('body'),
      $sidedrawerEl = $('#sidedrawer');


  // ==========================================================================
  // Toggle Sidedrawer
  // ==========================================================================
  function showSidedrawer() {
    // show overlay
    var options = {
      onclose: function() {
        $sidedrawerEl
          .removeClass('active')
          .appendTo(document.body);
      }
    };

    var $overlayEl = $(mui.overlay('on', options));

    // show element
    $sidedrawerEl.appendTo($overlayEl);
    setTimeout(function() {
      $sidedrawerEl.addClass('active');
    }, 20);
  }


  function hideSidedrawer() {
    $bodyEl.toggleClass('hide-sidedrawer');
  }


  $('.js-show-sidedrawer').on('click', showSidedrawer);
  $('.js-hide-sidedrawer').on('click', hideSidedrawer);
  //$(".sideMenuItem").on('click', hideSidedrawer);


  // ==========================================================================
  // Animate menu
  // ==========================================================================
  var $titleEls = $('strong', $sidedrawerEl);

  $titleEls
    .next()
    .hide();

  $titleEls.on('click', function() {
    $(this).next().slideToggle(200);
  });
//==============
// Templating logic
//================
  var page = 1;
  var resultsPerPage = 30;
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

  $("#LoPay, #LoDo, #ToCo").click(function () {
    var searchResultsFilename = "static/" + this.value + ".txt";
    //console.log(searchResultsFilename);
    renderSearchResults(searchResultsFilename);
  });

  $("#PerformSearch").click(function () {
      renderSearchResults("static/searchResults.txt");
  });

  $("[data-action='next']").click(function () {
      displayPage(page + 1);
  });

  $("[data-action='prev']").click(function () {
      displayPage(page - 1);
  });
  function renderSearchResults(source) {
    $.get(source, function (response) {
        data = response
        displayPage(1);
    }, "json");
  }

  function displayPage(pageNo) {
      $("#ResultsDisplay div").loadTemplate("static/SearchResult.html", data, {
        paged: true, pageNo: pageNo, elemPerPage: resultsPerPage,
          success: function() { console.log('success');},
          complete: function(){ console.log('complete')},
          error: function(){ console.log('error');}
        });
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
  renderSearchResults("static/searchResults.txt");
});
