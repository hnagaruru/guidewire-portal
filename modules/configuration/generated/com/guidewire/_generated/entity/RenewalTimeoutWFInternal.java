package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RenewalTimeoutWF.eti;RenewalTimeoutWF.eix;RenewalTimeoutWF.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RenewalTimeoutWFInternal extends com.guidewire._generated.entity.PolicyPeriodWorkflowInternal {
  /**
   * Gets the value of the FunctionToCall field.
   * The callback function name to call when the timeout is over
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFunctionToCall();
  
  
  /**
   * Gets the value of the WakeupTime field.
   * The date and time at which the workflow should wakeup
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getWakeupTime();
  
  
  /**
   * Gets the value of the RenewalOffer field.
   * True if this is started by a renewal offer
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isRenewalOffer();
  
  
  /**
   * Sets the value of the FunctionToCall field.
   */
  public void setFunctionToCall(java.lang.String value);
  
  
  /**
   * Sets the value of the RenewalOffer field.
   */
  public void setRenewalOffer(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the WakeupTime field.
   */
  public void setWakeupTime(java.util.Date value);
  
  
  
}