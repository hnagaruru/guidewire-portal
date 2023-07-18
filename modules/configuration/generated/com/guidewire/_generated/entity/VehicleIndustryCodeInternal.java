package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "VehicleIndustryCode.eti;VehicleIndustryCode.eix;VehicleIndustryCode.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface VehicleIndustryCodeInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the Code field.
   * The vehicle industry Code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCode();
  
  
  /**
   * Gets the value of the Industry field.
   * The vehicle industry
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.VehicleIndustry getIndustry();
  
  
  /**
   * Gets the value of the IndustryUse field.
   * The use of the vehicle for the industry
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.VehicleIndustryUse getIndustryUse();
  
  
  /**
   * Sets the value of the Code field.
   */
  public void setCode(java.lang.String value);
  
  
  /**
   * Sets the value of the Industry field.
   */
  public void setIndustry(typekey.VehicleIndustry value);
  
  
  /**
   * Sets the value of the IndustryUse field.
   */
  public void setIndustryUse(typekey.VehicleIndustryUse value);
  
  
  
}