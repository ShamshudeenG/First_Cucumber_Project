package com.amzon_steps_definition;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;

import org.openqa.selenium.WebElement;

import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;

import com.amazon.commonfunction.CommonClass;
import com.amazon.mobileslocators.MobileLocators;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.cucumber.datatable.DataTable;


public class Mobile_Module extends CommonClass {
	
	MobileLocators ml = new MobileLocators();
	CommonClass cc = new CommonClass();
	
	@Given("user launch the browser")
	public void user_launch_the_browser() {
//		cc.browserLaunch();
//		co.addArguments("-disable--notifications");
//		DesiredCapabilities capabilities = new DesiredCapabilities();
//		capabilities.setCapability(ChromeOptions.CAPABILITY, co);
//		co.merge(capabilities);
		System.out.println("BrowserStarted");
	}

   @Given("user gets the amazon url {string}")
   public void user_gets_the_amazon_url(String url) {
   driver.get(url);
   String title = driver.getTitle();
   System.out.println("URL :"+title);
   driver.manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS);
    }
	
   @Given("user search for mobile with one dim list")
   public void user_search_for_mobile_with_one_dim_list(DataTable brands) {
//       WebElement search = driver.findElement(By.xpath("//input[@type=\"text\"]"));
       List<String> li = brands.asList();
       cc.text(ml.getSearch(), li.get(0));
//       search.sendKeys(li.get(0));
//       search.sendKeys(Keys.ENTER);
   }
 
   @Given("user search for mobile with one dim map")
   public void user_search_for_mobile_with_one_dim_map(DataTable dt) {
//	   WebElement search = driver.findElement(By.xpath("//input[@type=\"text\"]"));
	   Map<String, String> mp = dt.asMap(String.class, String.class);
	   String second = mp.get("second");
	   cc.text(ml.getSearch(), second);	   
//	   search.sendKeys(second);
//	   search.sendKeys(Keys.ENTER);
   }

   @Given("user search for mobile {string}")
   public void user_search_for_mobile(String outline) throws Throwable {
//	   WebElement search = driver.findElement(By.xpath("//input[@type=\"text\"]"));
	   driver.manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS);
	   File f = new File("C:\\Users\\ADMIN\\eclipse-workspace\\Amazon_Cucumber\\src\\test\\resources\\cred.property");
	  FileInputStream fi = new FileInputStream(f);
	  Properties p = new Properties();
	  p.load(fi);
	  String username = p.getProperty("user");
	  String password = p.getProperty("password");
	  System.out.println(username+" "+password);
	  p.setProperty("follow","username");
	   FileWriter f2 = new FileWriter(f);
	   p.store(f2,"updated");
	   ml.getSearch().sendKeys(outline);
	   ml.getSearch().sendKeys(Keys.ENTER);
   }
   
	@Then("validate thelist of product displayed")
	public void validate_thelist_of_product_displayed() {
//	   WebElement product = driver.findElement(By.xpath("//span[@class=\"a-size-medium a-color-base a-text-normal\"]"));
	  // String text = ((WebElement) ml.getProduct()).getText();
	   //System.out.println(text);
		 ml.getProduct();
	   driver.manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS);
	}
	@Then("verify the Shop by Price displayed")
	public void verify_the_Shop_by_Price_displayed() {
		
	}

	@Then("verify the Bestselling Premium Smartphones displayed")
	public void verify_the_Bestselling_Premium_Smartphones_displayed() {
		
	}

	@Then("verify the Shop by Brand displayed")
	public void verify_the_Shop_by_Brand_displayed() {


	}

}
