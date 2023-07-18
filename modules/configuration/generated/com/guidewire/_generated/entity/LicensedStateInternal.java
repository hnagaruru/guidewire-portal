package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "LicensedState.eti;LicensedState.eix;LicensedState.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface LicensedStateInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.SimpleEffDatedInternal, com.guidewire.pc.domain.policy.LicensedStatePublicMethods {
  /**
   * Gets the value of the PriceFactor field.
   * The relative price factor for this state.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getPriceFactor();
  
  
  /**
   * Gets the value of the ProductCode field.
   * Product that the underwriting company is licensed for a particular state.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProductCode();
  
  
  /**
   * Gets the value of the Segment field.
   * Market segment for this state and product type.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Segment getSegment();
  
  
  /**
   * Gets the value of the State field.
   * The state where the company has been licensed to sell insurance.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getState();
  
  
  /**
   * Gets the value of the UWCompany field.
   * Each licensedState belongs to one UWCompany.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UWCompany getUWCompany();
  
  
  public gw.pl.persistence.core.Key getUWCompanyID();
  
  
  /**
   * Sets the value of the PriceFactor field.
   */
  public void setPriceFactor(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the ProductCode field.
   */
  public void setProductCode(java.lang.String value);
  
  
  /**
   * Sets the value of the Segment field.
   */
  public void setSegment(typekey.Segment value);
  
  
  /**
   * Sets the value of the State field.
   */
  public void setState(typekey.Jurisdiction value);
  
  
  /**
   * Sets the value of the UWCompany field.
   */
  public void setUWCompany(entity.UWCompany value);
  
  
  public void setUWCompanyID(gw.pl.persistence.core.Key value);
  
  
  
}