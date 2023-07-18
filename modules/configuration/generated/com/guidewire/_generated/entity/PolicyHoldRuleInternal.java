package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyHoldRule.eti;PolicyHoldRule.eix;PolicyHoldRule.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PolicyHoldRuleInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the CovPatternCode field.
   * The coverage pattern associated with this rule
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCovPatternCode();
  
  
  /**
   * Gets the value of the JobDateType field.
   * The date type (effective, written, reference) used to determine whether the job falls within the dates of the hold
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.JobDateType getJobDateType();
  
  
  /**
   * Gets the value of the JobType field.
   * The type of job associated with this rule
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Job getJobType();
  
  
  /**
   * Gets the value of the PolicyHold field.
   * The policy hold containing this rule
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyHold getPolicyHold();
  
  
  public gw.pl.persistence.core.Key getPolicyHoldID();
  
  
  /**
   * Gets the value of the PolicyLineType field.
   * The type of policy line associated with this rule
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PolicyLine getPolicyLineType();
  
  
  /**
   * Sets the value of the CovPatternCode field.
   */
  public void setCovPatternCode(java.lang.String value);
  
  
  /**
   * Sets the value of the JobDateType field.
   */
  public void setJobDateType(typekey.JobDateType value);
  
  
  /**
   * Sets the value of the JobType field.
   */
  public void setJobType(typekey.Job value);
  
  
  /**
   * Sets the value of the PolicyHold field.
   */
  public void setPolicyHold(entity.PolicyHold value);
  
  
  public void setPolicyHoldID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PolicyLineType field.
   */
  public void setPolicyLineType(typekey.PolicyLine value);
  
  
  
}