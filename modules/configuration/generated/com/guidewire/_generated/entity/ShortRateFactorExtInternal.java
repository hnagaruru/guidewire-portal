package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ShortRateFactorExt.eti;ShortRateFactorExt.eix;ShortRateFactorExt.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ShortRateFactorExtInternal extends com.guidewire._generated.entity.KeyableBeanInternal {
  /**
   * Gets the value of the daysInPeriod field.
   * The number of non-canceled days that the policy was in effect.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getdaysInPeriod();
  
  
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
   * Gets the value of the rateState field.
   * Indicates a rate is applicable to a given state.  Null indicates a default rate which can be overridden by a rate specific to a state.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getrateState();
  
  
  /**
   * Gets the value of the shortRateFactor field.
   * The amount that an already prorated value should be multiplied by to get to the short rate proration %.  For example, if premiums were already prorated by 50%, then a factor of 1.2 would get the amount up to the intended 60% (amount * 0.5 * 1.2 = amount * 0.6).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getshortRateFactor();
  
  
  /**
   * Gets the value of the shortRatePercent field.
   * The proration factor (vs. the full term) that should be used.  For example, if (non-canceled length / term length) = 50%, the short rate % might be 60%.  Stored as a decimal, so 50% should be 0.5000.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getshortRatePercent();
  
  
  /**
   * Sets the value of the daysInPeriod field.
   */
  public void setdaysInPeriod(java.lang.Integer value);
  
  
  /**
   * Sets the value of the effDate field.
   */
  public void seteffDate(java.util.Date value);
  
  
  /**
   * Sets the value of the expDate field.
   */
  public void setexpDate(java.util.Date value);
  
  
  /**
   * Sets the value of the rateState field.
   */
  public void setrateState(java.lang.String value);
  
  
  /**
   * Sets the value of the shortRateFactor field.
   */
  public void setshortRateFactor(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the shortRatePercent field.
   */
  public void setshortRatePercent(java.math.BigDecimal value);
  
  
  
}