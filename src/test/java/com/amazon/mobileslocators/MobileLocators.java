package com.amazon.mobileslocators;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.amazon.commonfunction.CommonClass;

public class MobileLocators extends CommonClass {

	public MobileLocators() {
	 PageFactory.initElements(driver,this);
	}
	
	@FindBy(xpath="//input[@id=\"twotabsearchtextbox\"]")
	private WebElement search;
	
	@FindBy(xpath="//span[@class=\\\"a-size-medium a-color-base a-text-normal\\\"]")
	private List<WebElement> product;

	public WebElement getSearch() {
		return search;
	}

	public List<WebElement> getProduct() {
		return product;
	}


}
