package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCStateMultiplier.eti;WCStateMultiplier.eix;WCStateMultiplier.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface WCStateMultiplierInternal extends com.guidewire._generated.entity.EffDatedInternal {
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCStateMultiplier getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the FederalExcessLossFactor field.
   * Federal Excess Loss factor
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getFederalExcessLossFactor();
  
  
  /**
   * Gets the value of the FederalTaxMultiplier field.
   * The federal tax multiplier
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getFederalTaxMultiplier();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCStateMultiplier getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the State field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getState();
  
  
  /**
   * Gets the value of the StateExcessLossFactor field.
   * State Excess Loss factor
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getStateExcessLossFactor();
  
  
  /**
   * Gets the value of the StateTaxMultiplier field.
   * The state tax multiplier
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getStateTaxMultiplier();
  
  
  /**
   * Gets the value of the WCRetrospectiveRatingPlan field.
   * The retro plan for which this state multiplier applies
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCRetrospectiveRatingPlan getWCRetrospectiveRatingPlan();
  
  
  public gw.pl.persistence.core.Key getWCRetrospectiveRatingPlanID();
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.WCStateMultiplier value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the FederalExcessLossFactor field.
   */
  public void setFederalExcessLossFactor(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the FederalTaxMultiplier field.
   */
  public void setFederalTaxMultiplier(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.WCStateMultiplier value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the State field.
   */
  public void setState(typekey.Jurisdiction value);
  
  
  /**
   * Sets the value of the StateExcessLossFactor field.
   */
  public void setStateExcessLossFactor(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the StateTaxMultiplier field.
   */
  public void setStateTaxMultiplier(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the WCRetrospectiveRatingPlan field.
   */
  public void setWCRetrospectiveRatingPlan(entity.WCRetrospectiveRatingPlan value);
  
  
  public void setWCRetrospectiveRatingPlanID(gw.pl.persistence.core.Key value);
  
  
  
}