package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BAStateCovCost.eti;BAStateCovCost.eix;BAStateCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BAStateCovCostInternal extends com.guidewire._generated.entity.BACostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the BAStateCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BAStateCov getBAStateCov();
  
  
  public gw.pl.persistence.core.Key getBAStateCovID();
  
  
  /**
   * Sets the value of the BAStateCov field.
   */
  public void setBAStateCov(entity.BAStateCov value);
  
  
  public void setBAStateCovID(gw.pl.persistence.core.Key value);
  
  
  
}