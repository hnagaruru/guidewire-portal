package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskExposureField.eti;APDRiskExposureField.eix;APDRiskExposureField.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDRiskExposureFieldInternal extends com.guidewire._generated.entity.APDDataFieldInternal {
  /**
   * Gets the value of the RiskExposure field.
   * The exposure for which this is a field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskExposure getRiskExposure();
  
  
  public gw.pl.persistence.core.Key getRiskExposureID();
  
  
  /**
   * Sets the value of the RiskExposure field.
   */
  public void setRiskExposure(entity.APDRiskExposure value);
  
  
  public void setRiskExposureID(gw.pl.persistence.core.Key value);
  
  
  
}