package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AccountLocation.eti;AccountLocation.eix;AccountLocation.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface AccountLocationInternal extends com.guidewire._generated.entity.AddressInternal, com.guidewire._generated.entity.ReferenceableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, com.guidewire.pc.domain.account.AccountLocationPublicMethods, com.guidewire.pc.domain.account.impl.AccountLocationInternalMethods {
  /**
   * Gets the value of the Account field.
   * The account on which this is a location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Account getAccount();
  
  
  public gw.pl.persistence.core.Key getAccountID();
  
  
  /**
   * Gets the value of the EmployeeCount field.
   * The number of employees at this location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getEmployeeCount();
  
  
  /**
   * Gets the value of the LocationCode field.
   * The custom location code specified by customer
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLocationCode();
  
  
  /**
   * Gets the value of the LocationName field.
   * Shorthand name for this location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLocationName();
  
  
  /**
   * Gets the value of the LocationNum field.
   * The location number of this location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getLocationNum();
  
  
  /**
   * Gets the value of the Phone field.
   * Phone
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPhone();
  
  
  /**
   * Gets the value of the PhoneCountry field.
   * The country associated with this phone number.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PhoneCountryCode getPhoneCountry();
  
  
  /**
   * Gets the value of the PhoneExtension field.
   * Phone extension
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPhoneExtension();
  
  
  /**
   * Gets the value of the Active field.
   * Determines whether or not the location is available to be newly added to submissions
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isActive();
  
  
  /**
   * Gets the value of the NonSpecific field.
   * Is a non-specific location.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isNonSpecific();
  
  
  /**
   * Sets the value of the Account field.
   */
  public void setAccount(entity.Account value);
  
  
  public void setAccountID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Active field.
   */
  public void setActive(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the EmployeeCount field.
   */
  public void setEmployeeCount(java.lang.Integer value);
  
  
  /**
   * Sets the value of the LocationCode field.
   */
  public void setLocationCode(java.lang.String value);
  
  
  /**
   * Sets the value of the LocationName field.
   */
  public void setLocationName(java.lang.String value);
  
  
  /**
   * Sets the value of the LocationNum field.
   */
  public void setLocationNum(java.lang.Integer value);
  
  
  /**
   * Sets the value of the NonSpecific field.
   */
  public void setNonSpecific(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Phone field.
   */
  public void setPhone(java.lang.String value);
  
  
  /**
   * Sets the value of the PhoneCountry field.
   */
  public void setPhoneCountry(typekey.PhoneCountryCode value);
  
  
  /**
   * Sets the value of the PhoneExtension field.
   */
  public void setPhoneExtension(java.lang.String value);
  
  
  
}