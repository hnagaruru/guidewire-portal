package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPCovPartSchCovItemCovCost.eti;HOPCovPartSchCovItemCovCost.eix;HOPCovPartSchCovItemCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface HOPCovPartSchCovItemCovCostInternal extends com.guidewire._generated.entity.HOPCostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the HOPCovPartSchCovItemCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPCovPartSchCovItemCov getHOPCovPartSchCovItemCov();
  
  
  public gw.pl.persistence.core.Key getHOPCovPartSchCovItemCovID();
  
  
  /**
   * Sets the value of the HOPCovPartSchCovItemCov field.
   */
  public void setHOPCovPartSchCovItemCov(entity.HOPCovPartSchCovItemCov value);
  
  
  public void setHOPCovPartSchCovItemCovID(gw.pl.persistence.core.Key value);
  
  
  
}