package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PendingContactUpdate.eti;PendingContactUpdate.eix;PendingContactUpdate.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PendingContactUpdateInternal extends com.guidewire._generated.entity.EditableInternal, com.guidewire._generated.entity.PendingUpdateDelegateInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, gw.api.domain.account.PendingUpdate {
  /**
   * Gets the value of the CompanyName field.
   * The role's name, if it is a company, null otherwise.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCompanyName();
  
  
  /**
   * Gets the value of the CompanyNameKanji field.
   * The role's kanji name, if it is a company, null otherwise.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCompanyNameKanji();
  
  
  /**
   * Gets the value of the DateOfBirth field.
   * Date of birth.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateOfBirth();
  
  
  /**
   * Gets the value of the FirstName field.
   * The role's first name, if it is a person, null otherwise.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFirstName();
  
  
  /**
   * Gets the value of the FirstNameKanji field.
   * The role's first name kanji, if it is a person, null otherwise.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFirstNameKanji();
  
  
  /**
   * Gets the value of the LastName field.
   * The role's last name, if it is a person, null otherwise.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLastName();
  
  
  /**
   * Gets the value of the LastNameKanji field.
   * The role's last name kanji, if it is a person, null otherwise.
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
  public typekey.Jurisdiction getLicenseState();
  
  
  /**
   * Gets the value of the MaritalStatus field.
   * Marital status.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.MaritalStatus getMaritalStatus();
  
  
  /**
   * Gets the value of the Particle field.
   * Particle for (French) name
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getParticle();
  
  
  /**
   * Gets the value of the TargetContact field.
   * The contact to write these values to.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Contact getTargetContact();
  
  
  public gw.pl.persistence.core.Key getTargetContactID();
  
  
  /**
   * Gets the value of the CompanyNameIsNull field.
   * True if the CompanyName should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCompanyNameIsNull();
  
  
  /**
   * Gets the value of the CompanyNameKanjiIsNull field.
   * True if the CompanyNameKanji should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCompanyNameKanjiIsNull();
  
  
  /**
   * Gets the value of the DateOfBirthIsNull field.
   * True if the DateOfBirth should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDateOfBirthIsNull();
  
  
  /**
   * Gets the value of the FirstNameIsNull field.
   * True if the FirstName should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isFirstNameIsNull();
  
  
  /**
   * Gets the value of the FirstNameKanjiIsNull field.
   * True if the FirstNameKanji should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isFirstNameKanjiIsNull();
  
  
  /**
   * Gets the value of the LastNameIsNull field.
   * True if the LastName should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isLastNameIsNull();
  
  
  /**
   * Gets the value of the LastNameKanjiIsNull field.
   * True if the LastNameKanji should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isLastNameKanjiIsNull();
  
  
  /**
   * Gets the value of the LicenseNumberIsNull field.
   * True if the LicenseNumber should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isLicenseNumberIsNull();
  
  
  /**
   * Gets the value of the LicenseStateIsNull field.
   * True if the LicenseState should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isLicenseStateIsNull();
  
  
  /**
   * Gets the value of the MaritalStatusIsNull field.
   * True if the MaritalStatus should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isMaritalStatusIsNull();
  
  
  /**
   * Gets the value of the ParticleIsNull field.
   * True if the Particle should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isParticleIsNull();
  
  
  /**
   * Sets the value of the CompanyName field.
   */
  public void setCompanyName(java.lang.String value);
  
  
  /**
   * Sets the value of the CompanyNameIsNull field.
   */
  public void setCompanyNameIsNull(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the CompanyNameKanji field.
   */
  public void setCompanyNameKanji(java.lang.String value);
  
  
  /**
   * Sets the value of the CompanyNameKanjiIsNull field.
   */
  public void setCompanyNameKanjiIsNull(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the DateOfBirth field.
   */
  public void setDateOfBirth(java.util.Date value);
  
  
  /**
   * Sets the value of the DateOfBirthIsNull field.
   */
  public void setDateOfBirthIsNull(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the FirstName field.
   */
  public void setFirstName(java.lang.String value);
  
  
  /**
   * Sets the value of the FirstNameIsNull field.
   */
  public void setFirstNameIsNull(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the FirstNameKanji field.
   */
  public void setFirstNameKanji(java.lang.String value);
  
  
  /**
   * Sets the value of the FirstNameKanjiIsNull field.
   */
  public void setFirstNameKanjiIsNull(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the LastName field.
   */
  public void setLastName(java.lang.String value);
  
  
  /**
   * Sets the value of the LastNameIsNull field.
   */
  public void setLastNameIsNull(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the LastNameKanji field.
   */
  public void setLastNameKanji(java.lang.String value);
  
  
  /**
   * Sets the value of the LastNameKanjiIsNull field.
   */
  public void setLastNameKanjiIsNull(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the LicenseNumber field.
   */
  public void setLicenseNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the LicenseNumberIsNull field.
   */
  public void setLicenseNumberIsNull(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the LicenseState field.
   */
  public void setLicenseState(typekey.Jurisdiction value);
  
  
  /**
   * Sets the value of the LicenseStateIsNull field.
   */
  public void setLicenseStateIsNull(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the MaritalStatus field.
   */
  public void setMaritalStatus(typekey.MaritalStatus value);
  
  
  /**
   * Sets the value of the MaritalStatusIsNull field.
   */
  public void setMaritalStatusIsNull(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Particle field.
   */
  public void setParticle(java.lang.String value);
  
  
  /**
   * Sets the value of the ParticleIsNull field.
   */
  public void setParticleIsNull(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the TargetContact field.
   */
  public void setTargetContact(entity.Contact value);
  
  
  public void setTargetContactID(gw.pl.persistence.core.Key value);
  
  
  
}