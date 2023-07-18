package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskCovCost.eti;APDRiskCovCost.eix;APDRiskCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDRiskCovCostInternal extends com.guidewire._generated.entity.APDCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the Exposure field.
   * The exposure to which this relates (when there is exposure based pricing)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskExposure getExposure();
  
  
  public gw.pl.persistence.core.Key getExposureID();
  
  
  /**
   * Gets the value of the Risk field.
   * The entity to which this relates (when there is entity/coverable based pricing)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskCoverable getRisk();
  
  
  /**
   * Gets the value of the RiskCoverage field.
   * The coverage to which this cost applies
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskCoverage getRiskCoverage();
  
  
  public gw.pl.persistence.core.Key getRiskCoverageID();
  
  
  public gw.pl.persistence.core.Key getRiskID();
  
  
  /**
   * Sets the value of the Exposure field.
   */
  public void setExposure(entity.APDRiskExposure value);
  
  
  public void setExposureID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Risk field.
   */
  public void setRisk(entity.APDRiskCoverable value);
  
  
  /**
   * Sets the value of the RiskCoverage field.
   */
  public void setRiskCoverage(entity.APDRiskCoverage value);
  
  
  public void setRiskCoverageID(gw.pl.persistence.core.Key value);
  
  
  public void setRiskID(gw.pl.persistence.core.Key value);
  
  
  
}