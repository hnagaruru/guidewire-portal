package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Cancellation.eti;Cancellation.eix;Cancellation.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface CancellationInternal extends com.guidewire._generated.entity.JobInternal, com.guidewire._generated.entity.EventAwareInternal, com.guidewire.pc.domain.job.CancellationPublicMethods {
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String CANCELLATIONADDED_EVENT = "CancellationAdded";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String CANCELLATIONCHANGED_EVENT = "CancellationChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String CANCELLATIONREMOVED_EVENT = "CancellationRemoved";
  
  /**
   * Gets the value of the CancelProcessDate field.
   * Date the cancellation should be processed by the external system
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCancelProcessDate();
  
  
  /**
   * Gets the value of the CancelReasonCode field.
   * Cancellation reason codes
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ReasonCode getCancelReasonCode();
  
  
  /**
   * Gets the value of the InitialNotificationDate field.
   * Date of the first time that a cancellation notification was sent to an external system in response to this job
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getInitialNotificationDate();
  
  
  /**
   * Gets the value of the LastNotifiedCancellationDate field.
   * Date of the last time that a cancellation notification was sent to an external system in response to this job.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getLastNotifiedCancellationDate();
  
  
  /**
   * Gets the value of the NotificationAckDate field.
   * Date a cancellation notification acknowledgement was received from an external system
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getNotificationAckDate();
  
  
  /**
   * Gets the value of the NotificationDate field.
   * Date a cancellation notification was sent to an external system
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getNotificationDate();
  
  
  /**
   * Gets the value of the RescindNotificationDate field.
   * Date a rescind cancellation notification was sent
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getRescindNotificationDate();
  
  
  /**
   * Gets the value of the Source field.
   * Party that initiated cancellation (carrier or insures)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.CancellationSource getSource();
  
  
  /**
   * Gets the value of the QuoteOnStart field.
   * True if this Cancellation job will be quoted after it's started. 
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isQuoteOnStart();
  
  
  /**
   * Sets the value of the CancelProcessDate field.
   */
  public void setCancelProcessDate(java.util.Date value);
  
  
  /**
   * Sets the value of the CancelReasonCode field.
   */
  public void setCancelReasonCode(typekey.ReasonCode value);
  
  
  /**
   * Sets the value of the InitialNotificationDate field.
   */
  public void setInitialNotificationDate(java.util.Date value);
  
  
  /**
   * Sets the value of the LastNotifiedCancellationDate field.
   */
  public void setLastNotifiedCancellationDate(java.util.Date value);
  
  
  /**
   * Sets the value of the NotificationAckDate field.
   */
  public void setNotificationAckDate(java.util.Date value);
  
  
  /**
   * Sets the value of the NotificationDate field.
   */
  public void setNotificationDate(java.util.Date value);
  
  
  /**
   * Sets the value of the QuoteOnStart field.
   */
  public void setQuoteOnStart(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the RescindNotificationDate field.
   */
  public void setRescindNotificationDate(java.util.Date value);
  
  
  /**
   * Sets the value of the Source field.
   */
  public void setSource(typekey.CancellationSource value);
  
  
  
}