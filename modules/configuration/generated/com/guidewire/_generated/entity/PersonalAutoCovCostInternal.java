package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PersonalAutoCovCost.eti;PersonalAutoCovCost.eix;PersonalAutoCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PersonalAutoCovCostInternal extends com.guidewire._generated.entity.PACoveragePremiumInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the PersonalAutoCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PersonalAutoCov getPersonalAutoCov();
  
  
  public gw.pl.persistence.core.Key getPersonalAutoCovID();
  
  
  /**
   * Gets the value of the PersonalVehicle field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PersonalVehicle getPersonalVehicle();
  
  
  public gw.pl.persistence.core.Key getPersonalVehicleID();
  
  
  /**
   * Sets the value of the PersonalAutoCov field.
   */
  public void setPersonalAutoCov(entity.PersonalAutoCov value);
  
  
  public void setPersonalAutoCovID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PersonalVehicle field.
   */
  public void setPersonalVehicle(entity.PersonalVehicle value);
  
  
  public void setPersonalVehicleID(gw.pl.persistence.core.Key value);
  
  
  
}