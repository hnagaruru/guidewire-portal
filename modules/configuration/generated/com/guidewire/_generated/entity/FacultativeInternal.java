package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Facultative.eti;Facultative.eix;Facultative.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface FacultativeInternal extends com.guidewire.pl.domain.persistence.core.impl.BeanInternal, com.guidewire.pc.domain.reinsurance.FacultativePublicMethods, com.guidewire.pc.domain.reinsurance.impl.FacultativeInternalMethods {
  /**
   * Gets the value of the CededPremium field.
   * Defined as an actual amount rather than a rate.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getCededPremium();
  
  
  /**
   * Gets the value of the CededPremium_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getCededPremium_amt();
  
  
  /**
   * Gets the value of the CededPremium_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getCededPremium_cur();
  
  
  /**
   * Gets the value of the MarkUp field.
   * Additional amount (expressed as % of ceded premium) that should be subtracted from direct premiums when determining the net premium for ceding to other agreements.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getMarkUp();
  
  
  /**
   * Gets the value of the FlatPremiumAdjusted field.
   * True if flat premium is adjusted for each participant.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isFlatPremiumAdjusted();
  
  
  /**
   * Sets the value of the CededPremium field.
   */
  public void setCededPremium(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the CededPremium_amt field.
   */
  public void setCededPremium_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the CededPremium_cur field.
   */
  public void setCededPremium_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the FlatPremiumAdjusted field.
   */
  public void setFlatPremiumAdjusted(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the MarkUp field.
   */
  public void setMarkUp(java.math.BigDecimal value);
  
  
  
}