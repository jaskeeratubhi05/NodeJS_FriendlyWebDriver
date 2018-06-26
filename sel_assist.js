var webdriver = require('C:/slimerTest/node_modules/friendly-webdriver');

var fwd = webdriver();
fwd.goto('http://demo.guru99.com/v4/');
fwd.fill({ uid: 'mngr139646' });
fwd.fill({ password: 'yvApehe' });
fwd.click('[name="btnLogin"]');

 fwd.wait({ url: 'http://demo.guru99.com/v4/manager/Managerhomepage.php' },5000);
fwd.click({ xpath: '//ul[@class="menusubnav"]/li[5]/a'});
fwd.wait({ url: 'http://demo.guru99.com/v4/manager/addAccount.php' },5000);
fwd.fill({ cusid: '22472' });
fwd.fill({ inideposit: '50000' });
fwd.click('[name="button2"]');
