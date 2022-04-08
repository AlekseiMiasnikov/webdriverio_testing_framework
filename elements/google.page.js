class GoogleElements {
    get search_input() {
        return $('input[name="q"]');
    }

    get result_stats() {
        return $('div#result-stats');
    }
}

export default new GoogleElements();