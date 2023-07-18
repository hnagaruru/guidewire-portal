package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "FormPatternJob.eti;FormPatternJob.eix;FormPatternJob.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface FormPatternJobInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the FormPattern field.
   * The form pattern containing this job
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FormPattern getFormPattern();
  
  
  public gw.pl.persistence.core.Key getFormPatternID();
  
  
  /**
   * Gets the value of the JobType field.
   * The job's type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Job getJobType();
  
  
  /**
   * Sets the value of the FormPattern field.
   */
  public void setFormPattern(entity.FormPattern value);
  
  
  public void setFormPatternID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the JobType field.
   */
  public void setJobType(typekey.Job value);
  
  
  
}