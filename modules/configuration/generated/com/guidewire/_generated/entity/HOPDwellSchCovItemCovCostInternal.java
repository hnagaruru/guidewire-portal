package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellSchCovItemCovCost.eti;HOPDwellSchCovItemCovCost.eix;HOPDwellSchCovItemCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface HOPDwellSchCovItemCovCostInternal extends com.guidewire._generated.entity.HOPCostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the HOPDwellSchCovItemCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwellSchCovItemCov getHOPDwellSchCovItemCov();
  
  
  public gw.pl.persistence.core.Key getHOPDwellSchCovItemCovID();
  
  
  /**
   * Sets the value of the HOPDwellSchCovItemCov field.
   */
  public void setHOPDwellSchCovItemCov(entity.HOPDwellSchCovItemCov value);
  
  
  public void setHOPDwellSchCovItemCovID(gw.pl.persistence.core.Key value);
  
  
  
}