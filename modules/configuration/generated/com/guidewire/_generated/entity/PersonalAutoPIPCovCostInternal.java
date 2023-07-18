package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PersonalAutoPIPCovCost.eti;PersonalAutoPIPCovCost.eix;PersonalAutoPIPCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PersonalAutoPIPCovCostInternal extends com.guidewire._generated.entity.PersonalAutoCovCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the PAPIPCovCostType field.
   * The type of PIP coverage where this cost applies
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PAPIPCovCostType getPAPIPCovCostType();
  
  
  /**
   * Sets the value of the PAPIPCovCostType field.
   */
  public void setPAPIPCovCostType(typekey.PAPIPCovCostType value);
  
  
  
}