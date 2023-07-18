package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "User.eti;User.eix;User.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface UserInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ValidatableInternal, com.guidewire._generated.entity.ObfuscatableInternal, com.guidewire._generated.entity.EventAwareInternal, com.guidewire.pc.domain.community.impl.UserCoreExtInternalMethods, com.guidewire.pc.domain.community.impl.UserCoreExtMethods, com.guidewire.pl.domain.community.UserPublicMethods, com.guidewire.pl.domain.community.impl.UserInternalMethods, com.guidewire.pl.domain.validation.impl.ValidatableInternalMethods, com.guidewire.pl.system.bundle.RemoveCallback, com.guidewire.pl.system.bundle.UpdateCallback, gw.api.obfuscation.Obfuscator {
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String USERADDED_EVENT = "UserAdded";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String USERCHANGED_EVENT = "UserChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String USERREMOVED_EVENT = "UserRemoved";
  
  /**
   * Adds the given element to the Attributes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToAttributes(entity.AttributeUser element);
  
  
  /**
   * Adds the given element to the BackupUsers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBackupUsers(entity.UserBackup element);
  
  
  /**
   * Adds the given element to the GroupUsers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToGroupUsers(entity.GroupUser element);
  
  
  /**
   * Adds the given element to the Regions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRegions(entity.UserRegion element);
  
  
  /**
   * Adds the given element to the RelatedAgencies array. This is achieved by setting the parent foreign key to this entity instance.
   * @deprecated External organizations that an underwriter deals with.
   */
  @java.lang.Deprecated
  public void addToRelatedAgencies(entity.OrganizationUnderwriter element);
  
  
  /**
   * Adds the given element to the Roles array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRoles(entity.UserRole element);
  
  
  /**
   * Adds the given element to the UserAuthorityProfiles array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToUserAuthorityProfiles(entity.UserAuthorityProfile element);
  
  
  /**
   * Adds the given element to the UserProducerCodes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToUserProducerCodes(entity.UserProducerCode element);
  
  
  /**
   * Adds the given element to the UserUIPreferencesArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToUserUIPreferencesArray(entity.UserUIPreferences element);
  
  
  /**
   * Gets the value of the Attributes field.
   * Attributes for the user.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AttributeUser[] getAttributes();
  
  
  /**
   * Gets the value of the BackupUsers field.
   * Backup users for this user. Though this is an array, users can only have one backup user.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UserBackup[] getBackupUsers();
  
  
  /**
   * Gets the value of the Contact field.
   * Contact entry related to the user.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UserContact getContact();
  
  
  public gw.pl.persistence.core.Key getContactID();
  
  
  /**
   * Gets the value of the Credential field.
   * Security credential for the user.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Credential getCredential();
  
  
  public gw.pl.persistence.core.Key getCredentialID();
  
  
  /**
   * Gets the value of the DefaultCountry field.
   * User's default country
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Country getDefaultCountry();
  
  
  /**
   * Gets the value of the DefaultPhoneCountry field.
   * User's default phone country
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PhoneCountryCode getDefaultPhoneCountry();
  
  
  /**
   * Gets the value of the Department field.
   * User's department within the company.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDepartment();
  
  
  /**
   * Gets the value of the ExperienceLevel field.
   * Experience level of the user.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.UserExperienceType getExperienceLevel();
  
  
  /**
   * Gets the value of the GroupUsers field.
   * Groups associated with this user.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GroupUser[] getGroupUsers();
  
  
  /**
   * Gets the value of the JobTitle field.
   * User's job title.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getJobTitle();
  
  
  /**
   * Gets the value of the Language field.
   * User's preferred language.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LanguageType getLanguage();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the Locale field.
   * User's preferred locale.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LocaleType getLocale();
  
  
  /**
   * Gets the value of the Organization field.
   * Each user should belong to exactly one organization
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Organization getOrganization();
  
  
  public gw.pl.persistence.core.Key getOrganizationID();
  
  
  /**
   * Gets the value of the Regions field.
   * Regions associated with this user.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UserRegion[] getRegions();
  
  
  /**
   * Gets the value of the RelatedAgencies field.
   * @deprecated External organizations that an underwriter deals with.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.OrganizationUnderwriter[] getRelatedAgencies();
  
  
  /**
   * Gets the value of the Roles field.
   * Security roles granted to the user.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UserRole[] getRoles();
  
  
  /**
   * Gets the value of the SessionTimeoutSecs field.
   * User's session timeout value in seconds
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getSessionTimeoutSecs();
  
  
  /**
   * Gets the value of the SystemUserType field.
   * Indicates the type of special system users (for example, default claim owner). This is null for regular users.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.SystemUserType getSystemUserType();
  
  
  /**
   * Gets the value of the TimeZone field.
   * User's time zone.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.TimeZoneType getTimeZone();
  
  
  /**
   * Gets the value of the UserAuthorityProfiles field.
   * Authority profiles assigned to the user.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UserAuthorityProfile[] getUserAuthorityProfiles();
  
  
  /**
   * Gets the value of the UserProducerCodes field.
   * Available producer codes to a user.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UserProducerCode[] getUserProducerCodes();
  
  
  /**
   * Gets the value of the UserSettings field.
   * Settings for this user (formerly known as preferences).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UserSettings getUserSettings();
  
  
  public gw.pl.persistence.core.Key getUserSettingsID();
  
  
  /**
   * Gets the value of the UserType field.
   * Indicates type of the user.  Primarily used for assignments.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.UserType getUserType();
  
  
  /**
   * Gets the value of the UserUIPreferences field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UserUIPreferences getUserUIPreferences();
  
  
  /**
   * Gets the value of the UserUIPreferencesArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UserUIPreferences[] getUserUIPreferencesArray();
  
  
  public gw.pl.persistence.core.Key getUserUIPreferencesID();
  
  
  /**
   * Gets the value of the VacationStatus field.
   * The vacation status of this user.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.VacationStatusType getVacationStatus();
  
  
  /**
   * Gets the value of the ValidationLevel field.
   * Validation level that this object passed (if any) before it was stored.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ValidationLevel getValidationLevel();
  
  
  /**
   * Gets the value of the ExternalUser field.
   * If true, the user is an external user, and claims assigned to the user should be treated as externally owned.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isExternalUser();
  
  
  /**
   * Gets the value of the UseOrgAddress field.
   * If true, user's address is the same as the address of their organization.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isUseOrgAddress();
  
  
  /**
   * Gets the value of the UseProducerCodeSecurity field.
   * Is the user subject to ProducerCode security. This defaults to true for external users and false for internal users.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isUseProducerCodeSecurity();
  
  
  /**
   * Removes the given element from the Attributes array. This is achieved by marking the element for removal.
   */
  public void removeFromAttributes(entity.AttributeUser element);
  
  
  /**
   * Removes the given element from the Attributes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromAttributes(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the BackupUsers array. This is achieved by marking the element for removal.
   */
  public void removeFromBackupUsers(entity.UserBackup element);
  
  
  /**
   * Removes the given element from the BackupUsers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBackupUsers(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the GroupUsers array. This is achieved by marking the element for removal.
   */
  public void removeFromGroupUsers(entity.GroupUser element);
  
  
  /**
   * Removes the given element from the GroupUsers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromGroupUsers(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Regions array. This is achieved by marking the element for removal.
   */
  public void removeFromRegions(entity.UserRegion element);
  
  
  /**
   * Removes the given element from the Regions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRegions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the RelatedAgencies array. This is achieved by marking the element for removal.
   * @deprecated External organizations that an underwriter deals with.
   */
  @java.lang.Deprecated
  public void removeFromRelatedAgencies(entity.OrganizationUnderwriter element);
  
  
  /**
   * Removes the given element from the RelatedAgencies array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRelatedAgencies(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Roles array. This is achieved by marking the element for removal.
   */
  public void removeFromRoles(entity.UserRole element);
  
  
  /**
   * Removes the given element from the Roles array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRoles(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the UserAuthorityProfiles array. This is achieved by marking the element for removal.
   */
  public void removeFromUserAuthorityProfiles(entity.UserAuthorityProfile element);
  
  
  /**
   * Removes the given element from the UserAuthorityProfiles array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromUserAuthorityProfiles(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the UserProducerCodes array. This is achieved by marking the element for removal.
   */
  public void removeFromUserProducerCodes(entity.UserProducerCode element);
  
  
  /**
   * Removes the given element from the UserProducerCodes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromUserProducerCodes(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the UserUIPreferencesArray array. This is achieved by marking the element for removal.
   */
  public void removeFromUserUIPreferencesArray(entity.UserUIPreferences element);
  
  
  /**
   * Removes the given element from the UserUIPreferencesArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromUserUIPreferencesArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Attributes field.
   */
  public void setAttributes(entity.AttributeUser[] value);
  
  
  /**
   * Sets the value of the BackupUsers field.
   */
  public void setBackupUsers(entity.UserBackup[] value);
  
  
  /**
   * Sets the value of the Contact field.
   */
  public void setContact(entity.UserContact value);
  
  
  public void setContactID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Credential field.
   */
  public void setCredential(entity.Credential value);
  
  
  public void setCredentialID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the DefaultCountry field.
   */
  public void setDefaultCountry(typekey.Country value);
  
  
  /**
   * Sets the value of the DefaultPhoneCountry field.
   */
  public void setDefaultPhoneCountry(typekey.PhoneCountryCode value);
  
  
  /**
   * Sets the value of the Department field.
   */
  public void setDepartment(java.lang.String value);
  
  
  /**
   * Sets the value of the ExperienceLevel field.
   */
  public void setExperienceLevel(typekey.UserExperienceType value);
  
  
  /**
   * Sets the value of the ExternalUser field.
   */
  public void setExternalUser(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the GroupUsers field.
   */
  public void setGroupUsers(entity.GroupUser[] value);
  
  
  /**
   * Sets the value of the JobTitle field.
   */
  public void setJobTitle(java.lang.String value);
  
  
  /**
   * Sets the value of the Language field.
   */
  public void setLanguage(typekey.LanguageType value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the Locale field.
   */
  public void setLocale(typekey.LocaleType value);
  
  
  /**
   * Sets the value of the Organization field.
   */
  public void setOrganization(entity.Organization value);
  
  
  public void setOrganizationID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Regions field.
   */
  public void setRegions(entity.UserRegion[] value);
  
  
  /**
   * Sets the value of the RelatedAgencies field.
   * @deprecated External organizations that an underwriter deals with.
   */
  @java.lang.Deprecated
  public void setRelatedAgencies(entity.OrganizationUnderwriter[] value);
  
  
  /**
   * Sets the value of the Roles field.
   */
  public void setRoles(entity.UserRole[] value);
  
  
  /**
   * Sets the value of the SessionTimeoutSecs field.
   */
  public void setSessionTimeoutSecs(java.lang.Integer value);
  
  
  /**
   * Sets the value of the SystemUserType field.
   */
  public void setSystemUserType(typekey.SystemUserType value);
  
  
  /**
   * Sets the value of the TimeZone field.
   */
  public void setTimeZone(typekey.TimeZoneType value);
  
  
  /**
   * Sets the value of the UseOrgAddress field.
   */
  public void setUseOrgAddress(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the UseProducerCodeSecurity field.
   */
  public void setUseProducerCodeSecurity(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the UserAuthorityProfiles field.
   */
  public void setUserAuthorityProfiles(entity.UserAuthorityProfile[] value);
  
  
  /**
   * Sets the value of the UserProducerCodes field.
   */
  public void setUserProducerCodes(entity.UserProducerCode[] value);
  
  
  /**
   * Sets the value of the UserSettings field.
   */
  public void setUserSettings(entity.UserSettings value);
  
  
  public void setUserSettingsID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the UserType field.
   */
  public void setUserType(typekey.UserType value);
  
  
  /**
   * Sets the value of the UserUIPreferences field.
   */
  public void setUserUIPreferences(entity.UserUIPreferences value);
  
  
  /**
   * Sets the value of the UserUIPreferencesArray field.
   */
  public void setUserUIPreferencesArray(entity.UserUIPreferences[] value);
  
  
  public void setUserUIPreferencesID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the VacationStatus field.
   */
  public void setVacationStatus(typekey.VacationStatusType value);
  
  
  /**
   * Sets the value of the ValidationLevel field.
   */
  public void setValidationLevel(typekey.ValidationLevel value);
  
  
  
}