package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "VehicleDriver.eti;VehicleDriver.eix;VehicleDriver.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface VehicleDriverInternal extends com.guidewire._generated.entity.EffDatedInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.account.Mergeable, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.VehicleDriver getBasedOnValue();
  
  
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
  public entity.VehicleDriver getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the PercentageDriven field.
   * The percentage this driver drives the vehicle
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getPercentageDriven();
  
  
  /**
   * Gets the value of the PolicyDriver field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyDriver getPolicyDriver();
  
  
  public gw.pl.persistence.core.Key getPolicyDriverID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.VehicleDriver getSubtype();
  
  
  /**
   * Gets the value of the Vehicle field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PersonalVehicle getVehicle();
  
  
  public gw.pl.persistence.core.Key getVehicleID();
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.VehicleDriver value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.VehicleDriver value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PercentageDriven field.
   */
  public void setPercentageDriven(java.lang.Integer value);
  
  
  /**
   * Sets the value of the PolicyDriver field.
   */
  public void setPolicyDriver(entity.PolicyDriver value);
  
  
  public void setPolicyDriverID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.VehicleDriver value);
  
  
  /**
   * Sets the value of the Vehicle field.
   */
  public void setVehicle(entity.PersonalVehicle value);
  
  
  public void setVehicleID(gw.pl.persistence.core.Key value);
  
  
  
}