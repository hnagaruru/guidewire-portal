package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Account.eti;Account.eix;Account.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface AccountInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.UserRoleOwnerInternal, com.guidewire._generated.entity.RootInfoInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.ValidatableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, com.guidewire._generated.entity.DestructionRootPinnableInternal, com.guidewire._generated.entity.EventAwareInternal, com.guidewire.pc.domain.account.AccountPublicMethods, com.guidewire.pc.domain.account.impl.AccountInternalMethods, com.guidewire.pc.domain.note.NoteContainer, com.guidewire.pc.domain.personaldata.PinnableDomainMethods, com.guidewire.pl.domain.validation.impl.ValidatableInternalMethods, com.guidewire.pl.system.bundle.InsertCallback, com.guidewire.pl.system.bundle.UpdateCallback, gw.api.assignment.UserRoleOwner, gw.api.domain.document.DocumentContainer, gw.api.history.CustomHistory {
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String ACCOUNTADDED_EVENT = "AccountAdded";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String ACCOUNTCHANGED_EVENT = "AccountChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String ACCOUNTREMOVED_EVENT = "AccountRemoved";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String RESYNCACCOUNT_EVENT = "ResyncAccount";
  
  /**
   * Adds the given element to the AccountContacts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToAccountContacts(entity.AccountContact element);
  
  
  /**
   * Adds the given element to the AccountLocations array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToAccountLocations(entity.AccountLocation element);
  
  
  /**
   * Adds the given element to the AcctholderedgeArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToAcctholderedgeArray(entity.Acctholderedge element);
  
  
  /**
   * Adds the given element to the JobGroups array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToJobGroups(entity.JobGroup element);
  
  
  /**
   * Adds the given element to the Notes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToNotes(entity.Note element);
  
  
  /**
   * Adds the given element to the PrimaryAcctLocArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPrimaryAcctLocArray(entity.PrimaryAcctLoc element);
  
  
  /**
   * Adds the given element to the ProducerCodes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToProducerCodes(entity.AccountProducerCode element);
  
  
  /**
   * Adds the given element to the RoleAssignments array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRoleAssignments(entity.AccountUserRoleAssignment element);
  
  
  /**
   * Adds the given element to the SourceRelatedAccounts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToSourceRelatedAccounts(entity.AccountAccount element);
  
  
  /**
   * Adds the given element to the TargetRelatedAccounts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToTargetRelatedAccounts(entity.AccountAccount element);
  
  
  /**
   * Gets the value of the AccountContacts field.
   * All the contacts related to this account, including inactive ones.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AccountContact[] getAccountContacts();
  
  
  /**
   * Gets the value of the AccountHolderContact field.
   * Account Holder Contact denormalized onto Account for performance.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Contact getAccountHolderContact();
  
  
  public gw.pl.persistence.core.Key getAccountHolderContactID();
  
  
  /**
   * Gets the value of the AccountLocations field.
   * The list of account locations for this Account
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AccountLocation[] getAccountLocations();
  
  
  /**
   * Gets the value of the AccountNumber field.
   * The account number of this account.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAccountNumber();
  
  
  /**
   * Gets the value of the AccountNumberDenorm field.
   * denorm field for AccountNumber
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAccountNumberDenorm();
  
  
  /**
   * Gets the value of the AccountOrgType field.
   * Organization type of this account
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AccountOrgType getAccountOrgType();
  
  
  /**
   * Gets the value of the AccountStatus field.
   * The status of this account
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AccountStatus getAccountStatus();
  
  
  /**
   * Gets the value of the AccountStatusUpdateTime field.
   * Time when account status was last updated
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getAccountStatusUpdateTime();
  
  
  /**
   * Gets the value of the AcctholderedgeArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Acctholderedge[] getAcctholderedgeArray();
  
  
  /**
   * Gets the value of the BusOpsDesc field.
   * Business and operations description.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBusOpsDesc();
  
  
  /**
   * Gets the value of the IndustryCode field.
   * Industry Code of Account
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IndustryCode getIndustryCode();
  
  
  public gw.pl.persistence.core.Key getIndustryCodeID();
  
  
  /**
   * Gets the value of the JobGroups field.
   * The list of Job Groups of this Account
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.JobGroup[] getJobGroups();
  
  
  /**
   * Gets the value of the LocationAutoNumberSeq field.
   * Sequence to autonumber account locations
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AutoNumberSequence getLocationAutoNumberSeq();
  
  
  public gw.pl.persistence.core.Key getLocationAutoNumberSeqID();
  
  
  /**
   * Gets the value of the LockingColumn field.
   * Meaningless column for locking
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getLockingColumn();
  
  
  /**
   * Gets the value of the Nickname field.
   * A nickname of the account used to distinguish multiple accounts of a single account holder
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getNickname();
  
  
  /**
   * Gets the value of the Notes field.
   * Notes associated with this account.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Note[] getNotes();
  
  
  /**
   * Gets the value of the OriginationDate field.
   * The date the account became a client of the carrier.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getOriginationDate();
  
  
  /**
   * Gets the value of the OtherOrgTypeDescription field.
   * If AccountOrgType is 'other', this value must be filled in
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOtherOrgTypeDescription();
  
  
  /**
   * Gets the value of the PreferredCoverageCurrency field.
   * Preferred Coverage Currency
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getPreferredCoverageCurrency();
  
  
  /**
   * Gets the value of the PreferredSettlementCurrency field.
   * Preferred Settlement Currency
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getPreferredSettlementCurrency();
  
  
  /**
   * Gets the value of the PrimaryAcctLocArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PrimaryAcctLoc[] getPrimaryAcctLocArray();
  
  
  /**
   * Gets the value of the PrimaryLanguage field.
   * The account's preferred language
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LanguageType getPrimaryLanguage();
  
  
  /**
   * Gets the value of the PrimaryLocale field.
   * The account's preferred locale
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LocaleType getPrimaryLocale();
  
  
  /**
   * Gets the value of the PrimaryLocation field.
   * The primary Location for this Account.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AccountLocation getPrimaryLocation();
  
  
  public gw.pl.persistence.core.Key getPrimaryLocationID();
  
  
  /**
   * Gets the value of the ProducerCodes field.
   * Producer Codes associated with this account.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AccountProducerCode[] getProducerCodes();
  
  
  /**
   * Gets the value of the RoleAssignments field.
   * Role Assignments for this account.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AccountUserRoleAssignment[] getRoleAssignments();
  
  
  /**
   * Gets the value of the ServiceTier field.
   * Customer Service Tier
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.CustomerServiceTier getServiceTier();
  
  
  /**
   * Gets the value of the SourceRelatedAccounts field.
   * Relationships from this account to another one.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AccountAccount[] getSourceRelatedAccounts();
  
  
  /**
   * Gets the value of the StateBureauNum field.
   * State Bureau number of this account.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStateBureauNum();
  
  
  /**
   * Gets the value of the TargetRelatedAccounts field.
   * Relationships from another account to this one.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AccountAccount[] getTargetRelatedAccounts();
  
  
  /**
   * Gets the value of the YearBusinessStarted field.
   * What year was the business started?
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getYearBusinessStarted();
  
  
  /**
   * Gets the value of the LinkContacts field.
   * Indicates that this Account will sync Contacts with an external Contact Management System.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isLinkContacts();
  
  
  /**
   * Gets the value of the LockedFromMerge field.
   * If true then no Policy may be created or retrieved on this Account
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isLockedFromMerge();
  
  
  /**
   * Removes the given element from the AccountContacts array. This is achieved by marking the element for removal.
   */
  public void removeFromAccountContacts(entity.AccountContact element);
  
  
  /**
   * Removes the given element from the AccountContacts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromAccountContacts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the AccountLocations array. This is achieved by marking the element for removal.
   */
  public void removeFromAccountLocations(entity.AccountLocation element);
  
  
  /**
   * Removes the given element from the AccountLocations array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromAccountLocations(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the AcctholderedgeArray array. This is achieved by marking the element for removal.
   */
  public void removeFromAcctholderedgeArray(entity.Acctholderedge element);
  
  
  /**
   * Removes the given element from the AcctholderedgeArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromAcctholderedgeArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the JobGroups array. This is achieved by marking the element for removal.
   */
  public void removeFromJobGroups(entity.JobGroup element);
  
  
  /**
   * Removes the given element from the JobGroups array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromJobGroups(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Notes array. This is achieved by marking the element for removal.
   */
  public void removeFromNotes(entity.Note element);
  
  
  /**
   * Removes the given element from the Notes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromNotes(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the PrimaryAcctLocArray array. This is achieved by marking the element for removal.
   */
  public void removeFromPrimaryAcctLocArray(entity.PrimaryAcctLoc element);
  
  
  /**
   * Removes the given element from the PrimaryAcctLocArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPrimaryAcctLocArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the ProducerCodes array. This is achieved by marking the element for removal.
   */
  public void removeFromProducerCodes(entity.AccountProducerCode element);
  
  
  /**
   * Removes the given element from the ProducerCodes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromProducerCodes(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the RoleAssignments array. This is achieved by marking the element for removal.
   */
  public void removeFromRoleAssignments(entity.AccountUserRoleAssignment element);
  
  
  /**
   * Removes the given element from the RoleAssignments array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRoleAssignments(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the SourceRelatedAccounts array. This is achieved by marking the element for removal.
   */
  public void removeFromSourceRelatedAccounts(entity.AccountAccount element);
  
  
  /**
   * Removes the given element from the SourceRelatedAccounts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromSourceRelatedAccounts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the TargetRelatedAccounts array. This is achieved by marking the element for removal.
   */
  public void removeFromTargetRelatedAccounts(entity.AccountAccount element);
  
  
  /**
   * Removes the given element from the TargetRelatedAccounts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromTargetRelatedAccounts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the AccountContacts field.
   */
  public void setAccountContacts(entity.AccountContact[] value);
  
  
  /**
   * Sets the value of the AccountHolderContact field.
   */
  public void setAccountHolderContact(entity.Contact value);
  
  
  public void setAccountHolderContactID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the AccountLocations field.
   */
  public void setAccountLocations(entity.AccountLocation[] value);
  
  
  /**
   * Sets the value of the AccountNumber field.
   */
  public void setAccountNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the AccountNumberDenorm field.
   */
  public void setAccountNumberDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the AccountOrgType field.
   */
  public void setAccountOrgType(typekey.AccountOrgType value);
  
  
  /**
   * Sets the value of the AccountStatus field.
   */
  public void setAccountStatus(typekey.AccountStatus value);
  
  
  /**
   * Sets the value of the AccountStatusUpdateTime field.
   */
  public void setAccountStatusUpdateTime(java.util.Date value);
  
  
  /**
   * Sets the value of the AcctholderedgeArray field.
   */
  public void setAcctholderedgeArray(entity.Acctholderedge[] value);
  
  
  /**
   * Sets the value of the BusOpsDesc field.
   */
  public void setBusOpsDesc(java.lang.String value);
  
  
  /**
   * Sets the value of the IndustryCode field.
   */
  public void setIndustryCode(entity.IndustryCode value);
  
  
  public void setIndustryCodeID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the JobGroups field.
   */
  public void setJobGroups(entity.JobGroup[] value);
  
  
  /**
   * Sets the value of the LinkContacts field.
   */
  public void setLinkContacts(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the LocationAutoNumberSeq field.
   */
  public void setLocationAutoNumberSeq(entity.AutoNumberSequence value);
  
  
  public void setLocationAutoNumberSeqID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LockedFromMerge field.
   */
  public void setLockedFromMerge(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the LockingColumn field.
   */
  public void setLockingColumn(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Nickname field.
   */
  public void setNickname(java.lang.String value);
  
  
  /**
   * Sets the value of the Notes field.
   */
  public void setNotes(entity.Note[] value);
  
  
  /**
   * Sets the value of the OriginationDate field.
   */
  public void setOriginationDate(java.util.Date value);
  
  
  /**
   * Sets the value of the OtherOrgTypeDescription field.
   */
  public void setOtherOrgTypeDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the PreferredCoverageCurrency field.
   */
  public void setPreferredCoverageCurrency(typekey.Currency value);
  
  
  /**
   * Sets the value of the PreferredSettlementCurrency field.
   */
  public void setPreferredSettlementCurrency(typekey.Currency value);
  
  
  /**
   * Sets the value of the PrimaryAcctLocArray field.
   */
  public void setPrimaryAcctLocArray(entity.PrimaryAcctLoc[] value);
  
  
  /**
   * Sets the value of the PrimaryLanguage field.
   */
  public void setPrimaryLanguage(typekey.LanguageType value);
  
  
  /**
   * Sets the value of the PrimaryLocale field.
   */
  public void setPrimaryLocale(typekey.LocaleType value);
  
  
  /**
   * Sets the value of the PrimaryLocation field.
   */
  public void setPrimaryLocation(entity.AccountLocation value);
  
  
  public void setPrimaryLocationID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ProducerCodes field.
   */
  public void setProducerCodes(entity.AccountProducerCode[] value);
  
  
  /**
   * Sets the value of the RoleAssignments field.
   */
  public void setRoleAssignments(entity.AccountUserRoleAssignment[] value);
  
  
  /**
   * Sets the value of the ServiceTier field.
   */
  public void setServiceTier(typekey.CustomerServiceTier value);
  
  
  /**
   * Sets the value of the SourceRelatedAccounts field.
   */
  public void setSourceRelatedAccounts(entity.AccountAccount[] value);
  
  
  /**
   * Sets the value of the StateBureauNum field.
   */
  public void setStateBureauNum(java.lang.String value);
  
  
  /**
   * Sets the value of the TargetRelatedAccounts field.
   */
  public void setTargetRelatedAccounts(entity.AccountAccount[] value);
  
  
  /**
   * Sets the value of the YearBusinessStarted field.
   */
  public void setYearBusinessStarted(java.lang.Integer value);
  
  
  
}