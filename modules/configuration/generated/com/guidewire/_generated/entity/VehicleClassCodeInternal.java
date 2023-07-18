package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "VehicleClassCode.eti;VehicleClassCode.eix;VehicleClassCode.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface VehicleClassCodeInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the Code field.
   * The Class Code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCode();
  
  
  /**
   * Gets the value of the Experience field.
   * Years of experience for drivers of a vehicle
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.CombinedDriverExp getExperience();
  
  
  /**
   * Gets the value of the Fleet field.
   * Fleet designation.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.FleetType getFleet();
  
  
  /**
   * Gets the value of the PrimaryUse field.
   * Primary use of the vehicle.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.VehiclePrimaryUse getPrimaryUse();
  
  
  /**
   * Gets the value of the Radius field.
   * Distance operated from point of principle garaging.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RadiusCode getRadius();
  
  
  /**
   * Gets the value of the SizeClass field.
   * Size class of the vehicle.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.VehicleSizeClass getSizeClass();
  
  
  /**
   * Gets the value of the Type field.
   * Type of the vehicle.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.VehicleType getType();
  
  
  /**
   * Sets the value of the Code field.
   */
  public void setCode(java.lang.String value);
  
  
  /**
   * Sets the value of the Experience field.
   */
  public void setExperience(typekey.CombinedDriverExp value);
  
  
  /**
   * Sets the value of the Fleet field.
   */
  public void setFleet(typekey.FleetType value);
  
  
  /**
   * Sets the value of the PrimaryUse field.
   */
  public void setPrimaryUse(typekey.VehiclePrimaryUse value);
  
  
  /**
   * Sets the value of the Radius field.
   */
  public void setRadius(typekey.RadiusCode value);
  
  
  /**
   * Sets the value of the SizeClass field.
   */
  public void setSizeClass(typekey.VehicleSizeClass value);
  
  
  /**
   * Sets the value of the Type field.
   */
  public void setType(typekey.VehicleType value);
  
  
  
}