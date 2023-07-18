package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPCovCost.eti;BOPCovCost.eix;BOPCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BOPCovCostInternal extends com.guidewire._generated.entity.BOPCoveragePremiumInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the BusinessOwnersCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BusinessOwnersCov getBusinessOwnersCov();
  
  
  public gw.pl.persistence.core.Key getBusinessOwnersCovID();
  
  
  /**
   * Sets the value of the BusinessOwnersCov field.
   */
  public void setBusinessOwnersCov(entity.BusinessOwnersCov value);
  
  
  public void setBusinessOwnersCovID(gw.pl.persistence.core.Key value);
  
  
  
}