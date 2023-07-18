package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPBuildingCovCost.eti;CPBuildingCovCost.eix;CPBuildingCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface CPBuildingCovCostInternal extends com.guidewire._generated.entity.CPCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the CPBuildingCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CPBuildingCov getCPBuildingCov();
  
  
  public gw.pl.persistence.core.Key getCPBuildingCovID();
  
  
  /**
   * Sets the value of the CPBuildingCov field.
   */
  public void setCPBuildingCov(entity.CPBuildingCov value);
  
  
  public void setCPBuildingCovID(gw.pl.persistence.core.Key value);
  
  
  
}