package com.naukri.pages;

import java.io.IOException;

import org.openqa.selenium.By;

//Sends invalid username and clicks login buttton
public class InvalidLoginPage extends LoginPage {

	public void invalidLogin() throws InterruptedException, IOException {
		driver.findElement(By.xpath("//*[@id=\"login_Layer\"]/div")).click();
		driver.findElement(By.id("eLoginNew")).sendKeys("swasthik");
		driver.findElement(By.id("pLogin")).sendKeys("!23459");
		driver.findElement(By.xpath("//*[@id=\"lgnFrmNew\"]/div[9]/button")).click();
		Thread.sleep(3000);
		screenshot("src\\test\\resources\\Screenshot\\InvalidLogin.png");

		driver.close();

	}
}
