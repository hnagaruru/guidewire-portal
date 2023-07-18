package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RateAdjFactorExt.eti;RateAdjFactorExt.eix;RateAdjFactorExt.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RateAdjFactorExtInternal extends com.guidewire._generated.entity.KeyableBeanInternal {
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
   * Gets the value of the factor field.
   * The base rate to be used.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getfactor();
  
  
  /**
   * Gets the value of the factorName field.
   * This field indicates the name of the factor that should be applied.  Look-ups are always within a named factor.  Using this allows a single table to provide rating factors for many different types of simple (single parameter) look-ups.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getfactorName();
  
  
  /**
   * Gets the value of the factorState field.
   * Indicates a rate is applicable to a given state.  Null indicates a default rate which can be overridden by a rate specific to a state.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getfactorState();
  
  
  /**
   * Gets the value of the maxNumber field.
   * The maximum of the inclusive number range for which a given lookup value should fall within.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getmaxNumber();
  
  
  /**
   * Gets the value of the minNumber field.
   * The minimum of the inclusive number range for which a given lookup value should fall within.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getminNumber();
  
  
  /**
   * Gets the value of the stringOption field.
   * This field should store a string value, such as the code for a typecode field, which will be used for looking up a factor.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getstringOption();
  
  
  /**
   * Gets the value of the stringOption2 field.
   * This field should store a secondary string value used for looking up a factor.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getstringOption2();
  
  
  /**
   * Sets the value of the effDate field.
   */
  public void seteffDate(java.util.Date value);
  
  
  /**
   * Sets the value of the expDate field.
   */
  public void setexpDate(java.util.Date value);
  
  
  /**
   * Sets the value of the factor field.
   */
  public void setfactor(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the factorName field.
   */
  public void setfactorName(java.lang.String value);
  
  
  /**
   * Sets the value of the factorState field.
   */
  public void setfactorState(java.lang.String value);
  
  
  /**
   * Sets the value of the maxNumber field.
   */
  public void setmaxNumber(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the minNumber field.
   */
  public void setminNumber(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the stringOption field.
   */
  public void setstringOption(java.lang.String value);
  
  
  /**
   * Sets the value of the stringOption2 field.
   */
  public void setstringOption2(java.lang.String value);
  
  
  
}