package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineSchCovItemCovCost.eti;HOPLineSchCovItemCovCost.eix;HOPLineSchCovItemCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface HOPLineSchCovItemCovCostInternal extends com.guidewire._generated.entity.HOPCostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the HOPLineSchCovItemCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPLineSchCovItemCov getHOPLineSchCovItemCov();
  
  
  public gw.pl.persistence.core.Key getHOPLineSchCovItemCovID();
  
  
  /**
   * Sets the value of the HOPLineSchCovItemCov field.
   */
  public void setHOPLineSchCovItemCov(entity.HOPLineSchCovItemCov value);
  
  
  public void setHOPLineSchCovItemCovID(gw.pl.persistence.core.Key value);
  
  
  
}