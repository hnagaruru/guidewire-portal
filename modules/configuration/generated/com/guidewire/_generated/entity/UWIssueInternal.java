package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "UWIssue.eti;UWIssue.eix;UWIssue.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface UWIssueInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.UWIssueDelegateInternal, com.guidewire.pc.domain.policy.UWIssuePublicMethods, gw.api.copier.EffDatedCopyable, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the LongDescription_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLongDescription_L10N_ARRAY(entity.UWIssue_LongDescription_L10N element);
  
  
  /**
   * Adds the given element to the ShortDescription_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToShortDescription_L10N_ARRAY(entity.UWIssue_ShortDescription_L10N element);
  
  
  /**
   * Gets the value of the ApprovalBlockingPoint field.
   * The point at which this approval still blocks
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.UWIssueBlockingPoint getApprovalBlockingPoint();
  
  
  /**
   * Gets the value of the ApprovalDurationType field.
   * A typekey specifying how long the approval is valid; if 1yr or 3yr, then an expiration date is computed.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.UWApprovalDurationType getApprovalDurationType();
  
  
  /**
   * Gets the value of the ApprovalInvalidFrom field.
   * The date on which the approval ceases to be valid. This value is null except when DurationType is 1yr or 3yrs.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getApprovalInvalidFrom();
  
  
  /**
   * Gets the value of the ApprovalValue field.
   * The limit value to which the issue has been approved
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getApprovalValue();
  
  
  /**
   * Gets the value of the ApprovingUser field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getApprovingUser();
  
  
  public gw.pl.persistence.core.Key getApprovingUserID();
  
  
  /**
   * Gets the value of the AutomaticApprovalCause field.
   * The operation in progress when automatic approvals were created for auto-approvable issues. Null is used to indicate a human-generated approval.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAutomaticApprovalCause();
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UWIssue getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UWIssue getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the LongDescription field.
   * The long description of this issue.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLongDescription();
  
  
  /**
   * Gets the value of the LongDescription_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UWIssue_LongDescription_L10N[] getLongDescription_L10N_ARRAY();
  
  
  /**
   * Array association for partition LongDescription_L10N_ARRAYByLanguage on array LongDescription_L10N_ARRAY
   */
  public entity.UWIssue_LongDescription_L10N getLongDescription_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the ShortDescription field.
   * The short description of this issue.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getShortDescription();
  
  
  /**
   * Gets the value of the ShortDescription_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UWIssue_ShortDescription_L10N[] getShortDescription_L10N_ARRAY();
  
  
  /**
   * Array association for partition ShortDescription_L10N_ARRAYByLanguage on array ShortDescription_L10N_ARRAY
   */
  public entity.UWIssue_ShortDescription_L10N getShortDescription_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the Active field.
   * Whether or not this issue is active.  An issue will be marked inactive if it no longer applies to the policy but we want to keep approvals for the issue around in case the issue occurs again.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isActive();
  
  
  /**
   * Gets the value of the CanEditApprovalBeforeBind field.
   * If true then approval still valid with poilcy edits before bind
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCanEditApprovalBeforeBind();
  
  
  /**
   * Gets the value of the HasApprovalOrRejection field.
   * If true then approval this issue has an associated approval.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isHasApprovalOrRejection();
  
  
  /**
   * Removes the given element from the LongDescription_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromLongDescription_L10N_ARRAY(entity.UWIssue_LongDescription_L10N element);
  
  
  /**
   * Removes the given element from the LongDescription_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLongDescription_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the ShortDescription_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromShortDescription_L10N_ARRAY(entity.UWIssue_ShortDescription_L10N element);
  
  
  /**
   * Removes the given element from the ShortDescription_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromShortDescription_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Active field.
   */
  public void setActive(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the ApprovalBlockingPoint field.
   */
  public void setApprovalBlockingPoint(typekey.UWIssueBlockingPoint value);
  
  
  /**
   * Sets the value of the ApprovalDurationType field.
   */
  public void setApprovalDurationType(typekey.UWApprovalDurationType value);
  
  
  /**
   * Sets the value of the ApprovalInvalidFrom field.
   */
  public void setApprovalInvalidFrom(java.util.Date value);
  
  
  /**
   * Sets the value of the ApprovalValue field.
   */
  public void setApprovalValue(java.lang.String value);
  
  
  /**
   * Sets the value of the ApprovingUser field.
   */
  public void setApprovingUser(entity.User value);
  
  
  public void setApprovingUserID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the AutomaticApprovalCause field.
   */
  public void setAutomaticApprovalCause(java.lang.String value);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.UWIssue value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the CanEditApprovalBeforeBind field.
   */
  public void setCanEditApprovalBeforeBind(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.UWIssue value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the HasApprovalOrRejection field.
   */
  public void setHasApprovalOrRejection(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the LongDescription field.
   */
  public void setLongDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the LongDescription_L10N_ARRAY field.
   */
  public void setLongDescription_L10N_ARRAY(entity.UWIssue_LongDescription_L10N[] value);
  
  
  /**
   * Sets the value of the ShortDescription field.
   */
  public void setShortDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the ShortDescription_L10N_ARRAY field.
   */
  public void setShortDescription_L10N_ARRAY(entity.UWIssue_ShortDescription_L10N[] value);
  
  
  
}