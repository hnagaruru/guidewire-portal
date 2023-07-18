package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "NotificationConfig.eti;NotificationConfig.eix;NotificationConfig.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface NotificationConfigInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.SimpleEffDatedInternal {
  /**
   * Gets the value of the ActionType field.
   * The notification action type to which this configuration applies
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.NotificationActionType getActionType();
  
  
  /**
   * Gets the value of the Category field.
   * The notification category to which this configuration applies
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.NotificationCategory getCategory();
  
  
  /**
   * Gets the value of the Jurisdiction field.
   * The jurisdiction this configuration applies to
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getJurisdiction();
  
  
  /**
   * Gets the value of the LeadTime field.
   * Value for this notification configuration in days
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getLeadTime();
  
  
  /**
   * Gets the value of the LineOfBusiness field.
   * Policy line pattern this applies to
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLineOfBusiness();
  
  
  /**
   * Gets the value of the PremiumIncreaseThreshold field.
   * Premium increase threshold percentage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getPremiumIncreaseThreshold();
  
  
  /**
   * Gets the value of the RateIncreaseThreshold field.
   * Rate increase threshold percentage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getRateIncreaseThreshold();
  
  
  /**
   * Sets the value of the ActionType field.
   */
  public void setActionType(typekey.NotificationActionType value);
  
  
  /**
   * Sets the value of the Category field.
   */
  public void setCategory(typekey.NotificationCategory value);
  
  
  /**
   * Sets the value of the Jurisdiction field.
   */
  public void setJurisdiction(typekey.Jurisdiction value);
  
  
  /**
   * Sets the value of the LeadTime field.
   */
  public void setLeadTime(java.lang.Integer value);
  
  
  /**
   * Sets the value of the LineOfBusiness field.
   */
  public void setLineOfBusiness(java.lang.String value);
  
  
  /**
   * Sets the value of the PremiumIncreaseThreshold field.
   */
  public void setPremiumIncreaseThreshold(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the RateIncreaseThreshold field.
   */
  public void setRateIncreaseThreshold(java.math.BigDecimal value);
  
  
  
}