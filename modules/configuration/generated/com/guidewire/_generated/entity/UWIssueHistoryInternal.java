package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "UWIssueHistory.eti;UWIssueHistory.eix;UWIssueHistory.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface UWIssueHistoryInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, com.guidewire.pc.domain.policy.UWIssueHistoryPublicMethods {
  /**
   * Gets the value of the ApprovalDurationType field.
   * The typekey specifying the expected duration of this Approval; if 1yr or 3yr, an expiration date is computed from this value. Only used for Approval history.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.UWApprovalDurationType getApprovalDurationType();
  
  
  /**
   * Gets the value of the ApprovalInvalidFrom field.
   * The date on which the approval ceases to be valid. This value is null except when DurationType is 1yr or 3yrs. Only used for Approval history.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getApprovalInvalidFrom();
  
  
  /**
   * Gets the value of the AutomaticOperationCause field.
   * The automatically triggered operation in progress when this history was created. Null is used to indicate a human-generated event.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAutomaticOperationCause();
  
  
  /**
   * Gets the value of the BlockingPoint field.
   * After this operation, the point at which this issue will block progress without further Approval
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.UWIssueBlockingPoint getBlockingPoint();
  
  
  /**
   * Gets the value of the EffDate field.
   * The date on which the operation on this issue became effective.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEffDate();
  
  
  /**
   * Gets the value of the IssueKey field.
   * The unique key used to identify this issue.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getIssueKey();
  
  
  /**
   * Gets the value of the IssueType field.
   * What type of issue this is. Used both to match up issues and to determine what authority grant is required in order to approve the issue.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UWIssueType getIssueType();
  
  
  public gw.pl.persistence.core.Key getIssueTypeID();
  
  
  /**
   * Gets the value of the Policy field.
   * The policy containing this history.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Policy getPolicy();
  
  
  public gw.pl.persistence.core.Key getPolicyID();
  
  
  /**
   * Gets the value of the PolicyPeriod field.
   * The PolicyPeriod for which this history event was generated.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getPolicyPeriod();
  
  
  public gw.pl.persistence.core.Key getPolicyPeriodID();
  
  
  /**
   * Gets the value of the ReferenceValue field.
   * The value to compare against
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getReferenceValue();
  
  
  /**
   * Gets the value of the ResponsibleUser field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getResponsibleUser();
  
  
  public gw.pl.persistence.core.Key getResponsibleUserID();
  
  
  /**
   * Gets the value of the Status field.
   * The nature of the operation on an issue which this history chronicles.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.UWIssueHistoryStatus getStatus();
  
  
  /**
   * Gets the value of the EditBeforeBind field.
   * Whether the operation remains valid through binding even if the policy is edited
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isEditBeforeBind();
  
  
  /**
   * Sets the value of the ApprovalDurationType field.
   */
  public void setApprovalDurationType(typekey.UWApprovalDurationType value);
  
  
  /**
   * Sets the value of the ApprovalInvalidFrom field.
   */
  public void setApprovalInvalidFrom(java.util.Date value);
  
  
  /**
   * Sets the value of the AutomaticOperationCause field.
   */
  public void setAutomaticOperationCause(java.lang.String value);
  
  
  /**
   * Sets the value of the BlockingPoint field.
   */
  public void setBlockingPoint(typekey.UWIssueBlockingPoint value);
  
  
  /**
   * Sets the value of the EditBeforeBind field.
   */
  public void setEditBeforeBind(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the EffDate field.
   */
  public void setEffDate(java.util.Date value);
  
  
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
   * Sets the value of the Policy field.
   */
  public void setPolicy(entity.Policy value);
  
  
  public void setPolicyID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PolicyPeriod field.
   */
  public void setPolicyPeriod(entity.PolicyPeriod value);
  
  
  public void setPolicyPeriodID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ReferenceValue field.
   */
  public void setReferenceValue(java.lang.String value);
  
  
  /**
   * Sets the value of the ResponsibleUser field.
   */
  public void setResponsibleUser(entity.User value);
  
  
  public void setResponsibleUserID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Status field.
   */
  public void setStatus(typekey.UWIssueHistoryStatus value);
  
  
  
}