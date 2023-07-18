package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PerRisk.eti;PerRisk.eix;PerRisk.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PerRiskInternal extends com.guidewire.pl.domain.persistence.core.impl.BeanInternal, com.guidewire.pc.domain.reinsurance.PerRiskPublicMethods {
  /**
   * Gets the value of the NotificationThreshold field.
   * At what amount of total incurred loss would the reinsurers like to be notified of individual large losses.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getNotificationThreshold();
  
  
  /**
   * Gets the value of the NotificationThreshold_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getNotificationThreshold_amt();
  
  
  /**
   * Gets the value of the NotificationThreshold_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getNotificationThreshold_cur();
  
  
  /**
   * Gets the value of the CountTowardTotalLimit field.
   * This is intended to allow for coverages that provide reinsurance for losses from a single event involving multiple risks (clash cover) but where you are not intending to cover any single risk with a TIV or SI this large.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCountTowardTotalLimit();
  
  
  /**
   * Sets the value of the CountTowardTotalLimit field.
   */
  public void setCountTowardTotalLimit(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the NotificationThreshold field.
   */
  public void setNotificationThreshold(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the NotificationThreshold_amt field.
   */
  public void setNotificationThreshold_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the NotificationThreshold_cur field.
   */
  public void setNotificationThreshold_cur(typekey.Currency value);
  
  
  
}