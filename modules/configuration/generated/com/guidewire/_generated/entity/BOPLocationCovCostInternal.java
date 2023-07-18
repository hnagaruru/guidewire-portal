package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPLocationCovCost.eti;BOPLocationCovCost.eix;BOPLocationCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BOPLocationCovCostInternal extends com.guidewire._generated.entity.BOPCoveragePremiumInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the BOPLocationCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BOPLocationCov getBOPLocationCov();
  
  
  public gw.pl.persistence.core.Key getBOPLocationCovID();
  
  
  /**
   * Sets the value of the BOPLocationCov field.
   */
  public void setBOPLocationCov(entity.BOPLocationCov value);
  
  
  public void setBOPLocationCovID(gw.pl.persistence.core.Key value);
  
  
  
}