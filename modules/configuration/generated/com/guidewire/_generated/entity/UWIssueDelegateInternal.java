package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "UWIssueDelegate.eti;UWIssueDelegate.eix;UWIssueDelegate.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface UWIssueDelegateInternal extends com.guidewire.pl.domain.persistence.core.impl.BeanInternal, gw.pc.policy.entity.UWIssueDelegate, gw.pc.policy.entity.UWIssueDescriptorsAdapter {
  /**
   * Gets the value of the IssueKey field.
   * The unique key used to identify this issue.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getIssueKey();
  
  
  /**
   * Gets the value of the IssueType field.
   * The type of this issue, used to match issues and to determine what authority grant is required in order to approve the issue.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UWIssueType getIssueType();
  
  
  public gw.pl.persistence.core.Key getIssueTypeID();
  
  
  /**
   * Gets the value of the Value field.
   * The value, if any, associated with this issue. If present, the value will be used to compare with authority grants to determine if a user can approve this issue, and with approvals themselves to determine if the approval still applies.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getValue();
  
  
  /**
   * Sets the value of the IssueKey field.
   */
  public void setIssueKey(java.lang.String value);
  
  
  /**
   * Sets the value of the IssueType field.
   */
  public void setIssueType(entity.UWIssueType value);
  
  
  public void setIssueTypeID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Value field.
   */
  public void setValue(java.lang.String value);
  
  
  
}