package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AsyncQuoteIssue.eti;AsyncQuoteIssue.eix;AsyncQuoteIssue.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface AsyncQuoteIssueInternal extends com.guidewire._generated.entity.VersionableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal {
  /**
   * Gets the value of the Description field.
   * Description of the asynchronous quote issue
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the IssueSequence field.
   * A sequence number that indicates the order in which the issue was created.  Unique for a specific set of Issues within PolicyPeriod.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getIssueSequence();
  
  
  /**
   * Gets the value of the IssueType field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AsyncQuoteIssueType getIssueType();
  
  
  /**
   * Gets the value of the PolicyPeriod field.
   * The PolicyPeriod this issue belongs to
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getPolicyPeriod();
  
  
  public gw.pl.persistence.core.Key getPolicyPeriodID();
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the IssueSequence field.
   */
  public void setIssueSequence(java.lang.Integer value);
  
  
  /**
   * Sets the value of the IssueType field.
   */
  public void setIssueType(typekey.AsyncQuoteIssueType value);
  
  
  /**
   * Sets the value of the PolicyPeriod field.
   */
  public void setPolicyPeriod(entity.PolicyPeriod value);
  
  
  public void setPolicyPeriodID(gw.pl.persistence.core.Key value);
  
  
  
}