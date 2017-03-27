// search page

$(document).ready(function() {
    $.getJSON("search/search.json", function(data) {
        var searchIndex = getIndex(data);
        var contents = getDocsList(data);
        displayResults(searchIndex, contents);
    });
});

function getIndex(data) {
    var searchIndex = lunr.Index.load(data.index);
    return searchIndex;
}

function getDocsList(data) {
    var contents = data.docs;
    return contents;
}

function displayResults(searchIndex, contents) {
    var queryParams = getQueryParams(document.location.search);
    var searchQuery = queryParams['search'];
    var loader = $('[data-search-loading]');
    var resultsIntro = $('[data-search-intro]');
    var resultsNoResults = $('[data-search-no-results]');
    var resultsItem = $('[data-search-item]');
    var resultsMessage = $('[data-results-message]');
    var resultsTotal = resultsMessage.find('[data-search-number]');
    var resultsTerm = $('[data-search-term]');
    var results = searchIndex.search(searchQuery);
    var resultsElem = $('[data-results]');
    var resultSample = $('[data-results-sample]');
    var resultSuggestions = $('[data-search-suggestions]');

    if (jQuery.isEmptyObject(queryParams) || results.length === 0) {
        resultsTerm.text(searchQuery);
        resultsIntro.addClass('hidden');
        resultsMessage.removeClass('hidden');
        resultsNoResults.removeClass('hidden');
        resultSuggestions.removeClass('hidden');
        loader.addClass('hidden');
        return false;
    }

    if (results.length) {
        for (var i = 0; i < results.length; i++) {
            var resultId = results[i].ref;
            var resultSampleClone = resultSample.clone(true);
            var resultSampleImg = resultSampleClone.find('[data-results-sample-img]');
            var resultSampleLink = resultSampleClone.find('[data-results-sample-link]');
            var resultSampleTitle = resultSampleClone.find('[data-results-sample-title]');
            var resultSampleDate = resultSampleClone.find('[data-results-sample-date]');

            resultSampleClone.removeAttr('data-results-sample');
            resultSampleTitle.text(contents[resultId]['title']);
            resultSampleDate.text(contents[resultId]['date']);
            resultSampleLink.attr('href', contents[resultId]['slug'].toLowerCase() + '.html');
            resultSampleImg.attr('src', '/images/' + contents[resultId]['slug'] + '/cover.jpg');
            resultsElem.append(resultSampleClone);
            loader.addClass('hidden');
            resultSampleClone.removeClass('hidden');
            resultsMessage.removeClass('hidden');
        }

        if(results.length === 1) {
            resultsItem.text('result');
        }

        resultSample.remove();
        resultsElem.removeClass('hidden');
    }

    resultsTotal.text(results.length);
    resultsTerm.text(searchQuery);
    resultsMessage.removeClass('hidden');
    loader.addClass('hidden');
}

function getQueryParams(querystring) {
    querystring = querystring.split("+").join(" ");
    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;
    while (tokens = re.exec(querystring)) {
        params[decodeURIComponent(tokens[1])]
            = decodeURIComponent(tokens[2]);
    }
    return params;
}
