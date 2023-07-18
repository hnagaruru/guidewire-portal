package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyHold.eti;PolicyHold.eix;PolicyHold.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PolicyHoldInternal extends com.guidewire._generated.entity.RetireableInternal, gw.pc.policyhold.entity.PolicyHold {
  /**
   * Adds the given element to the Description_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToDescription_L10N_ARRAY(entity.PolicyHold_Description_L10N element);
  
  
  /**
   * Adds the given element to the HeldJobs array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToHeldJobs(entity.PolicyHoldJob element);
  
  
  /**
   * Adds the given element to the PolicyHoldZones array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPolicyHoldZones(entity.PolicyHoldZone element);
  
  
  /**
   * Adds the given element to the Rules array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRules(entity.PolicyHoldRule element);
  
  
  /**
   * Adds the given element to the UWIssueLongDesc_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToUWIssueLongDesc_L10N_ARRAY(entity.PolicyHold_UWIssueLongDesc_L10N element);
  
  
  /**
   * Gets the value of the Description field.
   * A description of the policy hold.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the Description_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyHold_Description_L10N[] getDescription_L10N_ARRAY();
  
  
  /**
   * Array association for partition Description_L10N_ARRAYByLanguage on array Description_L10N_ARRAY
   */
  public entity.PolicyHold_Description_L10N getDescription_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the EndDate field.
   * The end date for the hold.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEndDate();
  
  
  /**
   * Gets the value of the HeldJobs field.
   * Jobs that are held by this policy hold along with the last time they were evaluated.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyHoldJob[] getHeldJobs();
  
  
  /**
   * Gets the value of the HoldType field.
   * The type of the hold (ie., uw hold or regulatory hold)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.UWIssueCheckingSet getHoldType();
  
  
  /**
   * Gets the value of the IssueType field.
   * The uw issue that will be raised when the hold conditions are met.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UWIssueType getIssueType();
  
  
  public gw.pl.persistence.core.Key getIssueTypeID();
  
  
  /**
   * Gets the value of the PolicyHoldCode field.
   * The unique code of the policy hold that will be used to raise uw issues.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPolicyHoldCode();
  
  
  /**
   * Gets the value of the PolicyHoldZones field.
   * The zones that define this policy hold.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyHoldZone[] getPolicyHoldZones();
  
  
  /**
   * Gets the value of the Rules field.
   * The list of specific rules for this Policy Hold.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyHoldRule[] getRules();
  
  
  /**
   * Gets the value of the StartDate field.
   * The start date for the hold.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getStartDate();
  
  
  /**
   * Gets the value of the UWIssueLongDesc field.
   * The long description of the selected uw issue.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getUWIssueLongDesc();
  
  
  /**
   * Gets the value of the UWIssueLongDesc_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyHold_UWIssueLongDesc_L10N[] getUWIssueLongDesc_L10N_ARRAY();
  
  
  /**
   * Array association for partition UWIssueLongDesc_L10N_ARRAYByLanguage on array UWIssueLongDesc_L10N_ARRAY
   */
  public entity.PolicyHold_UWIssueLongDesc_L10N getUWIssueLongDesc_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Removes the given element from the Description_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromDescription_L10N_ARRAY(entity.PolicyHold_Description_L10N element);
  
  
  /**
   * Removes the given element from the Description_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDescription_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the HeldJobs array. This is achieved by marking the element for removal.
   */
  public void removeFromHeldJobs(entity.PolicyHoldJob element);
  
  
  /**
   * Removes the given element from the HeldJobs array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromHeldJobs(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the PolicyHoldZones array. This is achieved by marking the element for removal.
   */
  public void removeFromPolicyHoldZones(entity.PolicyHoldZone element);
  
  
  /**
   * Removes the given element from the PolicyHoldZones array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPolicyHoldZones(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Rules array. This is achieved by marking the element for removal.
   */
  public void removeFromRules(entity.PolicyHoldRule element);
  
  
  /**
   * Removes the given element from the Rules array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRules(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the UWIssueLongDesc_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromUWIssueLongDesc_L10N_ARRAY(entity.PolicyHold_UWIssueLongDesc_L10N element);
  
  
  /**
   * Removes the given element from the UWIssueLongDesc_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromUWIssueLongDesc_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the Description_L10N_ARRAY field.
   */
  public void setDescription_L10N_ARRAY(entity.PolicyHold_Description_L10N[] value);
  
  
  /**
   * Sets the value of the EndDate field.
   */
  public void setEndDate(java.util.Date value);
  
  
  /**
   * Sets the value of the HeldJobs field.
   */
  public void setHeldJobs(entity.PolicyHoldJob[] value);
  
  
  /**
   * Sets the value of the HoldType field.
   */
  public void setHoldType(typekey.UWIssueCheckingSet value);
  
  
  /**
   * Sets the value of the IssueType field.
   */
  public void setIssueType(entity.UWIssueType value);
  
  
  public void setIssueTypeID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PolicyHoldCode field.
   */
  public void setPolicyHoldCode(java.lang.String value);
  
  
  /**
   * Sets the value of the PolicyHoldZones field.
   */
  public void setPolicyHoldZones(entity.PolicyHoldZone[] value);
  
  
  /**
   * Sets the value of the Rules field.
   */
  public void setRules(entity.PolicyHoldRule[] value);
  
  
  /**
   * Sets the value of the StartDate field.
   */
  public void setStartDate(java.util.Date value);
  
  
  /**
   * Sets the value of the UWIssueLongDesc field.
   */
  public void setUWIssueLongDesc(java.lang.String value);
  
  
  /**
   * Sets the value of the UWIssueLongDesc_L10N_ARRAY field.
   */
  public void setUWIssueLongDesc_L10N_ARRAY(entity.PolicyHold_UWIssueLongDesc_L10N[] value);
  
  
  
}