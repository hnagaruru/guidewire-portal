package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BuildingSide.eti;BuildingSide.eix;BuildingSide.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BuildingSideInternal extends com.guidewire._generated.entity.EffDatedInternal, gw.api.copier.EffDatedCopyable, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BuildingSide getBasedOnValue();
  
  
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
   * Gets the value of the BuildingSideType field.
   * Side of building
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BuildingSideType getBuildingSideType();
  
  
  /**
   * Gets the value of the Description field.
   * Description
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BuildingSide getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.BuildingSide value);
  
  
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
   * Sets the value of the BuildingSideType field.
   */
  public void setBuildingSideType(typekey.BuildingSideType value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.BuildingSide value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  
}