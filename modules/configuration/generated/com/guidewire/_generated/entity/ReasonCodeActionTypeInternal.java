package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ReasonCodeActionType.eti;ReasonCodeActionType.eix;ReasonCodeActionType.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ReasonCodeActionTypeInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the NotificationActionType field.
   * The notification action type to which this configuration applies
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.NotificationActionType getNotificationActionType();
  
  
  /**
   * Gets the value of the NotificationCategory field.
   * The notification category to which this configuration applies
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.NotificationCategory getNotificationCategory();
  
  
  /**
   * Gets the value of the ReasonCode field.
   * The ReasonCode to which this configuration applies
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ReasonCode getReasonCode();
  
  
  /**
   * Sets the value of the NotificationActionType field.
   */
  public void setNotificationActionType(typekey.NotificationActionType value);
  
  
  /**
   * Sets the value of the NotificationCategory field.
   */
  public void setNotificationCategory(typekey.NotificationCategory value);
  
  
  /**
   * Sets the value of the ReasonCode field.
   */
  public void setReasonCode(typekey.ReasonCode value);
  
  
  
}