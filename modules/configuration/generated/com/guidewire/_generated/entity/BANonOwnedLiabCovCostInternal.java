package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BANonOwnedLiabCovCost.eti;BANonOwnedLiabCovCost.eix;BANonOwnedLiabCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BANonOwnedLiabCovCostInternal extends com.guidewire._generated.entity.BAStateCovCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the BANonOwnedLiabCovCostType field.
   * @deprecated deprecated - use BALineCovNonownedCost since non owned coverages have now been moved to the line level
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BANonOwnedLiabCovCostType getBANonOwnedLiabCovCostType();
  
  
  /**
   * Sets the value of the BANonOwnedLiabCovCostType field.
   * @deprecated deprecated - use BALineCovNonownedCost since non owned coverages have now been moved to the line level
   */
  @java.lang.Deprecated
  public void setBANonOwnedLiabCovCostType(typekey.BANonOwnedLiabCovCostType value);
  
  
  
}