package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "DiagnosticRatingWorksheet.eti;DiagnosticRatingWorksheet.eix;DiagnosticRatingWorksheet.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface DiagnosticRatingWorksheetInternal extends com.guidewire._generated.entity.EffDatedInternal {
  /**
   * Adds the given element to the EntityReferences array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToEntityReferences(entity.DiagRatingWorksheetRef element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.DiagnosticRatingWorksheet getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the DiagnosticCapture field.
   * Longer text description for capturing cause, e.g. statcktrace
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDiagnosticCapture();
  
  
  /**
   * Gets the value of the EntityReferences field.
   * List of entities related to rating
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.DiagRatingWorksheetRef[] getEntityReferences();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.DiagnosticRatingWorksheet getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the PolicyLine field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLine getPolicyLine();
  
  
  public gw.pl.persistence.core.Key getPolicyLineID();
  
  
  /**
   * Gets the value of the Reason field.
   * Short message describing reason this worksheet was created
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getReason();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.DiagnosticRatingWorksheet getSubtype();
  
  
  /**
   * Gets the value of the TextData field.
   * Contents of the rating worksheet, generally stored as XML.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTextData();
  
  
  /**
   * Removes the given element from the EntityReferences array. This is achieved by marking the element for removal.
   */
  public void removeFromEntityReferences(entity.DiagRatingWorksheetRef element);
  
  
  /**
   * Removes the given element from the EntityReferences array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromEntityReferences(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.DiagnosticRatingWorksheet value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the DiagnosticCapture field.
   */
  public void setDiagnosticCapture(java.lang.String value);
  
  
  /**
   * Sets the value of the EntityReferences field.
   */
  public void setEntityReferences(entity.DiagRatingWorksheetRef[] value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.DiagnosticRatingWorksheet value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PolicyLine field.
   */
  public void setPolicyLine(entity.PolicyLine value);
  
  
  public void setPolicyLineID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Reason field.
   */
  public void setReason(java.lang.String value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.DiagnosticRatingWorksheet value);
  
  
  /**
   * Sets the value of the TextData field.
   */
  public void setTextData(java.lang.String value);
  
  
  
}