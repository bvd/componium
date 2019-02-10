'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /composition when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/composition");
  });


  describe('composition', function() {

    beforeEach(function() {
      browser.get('index.html#!/composition');
    });


    it('should render composition when user navigates to /composition', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('musicList', function() {

    beforeEach(function() {
      browser.get('index.html#!/musicList');
    });


    it('should render musicList when user navigates to /musicList', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
