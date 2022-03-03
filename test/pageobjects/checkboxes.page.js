const Page = require('./page');

class CheckboxesPage extends Page {

    get header() {
        return $('<h3 />');
    }

    get checkbox2() {
        return $('//form/input[2]');
    }

    open() {
        return super.open('checkboxes');
    }


}

module.exports = new CheckboxesPage();