package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "MVRConfig.eti;MVRConfig.eix;MVRConfig.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface MVRConfigInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the Jurisdiction field.
   * The state or jurisdiction where the company has been licensed to sell insurance.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getJurisdiction();
  
  
  /**
   * Gets the value of the StaleDays field.
   * Calendar days after which the MVR is considered stale (default 90)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getStaleDays();
  
  
  /**
   * Gets the value of the UWCompanyCode field.
   * Code of the underwriting company
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.UWCompanyCode getUWCompanyCode();
  
  
  /**
   * Gets the value of the YearsToRequest field.
   * Number of years to request (3, 5, 7, 10)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getYearsToRequest();
  
  
  /**
   * Sets the value of the Jurisdiction field.
   */
  public void setJurisdiction(typekey.Jurisdiction value);
  
  
  /**
   * Sets the value of the StaleDays field.
   */
  public void setStaleDays(java.lang.Integer value);
  
  
  /**
   * Sets the value of the UWCompanyCode field.
   */
  public void setUWCompanyCode(typekey.UWCompanyCode value);
  
  
  /**
   * Sets the value of the YearsToRequest field.
   */
  public void setYearsToRequest(java.lang.Integer value);
  
  
  
}