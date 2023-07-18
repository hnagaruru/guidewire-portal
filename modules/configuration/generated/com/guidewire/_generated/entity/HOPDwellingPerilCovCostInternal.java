package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellingPerilCovCost.eti;HOPDwellingPerilCovCost.eix;HOPDwellingPerilCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface HOPDwellingPerilCovCostInternal extends com.guidewire._generated.entity.HOPDwellingCovCostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the RatedPeril field.
   * Rated peril for dwelling coverage cost
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RatedPeril getRatedPeril();
  
  
  /**
   * Sets the value of the RatedPeril field.
   */
  public void setRatedPeril(typekey.RatedPeril value);
  
  
  
}