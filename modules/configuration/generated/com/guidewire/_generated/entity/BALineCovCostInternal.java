package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BALineCovCost.eti;BALineCovCost.eix;BALineCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BALineCovCostInternal extends com.guidewire._generated.entity.BACostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the BusinessAutoCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BusinessAutoCov getBusinessAutoCov();
  
  
  public gw.pl.persistence.core.Key getBusinessAutoCovID();
  
  
  /**
   * Sets the value of the BusinessAutoCov field.
   */
  public void setBusinessAutoCov(entity.BusinessAutoCov value);
  
  
  public void setBusinessAutoCovID(gw.pl.persistence.core.Key value);
  
  
  
}