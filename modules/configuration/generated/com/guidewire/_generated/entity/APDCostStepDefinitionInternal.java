package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDCostStepDefinition.eti;APDCostStepDefinition.eix;APDCostStepDefinition.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDCostStepDefinitionInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the CostDefinition field.
   * The cost for which this is a calculation step
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCostDefinition getCostDefinition();
  
  
  public gw.pl.persistence.core.Key getCostDefinitionID();
  
  
  /**
   * Gets the value of the Description field.
   * Describes what this step is, including key factors
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the PrimaryFactor field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDAttribute getPrimaryFactor();
  
  
  public gw.pl.persistence.core.Key getPrimaryFactorID();
  
  
  /**
   * Sets the value of the CostDefinition field.
   */
  public void setCostDefinition(entity.APDCostDefinition value);
  
  
  public void setCostDefinitionID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the PrimaryFactor field.
   */
  public void setPrimaryFactor(entity.APDAttribute value);
  
  
  public void setPrimaryFactorID(gw.pl.persistence.core.Key value);
  
  
  
}