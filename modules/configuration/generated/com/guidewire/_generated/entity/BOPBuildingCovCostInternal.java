package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPBuildingCovCost.eti;BOPBuildingCovCost.eix;BOPBuildingCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BOPBuildingCovCostInternal extends com.guidewire._generated.entity.BOPCoveragePremiumInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the BOPBuildingCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BOPBuildingCov getBOPBuildingCov();
  
  
  public gw.pl.persistence.core.Key getBOPBuildingCovID();
  
  
  /**
   * Sets the value of the BOPBuildingCov field.
   */
  public void setBOPBuildingCov(entity.BOPBuildingCov value);
  
  
  public void setBOPBuildingCovID(gw.pl.persistence.core.Key value);
  
  
  
}