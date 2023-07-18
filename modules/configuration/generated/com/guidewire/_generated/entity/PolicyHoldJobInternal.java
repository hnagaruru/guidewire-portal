package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyHoldJob.eti;PolicyHoldJob.eix;PolicyHoldJob.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PolicyHoldJobInternal extends com.guidewire._generated.entity.VersionableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal {
  /**
   * Gets the value of the Job field.
   * A foreign key to the job.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Job getJob();
  
  
  public gw.pl.persistence.core.Key getJobID();
  
  
  /**
   * Gets the value of the LastEvalTime field.
   * The last time this job was evaluated against this policy hold.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getLastEvalTime();
  
  
  /**
   * Gets the value of the Period field.
   * A foreign key to the period.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getPeriod();
  
  
  public gw.pl.persistence.core.Key getPeriodID();
  
  
  /**
   * Gets the value of the PolicyHold field.
   * A foreign key to the policy hold.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyHold getPolicyHold();
  
  
  public gw.pl.persistence.core.Key getPolicyHoldID();
  
  
  /**
   * Sets the value of the Job field.
   */
  public void setJob(entity.Job value);
  
  
  public void setJobID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LastEvalTime field.
   */
  public void setLastEvalTime(java.util.Date value);
  
  
  /**
   * Sets the value of the Period field.
   */
  public void setPeriod(entity.PolicyPeriod value);
  
  
  public void setPeriodID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PolicyHold field.
   */
  public void setPolicyHold(entity.PolicyHold value);
  
  
  public void setPolicyHoldID(gw.pl.persistence.core.Key value);
  
  
  
}