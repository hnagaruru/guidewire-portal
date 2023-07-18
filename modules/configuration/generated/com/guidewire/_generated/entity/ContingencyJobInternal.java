package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ContingencyJob.eti;ContingencyJob.eix;ContingencyJob.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ContingencyJobInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal {
  /**
   * Gets the value of the Contingency field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Contingency getContingency();
  
  
  public gw.pl.persistence.core.Key getContingencyID();
  
  
  /**
   * Gets the value of the Job field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Job getJob();
  
  
  public gw.pl.persistence.core.Key getJobID();
  
  
  /**
   * Sets the value of the Contingency field.
   */
  public void setContingency(entity.Contingency value);
  
  
  public void setContingencyID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Job field.
   */
  public void setJob(entity.Job value);
  
  
  public void setJobID(gw.pl.persistence.core.Key value);
  
  
  
}