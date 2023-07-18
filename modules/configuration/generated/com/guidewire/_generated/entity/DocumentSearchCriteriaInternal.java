package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "DocumentSearchCriteria.eti;DocumentSearchCriteria.eix;DocumentSearchCriteria.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface DocumentSearchCriteriaInternal extends com.guidewire._generated.entity.VersionableInternal, com.guidewire.pc.domain.document.impl.DocumentSearchCriteriaCoreExtMethods, com.guidewire.pl.domain.document.DocumentSearchCriteriaPublicMethods, com.guidewire.pl.domain.document.impl.DocumentSearchCriteriaInternalMethods, java.io.Serializable {
  /**
   * Adds the given element to the DocumentSecurityTypes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToDocumentSecurityTypes(entity.DocumentSecurityTypeSearchWrapper element);
  
  
  /**
   * Adds the given element to the PolicyPeriodWrappers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPolicyPeriodWrappers(entity.DocumentSearchPolicyPeriodWrapper element);
  
  
  /**
   * Adds the given element to the TypeWrappers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToTypeWrappers(entity.DocumentSearchTypeWrapper element);
  
  
  /**
   * Gets the value of the Account field.
   * Associated account
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Account getAccount();
  
  
  public gw.pl.persistence.core.Key getAccountID();
  
  
  /**
   * Gets the value of the Author field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAuthor();
  
  
  /**
   * Gets the value of the Contingency field.
   * Associated contingency.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Contingency getContingency();
  
  
  public gw.pl.persistence.core.Key getContingencyID();
  
  
  /**
   * Gets the value of the DateFrom field.
   * Date From
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateFrom();
  
  
  /**
   * Gets the value of the DateTo field.
   * Date To
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateTo();
  
  
  /**
   * Gets the value of the Description field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the DocumentPublicID field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDocumentPublicID();
  
  
  /**
   * Gets the value of the DocumentSecurityTypes field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.DocumentSecurityTypeSearchWrapper[] getDocumentSecurityTypes();
  
  
  /**
   * Gets the value of the Job field.
   * Associated Job.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Job getJob();
  
  
  public gw.pl.persistence.core.Key getJobID();
  
  
  /**
   * Gets the value of the Language field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LanguageType getLanguage();
  
  
  /**
   * Gets the value of the NameOrID field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getNameOrID();
  
  
  /**
   * Gets the value of the Policy field.
   * Associated policy.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Policy getPolicy();
  
  
  public gw.pl.persistence.core.Key getPolicyID();
  
  
  /**
   * Gets the value of the PolicyPeriod field.
   * Associated PolicyPeriod.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getPolicyPeriod();
  
  
  public gw.pl.persistence.core.Key getPolicyPeriodID();
  
  
  /**
   * Gets the value of the PolicyPeriodWrappers field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.DocumentSearchPolicyPeriodWrapper[] getPolicyPeriodWrappers();
  
  
  /**
   * Gets the value of the Section field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.DocumentSection getSection();
  
  
  /**
   * Gets the value of the Status field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.DocumentStatusType getStatus();
  
  
  /**
   * Gets the value of the Type field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.DocumentType getType();
  
  
  /**
   * Gets the value of the TypeWrappers field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.DocumentSearchTypeWrapper[] getTypeWrappers();
  
  
  /**
   * Gets the value of the IncludeObsoletes field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isIncludeObsoletes();
  
  
  /**
   * Gets the value of the Pending field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isPending();
  
  
  /**
   * Removes the given element from the DocumentSecurityTypes array. This is achieved by marking the element for removal.
   */
  public void removeFromDocumentSecurityTypes(entity.DocumentSecurityTypeSearchWrapper element);
  
  
  /**
   * Removes the given element from the DocumentSecurityTypes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDocumentSecurityTypes(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the PolicyPeriodWrappers array. This is achieved by marking the element for removal.
   */
  public void removeFromPolicyPeriodWrappers(entity.DocumentSearchPolicyPeriodWrapper element);
  
  
  /**
   * Removes the given element from the PolicyPeriodWrappers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPolicyPeriodWrappers(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the TypeWrappers array. This is achieved by marking the element for removal.
   */
  public void removeFromTypeWrappers(entity.DocumentSearchTypeWrapper element);
  
  
  /**
   * Removes the given element from the TypeWrappers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromTypeWrappers(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Account field.
   */
  public void setAccount(entity.Account value);
  
  
  public void setAccountID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Author field.
   */
  public void setAuthor(java.lang.String value);
  
  
  /**
   * Sets the value of the Contingency field.
   */
  public void setContingency(entity.Contingency value);
  
  
  public void setContingencyID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the DateFrom field.
   */
  public void setDateFrom(java.util.Date value);
  
  
  /**
   * Sets the value of the DateTo field.
   */
  public void setDateTo(java.util.Date value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the DocumentPublicID field.
   */
  public void setDocumentPublicID(java.lang.String value);
  
  
  /**
   * Sets the value of the DocumentSecurityTypes field.
   */
  public void setDocumentSecurityTypes(entity.DocumentSecurityTypeSearchWrapper[] value);
  
  
  /**
   * Sets the value of the IncludeObsoletes field.
   */
  public void setIncludeObsoletes(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Job field.
   */
  public void setJob(entity.Job value);
  
  
  public void setJobID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Language field.
   */
  public void setLanguage(typekey.LanguageType value);
  
  
  /**
   * Sets the value of the NameOrID field.
   */
  public void setNameOrID(java.lang.String value);
  
  
  /**
   * Sets the value of the Pending field.
   */
  public void setPending(java.lang.Boolean value);
  
  
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
   * Sets the value of the PolicyPeriodWrappers field.
   */
  public void setPolicyPeriodWrappers(entity.DocumentSearchPolicyPeriodWrapper[] value);
  
  
  /**
   * Sets the value of the Section field.
   */
  public void setSection(typekey.DocumentSection value);
  
  
  /**
   * Sets the value of the Status field.
   */
  public void setStatus(typekey.DocumentStatusType value);
  
  
  /**
   * Sets the value of the Type field.
   */
  public void setType(typekey.DocumentType value);
  
  
  /**
   * Sets the value of the TypeWrappers field.
   */
  public void setTypeWrappers(entity.DocumentSearchTypeWrapper[] value);
  
  
  
}