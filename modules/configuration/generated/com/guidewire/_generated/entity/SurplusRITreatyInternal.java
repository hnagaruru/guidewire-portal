package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "SurplusRITreaty.eti;SurplusRITreaty.eix;SurplusRITreaty.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface SurplusRITreatyInternal extends com.guidewire._generated.entity.ProportionalRIAgreementInternal, com.guidewire._generated.entity.TreatyInternal, com.guidewire._generated.entity.PerRiskInternal, com.guidewire.pc.domain.reinsurance.ProportionalRIAgreementPublicMethods, com.guidewire.pc.domain.reinsurance.SurplusRITreatyPublicMethods, com.guidewire.pc.domain.reinsurance.impl.RIAgreementInternalMethods {
  /**
   * Gets the value of the MaxRetention field.
   * Defines the maximum underlying gross retention that the carrier can hold (and which serves as the basis for the amount of RI coverage provided).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getMaxRetention();
  
  
  /**
   * Gets the value of the MaxRetention_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getMaxRetention_amt();
  
  
  /**
   * Gets the value of the MaxRetention_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getMaxRetention_cur();
  
  
  /**
   * Sets the value of the MaxRetention field.
   */
  public void setMaxRetention(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the MaxRetention_amt field.
   */
  public void setMaxRetention_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the MaxRetention_cur field.
   */
  public void setMaxRetention_cur(typekey.Currency value);
  
  
  
}