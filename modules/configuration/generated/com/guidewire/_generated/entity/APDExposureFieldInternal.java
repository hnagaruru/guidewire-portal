package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDExposureField.eti;APDExposureField.eix;APDExposureField.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDExposureFieldInternal extends com.guidewire._generated.entity.APDAttributeInternal {
  /**
   * Gets the value of the Exposure field.
   * The exposure to which this field belongs
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDExposure getExposure();
  
  
  public gw.pl.persistence.core.Key getExposureID();
  
  
  /**
   * Gets the value of the BasisScalingKey field.
   * Where the exposure is rated basis scalable, this is part of the key to the exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBasisScalingKey();
  
  
  /**
   * Gets the value of the ExposureParty field.
   * Identifies that this field is the PolicyContactRole that is the exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isExposureParty();
  
  
  /**
   * Sets the value of the BasisScalingKey field.
   */
  public void setBasisScalingKey(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Exposure field.
   */
  public void setExposure(entity.APDExposure value);
  
  
  public void setExposureID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ExposureParty field.
   */
  public void setExposureParty(java.lang.Boolean value);
  
  
  
}