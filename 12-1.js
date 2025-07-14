function stringToArray(s) {
    return s.match(/[\s\S]/ug) || [];
}

stringToArray("모던 자바스크립트 입문");
