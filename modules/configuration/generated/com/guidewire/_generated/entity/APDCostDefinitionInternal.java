package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDCostDefinition.eti;APDCostDefinition.eix;APDCostDefinition.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDCostDefinitionInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Adds the given element to the CostCodeFilters array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCostCodeFilters(entity.APDCostCodeFilter element);
  
  
  /**
   * Adds the given element to the CostSteps array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCostSteps(entity.APDCostStepDefinition element);
  
  
  /**
   * Gets the value of the Basis field.
   * The term/coverable attribute used as the basis, if appropriate
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDAttribute getBasis();
  
  
  public gw.pl.persistence.core.Key getBasisID();
  
  
  /**
   * Gets the value of the CostCode field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CostCode getCostCode();
  
  
  /**
   * Gets the value of the CostCodeFilters field.
   * If set, accumulated costs accumulate for only these cost codes when calculating the basis
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCostCodeFilter[] getCostCodeFilters();
  
  
  public gw.pl.persistence.core.Key getCostCodeID();
  
  
  /**
   * Gets the value of the CostSteps field.
   * The optional steps defined to create this price
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCostStepDefinition[] getCostSteps();
  
  
  /**
   * Gets the value of the JurisdictionFilter field.
   * If set, accumulated costs accumulate for only this jurisdiction when calculating the basis
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getJurisdictionFilter();
  
  
  /**
   * Gets the value of the PricingOrder field.
   * The order in which the price is calculated (within its set)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getPricingOrder();
  
  
  /**
   * Gets the value of the RateAmountTypeFilter field.
   * If set, accumulated costs accumulate for only this rate amount type when calculating the basis
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RateAmountType getRateAmountTypeFilter();
  
  
  /**
   * Gets the value of the RatingScale field.
   * The scale of the basis to which the rate is applied
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RatingScale getRatingScale();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDCostDefinition getSubtype();
  
  
  /**
   * Gets the value of the CumulativeCostBasis field.
   * If true, the basis is the sum of prior calculated costs
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCumulativeCostBasis();
  
  
  /**
   * Gets the value of the SeparateBilling field.
   * If true, this cost will create an individual debtors charge for billing
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isSeparateBilling();
  
  
  /**
   * Gets the value of the SeparateCollection field.
   * If true, this cost will create an individual debtors charge for cash allocation
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isSeparateCollection();
  
  
  /**
   * Removes the given element from the CostCodeFilters array. This is achieved by marking the element for removal.
   */
  public void removeFromCostCodeFilters(entity.APDCostCodeFilter element);
  
  
  /**
   * Removes the given element from the CostCodeFilters array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCostCodeFilters(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the CostSteps array. This is achieved by marking the element for removal.
   */
  public void removeFromCostSteps(entity.APDCostStepDefinition element);
  
  
  /**
   * Removes the given element from the CostSteps array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCostSteps(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Basis field.
   */
  public void setBasis(entity.APDAttribute value);
  
  
  public void setBasisID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the CostCode field.
   */
  public void setCostCode(entity.CostCode value);
  
  
  /**
   * Sets the value of the CostCodeFilters field.
   */
  public void setCostCodeFilters(entity.APDCostCodeFilter[] value);
  
  
  public void setCostCodeID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the CostSteps field.
   */
  public void setCostSteps(entity.APDCostStepDefinition[] value);
  
  
  /**
   * Sets the value of the CumulativeCostBasis field.
   */
  public void setCumulativeCostBasis(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the JurisdictionFilter field.
   */
  public void setJurisdictionFilter(typekey.Jurisdiction value);
  
  
  /**
   * Sets the value of the PricingOrder field.
   */
  public void setPricingOrder(java.lang.Integer value);
  
  
  /**
   * Sets the value of the RateAmountTypeFilter field.
   */
  public void setRateAmountTypeFilter(typekey.RateAmountType value);
  
  
  /**
   * Sets the value of the RatingScale field.
   */
  public void setRatingScale(typekey.RatingScale value);
  
  
  /**
   * Sets the value of the SeparateBilling field.
   */
  public void setSeparateBilling(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the SeparateCollection field.
   */
  public void setSeparateCollection(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.APDCostDefinition value);
  
  
  
}