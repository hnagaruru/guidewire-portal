package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLCovCost.eti;GLCovCost.eix;GLCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GLCovCostInternal extends com.guidewire._generated.entity.GLCostInternal {
  /**
   * Gets the value of the GeneralLiabilityCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GeneralLiabilityCov getGeneralLiabilityCov();
  
  
  public gw.pl.persistence.core.Key getGeneralLiabilityCovID();
  
  
  /**
   * Sets the value of the GeneralLiabilityCov field.
   */
  public void setGeneralLiabilityCov(entity.GeneralLiabilityCov value);
  
  
  public void setGeneralLiabilityCovID(gw.pl.persistence.core.Key value);
  
  
  
}