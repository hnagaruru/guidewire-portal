package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskCovPricing.eti;APDRiskCovPricing.eix;APDRiskCovPricing.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDRiskCovPricingInternal extends com.guidewire._generated.entity.APDPricingInternal {
  /**
   * Adds the given element to the ExposurePrices array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToExposurePrices(entity.APDExposurePrice element);
  
  
  /**
   * Gets the value of the ExposurePrices field.
   * The set of prices used when rating by exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDExposurePrice[] getExposurePrices();
  
  
  /**
   * Gets the value of the RiskCoverage field.
   * The coverage for which this will create a cost
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskCoverage getRiskCoverage();
  
  
  public gw.pl.persistence.core.Key getRiskCoverageID();
  
  
  /**
   * Removes the given element from the ExposurePrices array. This is achieved by marking the element for removal.
   */
  public void removeFromExposurePrices(entity.APDExposurePrice element);
  
  
  /**
   * Removes the given element from the ExposurePrices array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromExposurePrices(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the ExposurePrices field.
   */
  public void setExposurePrices(entity.APDExposurePrice[] value);
  
  
  /**
   * Sets the value of the RiskCoverage field.
   */
  public void setRiskCoverage(entity.APDRiskCoverage value);
  
  
  public void setRiskCoverageID(gw.pl.persistence.core.Key value);
  
  
  
}