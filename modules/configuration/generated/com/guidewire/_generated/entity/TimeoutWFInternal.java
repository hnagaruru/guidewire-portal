package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TimeoutWF.eti;TimeoutWF.eix;TimeoutWF.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface TimeoutWFInternal extends com.guidewire._generated.entity.PolicyPeriodWorkflowInternal {
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
   * Sets the value of the FunctionToCall field.
   */
  public void setFunctionToCall(java.lang.String value);
  
  
  /**
   * Sets the value of the WakeupTime field.
   */
  public void setWakeupTime(java.util.Date value);
  
  
  
}