$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/ADMIN/eclipse-workspace/Amazon_Cucumber/src/test/resources/Amazon.feature");
formatter.feature({
  "name": "com.amazon.mobiles",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Mobile_Module.user_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the amazon url \"https://www.amazon.in/\"",
  "keyword": "And "
});
formatter.match({
  "location": "Mobile_Module.user_gets_the_amazon_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating mobiles module",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@default"
    },
    {
      "name": "@integrated"
    }
  ]
});
formatter.step({
  "name": "user search for mobile with one dim list",
  "rows": [
    {
      "cells": [
        "samsung mobile",
        "vivo mobile",
        "realme mobile"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "Mobile_Module.user_search_for_mobile_with_one_dim_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate thelist of product displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Mobile_Module.validate_thelist_of_product_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the Shop by Price displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Mobile_Module.verify_the_Shop_by_Price_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the Bestselling Premium Smartphones displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Mobile_Module.verify_the_Bestselling_Premium_Smartphones_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the Shop by Brand displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Mobile_Module.verify_the_Shop_by_Brand_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validating mobiles module",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@default"
    },
    {
      "name": "@integrated"
    }
  ]
});
formatter.step({
  "name": "user search for mobile \"\u003csearch\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "validate thelist of product displayed",
  "keyword": "And "
});
formatter.step({
  "name": "verify the Shop by Price displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "verify the Shop by Brand displayed",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "search"
      ]
    },
    {
      "cells": [
        "samsung mobile"
      ]
    },
    {
      "cells": [
        "vivo mobile"
      ]
    },
    {
      "cells": [
        "real mobile"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Mobile_Module.user_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the amazon url \"https://www.amazon.in/\"",
  "keyword": "And "
});
formatter.match({
  "location": "Mobile_Module.user_gets_the_amazon_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating mobiles module",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@default"
    },
    {
      "name": "@integrated"
    }
  ]
});
formatter.step({
  "name": "user search for mobile \"samsung mobile\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Mobile_Module.user_search_for_mobile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate thelist of product displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Mobile_Module.validate_thelist_of_product_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the Shop by Price displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Mobile_Module.verify_the_Shop_by_Price_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the Shop by Brand displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Mobile_Module.verify_the_Shop_by_Brand_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Mobile_Module.user_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the amazon url \"https://www.amazon.in/\"",
  "keyword": "And "
});
formatter.match({
  "location": "Mobile_Module.user_gets_the_amazon_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating mobiles module",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@default"
    },
    {
      "name": "@integrated"
    }
  ]
});
formatter.step({
  "name": "user search for mobile \"vivo mobile\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Mobile_Module.user_search_for_mobile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate thelist of product displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Mobile_Module.validate_thelist_of_product_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the Shop by Price displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Mobile_Module.verify_the_Shop_by_Price_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the Shop by Brand displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Mobile_Module.verify_the_Shop_by_Brand_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Mobile_Module.user_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the amazon url \"https://www.amazon.in/\"",
  "keyword": "And "
});
formatter.match({
  "location": "Mobile_Module.user_gets_the_amazon_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating mobiles module",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@default"
    },
    {
      "name": "@integrated"
    }
  ]
});
formatter.step({
  "name": "user search for mobile \"real mobile\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Mobile_Module.user_search_for_mobile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate thelist of product displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Mobile_Module.validate_thelist_of_product_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the Shop by Price displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Mobile_Module.verify_the_Shop_by_Price_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the Shop by Brand displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Mobile_Module.verify_the_Shop_by_Brand_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});