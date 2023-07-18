package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDCostCodeFilter.eti;APDCostCodeFilter.eix;APDCostCodeFilter.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDCostCodeFilterInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the CostCode field.
   * The cost code included
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CostCode getCostCode();
  
  
  public gw.pl.persistence.core.Key getCostCodeID();
  
  
  /**
   * Gets the value of the CostDefinition field.
   * The cost definition that is filtered
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCostDefinition getCostDefinition();
  
  
  public gw.pl.persistence.core.Key getCostDefinitionID();
  
  
  /**
   * Sets the value of the CostCode field.
   */
  public void setCostCode(entity.CostCode value);
  
  
  public void setCostCodeID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the CostDefinition field.
   */
  public void setCostDefinition(entity.APDCostDefinition value);
  
  
  public void setCostDefinitionID(gw.pl.persistence.core.Key value);
  
  
  
}