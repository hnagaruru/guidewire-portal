package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyAddress.eti;PolicyAddress.eix;PolicyAddress.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PolicyAddressInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.EventAwareInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.RefersOutOfDomainGraph, gw.api.domain.account.AccountSyncable, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String POLICYADDRESSADDED_EVENT = "PolicyAddressAdded";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String POLICYADDRESSCHANGED_EVENT = "PolicyAddressChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String POLICYADDRESSREMOVED_EVENT = "PolicyAddressRemoved";
  
  /**
   * Gets the value of the Address field.
   * The address this policy address may be synced with.  While the policy address contains policy contract information, the address contains shared role information.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Address getAddress();
  
  
  public gw.pl.persistence.core.Key getAddressID();
  
  
  /**
   * Gets the value of the AddressLine1Internal field.
   * Address Line 1
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressLine1Internal();
  
  
  /**
   * Gets the value of the AddressLine1KanjiInternal field.
   * Address Line 1 Kanji.  Used only for Japanese addresses and will be null otherwise.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressLine1KanjiInternal();
  
  
  /**
   * Gets the value of the AddressLine2Internal field.
   * Address Line 2
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressLine2Internal();
  
  
  /**
   * Gets the value of the AddressLine2KanjiInternal field.
   * Address Line 2 Kanji.  Used only for Japanese addresses and will be null otherwise.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressLine2KanjiInternal();
  
  
  /**
   * Gets the value of the AddressLine3Internal field.
   * Address Line 3
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressLine3Internal();
  
  
  /**
   * Gets the value of the AddressTypeInternal field.
   * Type of this address record.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AddressType getAddressTypeInternal();
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyAddress getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the CEDEXBureauInternal field.
   * CEDEX: Special business mail delivery bureau (France)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCEDEXBureauInternal();
  
  
  /**
   * Gets the value of the CityInternal field.
   * City.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCityInternal();
  
  
  /**
   * Gets the value of the CityInternalDenorm field.
   * denorm field for CityInternal
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCityInternalDenorm();
  
  
  /**
   * Gets the value of the CityKanjiInternal field.
   * City Kanji.  Used only for Japanese addresses and will be null otherwise.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCityKanjiInternal();
  
  
  /**
   * Gets the value of the CityKanjiInternalDenorm field.
   * denorm field for CityKanjiInternal
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCityKanjiInternalDenorm();
  
  
  /**
   * Gets the value of the CountryInternal field.
   * Country.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Country getCountryInternal();
  
  
  /**
   * Gets the value of the CountyInternal field.
   * County.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCountyInternal();
  
  
  /**
   * Gets the value of the DescriptionInternal field.
   * Address Description
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescriptionInternal();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyAddress getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the PostalCodeInternal field.
   * Postal code; string to handle Zip+4 and international codes.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPostalCodeInternal();
  
  
  /**
   * Gets the value of the PostalCodeInternalDenorm field.
   * denorm field for PostalCodeInternal
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPostalCodeInternalDenorm();
  
  
  /**
   * Gets the value of the StateInternal field.
   * State.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.State getStateInternal();
  
  
  /**
   * Gets the value of the CEDEXInternal field.
   * CEDEX: Special business mail delivery flag (France)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCEDEXInternal();
  
  
  /**
   * Sets the value of the Address field.
   */
  public void setAddress(entity.Address value);
  
  
  public void setAddressID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the AddressLine1Internal field.
   */
  public void setAddressLine1Internal(java.lang.String value);
  
  
  /**
   * Sets the value of the AddressLine1KanjiInternal field.
   */
  public void setAddressLine1KanjiInternal(java.lang.String value);
  
  
  /**
   * Sets the value of the AddressLine2Internal field.
   */
  public void setAddressLine2Internal(java.lang.String value);
  
  
  /**
   * Sets the value of the AddressLine2KanjiInternal field.
   */
  public void setAddressLine2KanjiInternal(java.lang.String value);
  
  
  /**
   * Sets the value of the AddressLine3Internal field.
   */
  public void setAddressLine3Internal(java.lang.String value);
  
  
  /**
   * Sets the value of the AddressTypeInternal field.
   */
  public void setAddressTypeInternal(typekey.AddressType value);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.PolicyAddress value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the CEDEXBureauInternal field.
   */
  public void setCEDEXBureauInternal(java.lang.String value);
  
  
  /**
   * Sets the value of the CEDEXInternal field.
   */
  public void setCEDEXInternal(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the CityInternal field.
   */
  public void setCityInternal(java.lang.String value);
  
  
  /**
   * Sets the value of the CityInternalDenorm field.
   */
  public void setCityInternalDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the CityKanjiInternal field.
   */
  public void setCityKanjiInternal(java.lang.String value);
  
  
  /**
   * Sets the value of the CityKanjiInternalDenorm field.
   */
  public void setCityKanjiInternalDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the CountryInternal field.
   */
  public void setCountryInternal(typekey.Country value);
  
  
  /**
   * Sets the value of the CountyInternal field.
   */
  public void setCountyInternal(java.lang.String value);
  
  
  /**
   * Sets the value of the DescriptionInternal field.
   */
  public void setDescriptionInternal(java.lang.String value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.PolicyAddress value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PostalCodeInternal field.
   */
  public void setPostalCodeInternal(java.lang.String value);
  
  
  /**
   * Sets the value of the PostalCodeInternalDenorm field.
   */
  public void setPostalCodeInternalDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the StateInternal field.
   */
  public void setStateInternal(typekey.State value);
  
  
  
}