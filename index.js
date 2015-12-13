/* jshint: esnext: true */
'use strict';

const people = {
    'Gemma': 'gemgem99@hotmail.co.uk',
    'Patrick': 'patrickhamann@gmail.com',
    'Ivan': 'ivan@hotmail.co.uk',
    'Button': 'button@gmail.com',
    'Lani': 'lani@lani.com'
};

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function validate(result) {
    return !Object.keys(result).some((key, i) => result[key] === people[key]);
}

function generate(people) {
    const names = shuffle(Object.keys(people));
    const emails = shuffle(Object.keys(people).map(key => people[key]));

    const result = names.reduce((res, cur, i) => {
        res[cur] = emails[i];
        return res;
    }, {});

    return validate(result) ? result : generate(people);
}

console.log(generate(people));
