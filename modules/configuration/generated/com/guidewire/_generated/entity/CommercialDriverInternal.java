package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CommercialDriver.eti;CommercialDriver.eix;CommercialDriver.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface CommercialDriverInternal extends com.guidewire._generated.entity.EffDatedInternal, gw.api.copier.EffDatedCopyable, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CommercialDriver getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the BusinessAutoLine field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BusinessAutoLine getBusinessAutoLine();
  
  
  public gw.pl.persistence.core.Key getBusinessAutoLineID();
  
  
  /**
   * Gets the value of the DateOfBirth field.
   * Date of Birth
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateOfBirth();
  
  
  /**
   * Gets the value of the FirstName field.
   * First name.
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
   * Gets the value of the FirstNameKanji field.
   * First name in Kanji
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFirstNameKanji();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CommercialDriver getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the Gender field.
   * Gender.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GenderType getGender();
  
  
  /**
   * Gets the value of the HireDate field.
   * When this contact was hired.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getHireDate();
  
  
  /**
   * Gets the value of the LastName field.
   * Last name.
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
   * Gets the value of the LastNameKanji field.
   * Last name in Kanji.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLastNameKanji();
  
  
  /**
   * Gets the value of the LicenseNumber field.
   * Driver's license number.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLicenseNumber();
  
  
  /**
   * Gets the value of the LicenseState field.
   * Driver's license state.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.State getLicenseState();
  
  
  /**
   * Gets the value of the MaritalStatus field.
   * Marital status.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.MaritalStatus getMaritalStatus();
  
  
  /**
   * Gets the value of the NumberofAccidents field.
   * Number of Accidents
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.NumberOfAccidents getNumberofAccidents();
  
  
  /**
   * Gets the value of the NumberofViolations field.
   * Number of Violations
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.NumberOfAccidents getNumberofViolations();
  
  
  /**
   * Gets the value of the SeqNumber field.
   * The driver's sequence number used to order the drivers within a policy.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getSeqNumber();
  
  
  /**
   * Gets the value of the YearLicensed field.
   * The year that this contact first acquired a driver's license.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getYearLicensed();
  
  
  /**
   * Gets the value of the YearsExperience field.
   * The number of years of driving experience this contact has.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.DriverExperience getYearsExperience();
  
  
  /**
   * Gets the value of the DriverTraining field.
   * Has this driver completed a driver training class?
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDriverTraining();
  
  
  /**
   * Gets the value of the GoodDriverDiscount field.
   * Indicates whether this driver qualifies for a Good Driver discount
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isGoodDriverDiscount();
  
  
  /**
   * Gets the value of the MatureDriverTraining field.
   * Has the driver completed a mature driver training class?
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isMatureDriverTraining();
  
  
  /**
   * Gets the value of the Student field.
   * Is this driver a student?
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isStudent();
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.CommercialDriver value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BusinessAutoLine field.
   */
  public void setBusinessAutoLine(entity.BusinessAutoLine value);
  
  
  public void setBusinessAutoLineID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the DateOfBirth field.
   */
  public void setDateOfBirth(java.util.Date value);
  
  
  /**
   * Sets the value of the DriverTraining field.
   */
  public void setDriverTraining(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the FirstName field.
   */
  public void setFirstName(java.lang.String value);
  
  
  /**
   * Sets the value of the FirstNameDenorm field.
   */
  public void setFirstNameDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the FirstNameKanji field.
   */
  public void setFirstNameKanji(java.lang.String value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.CommercialDriver value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Gender field.
   */
  public void setGender(typekey.GenderType value);
  
  
  /**
   * Sets the value of the GoodDriverDiscount field.
   */
  public void setGoodDriverDiscount(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the HireDate field.
   */
  public void setHireDate(java.util.Date value);
  
  
  /**
   * Sets the value of the LastName field.
   */
  public void setLastName(java.lang.String value);
  
  
  /**
   * Sets the value of the LastNameDenorm field.
   */
  public void setLastNameDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the LastNameKanji field.
   */
  public void setLastNameKanji(java.lang.String value);
  
  
  /**
   * Sets the value of the LicenseNumber field.
   */
  public void setLicenseNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the LicenseState field.
   */
  public void setLicenseState(typekey.State value);
  
  
  /**
   * Sets the value of the MaritalStatus field.
   */
  public void setMaritalStatus(typekey.MaritalStatus value);
  
  
  /**
   * Sets the value of the MatureDriverTraining field.
   */
  public void setMatureDriverTraining(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the NumberofAccidents field.
   */
  public void setNumberofAccidents(typekey.NumberOfAccidents value);
  
  
  /**
   * Sets the value of the NumberofViolations field.
   */
  public void setNumberofViolations(typekey.NumberOfAccidents value);
  
  
  /**
   * Sets the value of the SeqNumber field.
   */
  public void setSeqNumber(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Student field.
   */
  public void setStudent(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the YearLicensed field.
   */
  public void setYearLicensed(java.lang.Integer value);
  
  
  /**
   * Sets the value of the YearsExperience field.
   */
  public void setYearsExperience(typekey.DriverExperience value);
  
  
  
}