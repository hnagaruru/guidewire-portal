package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMSignCovCost.eti;IMSignCovCost.eix;IMSignCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface IMSignCovCostInternal extends com.guidewire._generated.entity.IMSignPartCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the IMSignCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IMSignCov getIMSignCov();
  
  
  public gw.pl.persistence.core.Key getIMSignCovID();
  
  
  /**
   * Sets the value of the IMSignCov field.
   */
  public void setIMSignCov(entity.IMSignCov value);
  
  
  public void setIMSignCovID(gw.pl.persistence.core.Key value);
  
  
  
}