package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BuildingImprovement.eti;BuildingImprovement.eix;BuildingImprovement.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BuildingImprovementInternal extends com.guidewire._generated.entity.EffDatedInternal, gw.api.copier.EffDatedCopyable, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BuildingImprovement getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the Building field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Building getBuilding();
  
  
  public gw.pl.persistence.core.Key getBuildingID();
  
  
  /**
   * Gets the value of the BuildingImprType field.
   * Type of building improvement
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BuildingImprType getBuildingImprType();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BuildingImprovement getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the Notes field.
   * Notes
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getNotes();
  
  
  /**
   * Gets the value of the YearAdded field.
   * Year added
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getYearAdded();
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.BuildingImprovement value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Building field.
   */
  public void setBuilding(entity.Building value);
  
  
  public void setBuildingID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BuildingImprType field.
   */
  public void setBuildingImprType(typekey.BuildingImprType value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.BuildingImprovement value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Notes field.
   */
  public void setNotes(java.lang.String value);
  
  
  /**
   * Sets the value of the YearAdded field.
   */
  public void setYearAdded(java.lang.Integer value);
  
  
  
}