package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDCoverage.eti;APDCoverage.eix;APDCoverage.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDCoverageInternal extends com.guidewire._generated.entity.APDClauseInternal {
  /**
   * Adds the given element to the ClaimCategories array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToClaimCategories(entity.APDCoverageClaim element);
  
  
  /**
   * Adds the given element to the CostDefinitions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCostDefinitions(entity.APDCoverageCostDefinition element);
  
  
  /**
   * Adds the given element to the Perils array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPerils(entity.APDCoveragePeril element);
  
  
  /**
   * Gets the value of the ClaimCategories field.
   * The claim categories appropriate to this coverage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCoverageClaim[] getClaimCategories();
  
  
  /**
   * Gets the value of the CostDefinitions field.
   * The definition of costs that apply to this coverage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCoverageCostDefinition[] getCostDefinitions();
  
  
  /**
   * Gets the value of the Perils field.
   * The perils included in the coverage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCoveragePeril[] getPerils();
  
  
  /**
   * Gets the value of the PricingOrder field.
   * The order in which the price is calculated (within its set)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getPricingOrder();
  
  
  /**
   * Gets the value of the SeparateBilling field.
   * If true, this coverage will create an individual debtors charge items for billing
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isSeparateBilling();
  
  
  /**
   * Gets the value of the SeparateCollection field.
   * If true, this coverage will create an individual debtors charge for cash allocation
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isSeparateCollection();
  
  
  /**
   * Gets the value of the WrittenByThirdParty field.
   * If true, this product is written by another insurance company (captured as an organisation)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isWrittenByThirdParty();
  
  
  /**
   * Removes the given element from the ClaimCategories array. This is achieved by marking the element for removal.
   */
  public void removeFromClaimCategories(entity.APDCoverageClaim element);
  
  
  /**
   * Removes the given element from the ClaimCategories array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromClaimCategories(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the CostDefinitions array. This is achieved by marking the element for removal.
   */
  public void removeFromCostDefinitions(entity.APDCoverageCostDefinition element);
  
  
  /**
   * Removes the given element from the CostDefinitions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCostDefinitions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Perils array. This is achieved by marking the element for removal.
   */
  public void removeFromPerils(entity.APDCoveragePeril element);
  
  
  /**
   * Removes the given element from the Perils array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPerils(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the ClaimCategories field.
   */
  public void setClaimCategories(entity.APDCoverageClaim[] value);
  
  
  /**
   * Sets the value of the CostDefinitions field.
   */
  public void setCostDefinitions(entity.APDCoverageCostDefinition[] value);
  
  
  /**
   * Sets the value of the Perils field.
   */
  public void setPerils(entity.APDCoveragePeril[] value);
  
  
  /**
   * Sets the value of the PricingOrder field.
   */
  public void setPricingOrder(java.lang.Integer value);
  
  
  /**
   * Sets the value of the SeparateBilling field.
   */
  public void setSeparateBilling(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the SeparateCollection field.
   */
  public void setSeparateCollection(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the WrittenByThirdParty field.
   */
  public void setWrittenByThirdParty(java.lang.Boolean value);
  
  
  
}