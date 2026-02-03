const CONFIG = {
  allowedDomains: ['here'],
  targetElements: ['img'],
  findHiddenElements: true,
  changeHiddenElements: true,


  
  shouldRunOnThisPage: function() {
    const currentUrl = window.location.href;
    const currentHostname = window.location.hostname;
    return this.allowedDomains.some(domain => {
      let cleanDomain = domain.replace(/^https?:\/\//, '').replace(/\/$/, '');
      return currentHostname === cleanDomain || currentHostname.endsWith('.' + cleanDomain);
    });
  }
};