package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPCovBuildingCost.eti;BOPCovBuildingCost.eix;BOPCovBuildingCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BOPCovBuildingCostInternal extends com.guidewire._generated.entity.BOPCovCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the BOPBuilding field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BOPBuilding getBOPBuilding();
  
  
  public gw.pl.persistence.core.Key getBOPBuildingID();
  
  
  /**
   * Sets the value of the BOPBuilding field.
   */
  public void setBOPBuilding(entity.BOPBuilding value);
  
  
  public void setBOPBuildingID(gw.pl.persistence.core.Key value);
  
  
  
}