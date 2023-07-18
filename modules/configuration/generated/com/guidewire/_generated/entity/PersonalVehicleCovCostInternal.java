package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PersonalVehicleCovCost.eti;PersonalVehicleCovCost.eix;PersonalVehicleCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PersonalVehicleCovCostInternal extends com.guidewire._generated.entity.PACoveragePremiumInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the PersonalVehicleCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PersonalVehicleCov getPersonalVehicleCov();
  
  
  public gw.pl.persistence.core.Key getPersonalVehicleCovID();
  
  
  /**
   * Sets the value of the PersonalVehicleCov field.
   */
  public void setPersonalVehicleCov(entity.PersonalVehicleCov value);
  
  
  public void setPersonalVehicleCovID(gw.pl.persistence.core.Key value);
  
  
  
}