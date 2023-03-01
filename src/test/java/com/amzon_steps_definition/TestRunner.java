package com.amzon_steps_definition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\ADMIN\\eclipse-workspace\\Amazon_Cucumber\\src\\test\\resources\\Amazon.feature",
                 glue = "com.amzon_steps_definition",
                 plugin={"html:target","json:target/reports.json"},
                 tags="@default and @integrated",
                 dryRun= false,
                 monochrome= true)
public class TestRunner {

}
