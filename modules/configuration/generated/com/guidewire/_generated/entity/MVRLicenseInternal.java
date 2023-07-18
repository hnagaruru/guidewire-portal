package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "MVRLicense.eti;MVRLicense.eix;MVRLicense.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface MVRLicenseInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire.pc.domain.motorvehiclerecord.MVRLicensePublicMethods, gw.api.motorvehiclerecord.IMVRLicense {
  /**
   * Gets the value of the BoatClass field.
   * Boat Class
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBoatClass();
  
  
  /**
   * Gets the value of the Endorsements field.
   * Several endorsements per license (Hazardous Material, 01/23/96 Duplicated License Issued, etc.)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEndorsements();
  
  
  /**
   * Gets the value of the ExpireDate field.
   * Expire Date for the current License
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getExpireDate();
  
  
  /**
   * Gets the value of the IssuedDate field.
   * Issued Date for the current License
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getIssuedDate();
  
  
  /**
   * Gets the value of the LicenseClass field.
   * Driver License Class
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLicenseClass();
  
  
  /**
   * Gets the value of the LicenseNumber field.
   * Driver License Number
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLicenseNumber();
  
  
  /**
   * Gets the value of the LicenseState field.
   * Driver License State
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.State getLicenseState();
  
  
  /**
   * Gets the value of the LicenseStatus field.
   * Status (e.g. Duplicate, Valid, Suspended,etc.)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLicenseStatus();
  
  
  /**
   * Gets the value of the LicenseType field.
   * Driver License Type (Standard, Commercial)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLicenseType();
  
  
  /**
   * Gets the value of the MotorVehicleRecord field.
   * Motor Vehicle Record containing this license.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.MVR getMotorVehicleRecord();
  
  
  public gw.pl.persistence.core.Key getMotorVehicleRecordID();
  
  
  /**
   * Gets the value of the OriginallyIssued field.
   * Date when the License was issued for the first time
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getOriginallyIssued();
  
  
  /**
   * Gets the value of the Points field.
   * Total points assigned by the Department of Motor Vehicle (DMV) to the driver.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getPoints();
  
  
  /**
   * Gets the value of the ReinstateDate field.
   * Date when the license was reinstated
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getReinstateDate();
  
  
  /**
   * Gets the value of the Restrictions field.
   * Several restriction per license (Daylight hours only, Corrective Lenses, etc.)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRestrictions();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.MVRLicense getSubtype();
  
  
  /**
   * Gets the value of the NonResidentMilitary field.
   * Indicates if this license belong to a non resident military
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isNonResidentMilitary();
  
  
  /**
   * Gets the value of the PrimaryLicense field.
   * Indicates if this is the primary license
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isPrimaryLicense();
  
  
  /**
   * Sets the value of the BoatClass field.
   */
  public void setBoatClass(java.lang.String value);
  
  
  /**
   * Sets the value of the Endorsements field.
   */
  public void setEndorsements(java.lang.String value);
  
  
  /**
   * Sets the value of the ExpireDate field.
   */
  public void setExpireDate(java.util.Date value);
  
  
  /**
   * Sets the value of the IssuedDate field.
   */
  public void setIssuedDate(java.util.Date value);
  
  
  /**
   * Sets the value of the LicenseClass field.
   */
  public void setLicenseClass(java.lang.String value);
  
  
  /**
   * Sets the value of the LicenseNumber field.
   */
  public void setLicenseNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the LicenseState field.
   */
  public void setLicenseState(typekey.State value);
  
  
  /**
   * Sets the value of the LicenseStatus field.
   */
  public void setLicenseStatus(java.lang.String value);
  
  
  /**
   * Sets the value of the LicenseType field.
   */
  public void setLicenseType(java.lang.String value);
  
  
  /**
   * Sets the value of the MotorVehicleRecord field.
   */
  public void setMotorVehicleRecord(entity.MVR value);
  
  
  public void setMotorVehicleRecordID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the NonResidentMilitary field.
   */
  public void setNonResidentMilitary(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the OriginallyIssued field.
   */
  public void setOriginallyIssued(java.util.Date value);
  
  
  /**
   * Sets the value of the Points field.
   */
  public void setPoints(java.lang.Integer value);
  
  
  /**
   * Sets the value of the PrimaryLicense field.
   */
  public void setPrimaryLicense(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the ReinstateDate field.
   */
  public void setReinstateDate(java.util.Date value);
  
  
  /**
   * Sets the value of the Restrictions field.
   */
  public void setRestrictions(java.lang.String value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.MVRLicense value);
  
  
  
}