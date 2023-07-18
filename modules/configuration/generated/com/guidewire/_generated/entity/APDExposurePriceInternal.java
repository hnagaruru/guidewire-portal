package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDExposurePrice.eti;APDExposurePrice.eix;APDExposurePrice.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDExposurePriceInternal extends com.guidewire._generated.entity.EffDatedInternal {
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDExposurePrice getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the CoveragePricing field.
   * The coverage pricing to which this exposure price belongs
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskCovPricing getCoveragePricing();
  
  
  public gw.pl.persistence.core.Key getCoveragePricingID();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDExposurePrice getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the Rate field.
   * The rate, excluding adjustments, to apply to the basis
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getRate();
  
  
  /**
   * Gets the value of the RiskCoverable field.
   * The risk coverable (as an exposure) being priced
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskCoverable getRiskCoverable();
  
  
  public gw.pl.persistence.core.Key getRiskCoverableID();
  
  
  /**
   * Gets the value of the RiskExposure field.
   * The risk exposure being priced
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskExposure getRiskExposure();
  
  
  public gw.pl.persistence.core.Key getRiskExposureID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDExposurePrice getSubtype();
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.APDExposurePrice value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the CoveragePricing field.
   */
  public void setCoveragePricing(entity.APDRiskCovPricing value);
  
  
  public void setCoveragePricingID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.APDExposurePrice value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Rate field.
   */
  public void setRate(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the RiskCoverable field.
   */
  public void setRiskCoverable(entity.APDRiskCoverable value);
  
  
  public void setRiskCoverableID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the RiskExposure field.
   */
  public void setRiskExposure(entity.APDRiskExposure value);
  
  
  public void setRiskExposureID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.APDExposurePrice value);
  
  
  
}