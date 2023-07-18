package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskCost.eti;APDRiskCost.eix;APDRiskCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDRiskCostInternal extends com.guidewire._generated.entity.APDCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the RiskCoverable field.
   * The coverable to which this cost applies
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskCoverable getRiskCoverable();
  
  
  public gw.pl.persistence.core.Key getRiskCoverableID();
  
  
  /**
   * Sets the value of the RiskCoverable field.
   */
  public void setRiskCoverable(entity.APDRiskCoverable value);
  
  
  public void setRiskCoverableID(gw.pl.persistence.core.Key value);
  
  
  
}