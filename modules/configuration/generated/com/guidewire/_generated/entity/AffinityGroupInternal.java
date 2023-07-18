package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AffinityGroup.eti;AffinityGroup.eix;AffinityGroup.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface AffinityGroupInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.GlobalPersonNameInternal, com.guidewire._generated.entity.ObfuscatableInternal, gw.api.obfuscation.Obfuscator {
  /**
   * Adds the given element to the AffinityGroupProducerCodes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToAffinityGroupProducerCodes(entity.AffinityGroupProducerCode element);
  
  
  /**
   * Adds the given element to the Jurisdictions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToJurisdictions(entity.AffinityGroupJurisdiction element);
  
  
  /**
   * Adds the given element to the Products array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToProducts(entity.AffinityGroupProduct element);
  
  
  /**
   * Gets the value of the AffinityGroupProducerCodes field.
   * Producer Codes that this affinity group is available to.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AffinityGroupProducerCode[] getAffinityGroupProducerCodes();
  
  
  /**
   * Gets the value of the AffinityGroupType field.
   * Type of group
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AffinityGroupType getAffinityGroupType();
  
  
  /**
   * Gets the value of the Description field.
   * Description of the affinity group
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the EndDate field.
   * Affinity group end date
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEndDate();
  
  
  /**
   * Gets the value of the Jurisdictions field.
   * Jurisdictions that this affinity group is available to.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AffinityGroupJurisdiction[] getJurisdictions();
  
  
  /**
   * Gets the value of the Name field.
   * The name of affinity group.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName();
  
  
  /**
   * Gets the value of the NameDenorm field.
   * denorm field for Name
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getNameDenorm();
  
  
  /**
   * Gets the value of the NameKanji field.
   * Group name to search for in kanji (used only for Japanese).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getNameKanji();
  
  
  /**
   * Gets the value of the Organization field.
   * The Organization that this group belongs to.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Organization getOrganization();
  
  
  public gw.pl.persistence.core.Key getOrganizationID();
  
  
  /**
   * Gets the value of the PrimaryContactFirstName field.
   * First name of primary contact.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPrimaryContactFirstName();
  
  
  /**
   * Gets the value of the PrimaryContactFirstNameDenorm field.
   * denorm field for PrimaryContactFirstName
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPrimaryContactFirstNameDenorm();
  
  
  /**
   * Gets the value of the PrimaryContactLastName field.
   * Last name of primary contact.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPrimaryContactLastName();
  
  
  /**
   * Gets the value of the PrimaryContactLastNameDenorm field.
   * denorm field for PrimaryContactLastName
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPrimaryContactLastNameDenorm();
  
  
  /**
   * Gets the value of the PrimaryContactPhone field.
   * Phone number of primary contact.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPrimaryContactPhone();
  
  
  /**
   * Gets the value of the PrimaryContactPhoneCountryCode field.
   * The country associated with this phone number.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PhoneCountryCode getPrimaryContactPhoneCountryCode();
  
  
  /**
   * Gets the value of the PrimaryContactPhoneExtension field.
   * Phone extension
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPrimaryContactPhoneExtension();
  
  
  /**
   * Gets the value of the Products field.
   * Products associated with this Affinity Group.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AffinityGroupProduct[] getProducts();
  
  
  /**
   * Gets the value of the StartDate field.
   * Affinity group start date
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getStartDate();
  
  
  /**
   * Removes the given element from the AffinityGroupProducerCodes array. This is achieved by marking the element for removal.
   */
  public void removeFromAffinityGroupProducerCodes(entity.AffinityGroupProducerCode element);
  
  
  /**
   * Removes the given element from the AffinityGroupProducerCodes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromAffinityGroupProducerCodes(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Jurisdictions array. This is achieved by marking the element for removal.
   */
  public void removeFromJurisdictions(entity.AffinityGroupJurisdiction element);
  
  
  /**
   * Removes the given element from the Jurisdictions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromJurisdictions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Products array. This is achieved by marking the element for removal.
   */
  public void removeFromProducts(entity.AffinityGroupProduct element);
  
  
  /**
   * Removes the given element from the Products array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromProducts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the AffinityGroupProducerCodes field.
   */
  public void setAffinityGroupProducerCodes(entity.AffinityGroupProducerCode[] value);
  
  
  /**
   * Sets the value of the AffinityGroupType field.
   */
  public void setAffinityGroupType(typekey.AffinityGroupType value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the EndDate field.
   */
  public void setEndDate(java.util.Date value);
  
  
  /**
   * Sets the value of the Jurisdictions field.
   */
  public void setJurisdictions(entity.AffinityGroupJurisdiction[] value);
  
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value);
  
  
  /**
   * Sets the value of the NameDenorm field.
   */
  public void setNameDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the NameKanji field.
   */
  public void setNameKanji(java.lang.String value);
  
  
  /**
   * Sets the value of the Organization field.
   */
  public void setOrganization(entity.Organization value);
  
  
  public void setOrganizationID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PrimaryContactFirstName field.
   */
  public void setPrimaryContactFirstName(java.lang.String value);
  
  
  /**
   * Sets the value of the PrimaryContactFirstNameDenorm field.
   */
  public void setPrimaryContactFirstNameDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the PrimaryContactLastName field.
   */
  public void setPrimaryContactLastName(java.lang.String value);
  
  
  /**
   * Sets the value of the PrimaryContactLastNameDenorm field.
   */
  public void setPrimaryContactLastNameDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the PrimaryContactPhone field.
   */
  public void setPrimaryContactPhone(java.lang.String value);
  
  
  /**
   * Sets the value of the PrimaryContactPhoneCountryCode field.
   */
  public void setPrimaryContactPhoneCountryCode(typekey.PhoneCountryCode value);
  
  
  /**
   * Sets the value of the PrimaryContactPhoneExtension field.
   */
  public void setPrimaryContactPhoneExtension(java.lang.String value);
  
  
  /**
   * Sets the value of the Products field.
   */
  public void setProducts(entity.AffinityGroupProduct[] value);
  
  
  /**
   * Sets the value of the StartDate field.
   */
  public void setStartDate(java.util.Date value);
  
  
  
}