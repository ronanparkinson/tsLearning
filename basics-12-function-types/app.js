// const names: Array<string> = ['Ronan', 'Max'];
// names[0].split(' ');
function countAndDescribe(element) {
    var descriptionText = 'Got no value';
    if (element.length === 0) {
        descriptionText = 'Got no elements.';
    }
    else if (element.length >= 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(''));
