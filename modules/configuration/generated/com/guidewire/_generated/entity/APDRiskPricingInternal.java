package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskPricing.eti;APDRiskPricing.eix;APDRiskPricing.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDRiskPricingInternal extends com.guidewire._generated.entity.APDPricingInternal {
  /**
   * Gets the value of the RiskCoverable field.
   * The coverable for which this will create a cost
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