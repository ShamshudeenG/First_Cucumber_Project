package com.amzon_steps_definition;

import com.amazon.commonfunction.CommonClass;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends CommonClass{
    CommonClass cc = new CommonClass();
	@Before
	public void start(Scenario sc) {
		cc.browserLaunch();
		
	}
	@After
	public void stop() {
		cc.browserExit();
	}
}
