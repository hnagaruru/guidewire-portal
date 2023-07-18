package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "UWRule.eti;UWRule.eix;UWRule.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface UWRuleInternal extends com.guidewire._generated.entity.RuleInternal, com.guidewire.bizrules.management.RuleVersionAwareInternal, com.guidewire.pc.domain.bizrules.UWRulePublicMethods, gw.bizrules.domain.RuleVersionDependent {
  /**
   * Adds the given element to the Jurisdictions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToJurisdictions(entity.AppCritJurisdiction element);
  
  
  /**
   * Adds the given element to the LinesOfBusiness array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLinesOfBusiness(entity.AppCritLineOfBusiness element);
  
  
  /**
   * Adds the given element to the PolicyTransactions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPolicyTransactions(entity.AppCritPolicyTransaction element);
  
  
  /**
   * Gets the value of the EndDate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEndDate();
  
  
  /**
   * Gets the value of the Jurisdictions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AppCritJurisdiction[] getJurisdictions();
  
  
  /**
   * Gets the value of the LinesOfBusiness field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AppCritLineOfBusiness[] getLinesOfBusiness();
  
  
  /**
   * Gets the value of the PolicyTransactions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AppCritPolicyTransaction[] getPolicyTransactions();
  
  
  /**
   * Gets the value of the StartDate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getStartDate();
  
  
  /**
   * Gets the value of the UWIssueType field.
   * The Underwriter Issue Type associated to this Rule
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UWIssueType getUWIssueType();
  
  
  public gw.pl.persistence.core.Key getUWIssueTypeID();
  
  
  /**
   * Gets the value of the ExternallyManaged field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isExternallyManaged();
  
  
  /**
   * Removes the given element from the Jurisdictions array. This is achieved by marking the element for removal.
   */
  public void removeFromJurisdictions(entity.AppCritJurisdiction element);
  
  
  /**
   * Removes the given element from the Jurisdictions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromJurisdictions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the LinesOfBusiness array. This is achieved by marking the element for removal.
   */
  public void removeFromLinesOfBusiness(entity.AppCritLineOfBusiness element);
  
  
  /**
   * Removes the given element from the LinesOfBusiness array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLinesOfBusiness(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the PolicyTransactions array. This is achieved by marking the element for removal.
   */
  public void removeFromPolicyTransactions(entity.AppCritPolicyTransaction element);
  
  
  /**
   * Removes the given element from the PolicyTransactions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPolicyTransactions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the EndDate field.
   */
  public void setEndDate(java.util.Date value);
  
  
  /**
   * Sets the value of the ExternallyManaged field.
   */
  public void setExternallyManaged(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Jurisdictions field.
   */
  public void setJurisdictions(entity.AppCritJurisdiction[] value);
  
  
  /**
   * Sets the value of the LinesOfBusiness field.
   */
  public void setLinesOfBusiness(entity.AppCritLineOfBusiness[] value);
  
  
  /**
   * Sets the value of the PolicyTransactions field.
   */
  public void setPolicyTransactions(entity.AppCritPolicyTransaction[] value);
  
  
  /**
   * Sets the value of the StartDate field.
   */
  public void setStartDate(java.util.Date value);
  
  
  /**
   * Sets the value of the UWIssueType field.
   */
  public void setUWIssueType(entity.UWIssueType value);
  
  
  public void setUWIssueTypeID(gw.pl.persistence.core.Key value);
  
  
  
}