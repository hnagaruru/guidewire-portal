package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PendingUpdateDelegate.eti;PendingUpdateDelegate.eix;PendingUpdateDelegate.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PendingUpdateDelegateInternal extends com.guidewire.pl.domain.persistence.core.impl.BeanInternal {
  /**
   * Gets the value of the Job field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Job getJob();
  
  
  public gw.pl.persistence.core.Key getJobID();
  
  
  /**
   * Gets the value of the PendingUpdateTime field.
   * The time when this pending update should be applied to the target entity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getPendingUpdateTime();
  
  
  /**
   * Sets the value of the Job field.
   */
  public void setJob(entity.Job value);
  
  
  public void setJobID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PendingUpdateTime field.
   */
  public void setPendingUpdateTime(java.util.Date value);
  
  
  
}