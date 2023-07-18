package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "MVR.eti;MVR.eix;MVR.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface MVRInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire.pc.domain.motorvehiclerecord.MVRPublicMethods, gw.api.motorvehiclerecord.IMVRData {
  /**
   * Adds the given element to the IncidentEntities array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToIncidentEntities(entity.MVRIncident element);
  
  
  /**
   * Adds the given element to the LicenseEntities array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLicenseEntities(entity.MVRLicense element);
  
  
  /**
   * Gets the value of the AdditionalDrivers field.
   * Any additional drivers associated with this MVR report.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAdditionalDrivers();
  
  
  /**
   * Gets the value of the Address field.
   * Driver's Address - received from MVR provider
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddress();
  
  
  /**
   * Gets the value of the DateOfBirth field.
   * Driver's date of birth - received from MVR provider.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateOfBirth();
  
  
  /**
   * Gets the value of the Eyes field.
   * Eye color of the driver - received from MVR provider.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEyes();
  
  
  /**
   * Gets the value of the FirstName field.
   * Driver's first name - received from MVR provider.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFirstName();
  
  
  /**
   * Gets the value of the FirstNameDenorm field.
   * denorm field for FirstName
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFirstNameDenorm();
  
  
  /**
   * Gets the value of the Gender field.
   * Gender - received from MVR provider.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GenderType getGender();
  
  
  /**
   * Gets the value of the Hair field.
   * Hair color of the driver - received from MVR provider.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getHair();
  
  
  /**
   * Gets the value of the Height field.
   * Height of the driver - received from MVR provider.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getHeight();
  
  
  /**
   * Gets the value of the IncidentEntities field.
   * Incidents in this record.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.MVRIncident[] getIncidentEntities();
  
  
  /**
   * Gets the value of the LastName field.
   * Driver's last name - received from MVR provider.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLastName();
  
  
  /**
   * Gets the value of the LastNameDenorm field.
   * denorm field for LastName
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLastNameDenorm();
  
  
  /**
   * Gets the value of the LicenseEntities field.
   * Licenses in this record.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.MVRLicense[] getLicenseEntities();
  
  
  /**
   * Gets the value of the MVROrder field.
   * Order used to request this Motor Vehicle Record.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.MVROrder getMVROrder();
  
  
  public gw.pl.persistence.core.Key getMVROrderID();
  
  
  /**
   * Gets the value of the MiddleName field.
   * Driver's middle name or initial - received from MVR provider.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getMiddleName();
  
  
  /**
   * Gets the value of the Miscellaneous field.
   * Miscellaneous and state specific information.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getMiscellaneous();
  
  
  /**
   * Gets the value of the Race field.
   * Race of the driver - received from MVR provider.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRace();
  
  
  /**
   * Gets the value of the ReportDate field.
   * Date and Time when the report was processed.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getReportDate();
  
  
  /**
   * Gets the value of the ReportNumber field.
   * Identifies the report when multiple MVR reports are received for one License. Default value=1
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getReportNumber();
  
  
  /**
   * Gets the value of the SSN field.
   * Social Security Number - received from MVR provider.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSSN();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.MVR getSubtype();
  
  
  /**
   * Gets the value of the Weight field.
   * Weight of the driver - received from MVR provider.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getWeight();
  
  
  /**
   * Gets the value of the YearsRequested field.
   * The MVR report can be requested base on 3, 5, 7 or 10 years depending on the State
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getYearsRequested();
  
  
  /**
   * Gets the value of the Donor field.
   * Whether the driver is an organ donor - received from MVR provider.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDonor();
  
  
  /**
   * Removes the given element from the IncidentEntities array. This is achieved by marking the element for removal.
   */
  public void removeFromIncidentEntities(entity.MVRIncident element);
  
  
  /**
   * Removes the given element from the IncidentEntities array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromIncidentEntities(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the LicenseEntities array. This is achieved by marking the element for removal.
   */
  public void removeFromLicenseEntities(entity.MVRLicense element);
  
  
  /**
   * Removes the given element from the LicenseEntities array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLicenseEntities(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the AdditionalDrivers field.
   */
  public void setAdditionalDrivers(java.lang.String value);
  
  
  /**
   * Sets the value of the Address field.
   */
  public void setAddress(java.lang.String value);
  
  
  /**
   * Sets the value of the DateOfBirth field.
   */
  public void setDateOfBirth(java.util.Date value);
  
  
  /**
   * Sets the value of the Donor field.
   */
  public void setDonor(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Eyes field.
   */
  public void setEyes(java.lang.String value);
  
  
  /**
   * Sets the value of the FirstName field.
   */
  public void setFirstName(java.lang.String value);
  
  
  /**
   * Sets the value of the FirstNameDenorm field.
   */
  public void setFirstNameDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the Gender field.
   */
  public void setGender(typekey.GenderType value);
  
  
  /**
   * Sets the value of the Hair field.
   */
  public void setHair(java.lang.String value);
  
  
  /**
   * Sets the value of the Height field.
   */
  public void setHeight(java.lang.String value);
  
  
  /**
   * Sets the value of the IncidentEntities field.
   */
  public void setIncidentEntities(entity.MVRIncident[] value);
  
  
  /**
   * Sets the value of the LastName field.
   */
  public void setLastName(java.lang.String value);
  
  
  /**
   * Sets the value of the LastNameDenorm field.
   */
  public void setLastNameDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the LicenseEntities field.
   */
  public void setLicenseEntities(entity.MVRLicense[] value);
  
  
  /**
   * Sets the value of the MVROrder field.
   */
  public void setMVROrder(entity.MVROrder value);
  
  
  public void setMVROrderID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the MiddleName field.
   */
  public void setMiddleName(java.lang.String value);
  
  
  /**
   * Sets the value of the Miscellaneous field.
   */
  public void setMiscellaneous(java.lang.String value);
  
  
  /**
   * Sets the value of the Race field.
   */
  public void setRace(java.lang.String value);
  
  
  /**
   * Sets the value of the ReportDate field.
   */
  public void setReportDate(java.util.Date value);
  
  
  /**
   * Sets the value of the ReportNumber field.
   */
  public void setReportNumber(java.lang.Integer value);
  
  
  /**
   * Sets the value of the SSN field.
   */
  public void setSSN(java.lang.String value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.MVR value);
  
  
  /**
   * Sets the value of the Weight field.
   */
  public void setWeight(java.lang.String value);
  
  
  /**
   * Sets the value of the YearsRequested field.
   */
  public void setYearsRequested(java.lang.Integer value);
  
  
  
}