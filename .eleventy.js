module.exports = (function (eleventyConfig) {
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  var markdownIt = require("markdown-it")(options);
  var markdownItAttrs = require('markdown-it-attrs');

  markdownIt.use(markdownItAttrs, {
    leftDelimiter: '{',
    rightDelimiter: '}',
    allowedAttributes: []
  });

  eleventyConfig.setLibrary("md", markdownIt);

  eleventyConfig.addFilter("addVideo", function (video) {
    return `<div style='position: relative; padding-bottom: 56.25%; padding-top: 25px; height: 0; margin-bottom: 20px;'><iframe title='YouTube Video Frame' style='position: absolute; top: 0; left: 0; width: 100%; height: 100%;' src='${video}' frameborder='0' allowfullscreen></iframe></div>`; 
  });

  eleventyConfig.addFilter("countryheader", function (url, countries) {
    var returnValue = '';
    countries.forEach(country => {
      if (country.url === url) {
        returnValue = `<section class="header-image">
        <div style="background-image: url(/img/country/${country.bannerimageurl});"> 
          <h1>${country.name}</h1>
          <table> <tbody><tr>
          <th>Deadline to Apply</th> <th>Credits</th> <th>Cost</th> <th class="last">Next Session</th></tr> 
          <tr> <td>${country.deadline}</td> <td>${country.credits}</td> <td>${country.cost}</td> <td class="last">${country.dates}</td></tr>
          </tbody></table>
        </div></section>`;
      }
    });
    return returnValue;
  });

  eleventyConfig.addFilter("learnmore", function (url, countries) {
    var returnValue = '';
    countries.forEach(country => {
      if (country.url === url) {
        returnValue = `<a href="${country.learnmore}" class="button" id="button-learnmore">Learn More &gt;</a>`;
      }
    });
    return returnValue;
  });

  eleventyConfig.addFilter("termdropdown", function (terms) {
    var returnValue = '';
    terms.forEach(term => {
      returnValue = returnValue + `<option value="${term}">${term}</option>`;
    });
    return returnValue;
  });

  eleventyConfig.addFilter("menu", function (items) {
    var returnValue = '<ul class="menu-column">';
    items.forEach(element => {
      if (element.pages == null) {
        returnValue = returnValue + `<li class="menu-section"><a href="${element.url}">${element.name}</a></li>`;
      } else {
        var submenu = '';
        element.pages.forEach(subelement => {
          submenu = submenu + `<li class="menu-section"><a href="${subelement.url}">${subelement.name}</a></li>`;
        });
        returnValue = returnValue + `<li class="menu-submenu-item"><a href="${element.url}">${element.name}</a><ul class="menu-submenu">${submenu}</ul></li>`;    
      }
    });
    returnValue = returnValue + '</ul>';
    return returnValue;
  });

});
