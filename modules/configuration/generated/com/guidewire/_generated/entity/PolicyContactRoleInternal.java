package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyContactRole.eti;PolicyContactRole.eix;PolicyContactRole.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PolicyContactRoleInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.EventAwareInternal, com.guidewire.pc.domain.contact.impl.PolicyContactRoleInternalMethods, gw.api.copier.EffDatedCopyable, gw.api.domain.DenormalizedFKOutOfDomainGraph, gw.api.domain.RefersOutOfDomainGraph, gw.api.domain.account.AccountSyncable, gw.api.domain.account.Mergeable, gw.api.effdate.UniqueOnPolicyPeriod, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String POLICYCONTACTROLEADDED_EVENT = "PolicyContactRoleAdded";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String POLICYCONTACTROLECHANGED_EVENT = "PolicyContactRoleChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String POLICYCONTACTROLEREMOVED_EVENT = "PolicyContactRoleRemoved";
  
  /**
   * Gets the value of the AccountContactRole field.
   * The account contact role this policy contact role may be synced with.  While the policy contact role contains policy contract information, the account contact role contains shared role information.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AccountContactRole getAccountContactRole();
  
  
  public gw.pl.persistence.core.Key getAccountContactRoleID();
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyContactRole getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the CompanyNameInternal field.
   * Internal field for sharing and revisioning the role's company name.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCompanyNameInternal();
  
  
  /**
   * Gets the value of the CompanyNameInternalDenorm field.
   * denorm field for CompanyNameInternal
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCompanyNameInternalDenorm();
  
  
  /**
   * Gets the value of the CompanyNameKanjiInternal field.
   * Internal field for sharing and revisioning the role's company name in Kanji.  Used only for Japanese names and will be null otherwise.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCompanyNameKanjiInternal();
  
  
  /**
   * Gets the value of the CompanyNameKanjiInternalDenorm field.
   * denorm field for CompanyNameKanjiInternal
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCompanyNameKanjiInternalDenorm();
  
  
  /**
   * Gets the value of the ContactDenorm field.
   * The PolicyContactRole.AccountContactRole.AccountContact.Contact (denormalization).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Contact getContactDenorm();
  
  
  public gw.pl.persistence.core.Key getContactDenormID();
  
  
  /**
   * Gets the value of the DateOfBirthInternal field.
   * Internal field for sharing and revisioning the date of birth.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateOfBirthInternal();
  
  
  /**
   * Gets the value of the FirstNameInternal field.
   * Internal field for sharing and revisioning the role's first name.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFirstNameInternal();
  
  
  /**
   * Gets the value of the FirstNameInternalDenorm field.
   * denorm field for FirstNameInternal
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFirstNameInternalDenorm();
  
  
  /**
   * Gets the value of the FirstNameKanjiInternal field.
   * Internal field for sharing and revisioning the role's first name in Kanji.  Used only for Japanese names and will be null otherwise.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFirstNameKanjiInternal();
  
  
  /**
   * Gets the value of the FirstNameKanjiInternalDenorm field.
   * denorm field for FirstNameKanjiInternal
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFirstNameKanjiInternalDenorm();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyContactRole getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the LastNameInternal field.
   * Internal field for sharing and revisioning the role's last name.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLastNameInternal();
  
  
  /**
   * Gets the value of the LastNameInternalDenorm field.
   * denorm field for LastNameInternal
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLastNameInternalDenorm();
  
  
  /**
   * Gets the value of the LastNameKanjiInternal field.
   * Internal field for sharing and revisioning the role's last name in Kanji.  Used only for Japanese names and will be null otherwise.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLastNameKanjiInternal();
  
  
  /**
   * Gets the value of the LastNameKanjiInternalDenorm field.
   * denorm field for LastNameKanjiInternal
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLastNameKanjiInternalDenorm();
  
  
  /**
   * Gets the value of the MaritalStatusInternal field.
   * Internal field for sharing and revisioning the marital status.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.MaritalStatus getMaritalStatusInternal();
  
  
  /**
   * Gets the value of the ParticleInternal field.
   * Particle for (French) name
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getParticleInternal();
  
  
  /**
   * Gets the value of the SeqNumber field.
   * The contact sequence number
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getSeqNumber();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PolicyContactRole getSubtype();
  
  
  /**
   * Sets the value of the AccountContactRole field.
   */
  public void setAccountContactRole(entity.AccountContactRole value);
  
  
  public void setAccountContactRoleID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.PolicyContactRole value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the CompanyNameInternal field.
   */
  public void setCompanyNameInternal(java.lang.String value);
  
  
  /**
   * Sets the value of the CompanyNameInternalDenorm field.
   */
  public void setCompanyNameInternalDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the CompanyNameKanjiInternal field.
   */
  public void setCompanyNameKanjiInternal(java.lang.String value);
  
  
  /**
   * Sets the value of the CompanyNameKanjiInternalDenorm field.
   */
  public void setCompanyNameKanjiInternalDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the ContactDenorm field.
   */
  public void setContactDenorm(entity.Contact value);
  
  
  public void setContactDenormID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the DateOfBirthInternal field.
   */
  public void setDateOfBirthInternal(java.util.Date value);
  
  
  /**
   * Sets the value of the FirstNameInternal field.
   */
  public void setFirstNameInternal(java.lang.String value);
  
  
  /**
   * Sets the value of the FirstNameInternalDenorm field.
   */
  public void setFirstNameInternalDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the FirstNameKanjiInternal field.
   */
  public void setFirstNameKanjiInternal(java.lang.String value);
  
  
  /**
   * Sets the value of the FirstNameKanjiInternalDenorm field.
   */
  public void setFirstNameKanjiInternalDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.PolicyContactRole value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LastNameInternal field.
   */
  public void setLastNameInternal(java.lang.String value);
  
  
  /**
   * Sets the value of the LastNameInternalDenorm field.
   */
  public void setLastNameInternalDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the LastNameKanjiInternal field.
   */
  public void setLastNameKanjiInternal(java.lang.String value);
  
  
  /**
   * Sets the value of the LastNameKanjiInternalDenorm field.
   */
  public void setLastNameKanjiInternalDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the MaritalStatusInternal field.
   */
  public void setMaritalStatusInternal(typekey.MaritalStatus value);
  
  
  /**
   * Sets the value of the ParticleInternal field.
   */
  public void setParticleInternal(java.lang.String value);
  
  
  /**
   * Sets the value of the SeqNumber field.
   */
  public void setSeqNumber(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.PolicyContactRole value);
  
  
  
}