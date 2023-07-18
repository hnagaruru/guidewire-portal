package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Driver.eti;Driver.eix;Driver.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface DriverInternal extends com.guidewire._generated.entity.AccountContactRoleInternal, com.guidewire._generated.entity.ExtractableInternal {
  /**
   * Gets the value of the DateCompletedTrainingClass field.
   * When this driver completed a training class.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateCompletedTrainingClass();
  
  
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
   * Gets the value of the TrainingClassType field.
   * The kind of training class driver completed.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.TrainingClassType getTrainingClassType();
  
  
  /**
   * Gets the value of the YearLicensed field.
   * The year that this contact first acquired a driver's license.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getYearLicensed();
  
  
  /**
   * Gets the value of the GoodDriverDiscount field.
   * Indicates whether this driver qualifies for a Good Driver discount
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isGoodDriverDiscount();
  
  
  /**
   * Gets the value of the Student field.
   * Is this driver a student?
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isStudent();
  
  
  /**
   * Sets the value of the DateCompletedTrainingClass field.
   */
  public void setDateCompletedTrainingClass(java.util.Date value);
  
  
  /**
   * Sets the value of the GoodDriverDiscount field.
   */
  public void setGoodDriverDiscount(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the NumberofAccidents field.
   */
  public void setNumberofAccidents(typekey.NumberOfAccidents value);
  
  
  /**
   * Sets the value of the NumberofViolations field.
   */
  public void setNumberofViolations(typekey.NumberOfAccidents value);
  
  
  /**
   * Sets the value of the Student field.
   */
  public void setStudent(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the TrainingClassType field.
   */
  public void setTrainingClassType(typekey.TrainingClassType value);
  
  
  /**
   * Sets the value of the YearLicensed field.
   */
  public void setYearLicensed(java.lang.Integer value);
  
  
  
}