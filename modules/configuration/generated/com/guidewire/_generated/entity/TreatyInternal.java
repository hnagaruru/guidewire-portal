package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Treaty.eti;Treaty.eix;Treaty.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface TreatyInternal extends com.guidewire.pl.domain.persistence.core.impl.BeanInternal, com.guidewire.pc.domain.reinsurance.TreatyPublicMethods {
  /**
   * Gets the value of the DepositPaymentSchedule field.
   * Deposit Payment Schedule
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.DepPmntScheduleType getDepositPaymentSchedule();
  
  
  /**
   * Gets the value of the MinDepositPremium field.
   * Minimum premium that will be due for the contract regardless of any per risk calc of ceded premiums.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getMinDepositPremium();
  
  
  /**
   * Gets the value of the MinDepositPremium_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getMinDepositPremium_amt();
  
  
  /**
   * Gets the value of the MinDepositPremium_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getMinDepositPremium_cur();
  
  
  /**
   * Sets the value of the DepositPaymentSchedule field.
   */
  public void setDepositPaymentSchedule(typekey.DepPmntScheduleType value);
  
  
  /**
   * Sets the value of the MinDepositPremium field.
   */
  public void setMinDepositPremium(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the MinDepositPremium_amt field.
   */
  public void setMinDepositPremium_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the MinDepositPremium_cur field.
   */
  public void setMinDepositPremium_cur(typekey.Currency value);
  
  
  
}