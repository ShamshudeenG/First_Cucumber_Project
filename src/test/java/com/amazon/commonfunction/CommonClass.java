package com.amazon.commonfunction;

import java.io.File;
import java.util.Set;

import org.openqa.selenium.Alert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.github.bonigarcia.wdm.WebDriverManager;

public class CommonClass {
//	private static CommonClass me;
//
//    private CommonClass() {
//    }
//
//    public static CommonClass getInstance() {
//        if (me == null) {
//            me = new CommonClass();
//        }
//
//        return me;
//    }

	public static WebDriver driver;
	public static Actions ac;
	public static JavascriptExecutor jse;
	public static WebDriverWait wait;
	public static Select s;
	public static Alert alert;
	
	
	public void browserLaunch() {
		ChromeOptions co = new ChromeOptions(); 
	WebDriverManager.chromedriver().setup();
	co.addArguments("start-maximized");
	driver = new ChromeDriver(co);
	}
	public void text (WebElement w, String value) {
		w.sendKeys(value);
	}
	public void press (WebElement w) {
		w.click();
	}
	public void text (WebElement w, String value,int i) {
		ac.sendKeys(w, value).build().perform();
	}
	public void press (WebElement w, int i) {
		ac.click(w).build().perform();
	}
	public void browserExit() {
		driver.quit();
	}
	public void text(int js, WebElement w, String value) {
		jse = (JavascriptExecutor)driver;
		jse.executeScript("arguments[0].setAttribute('value',"+value+")",w );
	}
	public void windowsHandling() {
		String parentUrl = driver.getWindowHandle();
		Set<String> childUrl = driver.getWindowHandles();
		for (String x : childUrl) {
			if(!parentUrl.equals(x)) {
				driver.switchTo().window(x);
			}
		}
	}
	public void time(WebElement w) {
		wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.elementToBeClickable(w));
	}
	public void dropDown (WebElement w, int i) {
		s = new Select(w);
		s.selectByIndex(i);
	}
	public void dropDown (WebElement w, String value) {
		s.selectByValue(value);
	}
	public void popupAccept() {
		Alert alert = driver.switchTo().alert();
		alert.accept();
	}
	public void popupClose() {
		alert.dismiss();
	}
	public void text(String value) {
		alert.sendKeys(value);
	}
	public void tss () {
		TakesScreenshot ts = (TakesScreenshot)driver;
		File src = ts.getScreenshotAs(OutputType.FILE);
	}
}
