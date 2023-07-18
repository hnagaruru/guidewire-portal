package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RateWCClassCodeExt.eti;RateWCClassCodeExt.eix;RateWCClassCodeExt.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RateWCClassCodeExtInternal extends com.guidewire._generated.entity.KeyableBeanInternal {
  /**
   * Gets the value of the classcode field.
   * This field indicates the class code we are doing a rate lookup on.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getclasscode();
  
  
  /**
   * Gets the value of the effDate field.
   * The date on which this factor becomes effective (inclusive).  A null date means this has always been effective.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date geteffDate();
  
  
  /**
   * Gets the value of the expDate field.
   * The date on which this factor expires (exclusive).  A null date means this will always be effective.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getexpDate();
  
  
  /**
   * Gets the value of the minPremium field.
   * The minimum premium associated with a classcode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getminPremium();
  
  
  /**
   * Gets the value of the rate field.
   * The base rate to be used
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getrate();
  
  
  /**
   * Gets the value of the rateState field.
   * Indicates a rate is applicable to a given jurisdiction.  Null indicates a default rate which can be overridden by a rate specific to a jurisdiction. This should be the string value of a typecode in the Jurisdiction typelist. For example, if this is a typecode allowed in the US state of California, the value should be 'CA'.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getrateState();
  
  
  /**
   * Sets the value of the classcode field.
   */
  public void setclasscode(java.lang.String value);
  
  
  /**
   * Sets the value of the effDate field.
   */
  public void seteffDate(java.util.Date value);
  
  
  /**
   * Sets the value of the expDate field.
   */
  public void setexpDate(java.util.Date value);
  
  
  /**
   * Sets the value of the minPremium field.
   */
  public void setminPremium(java.lang.Integer value);
  
  
  /**
   * Sets the value of the rate field.
   */
  public void setrate(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the rateState field.
   */
  public void setrateState(java.lang.String value);
  
  
  
}