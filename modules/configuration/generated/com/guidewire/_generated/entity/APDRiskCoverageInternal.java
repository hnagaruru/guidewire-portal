package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskCoverage.eti;APDRiskCoverage.eix;APDRiskCoverage.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDRiskCoverageInternal extends com.guidewire._generated.entity.APDRiskClauseInternal {
  /**
   * Adds the given element to the CostPricing array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCostPricing(entity.APDRiskCovPricing element);
  
  
  /**
   * Adds the given element to the RiskCovCosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRiskCovCosts(entity.APDRiskCovCost element);
  
  
  /**
   * Gets the value of the CostPricing field.
   * Pricing for this coverage that are used to create costs
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskCovPricing[] getCostPricing();
  
  
  /**
   * Gets the value of the Coverage field.
   * The coverage pattern defining this coverage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCoverage getCoverage();
  
  
  public gw.pl.persistence.core.Key getCoverageID();
  
  
  /**
   * Gets the value of the RiskCovCosts field.
   * The cost of this coverage (itemised)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskCovCost[] getRiskCovCosts();
  
  
  /**
   * Gets the value of the ThirdPartyUnderwriter field.
   * The organisation that underwrites the coverage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProducerCode getThirdPartyUnderwriter();
  
  
  public gw.pl.persistence.core.Key getThirdPartyUnderwriterID();
  
  
  /**
   * Removes the given element from the CostPricing array. This is achieved by marking the element for removal.
   */
  public void removeFromCostPricing(entity.APDRiskCovPricing element);
  
  
  /**
   * Removes the given element from the CostPricing array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCostPricing(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the RiskCovCosts array. This is achieved by marking the element for removal.
   */
  public void removeFromRiskCovCosts(entity.APDRiskCovCost element);
  
  
  /**
   * Removes the given element from the RiskCovCosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRiskCovCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the CostPricing field.
   */
  public void setCostPricing(entity.APDRiskCovPricing[] value);
  
  
  /**
   * Sets the value of the Coverage field.
   */
  public void setCoverage(entity.APDCoverage value);
  
  
  public void setCoverageID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the RiskCovCosts field.
   */
  public void setRiskCovCosts(entity.APDRiskCovCost[] value);
  
  
  /**
   * Sets the value of the ThirdPartyUnderwriter field.
   */
  public void setThirdPartyUnderwriter(entity.ProducerCode value);
  
  
  public void setThirdPartyUnderwriterID(gw.pl.persistence.core.Key value);
  
  
  
}