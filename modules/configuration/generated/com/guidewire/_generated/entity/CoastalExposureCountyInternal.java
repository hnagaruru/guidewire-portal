package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CoastalExposureCounty.eti;CoastalExposureCounty.eix;CoastalExposureCounty.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface CoastalExposureCountyInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the County field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCounty();
  
  
  /**
   * Gets the value of the ExposureLevel field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getExposureLevel();
  
  
  /**
   * Gets the value of the State field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.State getState();
  
  
  /**
   * Sets the value of the County field.
   */
  public void setCounty(java.lang.String value);
  
  
  /**
   * Sets the value of the ExposureLevel field.
   */
  public void setExposureLevel(java.lang.Integer value);
  
  
  /**
   * Sets the value of the State field.
   */
  public void setState(typekey.State value);
  
  
  
}