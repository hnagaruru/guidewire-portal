package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ContrEquipPartCost.eti;ContrEquipPartCost.eix;ContrEquipPartCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ContrEquipPartCostInternal extends com.guidewire._generated.entity.IMTaxableCostInternal {
  /**
   * Gets the value of the ContractorsEquipPart field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ContractorsEquipPart getContractorsEquipPart();
  
  
  public gw.pl.persistence.core.Key getContractorsEquipPartID();
  
  
  /**
   * Sets the value of the ContractorsEquipPart field.
   */
  public void setContractorsEquipPart(entity.ContractorsEquipPart value);
  
  
  public void setContractorsEquipPartID(gw.pl.persistence.core.Key value);
  
  
  
}