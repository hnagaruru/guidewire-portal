package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ContrEquipPartCovCost.eti;ContrEquipPartCovCost.eix;ContrEquipPartCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ContrEquipPartCovCostInternal extends com.guidewire._generated.entity.ContrEquipPartCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the ContrEquipPartCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ContrEquipPartCov getContrEquipPartCov();
  
  
  public gw.pl.persistence.core.Key getContrEquipPartCovID();
  
  
  /**
   * Sets the value of the ContrEquipPartCov field.
   */
  public void setContrEquipPartCov(entity.ContrEquipPartCov value);
  
  
  public void setContrEquipPartCovID(gw.pl.persistence.core.Key value);
  
  
  
}