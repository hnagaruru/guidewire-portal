package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPMoneySecCovCost.eti;BOPMoneySecCovCost.eix;BOPMoneySecCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BOPMoneySecCovCostInternal extends com.guidewire._generated.entity.BOPLocationCovCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the OnPremises field.
   * Whether the money covered is on the premises or off it
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isOnPremises();
  
  
  /**
   * Sets the value of the OnPremises field.
   */
  public void setOnPremises(java.lang.Boolean value);
  
  
  
}