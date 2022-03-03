const Page = require('./page');



class ChallengingDOMPage extends Page {
    // This uses the link text strategy
    get anchorLink() {
        return $('=Elemental Selenium');
    }
    // This uses the partial link text strategy
    get partialLink() {
        return $('*=Elemental');
    }
    // This uses the xpath strategy
    get nestedElement() {
        return $('//tr/td[1]');
    }
    
    open() {
        return super.open('challenging_dom');
    }

}

module.exports = new ChallengingDOMPage();