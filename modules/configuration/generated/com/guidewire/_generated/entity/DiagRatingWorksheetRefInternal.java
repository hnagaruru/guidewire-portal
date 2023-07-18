package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "DiagRatingWorksheetRef.eti;DiagRatingWorksheetRef.eix;DiagRatingWorksheetRef.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface DiagRatingWorksheetRefInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire.pc.domain.rating.worksheet.DiagRatingWorksheetRefPublicMethods {
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.DiagRatingWorksheetRef getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.DiagRatingWorksheetRef getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the ReferencedID field.
   * Key value of referenced entity
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getReferencedID();
  
  
  /**
   * Gets the value of the ReferencedType field.
   * Type name of referenced entity
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getReferencedType();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.DiagRatingWorksheetRef getSubtype();
  
  
  /**
   * Gets the value of the Worksheet field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.DiagnosticRatingWorksheet getWorksheet();
  
  
  public gw.pl.persistence.core.Key getWorksheetID();
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.DiagRatingWorksheetRef value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.DiagRatingWorksheetRef value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ReferencedID field.
   */
  public void setReferencedID(java.lang.Long value);
  
  
  /**
   * Sets the value of the ReferencedType field.
   */
  public void setReferencedType(java.lang.String value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.DiagRatingWorksheetRef value);
  
  
  /**
   * Sets the value of the Worksheet field.
   */
  public void setWorksheet(entity.DiagnosticRatingWorksheet value);
  
  
  public void setWorksheetID(gw.pl.persistence.core.Key value);
  
  
  
}