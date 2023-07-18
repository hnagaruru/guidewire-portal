package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PendingAddressUpdate.eti;PendingAddressUpdate.eix;PendingAddressUpdate.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PendingAddressUpdateInternal extends com.guidewire._generated.entity.EditableInternal, com.guidewire._generated.entity.PendingUpdateDelegateInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.OverlapTableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, gw.api.domain.account.PendingUpdate {
  /**
   * Gets the value of the AddressLine1 field.
   * Address Line 1.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressLine1();
  
  
  /**
   * Gets the value of the AddressLine1Kanji field.
   * Address Line 1 Kanji.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressLine1Kanji();
  
  
  /**
   * Gets the value of the AddressLine2 field.
   * Address Line 2
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressLine2();
  
  
  /**
   * Gets the value of the AddressLine2Kanji field.
   * Address Line 2 Kanji.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressLine2Kanji();
  
  
  /**
   * Gets the value of the AddressLine3 field.
   * Address Line 3
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressLine3();
  
  
  /**
   * Gets the value of the AddressType field.
   * Type of this address record.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AddressType getAddressType();
  
  
  /**
   * Gets the value of the CEDEXBureau field.
   * CEDEX: Special business mail delivery bureau (France)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCEDEXBureau();
  
  
  /**
   * Gets the value of the City field.
   * City.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCity();
  
  
  /**
   * Gets the value of the CityKanji field.
   * City Kanji
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCityKanji();
  
  
  /**
   * Gets the value of the Country field.
   * Country.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Country getCountry();
  
  
  /**
   * Gets the value of the County field.
   * County.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCounty();
  
  
  /**
   * Gets the value of the Description field.
   * Address Description
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the PostalCode field.
   * Postal code; string to handle Zip+4 and international codes.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPostalCode();
  
  
  /**
   * Gets the value of the State field.
   * State.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.State getState();
  
  
  /**
   * Gets the value of the TargetAddress field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Address getTargetAddress();
  
  
  public gw.pl.persistence.core.Key getTargetAddressID();
  
  
  /**
   * Gets the value of the AddressLine1IsNull field.
   * True if Address Line 1 should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isAddressLine1IsNull();
  
  
  /**
   * Gets the value of the AddressLine1KanjiIsNull field.
   * True if Address Line 1 Kanji should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isAddressLine1KanjiIsNull();
  
  
  /**
   * Gets the value of the AddressLine2IsNull field.
   * True if Address Line 2 should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isAddressLine2IsNull();
  
  
  /**
   * Gets the value of the AddressLine2KanjiIsNull field.
   * True if Address Line 2 Kanji should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isAddressLine2KanjiIsNull();
  
  
  /**
   * Gets the value of the AddressLine3IsNull field.
   * True if Address Line 3 should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isAddressLine3IsNull();
  
  
  /**
   * Gets the value of the AddressTypeIsNull field.
   * True if AddressType should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isAddressTypeIsNull();
  
  
  /**
   * Gets the value of the CEDEX field.
   * CEDEX: Special business mail delivery flag (France)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCEDEX();
  
  
  /**
   * Gets the value of the CEDEXBureauIsNull field.
   * True if CEDEX Bureau should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCEDEXBureauIsNull();
  
  
  /**
   * Gets the value of the CEDEXIsNull field.
   * True if CEDEX should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCEDEXIsNull();
  
  
  /**
   * Gets the value of the CityIsNull field.
   * True if City should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCityIsNull();
  
  
  /**
   * Gets the value of the CityKanjiIsNull field.
   * True if City Kanji should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCityKanjiIsNull();
  
  
  /**
   * Gets the value of the CountryIsNull field.
   * True if Country should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCountryIsNull();
  
  
  /**
   * Gets the value of the CountyIsNull field.
   * True if County should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCountyIsNull();
  
  
  /**
   * Gets the value of the DescriptionIsNull field.
   * True if Description should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDescriptionIsNull();
  
  
  /**
   * Gets the value of the PostalCodeIsNull field.
   * True if PostalCode should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isPostalCodeIsNull();
  
  
  /**
   * Gets the value of the StateIsNull field.
   * True if the State should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isStateIsNull();
  
  
  /**
   * Sets the value of the AddressLine1 field.
   */
  public void setAddressLine1(java.lang.String value);
  
  
  /**
   * Sets the value of the AddressLine1IsNull field.
   */
  public void setAddressLine1IsNull(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the AddressLine1Kanji field.
   */
  public void setAddressLine1Kanji(java.lang.String value);
  
  
  /**
   * Sets the value of the AddressLine1KanjiIsNull field.
   */
  public void setAddressLine1KanjiIsNull(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the AddressLine2 field.
   */
  public void setAddressLine2(java.lang.String value);
  
  
  /**
   * Sets the value of the AddressLine2IsNull field.
   */
  public void setAddressLine2IsNull(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the AddressLine2Kanji field.
   */
  public void setAddressLine2Kanji(java.lang.String value);
  
  
  /**
   * Sets the value of the AddressLine2KanjiIsNull field.
   */
  public void setAddressLine2KanjiIsNull(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the AddressLine3 field.
   */
  public void setAddressLine3(java.lang.String value);
  
  
  /**
   * Sets the value of the AddressLine3IsNull field.
   */
  public void setAddressLine3IsNull(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the AddressType field.
   */
  public void setAddressType(typekey.AddressType value);
  
  
  /**
   * Sets the value of the AddressTypeIsNull field.
   */
  public void setAddressTypeIsNull(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the CEDEX field.
   */
  public void setCEDEX(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the CEDEXBureau field.
   */
  public void setCEDEXBureau(java.lang.String value);
  
  
  /**
   * Sets the value of the CEDEXBureauIsNull field.
   */
  public void setCEDEXBureauIsNull(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the CEDEXIsNull field.
   */
  public void setCEDEXIsNull(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the City field.
   */
  public void setCity(java.lang.String value);
  
  
  /**
   * Sets the value of the CityIsNull field.
   */
  public void setCityIsNull(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the CityKanji field.
   */
  public void setCityKanji(java.lang.String value);
  
  
  /**
   * Sets the value of the CityKanjiIsNull field.
   */
  public void setCityKanjiIsNull(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Country field.
   */
  public void setCountry(typekey.Country value);
  
  
  /**
   * Sets the value of the CountryIsNull field.
   */
  public void setCountryIsNull(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the County field.
   */
  public void setCounty(java.lang.String value);
  
  
  /**
   * Sets the value of the CountyIsNull field.
   */
  public void setCountyIsNull(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the DescriptionIsNull field.
   */
  public void setDescriptionIsNull(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the PostalCode field.
   */
  public void setPostalCode(java.lang.String value);
  
  
  /**
   * Sets the value of the PostalCodeIsNull field.
   */
  public void setPostalCodeIsNull(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the State field.
   */
  public void setState(typekey.State value);
  
  
  /**
   * Sets the value of the StateIsNull field.
   */
  public void setStateIsNull(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the TargetAddress field.
   */
  public void setTargetAddress(entity.Address value);
  
  
  public void setTargetAddressID(gw.pl.persistence.core.Key value);
  
  
  
}