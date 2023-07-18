package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Renewal.eti;Renewal.eix;Renewal.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RenewalInternal extends com.guidewire._generated.entity.JobInternal, com.guidewire._generated.entity.EventAwareInternal, com.guidewire.pc.domain.job.RenewalPublicMethods, com.guidewire.pc.domain.job.impl.RenewalInternalMethods {
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String RENEWALADDED_EVENT = "RenewalAdded";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String RENEWALCHANGED_EVENT = "RenewalChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String RENEWALREMOVED_EVENT = "RenewalRemoved";
  
  /**
   * Gets the value of the NonRenewalCode field.
   * NonRenewal reason codes
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.NonRenewalCode getNonRenewalCode();
  
  
  /**
   * Gets the value of the NonRenewalNotifDate field.
   * Date a non-renewal notification was sent
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getNonRenewalNotifDate();
  
  
  /**
   * Gets the value of the NotTakenNotifDate field.
   * Date a not-taken notification was sent
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getNotTakenNotifDate();
  
  
  /**
   * Gets the value of the RenewalCode field.
   * Renewal reason codes
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RenewalCode getRenewalCode();
  
  
  /**
   * Gets the value of the RenewalNotifDate field.
   * Date a renewal notification was sent
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getRenewalNotifDate();
  
  
  /**
   * Gets the value of the EscalateAfterHoldReleased field.
   * Indicates whether a renewal job should be escalated if a policy hold no longer affects it.  If true, creates an activity for the producer to re-examine the renewal. If false, the previously-held renewal is dropped back into automated processing.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isEscalateAfterHoldReleased();
  
  
  /**
   * Sets the value of the EscalateAfterHoldReleased field.
   */
  public void setEscalateAfterHoldReleased(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the NonRenewalCode field.
   */
  public void setNonRenewalCode(typekey.NonRenewalCode value);
  
  
  /**
   * Sets the value of the NonRenewalNotifDate field.
   */
  public void setNonRenewalNotifDate(java.util.Date value);
  
  
  /**
   * Sets the value of the NotTakenNotifDate field.
   */
  public void setNotTakenNotifDate(java.util.Date value);
  
  
  /**
   * Sets the value of the RenewalCode field.
   */
  public void setRenewalCode(typekey.RenewalCode value);
  
  
  /**
   * Sets the value of the RenewalNotifDate field.
   */
  public void setRenewalNotifDate(java.util.Date value);
  
  
  
}