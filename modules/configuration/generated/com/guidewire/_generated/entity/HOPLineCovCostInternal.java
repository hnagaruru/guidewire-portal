package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineCovCost.eti;HOPLineCovCost.eix;HOPLineCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface HOPLineCovCostInternal extends com.guidewire._generated.entity.HOPCostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the HOPLineCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPLineCov getHOPLineCov();
  
  
  public gw.pl.persistence.core.Key getHOPLineCovID();
  
  
  /**
   * Sets the value of the HOPLineCov field.
   */
  public void setHOPLineCov(entity.HOPLineCov value);
  
  
  public void setHOPLineCovID(gw.pl.persistence.core.Key value);
  
  
  
}