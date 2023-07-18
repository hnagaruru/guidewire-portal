package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "FormEdgeTable.eti;FormEdgeTable.eix;FormEdgeTable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface FormEdgeTableInternal extends com.guidewire._generated.entity.EffDatedInternal {
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FormEdgeTable getBasedOnValue();
  
  
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
  public entity.FormEdgeTable getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the OwningForm field.
   * The form that is doing the replacing.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Form getOwningForm();
  
  
  public gw.pl.persistence.core.Key getOwningFormID();
  
  
  /**
   * Gets the value of the TargetForm field.
   * The form that was replaced.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Form getTargetForm();
  
  
  public gw.pl.persistence.core.Key getTargetFormID();
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.FormEdgeTable value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.FormEdgeTable value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the OwningForm field.
   */
  public void setOwningForm(entity.Form value);
  
  
  public void setOwningFormID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the TargetForm field.
   */
  public void setTargetForm(entity.Form value);
  
  
  public void setTargetFormID(gw.pl.persistence.core.Key value);
  
  
  
}