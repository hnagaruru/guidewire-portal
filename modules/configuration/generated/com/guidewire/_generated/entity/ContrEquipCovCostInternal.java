package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ContrEquipCovCost.eti;ContrEquipCovCost.eix;ContrEquipCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ContrEquipCovCostInternal extends com.guidewire._generated.entity.ContrEquipPartCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the ContractorsEquipCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ContractorsEquipCov getContractorsEquipCov();
  
  
  public gw.pl.persistence.core.Key getContractorsEquipCovID();
  
  
  /**
   * Sets the value of the ContractorsEquipCov field.
   */
  public void setContractorsEquipCov(entity.ContractorsEquipCov value);
  
  
  public void setContractorsEquipCovID(gw.pl.persistence.core.Key value);
  
  
  
}