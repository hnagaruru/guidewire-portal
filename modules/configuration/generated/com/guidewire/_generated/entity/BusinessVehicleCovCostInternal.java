package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BusinessVehicleCovCost.eti;BusinessVehicleCovCost.eix;BusinessVehicleCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BusinessVehicleCovCostInternal extends com.guidewire._generated.entity.BACostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the BusinessVehicleCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BusinessVehicleCov getBusinessVehicleCov();
  
  
  public gw.pl.persistence.core.Key getBusinessVehicleCovID();
  
  
  /**
   * Sets the value of the BusinessVehicleCov field.
   */
  public void setBusinessVehicleCov(entity.BusinessVehicleCov value);
  
  
  public void setBusinessVehicleCovID(gw.pl.persistence.core.Key value);
  
  
  
}