package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDPricing.eti;APDPricing.eix;APDPricing.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDPricingInternal extends com.guidewire._generated.entity.EffDatedInternal {
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDPricing getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the CostDefinition field.
   * The definition of this price
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCostDefinition getCostDefinition();
  
  
  public gw.pl.persistence.core.Key getCostDefinitionID();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDPricing getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the Rate field.
   * The rate, excluding adjustments, to apply to the basis
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getRate();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDPricing getSubtype();
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.APDPricing value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the CostDefinition field.
   */
  public void setCostDefinition(entity.APDCostDefinition value);
  
  
  public void setCostDefinitionID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.APDPricing value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Rate field.
   */
  public void setRate(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.APDPricing value);
  
  
  
}