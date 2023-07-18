package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLCovExposureCost.eti;GLCovExposureCost.eix;GLCovExposureCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GLCovExposureCostInternal extends com.guidewire._generated.entity.GLCovCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the GLExposure field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GLExposure getGLExposure();
  
  
  public gw.pl.persistence.core.Key getGLExposureID();
  
  
  /**
   * Sets the value of the GLExposure field.
   */
  public void setGLExposure(entity.GLExposure value);
  
  
  public void setGLExposureID(gw.pl.persistence.core.Key value);
  
  
  
}