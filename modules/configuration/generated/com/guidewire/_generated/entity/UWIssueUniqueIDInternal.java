package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "UWIssueUniqueID.eti;UWIssueUniqueID.eix;UWIssueUniqueID.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface UWIssueUniqueIDInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal {
  /**
   * Gets the value of the IssueKey field.
   * The unique key used to identify this issue.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getIssueKey();
  
  
  /**
   * Gets the value of the IssueType field.
   * What type of issue this is.  Used both to match up issues and to determine what authority grant is required in order to approve the issue.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UWIssueType getIssueType();
  
  
  public gw.pl.persistence.core.Key getIssueTypeID();
  
  
  /**
   * Gets the value of the PolicyTerm field.
   * The PolicyTerm for which the corresponding issue was human-touched.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyTerm getPolicyTerm();
  
  
  public gw.pl.persistence.core.Key getPolicyTermID();
  
  
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
   * Sets the value of the PolicyTerm field.
   */
  public void setPolicyTerm(entity.PolicyTerm value);
  
  
  public void setPolicyTermID(gw.pl.persistence.core.Key value);
  
  
  
}