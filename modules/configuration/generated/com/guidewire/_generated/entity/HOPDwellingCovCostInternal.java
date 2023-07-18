package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellingCovCost.eti;HOPDwellingCovCost.eix;HOPDwellingCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface HOPDwellingCovCostInternal extends com.guidewire._generated.entity.HOPCostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the HOPDwellingCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwellingCov getHOPDwellingCov();
  
  
  public gw.pl.persistence.core.Key getHOPDwellingCovID();
  
  
  /**
   * Sets the value of the HOPDwellingCov field.
   */
  public void setHOPDwellingCov(entity.HOPDwellingCov value);
  
  
  public void setHOPDwellingCovID(gw.pl.persistence.core.Key value);
  
  
  
}