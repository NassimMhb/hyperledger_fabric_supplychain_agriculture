/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AngularTestPage } from './app.po';
import { ExpectedConditions, browser, element, by } from 'protractor';
import {} from 'jasmine';


describe('Starting tests for agriculture', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be agriculture', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('agriculture');
    })
  });

  it('network-name should be agriculture@0.0.1',() => {
    element(by.css('.network-name')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('agriculture@0.0.1.bna');
    });
  });

  it('navbar-brand should be agriculture',() => {
    element(by.css('.navbar-brand')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('agriculture');
    });
  });

  
    it('Legume component should be loadable',() => {
      page.navigateTo('/Legume');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Legume');
      });
    });

    it('Legume table should have 3 columns',() => {
      page.navigateTo('/Legume');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });
  
    it('ListeDesLegumes component should be loadable',() => {
      page.navigateTo('/ListeDesLegumes');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('ListeDesLegumes');
      });
    });

    it('ListeDesLegumes table should have 4 columns',() => {
      page.navigateTo('/ListeDesLegumes');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('Client component should be loadable',() => {
      page.navigateTo('/Client');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Client');
      });
    });

    it('Client table should have 4 columns',() => {
      page.navigateTo('/Client');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('Entrepot component should be loadable',() => {
      page.navigateTo('/Entrepot');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Entrepot');
      });
    });

    it('Entrepot table should have 3 columns',() => {
      page.navigateTo('/Entrepot');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });
  
    it('Agriculteur component should be loadable',() => {
      page.navigateTo('/Agriculteur');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Agriculteur');
      });
    });

    it('Agriculteur table should have 3 columns',() => {
      page.navigateTo('/Agriculteur');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });
  
    it('Transporteur component should be loadable',() => {
      page.navigateTo('/Transporteur');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Transporteur');
      });
    });

    it('Transporteur table should have 3 columns',() => {
      page.navigateTo('/Transporteur');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('D_CommandeClient component should be loadable',() => {
      page.navigateTo('/D_CommandeClient');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('D_CommandeClient');
      });
    });
  
    it('B_CommandeEntrepot component should be loadable',() => {
      page.navigateTo('/B_CommandeEntrepot');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('B_CommandeEntrepot');
      });
    });
  
    it('A_Recolter component should be loadable',() => {
      page.navigateTo('/A_Recolter');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('A_Recolter');
      });
    });
  
    it('C_LivraisonEntrepot component should be loadable',() => {
      page.navigateTo('/C_LivraisonEntrepot');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('C_LivraisonEntrepot');
      });
    });
  
    it('E_LivraisonClient component should be loadable',() => {
      page.navigateTo('/E_LivraisonClient');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('E_LivraisonClient');
      });
    });
  

});